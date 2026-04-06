// quiz.js - Interactive Assessment & Practice Engine

let currentAnswers = {
  mcqs: 0,
  thinking: 0,
  coding: 0,
  totalNeeded: 0
};

function initQuiz(lesson) {
  const container = document.getElementById('quiz-container');
  currentAnswers = {
    mcqs: 0,
    thinking: 0,
    coding: 0,
    totalNeeded: (lesson.mcqs?.length || 0) + (lesson.thinkingQs?.length || 0) + (lesson.codingQs?.length || 0) + (lesson.codingChallenge ? 1 : 0)
  };

  container.innerHTML = `
    <h2><span class="icon">🧪</span> Practice & Assessment</h2>
    
    <div class="mcq-container">
      <h3>Multiple Choice Questions</h3>
      ${(lesson.mcqs || []).map((q, i) => `
        <div class="mcq-question" id="mcq-${i}">
          <p class="mcq-q-text">${i + 1}. ${q.q}</p>
          <div class="mcq-options">
            ${q.opts.map((opt, oi) => `
              <div class="mcq-option" onclick="checkMCQ(${i}, ${oi}, ${q.ans}, '${q.fb.replace(/'/g, "\\'")}')">
                <span class="option-letter">${String.fromCharCode(65 + oi)}</span>
                <span class="option-text">${opt}</span>
              </div>
            `).join('')}
          </div>
          <div class="mcq-feedback hidden" id="mcq-fb-${i}"></div>
        </div>
      `).join('')}
    </div>

    ${lesson.thinkingQs?.length ? `
    <div class="thinking-questions">
      <h3>Thinking Questions</h3>
      ${lesson.thinkingQs.map((q, i) => `
        <div class="thinking-q">
          <p>${q.q}</p>
          <textarea placeholder="Type your thought process here..." oninput="handleThinkingInput(this)"></textarea>
          <button class="show-hint-btn" onclick="toggleHint(this)">Show Hint</button>
          <div class="thinking-hint">${q.hint}</div>
        </div>
      `).join('')}
    </div>` : ''}

    ${lesson.codingQs?.length ? `
    <div class="coding-questions">
      <h3>Coding Practice</h3>
      ${lesson.codingQs.map((q, i) => `
        <div class="coding-q">
          <div class="coding-q-label">Task ${i + 1}</div>
          <p>${q.q}</p>
          <textarea class="code-editor" spellcheck="false">${q.start || ''}</textarea>
          <button class="run-btn" onclick="runCode(this, '${q.answer}')">Run Code</button>
          <div class="code-output"></div>
        </div>
      `).join('')}
    </div>` : ''}

    ${lesson.codingChallenge ? `
    <div class="coding-challenge-box">
      <div class="challenge-badge">🔥 Final Challenge</div>
      <h3>Coding Challenge</h3>
      <p>${lesson.codingChallenge.task}</p>
      <div class="code-editor-wrap">
        <textarea class="code-editor" id="final-challenge-editor" spellcheck="false" placeholder="Write your solution here..."></textarea>
      </div>
      <div class="challenge-actions">
        <button class="run-btn" onclick="checkChallenge('${lesson.codingChallenge.answer}')">Verify Solution</button>
        <button class="show-hint-btn" onclick="toggleSolution()">Show Solution</button>
      </div>
      <div id="challenge-output" class="code-output"></div>
      <div id="challenge-solution" class="solution-panel hidden">
        <h4>Reference Solution</h4>
        <pre><code>${lesson.codingChallenge.solution}</code></pre>
      </div>
    </div>` : ''}

    ${lesson.projects?.length ? `
    <div class="projects-gallery">
      <h3><span class="icon">🚀</span> Hands-on Projects</h3>
      <div class="projects-grid">
        ${lesson.projects.map((p, i) => `
          <div class="project-card">
            <div class="project-header">
              <span class="project-difficulty ${p.difficulty.toLowerCase()}">${p.difficulty}</span>
              <h4>${p.title}</h4>
            </div>
            <p>${p.task}</p>
            <div class="project-actions">
              <button class="show-hint-btn" onclick="toggleProjectSolution(${i})">View Answer</button>
            </div>
            <div id="project-sol-${i}" class="project-solution hidden">
              <pre><code>${p.solution}</code></pre>
            </div>
          </div>
        `).join('')}
      </div>
    </div>` : ''}
  `;

  document.getElementById('complete-lesson-btn').onclick = () => finishLesson(lesson.id);
  checkCompletionStatus();
}

