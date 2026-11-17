/* AAF Homepage: minimal progressive enhancement. No dependencies.
   - Mobile navigation disclosure
   - Hero video: ambient muted loop; autoplays unless reduced motion (poster stays),
     pauses when off-screen, placeholder mode when no footage is present.
   - Programmes: the active index row shows its photograph on the shared stage
   - People: accessible tabs
   - Stories: single-select programme filter
   - Resources: single-select type filter; sample actions that go nowhere yet
   - Films: play buttons, ready for real video sources
   - Impact: figures count up once when first in view
   Structured as small init functions so a future GSAP/ScrollTrigger layer can sit alongside. */

(function () {
  'use strict';

  /* ---------- Mobile navigation ---------- */
  function initMenu() {
    var toggle = document.querySelector('[data-menu-toggle]');
    var nav = document.querySelector('[data-nav]');
    if (!toggle || !nav) return;
    var label = toggle.querySelector('[data-menu-label]');
    var desktop = window.matchMedia('(min-width: 1100px)');

    function setOpen(open) {
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
      if (label) label.textContent = open ? 'Close menu' : 'Open menu';
    }

    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });

    desktop.addEventListener('change', function (e) { if (e.matches) setOpen(false); });
  }

  /* ---------- Hero video ---------- */
  function initHeroVideo() {
    var media = document.querySelector('[data-hero-media]');
    if (!media) return;
    var video = media.querySelector('[data-hero-video]');
    if (!video) return;

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    var hasSource = Boolean(video.getAttribute('src') || video.querySelector('source'));
    var stopped = reduceMotion.matches;      // reduced motion: no autoplay, poster frame stays

    if (!hasSource) media.classList.add('is-placeholder');

    function play() {
      if (!hasSource || stopped) return;
      video.preload = 'auto';
      var p = video.play();
      if (p && typeof p.catch === 'function') {
        p.catch(function () { stopped = true; });   // autoplay blocked → poster stays
      }
    }

    video.muted = true;                      // ambient, always muted; autoplay requires it
    play();

    // Turning reduced motion on mid-visit stops the loop.
    reduceMotion.addEventListener('change', function (e) {
      if (e.matches) { stopped = true; video.pause(); }
    });

    // Pause once less than a quarter of the video is visible; resume when back in view.
    if ('IntersectionObserver' in window && hasSource) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.intersectionRatio < 0.25) { if (!video.paused) video.pause(); }
          else if (video.paused) play();
        });
      }, { threshold: [0, 0.25] }).observe(video);
    }
  }

  /* ---------- Programmes: editorial index with a shared image stage ---------- */
  // The row you point at, tap or tab into becomes active and shows its photograph.
  // Without JS the first row stays active and CSS :hover / :focus-within still works.
  function initProgrammeIndex() {
    var root = document.querySelector('[data-prog-index]');
    if (!root) return;
    var rows = Array.prototype.slice.call(root.querySelectorAll('[data-prog-row]'));

    function activate(row) {
      rows.forEach(function (r) { r.classList.toggle('is-active', r === row); });
    }

    rows.forEach(function (row) {
      row.addEventListener('pointerenter', function () { activate(row); });
      row.addEventListener('focusin', function () { activate(row); });
    });
  }

  /* ---------- Tabs (WAI-ARIA tabs pattern, automatic activation) ---------- */
  // Markup: [data-tabs][role=tablist] > [role=tab][aria-controls=panel-id]; panels use [hidden].
  // Keys: Left / Right move between tabs (wrapping), Home / End jump to first / last.
  function initTabs() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-tabs]'), function (list) {
      var tabs = Array.prototype.slice.call(list.querySelectorAll('[role="tab"]'));
      if (!tabs.length) return;

      function select(tab, moveFocus) {
        tabs.forEach(function (t) {
          var on = t === tab;
          var panel = document.getElementById(t.getAttribute('aria-controls'));
          t.setAttribute('aria-selected', String(on));
          t.tabIndex = on ? 0 : -1;
          if (panel) panel.hidden = !on;
        });
        if (moveFocus) tab.focus();
      }

      tabs.forEach(function (tab, i) {
        tab.addEventListener('click', function () { select(tab, false); });
        tab.addEventListener('keydown', function (e) {
          var next = null;
          if (e.key === 'ArrowRight') next = (i + 1) % tabs.length;
          else if (e.key === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length;
          else if (e.key === 'Home') next = 0;
          else if (e.key === 'End') next = tabs.length - 1;
          if (next === null) return;
          e.preventDefault();
          select(tabs[next], true);
        });
      });
    });
  }

  /* ---------- Stories: single-select programme filter ---------- */
  // Buttons carry data-filter and aria-pressed; stories carry data-programme.
  // "all" shows everything. A programme with no story shows the pending panel.
  function initStoryFilters() {
    var root = document.querySelector('[data-stories]');
    if (!root) return;
    var slice = Array.prototype.slice;
    var buttons = slice.call(root.querySelectorAll('[data-filter]'));
    var stories = slice.call(root.querySelectorAll('[data-story]'));
    var grid = root.querySelector('[data-stories-grid]');
    var list = root.querySelector('[data-stories-list]');
    var empty = root.querySelector('[data-stories-empty]');
    var emptyText = root.querySelector('[data-stories-empty-text]');
    var status = root.querySelector('[data-stories-status]');

    function apply(key, label) {
      var shown = 0;
      var shownInList = 0;

      stories.forEach(function (story) {
        var on = key === 'all' || story.getAttribute('data-programme') === key;
        story.hidden = !on;
        if (on) {
          shown += 1;
          if (list && list.contains(story)) shownInList += 1;
        }
      });

      if (list) list.hidden = shownInList === 0;
      root.classList.toggle('is-filtered', key !== 'all');

      buttons.forEach(function (b) {
        b.setAttribute('aria-pressed', String(b.getAttribute('data-filter') === key));
      });

      if (empty) {
        empty.hidden = shown > 0;
        // Pending-state wording, not approved site copy.
        if (!shown && emptyText) emptyText.textContent = 'No ' + label + ' story has been supplied yet.';
      }
      if (status) status.textContent = shown === 1 ? '1 story shown' : shown + ' stories shown';

      // Restart the entrance animation (CSS; skipped under reduced motion).
      if (grid) {
        grid.classList.remove('is-entering');
        void grid.offsetWidth;
        grid.classList.add('is-entering');
      }
    }

    buttons.forEach(function (b) {
      b.addEventListener('click', function () {
        apply(b.getAttribute('data-filter'), b.textContent.trim());
      });
    });
  }

  /* ---------- Resources: single-select type filter ---------- */
  // Buttons carry data-filter and aria-pressed; covers carry data-type.
  function initResourceFilters() {
    var root = document.querySelector('[data-resources]');
    if (!root) return;
    var slice = Array.prototype.slice;
    var buttons = slice.call(root.querySelectorAll('[data-filter]'));
    var items = slice.call(root.querySelectorAll('[data-resource]'));
    var grid = root.querySelector('[data-resources-grid]');
    var status = root.querySelector('[data-resources-status]');

    function apply(key) {
      var shown = 0;
      items.forEach(function (item) {
        var on = key === 'all' || item.getAttribute('data-type') === key;
        item.hidden = !on;
        if (on) shown += 1;
      });
      root.classList.toggle('is-filtered', key !== 'all');
      buttons.forEach(function (b) {
        b.setAttribute('aria-pressed', String(b.getAttribute('data-filter') === key));
      });
      if (status) status.textContent = shown === 1 ? '1 resource shown' : shown + ' resources shown';

      // Restart the entrance animation (CSS; skipped under reduced motion).
      if (grid) {
        grid.classList.remove('is-entering');
        void grid.offsetWidth;
        grid.classList.add('is-entering');
      }
    }

    buttons.forEach(function (b) {
      b.addEventListener('click', function () { apply(b.getAttribute('data-filter')); });
    });
  }

  /* ---------- Sample actions with no destination yet ---------- */
  // Links marked data-pending-link have no real file or page behind them.
  // Stop them from jumping to the top of the page. Remove the attribute when
  // the real href is added.
  function initPendingLinks() {
    document.addEventListener('click', function (e) {
      var link = e.target.closest ? e.target.closest('a[data-pending-link]') : null;
      if (link) e.preventDefault();
    });
  }

  /* ---------- Films: play buttons ---------- */
  // Each [data-film] article carries data-video-src. With a source, play opens
  // the film in a native <dialog>. Without one (all three today), play shows a
  // short "not available yet" note instead of pretending to play.
  function initFilms() {
    var buttons = document.querySelectorAll('[data-film-play]');
    if (!buttons.length) return;
    var dialog = null;

    function openPlayer(src) {
      if (!dialog) {
        dialog = document.createElement('dialog');
        dialog.className = 'film-dialog';
        dialog.innerHTML = '<video controls playsinline></video>' +
          '<button class="btn btn--secondary film-dialog__close" type="button">Close</button>';
        document.body.appendChild(dialog);
        dialog.querySelector('button').addEventListener('click', function () { dialog.close(); });
        dialog.addEventListener('close', function () { dialog.querySelector('video').pause(); });
      }
      var video = dialog.querySelector('video');
      video.src = src;
      dialog.showModal();
      var p = video.play();
      if (p && typeof p.catch === 'function') p.catch(function () {});   // closed before playback began
    }

    Array.prototype.forEach.call(buttons, function (btn) {
      btn.addEventListener('click', function () {
        var film = btn.closest('[data-film]');
        var src = film && film.getAttribute('data-video-src');
        if (src) { openPlayer(src); return; }

        var status = film && film.querySelector('[data-film-status]');
        if (!status) return;
        // Review-stage wording, not approved site copy.
        status.textContent = 'Film not available yet';
        status.classList.add('is-shown');
        clearTimeout(status._t);
        status._t = setTimeout(function () {
          status.classList.remove('is-shown');
          setTimeout(function () { status.textContent = ''; }, 300);
        }, 2400);
      });
    });
  }

  /* ---------- Impact figures: count up once, when first in view ---------- */
  // Each [data-count] holds its final figure as text; the animated copy is
  // aria-hidden and a visually hidden twin carries the real value for
  // screen readers. Skipped under reduced motion or without IntersectionObserver.
  function initCountUp() {
    var els = document.querySelectorAll('[data-count]');
    if (!els.length || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var fmt = new Intl.NumberFormat('en-US');

    function run(el) {
      var target = Number(el.getAttribute('data-count'));
      var final = el.textContent;
      // Hold the final width (measured in the loaded web font) so nothing
      // beside the figure moves while it counts.
      el.style.display = 'inline-block';
      el.style.minWidth = el.offsetWidth + 'px';   // layout width (unaffected by the page scale)
      var start = null, dur = 1600;
      function step(t) {
        if (start === null) start = t;
        var p = Math.min((t - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = p < 1 ? fmt.format(Math.round(target * eased)) : final;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        var ready = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
        ready.then(function () { run(e.target); });
      });
    }, { threshold: 0.4 });
    Array.prototype.forEach.call(els, function (el) { io.observe(el); });
  }

  initMenu();
  initHeroVideo();
  initProgrammeIndex();
  initTabs();
  initStoryFilters();
  initResourceFilters();
  initPendingLinks();
  initFilms();
  initCountUp();
})();
