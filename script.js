/* FP Library — site-wide motion & interaction layer */
(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initScrollProgress() {
    const bar = document.createElement('div');
    bar.className = 'site-scroll-progress';
    bar.innerHTML = '<span></span>';
    document.body.appendChild(bar);

    const fill = bar.firstElementChild;

    function update() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      fill.style.width = Math.min(100, Math.max(0, progress)) + '%';
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  function initRevealAnimations() {
    const selectors = [
      '.section-heading',
      '.ai-notebook-ad',
      '.module-search',
      '.upload-notice',
      '.semester-block',
      '.module-ratings-intro-item',
      '.module-rating-note',
      '.document-category-card',
      '.upload-panel',
      '.system-info-card'
    ];

    const elements = document.querySelectorAll(selectors.join(','));
    elements.forEach(function (element, index) {
      element.classList.add('motion-reveal');

      if (element.classList.contains('semester-block')) {
        element.style.setProperty('--motion-delay', Math.min((index % 4) * 70, 210) + 'ms');
      }
    });

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach(function (element) {
        element.classList.add('is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(function (element) {
      observer.observe(element);
    });
  }

  function initModuleCardMotion() {
    const cards = document.querySelectorAll('.module-card');
    cards.forEach(function (card, index) {
      card.classList.add('motion-card');
      card.style.setProperty('--card-delay', Math.min((index % 6) * 45, 225) + 'ms');
    });
  }

  function initActiveNavigation() {
    const links = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
    const sections = links
      .map(function (link) {
        return document.querySelector(link.getAttribute('href'));
      })
      .filter(Boolean);

    if (!sections.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        links.forEach(function (link) {
          link.classList.toggle(
            'is-current',
            link.getAttribute('href') === '#' + entry.target.id
          );
        });
      });
    }, {
      rootMargin: '-25% 0px -60% 0px',
      threshold: 0
    });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (event) {
        const id = link.getAttribute('href');
        if (!id || id === '#') return;

        const target = document.querySelector(id);
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start'
        });

        history.replaceState(null, '', id);
      });
    });
  }

  function initHeroParallax() {
    if (prefersReducedMotion) return;

    const hero = document.querySelector('.hero-section, #home');
    if (!hero) return;

    let ticking = false;

    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(function () {
        const y = Math.min(window.scrollY, 500);
        hero.style.setProperty('--hero-shift', (y * 0.08) + 'px');
        ticking = false;
      });
    }, { passive: true });
  }

  function init() {
    document.documentElement.classList.add('js-motion-ready');

    initScrollProgress();
    initRevealAnimations();
    initModuleCardMotion();
    initActiveNavigation();
    initSmoothAnchors();
    initHeroParallax();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
