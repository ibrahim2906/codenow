document.addEventListener('DOMContentLoaded', () => {
    // ─── State ───────────────────────────────────────────────────────────────
    let currentLessonIndex = parseInt(localStorage.getItem('ds_current_lesson')) || 0;
    let completedLessons = JSON.parse(localStorage.getItem('ds_completed_lessons')) || [];
    let xp = parseInt(localStorage.getItem('ds_xp')) || 0;
    let lang = localStorage.getItem('ds_lang') || 'both';

    // ─── DOM References ───────────────────────────────────────────────────────
    const introScreen = document.getElementById('intro-screen');
    const appContainer = document.getElementById('app-container');
    const startCourseBtn = document.getElementById('start-course-btn');
    const skipIntroBtn = document.getElementById('skip-intro-btn');
    const sidebar = document.getElementById('sidebar');
    const toggleSidebarBtn = document.getElementById('toggle-sidebar');
    const lessonNav = document.getElementById('lesson-nav');
    const lessonContainer = document.getElementById('lesson-container');
    const practiceSection = document.getElementById('practice-section');
    const practiceContent = document.getElementById('practice-content');
    const completeBar = document.getElementById('complete-bar');
    const completeLessonBtn = document.getElementById('complete-lesson-btn');
    const completeBarMsg = document.getElementById('complete-bar-msg');
    const xpCount = document.getElementById('xp-count');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const langSelect = document.getElementById('lang-select');

    // ─── Flatten lessons ──────────────────────────────────────────────────────
    const allLessons = [];
    courseData.forEach(phase => phase.lessons.forEach(l => allLessons.push(l)));

    // ─── Init App ─────────────────────────────────────────────────────────────
    function init() {
        langSelect.value = lang;
        updateXP();
        buildNavigation();
        loadLesson(currentLessonIndex);
        updateProgress();
    }

    // ─── Intro Screen ─────────────────────────────────────────────────────────
    const introSlides = document.querySelectorAll('.intro-step');
    const introDots = document.querySelectorAll('.dot');

    if (introScreen && !localStorage.getItem('ds_has_seen_intro')) {
        let currentSlideIndex = 0;
        const slideDuration = 3800;
        let introTimer;

        startCourseBtn.classList.add('hidden');
        skipIntroBtn.classList.remove('hidden');

        function showSlide(idx) {
            introSlides.forEach((s, i) => {
                s.classList.remove('visible', 'exit');
                introDots[i].classList.remove('active');
                if (i < idx) s.classList.add('exit');
            });
            introSlides[idx].classList.add('visible');
            introDots[idx].classList.add('active');
        }

        function playNextSlide() {
            if (currentSlideIndex < introSlides.length - 1) {
                currentSlideIndex++;
                showSlide(currentSlideIndex);

                if (currentSlideIndex === introSlides.length - 1) {
                    clearInterval(introTimer);
                    startCourseBtn.classList.remove('hidden');
                    startCourseBtn.style.animation = 'pulse 2s infinite';
                    skipIntroBtn.classList.add('hidden');
                }
            }
        }

        // Start first slide visible
        showSlide(0);
        setTimeout(() => {
            introTimer = setInterval(playNextSlide, slideDuration);
        }, 1500);

        skipIntroBtn.addEventListener('click', () => enterApp());
        startCourseBtn.addEventListener('click', () => enterApp());

        function enterApp() {
            clearInterval(introTimer);
            localStorage.setItem('ds_has_seen_intro', 'true');
            introScreen.classList.remove('active');
            introScreen.classList.add('hidden');
            appContainer.classList.remove('hidden');
            init();
        }
    } else {
        // Already seen intro
        if (introScreen) {
            introScreen.classList.remove('active');
            introScreen.classList.add('hidden');
        }
        appContainer.classList.remove('hidden');
        init();
    }

    // ─── Sidebar Toggle ────────────────────────────────────────────────────────
    // Create a fixed-position "open sidebar" tab dynamically — doesn't affect content layout
    const openTab = document.createElement('button');
    openTab.id = 'open-sidebar-tab';
    openTab.innerHTML = '&#9776;';
    openTab.title = 'Open Sidebar';
    openTab.style.cssText = `
        display: none;
        position: fixed;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        z-index: 100;
        background: var(--glass-bg);
        border: 1px solid var(--glass-border);
        border-left: none;
        border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
        color: var(--text-secondary);
        font-size: 1.1rem;
        padding: 14px 10px;
        cursor: pointer;
        backdrop-filter: blur(12px);
        transition: all 0.2s ease;
        line-height: 1;
    `;
    openTab.addEventListener('mouseenter', () => {
        openTab.style.background = 'rgba(99,102,241,0.15)';
        openTab.style.color = 'var(--accent)';
    });
    openTab.addEventListener('mouseleave', () => {
        openTab.style.background = 'var(--glass-bg)';
        openTab.style.color = 'var(--text-secondary)';
    });
    document.body.appendChild(openTab);

    function collapseSidebar() {
        sidebar.classList.add('collapsed');
        openTab.style.display = 'block';
    }

    function expandSidebar() {
        sidebar.classList.remove('collapsed');
        openTab.style.display = 'none';
    }

    toggleSidebarBtn.addEventListener('click', () => {
        if (sidebar.classList.contains('collapsed')) {
            expandSidebar();
        } else {
            collapseSidebar();
        }
    });

    openTab.addEventListener('click', () => expandSidebar());

    // ─── Navigation Builder ───────────────────────────────────────────────────
    function buildNavigation() {
        lessonNav.innerHTML = '';
        let globalIndex = 0;

        courseData.forEach(phase => {
            // Phase header
            const phaseHeader = document.createElement('div');
            phaseHeader.className = 'phase-header';
            phaseHeader.innerHTML = `<h4>${phase.title}</h4><div class="phase-divider"></div>`;
            lessonNav.appendChild(phaseHeader);

            phase.lessons.forEach((lesson) => {
                const isCompleted = completedLessons.includes(lesson.id);
                const isLocked = globalIndex > 0 && !completedLessons.includes(allLessons[globalIndex - 1].id);
                const isActive = globalIndex === currentLessonIndex;

                const btn = document.createElement('button');
                btn.className = 'nav-item';
                if (isActive) btn.classList.add('active');
                if (isLocked) btn.classList.add('locked');
                if (isCompleted && !isActive) btn.classList.add('completed');

                const numSpan = `<span class="nav-num">${String(globalIndex + 1).padStart(2, '0')}</span>`;
                const checkMark = isCompleted ? `<span class="nav-check">✓</span>` : '';
                btn.innerHTML = `${numSpan}${lesson.title}${checkMark}`;

                if (isLocked) {
                    btn.title = "Complete previous lessons to unlock";
                } else {
                    const idx = globalIndex;
                    btn.addEventListener('click', () => {
                        loadLesson(idx);
                        // Auto-collapse sidebar on mobile
                        if (window.innerWidth <= 768) collapseSidebar();
                    });
                }

                lessonNav.appendChild(btn);
                globalIndex++;
            });
        });
    }

    // ─── Load Lesson Content ───────────────────────────────────────────────────
    function loadLesson(index) {
        if (index < 0 || index >= allLessons.length) return;
        if (index > 0 && !completedLessons.includes(allLessons[index - 1].id)) return;

        currentLessonIndex = index;
        localStorage.setItem('ds_current_lesson', index);

        const lesson = allLessons[index];

        // Animate lesson in
        lessonContainer.style.opacity = '0';
        lessonContainer.style.transform = 'translateY(16px)';

        setTimeout(() => {
            lessonContainer.innerHTML = `<div class="lesson-section">${lesson.content}</div>`;
            lessonContainer.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
            lessonContainer.style.opacity = '1';
            lessonContainer.style.transform = 'translateY(0)';

            // Scroll AFTER content is inserted — never before
            const scrollWrapper = document.querySelector('.content-scroll-wrapper');
            if (scrollWrapper) scrollWrapper.scrollTop = 0;

            // Apply language filter after content is in DOM
            applyLanguageFilter();
        }, 80);

        // Update nav immediately
        buildNavigation();

        // Show practice if available
        if (lesson.practice) {
            practiceSection.classList.remove('hidden');
            completeBar.classList.remove('hidden');
            buildPractice(lesson);
        } else {
            practiceSection.classList.add('hidden');
            completeBar.classList.remove('hidden');
            // No practice — unlock complete button immediately
            setCompleteReady(true);
        }
    }

    // ─── Practice System ───────────────────────────────────────────────────────
    function buildPractice(lesson) {
        console.log(`Building practice for: ${lesson.title}`);
        practiceContent.innerHTML = '';
        setCompleteReady(false);

        try {
            let correctAnswersCount = 0;
            let attemptedQuestions = 0;
            const hasQuestions = lesson.practice && lesson.practice.questions;
            const totalQuestions = hasQuestions ? lesson.practice.questions.length : 0;

            // Multiple-Choice Questions
            if (hasQuestions && totalQuestions > 0) {
                lesson.practice.questions.forEach((q, qIndex) => {
                    const block = document.createElement('div');
                    block.className = 'question-block';

                    const qNum = document.createElement('span');
                    qNum.className = 'q-num';
                    qNum.textContent = `Question ${qIndex + 1} of ${totalQuestions}`;

                    const qText = document.createElement('p');
                    qText.innerHTML = `<strong>${q.q}</strong>`;

                    const optionsGrid = document.createElement('div');
                    optionsGrid.className = 'options-grid';

                    const feedback = document.createElement('div');
                    feedback.className = 'answer-feedback';

                    q.options.forEach(opt => {
                        const optBtn = document.createElement('button');
                        optBtn.className = 'opt-btn';
                        optBtn.textContent = opt;

                        optBtn.addEventListener('click', function () {
                            if (optBtn.disabled) return;

                            // Disable all in this block
                            Array.from(optionsGrid.querySelectorAll('.opt-btn')).forEach(b => {
                                b.disabled = true;
                            });

                            if (opt === q.a) {
                                optBtn.classList.add('correct');
                                correctAnswersCount++;
                                feedback.className = 'answer-feedback show correct-fb';
                                feedback.textContent = '✓ Correct!';
                                updateXP(10);
                            } else {
                                optBtn.classList.add('wrong');
                                feedback.className = 'answer-feedback show wrong-fb';
                                feedback.textContent = `✗ Wrong. Correct answer: "${q.a}"`;
                                // Reveal correct answer highlight
                                Array.from(optionsGrid.querySelectorAll('.opt-btn')).forEach(b => {
                                    if (b.textContent === q.a) b.classList.add('reveal-correct');
                                });
                            }

                            attemptedQuestions++;
                            if (attemptedQuestions === totalQuestions) {
                                const score = Math.round((correctAnswersCount / totalQuestions) * 100);
                                completeBarMsg.textContent = `Score: ${correctAnswersCount}/${totalQuestions} (${score}%) — ${score >= 60 ? '🏆 Great job!' : '📚 Review and try again!'}`;
                                setCompleteReady(true);
                            }
                        });

                        optionsGrid.appendChild(optBtn);
                    });

                    block.appendChild(qNum);
                    block.appendChild(qText);
                    block.appendChild(optionsGrid);
                    block.appendChild(feedback);
                    practiceContent.appendChild(block);
                });
            }

            // Coding Challenges
            if (lesson.practice && lesson.practice.coding && lesson.practice.coding.length > 0) {
                const codingHeader = document.createElement('h3');
                codingHeader.className = 'coding-section-title';
                codingHeader.innerHTML = '💻 Coding Challenges';
                practiceContent.appendChild(codingHeader);

                lesson.practice.coding.forEach((c, cIndex) => {
                    const block = document.createElement('div');
                    block.className = 'question-block coding-block glass-card';

                    const qNum = document.createElement('span');
                    qNum.className = 'q-num';
                    qNum.textContent = `Challenge ${cIndex + 1}`;

                    const qText = document.createElement('p');
                    // Ensure pre-line preserved for coding tasks
                    qText.style.whiteSpace = 'pre-line';
                    qText.innerHTML = `<strong>${c.q}</strong>`;

                    const answerDiv = document.createElement('div');
                    answerDiv.className = 'coding-answer hidden';
                    answerDiv.innerHTML = `<pre style="background:#060611; padding:1rem; border-radius:10px; border:1px solid rgba(99,102,241,0.15); overflow-x:auto;"><code style="font-family:'JetBrains Mono',monospace; font-size:0.85rem; color:#a5f3fc; line-height:1.7;">${escapeHtml(c.a)}</code></pre>`;

                    const toggleBtn = document.createElement('button');
                    toggleBtn.className = 'show-answer-btn';
                    toggleBtn.innerHTML = '👀 Show Answer';

                    toggleBtn.addEventListener('click', () => {
                        if (answerDiv.classList.contains('hidden')) {
                            answerDiv.classList.remove('hidden');
                            toggleBtn.innerHTML = '🙈 Hide Answer';
                            toggleBtn.classList.add('revealed');
                        } else {
                            answerDiv.classList.add('hidden');
                            toggleBtn.innerHTML = '👀 Show Answer';
                            toggleBtn.classList.remove('revealed');
                        }
                    });

                    block.appendChild(qNum);
                    block.appendChild(qText);
                    block.appendChild(toggleBtn);
                    block.appendChild(answerDiv);
                    practiceContent.appendChild(block);
                });
            }

            // If no MCQs but coding-only or nothing: show complete immediately
            if (totalQuestions === 0) {
                setCompleteReady(true);
            }
        } catch (err) {
            console.error("Error building practice section:", err);
            practiceContent.innerHTML = `<p style="color:var(--error); padding:1rem;">⚠️ Error loading practice module. You can still complete the lesson below.</p>`;
            setCompleteReady(true);
        }
    }

    function setCompleteReady(ready) {
        completeLessonBtn.disabled = !ready;
        completeLessonBtn.style.opacity = ready ? '1' : '0.45';
        completeLessonBtn.style.cursor = ready ? 'pointer' : 'not-allowed';
    }

    function escapeHtml(text) {
        return text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    // ─── Complete Lesson ───────────────────────────────────────────────────────
    completeLessonBtn.addEventListener('click', () => {
        const lessonId = allLessons[currentLessonIndex].id;
        if (!completedLessons.includes(lessonId)) {
            completedLessons.push(lessonId);
            localStorage.setItem('ds_completed_lessons', JSON.stringify(completedLessons));
            updateXP(50);
            updateProgress();
        }

        if (currentLessonIndex < allLessons.length - 1) {
            loadLesson(currentLessonIndex + 1);
        } else {
            completeLessonBtn.textContent = '🎉 Course Complete!';
            completeLessonBtn.disabled = true;
            completeBarMsg.textContent = '🏆 Congratulations! You have mastered all lessons!';
            completeBarMsg.style.color = 'var(--gold)';
        }
    });

    // ─── Language Filtering ────────────────────────────────────────────────────
    langSelect.addEventListener('change', (e) => {
        lang = e.target.value;
        localStorage.setItem('ds_lang', lang);
        applyLanguageFilter();
    });

    function applyLanguageFilter() {
        const enTexts = document.querySelectorAll('.en-text');
        const arTexts = document.querySelectorAll('.ar-text');

        if (lang === 'en') {
            enTexts.forEach(el => el.style.display = 'block');
            arTexts.forEach(el => el.style.display = 'none');
        } else if (lang === 'ar') {
            enTexts.forEach(el => el.style.display = 'none');
            arTexts.forEach(el => el.style.display = 'block');
        } else {
            enTexts.forEach(el => el.style.display = 'block');
            arTexts.forEach(el => el.style.display = 'block');
        }
    }

    // ─── XP & Progress ────────────────────────────────────────────────────────
    function updateXP(amount = 0) {
        xp += amount;
        localStorage.setItem('ds_xp', xp);
        xpCount.textContent = xp;

        // Quick pulse animation
        const display = xpCount.parentElement;
        if (display && amount > 0) {
            display.style.transform = 'scale(1.15)';
            display.style.borderColor = 'var(--gold)';
            setTimeout(() => {
                display.style.transform = '';
                display.style.borderColor = '';
            }, 350);
        }
    }

    function updateProgress() {
        const pct = allLessons.length > 0
            ? Math.round((completedLessons.length / allLessons.length) * 100)
            : 0;
        progressFill.style.width = `${pct}%`;
        progressText.textContent = `${pct}% Completed`;
    }

    // ─── Code Playground Modal ─────────────────────────────────────────────────
    const codePlaygroundModal = document.getElementById('code-playground-modal');
    const closePlaygroundBtn = document.querySelector('.close-btn');
    const runCodeBtn = document.getElementById('run-code-btn');
    const consoleOutput = document.getElementById('console-output');
    const playgroundCode = document.getElementById('playground-code');

    if (closePlaygroundBtn) {
        closePlaygroundBtn.addEventListener('click', () => {
            codePlaygroundModal.classList.add('hidden');
        });
    }

    // Close modal on backdrop click
    codePlaygroundModal.addEventListener('click', (e) => {
        if (e.target === codePlaygroundModal) {
            codePlaygroundModal.classList.add('hidden');
        }
    });

    if (runCodeBtn) {
        runCodeBtn.addEventListener('click', () => {
            consoleOutput.innerHTML = '<span style="color:#fbbf24;">⏳ Compiling C++ code...</span>';
            runCodeBtn.disabled = true;
            setTimeout(() => {
                consoleOutput.innerHTML =
                    '<span style="color:#10b981;">✓ Build Successful — 0 warnings, 0 errors</span><br>' +
                    '<span style="color:#10b981;">✓ Program exited with code 0</span><br><br>' +
                    '<span style="color:#94a3b8;">Output:</span><br>' +
                    '<span style="color:#e2e8f0;">→ Operation completed successfully.</span>';
                runCodeBtn.disabled = false;
            }, 900);
        });
    }

    // Open playground when clicking on a code block
    lessonContainer.addEventListener('click', (e) => {
        const codeBlock = e.target.closest('.code-block');
        if (codeBlock) {
            const codeEl = codeBlock.querySelector('code');
            if (playgroundCode && codePlaygroundModal) {
                playgroundCode.textContent = codeEl ? codeEl.innerText : codeBlock.innerText;
                consoleOutput.innerHTML = '<span style="color:var(--text-muted);">Click ▶ Run Code to simulate execution.</span>';
                codePlaygroundModal.classList.remove('hidden');
            }
        }
    });

    // Keyboard: Escape closes modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !codePlaygroundModal.classList.contains('hidden')) {
            codePlaygroundModal.classList.add('hidden');
        }
    });
});
