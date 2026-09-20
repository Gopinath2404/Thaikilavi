/* ============================================
   PANDA BIRTHDAY WEBSITE - SCRIPT.JS
   All interactive functionality
   ============================================ */

(function () {
  'use strict';

  /* ============================================
     1. LOADING SCREEN ANIMATION
     ============================================ */
  function runLoadingScreen() {
    const loader = document.getElementById('loader');
    const loaderBar = document.getElementById('loaderBar');
    const loaderPercent = document.getElementById('loaderPercent');
    if (!loader || !loaderBar || !loaderPercent) return;

    let progress = 0;
    const targetProgress = 100;
    const interval = 30;

    const loadInterval = setInterval(() => {
      const increment = Math.random() * 5 + 1.5;
      progress = Math.min(progress + increment, targetProgress);
      loaderBar.style.width = progress + '%';
      loaderPercent.textContent = Math.floor(progress) + '%';

      if (progress >= targetProgress) {
        clearInterval(loadInterval);
        loaderBar.style.width = '100%';
        loaderPercent.textContent = '100%';
        setTimeout(() => {
          loader.classList.add('fade-out');
          setTimeout(() => {
            loader.style.display = 'none';
            triggerFirstConfettiBurst();
          }, 850);
        }, 450);
      }
    }, interval);
  }

  /* ============================================
     2. PANDA BACKGROUND SYSTEM
     ============================================ */
  function createPandaBackground() {
    const container = document.getElementById('pandaBackground');
    if (!container) return;

    const pandaEmojis = ['🐼', '🐼', '🐼', '🎋', '🐼🎁', '🐼💝', '🐼🐾', '🐼✨'];
    const sizes = ['size-xs', 'size-sm', 'size-md', 'size-lg', 'size-xl'];
    const animations = [
      'panda-walk-ltr',
      'panda-walk-rtl',
      'panda-float',
      'panda-bounce',
      'panda-wave',
      'panda-sleep',
      'panda-jump',
      'panda-swing'
    ];

    const numPandas = 22;

    for (let i = 0; i < numPandas; i++) {
      const panda = document.createElement('div');
      const sizeClass = sizes[Math.floor(Math.random() * sizes.length)];
      const animClass = animations[i % animations.length];
      const emoji = pandaEmojis[Math.floor(Math.random() * pandaEmojis.length)];

      panda.className = 'bg-panda ' + sizeClass + ' ' + animClass;
      panda.textContent = emoji;

      if (animClass === 'panda-walk-ltr' || animClass === 'panda-walk-rtl') {
        const top = Math.random() * 90 + 3;
        panda.style.top = top + '%';
        const duration = 40 + Math.random() * 50;
        panda.style.animationDuration = duration + 's';
      } else {
        const left = Math.random() * 95;
        const top = Math.random() * 95;
        panda.style.left = left + '%';
        panda.style.top = top + '%';
        const duration = 2.5 + Math.random() * 5;
        const delay = Math.random() * 3;
        panda.style.animationDuration = duration + 's';
        panda.style.animationDelay = delay + 's';
      }

      container.appendChild(panda);
    }
  }

  /* ============================================
     3. FLOATING HEARTS BACKGROUND
     ============================================ */
  function createFloatingHearts() {
    const heartsBg = document.getElementById('heartsBg');
    if (!heartsBg) return;

    const heartChars = ['❤️', '💕', '💗', '💖', '💘', '💝', '🩷'];

    function spawnHeart() {
      const heart = document.createElement('div');
      heart.className = 'floating-heart-bg';
      heart.textContent = heartChars[Math.floor(Math.random() * heartChars.length)];
      heart.style.left = Math.random() * 100 + 'vw';
      const duration = 7 + Math.random() * 9;
      heart.style.animationDuration = duration + 's';
      heart.style.fontSize = (14 + Math.random() * 18) + 'px';
      heartsBg.appendChild(heart);
      setTimeout(() => heart.remove(), duration * 1000 + 1000);
    }

    setInterval(spawnHeart, 750);
    for (let i = 0; i < 5; i++) {
      setTimeout(spawnHeart, i * 300);
    }
  }

  /* ============================================
     4. FLOATING SPARKLES BACKGROUND
     ============================================ */
  function createFloatingSparkles() {
    const sparklesBg = document.getElementById('sparklesBg');
    if (!sparklesBg) return;

    const sparkleChars = ['✨', '✦', '✧', '⭐', '💫', '🌟'];
    const numSparkles = 25;

    for (let i = 0; i < numSparkles; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'floating-sparkle-bg';
      sparkle.textContent = sparkleChars[Math.floor(Math.random() * sparkleChars.length)];
      sparkle.style.left = Math.random() * 100 + 'vw';
      sparkle.style.top = Math.random() * 100 + 'vh';
      const duration = 1.5 + Math.random() * 2.5;
      const delay = Math.random() * 2;
      sparkle.style.animationDuration = duration + 's';
      sparkle.style.animationDelay = delay + 's';
      sparkle.style.fontSize = (10 + Math.random() * 16) + 'px';
      sparklesBg.appendChild(sparkle);
    }
  }

  /* ============================================
     5. FLOATING CLOUDS BACKGROUND
     ============================================ */
  function createFloatingClouds() {
    const cloudsBg = document.getElementById('cloudsBg');
    if (!cloudsBg) return;

    const cloudChars = ['☁️', '☁️', '⛅'];
    const numClouds = 5;

    for (let i = 0; i < numClouds; i++) {
      const cloud = document.createElement('div');
      cloud.className = 'floating-cloud-bg';
      cloud.textContent = cloudChars[Math.floor(Math.random() * cloudChars.length)];
      cloud.style.top = (Math.random() * 50 + 5) + '%';
      const duration = 80 + Math.random() * 60;
      cloud.style.animationDuration = duration + 's';
      cloud.style.animationDelay = -(Math.random() * duration) + 's';
      cloud.style.fontSize = (36 + Math.random() * 40) + 'px';
      cloud.style.opacity = (0.12 + Math.random() * 0.18).toString();
      cloudsBg.appendChild(cloud);
    }
  }

  /* ============================================
     6. NAVIGATION
     ============================================ */
  function setupNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const navLinkEls = document.querySelectorAll('.nav-link');
    if (!navbar || !hamburger || !navLinks) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      updateActiveNavLink();
    }, { passive: true });

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    navLinkEls.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });

    function updateActiveNavLink() {
      const sections = ['home', 'memories', 'messages', 'gallery', 'surprise', 'wishes'];
      const scrollPos = window.scrollY + 150;
      let currentId = sections[0];

      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          currentId = id;
        }
      });

      navLinkEls.forEach(link => {
        const href = link.getAttribute('href');
        if (href === '#' + currentId) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  }

  /* ============================================
     7. REVEAL ON SCROLL
     ============================================ */
  function setupRevealOnScroll() {
    const revealEls = document.querySelectorAll('.reveal-slide');
    if (!revealEls.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px'
    });

    revealEls.forEach(el => observer.observe(el));
  }

  /* ============================================
     8. STATISTICS PROGRESS BARS
     ============================================ */
  function setupStatsAnimation() {
    const statsSection = document.querySelector('.stats-section');
    if (!statsSection) return;

    const statItems = document.querySelectorAll('.stat-item');
    if (!statItems.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateStats();
          observer.disconnect();
        }
      });
    }, { threshold: 0.25 });

    observer.observe(statsSection);

    function animateStats() {
      statItems.forEach((item, idx) => {
        const progress = parseInt(item.getAttribute('data-progress')) || 100;
        const barFill = item.querySelector('.stat-bar-fill');
        const percentEl = item.querySelector('.stat-percent');
        if (!barFill || !percentEl) return;

        setTimeout(() => {
          barFill.style.width = progress + '%';

          let current = 0;
          const step = progress / 60;
          const countInterval = setInterval(() => {
            current += step;
            if (current >= progress) {
              current = progress;
              clearInterval(countInterval);
            }
            percentEl.textContent = Math.floor(current) + '%';
          }, 25);
        }, idx * 120);
      });
    }
  }

  /* ============================================
     9. TERMINAL TYPING ANIMATION
     ============================================ */
  function setupTerminalTyping() {
    const typingCodeEl = document.getElementById('typingCode');
    const terminalSection = document.querySelector('.terminal-section');
    if (!typingCodeEl || !terminalSection) return;

    const codeLines = [
      { type: 'comment', content: '// Thaikilavi Birthday Program v2026.0' },
      { type: 'keyword', content: 'const', extra: ' ', var: 'person', eq: ' = ', string: '"Thaikilavi"', punct: ';' },
      { type: 'blank' },
      { type: 'keyword', content: 'const', extra: ' ', var: 'happiness', eq: ' = ', infinity: 'Infinity', punct: ';' },
      { type: 'keyword', content: 'const', extra: ' ', var: 'smiles', eq: ' = ', infinity: 'Infinity', punct: ';' },
      { type: 'keyword', content: 'const', extra: ' ', var: 'memories', eq: ' = ', string: '"Forever"', punct: ';' },
      { type: 'blank' },
      { type: 'keyword', content: 'if', extra: ' ', punct: '(', var: 'today', eq: ' === ', string: '"Birthday"', punct: ') {' },
      { type: 'indent', func: 'celebrate', punct: '();' },
      { type: 'indent', func: 'spreadLove', punct: '();' },
      { type: 'indent', func: 'eatCake', punct: '();' },
      { type: 'punct', content: '}' },
      { type: 'blank' },
      { type: 'log', content: 'console', punct: '.', func: 'log', punct: '(', string: '"Happy Birthday Thaikilavi ❤️"', punct: ');' },
      { type: 'blank' },
      { type: 'comment', content: '// Output: ❤️ 🎂 🎉 ✨ 🐼' },
    ];

    let lineIdx = 0;
    let charIdx = 0;
    let currentLineEl = null;
    let isTyping = false;

    function getSegmentHTML(part) {
      switch (part.type) {
        case 'comment': return { html: `<span class="c-comment">${escapeHTML(part.content)}</span>`, length: part.content.length };
        case 'keyword': return {
          html:
            `<span class="c-keyword">${part.content}</span>` +
            (part.extra || '') +
            (part.var ? `<span class="c-var">${part.var}</span>` : '') +
            (part.eq ? `<span class="c-punct">${part.eq}</span>` : '') +
            (part.string ? `<span class="c-string">${part.string}</span>` : '') +
            (part.infinity ? `<span class="c-infinity">${part.infinity}</span>` : '') +
            (part.punct ? `<span class="c-punct">${part.punct}</span>` : ''),
          length: (part.content || '').length + (part.extra || '').length + (part.var || '').length +
                  (part.eq || '').length + (part.string || '').length + (part.infinity || '').length +
                  (part.punct || '').length
        };
        case 'blank': return { html: '&nbsp;', length: 0 };
        case 'indent': return {
          html:
            `&nbsp;&nbsp;<span class="c-func">${part.func}</span>` +
            `<span class="c-punct">${part.punct}</span>`,
          length: 2 + part.func.length + part.punct.length
        };
        case 'punct': return {
          html: `<span class="c-punct">${part.content}</span>`,
          length: part.content.length
        };
        case 'log': return {
          html:
            `<span class="c-log">${part.content}</span>` +
            `<span class="c-punct">${part.punct || '.'}</span>` +
            (part.func ? `<span class="c-func">${part.func}</span>` : '') +
            (part.punct2 ? `<span class="c-punct">${part.punct2}</span>` : '') +
            `<span class="c-punct">(</span>` +
            `<span class="c-string">${part.string}</span>` +
            `<span class="c-punct">${part.punct || ');'}</span>`,
          length: part.content.length + 1 + (part.func || '').length + 1 + (part.string || '').length + 2
        };
        default: return { html: '', length: 0 };
      }
    }

    function escapeHTML(str) {
      const div = document.createElement('div');
      div.textContent = str;
      return div.innerHTML;
    }

    function startTyping() {
      if (isTyping) return;
      isTyping = true;
      typeNextSegment();
    }

    function typeNextSegment() {
      if (lineIdx >= codeLines.length) {
        isTyping = false;
        return;
      }

      const lineData = codeLines[lineIdx];
      const seg = getSegmentHTML(lineData);

      if (charIdx === 0) {
        currentLineEl = document.createElement('div');
        currentLineEl.className = 'code-line';
        typingCodeEl.appendChild(currentLineEl);
      }

      currentLineEl.innerHTML = seg.html;
      charIdx = seg.length;

      lineIdx++;
      charIdx = 0;

      const delay = lineData.type === 'blank' ? 150 : 140 + Math.random() * 80;
      setTimeout(typeNextSegment, delay);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startTyping();
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });

    observer.observe(terminalSection);
  }

  /* ============================================
     10. CONFETTI SYSTEM
     ============================================ */
  const confettiColors = [
    '#ff7eb3', '#ff5d8f', '#e05297',
    '#c5a8ff', '#a78bfa', '#8773b3',
    '#ffd59e', '#ffa75e', '#7fd8b8',
    '#ffd1dc', '#ffc1d7', '#ffffff',
    '#ffe4ef', '#f3eaff'
  ];
  const confettiShapes = ['■', '●', '▲', '◆', '★', '♦', '♥'];
  const confettiEmojis = ['🐼', '❤️', '💕', '✨', '🎉', '🎊', '🎈', '🎁', '🌸'];

  function spawnConfetti(count, options) {
    const container = document.getElementById('confettiContainer');
    if (!container) return;
    options = options || {};
    const originX = options.originX != null ? options.originX : 0.5;
    const useEmojis = options.useEmojis !== false;

    for (let i = 0; i < count; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';

      const useEmoji = useEmojis && Math.random() < 0.3;
      let content;
      if (useEmoji) {
        content = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];
        piece.style.fontSize = (14 + Math.random() * 14) + 'px';
        piece.style.width = 'auto';
        piece.style.height = 'auto';
      } else {
        const shape = confettiShapes[Math.floor(Math.random() * confettiShapes.length)];
        const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        content = shape;
        piece.style.color = color;
        piece.style.fontSize = (10 + Math.random() * 10) + 'px';
        piece.style.textShadow = '0 0 4px rgba(255,255,255,0.5)';
        piece.style.width = 'auto';
        piece.style.height = 'auto';
      }

      piece.textContent = content;

      const startX = window.innerWidth * originX + (Math.random() - 0.5) * window.innerWidth * 0.6;
      const drift = (Math.random() - 0.5) * 200;
      piece.style.left = startX + 'px';
      piece.style.setProperty('--confetti-drift', drift + 'px');

      const duration = 2.5 + Math.random() * 3;
      piece.style.animationDuration = duration + 's';
      piece.style.animationDelay = (Math.random() * 0.3) + 's';

      const initialRotation = Math.random() * 360;
      piece.style.transform = `rotate(${initialRotation}deg)`;

      container.appendChild(piece);
      setTimeout(() => piece.remove(), duration * 1000 + 500);
    }
  }

  function triggerFirstConfettiBurst() {
    spawnConfetti(80, { originX: 0.5, useEmojis: true });
  }

  function triggerBigConfettiBurst() {
    let bursts = 0;
    const totalBursts = 4;
    const burstInterval = setInterval(() => {
      const origin = 0.2 + Math.random() * 0.6;
      spawnConfetti(70, { originX: origin, useEmojis: true });
      bursts++;
      if (bursts >= totalBursts) clearInterval(burstInterval);
    }, 220);
  }

  function spawnHeartBurst(count) {
    const heartsBg = document.getElementById('heartsBg');
    if (!heartsBg) return;
    const heartChars = ['❤️', '💕', '💗', '💖', '💘', '💝', '🩷', '🐼'];

    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart-bg';
        heart.textContent = heartChars[Math.floor(Math.random() * heartChars.length)];
        heart.style.left = (20 + Math.random() * 60) + 'vw';
        const duration = 4 + Math.random() * 5;
        heart.style.animationDuration = duration + 's';
        heart.style.fontSize = (20 + Math.random() * 24) + 'px';
        heart.style.opacity = '1';
        heartsBg.appendChild(heart);
        setTimeout(() => heart.remove(), duration * 1000 + 500);
      }, i * 40);
    }
  }

  /* ============================================
     11. HERO BUTTON - OPEN SURPRISE
     ============================================ */
  function setupHeroButton() {
    const btn = document.getElementById('openSurpriseBtn');
    if (!btn) return;

    btn.addEventListener('click', () => {
      spawnConfetti(100, { originX: 0.5, useEmojis: true });
      spawnHeartBurst(30);

      setTimeout(() => {
        const memories = document.getElementById('memories');
        if (memories) {
          memories.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    });
  }

  /* ============================================
     12. SURPRISE BUTTON & MODAL
     ============================================ */
  function setupSurpriseModal() {
    const surpriseBtn = document.getElementById('surpriseBigBtn');
    const modal = document.getElementById('surpriseModal');
    const closeBtn = document.getElementById('modalCloseBtn');
    const overlay = modal ? modal.querySelector('.modal-overlay') : null;

    if (!surpriseBtn || !modal || !closeBtn) return;

    function openModal() {
      triggerBigConfettiBurst();
      spawnHeartBurst(45);
      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
      tryPlayMusic();
    }

    function closeModal() {
      modal.classList.remove('show');
      document.body.style.overflow = '';
    }

    surpriseBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    if (overlay) {
      overlay.addEventListener('click', closeModal);
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
      }
    });
  }

  /* ============================================
     13. MUSIC SYSTEM - Autoplay + Floating Control + Tap-to-Play
     ============================================ */
  let musicPlaying = false;
  let musicInitialized = false;

  function setupMusicToggle() {
    const audio = document.getElementById('bgMusic');
    const navBtn = document.getElementById('musicBtn');
    const navStatusEl = document.getElementById('musicStatus');
    const floatingBtn = document.getElementById('floatingMusicBtn');
    const floatingIconEl = document.getElementById('floatingMusicIcon');
    const floatingStatusEl = document.getElementById('floatingMusicStatus');
    const tapToPlayBtn = document.getElementById('tapToPlayBtn');

    if (!audio) return;

    // Set volume explicitly (HTML attributes are sometimes ignored)
    audio.volume = 0.45;
    audio.loop = true;
    audio.preload = 'auto';

    // Ensure audio only initializes once (never restarts on scroll/click)
    if (musicInitialized) return;
    musicInitialized = true;

    function syncUI(isPlaying) {
      // Navbar button
      if (navBtn) {
        if (isPlaying) {
          navBtn.classList.add('playing');
        } else {
          navBtn.classList.remove('playing');
        }
      }
      if (navStatusEl) {
        navStatusEl.textContent = isPlaying ? 'ON' : 'OFF';
      }

      // Floating music control
      if (floatingBtn) {
        if (isPlaying) {
          floatingBtn.classList.add('playing');
        } else {
          floatingBtn.classList.remove('playing');
        }
      }
      if (floatingIconEl) {
        floatingIconEl.textContent = isPlaying ? '🎵' : '🔇';
      }
      if (floatingStatusEl) {
        floatingStatusEl.textContent = isPlaying ? 'Music Playing' : 'Music Paused';
      }
    }

    function hideTapToPlay() {
      if (tapToPlayBtn && tapToPlayBtn.style.display !== 'none') {
        tapToPlayBtn.style.display = 'none';
      }
    }

    function showTapToPlay() {
      if (tapToPlayBtn) {
        tapToPlayBtn.style.display = 'flex';
      }
    }

    function startMusic(successCallback) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          musicPlaying = true;
          syncUI(true);
          hideTapToPlay();
          if (typeof successCallback === 'function') successCallback();
        }).catch(() => {
          musicPlaying = false;
          syncUI(false);
          // Autoplay blocked - show Tap to Play
          if (!document.hidden) {
            showTapToPlay();
          }
        });
      } else {
        musicPlaying = true;
        syncUI(true);
        hideTapToPlay();
        if (typeof successCallback === 'function') successCallback();
      }
    }

    function pauseMusic() {
      audio.pause();
      musicPlaying = false;
      syncUI(false);
    }

    function toggleMusic() {
      if (musicPlaying) {
        pauseMusic();
      } else {
        startMusic();
      }
    }

    // Bind navbar button
    if (navBtn) {
      navBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleMusic();
      });
    }

    // Bind floating button
    if (floatingBtn) {
      floatingBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleMusic();
      });
    }

    // Bind Tap to Play button
    if (tapToPlayBtn) {
      tapToPlayBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        startMusic();
      });
    }

    // Fallback: allow any first user interaction to start music
    // (modern browsers require user gesture before audio)
    function firstInteractionHandler() {
      if (!musicPlaying) {
        startMusic(() => {
          // Remove listeners after success
          document.removeEventListener('click', firstInteractionHandler, true);
          document.removeEventListener('keydown', firstInteractionHandler, true);
          document.removeEventListener('touchstart', firstInteractionHandler, true);
        });
      } else {
        document.removeEventListener('click', firstInteractionHandler, true);
        document.removeEventListener('keydown', firstInteractionHandler, true);
        document.removeEventListener('touchstart', firstInteractionHandler, true);
      }
    }
    // Use capture phase to catch interactions early
    document.addEventListener('click', firstInteractionHandler, true);
    document.addEventListener('keydown', firstInteractionHandler, true);
    document.addEventListener('touchstart', firstInteractionHandler, true);

    // Listen for audio events to keep UI in sync
    audio.addEventListener('play', () => {
      musicPlaying = true;
      syncUI(true);
      hideTapToPlay();
    });
    audio.addEventListener('pause', () => {
      musicPlaying = false;
      syncUI(false);
    });
    audio.addEventListener('ended', () => {
      // Loop attribute should handle this, but just in case:
      audio.currentTime = 0;
      audio.play().catch(() => {});
    });
    audio.addEventListener('error', () => {
      musicPlaying = false;
      syncUI(false);
    });

    // Initial state sync
    syncUI(false);

    // Attempt autoplay (browsers may block if no user gesture yet)
    // Use a tiny delay to ensure audio element is fully attached to DOM
    setTimeout(() => {
      startMusic();
    }, 350);
  }

  // tryPlayMusic - used by surprise modal and others to nudge music
  function tryPlayMusic() {
    const audio = document.getElementById('bgMusic');
    if (!audio) return;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }

  /* ============================================
     14. SMOOTH SCROLL FOR NAV LOGO (optional home)
     ============================================ */
  function setupLogoClick() {
    const logo = document.querySelector('.nav-logo');
    if (!logo) return;
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      const home = document.getElementById('home');
      if (home) home.scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* ============================================
     15. LOADER BACKGROUND DECORATIONS
     ============================================ */
  function setupLoaderBackgrounds() {
    const heartContainer = document.querySelector('.loader-bg-hearts');
    const pandaContainer = document.querySelector('.loader-bg-pandas');

    if (heartContainer) {
      const heartChars = ['❤️', '💕', '💗', '💖'];
      for (let i = 0; i < 15; i++) {
        const h = document.createElement('span');
        h.textContent = heartChars[Math.floor(Math.random() * heartChars.length)];
        h.style.position = 'absolute';
        h.style.left = Math.random() * 100 + '%';
        h.style.top = Math.random() * 100 + '%';
        h.style.fontSize = (14 + Math.random() * 18) + 'px';
        h.style.opacity = (0.3 + Math.random() * 0.4).toString();
        h.style.animation = 'heroHeartBeat ' + (1 + Math.random() * 1.5) + 's ease-in-out infinite';
        h.style.animationDelay = Math.random() * 2 + 's';
        heartContainer.appendChild(h);
      }
    }

    if (pandaContainer) {
      const pandaChars = ['🐼', '🐼', '🎋', '✨'];
      for (let i = 0; i < 8; i++) {
        const p = document.createElement('span');
        p.textContent = pandaChars[Math.floor(Math.random() * pandaChars.length)];
        p.style.position = 'absolute';
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        p.style.fontSize = (20 + Math.random() * 30) + 'px';
        p.style.opacity = (0.15 + Math.random() * 0.2).toString();
        p.style.animation = 'pandaFloat ' + (2 + Math.random() * 3) + 's ease-in-out infinite';
        p.style.animationDelay = Math.random() * 3 + 's';
        pandaContainer.appendChild(p);
      }
    }
  }

  /* ============================================
     16. INITIALIZE EVERYTHING
     ============================================ */
  function init() {
    setupLoaderBackgrounds();
    createPandaBackground();
    createFloatingHearts();
    createFloatingSparkles();
    createFloatingClouds();
    setupNavigation();
    setupRevealOnScroll();
    setupStatsAnimation();
    setupTerminalTyping();
    setupHeroButton();
    setupSurpriseModal();
    setupMusicToggle();
    setupLogoClick();
    runLoadingScreen();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
