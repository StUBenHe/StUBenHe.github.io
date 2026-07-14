/* ============================================================
   Personal Website — Ben He
   Interactive Scripts
   ============================================================ */

(function () {
  'use strict';

  // ─── Translations ──────────────────────────────────────
  const T = {
    de: {
      'meta-desc': 'Ben He — AI Engineer & Robotics Engineer. Elektrotechnik-Student am KIT mit Schwerpunkt auf KI, Robotik und intelligenter Automatisierung.',
      'nav-home': 'Zur Startseite',
      'nav-main': 'Hauptnavigation',
      'nav-about': 'Über mich',
      'nav-edu': 'Ausbildung',
      'nav-exp': 'Erfahrung',
      'nav-proj': 'Projekte',
      'nav-skills': 'Kompetenzen',
      'nav-contact': 'Kontakt',
      'lang-switch': 'Switch to English',
      'theme-switch': 'Design umschalten',
      'menu-open': 'Menü öffnen',
      'hero-greeting': 'Hallo, ich bin',
      'hero-subtitle': 'Elektrotechnik & Informationstechnik (B.Sc.) · KI · Robotik · Intelligente Automatisierung',
      'hero-cta': 'Kontakt',
      'scroll': 'Scroll',
      'about-title': 'Über mich',
      'about-text': 'Elektrotechnikstudent am KIT mit Schwerpunkt auf <strong>KI, Robotik und intelligenter Automatisierung</strong>. Ich strebe eine Tätigkeit als <strong>AI Engineer</strong> oder <strong>Robotics Engineer</strong> an — mit Erfahrung in LLM-basierten Anwendungen, Computer Vision, ROS&nbsp;2 und Digital-Twin-Systemen.',
      'about-photo': 'Persönliche Vorstellung',
      'portrait-alt': 'Portrait von Ben He',
      'edu-title': 'Ausbildung',
      'edu-kit-degree': 'B.Sc. Elektrotechnik und Informationstechnik',
      'edu-kit-note': 'Voraussichtlicher Abschluss: 09/2026',
      'edu-yz-degree': 'Informations- und Informatikwissenschaften',
      'edu-yz-note': 'Wechsel ans KIT',
      'exp-title': 'Universitäre Projekterfahrung',
      'exp-thesis-title': 'Bachelorarbeit: Design einer Digital-Twin-Infrastruktur für Robotik',
      'exp-thesis-1': 'Entwicklung einer Python-Toolchain (Submodel Generator) zur automatischen Extraktion von URDF-/YAML-Daten in sechs semantische AAS-Teilmodelle: <em>Struktur, Kinematik, Dynamik, Steuerung, Sicherheit, Visualisierung</em>.',
      'exp-thesis-2': 'Multi-Robot-Generator instanziiert vollautomatisch komplexe ROS-2-Simulationen aus AAS-Daten — ohne manuelle Konfiguration.',
      'exp-thesis-3': 'Validierung auf heterogenen Robotersystemen (Universal Robots & igus ReBeL): URDF → AAS → Simulation, Ende-zu-Ende.',
      'exp-eti-title': 'Werkstudent – Leistungselektronik & Hardware-Design',
      'exp-eti-1': 'Entwurf und Simulation eines Buck-Wandlers in MATLAB/Simulink; Erzielung einer Ausgangsspannungswelligkeit <5% unter variablen Lastbedingungen.',
      'exp-eti-2': 'Vollständige PCB-Schaltplanerstellung, Layout und elektrische Regelprüfung in Altium Designer.',
      'exp-itiv-title': 'Werkstudent – Autonomes Fahren (Prototyping)',
      'exp-itiv-tag': 'Sensorfusion',
      'exp-itiv-1': 'Entwicklung eingebetteter C++-Software für einen autonomen Fahrzeugprototyp (Maßstab 1:10) mit Echtzeit-Hinderniserkennung und -vermeidung auf einem Dual-Core ARM MCU.',
      'proj-title': 'Projekte',
      'proj-agent-title': 'KI-gestützter Automatisierungsagent für Kundenbeschwerden',
      'proj-agent-meta': 'Persönliches KI-Projekt · 2025',
      'proj-agent-desc': 'LLM-basierter Agent zur End-to-End-Automatisierung von Kundenbeschwerden — von Ticketanalyse und automatisierter Wissensabfrage über interne Dokumentationen bis zur finalen E-Mail-Generierung. Integration von RAG (Retrieval-Augmented Generation) zum Abgleich mit Produktspezifikationen. Reduzierung der durchschnittlichen Bearbeitungszeit um ∼80%.',
      'proj-fitlog-title': 'Full-Stack Gesundheits-App „Fitlog"',
      'proj-fitlog-meta': 'Persönliches KI-Projekt · 01/2025 – heute',
      'proj-fitlog-desc': 'Full-Stack-System mit Android-Client (MVVM) und serverseitiger KI-Pipeline zur automatisierten Kalorienschätzung von Lebensmitteln durch Bilderkennung. REST API + lokale/entfernte Datenbanksynchronisation (Room + Remote DB) mit offlinefähiger Architektur.',
      'proj-dream-title': 'Psychologisches Kartenspiel „Dream Cards"',
      'proj-dream-meta': 'Persönliches KI-Projekt · 06/2026 – heute',
      'proj-dream-desc': 'Kartenspiel zur Unterbewusstseinsanalyse, inspiriert von OH-/OK-Karten, das assoziative Bilder zur Selbstreflexion nutzt. Serverseitige Logik für Kartenziehen, Sitzungsverwaltung und interpretative Anleitung auf demselben Backend wie Fitlog.',
      'skills-title': 'Kompetenzen',
      'skills-ai': '🤖 KI & LLM',
      'skills-prog': '💻 Programmierung',
      'skills-robo': '🦾 Robotik',
      'skills-mobile': '📱 Mobile & Web',
      'skills-tools': '🛠 Tools & DevOps',
      'skills-lang': '🌐 Sprachen',
      'lang-zh': 'Chinesisch (Muttersprache)',
      'lang-de': 'Deutsch (C1 / DSH-3)',
      'lang-en': 'Englisch (B2 / Fachkundig)',
      'awards-title': 'Auszeichnungen',
      'award-1-title': 'Top 10 — MATLAB-Programmierwettbewerb',
      'award-1-meta': 'Yangtze Universität, 2019',
      'award-2-title': '2. Preis — Wettbewerb Mathematische Theoreme',
      'award-2-meta': 'Yangtze Universität, 2018',
      'contact-title': 'Kontakt',
      'contact-intro': 'Ich bin immer offen für neue Möglichkeiten und spannende Projekte. Sprechen Sie mich gerne an!',
      'contact-email': 'E-Mail',
      'contact-phone': 'Telefon',
      'contact-loc': 'Standort',
      'contact-loc-val': 'Karlsruhe, Deutschland',
      'footer-text': '© 2026 Ben He. Alle Rechte vorbehalten.',
      'back-top': 'Zurück nach oben',
    },
    en: {
      'meta-desc': 'Ben He — AI Engineer & Robotics Engineer. Electrical Engineering student at KIT specializing in AI, robotics and intelligent automation.',
      'nav-home': 'Home',
      'nav-main': 'Main navigation',
      'nav-about': 'About',
      'nav-edu': 'Education',
      'nav-exp': 'Experience',
      'nav-proj': 'Projects',
      'nav-skills': 'Skills',
      'nav-contact': 'Contact',
      'lang-switch': 'Auf Deutsch wechseln',
      'theme-switch': 'Toggle theme',
      'menu-open': 'Open menu',
      'hero-greeting': "Hello, I'm",
      'hero-subtitle': 'Electrical Engineering & Information Technology (B.Sc.) · AI · Robotics · Intelligent Automation',
      'hero-cta': 'Contact',
      'scroll': 'Scroll',
      'about-title': 'About Me',
      'about-text': 'Electrical engineering student at KIT specializing in <strong>AI, robotics and intelligent automation</strong>. I am pursuing a career as an <strong>AI Engineer</strong> or <strong>Robotics Engineer</strong> — with experience in LLM-based applications, computer vision, ROS&nbsp;2 and digital twin systems.',
      'about-photo': 'Personal introduction',
      'portrait-alt': 'Portrait of Ben He',
      'edu-title': 'Education',
      'edu-kit-degree': 'B.Sc. Electrical Engineering and Information Technology',
      'edu-kit-note': 'Expected graduation: 09/2026',
      'edu-yz-degree': 'Information and Computing Science',
      'edu-yz-note': 'Transferred to KIT',
      'exp-title': 'University Project Experience',
      'exp-thesis-title': "Bachelor's Thesis: Design of a Digital Twin Infrastructure for Robotics",
      'exp-thesis-1': 'Development of a Python toolchain (Submodel Generator) for automatic extraction of URDF/YAML data into six semantic AAS submodels: <em>Structure, Kinematics, Dynamics, Control, Safety, Visualization</em>.',
      'exp-thesis-2': 'Multi-robot generator that fully automatically instantiates complex ROS 2 simulation scenarios from AAS data — no manual configuration required.',
      'exp-thesis-3': 'Validation of cross-platform interoperability on heterogeneous robot systems (Universal Robots & igus ReBeL): URDF → AAS → Simulation, end-to-end.',
      'exp-eti-title': 'Research Assistant – Power Electronics & Hardware Design',
      'exp-eti-1': 'Design and simulation of a buck converter in MATLAB/Simulink; achieved output voltage ripple <5% under variable load conditions.',
      'exp-eti-2': 'Complete PCB schematic design, layout and electrical rule checking in Altium Designer.',
      'exp-itiv-title': 'Research Assistant – Autonomous Driving (Prototyping)',
      'exp-itiv-tag': 'Sensor Fusion',
      'exp-itiv-1': 'Development of embedded C++ software for a 1:10 scale autonomous vehicle prototype with real-time obstacle detection and avoidance on a dual-core ARM MCU.',
      'proj-title': 'Projects',
      'proj-agent-title': 'AI-Powered Automation Agent for Customer Complaints',
      'proj-agent-meta': 'Personal AI Project · 2025',
      'proj-agent-desc': 'LLM-based agent for end-to-end automation of customer complaints — from ticket analysis and automated knowledge retrieval across internal documentation to final email generation. Integration of RAG (Retrieval-Augmented Generation) for matching product specifications. Reduced average processing time by ∼80%.',
      'proj-fitlog-title': 'Full-Stack Health App "Fitlog"',
      'proj-fitlog-meta': 'Personal AI Project · 01/2025 – present',
      'proj-fitlog-desc': 'Full-stack system with Android client (MVVM) and server-side AI pipeline for automated calorie estimation from food images. REST API + local/remote database synchronization (Room + Remote DB) with offline-capable architecture.',
      'proj-dream-title': 'Psychological Card Game "Dream Cards"',
      'proj-dream-meta': 'Personal AI Project · 06/2026 – present',
      'proj-dream-desc': 'Card game for subconscious analysis, inspired by OH/OK cards, using associative images for self-reflection. Server-side logic for card drawing, session management and interpretive guidance on the same backend as Fitlog.',
      'skills-title': 'Skills',
      'skills-ai': '🤖 AI & LLM',
      'skills-prog': '💻 Programming',
      'skills-robo': '🦾 Robotics',
      'skills-mobile': '📱 Mobile & Web',
      'skills-tools': '🛠 Tools & DevOps',
      'skills-lang': '🌐 Languages',
      'lang-zh': 'Chinese (Native)',
      'lang-de': 'German (C1 / DSH-3)',
      'lang-en': 'English (B2 / Proficient)',
      'awards-title': 'Awards',
      'award-1-title': 'Top 10 — MATLAB Programming Competition',
      'award-1-meta': 'Yangtze University, 2019',
      'award-2-title': '2nd Prize — Mathematical Theorems Competition',
      'award-2-meta': 'Yangtze University, 2018',
      'contact-title': 'Contact',
      'contact-intro': "I'm always open to new opportunities and exciting projects. Feel free to reach out!",
      'contact-email': 'Email',
      'contact-phone': 'Phone',
      'contact-loc': 'Location',
      'contact-loc-val': 'Karlsruhe, Germany',
      'footer-text': '© 2026 Ben He. All rights reserved.',
      'back-top': 'Back to top',
    },
  };

  // Typewriter titles per language
  const typewriterTitles = {
    de: [
      'AI & Robotics Engineer',
      'Digital Twin & ROS 2',
      'KI-gestützte Automatisierung',
      'Embedded Systems & Full-Stack',
    ],
    en: [
      'AI & Robotics Engineer',
      'Digital Twin & ROS 2',
      'Intelligent Automation',
      'Embedded Systems & Full-Stack',
    ],
  };

  // ─── DOM References ───────────────────────────────────────
  const DOM = {};
  function cacheDom() {
    DOM.navbar = document.getElementById('navbar');
    DOM.navLinks = document.getElementById('navLinks');
    DOM.navLinkItems = document.querySelectorAll('.nav-links a');
    DOM.hamburger = document.getElementById('hamburger');
    DOM.themeToggle = document.getElementById('themeToggle');
    DOM.langToggle = document.getElementById('langToggle');
    DOM.scrollProgress = document.getElementById('scrollProgress');
    DOM.heroTitle = document.getElementById('heroTitle');
    DOM.heroParticles = document.getElementById('heroParticles');
    DOM.backToTop = document.querySelector('.back-to-top');
    DOM.projectCards = document.querySelectorAll('.project-card');
    DOM.revealElements = document.querySelectorAll('.reveal');
    DOM.revealStaggerContainers = document.querySelectorAll('.reveal-stagger');
  }

  // ─── i18n System ───────────────────────────────────────
  let currentLang = 'de';
  let typewriterTimer = null;

  function getLang() {
    const saved = localStorage.getItem('lang');
    if (saved === 'en' || saved === 'de') return saved;
    const browserLang = navigator.language || '';
    return browserLang.startsWith('de') ? 'de' : 'de'; // default DE
  }

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    // Update lang toggle button
    if (DOM.langToggle) {
      DOM.langToggle.querySelector('span').textContent = lang === 'de' ? 'EN' : 'DE';
      DOM.langToggle.setAttribute('aria-label', T[lang]['lang-switch']);
    }

    // Update elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (T[lang][key]) {
        el.innerHTML = T[lang][key];
      }
    });

    // Update elements with data-i18n-aria
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      if (T[lang][key]) {
        el.setAttribute('aria-label', T[lang][key]);
      }
    });

    // Update elements with data-i18n-alt
    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const key = el.getAttribute('data-i18n-alt');
      if (T[lang][key]) {
        el.setAttribute('alt', T[lang][key]);
      }
    });

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && T[lang]['meta-desc']) {
      metaDesc.setAttribute('content', T[lang]['meta-desc']);
    }

    // Restart typewriter
    if (DOM.heroTitle) {
      if (typewriterTimer) clearTimeout(typewriterTimer);
      typewriter(DOM.heroTitle, typewriterTitles[lang], {
        typeSpeed: 55,
        deleteSpeed: 30,
        pauseBetween: 2800,
        pauseAfterDelete: 350,
      });
    }
  }

  function toggleLang() {
    setLang(currentLang === 'de' ? 'en' : 'de');
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

      const cursor = document.createElement('span');
      cursor.className = 'cursor';
      element.appendChild(cursor);

      let delay = isDeleting ? deleteSpeed : typeSpeed;

      if (!isDeleting && charIndex === currentText.length) {
        delay = pauseBetween;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        delay = pauseAfterDelete;
      }

      typewriterTimer = setTimeout(tick, delay);
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
      span.id = 'visitorCount';
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

    // Apply saved language first
    const lang = getLang();
    setLang(lang);

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

    // Theme toggle
    if (DOM.themeToggle) {
      DOM.themeToggle.addEventListener('click', toggleTheme);
    }

    // Language toggle
    if (DOM.langToggle) {
      DOM.langToggle.addEventListener('click', toggleLang);
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
