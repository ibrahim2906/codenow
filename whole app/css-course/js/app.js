// app.js - Main Application Entry Point
const App = (() => {
  function init() {
    Progress.init();
    Lessons.init();
    Playground.init();
    Navigation.init();
    setupIntro();

    // Load last lesson or first
    const lastIndex = Progress.getLastLesson();
    Navigation.setCurrentIndex(lastIndex);
    Navigation.goToLesson(lastIndex);
    Navigation.updateNavButtons();
    setupThemePicker();
  }

  function setupIntro() {
    const intro = document.getElementById('intro-overlay');
    const startBtn = document.getElementById('start-course-btn');
    const skipBtn = document.getElementById('skip-intro-btn');
    const hasVisited = localStorage.getItem('css-course-visited');

    if (hasVisited && intro) {
      intro.style.display = 'none';
      // don't return early so we can attach events, in case we show it again
    }

    const dismissIntro = () => {
      if (intro) {
        intro.classList.add('fade-out');
        setTimeout(() => {
          intro.style.display = 'none';
          localStorage.setItem('css-course-visited', 'true');
        }, 500);
      }
    };

    if (startBtn) startBtn.addEventListener('click', dismissIntro);
    if (skipBtn) skipBtn.addEventListener('click', dismissIntro);
  }

  function setupThemePicker() {
    const savedTheme = localStorage.getItem('css-course-theme') || 'indigo';
    document.body.className = `theme-${savedTheme}`;
    document.querySelectorAll('.theme-btn').forEach(btn => {
      if (btn.dataset.theme === savedTheme) btn.classList.add('active');
    });

    document.addEventListener('click', (e) => {
      if (e.target.matches('.theme-btn')) {
        document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const theme = e.target.dataset.theme;
        document.body.className = `theme-${theme}`;
        localStorage.setItem('css-course-theme', theme);
      }
    });
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', App.init);
