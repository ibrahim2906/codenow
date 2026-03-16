/**
 * C++ Educational App - Progress Tracking
 * Handles saving and loading user progress
 */

const Progress = {
    STORAGE_KEY: 'cpp_edu_progress',

    /**
     * Default progress structure
     */
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
            lastUpdated: new Date().toISOString()
        };
    },

    /**
     * Load progress from localStorage
     */
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

    /**
     * Save progress to localStorage
     */
    save(progress) {
        try {
            progress.lastUpdated = new Date().toISOString();
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(progress));
        } catch (e) {
            console.error('Error saving progress:', e);
        }
    },

    /**
     * Mark section as completed
     */
    completeSection(sectionId) {
        const progress = this.load();
        if (!progress.completedSections.includes(sectionId)) {
            progress.completedSections.push(sectionId);
        }
        this.save(progress);
        return progress;
    },

    /**
     * Update section progress percentage
     */
    updateSectionProgress(sectionId, percentage) {
        const progress = this.load();
        progress.sectionProgress[sectionId] = Math.min(100, Math.max(0, percentage));
        this.save(progress);
        return progress;
    },

    /**
     * Save MCQ answer
     */
    saveMCQAnswer(questionId, selectedOption, isCorrect) {
        const progress = this.load();
        progress.mcqAnswers[questionId] = { selectedOption, isCorrect, timestamp: new Date().toISOString() };
        if (isCorrect) progress.totalScore += 10;
        this.save(progress);
        return progress;
    },

    /**
     * Save practice submission
     */
    savePracticeSubmission(practiceId, code, score, feedback) {
        const progress = this.load();
        if (!progress.practiceSubmissions[practiceId]) {
            progress.practiceSubmissions[practiceId] = [];
        }
        progress.practiceSubmissions[practiceId].push({
            code,
            score,
            feedback,
            timestamp: new Date().toISOString()
        });
        progress.totalScore += Math.floor(score / 10);
        this.save(progress);
        return progress;
    },

    /**
     * Update project status
     */
    updateProjectStatus(projectId, status) {
        const progress = this.load();
        progress.projectStatus[projectId] = { status, timestamp: new Date().toISOString() };
        this.save(progress);
        return progress;
    },

    /**
     * Set last viewed section
     */
    setLastSection(sectionId) {
        const progress = this.load();
        progress.lastSection = sectionId;
        this.save(progress);
        return progress;
    },

    /**
     * Calculate overall progress percentage
     */
    getOverallProgress() {
        const progress = this.load();
        const totalSections = CURRICULUM?.sections?.length || 12;
        return Math.round((progress.completedSections.length / totalSections) * 100);
    },

    /**
     * Check if section is completed
     */
    isSectionCompleted(sectionId) {
        const progress = this.load();
        return progress.completedSections.includes(sectionId);
    },

    /**
     * Get section progress
     */
    getSectionProgress(sectionId) {
        const progress = this.load();
        return progress.sectionProgress[sectionId] || 0;
    },

    /**
     * Reset all progress
     */
    reset() {
        localStorage.removeItem(this.STORAGE_KEY);
        return this.getDefault();
    },

    /**
     * Export progress as JSON
     */
    export() {
        return JSON.stringify(this.load(), null, 2);
    },

    /**
     * Import progress from JSON
     */
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
