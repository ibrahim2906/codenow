// lessons.js - Lesson Content Renderer
const Lessons = (() => {
  let currentLang = 'en'; // en, ar, both
  let currentLesson = null;

  function init() {
    setupLanguageToggle();
  }

  function setupLanguageToggle() {
    document.addEventListener('click', (e) => {
      if (e.target.matches('.lang-btn')) {
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentLang = e.target.dataset.lang;
        if (currentLesson) renderLesson(currentLesson);
      }
    });
  }

  function renderLesson(lesson) {
    currentLesson = lesson;
    const container = document.getElementById('lesson-content');
    if (!container) return;
    container.classList.add('entering');
    setTimeout(() => {
      container.innerHTML = buildLessonHTML(lesson);
      container.classList.remove('entering');
      container.classList.add('active');
      renderExamples(lesson);
      setupMCQHandlers();
    }, 150);
  }

  function buildLessonHTML(lesson) {
    return `
      <div class="lesson-header animate-fade-in-up">
        <h1 class="lesson-title">${lesson.title}</h1>
        ${lesson.titleAr ? `<p class="lesson-subtitle arabic-text">${lesson.titleAr}</p>` : ''}
      </div>

      <div class="lesson-section animate-fade-in-up" style="animation-delay:0.1s">
        <div class="lesson-section-title"><span class="icon">📖</span> Explanation</div>
        <div class="card">
          ${currentLang === 'en' || currentLang === 'both' ? `<p style="line-height:1.8;margin-bottom:${currentLang === 'both' ? '16px' : '0'}">${lesson.explanation}</p>` : ''}
          ${currentLang === 'ar' || currentLang === 'both' ? `<p class="arabic-text" style="line-height:2;color:var(--text-secondary)">${lesson.explanationAr}</p>` : ''}
        </div>
      </div>

      <div class="lesson-section animate-fade-in-up" style="animation-delay:0.15s">
        <div class="lesson-section-title"><span class="icon">🎯</span> Interactive Examples</div>
        <div id="lesson-examples"></div>
      </div>

      <div class="lesson-section animate-fade-in-up" style="animation-delay:0.2s">
        <div class="lesson-section-title"><span class="icon">💡</span> Why This Matters</div>
        <div class="info-box info">
          <span class="info-icon">💡</span>
          <div>
            ${currentLang !== 'ar' ? `<p>${lesson.whyMatters}</p>` : ''}
            ${currentLang !== 'en' && lesson.whyMattersAr ? `<p class="arabic-text" style="margin-top:8px;color:var(--text-secondary)">${lesson.whyMattersAr}</p>` : ''}
          </div>
        </div>
      </div>

      <div class="lesson-section animate-fade-in-up" style="animation-delay:0.25s">
        <div class="lesson-section-title"><span class="icon">⚠️</span> Common Mistakes</div>
        ${lesson.commonMistakes.map(m => `
          <div class="mistake-card">
            <div class="mistake-header wrong">❌ Wrong</div>
            <div class="mistake-body"><div class="code-block"><code>${escapeHtml(m.wrong)}</code></div></div>
            <div class="mistake-header correct">✅ Correct</div>
            <div class="mistake-body"><div class="code-block"><code>${escapeHtml(m.correct)}</code></div></div>
          </div>
        `).join('')}
      </div>

      <div class="lesson-section animate-fade-in-up" style="animation-delay:0.3s">
        <div class="lesson-section-title"><span class="icon">🔄</span> Good CSS vs Bad CSS</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
          <div>
            <div class="info-box danger" style="margin:0"><span class="info-icon">👎</span><div><strong>Bad CSS</strong><div class="code-block" style="margin-top:8px"><code>${escapeHtml(lesson.goodVsBad.bad)}</code></div></div></div>
          </div>
          <div>
            <div class="info-box success" style="margin:0"><span class="info-icon">👍</span><div><strong>Good CSS</strong><div class="code-block" style="margin-top:8px"><code>${escapeHtml(lesson.goodVsBad.good)}</code></div></div></div>
          </div>
        </div>
      </div>

      <div class="lesson-section animate-fade-in-up" style="animation-delay:0.35s">
        <div class="lesson-section-title"><span class="icon">✏️</span> Coding Exercises</div>
        ${lesson.exercises.map((ex, i) => `
          <div class="exercise-card">
            <h4>Exercise ${i + 1}</h4>
            <p>${ex}</p>
            <textarea placeholder="Write your CSS solution here..." spellcheck="false"></textarea>
          </div>
        `).join('')}
      </div>

      <div class="lesson-section animate-fade-in-up" style="animation-delay:0.4s">
        <div class="lesson-section-title"><span class="icon">🏗️</span> Layout Challenges</div>
        ${lesson.challenges.map((ch, i) => `
          <div class="exercise-card">
            <h4>Challenge ${i + 1}</h4>
            <p>${ch}</p>
            <textarea placeholder="Write your CSS solution here..." spellcheck="false"></textarea>
          </div>
        `).join('')}
      </div>

      <div class="lesson-section animate-fade-in-up" style="animation-delay:0.45s">
        <div class="lesson-section-title"><span class="icon">📝</span> Quiz (${lesson.mcqs.length} Questions)</div>
        <div id="mcq-container">
          ${lesson.mcqs.map((mcq, qi) => `
            <div class="mcq-card" data-question="${qi}" data-answer="${mcq.answer}">
              <div class="mcq-question">${qi + 1}. ${mcq.q}</div>
              <div class="mcq-options">
                ${mcq.options.map((opt, oi) => `
                  <div class="mcq-option" data-option="${oi}">
                    <span class="option-letter">${String.fromCharCode(65 + oi)}</span>
                    <span>${opt}</span>
                  </div>
                `).join('')}
              </div>
              <div class="mcq-feedback" style="display:none;margin-top:10px;font-size:14px;font-weight:600"></div>
            </div>
          `).join('')}
        </div>
        <div style="text-align:center;margin-top:20px">
          <button class="btn btn-primary" id="check-answers-btn">Check All Answers</button>
          <div id="score-display" style="margin-top:15px;font-size:18px;font-weight:700;display:none"></div>
        </div>
      </div>
    `;
  }

  function renderExamples(lesson) {
    const container = document.getElementById('lesson-examples');
    if (!container || !lesson.examples) return;
    lesson.examples.forEach(ex => {
      Playground.renderLessonExample(ex, container);
    });
  }

  function setupMCQHandlers() {
    document.querySelectorAll('.mcq-option').forEach(opt => {
      opt.addEventListener('click', function () {
        const card = this.closest('.mcq-card');
        card.querySelectorAll('.mcq-option').forEach(o => o.classList.remove('selected'));
        this.classList.add('selected');
      });
    });
    const checkBtn = document.getElementById('check-answers-btn');
    if (checkBtn) {
      checkBtn.addEventListener('click', checkAllAnswers);
    }
  }

  function checkAllAnswers() {
    let score = 0, total = 0;
    document.querySelectorAll('.mcq-card').forEach(card => {
      total++;
      const correct = parseInt(card.dataset.answer);
      const selected = card.querySelector('.mcq-option.selected');
      const feedback = card.querySelector('.mcq-feedback');
      card.querySelectorAll('.mcq-option').forEach(o => o.classList.remove('correct', 'wrong'));
      if (selected) {
        const chosen = parseInt(selected.dataset.option);
        if (chosen === correct) {
          selected.classList.add('correct');
          feedback.textContent = '✅ Correct!';
          feedback.style.color = 'var(--success)';
          score++;
        } else {
          selected.classList.add('wrong');
          card.querySelectorAll('.mcq-option')[correct]?.classList.add('correct');
          feedback.textContent = '❌ Wrong — see the correct answer highlighted.';
          feedback.style.color = 'var(--danger)';
        }
      } else {
        card.querySelectorAll('.mcq-option')[correct]?.classList.add('correct');
        feedback.textContent = '⚠️ No answer selected.';
        feedback.style.color = 'var(--warning)';
      }
      feedback.style.display = 'block';
    });
    const display = document.getElementById('score-display');
    if (display) {
      const pct = Math.round((score / total) * 100);
      display.style.display = 'block';
      display.innerHTML = `Score: ${score}/${total} (${pct}%) ${pct >= 70 ? '🎉' : pct >= 50 ? '👍' : '📚'}`;
      display.style.color = pct >= 70 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--danger)';
    }
  }

  function escapeHtml(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  function getCurrentLesson() { return currentLesson; }

  return { init, renderLesson, getCurrentLesson };
})();
