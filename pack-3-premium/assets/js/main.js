/* ============================================================
   JULIEN BURANDE - JS PRINCIPAL
   Vanilla JS, pas de framework, léger et performant
   ============================================================ */

(function() {
  'use strict';

  // ============================================================
  // 1. Menu mobile
  // ============================================================
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const navOverlay = document.querySelector('.main-nav-overlay');
  const navClose = document.querySelector('.nav-close');

  function openMenu() {
    if (!mainNav) return;
    mainNav.classList.add('open');
    if (navOverlay) navOverlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    if (!mainNav) return;
    mainNav.classList.remove('open');
    if (navOverlay) navOverlay.classList.remove('visible');
    document.body.style.overflow = '';
  }

  if (menuToggle) menuToggle.addEventListener('click', openMenu);
  if (navClose) navClose.addEventListener('click', closeMenu);
  if (navOverlay) navOverlay.addEventListener('click', closeMenu);

  // Fermer le menu sur Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // ============================================================
  // 2. Bandeau cookies (RGPD basique)
  // ============================================================
  const cookieBanner = document.querySelector('.cookie-banner');
  const cookieAccept = document.querySelector('[data-cookie-accept]');
  const cookieRefuse = document.querySelector('[data-cookie-refuse]');
  const COOKIE_KEY = 'burande_cookies_consent';

  function showCookieBanner() {
    if (!cookieBanner) return;
    if (!localStorage.getItem(COOKIE_KEY)) {
      setTimeout(() => cookieBanner.classList.add('visible'), 800);
    }
  }
  function hideCookieBanner(consent) {
    if (!cookieBanner) return;
    cookieBanner.classList.remove('visible');
    localStorage.setItem(COOKIE_KEY, consent);
    // Si 'accept', on pourrait ici charger les scripts de tracking (GA4 etc.)
    if (consent === 'accept') {
      // window.dataLayer = window.dataLayer || [];
      // function gtag(){dataLayer.push(arguments);}
      // gtag('js', new Date());
      // gtag('config', 'G-XXXXXXX');
    }
  }
  if (cookieAccept) cookieAccept.addEventListener('click', () => hideCookieBanner('accept'));
  if (cookieRefuse) cookieRefuse.addEventListener('click', () => hideCookieBanner('refuse'));
  showCookieBanner();

  // ============================================================
  // 3. Formulaire de contact (Web3Forms)
  // ============================================================
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    const formStatus = document.querySelector('#form-status');

    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;

      submitBtn.disabled = true;
      submitBtn.textContent = 'Envoi en cours...';
      if (formStatus) formStatus.textContent = '';

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });
        const result = await response.json();

        if (result.success) {
          if (formStatus) {
            formStatus.style.color = 'var(--c-success)';
            formStatus.textContent = '✓ Votre message a bien été envoyé. Julien vous recontactera rapidement.';
          }
          contactForm.reset();
        } else {
          throw new Error(result.message || 'Erreur d\'envoi');
        }
      } catch (err) {
        if (formStatus) {
          formStatus.style.color = '#C9491F';
          formStatus.textContent = '⚠ Une erreur est survenue. Merci d\'appeler directement le 06 38 48 18 09.';
        }
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }

  // ============================================================
  // 4. Année automatique dans le footer
  // ============================================================
  const yearEls = document.querySelectorAll('[data-current-year]');
  yearEls.forEach(el => el.textContent = new Date().getFullYear());

  // ============================================================
  // 5. Smooth scroll pour les ancres
  // ============================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        closeMenu();
      }
    });
  });

})();
