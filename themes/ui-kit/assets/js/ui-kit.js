/* ========================================================================
   UI KIT - Core Interactions & Helpers
   ======================================================================== */
(function() {
  'use strict';

  const UIK = {
    init() {
      this.cache();
      this.initTheme();
      this.bindEvents();
      this.initAOS();
      this.initScrollSpy();
      this.observeHeaders();
      this.activateCopyButtons();
      this.initCounters();
    },
    cache() {
      this.doc = document;
      this.body = document.body;
      this.backToTop = document.getElementById('backToTop');
      this.themeToggle = document.querySelector('[data-toggle="theme"]');
    },
    initTheme() {
      const saved = localStorage.getItem('uikit-theme');
      if (saved) {
        this.body.setAttribute('data-theme', saved);
        if (saved === 'light') this.themeToggle?.classList.add('active');
      }
    },
    toggleTheme() {
      const current = this.body.getAttribute('data-theme');
      const next = current === 'light' ? 'dark' : 'light';
      this.body.setAttribute('data-theme', next);
      localStorage.setItem('uikit-theme', next);
      this.themeToggle?.classList.toggle('active', next === 'light');
    },
    bindEvents() {
      window.addEventListener('scroll', () => this.onScroll());
      this.themeToggle?.addEventListener('click', () => this.toggleTheme());
      this.backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    },
    onScroll() {
      const y = window.scrollY;
      if (this.backToTop) {
        if (y > 400) this.backToTop.classList.add('show'); else this.backToTop.classList.remove('show');
      }
      const nav = document.querySelector('.uk-navbar');
      if (nav) nav.classList.toggle('navbar-scrolled', y > 40);
    },
    initAOS() {
      if (window.AOS) {
        AOS.init({
          offset: 80,
          duration: 700,
          easing: 'ease-out-cubic',
          delay: 40,
          once: false,
          mirror: false,
        });
      }
    },
    initScrollSpy() {
      const spied = document.querySelector('[data-bs-spy="scroll"]');
      if (spied) {
        bootstrap.ScrollSpy.getInstance(spied) || new bootstrap.ScrollSpy(spied, {
          target: '#ukNav',
          offset: 120
        });
      }
    },
    observeHeaders() {
      const headers = document.querySelectorAll('h2[id], h3[id]');
      if (!('IntersectionObserver' in window) || !headers.length) return;
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            const link = document.querySelector(`#ukNav [href="#${id}"]`);
            if (link) {
              document.querySelectorAll('#ukNav .nav-link').forEach(a => a.classList.remove('active'));
              link.classList.add('active');
            }
          }
        });
      }, { rootMargin: '0px 0px -70% 0px', threshold: 0 });
      headers.forEach(h => observer.observe(h));
    },
    activateCopyButtons() {
      document.querySelectorAll('.code-block .copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const pre = btn.closest('.code-block');
          const code = pre.querySelector('code')?.innerText.trim();
          if (!code) return;
          navigator.clipboard.writeText(code).then(() => {
            btn.classList.add('copied');
            btn.textContent = 'Copied';
            setTimeout(() => { btn.classList.remove('copied'); btn.textContent = 'Copy'; }, 1600);
          });
        });
      });
    },
    initCounters() {
      const counters = document.querySelectorAll('[data-counter]');
      if (!counters.length) return;
      const easeOut = t => 1 - Math.pow(1 - t, 3);
      const animate = el => {
        const end = parseInt(el.getAttribute('data-counter'), 10) || 0;
        const dur = parseInt(el.getAttribute('data-counter-duration'), 10) || 1400;
        const start = performance.now();
        const step = now => {
          const progress = Math.min(1, (now - start) / dur);
            el.textContent = Math.floor(easeOut(progress) * end).toLocaleString();
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animate(entry.target); io.unobserve(entry.target);
          }
        });
      }, { threshold: .5 });
      counters.forEach(c => io.observe(c));
    }
  };

  document.addEventListener('DOMContentLoaded', () => UIK.init());
})();
