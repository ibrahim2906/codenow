// navigation.js - Sidebar & Lesson Navigation
const Navigation = (() => {
  let currentIndex = 0;
  let sidebarVisible = true;

  function init() {
    buildSidebar();
    setupNavButtons();
    setupSidebarToggle();
    setupMobileOverlay();
  }

  function buildSidebar() {
    const list = document.getElementById('lesson-list');
    if (!list || !window.lessonsData) return;
    list.innerHTML = '';
    lessonsData.forEach((lesson, i) => {
      const item = document.createElement('div');
      item.className = 'lesson-item' + (i === currentIndex ? ' active' : '');
      item.dataset.index = i;
      const completed = Progress.isCompleted(lesson.id);
      if (completed) item.classList.add('completed');
      item.innerHTML = `
        <span class="lesson-number">${lesson.id}</span>
        <span class="lesson-title-text">${lesson.title}</span>
        <span class="lesson-check">${completed ? '✅' : ''}</span>
      `;
      item.style.animationDelay = `${i * 0.03}s`;
      item.addEventListener('click', () => goToLesson(i));
      list.appendChild(item);
    });
  }

  function goToLesson(index) {
    if (index < 0 || index >= lessonsData.length) return;
    currentIndex = index;
    highlightActive();
    Lessons.renderLesson(lessonsData[index]);
    Progress.saveLastLesson(index);
    updateNavButtons();
    closeMobileSidebar();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function highlightActive() {
    document.querySelectorAll('.lesson-item').forEach((item, i) => {
      item.classList.toggle('active', i === currentIndex);
    });
  }

  function setupNavButtons() {
    const prevBtn = document.getElementById('prev-lesson');
    const nextBtn = document.getElementById('next-lesson');
    const completeBtn = document.getElementById('complete-lesson');
    if (prevBtn) prevBtn.addEventListener('click', () => goToLesson(currentIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goToLesson(currentIndex + 1));
    if (completeBtn) {
      completeBtn.addEventListener('click', () => {
        const lesson = lessonsData[currentIndex];
        if (lesson && !Progress.isCompleted(lesson.id)) {
          Progress.markComplete(lesson.id);
          completeBtn.textContent = '✅ Completed';
          completeBtn.classList.add('completed');
          buildSidebar();
        }
      });
    }
  }

  function updateNavButtons() {
    const prevBtn = document.getElementById('prev-lesson');
    const nextBtn = document.getElementById('next-lesson');
    const completeBtn = document.getElementById('complete-lesson');
    if (prevBtn) {
      prevBtn.disabled = currentIndex === 0;
      prevBtn.style.opacity = currentIndex === 0 ? '0.4' : '1';
    }
    if (nextBtn) {
      nextBtn.disabled = currentIndex >= lessonsData.length - 1;
      nextBtn.style.opacity = currentIndex >= lessonsData.length - 1 ? '0.4' : '1';
    }
    if (completeBtn) {
      const lesson = lessonsData[currentIndex];
      const done = lesson && Progress.isCompleted(lesson.id);
      completeBtn.textContent = done ? '✅ Completed' : '✔ Mark Complete';
      completeBtn.classList.toggle('completed', done);
    }
  }

  function setupSidebarToggle() {
    const toggleBtn = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');

    if (!toggleBtn || !sidebar) return;

    toggleBtn.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        // Mobile: slide in/out as overlay
        sidebar.classList.toggle('mobile-open');
        document.getElementById('mobile-overlay')?.classList.toggle('show');
      } else {
        // Desktop: toggle sidebar visibility
        sidebarVisible = !sidebarVisible;
        sidebar.classList.toggle('hidden', !sidebarVisible);
        if (mainContent) mainContent.classList.toggle('expanded', !sidebarVisible);
        toggleBtn.textContent = sidebarVisible ? '☰' : '☰';
        toggleBtn.title = sidebarVisible ? 'Hide sidebar' : 'Show sidebar';
      }
    });
  }

  function setupMobileOverlay() {
    const overlay = document.getElementById('mobile-overlay');
    if (overlay) {
      overlay.addEventListener('click', closeMobileSidebar);
    }
  }

  function closeMobileSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('mobile-overlay');
    if (sidebar) sidebar.classList.remove('mobile-open');
    if (overlay) overlay.classList.remove('show');
  }

  function getCurrentIndex() { return currentIndex; }
  function setCurrentIndex(i) { currentIndex = i; }

  return { init, goToLesson, buildSidebar, getCurrentIndex, setCurrentIndex, updateNavButtons };
})();
