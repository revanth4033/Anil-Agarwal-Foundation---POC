/* AAF Hero exploration: minimal progressive enhancement. No dependencies.
   - Mobile navigation disclosure
   - Hero video: ambient muted loop; autoplays unless reduced motion (poster stays),
     pauses when off-screen, placeholder mode when no footage is present.
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

  initMenu();
  initHeroVideo();
})();
