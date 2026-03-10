/**
 * C++ Educational App - Main Application Controller
 * Initializes and coordinates all modules
 */

const App = {
    currentSection: null,
    isInitialized: false,

    /**
     * Initialize the application
     */
    async init() {
        if (this.isInitialized) return;

        // Load progress and render sidebar
        this.renderSidebar();
        this.updateProgressBar();

        // Load last section or default
        const progress = Progress.load();
        await this.loadSection(progress.lastSection || 'section1');

        // Setup event listeners
        this.setupEventListeners();

        this.isInitialized = true;
        console.log('C++ Educational App initialized');
    },

    /**
     * Setup event listeners
     */
    setupEventListeners() {
        // Settings Modal
        document.getElementById('settingsBtn').addEventListener('click', () => this.showSettings());
        document.getElementById('closeSettings').addEventListener('click', () => this.hideSettings());
        document.getElementById('resetProgress').addEventListener('click', () => this.resetProgress());

        // Mobile menu
        document.getElementById('menuToggle')?.addEventListener('click', () => this.toggleSidebar());

        // Projects button
        document.getElementById('projectsNavBtn').addEventListener('click', () => this.showProjects());
    },



    /**
     * Show settings modal
     */
    showSettings() {
        const modal = document.getElementById('settingsModal');
        modal.classList.remove('hidden');
    },

    /**
     * Hide settings modal
     */
    hideSettings() {
        document.getElementById('settingsModal').classList.add('hidden');
    },



    /**
     * Reset progress
     */
    resetProgress() {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            Progress.reset();
            this.renderSidebar();
            this.updateProgressBar();
            this.showToast('Progress reset successfully', 'success');
            this.hideSettings();
        }
    },

    /**
     * Toggle sidebar visibility
     */
    toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        // On desktop, toggle collapsed; on mobile, toggle open
        if (window.innerWidth > 768) {
            sidebar.classList.toggle('collapsed');
        } else {
            sidebar.classList.toggle('open');
        }
    },

    /**
     * Render sidebar navigation
     */
    renderSidebar() {
        const list = document.getElementById('sectionsList');
        const progress = Progress.load();

        list.innerHTML = CURRICULUM.sections.map(section =>
            Components.renderNavItem(section, progress.completedSections.includes(section.id))
        ).join('');
    },

    /**
     * Update progress bar
     */
    updateProgressBar() {
        const percent = Progress.getOverallProgress();
        document.getElementById('progressFill').style.width = `${percent}%`;
        document.getElementById('progressText').textContent = `${percent}% Complete`;
    },

    /**
     * Load section content
     */
    async loadSection(sectionId) {
        const section = CONTENT[sectionId];
        const mainContent = document.getElementById('mainContent');

        // Update active state in sidebar
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.toggle('active', item.dataset.section === sectionId);
        });

        // Save current section
        Progress.setLastSection(sectionId);
        this.currentSection = sectionId;

        // Close mobile sidebar
        document.getElementById('sidebar').classList.remove('open');

        if (!section) {
            // Section content not fully implemented yet
            mainContent.innerHTML = this.renderComingSoon(sectionId);
            return;
        }

        // Render section content
        mainContent.innerHTML = this.renderSectionContent(section);
    },

    /**
     * Render section content
     */
    renderSectionContent(section) {
        const sectionIcon = typeof getIcon === 'function' ? getIcon(section.iconName || 'book') : '';
        const codeIcon = typeof getIcon === 'function' ? getIcon('code') : '';
        const alertIcon = typeof getIcon === 'function' ? getIcon('alert') : '';
        const puzzleIcon = typeof getIcon === 'function' ? getIcon('puzzle') : '';
        const clipboardIcon = typeof getIcon === 'function' ? getIcon('clipboard') : '';
        const lightbulbIcon = typeof getIcon === 'function' ? getIcon('lightbulb') : '';
        const checkIcon = typeof getIcon === 'function' ? getIcon('check') : '';

        return `
            <div class="section-header">
                <h1><span class="section-icon">${sectionIcon}</span> ${section.title}</h1>
                <span class="ar">${section.titleAr}</span>
                <div class="section-meta">
                    <span><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> ${section.duration}</span>
                </div>
            </div>
            
            <!-- Theory -->
            ${section.theory.map(t => `
                <div class="content-block theory-content">
                    <h3>${t.heading}</h3>
                    <p>${t.content}</p>
                    <p class="ar">${t.contentAr}</p>
                </div>
            `).join('')}
            
            <!-- Code Examples -->
            <div class="content-block">
                <h3>
                    ${codeIcon}
                    Code Examples <span class="ar">أمثلة الكود</span>
                </h3>
                ${section.codeExamples.map(ex => `
                    <h4>${ex.title} <span class="ar">${ex.titleAr}</span></h4>
                    ${Components.renderCodeBlock(ex.code, 'example.cpp')}
                    <p>${ex.explanation}</p>
                    <p class="ar">${ex.explanationAr}</p>
                `).join('')}
            </div>
            
            <!-- Common Mistakes -->
            ${section.commonMistakes?.length ? `
                <div class="content-block mistake-block">
                    <h3>${alertIcon} Common Mistakes <span class="ar">الأخطاء الشائعة</span></h3>
                    ${section.commonMistakes.map(m => `
                        <h4>${m.title} <span class="ar">${m.titleAr}</span></h4>
                        <p><strong><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--accent-danger)" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> Wrong:</strong></p>
                        ${Components.renderCodeBlock(m.wrong, 'wrong.cpp', '', false)}
                        <p><strong><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="var(--accent-success)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Correct:</strong></p>
                        ${Components.renderCodeBlock(m.correct, 'correct.cpp', '', false)}
                        <p>${m.explanation}</p>
                        <p class="ar">${m.explanationAr}</p>
                    `).join('')}
                </div>
            ` : ''}
            
            <!-- High-Level Question Explanations -->
            ${section.advancedTopics ? `
                <div class="content-block tip-block">
                    <h3>${lightbulbIcon} Advanced Problem Solving <span class="ar">حل المشكلات المتقدمة</span></h3>
                    <p>${section.advancedTopics.intro}</p>
                    <p class="ar">${section.advancedTopics.introAr}</p>
                    ${section.advancedTopics.topics.map(topic => `
                        <div class="advanced-topic">
                            <h4>${topic.title} <span class="ar">${topic.titleAr}</span></h4>
                            <p>${topic.explanation}</p>
                            <p class="ar">${topic.explanationAr}</p>
                            ${topic.example ? `
                                <p><strong>Example approach: / طريقة الحل:</strong></p>
                                ${Components.renderCodeBlock(topic.example, 'approach.cpp', '', false)}
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            ` : ''}
            
            <!-- Practice Questions -->
            <div class="practice-section">
                <div style="text-align: center; margin: 30px 0; color: var(--primary-color); display: flex; justify-content: center;">
                    <div style="width: 80px; height: 80px;">
                        ${puzzleIcon}
                    </div>
                </div>
                <h3 style="text-align: center;">Practice Problems <span class="ar">تمارين عملية</span></h3>
                ${section.practice.map(p => Components.renderPractice(p)).join('')}
            </div>
            
            <!-- MCQ Section -->
            <div class="mcq-section">
                <div style="text-align: center; margin: 30px 0; color: var(--accent-success); display: flex; justify-content: center;">
                    <div style="width: 80px; height: 80px;">
                        ${clipboardIcon}
                    </div>
                </div>
                <h3 style="text-align: center;">Quick Quiz <span class="ar">اختبار سريع</span></h3>
                ${section.mcq.map((q, i) => Components.renderMCQ(q, i)).join('')}
            </div>
            
            <!-- Section Navigation -->
            <div class="section-nav">
                ${this.getPrevSection() ? `
                    <button class="btn btn-secondary" onclick="App.loadSection('${this.getPrevSection()}')">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
                        Previous Section
                    </button>
                ` : '<div></div>'}
                <button class="btn btn-success" onclick="App.completeSection()">
                    ${checkIcon} Mark as Complete
                </button>
                ${this.getNextSection() ? `
                    <button class="btn btn-primary" onclick="App.loadSection('${this.getNextSection()}')">
                        Next Section
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
                    </button>
                ` : '<div></div>'}
            </div>
        `;
    },

    /**
     * Render coming soon page
     */
    renderComingSoon(sectionId) {
        const sectionInfo = CURRICULUM.sections.find(s => s.id === sectionId);
        return `
            <div class="section-header">
                <h1>${sectionInfo?.icon || '📚'} ${sectionInfo?.title || 'Section'}</h1>
                <span class="ar">${sectionInfo?.titleAr || ''}</span>
            </div>
            <div class="content-block" style="text-align: center; padding: 60px;">
                <h2>🚧 Coming Soon!</h2>
                <p>This section is under development.</p>
                <p class="ar">هذا القسم قيد التطوير.</p>
                <button class="btn btn-primary" onclick="App.loadSection('section1')" style="margin-top: 20px;">
                    Go to First Section
                </button>
            </div>
        `;
    },

    /**
     * Get previous section ID
     */
    getPrevSection() {
        const sections = CURRICULUM.sections;
        const currentIndex = sections.findIndex(s => s.id === this.currentSection);
        return currentIndex > 0 ? sections[currentIndex - 1].id : null;
    },

    /**
     * Get next section ID
     */
    getNextSection() {
        const sections = CURRICULUM.sections;
        const currentIndex = sections.findIndex(s => s.id === this.currentSection);
        return currentIndex < sections.length - 1 ? sections[currentIndex + 1].id : null;
    },

    /**
     * Mark current section as complete
     */
    completeSection() {
        Progress.completeSection(this.currentSection);
        this.renderSidebar();
        this.updateProgressBar();
        this.showToast('Section marked as complete!', 'success');

        const next = this.getNextSection();
        if (next) {
            setTimeout(() => {
                if (confirm('Continue to next section?')) {
                    this.loadSection(next);
                }
            }, 500);
        }
    },



    /**
     * Show projects page
     */
    showProjects() {
        const mainContent = document.getElementById('mainContent');

        mainContent.innerHTML = `
            <div class="section-header">
                <h1>🎯 Final Projects</h1>
                <span class="ar">المشاريع النهائية</span>
                <p>30 practical projects with increasing difficulty to test your skills.</p>
                <p class="ar">30 مشروع عملي بصعوبة متزايدة لاختبار مهاراتك.</p>
            </div>
            <div class="projects-grid">
                ${CURRICULUM.projects.map(p => Components.renderProjectCard(p)).join('')}
            </div>
        `;

        // Update sidebar active state
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
        document.getElementById('sidebar').classList.remove('open');
    },

    /**
     * Open specific project
     */
    openProject(projectId) {
        const project = CURRICULUM.projects.find(p => p.id === projectId);
        if (!project) return;

        const mainContent = document.getElementById('mainContent');

        mainContent.innerHTML = `
            <div class="section-header">
                <h1>Project #${project.id}: ${project.title}</h1>
                <span class="ar">${project.titleAr}</span>
            </div>
            <div class="content-block">
                <h3>Description <span class="ar">الوصف</span></h3>
                <p>${project.description}</p>
                <p class="ar">${project.descriptionAr}</p>
                <div class="project-tags" style="margin-top: 16px;">
                    ${project.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
                </div>
            </div>
            <div class="practice-card">
                <h4>Your Solution <span class="ar">حلك</span></h4>
                <div class="practice-editor">
                    <textarea id="project_${projectId}_editor" placeholder="Write your C++ code here...">#include <iostream>
using namespace std;

int main() {
    // Your code here
    
    return 0;
}</textarea>
                </div>
                <div class="practice-actions">
                    <button class="btn btn-primary" onclick="Components.runPractice('project_${projectId}')">Run Code</button>
                </div>
                <div class="code-output hidden" id="project_${projectId}_output"></div>
                <div class="practice-feedback hidden" id="project_${projectId}_feedback"></div>
            </div>
            <button class="btn btn-secondary" onclick="App.showProjects()" style="margin-top: 24px;">← Back to Projects</button>
        `;
    },



    /**
     * Show toast notification
     */
    showToast(message, type = 'info') {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <span>${message}</span>
        `;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => App.init());
