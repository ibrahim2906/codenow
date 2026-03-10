// app.js - Main SPA Engine

let currentLessonId = null;
let userProgress = JSON.parse(localStorage.getItem('dart_progress') || '{"completed": [], "xp": 0, "theme": "default", "lang": "both", "readingMode": false}');

// ----- Initialization -----
document.addEventListener('DOMContentLoaded', () => {
  initThemes();
  renderSidebar();
  updateGlobalProgress();

  // Event Listeners
  document.getElementById('start-btn').addEventListener('click', startCourse);
  document.getElementById('sidebar-toggle').addEventListener('click', toggleSidebar);
  document.getElementById('topbar-sidebar-toggle').addEventListener('click', toggleSidebar);
  document.getElementById('lang-toggle').addEventListener('click', handleLangToggle);
  document.getElementById('reading-mode-toggle').addEventListener('change', handleReadingMode);
  document.getElementById('lesson-search').addEventListener('input', handleSearch);

  // Initial Theme/Lang
  setTheme(userProgress.theme);
  setLang(userProgress.lang);
  if (userProgress.readingMode) {
    document.getElementById('reading-mode-toggle').checked = true;
    document.body.classList.add('reading-mode');
  }

  // If already started once, we might want to skip intro, 
  // but the user rules say "User cannot skip intro" initially.
  // We'll respect that by always showing intro on refresh, or 
  // checking if they've already completed a lesson.
  if (userProgress.completed.length > 0) {
    // Optional: Auto-jump to last lesson. 
    // For now, let's just stay on intro as per rule "scroll-based animations".
  }
});

function startCourse() {
  document.getElementById('intro-page').classList.add('hidden');
  document.getElementById('main-app').classList.remove('hidden');

  // Load first lesson or last completed
  const firstLesson = COURSE_DATA[0].lessons[0].id;
  loadLesson(firstLesson);
}

function skipIntro() {
  document.getElementById('intro-page').classList.add('hidden');
  document.getElementById('main-app').classList.remove('hidden');
  if (!currentLessonId) {
    const firstLesson = COURSE_DATA[0].lessons[0].id;
    loadLesson(firstLesson);
  }
}

// ----- Sidebar & Navigation -----
function renderSidebar(filter = '') {
  const nav = document.getElementById('lesson-nav');
  nav.innerHTML = '';
  const query = filter.toLowerCase().trim();

  COURSE_DATA.forEach((phase, pIdx) => {
    const filteredLessons = phase.lessons.filter(l =>
      l.title.toLowerCase().includes(query) ||
      l.en.toLowerCase().includes(query) ||
      l.ar.toLowerCase().includes(query)
    );

    if (filteredLessons.length === 0) return;

    const group = document.createElement('div');
    group.className = 'phase-group';

    const header = document.createElement('div');
    header.className = 'phase-header';
    header.textContent = phase.title;
    group.appendChild(header);

    filteredLessons.forEach((lesson, lIdx) => {
      const isLocked = !isLessonUnlocked(lesson.id);
      const isCompleted = userProgress.completed.includes(lesson.id);

      const item = document.createElement('div');
      item.className = `nav-lesson-item ${isLocked ? 'locked' : ''} ${isCompleted ? 'completed' : ''} ${currentLessonId === lesson.id ? 'active' : ''}`;
      item.innerHTML = `
                <span class="nav-check">${isCompleted ? '✓' : '○'}</span>
                <span class="nav-text">${lesson.title}</span>
                ${isLocked ? '<span class="nav-lock">🔒</span>' : ''}
            `;

      if (!isLocked) {
        item.onclick = () => loadLesson(lesson.id);
      }
      group.appendChild(item);
    });

    nav.appendChild(group);
  });
}

function handleSearch(e) {
  renderSidebar(e.target.value);
}

function isLessonUnlocked(lessonId) {
  // First lesson is always unlocked
  const allLessons = COURSE_DATA.flatMap(p => p.lessons);
  const idx = allLessons.findIndex(l => l.id === lessonId);
  if (idx === 0) return true;

  // Previous lesson must be completed
  const prevLessonId = allLessons[idx - 1].id;
  return userProgress.completed.includes(prevLessonId);
}

