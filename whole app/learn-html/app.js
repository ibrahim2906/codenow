// HTML Learning Application - Main JavaScript Engine
(function () {
  'use strict';

  // State Management
  const state = {
    currentLesson: 1,
    completedLessons: new Set(),
    langMode: 'both', // 'en', 'ar', 'both'
    theme: 'default',
    sidebarOpen: true,
    showProjects: false
  };

  // Load state from localStorage
  function loadState() {
    try {
      const saved = localStorage.getItem('htmlLearningState');
      if (saved) {
        const parsed = JSON.parse(saved);
        state.currentLesson = parseInt(parsed.currentLesson, 10) || 1;
        state.completedLessons = new Set(parsed.completedLessons ? parsed.completedLessons.map(id => parseInt(id, 10)) : []);
        state.langMode = parsed.langMode || 'both';
        state.theme = parsed.theme || 'default';
        state.sidebarOpen = parsed.sidebarOpen !== false;
      }
    } catch (e) { console.log('State load error'); }
  }

  // Save state to localStorage
  function saveState() {
    localStorage.setItem('htmlLearningState', JSON.stringify({
      currentLesson: state.currentLesson,
      completedLessons: [...state.completedLessons],
      langMode: state.langMode,
      theme: state.theme,
      sidebarOpen: state.sidebarOpen
    }));
  }

  // Get total lessons
  function getTotalLessons() {
    return window.lessonsData ? window.lessonsData.length : 0;
  }

  // Initialize App
  function init() {
    loadState();
    applyTheme(state.theme);
    renderSidebar();
    renderLesson(state.currentLesson);
    updateProgress();
    setupEventListeners();
    if (!state.sidebarOpen) toggleSidebar();
  }

  // Apply theme
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    state.theme = theme;
    saveState();
  }

  // Render Sidebar
  function renderSidebar() {
    const list = document.getElementById('lessonList');
    if (!list || !window.lessonsData) return;

    let html = '';
    let currentPhase = '';

    window.lessonsData.forEach((lesson, idx) => {
      if (lesson.phaseTitle !== currentPhase) {
        currentPhase = lesson.phaseTitle;
        html += `<div class="phase-header">Phase ${lesson.phase}: ${lesson.phaseTitle}</div>`;
      }

      const isCompleted = state.completedLessons.has(lesson.id);
      const isActive = state.currentLesson === lesson.id;
      const isLocked = !isCompleted && lesson.id > 1 && !state.completedLessons.has(lesson.id - 1);

      html += `
        <div class="lesson-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}"
             data-lesson="${lesson.id}" ${isLocked ? '' : 'onclick="app.goToLesson(' + lesson.id + ')"'}>
          <div class="lesson-icon">${isCompleted ? '✓' : lesson.id}</div>
          <span class="lesson-title">${lesson.title}</span>
        </div>
      `;
    });

    // Add Projects link
    html += `
      <div class="phase-header">Final</div>
      <div class="lesson-item ${state.showProjects ? 'active' : ''}" onclick="app.showProjects()">
        <div class="lesson-icon">🎯</div>
        <span class="lesson-title">Final Projects</span>
      </div>
    `;

    list.innerHTML = html;
  }

  // Update Progress Bar
  function updateProgress() {
    const total = getTotalLessons();
    const completed = state.completedLessons.size;
    const percent = total > 0 ? (completed / total) * 100 : 0;

    const fill = document.getElementById('progressFill');
    const text = document.getElementById('progressText');

    if (fill) fill.style.width = percent + '%';
    if (text) text.textContent = `${completed} / ${total} Lessons (${Math.round(percent)}%)`;
  }

  // Render Lesson Content
  function renderLesson(lessonId) {
    lessonId = parseInt(lessonId, 10) || 1;
    state.showProjects = false;
    const lesson = window.lessonsData?.find(l => l.id === lessonId);
    if (!lesson) return;

    state.currentLesson = lessonId;
    saveState();
    renderSidebar();

    const content = document.getElementById('lessonContent');
    if (!content) return;

    let html = `
      <div class="lesson-header">
        <h1>${lesson.title}</h1>
        <div class="lesson-meta">
          <span class="lesson-badge">Phase ${lesson.phase}</span>
          <span class="lesson-badge">${lesson.phaseTitle}</span>
          <span class="lesson-badge">Lesson ${lessonId} of ${getTotalLessons()}</span>
        </div>
      </div>
    `;

    const c = lesson.content;

    // Integrated Explanation with Examples
    if (c.explanation) {
      html += `<div class="section"><h2>📖 Explanation | الشرح</h2>`;


      c.explanation.forEach((ex, idx) => {
        // Explanation point
        html += `<div class="explanation-block">`;
        html += `<div class="explanation-point">`;
        if (state.langMode === 'en' || state.langMode === 'both') {
          html += `<p class="explanation-en"><span class="point-number">${idx + 1}</span> ${escapeHtml(ex.en)}</p>`;
        }
        if ((state.langMode === 'ar' || state.langMode === 'both') && ex.ar) {
          html += `<div class="arabic-text">${escapeHtml(ex.ar)}</div>`;
        }
        html += `</div>`;

        // Show related example if exists (match by index)
        if (c.examples && c.examples[idx]) {
          const example = c.examples[idx];
          html += `
                    <div class="inline-example">
                        <div class="example-label">${example.level} Example | مثال ${example.level === 'Beginner' ? 'مبتدئ' : example.level === 'Intermediate' ? 'متوسط' : 'متقدم'}</div>
                        <p class="example-desc">${example.desc || ''}</p>
                        <div class="code-block">
                            <div class="code-header">
                                <span>HTML</span>
                                <div class="code-actions">
                                    <button class="run-btn" onclick="app.runCode(this)">▶ Run</button>
                                    <button class="copy-btn" onclick="app.copyCode(this)">📋 Copy</button>
                                </div>
                            </div>
                            <pre><code>${escapeHtml(example.code)}</code></pre>
                        </div>
                    </div>`;
        }
        html += `</div>`;
      });

      // Show any remaining examples not matched with explanations
      if (c.examples && c.examples.length > c.explanation.length) {
        html += `<div class="additional-examples"><h3>💻 Additional Examples | أمثلة إضافية</h3>`;
        for (let i = c.explanation.length; i < c.examples.length; i++) {
          const example = c.examples[i];
          html += `
                    <div class="inline-example standalone">
                        <div class="example-label">${example.level} Example | مثال ${example.level === 'Beginner' ? 'مبتدئ' : example.level === 'Intermediate' ? 'متوسط' : 'متقدم'}</div>
                        <p class="example-desc">${example.desc || ''}</p>
                        <div class="code-block">
                            <div class="code-header">
                                <span>HTML</span>
                                <div class="code-actions">
                                    <button class="run-btn" onclick="app.runCode(this)">▶ Run</button>
                                    <button class="copy-btn" onclick="app.copyCode(this)">📋 Copy</button>
                                </div>
                            </div>
                            <pre><code>${escapeHtml(example.code)}</code></pre>
                        </div>
                    </div>`;
        }
        html += `</div>`;
      }

      html += `</div>`;
    }

    // Why This Matters
    if (c.why) {
      html += `
        <div class="info-box why">
          <h4>💡 Why This Matters in Real Projects | لماذا هذا مهم في المشاريع الحقيقية</h4>
          <p>${state.langMode !== 'ar' ? escapeHtml(c.why) : ''}</p>
          ${(state.langMode === 'ar' || state.langMode === 'both') && c.whyAr ? `<div class="arabic-text">${escapeHtml(c.whyAr)}</div>` : ''}
        </div>
      `;
    }

    // Common Mistakes
    if (c.mistakes && c.mistakes.length) {
      html += `<div class="section"><h2>⚠️ Common Mistakes</h2>`;
      c.mistakes.forEach(m => {
        html += `
          <div class="comparison">
            <div class="comparison-box bad">
              <div class="comparison-header">❌ Bad Practice</div>
              <div class="code-block"><pre><code>${escapeHtml(m.bad)}</code></pre></div>
            </div>
            <div class="comparison-box good">
              <div class="comparison-header">✅ Good Practice</div>
              <div class="code-block"><pre><code>${escapeHtml(m.good)}</code></pre></div>
            </div>
          </div>
          <div class="info-box tips"><h4>Why?</h4><p>${escapeHtml(m.why)}</p></div>
        `;
      });
      html += `</div>`;
    }

    // MCQs
    if (c.mcqs && c.mcqs.length) {
      html += `<div class="section practice-section"><h2>📝 Quick Quiz</h2><div class="mcq-container">`;
      c.mcqs.forEach((mcq, i) => {
        html += `
          <div class="mcq-question" data-correct="${mcq.correct}" data-answered="false">
            <p><strong>Q${i + 1}:</strong> ${escapeHtml(mcq.q)}</p>
            <div class="mcq-options">
              ${mcq.options.map((opt, oi) => `
                <div class="mcq-option" data-option="${oi}" onclick="app.checkMcq(this, ${oi}, ${mcq.correct})">${escapeHtml(opt)}</div>
              `).join('')}
            </div>
            <div class="mcq-feedback"></div>
          </div>
        `;
      });
      html += `</div></div>`;
    }

    // Navigation
    const prevLesson = lessonId > 1 ? lessonId - 1 : null;
    const nextLesson = lessonId < getTotalLessons() ? lessonId + 1 : null;
    const isCompleted = state.completedLessons.has(lessonId);
    const canProceed = isCompleted || lessonId === 1;

    html += `
      <div class="lesson-nav">
        <button class="nav-btn" ${prevLesson ? `onclick="app.goToLesson(${prevLesson})"` : 'disabled'}>
          ← Previous
        </button>
        ${!isCompleted ? `
          <button class="nav-btn complete" onclick="app.completeLesson(${lessonId})">
            ✓ Mark Complete
          </button>
        ` : ''}
        <button class="nav-btn" ${nextLesson && canProceed ? `onclick="app.goToLesson(${nextLesson})"` : 'disabled'}>
          Next →
        </button>
      </div>
    `;

    content.innerHTML = html;
    window.scrollTo(0, 0);
  }

  // Show Projects Page
  function showProjects() {
    state.showProjects = true;
    renderSidebar();

    const content = document.getElementById('lessonContent');
    if (!content || !window.projectsData) return;

    let html = `
      <div class="lesson-header">
        <h1>🎯 Final Projects</h1>
        <div class="lesson-meta">
          <span class="lesson-badge">10 Projects</span>
          <span class="lesson-badge">Easy to Advanced</span>
        </div>
      </div>
      <div class="section">
        <h2>Practice What You've Learned</h2>
        <p>Complete these projects to reinforce your HTML skills. Start with easy projects and work your way up!</p>
      </div>
      <div class="projects-grid">
    `;

    window.projectsData.forEach(project => {
      html += `
        <div class="project-card" onclick="app.showProject(${project.id})">
          <div class="project-preview">📄</div>
          <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <span class="project-difficulty ${project.difficulty}">${project.difficulty.toUpperCase()}</span>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    content.innerHTML = html;
    window.scrollTo(0, 0);
  }

  // Show Single Project
  function showProject(projectId) {
    const project = window.projectsData?.find(p => p.id === projectId);
    if (!project) return;

    const content = document.getElementById('lessonContent');
    if (!content) return;

    let html = `
      <div class="lesson-header">
        <h1>${project.title}</h1>
        <div class="lesson-meta">
          <span class="project-difficulty ${project.difficulty}">${project.difficulty.toUpperCase()}</span>
        </div>
      </div>
      <div class="section">
        <h2>📋 Project Description</h2>
        <p>${project.description}</p>
        <h3>Skills Used:</h3>
        <ul>${project.skills.map(s => `<li>${s}</li>`).join('')}</ul>
      </div>
      <div class="section">
        <h2>📝 Starter Template</h2>
        <div class="code-block">
          <div class="code-header">
            <span>HTML</span>
            <button class="copy-btn" onclick="app.copyCode(this)">📋 Copy</button>
          </div>
          <pre><code>${escapeHtml(project.template)}</code></pre>
        </div>
      </div>
      <div class="section">
        <h2>🖥️ Live Preview</h2>
        <textarea class="challenge-editor" id="projectEditor" oninput="app.updatePreview()">${escapeHtml(project.template)}</textarea>
        <iframe class="preview-frame" id="projectPreview" style="width:100%;height:300px;border:1px solid var(--border);"></iframe>
      </div>
      <div class="lesson-nav">
        <button class="nav-btn" onclick="app.showProjects()">← Back to Projects</button>
      </div>
    `;

    content.innerHTML = html;
    updatePreview();
    window.scrollTo(0, 0);
  }

  // Update Preview
  function updatePreview() {
    const editor = document.getElementById('projectEditor');
    const preview = document.getElementById('projectPreview');
    if (editor && preview) {
      preview.srcdoc = editor.value;
    }
  }

  // Complete Lesson
  function completeLesson(lessonId) {
    // Save scroll position before re-render
    const mainContent = document.querySelector('.main-content');
    const scrollPos = mainContent ? mainContent.scrollTop : 0;

    state.completedLessons.add(lessonId);
    saveState();
    updateProgress();
    renderSidebar();
    renderLesson(lessonId);

    // Restore scroll position after re-render
    if (mainContent) {
      mainContent.scrollTop = scrollPos;
    }
  }

  // Go to Lesson
  function goToLesson(lessonId) {
    const lesson = window.lessonsData?.find(l => l.id === lessonId);
    if (!lesson) return;

    // Check if locked
    if (lessonId > 1 && !state.completedLessons.has(lessonId - 1) && !state.completedLessons.has(lessonId)) {
      return;
    }

    renderLesson(lessonId);
  }

  // Check MCQ Answer
  function checkMcq(el, selected, correct) {
    const question = el.closest('.mcq-question');
    if (question.dataset.answered === 'true') return;

    question.dataset.answered = 'true';
    const options = question.querySelectorAll('.mcq-option');
    const feedback = question.querySelector('.mcq-feedback');

    options.forEach((opt, i) => {
      opt.style.pointerEvents = 'none';
      if (i === correct) opt.classList.add('correct');
      if (i === selected && selected !== correct) opt.classList.add('wrong');
    });

    if (selected === correct) {
      feedback.className = 'mcq-feedback correct';
      feedback.textContent = '✓ Correct!';
    } else {
      feedback.className = 'mcq-feedback wrong';
      feedback.textContent = '✗ Incorrect. The correct answer is highlighted.';
    }
  }

  // Copy Code
  function copyCode(btn) {
    const code = btn.closest('.code-block').querySelector('code').textContent;
    navigator.clipboard.writeText(code).then(() => {
      btn.textContent = '✓ Copied!';
      setTimeout(() => btn.textContent = '📋 Copy', 2000);
    });
  }

  // Run Code - Show preview in modal
  function runCode(btn) {
    const code = btn.closest('.code-block').querySelector('code').textContent;

    // Create or get modal
    let modal = document.getElementById('codePreviewModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'codePreviewModal';
      modal.className = 'code-preview-modal';
      modal.innerHTML = `
        <div class="code-preview-content">
          <div class="code-preview-header">
            <h3>🖥️ Live Preview | معاينة مباشرة</h3>
            <button class="close-preview-btn" onclick="app.closePreview()">✕</button>
          </div>
          <iframe id="codePreviewFrame" sandbox="allow-scripts"></iframe>
        </div>
      `;
      document.body.appendChild(modal);

      // Close on background click
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closePreview();
      });
    }

    // Build full HTML document
    const fullHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, sans-serif;
            padding: 20px;
            background: #1a1a2e;
            color: #eaeaea;
            min-height: 100vh;
            margin: 0;
          }
          button {
            padding: 10px 20px;
            margin: 5px;
            cursor: pointer;
            border-radius: 5px;
            border: none;
            background: #58a6ff;
            color: white;
            font-size: 14px;
            transition: all 0.3s;
          }
          button:hover { background: #79b8ff; transform: scale(1.05); }
          input, textarea, select {
            padding: 10px;
            margin: 5px;
            border-radius: 5px;
            border: 1px solid #444;
            background: #2a2a4a;
            color: white;
            font-size: 14px;
          }
          a { color: #58a6ff; }
          table { border-collapse: collapse; width: 100%; margin: 10px 0; }
          th, td { border: 1px solid #444; padding: 10px; text-align: left; }
          th { background: #2a2a4a; }
          img { max-width: 100%; height: auto; border-radius: 8px; }
          h1, h2, h3, h4, h5, h6 { color: #58a6ff; margin: 10px 0; }
          ul, ol { padding-left: 20px; }
          li { margin: 5px 0; }
          form { background: #2a2a4a; padding: 20px; border-radius: 10px; margin: 10px 0; }
          fieldset { border: 1px solid #444; border-radius: 8px; padding: 15px; margin: 10px 0; }
          legend { color: #58a6ff; padding: 0 10px; }
        </style>
      </head>
      <body>
        ${code}
      </body>
      </html>
    `;

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Load content into iframe
    const iframe = document.getElementById('codePreviewFrame');
    iframe.srcdoc = fullHtml;
  }

  // Close Preview Modal
  function closePreview() {
    const modal = document.getElementById('codePreviewModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Toggle Sidebar
  function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('collapsed');
    state.sidebarOpen = !sidebar.classList.contains('collapsed');
    saveState();
  }

  // Setup Event Listeners
  function setupEventListeners() {
    // Theme select
    const themeSelect = document.getElementById('themeSelect');
    if (themeSelect) {
      themeSelect.value = state.theme;
      themeSelect.addEventListener('change', (e) => applyTheme(e.target.value));
    }

    // Language select
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
      langSelect.value = state.langMode;
      langSelect.addEventListener('change', (e) => {
        state.langMode = e.target.value;
        saveState();
        if (state.showProjects) {
          showProjects();
        } else {
          renderLesson(state.currentLesson);
        }
      });
    }

    // Sidebar toggle
    const toggle = document.querySelector('.sidebar-toggle');
    if (toggle) toggle.addEventListener('click', toggleSidebar);
  }

  // Escape HTML
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Expose public API
  window.app = {
    goToLesson,
    completeLesson,
    checkMcq,
    copyCode,
    runCode,
    closePreview,
    showProjects,
    showProject,
    updatePreview,
    toggleSidebar
  };

  // Initialize when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
