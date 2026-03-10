/**
 * C++ Educational App - UI Components
 * Reusable component rendering functions
 */

const Components = {
    /**
     * Render syntax-highlighted code block
     */
    renderCodeBlock(code, title = 'main.cpp', titleAr = '', showRun = true) {
        const highlighted = this.highlightSyntax(code);
        const id = 'code_' + Math.random().toString(36).substr(2, 9);

        return `
            <div class="code-block" id="${id}">
                <div class="code-header">
                    <span>${title} ${titleAr ? `<span class="ar">${titleAr}</span>` : ''}</span>
                    <div class="code-actions">
                        <button class="btn btn-sm btn-secondary" onclick="Components.copyCode('${id}')">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                            </svg>
                            Copy
                        </button>
                        ${showRun ? `
                        <button class="btn btn-sm btn-success" onclick="Components.runCode('${id}')">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polygon points="5 3 19 12 5 21 5 3"/>
                            </svg>
                            Run
                        </button>
                        ` : ''}
                    </div>
                </div>
                <div class="code-content">
                    <pre><code>${highlighted}</code></pre>
                </div>
                <div class="code-output hidden" id="${id}_output"></div>
            </div>
        `;
    },

    /**
     * Syntax highlighting for C++
     */
    highlightSyntax(code) {
        // Store special tokens to protect them from further processing
        const preserved = [];
        const placeholder = (index) => `__PRESERVED_${index}__`;

        // Preserve strings
        code = code.replace(/"(?:[^"\\]|\\.)*"/g, (match) => {
            preserved.push(`<span class="code-string">${this.escapeHtml(match)}</span>`);
            return placeholder(preserved.length - 1);
        });

        // Preserve char literals
        code = code.replace(/'(?:[^'\\]|\\.)*'/g, (match) => {
            preserved.push(`<span class="code-string">${this.escapeHtml(match)}</span>`);
            return placeholder(preserved.length - 1);
        });

        // Preserve single-line comments
        code = code.replace(/\/\/.*$/gm, (match) => {
            preserved.push(`<span class="code-comment">${this.escapeHtml(match)}</span>`);
            return placeholder(preserved.length - 1);
        });

        // Preserve multi-line comments
        code = code.replace(/\/\*[\s\S]*?\*\//g, (match) => {
            preserved.push(`<span class="code-comment">${this.escapeHtml(match)}</span>`);
            return placeholder(preserved.length - 1);
        });

        // Escape remaining HTML (for angle brackets in code like <iostream>)
        code = this.escapeHtml(code);

        // Preserve preprocessor directives (after escaping, so &lt; stays as is)
        code = code.replace(/(#\w+.*?)$/gm, (match) => {
            preserved.push(`<span class="code-preprocessor">${match}</span>`);
            return placeholder(preserved.length - 1);
        });

        // Keywords (excluding 'class' to avoid HTML attribute conflicts - use just for OOP content)
        const keywords = ['int', 'double', 'float', 'char', 'string', 'bool', 'void', 'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'break', 'continue', 'return', 'struct', 'public', 'private', 'protected', 'const', 'static', 'new', 'delete', 'true', 'false', 'using', 'namespace', 'std', 'endl', 'cin', 'cout', 'main'];
        const keywordPattern = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
        code = code.replace(keywordPattern, '<span class="code-keyword">$1</span>');

        // Numbers
        code = code.replace(/\b(\d+\.?\d*)\b/g, '<span class="code-number">$1</span>');

        // Restore preserved tokens
        preserved.forEach((value, index) => {
            code = code.replace(placeholder(index), value);
        });

        return code;
    },

    /**
     * Escape HTML special characters
     */
    escapeHtml(str) {
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    },


    /**
     * Copy code to clipboard
     */
    copyCode(id) {
        const codeEl = document.querySelector(`#${id} code`);
        const text = codeEl.textContent;
        navigator.clipboard.writeText(text).then(() => {
            App.showToast('Code copied!', 'success');
        });
    },

    /**
     * Run code
     */
    runCode(id) {
        const codeEl = document.querySelector(`#${id} code`);
        const outputEl = document.querySelector(`#${id}_output`);
        const code = codeEl.textContent;

        outputEl.classList.remove('hidden');
        outputEl.innerHTML = 'Running...';

        setTimeout(() => {
            const result = CodeRunner.run(code);
            if (result.success) {
                outputEl.className = 'code-output success';
                outputEl.innerHTML = '<strong>Output:</strong>\n' + (result.output || '(no output)');
            } else {
                outputEl.className = 'code-output error';
                outputEl.innerHTML = result.error;
            }
        }, 300);
    },

    /**
     * Render MCQ question
     */
    renderMCQ(mcq, index) {
        const id = mcq.id || `mcq_${index}`;
        const labels = ['A', 'B', 'C', 'D'];

        return `
            <div class="mcq-card" id="${id}" data-correct="${mcq.correct}">
                <div class="mcq-question">
                    <strong>Q${index + 1}.</strong> ${mcq.question}
                    <span class="ar">${mcq.questionAr}</span>
                </div>
                <div class="mcq-options">
                    ${mcq.options.map((opt, i) => `
                        <label class="mcq-option" data-index="${i}" onclick="Components.selectMCQOption('${id}', ${i})">
                            <span class="option-label">${labels[i]}</span>
                            <span>${opt.text} <span class="ar">${opt.textAr}</span></span>
                        </label>
                    `).join('')}
                </div>
                <div class="mcq-explanation hidden" id="${id}_explanation">
                    <strong>Explanation:</strong> ${mcq.explanation}
                    <span class="ar">${mcq.explanationAr}</span>
                </div>
            </div>
        `;
    },

    /**
     * Handle MCQ option selection
     */
    selectMCQOption(id, selected) {
        const card = document.getElementById(id);
        const correct = parseInt(card.dataset.correct);
        const options = card.querySelectorAll('.mcq-option');
        const explanation = document.getElementById(`${id}_explanation`);

        // Remove previous selections
        options.forEach(opt => opt.classList.remove('selected', 'correct', 'incorrect'));

        // Mark selected
        options[selected].classList.add('selected');

        // Check answer
        if (selected === correct) {
            options[selected].classList.add('correct');
            Progress.saveMCQAnswer(id, selected, true);
        } else {
            options[selected].classList.add('incorrect');
            options[correct].classList.add('correct');
            Progress.saveMCQAnswer(id, selected, false);
        }

        // Show explanation
        explanation.classList.remove('hidden');
    },

    /**
     * Render practice problem
     */
    renderPractice(practice) {
        const id = practice.id;

        return `
            <div class="practice-card" id="${id}">
                <h4>🧩 ${practice.title} <span class="ar">${practice.titleAr}</span></h4>
                <div class="practice-description">
                    <p>${practice.description}</p>
                    <p class="ar">${practice.descriptionAr}</p>
                </div>
                <div class="practice-editor">
                    <textarea id="${id}_editor" placeholder="Write your C++ code here...">${practice.starterCode || ''}</textarea>
                </div>
                <div class="practice-actions">
                    <button class="btn btn-primary" onclick="Components.runPractice('${id}')">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polygon points="5 3 19 12 5 21 5 3"/>
                        </svg>
                        Run Code
                    </button>
                    <button class="btn btn-secondary" onclick="Components.showHint('${id}')">Show Hint</button>
                    <button class="btn btn-secondary" onclick="Components.showSolution('${id}')">Show Solution</button>
                </div>
                <div class="code-output hidden" id="${id}_output"></div>
                <div class="practice-feedback hidden" id="${id}_feedback"></div>
                <div class="practice-solution hidden" id="${id}_solution"></div>
            </div>
        `;
    },

    /**
     * Run practice code
     */
    runPractice(id) {
        const code = document.getElementById(`${id}_editor`).value;
        const outputEl = document.getElementById(`${id}_output`);

        outputEl.classList.remove('hidden');
        const result = CodeRunner.run(code);

        if (result.success) {
            outputEl.className = 'code-output success';
            outputEl.innerHTML = '<strong>Output:</strong>\n' + (result.output || '(no output)');
        } else {
            outputEl.className = 'code-output error';
            outputEl.innerHTML = result.error;
        }
    },



    /**
     * Show hint
     */
    showHint(id) {
        const practice = this.getPracticeById(id);
        if (practice?.hints?.length) {
            App.showToast(practice.hints[0], 'info');
        }
    },

    /**
     * Show solution
     */
    showSolution(id) {
        const practice = this.getPracticeById(id);
        const solutionEl = document.getElementById(`${id}_solution`);

        if (practice?.solution) {
            solutionEl.classList.remove('hidden');
            solutionEl.innerHTML = `
                <h5>Solution:</h5>
                ${this.renderCodeBlock(practice.solution, 'solution.cpp', '', false)}
            `;
        }
    },

    /**
     * Get practice by ID
     */
    getPracticeById(id) {
        for (const section of Object.values(CONTENT)) {
            if (section.practice) {
                const found = section.practice.find(p => p.id === id);
                if (found) return found;
            }
        }
        return null;
    },

    /**
     * Render project card
     */
    renderProjectCard(project) {
        const difficultyDots = Array(5).fill(0).map((_, i) =>
            `<span class="difficulty-dot ${i < project.difficulty ? 'active' : ''}"></span>`
        ).join('');

        // Get detailed solution data if available
        const solutionData = typeof PROJECT_SOLUTIONS !== 'undefined' ? PROJECT_SOLUTIONS[project.id] : null;
        const description = solutionData?.description || project.description;
        const descriptionAr = solutionData?.descriptionAr || project.descriptionAr;

        return `
            <div class="project-card" data-id="${project.id}">
                <span class="project-number">#${project.id}</span>
                <h4>${project.title}</h4>
                <p class="ar">${project.titleAr}</p>
                <div class="project-difficulty">${difficultyDots}</div>
                <p class="project-description">${description}</p>
                <p class="project-description ar">${descriptionAr}</p>
                <div class="project-tags">
                    ${project.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
                </div>
                <div class="project-actions">
                    <button class="btn btn-primary btn-sm" onclick="App.openProject(${project.id})">Start Project</button>
                    <button class="btn btn-secondary btn-sm" onclick="Components.showProjectSolution(${project.id})">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        Show Solution
                    </button>
                </div>
                <div id="solution-${project.id}" class="project-solution hidden"></div>
            </div>
        `;
    },

    /**
     * Show project solution
     */
    showProjectSolution(projectId) {
        const solutionDiv = document.getElementById(`solution-${projectId}`);
        if (!solutionDiv) return;

        if (solutionDiv.classList.contains('hidden')) {
            const solutionData = typeof PROJECT_SOLUTIONS !== 'undefined' ? PROJECT_SOLUTIONS[projectId] : null;
            if (solutionData && solutionData.solution) {
                solutionDiv.innerHTML = `
                    <h5>Hints / تلميحات:</h5>
                    <ul>${(solutionData.hints || []).map(h => `<li>${h}</li>`).join('')}</ul>
                    <h5>Solution / الحل:</h5>
                    ${this.renderCodeBlock(solutionData.solution, 'solution.cpp', '', false)}
                `;
                solutionDiv.classList.remove('hidden');
            } else {
                solutionDiv.innerHTML = '<p>Solution not available yet.</p>';
                solutionDiv.classList.remove('hidden');
            }
        } else {
            solutionDiv.classList.add('hidden');
        }
    },

    /**
     * Render section navigation item
     */
    renderNavItem(section, isCompleted = false) {
        const iconSvg = typeof getIcon === 'function' ? getIcon(section.icon) : '';
        return `
            <li>
                <button class="nav-item ${isCompleted ? 'completed' : ''}" data-section="${section.id}" onclick="App.loadSection('${section.id}')">
                    <span class="nav-icon">${iconSvg}</span>
                    <div class="nav-text">
                        <span>${section.title}</span>
                        <span class="ar">${section.titleAr}</span>
                    </div>
                    ${isCompleted ? `
                        <svg class="status-icon completed" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="20 6 9 17 4 12"/>
                        </svg>
                    ` : ''}
                </button>
            </li>
        `;
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Components;
}