function loadLesson(lessonId) {
  currentLessonId = lessonId;
  const lesson = COURSE_DATA.flatMap(p => p.lessons).find(l => l.id === lessonId);
  const phase = COURSE_DATA.find(p => p.lessons.some(l => l.id === lessonId));

  // Update UI
  document.getElementById('current-phase-label').textContent = phase.title.split('—')[0].trim();
  document.getElementById('current-lesson-title').textContent = lesson.title;

  renderLessonContent(lesson, phase);
  renderSidebar(); // Update active state
  document.getElementById('lesson-search').value = ''; // Reset search
  window.scrollTo(0, 0);
  document.getElementById('lesson-viewport').scrollTo(0, 0);
}

function renderLessonContent(lesson, phase) {
  const container = document.getElementById('lesson-viewport');

  container.innerHTML = `
    <div class="lesson-page">
      <header class="lesson-header">
        <span class="lesson-phase-tag">${phase.title}</span>
        <h1 class="lesson-title">${lesson.title}</h1>
        <p class="lesson-meta">Estimated time: 5-10 mins • Earn up to 50 XP</p>
      </header>

      <section class="content-section">
        <div class="explanation-block">
          <p class="en-text">${lesson.en}</p>
          <p class="arabic-text">${lesson.ar}</p>
        </div>
      </section>

      <section class="content-section">
        <h3><span class="icon">💡</span> Examples</h3>
        <div class="example-tabs">
          ${lesson.examples.map((ex, i) => `
            <button class="ex-tab ${i === 0 ? 'active' : ''}" onclick="switchTab(this, ${i})">${ex.level}</button>
          `).join('')}
        </div>
        <div class="example-panels">
          ${lesson.examples.map((ex, i) => `
            <div class="ex-panel ${i === 0 ? 'active' : ''}" id="ex-panel-${i}">
              <div class="code-block-wrap">
                <div class="code-label"><span>Dart Loop Simulation</span> <button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
                <pre><code>${highlightCode(ex.code)}</code></pre>
              </div>
              <p class="en-text">${ex.desc}</p>
              <p class="arabic-text">${ex.descAr}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <div class="info-box why">
        <h4>Why This Matters</h4>
        <p class="en-text">${lesson.why}</p>
        <p class="arabic-text">${lesson.whyAr}</p>
      </div>

      <div class="info-box mistake">
        <h4>Common Mistakes</h4>
        ${lesson.mistakes.map(m => `
          <div class="mistake-item">
            <p class="en-text">❌ ${m.bad}</p>
            <p class="arabic-text">❌ ${m.badAr}</p>
            <p class="en-text">✅ ${m.good}</p>
            <p class="arabic-text">✅ ${m.goodAr}</p>
          </div>
        `).join('')}
      </div>

      <div class="info-box good">
        <h4>Good Code vs Bad Code</h4>
        <div class="bad-code">${lesson.goodVsBad.bad}</div>
        <div style="margin: 5px 0; text-align: center; color: var(--text-muted);">vs</div>
        <div class="good-code">${lesson.goodVsBad.good}</div>
      </div>

      <!-- Quiz Section via quiz.js -->
      <div id="quiz-container" class="quiz-section"></div>
      
      <div class="complete-btn-wrap">
        <button id="complete-lesson-btn" class="complete-btn" disabled>Complete Lesson & Unlock Next</button>
        <p class="quiz-progress-hint">Finish all practice questions to complete the lesson.</p>
      </div>
    </div>
  `;

  // Initialize Quiz for this lesson
  initQuiz(lesson);
}

// ----- Utilities -----

function highlightCode(code) {
  return code
    .replace(/\/\/.*/g, m => `<span class="cm">${m}</span>`)
    .replace(/\b(void|class|var|int|double|String|bool|final|const|dynamic|if|else|switch|case|break|default|for|in|while|do|return|async|await|required|late)\b/g, '<span class="kw">$1</span>')
    .replace(/"(.*?)"/g, '<span class="st">"$1"</span>')
    .replace(/'(.*?)'/g, '<span class="st">\'$1\'</span>')
    .replace(/\b(\d+)\b/g, '<span class="nm">$1</span>')
    .replace(/([{}()\[\]])/g, '<span class="bl">$1</span>');
}

window.switchTab = (btn, index) => {
  const tabs = btn.parentElement.querySelectorAll('.ex-tab');
  const panels = btn.parentElement.nextElementSibling.querySelectorAll('.ex-panel');
  tabs.forEach(t => t.classList.remove('active'));
  panels.forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  panels[index].classList.add('active');
};

window.copyCode = (btn) => {
  const code = btn.closest('.code-block-wrap').querySelector('pre').textContent;
  navigator.clipboard.writeText(code);
  btn.textContent = 'Copied!';
  btn.classList.add('copied');
  setTimeout(() => {
    btn.textContent = 'Copy';
    btn.classList.remove('copied');
  }, 2000);
};

// ----- Progression & XP -----

function saveProgress() {
  localStorage.setItem('dart_progress', JSON.stringify(userProgress));
  updateGlobalProgress();
}

function updateGlobalProgress() {
  const allLessons = COURSE_DATA.flatMap(p => p.lessons);
  const total = allLessons.length;
  const done = userProgress.completed.length;
  const pct = Math.round((done / total) * 100);

  document.getElementById('global-progress-fill').style.width = pct + '%';
  document.getElementById('global-progress-pct').textContent = pct + '%';
  document.getElementById('xp-count').textContent = userProgress.xp;

  updateBadges(userProgress.xp);
}

function updateBadges(xp) {
  const badges = [
    { xp: 100, icon: '🌱', name: 'Beginner' },
    { xp: 300, icon: '🔥', name: 'Dedicated' },
    { xp: 600, icon: '🧠', name: 'Logic Master' },
    { xp: 1000, icon: '🎯', name: 'Dart Pro' },
    { xp: 2000, icon: '🚀', name: 'Flutter Ready' }
  ];

  const currentBadge = badges.reverse().find(b => xp >= b.xp);
  document.getElementById('badge-display').textContent = currentBadge ? `${currentBadge.icon} ${currentBadge.name}` : '';
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('visible'), 50);
  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.classList.add('hidden'), 350);
  }, 3000);
}

// ----- UI Interactions -----

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const content = document.getElementById('content-area');
  sidebar.classList.toggle('collapsed');
  content.classList.toggle('sidebar-hidden');

  // Mobile handling
  if (window.innerWidth <= 900) {
    sidebar.classList.toggle('mobile-open');
  }
}

function initThemes() {
  const themes = ['default', 'violet', 'sky', 'emerald', 'rose', 'amber', 'indigo', 'teal', 'orange', 'pink'];
  const picker = document.getElementById('theme-picker');

  themes.forEach(t => {
    const dot = document.createElement('div');
    dot.className = `theme-dot ${userProgress.theme === t ? 'active' : ''}`;
    dot.style.background = getComputedStyle(document.documentElement).getPropertyValue(`--accent`).trim();
    // Simple way to get theme color from CSS vars if we apply it temporarily
    dot.dataset.theme = t;
    dot.onclick = () => setTheme(t);
    picker.appendChild(dot);
  });
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  userProgress.theme = theme;
  saveProgress();

  document.querySelectorAll('.theme-dot').forEach(d => {
    d.classList.toggle('active', d.dataset.theme === theme);
  });
}

function handleLangToggle(e) {
  if (!e.target.classList.contains('lang-btn')) return;
  const lang = e.target.dataset.lang;
  setLang(lang);
}

function setLang(lang) {
  document.body.setAttribute('data-lang', lang);
  userProgress.lang = lang;
  saveProgress();

  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
}

function handleReadingMode(e) {
  const isEnabled = e.target.checked;
  document.body.classList.toggle('reading-mode', isEnabled);
  userProgress.readingMode = isEnabled;
  saveProgress();
}
