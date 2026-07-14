/* ============================================================
   Personal Website — Ben He
   Interactive Scripts
   ============================================================ */

(function () {
  'use strict';

  // ─── DOM References ───────────────────────────────────────
  const DOM = {};
  function cacheDom() {
    DOM.navbar = document.getElementById('navbar');
    DOM.navLinks = document.getElementById('navLinks');
    DOM.navLinkItems = document.querySelectorAll('.nav-links a');
    DOM.hamburger = document.getElementById('hamburger');
    DOM.themeToggle = document.getElementById('themeToggle');
    DOM.scrollProgress = document.getElementById('scrollProgress');
    DOM.heroTitle = document.getElementById('heroTitle');
    DOM.heroParticles = document.getElementById('heroParticles');
    DOM.backToTop = document.querySelector('.back-to-top');
    DOM.projectCards = document.querySelectorAll('.project-card');
    DOM.revealElements = document.querySelectorAll('.reveal');
    DOM.revealStaggerContainers = document.querySelectorAll('.reveal-stagger');
  }

  // ─── Theme Toggle ────────────────────────────────────────
  function initTheme() {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  }

  // ─── Typewriter Effect ──────────────────────────────────
  function typewriter(element, texts, opts = {}) {
    const {
      typeSpeed = 60,
      deleteSpeed = 35,
      pauseBetween = 2500,
      pauseAfterDelete = 400,
    } = opts;

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function tick() {
      const currentText = texts[textIndex];

      if (isDeleting) {
        element.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        element.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      // Insert blinking cursor span
      const cursor = document.createElement('span');
      cursor.className = 'cursor';
      element.appendChild(cursor);

      let delay = isDeleting ? deleteSpeed : typeSpeed;

      if (!isDeleting && charIndex === currentText.length) {
        // Finished typing — pause then start deleting
        delay = pauseBetween;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        // Finished deleting — move to next text
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        delay = pauseAfterDelete;
      }

      setTimeout(tick, delay);
    }

    tick();
  }

  // ─── Hero Particles Canvas ───────────────────────────────
  function initParticles() {
    if (!DOM.heroParticles) return;

    const canvas = DOM.heroParticles;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animFrame;

    function resize() {
      const hero = canvas.parentElement;
      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
    }

    function createParticles() {
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 60);
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          r: Math.random() * 1.8 + 0.4,
          alpha: Math.random() * 0.5 + 0.2,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const color = isDark ? '148, 163, 184' : '100, 116, 139';

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connecting lines for nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${color}, ${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animFrame = requestAnimationFrame(draw);
    }

    resize();
    createParticles();
    draw();

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });
  }

  // ─── Scroll Progress Bar ─────────────────────────────────
  function initScrollProgress() {
    if (!DOM.scrollProgress) return;
    window.addEventListener(
      'scroll',
      () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        DOM.scrollProgress.style.width = `${Math.min(progress, 100)}%`;
      },
      { passive: true }
    );
  }

  // ─── Navbar Active Link ──────────────────────────────────
  function initActiveNavLink() {
    const sections = [];
    DOM.navLinkItems.forEach((link) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const section = document.querySelector(href);
        if (section) sections.push({ link, section });
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            DOM.navLinkItems.forEach((link) => {
              link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s.section));
  }

  // ─── Scroll Reveal ──────────────────────────────────────
  function initScrollReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    DOM.revealElements.forEach((el) => observer.observe(el));

    DOM.revealStaggerContainers.forEach((container) => {
      const children = container.children;
      const staggerObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              Array.from(children).forEach((child, i) => {
                setTimeout(() => child.classList.add('visible'), i * 120);
              });
              staggerObserver.unobserve(container);
            }
          });
        },
        { threshold: 0.1 }
      );
      staggerObserver.observe(container);
    });
  }

  // ─── Mobile Navigation ───────────────────────────────────
  function initMobileNav() {
    if (!DOM.hamburger || !DOM.navLinks) return;

    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    document.body.appendChild(overlay);

    function open() {
      DOM.navLinks.classList.add('open');
      DOM.hamburger.classList.add('active');
      overlay.classList.add('active');
      DOM.hamburger.setAttribute('aria-expanded', 'true');
      DOM.hamburger.setAttribute('aria-label', 'Menü schließen');
      document.body.style.overflow = 'hidden';
    }

    function close() {
      DOM.navLinks.classList.remove('open');
      DOM.hamburger.classList.remove('active');
      overlay.classList.remove('active');
      DOM.hamburger.setAttribute('aria-expanded', 'false');
      DOM.hamburger.setAttribute('aria-label', 'Menü öffnen');
      document.body.style.overflow = '';
    }

    DOM.hamburger.addEventListener('click', () => {
      DOM.navLinks.classList.contains('open') ? close() : open();
    });

    overlay.addEventListener('click', close);

    DOM.navLinkItems.forEach((link) => {
      link.addEventListener('click', () => {
        if (DOM.navLinks.classList.contains('open')) close();
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && DOM.navLinks.classList.contains('open')) close();
    });
  }

  // ─── Mouse Tracking for Project Card Glow ────────────────
  function initProjectCardGlow() {
    DOM.projectCards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
      });
    });
  }

  // ─── Back to Top ─────────────────────────────────────────
  function initBackToTop() {
    if (!DOM.backToTop) return;
    DOM.backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ─── Navbar Shadow on Scroll ─────────────────────────────
  function initNavbarShadow() {
    if (!DOM.navbar) return;
    window.addEventListener(
      'scroll',
      () => {
        DOM.navbar.style.boxShadow = window.scrollY > 10
          ? '0 1px 3px rgba(0,0,0,0.08)'
          : '';
      },
      { passive: true }
    );
  }

  // ─── Visitor Counter (privacy-friendly) ──────────────────
  function initVisitorCounter() {
    const storageKey = 'benhe_visits';
    const now = Date.now();

    let data;
    try {
      data = JSON.parse(localStorage.getItem(storageKey)) || { count: 0, firstVisit: now, lastVisit: 0 };
    } catch {
      data = { count: 0, firstVisit: now, lastVisit: 0 };
    }

    if (now - data.lastVisit > 30 * 60 * 1000) {
      data.count++;
    }
    data.lastVisit = now;
    localStorage.setItem(storageKey, JSON.stringify(data));

    const footer = document.querySelector('.footer-content');
    if (footer && data.count > 0) {
      const span = document.createElement('span');
      span.style.cssText = 'font-size:0.85rem;color:var(--color-text-muted);';
      span.textContent = 'Besuche: ' + data.count;
      const btt = footer.querySelector('.back-to-top');
      if (btt) {
        footer.insertBefore(span, btt);
      } else {
        footer.appendChild(span);
      }
    }
  }

  // ─── Init Everything ─────────────────────────────────────
  function init() {
    cacheDom();
    initTheme();
    initScrollProgress();
    initNavbarShadow();
    initActiveNavLink();
    initMobileNav();
    initScrollReveal();
    initProjectCardGlow();
    initBackToTop();
    initParticles();
    initVisitorCounter();

    // Typewriter
    if (DOM.heroTitle) {
      const titles = [
        'AI & Robotics Engineer',
        'Digital Twin & ROS 2',
        'KI-gestützte Automatisierung',
        'Embedded Systems & Full-Stack',
      ];
      typewriter(DOM.heroTitle, titles, {
        typeSpeed: 55,
        deleteSpeed: 30,
        pauseBetween: 2800,
        pauseAfterDelete: 350,
      });
    }

    // Theme toggle
    if (DOM.themeToggle) {
      DOM.themeToggle.addEventListener('click', toggleTheme);
    }

    // System theme auto-switch
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
