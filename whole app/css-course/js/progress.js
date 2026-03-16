// progress.js - Progress Tracking & localStorage
const Progress = (() => {
  const STORAGE_KEY = 'css-course-progress';
  let state = { completed: [], lastLesson: 0 };

  function init() {
    load();
    updateProgressBar();
  }

  function load() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) state = JSON.parse(saved);
    } catch (e) {
      console.warn('Could not load progress:', e);
    }
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Could not save progress:', e);
    }
  }

  function markComplete(lessonId) {
    if (!state.completed.includes(lessonId)) {
      state.completed.push(lessonId);
      save();
      updateProgressBar();
    }
  }

  function isCompleted(lessonId) {
    return state.completed.includes(lessonId);
  }

  function saveLastLesson(index) {
    state.lastLesson = index;
    save();
  }

  function getLastLesson() {
    return state.lastLesson || 0;
  }

  function updateProgressBar() {
    const total = window.lessonsData ? lessonsData.length : 20;
    const completed = state.completed.length;
    const pct = Math.round((completed / total) * 100);
    const fill = document.getElementById('progress-fill');
    const label = document.getElementById('progress-label');
    if (fill) fill.style.width = pct + '%';
    if (label) label.textContent = `${completed}/${total} (${pct}%)`;
  }

  function getCompletedCount() {
    return state.completed.length;
  }

  function resetProgress() {
    state = { completed: [], lastLesson: 0 };
    save();
    updateProgressBar();
  }

  return { init, markComplete, isCompleted, saveLastLesson, getLastLesson, updateProgressBar, getCompletedCount, resetProgress };
})();
