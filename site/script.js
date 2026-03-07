/* ===========================
   ISData Consulting — script.js
   Vanilla JS — Navigation + Scroll Reveal
   =========================== */

(function () {
  'use strict';

  // --- Mobile Navigation ---
  var hamburger = document.getElementById('nav-hamburger');
  var mobileMenu = document.getElementById('nav-mobile');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
    });

    // Close mobile menu on link click
    var mobileLinks = mobileMenu.querySelectorAll('a');
    for (var i = 0; i < mobileLinks.length; i++) {
      mobileLinks[i].addEventListener('click', function () {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
      });
    }
  }

  // --- Scroll Reveal (IntersectionObserver) ---
  var revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealElements.length > 0) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            // Add stagger delay for siblings
            var parent = entry.target.parentElement;
            if (parent) {
              var siblings = parent.querySelectorAll('.reveal');
              var index = Array.prototype.indexOf.call(siblings, entry.target);
              if (index > 0) {
                entry.target.style.transitionDelay = index * 0.1 + 's';
              }
            }
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    for (var j = 0; j < revealElements.length; j++) {
      observer.observe(revealElements[j]);
    }
  } else {
    // Fallback: show everything immediately
    for (var k = 0; k < revealElements.length; k++) {
      revealElements[k].classList.add('visible');
    }
  }

  // --- Smooth scroll for anchor links (fallback for browsers without CSS scroll-behavior) ---
  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  for (var l = 0; l < anchorLinks.length; l++) {
    anchorLinks[l].addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId && targetId.length > 1) {
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          var navHeight = document.querySelector('.nav').offsetHeight || 64;
          var top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      }
    });
  }
})();
