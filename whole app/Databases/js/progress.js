/**
 * Database Educational App - Progress Tracking
 * Handles saving and loading user progress
 */

const Progress = {
    STORAGE_KEY: 'db_edu_progress',

    getDefault() {
        return {
            completedSections: [],
            sectionProgress: {},
            mcqAnswers: {},
            practiceSubmissions: {},
            projectStatus: {},
            lastSection: 'section1',
            totalScore: 0,
            startedAt: new Date().toISOString(),
            lastUpdated: new Date().toISOString(),
            introSeen: false,
            theme: 'sapphire',
            lang: 'both',
            sidebarOpen: true
        };
    },

    load() {
        try {
            const saved = localStorage.getItem(this.STORAGE_KEY);
            if (saved) {
                return { ...this.getDefault(), ...JSON.parse(saved) };
            }
        } catch (e) {
            console.error('Error loading progress:', e);
        }
        return this.getDefault();
    },

    save(progress) {
        try {
            progress.lastUpdated = new Date().toISOString();
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(progress));
        } catch (e) {
            console.error('Error saving progress:', e);
        }
    },

    completeSection(sectionId) {
        const progress = this.load();
        if (!progress.completedSections.includes(sectionId)) {
            progress.completedSections.push(sectionId);
        }
        this.save(progress);
        return progress;
    },

    updateSectionProgress(sectionId, percentage) {
        const progress = this.load();
        progress.sectionProgress[sectionId] = Math.min(100, Math.max(0, percentage));
        this.save(progress);
        return progress;
    },

    saveMCQAnswer(questionId, selectedOption, isCorrect) {
        const progress = this.load();
        progress.mcqAnswers[questionId] = { selectedOption, isCorrect, timestamp: new Date().toISOString() };
        if (isCorrect) progress.totalScore += 10;
        this.save(progress);
        return progress;
    },

    savePracticeSubmission(practiceId, code, score, feedback) {
        const progress = this.load();
        if (!progress.practiceSubmissions[practiceId]) {
            progress.practiceSubmissions[practiceId] = [];
        }
        progress.practiceSubmissions[practiceId].push({
            code, score, feedback, timestamp: new Date().toISOString()
        });
        progress.totalScore += Math.floor(score / 10);
        this.save(progress);
        return progress;
    },

    updateProjectStatus(projectId, status) {
        const progress = this.load();
        progress.projectStatus[projectId] = { status, timestamp: new Date().toISOString() };
        this.save(progress);
        return progress;
    },

    setLastSection(sectionId) {
        const progress = this.load();
        progress.lastSection = sectionId;
        this.save(progress);
        return progress;
    },

    setIntroSeen() {
        const progress = this.load();
        progress.introSeen = true;
        this.save(progress);
        return progress;
    },

    setTheme(theme) {
        const progress = this.load();
        progress.theme = theme;
        this.save(progress);
        return progress;
    },

    setLang(lang) {
        const progress = this.load();
        progress.lang = lang;
        this.save(progress);
        return progress;
    },

    setSidebarOpen(open) {
        const progress = this.load();
        progress.sidebarOpen = open;
        this.save(progress);
        return progress;
    },

    getOverallProgress() {
        const progress = this.load();
        const totalSections = CURRICULUM?.sections?.length || 32;
        return Math.round((progress.completedSections.length / totalSections) * 100);
    },

    isSectionCompleted(sectionId) {
        const progress = this.load();
        return progress.completedSections.includes(sectionId);
    },

    isSectionUnlocked(sectionId) {
        const progress = this.load();
        const sections = CURRICULUM?.sections || [];
        const idx = sections.findIndex(s => s.id === sectionId);
        if (idx === 0) return true; // First section always unlocked
        // Previous section must be completed
        const prevSection = sections[idx - 1];
        return prevSection ? progress.completedSections.includes(prevSection.id) : false;
    },

    getSectionProgress(sectionId) {
        const progress = this.load();
        return progress.sectionProgress[sectionId] || 0;
    },

    reset() {
        localStorage.removeItem(this.STORAGE_KEY);
        return this.getDefault();
    },

    export() {
        return JSON.stringify(this.load(), null, 2);
    },

    import(jsonString) {
        try {
            const data = JSON.parse(jsonString);
            this.save({ ...this.getDefault(), ...data });
            return true;
        } catch {
            return false;
        }
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Progress;
}