window.checkMCQ = (qIdx, optIdx, correctIdx, feedback) => {
  const qEl = document.getElementById(`mcq-${qIdx}`);
  if (qEl.classList.contains('answered')) return;

  const options = qEl.querySelectorAll('.mcq-option');
  const fb = document.getElementById(`mcq-fb-${qIdx}`);

  qEl.classList.add('answered');
  options.forEach((opt, i) => {
    opt.classList.add('disabled');
    if (i === correctIdx) opt.classList.add('correct');
    else if (i === optIdx) opt.classList.add('wrong');
  });

  fb.textContent = feedback;
  fb.className = `mcq-feedback ${optIdx === correctIdx ? 'correct' : 'wrong'}`;
  fb.classList.remove('hidden');

  if (optIdx === correctIdx) {
    currentAnswers.mcqs++;
    addXP(10);
  } else {
    addXP(2); // Small XP for trying
  }

  checkCompletionStatus();
};

window.handleThinkingInput = (textarea) => {
  if (textarea.value.length > 10 && !textarea.dataset.counted) {
    textarea.dataset.counted = "true";
    currentAnswers.thinking++;
    addXP(15);
    checkCompletionStatus();
  }
};

window.toggleHint = (btn) => {
  const hint = btn.nextElementSibling;
  hint.style.display = hint.style.display === 'block' ? 'none' : 'block';
};

window.runCode = (btn, expected) => {
  const editor = btn.previousElementSibling;
  const output = btn.nextElementSibling;
  const code = editor.value;

  output.textContent = "Running...";
  output.className = "code-output visible";

  setTimeout(() => {
    const isCorrect = code.toLowerCase().includes(expected.toLowerCase());
    if (isCorrect) {
      output.textContent = "> Program finished successfully.\n> Output verified!";
      output.classList.remove('error');
      if (!btn.dataset.counted) {
        btn.dataset.counted = "true";
        currentAnswers.coding++;
        addXP(20);
        checkCompletionStatus();
      }
    } else {
      output.textContent = "> Error: Result doesn't match expected outcome.\n> Try using: " + expected;
      output.classList.add('error');
    }
  }, 600);
};

window.checkChallenge = (expected) => {
  const editor = document.getElementById('final-challenge-editor');
  const output = document.getElementById('challenge-output');
  const code = editor.value;

  output.textContent = "Verifying solution...";
  output.className = "code-output visible";

  setTimeout(() => {
    const isCorrect = code.toLowerCase().includes(expected.toLowerCase());
    if (isCorrect) {
      output.textContent = "✅ Challenge Completed! Excellent work.";
      output.classList.remove('error');
      if (!editor.dataset.counted) {
        editor.dataset.counted = "true";
        currentAnswers.coding++;
        addXP(30);
        checkCompletionStatus();
      }
    } else {
      output.textContent = "❌ Not quite right. Review the requirements or check the hint!";
      output.classList.add('error');
    }
  }, 800);
};

window.toggleSolution = () => {
  const sol = document.getElementById('challenge-solution');
  sol.classList.toggle('hidden');
};

window.toggleProjectSolution = (idx) => {
  const sol = document.getElementById(`project-sol-${idx}`);
  sol.classList.toggle('hidden');
};

function checkCompletionStatus() {
  const btn = document.getElementById('complete-lesson-btn');
  const total = currentAnswers.totalNeeded;
  const done = currentAnswers.mcqs + currentAnswers.thinking + currentAnswers.coding;

  // Requirement relaxed: users don't have to solve all questions to proceed
  btn.disabled = false;
}

function addXP(amount) {
  userProgress.xp += amount;
  document.getElementById('xp-count').textContent = userProgress.xp;
  saveProgress();
}

function finishLesson(lessonId) {
  if (!userProgress.completed.includes(lessonId)) {
    userProgress.completed.push(lessonId);
    userProgress.xp += 50; // Completion bonus
    saveProgress();
    showToast("Lesson Completed! +50 XP 🎯");
  }

  // Find next lesson
  const allLessons = COURSE_DATA.flatMap(p => p.lessons);
  const currentIdx = allLessons.findIndex(l => l.id === lessonId);

  if (currentIdx < allLessons.length - 1) {
    loadLesson(allLessons[currentIdx + 1].id);
  } else {
    showCompletionScreen();
  }
}

function showCompletionScreen() {
  const container = document.getElementById('lesson-viewport');
  container.innerHTML = `
    <div class="completion-screen">
      <div class="completion-icon">🏆</div>
      <h1 class="completion-title">Congratulations!</h1>
      <p class="completion-sub">You have mastered the foundations of Dart and Programming Logic. You are now officially ready to start your Flutter journey!</p>
      
      <div class="completion-stats">
        <div class="comp-stat">
          <span class="comp-stat-val">${userProgress.xp}</span>
          <span class="comp-stat-label">Total XP Earned</span>
        </div>
        <div class="comp-stat">
          <span class="comp-stat-val">${userProgress.completed.length}</span>
          <span class="comp-stat-label">Lessons Finished</span>
        </div>
      </div>

      <button class="start-btn" onclick="location.reload()">
        Restart Foundations
      </button>
      
      <p style="margin-top: 2rem; color: var(--text-muted); font-size: 0.9rem;">Next Step: Install Flutter and build your first beautiful UI!</p>
    </div>
  `;
}
