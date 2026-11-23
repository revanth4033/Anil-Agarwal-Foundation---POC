/* AAF Homepage: progressive enhancement. One optional dependency: Lenis
   (smooth wheel scrolling, CDN, see <head>); everything works without it.
   - Mobile navigation disclosure
   - Hero video: ambient muted loop; autoplays unless reduced motion (poster stays),
     pauses when off-screen, placeholder mode when no footage is present.
   - Hero: initiative slideshow (rail with progress lines)
   - People: a scroll-turned wheel of photo cards (initPeople)
   - Programmes: expanding photo cards (initProgrammes)
   - Where we work: map of India lit by initiative (initMap)
   - Stories: programme and Read / Watch filters (films live here now)
   - Resources: single-select type filter; sample actions that go nowhere yet
   - Impact: figures count up once when first in view
   - Motion: smooth scroll, scroll reveals, parallax, tucking header (initMotion)
   Structured as small init functions. */

(function () {
  'use strict';

  var smoothScroll = null;               // the Lenis instance, once initMotion has made one

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
    var panes = Array.prototype.slice.call(document.querySelectorAll('.hero__pane[data-pane]'));
    if (!video) return;

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    var hasSource = Boolean(video.getAttribute('src') || video.querySelector('source'));
    var stopped = reduceMotion.matches;      // reduced motion: no autoplay, poster frame stays

    if (!hasSource) media.classList.add('is-placeholder');

    // data-off is set by the initiative slideshow while another slide shows or it is paused.
    function play() {
      if (!hasSource || stopped || video.hasAttribute('data-off')) return;
      video.preload = 'auto';
      var p = video.play();
      if (p && typeof p.catch === 'function') {
        p.catch(function () { stopped = true; });   // autoplay blocked → poster stays
      }
    }

    video.muted = true;                      // ambient, always muted; autoplay requires it
    play();
    media.addEventListener('hero:play', play);

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

  /* ---------- Hero: initiative slides ---------- */
  // Five slides, one per initiative, each with its own copy panel
  // (.hero__pane[data-pane], matching the button's data-slide), opening on the one marked aria-current
  // (TACO, by review). The Nand Ghar film is the button marked data-film
  // (slide 03); the other slides show
  // stand-in stills (img[data-hero-slide] matching the button's data-slide)
  // until their films arrive. The active rail item's
  // progress line fills over its data-duration, then the next slide crossfades
  // in. Rotation holds while keyboard focus is in the rail, while the hero is
  // mostly off-screen or the tab is hidden. Under reduced motion it never
  // rotates on its own; the buttons still switch slides.
  function initHeroSlides() {
    var rail = document.querySelector('[data-hero-rail]');
    var media = document.querySelector('[data-hero-media]');
    if (!rail || !media) return;
    var buttons = Array.prototype.slice.call(rail.querySelectorAll('[data-slide]'));
    var video = media.querySelector('[data-hero-video]');
    var panes = Array.prototype.slice.call(document.querySelectorAll('.hero__pane[data-pane]'));
    var stills = {};
    Array.prototype.forEach.call(media.querySelectorAll('[data-hero-slide]'), function (img) {
      stills[img.getAttribute('data-hero-slide')] = img;
    });
    var n = buttons.length;
    var film = buttons.findIndex(function (b) { return b.hasAttribute('data-film'); });
    var current = Math.max(0, buttons.findIndex(function (b) { return b.getAttribute('aria-current') === 'true'; }));
    function key(i) { return buttons[((i % n) + n) % n].getAttribute('data-slide'); }
    var elapsed = 0;
    var last = null;
    var inView = true;
    var focused = false;
    var paused = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function load(i) {
      var img = stills[key(i)];
      if (img && !img.getAttribute('src')) img.src = img.getAttribute('data-src');
    }

    function syncVideo() {
      if (!video) return;
      if (current === film && !paused) {
        video.removeAttribute('data-off');
        media.dispatchEvent(new CustomEvent('hero:play'));
      } else {
        video.setAttribute('data-off', '');
        video.pause();
      }
    }

    function show(i) {
      current = (i + n) % n;
      elapsed = 0;
      buttons.forEach(function (b, k) {
        b.style.setProperty('--p', '0');
        if (k === current) b.setAttribute('aria-current', 'true');
        else b.removeAttribute('aria-current');
      });
      Object.keys(stills).forEach(function (k) {
        stills[k].classList.toggle('is-active', k === key(current));
      });
      panes.forEach(function (p) {                // the slide's own headline, copy, buttons and figures
        var on = p.getAttribute('data-pane') === key(current);
        p.classList.toggle('is-active', on);
        if (on) { p.removeAttribute('aria-hidden'); p.inert = false; }
        else { p.setAttribute('aria-hidden', 'true'); p.inert = true; }
      });
      load(current);
      load(current + 1);                       // preload the next still
      if (video && current === film) { try { video.currentTime = 0; } catch (e) {} }
      syncVideo();
    }


    function tick(t) {
      requestAnimationFrame(tick);
      var dt = last === null ? 0 : Math.min(100, t - last);
      last = t;
      if (paused || focused || !inView || document.hidden) return;
      elapsed += dt;
      var duration = Number(buttons[current].getAttribute('data-duration')) || 7000;
      buttons[current].style.setProperty('--p', Math.min(1, elapsed / duration).toFixed(4));
      if (elapsed >= duration) show(current + 1);
    }

    buttons.forEach(function (b, k) {
      b.addEventListener('click', function () { show(k); });
    });
    // Rotation holds while keyboard focus is in the rail or on a slide's buttons
    var holders = [rail].concat(panes.length ? [panes[0].parentNode] : []);
    holders.forEach(function (el) {
      el.addEventListener('focusin', function () { focused = true; });
      el.addEventListener('focusout', function (e) {
        focused = holders.some(function (h) { return h.contains(e.relatedTarget); });
      });
    });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        inView = entries[0].intersectionRatio >= 0.25;
      }, { threshold: [0, 0.25] }).observe(media.closest('.hero') || media);
    }

    show(current);                             // the opening slide, its still and the next one
    requestAnimationFrame(tick);
  }

  /* ---------- Where we work: map and figures ---------- */
  // Pointing at (or focusing) a figure keeps only that initiative's states and
  // pins lit; leaving the list returns to all, unless a figure was clicked,
  // which holds the choice (click again to release). Pointing at a lit state
  // or its pin shows a small label with the state and its initiatives.
  function initMap() {
    var root = document.querySelector('[data-map]');
    if (!root) return;
    var canvas = root.querySelector('.map__canvas');
    var tip = root.querySelector('[data-map-tip]');
    var rows = Array.prototype.slice.call(root.querySelectorAll('.reach'));
    var states = Array.prototype.slice.call(root.querySelectorAll('.map__state.is-lit'));
    var pins = Array.prototype.slice.call(root.querySelectorAll('.map__pin'));
    var held = null;

    function has(el, key) { return (' ' + el.getAttribute('data-initiatives') + ' ').indexOf(' ' + key + ' ') > -1; }

    function show(key) {
      root.classList.toggle('is-filtering', !!key);
      states.forEach(function (s) { s.classList.toggle('is-match', !!key && has(s, key)); });
      pins.forEach(function (p) {
        p.classList.toggle('is-match', !!key && has(p, key));
        Array.prototype.forEach.call(p.children, function (i) { i.classList.toggle('is-match', i.getAttribute('data-init') === key); });
      });
      rows.forEach(function (r) {
        r.classList.toggle('is-on', r.getAttribute('data-init') === key);
        r.setAttribute('aria-pressed', String(r.getAttribute('data-init') === held));
      });
    }

    rows.forEach(function (r) {
      var key = r.getAttribute('data-init');
      r.addEventListener('pointerenter', function (e) { if (e.pointerType !== 'touch') show(key); });
      r.addEventListener('focus', function () { show(key); });
      r.addEventListener('click', function () { held = held === key ? null : key; show(held || key); if (!held) show(null); });
    });
    var list = root.querySelector('.where__list');
    if (list) {
      list.addEventListener('pointerleave', function () { show(held); });
      list.addEventListener('focusout', function (e) { if (!list.contains(e.relatedTarget)) show(held); });
    }

    // Hover label for states and pins
    function label(slug, x, y) {
      var pin = root.querySelector('.map__pin[data-state="' + slug + '"]');
      if (!pin || !tip) return;
      tip.innerHTML = '';
      var b = document.createElement('strong');
      b.textContent = pin.getAttribute('data-label');
      tip.appendChild(b);
      tip.appendChild(document.createTextNode(pin.getAttribute('data-detail')));
      tip.style.left = pin.style.left;
      tip.style.top = pin.style.top;
      tip.classList.add('is-on');
      states.forEach(function (s) { s.classList.toggle('is-hot', s.getAttribute('data-state') === slug); });
    }
    function hide() {
      if (tip) tip.classList.remove('is-on');
      states.forEach(function (s) { s.classList.remove('is-hot'); });
    }
    states.concat(pins).forEach(function (el) {
      el.addEventListener('pointerenter', function () { label(el.getAttribute('data-state')); });
      el.addEventListener('pointerleave', hide);
    });
    if (canvas) canvas.addEventListener('pointerleave', hide);
  }

  /* ---------- Programmes: expanding cards ---------- */
  // The card you point at or tab into opens (takes the wide share of the row);
  // it stays open after the pointer leaves, until another card is chosen.
  // Without JS the first card (TACO) stays open.
  function initProgrammes() {
    var cards = Array.prototype.slice.call(document.querySelectorAll('.prog__list .pg'));
    if (cards.length < 2) return;
    function open(card) {
      cards.forEach(function (c) { c.classList.toggle('is-active', c === card); });
    }
    cards.forEach(function (card) {
      card.addEventListener('pointerenter', function (e) { if (e.pointerType !== 'touch') open(card); });
      card.addEventListener('focusin', function () { open(card); });
    });
  }

  /* ---------- People: the turning wheel ---------- */
  // Modelled on the Adani Foundation homepage. The section holds in place
  // (position: sticky) while the page scrolls through it; scroll progress
  // turns four photo cards through three positions: large in the centre,
  // small at the top left (the one before), small at the bottom right (the
  // next). Cards further away wait, invisible, beyond the side positions.
  // Each turn has a short hold at either end, so every group rests in the
  // centre for a moment. The centre card's story crossfades on the left.
  // Clicking a side card brings it to the centre. The stage is only as tall
  // as its content and holds centred in the window, so the section keeps
  // normal spacing above and below. Desktop only (>= 960px) and only with
  // motion allowed; otherwise the plain photo-and-story rows stay.
  function initPeople() {
    var section = document.querySelector('[data-people]');
    if (!section) return;
    var driver = section.querySelector('.people__driver');
    var orbit = section.querySelector('.people__orbit');
    var stage = section.querySelector('.people__stage');
    var suns = Array.prototype.slice.call(section.querySelectorAll('.people__sun'));
    var header = document.querySelector('[data-header]');
    var cards = Array.prototype.slice.call(section.querySelectorAll('.aud__media'));
    var bodies = Array.prototype.slice.call(section.querySelectorAll('.aud__body'));
    var n = cards.length;
    if (!driver || !orbit || !stage || n < 2) return;

    var wide = window.matchMedia('(min-width: 960px)');
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    var on = false;
    var ticking = false;
    var top = 0;                                         // where the stage holds, in CSS px

    function clamp(v, a, b) { return Math.min(b, Math.max(a, v)); }
    function smooth(x) { return x * x * (3 - 2 * x); }
    function lerp(a, b, f) { return a + (b - a) * f; }

    function zoom() { return parseFloat(getComputedStyle(document.documentElement).zoom) || 1; }

    // Hold the stage centred in the window, never under the floating header
    function layout() {
      var z = zoom();
      var headerSpace = (header ? header.offsetHeight : 80) + 16;
      top = Math.max(headerSpace, (window.innerHeight / z - stage.offsetHeight) / 2);
      section.style.setProperty('--stage-top', top.toFixed(1) + 'px');
      // Room to scroll while the stage holds: about 0.9 screen per turn
      driver.style.height = (stage.offsetHeight + (n - 1) * 0.9 * window.innerHeight / z).toFixed(0) + 'px';
    }

    // Scroll progress while the stage is held, 0 to 1 (window pixels throughout)
    function measure() {
      var z = zoom();
      var r = driver.getBoundingClientRect();
      return { start: r.top - top * z, dist: r.height - stage.offsetHeight * z };
    }
    function progress() {
      var m = measure();
      return m.dist > 0 ? clamp(-m.start / m.dist, 0, 1) : 0;
    }
    // Progress to wheel position (0 .. n-1), holding 15% at both ends of each turn
    function position(raw) {
      var seg = raw * (n - 1);
      var k = Math.min(Math.floor(seg), n - 2);
      var f = clamp((seg - k - 0.15) / 0.7, 0, 1);
      return k + smooth(f);
    }

    // The positions, measured on the stage (CSS pixels from its centre)
    function slots() {
      var W = orbit.offsetWidth, H = orbit.offsetHeight;
      var cw = cards[0].offsetWidth, ch = cards[0].offsetHeight;
      var overlap = 28;                                   // side cards tuck behind the centre card
      var s = clamp((W / 2 - cw / 2 + overlap) / cw, 0.4, 0.66);
      var sw = cw * s, sh = ch * s;
      var L = { x: -W / 2 + sw / 2, y: -H / 2 + sh / 2, s: s, o: 0.55 };
      var R = { x: W / 2 - sw / 2, y: H / 2 - sh / 2, s: s, o: 0.55 };
      return {
        L2: { x: L.x - 40, y: L.y - 30, s: s * 0.8, o: 0 },
        L: L,
        C: { x: 0, y: 0, s: 1, o: 1 },
        R: R,
        R2: { x: R.x + 40, y: R.y + 30, s: s * 0.8, o: 0 }
      };
    }

    function place(card, d, S) {
      var path = [S.L2, S.L, S.C, S.R, S.R2];           // d = -2 .. 2
      var u = clamp(d, -2, 2) + 2;
      var i = Math.min(Math.floor(u), 3);
      var f = u - i;
      var a = path[i], b = path[i + 1];
      var x = lerp(a.x, b.x, f), y = lerp(a.y, b.y, f);
      // Moving through the centre, cards ride a gentle arc rather than a straight line
      if (i === 1 || i === 2) y -= Math.sin(Math.PI * f) * 26;
      card.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px) scale(' + lerp(a.s, b.s, f).toFixed(4) + ')';
      card.style.opacity = lerp(a.o, b.o, f).toFixed(3);
      card.style.zIndex = String(10 - Math.round(Math.abs(d) * 3));
      card.classList.toggle('is-centre', Math.abs(d) < 0.5);
    }

    function render() {
      ticking = false;
      if (!on) return;
      var t = position(progress());
      var S = slots();
      cards.forEach(function (card, i) { place(card, i - t, S); });
      // The sunflowers in the circles turn with the wheel, in opposite directions
      suns.forEach(function (sun, i) { sun.style.rotate = ((i ? -1 : 1) * t * 24).toFixed(2) + 'deg'; });
      bodies.forEach(function (body, i) {
        var d = t - i;
        var o = clamp(1 - Math.abs(d) * 2.2, 0, 1);   // out, then in: never two stories at once
        body.style.opacity = o.toFixed(3);
        body.style.transform = 'translateY(' + (d * -24).toFixed(1) + 'px)';
        body.classList.toggle('is-away', o < 0.5);
      });
    }
    function request() { if (!ticking) { ticking = true; requestAnimationFrame(render); } }

    // Jump so that group i rests in the centre
    function go(i) {
      var m = measure();
      var y = window.scrollY + m.start + m.dist * (i / (n - 1));
      if (smoothScroll) smoothScroll.scrollTo(y, { duration: 1.2 });
      else window.scrollTo({ top: y, behavior: 'smooth' });
    }
    cards.forEach(function (card, i) {
      card.addEventListener('click', function () { if (on && !card.classList.contains('is-centre')) go(i); });
    });

    function setup() {
      var want = wide.matches && !reduce.matches;
      if (want === on) { request(); return; }
      on = want;
      section.classList.toggle('is-orbit', on);
      section.style.setProperty('--turns', String(n - 1));
      if (on) layout();
      else {
        section.style.removeProperty('--stage-top');
        driver.style.height = '';
        suns.forEach(function (sun) { sun.style.rotate = ''; });
        cards.concat(bodies).forEach(function (el) {
          el.style.transform = ''; el.style.opacity = ''; el.style.zIndex = '';
          el.classList.remove('is-centre', 'is-away');
        });
      }
      request();
    }

    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', function () { if (on) layout(); request(); });
    wide.addEventListener('change', setup);
    reduce.addEventListener('change', setup);
    setup();
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

  /* ---------- Stories: programme and format filters ---------- */
  // Two single-select groups that work together: programme chips
  // ([data-filter], matched to data-programme) and the Read / Watch switch
  // ([data-format-filter], matched to data-format). Either one set narrows the
  // page (.is-filtered: every matching story as a wide split). No match shows
  // the pending panel.
  function initStoryFilters() {
    var root = document.querySelector('[data-stories]');
    if (!root) return;
    var slice = Array.prototype.slice;
    var progButtons = slice.call(root.querySelectorAll('[data-filter]'));
    var formatButtons = slice.call(root.querySelectorAll('[data-format-filter]'));
    var stories = slice.call(root.querySelectorAll('[data-story]'));
    var grid = root.querySelector('[data-stories-grid]');
    var list = root.querySelector('[data-stories-list]');
    var empty = root.querySelector('[data-stories-empty]');
    var emptyText = root.querySelector('[data-stories-empty-text]');
    var status = root.querySelector('[data-stories-status]');
    var programme = 'all';
    var format = 'all';

    function labelOf(buttons, attr, key) {
      var b = buttons.filter(function (x) { return x.getAttribute(attr) === key; })[0];
      return b ? b.textContent.trim() : key;
    }

    function apply() {
      var shown = 0;
      var shownInList = 0;
      stories.forEach(function (story) {
        var on = (programme === 'all' || story.getAttribute('data-programme') === programme) &&
                 (format === 'all' || story.getAttribute('data-format') === format);
        story.hidden = !on;
        if (on) {
          shown += 1;
          if (list && list.contains(story)) shownInList += 1;
        }
      });
      if (list) list.hidden = shownInList === 0;
      root.classList.toggle('is-filtered', programme !== 'all' || format !== 'all');

      progButtons.forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-filter') === programme)); });
      formatButtons.forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-format-filter') === format)); });

      if (empty) {
        empty.hidden = shown > 0;
        if (!shown && emptyText) {
          // Pending-state wording, not approved site copy.
          var what = format === 'watch' ? 'film' : format === 'read' ? 'written story' : 'story';
          emptyText.textContent = 'No ' + labelOf(progButtons, 'data-filter', programme) + ' ' + what + ' has been supplied yet.';
        }
      }
      if (status) status.textContent = shown === 1 ? '1 story shown' : shown + ' stories shown';

      // Restart the entrance animation (CSS; skipped under reduced motion).
      if (grid) {
        grid.classList.remove('is-entering');
        void grid.offsetWidth;
        grid.classList.add('is-entering');
      }
    }

    progButtons.forEach(function (b) {
      b.addEventListener('click', function () { programme = b.getAttribute('data-filter'); apply(); });
    });
    formatButtons.forEach(function (b) {
      b.addEventListener('click', function () { format = b.getAttribute('data-format-filter'); apply(); });
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

  /* ---------- Motion layer: smooth scroll, reveals, parallax ---------- */
  // One layer for every scroll effect, so it can be tuned or switched off in
  // one place. Skipped entirely under reduced motion: the page then scrolls
  // natively and every element is simply visible.
  //   - Smooth (eased) wheel scrolling via Lenis, loaded from the CDN in <head>.
  //     Touch scrolling stays native. Without Lenis the rest still runs.
  //   - Reveals: [data-reveal] = up (fade and rise), words (heading words rise
  //     out of a mask), media (fade, photo settles from a slight zoom),
  //     group (children stagger in). Played once, the first time in view.
  //   - Parallax on large photographs, a scroll drift on the hero film,
  //     a slight sway on the sunflower line drawings.
  //   - The header pill tucks away while scrolling down and returns on the
  //     way up, or whenever it holds focus.
  // Reveals use the Web Animations API with the individual translate / scale
  // properties, so they never fight the CSS hover transforms on cards.
  function initMotion() {
    var root = document.documentElement;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window) || !Element.prototype.animate) return;

    var EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';      // expo out: quick start, long settle
    function all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
    function zoom() { return parseFloat(getComputedStyle(root).zoom) || 1; }   // the laptop scale (block 1a)
    function clamp(v, a, b) { return Math.min(b, Math.max(a, v)); }

    root.classList.add('has-motion');

    /* 1. Smooth scrolling */
    var lenis = null;
    if (typeof window.Lenis === 'function') {
      lenis = new window.Lenis({ lerp: 0.085, smoothWheel: true, wheelMultiplier: 1 });
      smoothScroll = lenis;
      var nav = document.querySelector('[data-nav]');
      if (nav) nav.setAttribute('data-lenis-prevent', '');      // the mobile menu scrolls on its own
      requestAnimationFrame(function raf(t) { lenis.raf(t); requestAnimationFrame(raf); });
    }

    // In-page links glide to their section, landing below the floating header.
    document.addEventListener('click', function (e) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var link = e.target.closest ? e.target.closest('a[href^="#"]') : null;
      if (!link || link.classList.contains('skip-link')) return;
      var id = link.getAttribute('href').slice(1);
      var target = id && document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      var margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
      var y = window.scrollY + target.getBoundingClientRect().top - margin * zoom();
      if (lenis) lenis.scrollTo(y, { duration: 1.4 });
      else window.scrollTo({ top: y, behavior: 'smooth' });
      if (history.pushState) history.pushState(null, '', '#' + id);
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });

    /* 2. Reveals */
    var REVEAL = {
      words: 'main h2',
      up: [
        'main .eyebrow', '.vg__intro', '.wwa__purpose', '.wwa__body', '.gp-b__figure', '.gp__body',
        '.prog__all', '.stories__all', '.stories__controls',
        '.story--featured', '.res__intro', '.res__filters', '.lead__feature .leader__body',
        '.nfeature', '.collab__body', '.collab__cta', '.collab__contact'
      ].join(','),
      media: '.where__map, .wwa__media, .gp-b__media, .irow__photo, .lead__feature .leader__portrait',
      group: [
        '.vg__bond', '.pp__steps', '.prog__list', '.where__list', '.irow__stats', '.stories__list',
        '.lead__pair', '.res__shelf', '.news__list', '.collab__circles',
        '.footer__grid'
      ].join(',')
    };

    Object.keys(REVEAL).forEach(function (type) {
      all(REVEAL[type]).forEach(function (el) {
        if (!el.hasAttribute('data-reveal')) el.setAttribute('data-reveal', type);
      });
    });

    // Headings: each word sits in a clipping mask and rises into place.
    all('[data-reveal="words"]').forEach(function (h) {
      var words = h.textContent.trim().split(/\s+/);
      h.textContent = '';
      words.forEach(function (word, i) {
        var mask = document.createElement('span');
        var inner = document.createElement('span');
        mask.className = 'w';
        inner.className = 'w__i';
        inner.textContent = word;
        mask.appendChild(inner);
        h.appendChild(mask);
        if (i < words.length - 1) h.appendChild(document.createTextNode(' '));
      });
    });

    function restScale(img) {
      var s = getComputedStyle(img).scale;
      return s && s !== 'none' ? parseFloat(s) : 1;
    }
    function settle(img, delay) {
      var rest = restScale(img);
      img.animate([{ scale: String(rest * 1.12) }, { scale: String(rest) }],
        { duration: 1600, delay: delay, easing: EASE, fill: 'backwards' });
    }
    function rise(el, delay, distance) {
      el.animate([{ opacity: 0, translate: '0 ' + (distance || 32) + 'px' }, { opacity: 1, translate: '0 0' }],
        { duration: 1000, delay: delay, easing: EASE, fill: 'backwards' });
    }
    function visible(el) { return el.getClientRects().length > 0; }

    function play(el, delay) {
      var type = el.getAttribute('data-reveal');
      if (type === 'words') {
        all('.w__i', el).forEach(function (w, i) {
          w.animate([{ translate: '0 110%' }, { translate: '0 0' }],
            { duration: 1100, delay: delay + i * 45, easing: EASE, fill: 'backwards' });
        });
      } else if (type === 'media') {
        el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 900, delay: delay, easing: 'ease-out', fill: 'backwards' });
        all('img', el).forEach(function (img) { settle(img, delay); });
      } else if (type === 'group') {
        Array.prototype.filter.call(el.children, visible).forEach(function (child, i) {
          var d = delay + i * 90;
          rise(child, d, 40);
          all('img', child).forEach(function (img) { settle(img, d); });
        });
      } else {
        rise(el, delay);
      }
      el.classList.add('is-revealed');
    }

    var io = new IntersectionObserver(function (entries) {
      var entering = entries.filter(function (e) { return e.isIntersecting; }).map(function (e) { return e.target; });
      entering.sort(function (a, b) { return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1; });
      entering.forEach(function (el, i) { io.unobserve(el); play(el, i * 90); });
    }, { rootMargin: '0px 0px -12% 0px' });
    all('[data-reveal]').forEach(function (el) { io.observe(el); });

    // Anything hidden when its section arrives (other tabs, filtered-out
    // cards) is marked revealed straight away, so it is visible when shown.
    var sweep = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        sweep.unobserve(e.target);
        all('[data-reveal]:not(.is-revealed)', e.target).forEach(function (el) {
          if (!visible(el)) { io.unobserve(el); el.classList.add('is-revealed'); }
        });
      });
    });
    all('main > section, .site-footer').forEach(function (s) { sweep.observe(s); });

    /* 3. Scroll-linked effects: parallax, hero drift, sunflower sway */
    var parallax = all('.wwa__media img, .gp-b__media img, .story--featured .story__media img, ' +
                       '.lead__feature .leader__portrait img, .nfeature__media img');
    parallax.forEach(function (img) { img.classList.add('is-parallax'); });
    var sway = all('.pp-sun, .istat__sun');
    var hero = document.querySelector('.hero');
    var heroMedia = hero && hero.querySelector('.hero__media');
    var heroContent = hero && hero.querySelector('.hero__content');
    var header = document.querySelector('[data-header]');
    var menuToggle = document.querySelector('[data-menu-toggle]');
    var lastY = window.scrollY;
    var ticking = false;

    // -1 when the element's centre is at the top of the viewport, 1 at the bottom.
    function progress(el, vh) {
      var r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return null;
      return clamp(((r.top + r.height / 2) - vh / 2) / (vh / 2 + r.height / 2), -1, 1);
    }

    function update() {
      ticking = false;
      var vh = window.innerHeight;
      var y = window.scrollY;
      var z = zoom();

      parallax.forEach(function (img) {
        var p = progress(img.parentElement, vh);
        if (p !== null) img.style.translate = '0 ' + (p * -5).toFixed(2) + '%';
      });
      sway.forEach(function (svg) {
        var p = progress(svg, vh);
        if (p !== null) svg.style.rotate = (p * 3).toFixed(2) + 'deg';
      });

      if (hero && heroMedia && heroContent) {
        var h = hero.offsetHeight * z;
        if (y < h) {
          var t = y / h;
          heroMedia.style.translate = '0 ' + (y * 0.35 / z).toFixed(1) + 'px';
          heroMedia.style.scale = String((1 + t * 0.06).toFixed(4));
          heroContent.style.translate = '0 ' + (y * 0.15 / z).toFixed(1) + 'px';
          heroContent.style.opacity = String(clamp(1 - (t - 0.15) * 1.5, 0, 1).toFixed(3));
        }
      }

      if (header) {
        var dy = y - lastY;
        if (Math.abs(dy) > 6) {
          var menuOpen = menuToggle && menuToggle.getAttribute('aria-expanded') === 'true';
          header.classList.toggle('is-tucked', dy > 0 && y > vh * 0.6 && !menuOpen);
          lastY = y;
        }
        if (y < 10) header.classList.remove('is-tucked');
      }
    }

    function requestUpdate() {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    update();
  }

  initMenu();
  initHeroVideo();
  initHeroSlides();
  initTabs();
  initPeople();
  initProgrammes();
  initMap();
  initStoryFilters();
  initResourceFilters();
  initPendingLinks();
  initCountUp();
  initMotion();
})();
