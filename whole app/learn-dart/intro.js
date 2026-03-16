// intro.js - Advanced animations and parallax for the intro page

document.addEventListener('DOMContentLoaded', () => {
    // 1. Reveal Animations on Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Optional: Unobserve after revealed
                // revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const reveals = document.querySelectorAll('[data-reveal]');
    reveals.forEach(el => revealObserver.observe(el));

    // 2. Mouse Parallax Effect for Hero Content & Orbs
    const heroContent = document.querySelector('.hero-content');
    const orbs = document.querySelectorAll('.intro-orb');

    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // Move hero content subtly
        if (heroContent) {
            const moveX = (clientX - centerX) * 0.01;
            const moveY = (clientY - centerY) * 0.01;
            heroContent.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }

        // Move orbs more significantly
        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 0.02;
            const x = (centerX - clientX) * speed;
            const y = (centerY - clientY) * speed;
            orb.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    // 3. Scroll-Driven Enhancements
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;

        // Navigation transparency
        const nav = document.querySelector('.intro-nav');
        if (nav) {
            if (scrolled > 100) {
                nav.style.backgroundColor = 'rgba(13, 13, 18, 0.9)';
                nav.style.backdropFilter = 'blur(16px)';
                nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
            } else {
                nav.style.backgroundColor = 'rgba(13, 13, 18, 0.7)';
                nav.style.backdropFilter = 'blur(8px)';
                nav.style.borderBottom = '1px solid transparent';
            }
        }

        // Hero Parallax
        const hero = document.querySelector('.hero-section');
        if (hero && scrolled < 800) {
            hero.style.opacity = 1 - (scrolled / 800);
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });

    // 4. Smooth Anchor Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. Ladder Step Delay Automation
    const steps = document.querySelectorAll('.ladder-step');
    steps.forEach((step, i) => {
        const delay = step.getAttribute('data-reveal-delay') || (i * 100);
        step.style.transitionDelay = `${delay}ms`;
        revealObserver.observe(step);
    });
});
