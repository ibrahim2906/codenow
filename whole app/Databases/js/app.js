/**
 * Database Educational App - Main Application Controller
 * Initializes and coordinates all modules
 */

const App = {
    currentSection: null,
    isInitialized: false,
    introStep: 1,
    totalIntroSteps: 5,

    THEMES: [
        { id: 'sapphire', name: 'Sapphire', color: '#6366f1' },
        { id: 'ocean', name: 'Ocean', color: '#06b6d4' },
        { id: 'emerald', name: 'Emerald', color: '#10b981' },
        { id: 'rose', name: 'Rose', color: '#f43f5e' },
        { id: 'amber', name: 'Amber', color: '#f59e0b' },
        { id: 'violet', name: 'Violet', color: '#8b5cf6' },
        { id: 'teal', name: 'Teal', color: '#14b8a6' },
        { id: 'slate', name: 'Slate', color: '#64748b' },
        { id: 'coral', name: 'Coral', color: '#fb923c' },
        { id: 'mint', name: 'Mint', color: '#34d399' },
    ],

    // Initialize the application
    init() {
        if (this.isInitialized) return;
        this.isInitialized = true;

        const progress = Progress.load();

        // Apply saved theme
        if (progress.theme && progress.theme !== 'sapphire') {
            document.documentElement.setAttribute('data-theme', progress.theme);
        }

        // Apply saved language
        if (progress.lang) {
            document.documentElement.setAttribute('data-lang', progress.lang);
        }

        // Check if intro has been seen
        if (!progress.introSeen) {
            this.showIntro();
        } else {
            this.hideIntro();
        }

        this.setupEventListeners();
        this.renderSidebar();
        this.updateProgressBar();
        this.renderThemeGrid();

        // Load last section or first
        const lastSection = progress.lastSection || 'section1';
        if (progress.introSeen) {
            this.loadSection(lastSection);
        }

        // Create intro particles
        this.createParticles();
    },

    setupEventListeners() {
        // Menu toggle (mobile)
        const menuToggle = document.getElementById('menuToggle');
        if (menuToggle) {
            menuToggle.addEventListener('click', () => this.toggleSidebar());
        }
        // Sidebar toggle - always-visible hamburger button
        const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');
        if (sidebarToggleBtn) {
            sidebarToggleBtn.addEventListener('click', () => {
                const sidebar = document.getElementById('sidebar');
                const main = document.getElementById('mainContent');
                if (sidebar && sidebar.classList.contains('collapsed')) {
                    this.expandSidebar();
                } else {
                    this.collapseSidebar();
                }
            });
        }
        // Sidebar collapse X button (legacy - keep for backward compat)
        const sidebarToggle = document.getElementById('sidebarToggle');
        if (sidebarToggle) {
            sidebarToggle.addEventListener('click', () => this.collapseSidebar());
        }
        // Skip intro
        const skipIntro = document.getElementById('skipIntro');
        if (skipIntro) {
            skipIntro.addEventListener('click', () => {
                Progress.setIntroSeen();
                this.hideIntro();
                this.loadSection(Progress.load().lastSection || 'section1');
            });
        }

        // Settings
        const settingsBtn = document.getElementById('settingsBtn');
        if (settingsBtn) {
            settingsBtn.addEventListener('click', () => this.showSettings());
        }
        const closeSettings = document.getElementById('closeSettings');
        if (closeSettings) {
            closeSettings.addEventListener('click', () => this.hideSettings());
        }
        const settingsModal = document.getElementById('settingsModal');
        if (settingsModal) {
            settingsModal.addEventListener('click', (e) => {
                if (e.target === settingsModal) this.hideSettings();
            });
        }

        // Reset progress
        const resetBtn = document.getElementById('resetProgress');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => this.resetProgress());
        }

        // Language toggle
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => this.cycleLang());
        }
        const langSelect = document.getElementById('langSelect');
        if (langSelect) {
            const progress = Progress.load();
            langSelect.value = progress.lang || 'both';
            langSelect.addEventListener('change', (e) => {
                Progress.setLang(e.target.value);
                document.documentElement.setAttribute('data-lang', e.target.value);
            });
        }

        // Projects button
        const projectsBtn = document.getElementById('projectsNavBtn');
        if (projectsBtn) {
            projectsBtn.addEventListener('click', () => this.showProjects());
        }

        // Start journey button
        const startBtn = document.getElementById('startJourney');
        if (startBtn) {
            startBtn.addEventListener('click', () => {
                Progress.setIntroSeen();
                this.hideIntro();
                this.loadSection('section1');
            });
        }

        // Intro dots - scroll to section on click
        document.querySelectorAll('.intro-dot').forEach(dot => {
            dot.addEventListener('click', () => {
                const step = parseInt(dot.dataset.dot);
                const scene = document.querySelector(`.intro-scene[data-step="${step}"]`);
                if (scene) scene.scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Setup scroll-based intro observer
        this.setupIntroScrollObserver();

        // Setup content scroll-reveal observer
        this.setupScrollRevealObserver();
    },

    // Intro animation
    showIntro() {
        const intro = document.getElementById('introScreen');
        const app = document.getElementById('appContainer');
        if (intro) intro.classList.remove('hidden');
        if (app) app.classList.add('hidden');
    },

    hideIntro() {
        const intro = document.getElementById('introScreen');
        const app = document.getElementById('appContainer');
        if (intro) intro.classList.add('hidden');
        if (app) app.classList.remove('hidden');
    },

    createParticles() {
        const container = document.getElementById('introParticles');
        if (!container) return;
        for (let i = 0; i < 20; i++) {
            const p = document.createElement('div');
            p.className = 'intro-particle';
            p.style.width = p.style.height = Math.random() * 6 + 2 + 'px';
            p.style.left = Math.random() * 100 + '%';
            p.style.top = Math.random() * 100 + '%';
            p.style.animationDelay = Math.random() * 4 + 's';
            p.style.animationDuration = Math.random() * 4 + 4 + 's';
            container.appendChild(p);
        }
    },

    // Scroll-based intro observer
    setupIntroScrollObserver() {
        const scenes = document.querySelectorAll('.intro-scene');
        if (!scenes.length) return;

        const introObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    const step = parseInt(entry.target.dataset.step);
                    this.introStep = step;
                    // Update dots
                    document.querySelectorAll('.intro-dot').forEach(d => d.classList.remove('active'));
                    const dot = document.querySelector(`.intro-dot[data-dot="${step}"]`);
                    if (dot) dot.classList.add('active');
                } else {
                    entry.target.classList.remove('in-view');
                }
            });
        }, {
            root: document.getElementById('introScreen'),
            threshold: 0.5
        });

        scenes.forEach(scene => introObserver.observe(scene));
    },

    // Content scroll-reveal observer
    setupScrollRevealObserver() {
        this._scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    this._scrollObserver.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '0px 0px -60px 0px',
            threshold: 0.1
        });
    },

    // Observe newly rendered content elements for scroll-reveal
    observeContentElements() {
        if (!this._scrollObserver) return;
        const selectors = [
            '.section-header',
            '.content-block',
            '.theory-card',
            '.mistake-card',
            '.code-block-container'
        ];
        const elements = document.querySelectorAll(selectors.join(','));
        elements.forEach((el, i) => {
            // Stagger the delay for sequential reveal
            el.style.transitionDelay = `${Math.min(i * 0.08, 0.5)}s`;
            this._scrollObserver.observe(el);
        });
    },

    // Cycle language mode
    cycleLang() {
        const progress = Progress.load();
        const modes = ['both', 'en', 'ar'];
        const current = modes.indexOf(progress.lang || 'both');
        const next = modes[(current + 1) % modes.length];
        Progress.setLang(next);
        document.documentElement.setAttribute('data-lang', next);
        const langSelect = document.getElementById('langSelect');
        if (langSelect) langSelect.value = next;
        this.showToast(`Language: ${next === 'both' ? 'English + Arabic' : next === 'en' ? 'English' : 'Arabic'}`, 'info');
    },

    // Sidebar
    toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) sidebar.classList.toggle('open');
    },

    collapseSidebar() {
        const sidebar = document.getElementById('sidebar');
        const main = document.getElementById('mainContent');
        const btn = document.getElementById('showSidebarBtn');
        if (sidebar) sidebar.classList.add('collapsed');
        if (main) main.classList.add('expanded');
        if (btn) btn.style.display = 'flex';
        Progress.setSidebarOpen(false);
    },

    expandSidebar() {
        const sidebar = document.getElementById('sidebar');
        const main = document.getElementById('mainContent');
        const btn = document.getElementById('showSidebarBtn');
        if (sidebar) sidebar.classList.remove('collapsed');
        if (main) main.classList.remove('expanded');
        if (btn) btn.style.display = 'none';
        Progress.setSidebarOpen(true);
    },

    showIntroFromSidebar() {
        const p = Progress.load();
        p.introSeen = false;
        Progress.save(p);
        this.introStep = 1;
        this.showIntro();
        // Scroll intro back to top
        const introScreen = document.getElementById('introScreen');
        if (introScreen) introScreen.scrollTop = 0;
        this.setupIntroScrollObserver();
        const sidebar = document.getElementById('sidebar');
        if (sidebar) sidebar.classList.remove('open');
    },

    showSettings() {
        const modal = document.getElementById('settingsModal');
        if (modal) modal.classList.remove('hidden');
    },

    hideSettings() {
        const modal = document.getElementById('settingsModal');
        if (modal) modal.classList.add('hidden');
    },

    resetProgress() {
        if (confirm('Are you sure? This will reset ALL progress.')) {
            Progress.reset();
            this.renderSidebar();
            this.updateProgressBar();
            this.loadSection('section1');
            this.hideSettings();
            this.showToast('Progress reset!', 'info');
        }
    },

    renderSidebar() {
        const list = document.getElementById('sectionsList');
        if (!list) return;

        const progress = Progress.load();
        const sections = CURRICULUM.sections;
        let currentPhase = 0;
        let html = '';

        sections.forEach(section => {
            // Phase header
            if (section.phase !== currentPhase) {
                currentPhase = section.phase;
                const phase = CURRICULUM.phases.find(p => p.id === currentPhase);
                if (phase) {
                    html += `<li class="nav-phase-header"><span style="font-size:0.7rem;font-weight:700;text-transform:uppercase;color:var(--accent);letter-spacing:0.05em;padding:12px 12px 4px;display:block">Phase ${phase.id}: ${phase.title}</span></li>`;
                }
            }

            const isCompleted = Progress.isSectionCompleted(section.id);
            const isActive = this.currentSection === section.id;
            const isUnlocked = Progress.isSectionUnlocked(section.id);

            html += Components.renderNavItem(section, isCompleted, isActive, isUnlocked);
        });

        list.innerHTML = html;
    },

    updateProgressBar() {
        const fill = document.getElementById('progressFill');
        const text = document.getElementById('progressText');
        const pct = Progress.getOverallProgress();
        if (fill) fill.style.width = pct + '%';
        if (text) text.textContent = pct + '% Complete';
    },

    // Load section content
    loadSection(sectionId) {
        // Check if section is unlocked
        if (!Progress.isSectionUnlocked(sectionId) && !Progress.isSectionCompleted(sectionId)) {
            this.showToast('Complete previous lessons first!', 'error');
            return;
        }

        this.currentSection = sectionId;
        Progress.setLastSection(sectionId);
        this.renderSidebar();

        const section = CURRICULUM.sections.find(s => s.id === sectionId);
        const content = CONTENT[sectionId];

        if (!section || !content) {
            this.renderComingSoon(sectionId);
            return;
        }

        this.renderSectionContent(section, content);

        // Close mobile sidebar
        const sidebar = document.getElementById('sidebar');
        if (sidebar) sidebar.classList.remove('open');

        // Scroll to top
        const main = document.getElementById('mainContent');
        if (main) main.scrollTop = 0;
        window.scrollTo(0, 0);
    },

    renderSectionContent(section, content) {
        const main = document.getElementById('mainContent');
        if (!main) return;

        const isCompleted = Progress.isSectionCompleted(section.id);
        let html = '';

        // Section Header
        html += `
        <div class="section-header animate-in">
            <h1 class="section-title">${section.title}</h1>
            <p class="section-title-ar">${section.titleAr || ''}</p>
            <div class="section-meta">
                <span>${getIcon('database')} Phase ${section.phase}</span>
                <span>⏱ ${content.duration || '30-60 min'}</span>
                ${isCompleted ? '<span style="color:var(--success)">✅ Completed</span>' : ''}
            </div>
        </div>`;

        // Theory Section
        if (content.theory && content.theory.length > 0) {
            html += `
            <div class="content-block">
                <div class="block-header">
                    <div class="block-icon theory">${getIcon('lightbulb')}</div>
                    <h2 class="block-title">📖 Theory <span class="ar">النظرية</span></h2>
                </div>`;

            content.theory.forEach(t => {
                html += `
                <div class="theory-card animate-in">
                    <div class="theory-heading">${t.heading}</div>
                    ${t.headingAr ? `<div class="theory-heading-ar">${t.headingAr}</div>` : ''}
                    <div class="theory-content">${t.content}</div>
                    ${t.contentAr ? `<div class="theory-content-ar">${t.contentAr}</div>` : ''}
                </div>`;
            });
            html += '</div>';
        }

        // Interactive Visualization
        if (content.visualization) {
            html += `
            <div class="content-block">
                <div class="block-header">
                    <div class="block-icon advanced">${getIcon('eye')}</div>
                    <h2 class="block-title">🎨 Interactive Visualization <span class="ar">التصور التفاعلي</span></h2>
                </div>
                ${content.visualization}
            </div>`;
        }

        // Code Examples
        if (content.codeExamples && content.codeExamples.length > 0) {
            html += `
            <div class="content-block">
                <div class="block-header">
                    <div class="block-icon code">${getIcon('code')}</div>
                    <h2 class="block-title">💻 C++ Implementation <span class="ar">التطبيق بـ C++</span></h2>
                </div>`;

            content.codeExamples.forEach(ex => {
                html += Components.renderCodeBlock(ex.code, ex.title, ex.titleAr);
                if (ex.explanation) {
                    html += `<div class="code-explanation">${ex.explanation}
                    ${ex.explanationAr ? `<div class="code-explanation-ar">${ex.explanationAr}</div>` : ''}</div>`;
                }
            });
            html += '</div>';
        }

        // Why This Matters
        if (content.whyMatters) {
            html += Components.renderWhyMatters(content.whyMatters, content.whyMattersAr);
        }

        // Common Mistakes
        if (content.commonMistakes && content.commonMistakes.length > 0) {
            html += `
            <div class="content-block">
                <div class="block-header">
                    <div class="block-icon mistake">${getIcon('alert')}</div>
                    <h2 class="block-title">⚠️ Common Mistakes <span class="ar">الأخطاء الشائعة</span></h2>
                </div>`;

            content.commonMistakes.forEach(m => {
                html += `
                <div class="mistake-card animate-in">
                    <div class="mistake-title">${m.title} ${m.titleAr ? `<span class="ar">${m.titleAr}</span>` : ''}</div>
                    <div class="mistake-section mistake-wrong">
                        <div class="mistake-label">❌ Wrong</div>
                        <pre class="mistake-code">${Components.escapeHtml(m.wrong)}</pre>
                    </div>
                    <div class="mistake-section mistake-correct">
                        <div class="mistake-label">✅ Correct</div>
                        <pre class="mistake-code">${Components.escapeHtml(m.correct)}</pre>
                    </div>
                    <div class="mistake-explanation">${m.explanation}
                    ${m.explanationAr ? `<br><span class="ar" style="direction:rtl;display:block;margin-top:6px">${m.explanationAr}</span>` : ''}</div>
                </div>`;
            });
            html += '</div>';
        }

        // Advanced Topics
        if (content.advancedTopics) {
            html += `
            <div class="content-block">
                <div class="block-header">
                    <div class="block-icon advanced">${getIcon('target')}</div>
                    <h2 class="block-title">🚀 Advanced Topics <span class="ar">مواضيع متقدمة</span></h2>
                </div>
                <p class="theory-content" style="margin-bottom:16px">${content.advancedTopics.intro}</p>
                ${content.advancedTopics.introAr ? `<p class="theory-content-ar" style="margin-bottom:16px">${content.advancedTopics.introAr}</p>` : ''}`;

            if (content.advancedTopics.topics) {
                content.advancedTopics.topics.forEach(topic => {
                    html += `
                    <div class="theory-card animate-in">
                        <div class="theory-heading">${topic.title}</div>
                        ${topic.titleAr ? `<div class="theory-heading-ar">${topic.titleAr}</div>` : ''}
                        <div class="theory-content">${topic.explanation}</div>
                        ${topic.explanationAr ? `<div class="theory-content-ar">${topic.explanationAr}</div>` : ''}
                        ${topic.example ? Components.renderCodeBlock(topic.example, 'Example', '', true) : ''}
                    </div>`;
                });
            }
            html += '</div>';
        }

        // Practice Problems
        if (content.practice && content.practice.length > 0) {
            html += `
            <div class="content-block">
                <div class="block-header">
                    <div class="block-icon practice">${getIcon('clipboard')}</div>
                    <h2 class="block-title">🧪 Practice Problems <span class="ar">تمارين عملية</span></h2>
                </div>`;

            content.practice.forEach(p => {
                html += Components.renderPractice(p);
            });
            html += '</div>';
        }

        // MCQ Quiz
        if (content.mcq && content.mcq.length > 0) {
            html += `
            <div class="content-block">
                <div class="block-header">
                    <div class="block-icon quiz">${getIcon('search')}</div>
                    <h2 class="block-title">📝 Quiz <span class="ar">الاختبار</span></h2>
                </div>`;

            content.mcq.forEach((q, i) => {
                html += Components.renderMCQ(q, i);
            });
            html += '</div>';
        }

        // Complete section button
        if (!isCompleted) {
            html += `<button class="complete-section-btn" onclick="App.completeSection()">
                ${getIcon('check')} Mark as Complete ✅
            </button>`;
        }

        // Navigation buttons
        const prevSection = this.getPrevSection();
        const nextSection = this.getNextSection();
        html += `
        <div class="nav-buttons">
            ${prevSection ? `<button class="btn btn-ghost" onclick="App.loadSection('${prevSection}')">← Previous Lesson</button>` : '<span></span>'}
            ${nextSection ? `<button class="btn btn-primary" onclick="App.loadSection('${nextSection}')">Next Lesson →</button>` : '<span></span>'}
        </div>`;

        main.innerHTML = html;

        // Observe content for scroll-reveal animations
        requestAnimationFrame(() => this.observeContentElements());
    },

    renderComingSoon(sectionId) {
        const main = document.getElementById('mainContent');
        if (!main) return;
        const section = CURRICULUM.sections.find(s => s.id === sectionId);
        main.innerHTML = `
        <div class="coming-soon">
            <div style="font-size:4rem;margin-bottom:20px">🚧</div>
            <h2>${section ? section.title : 'Section'}</h2>
            <p>Content coming soon...</p>
            <button class="btn btn-primary" style="margin-top:20px" onclick="App.completeSection()">Mark as Complete</button>
        </div>`;
    },

    getPrevSection() {
        const sections = CURRICULUM.sections;
        const idx = sections.findIndex(s => s.id === this.currentSection);
        return idx > 0 ? sections[idx - 1].id : null;
    },

    getNextSection() {
        const sections = CURRICULUM.sections;
        const idx = sections.findIndex(s => s.id === this.currentSection);
        return idx < sections.length - 1 ? sections[idx + 1].id : null;
    },

    completeSection() {
        if (!this.currentSection) return;
        Progress.completeSection(this.currentSection);
        this.renderSidebar();
        this.updateProgressBar();
        this.showToast('Lesson completed! 🎉', 'success');

        const next = this.getNextSection();
        if (next) {
            setTimeout(() => this.loadSection(next), 800);
        } else {
            // Reload to show completed state
            this.loadSection(this.currentSection);
        }
    },

    // Projects
    showProjects() {
        this.currentSection = null;
        this.renderSidebar();
        const main = document.getElementById('mainContent');
        if (!main) return;

        let html = `
        <div class="section-header animate-in">
            <h1 class="section-title">📁 Final Projects <span class="ar">المشاريع النهائية</span></h1>
            <p class="section-title-ar">مشاريع تطبيقية لبناء أنظمة قواعد بيانات</p>
        </div>
        <div class="projects-grid">`;

        CURRICULUM.projects.forEach(p => {
            html += Components.renderProjectCard(p);
        });

        html += '</div>';
        main.innerHTML = html;

        // Observe project cards for scroll-reveal
        requestAnimationFrame(() => this.observeContentElements());

        const sidebar = document.getElementById('sidebar');
        if (sidebar) sidebar.classList.remove('open');
    },

    openProject(projectId) {
        Components.showProjectSolution(projectId);
    },

    // Theme grid
    renderThemeGrid() {
        const grid = document.getElementById('themeGrid');
        if (!grid) return;
        const progress = Progress.load();

        grid.innerHTML = this.THEMES.map(t => `
            <div class="theme-swatch ${progress.theme === t.id ? 'active' : ''}" 
                 style="background:${t.color}" data-theme="${t.id}" data-name="${t.name}"
                 onclick="App.setTheme('${t.id}')">
            </div>
        `).join('');
    },

    setTheme(themeId) {
        Progress.setTheme(themeId);
        if (themeId === 'sapphire') {
            document.documentElement.removeAttribute('data-theme');
        } else {
            document.documentElement.setAttribute('data-theme', themeId);
        }
        this.renderThemeGrid();
        this.showToast(`Theme: ${this.THEMES.find(t => t.id === themeId)?.name || themeId}`, 'info');
    },

    // Toast notification
    showToast(message, type = 'info') {
        const container = document.getElementById('toastContainer');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        container.appendChild(toast);

        setTimeout(() => {
            if (toast.parentNode) toast.parentNode.removeChild(toast);
        }, 3000);
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => App.init());
