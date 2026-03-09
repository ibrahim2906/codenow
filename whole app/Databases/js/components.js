/**
 * Database Educational App - UI Components
 * Reusable component rendering functions
 */

const Components = {
    // Render syntax-highlighted code block
    renderCodeBlock(code, title = 'main.cpp', titleAr = '', showRun = true) {
        const id = 'code_' + Math.random().toString(36).substr(2, 9);
        const highlighted = this.highlightSyntax(this.escapeHtml(code));

        return `
        <div class="code-block-container animate-in">
            <div class="code-block-header">
                <span class="code-block-title">${title}${titleAr ? ` <span class="ar">${titleAr}</span>` : ''}</span>
                <div class="code-block-actions">
                    <button class="code-action-btn" onclick="Components.copyCode('${id}')">📋 Copy</button>
                    ${showRun ? `<button class="code-action-btn" onclick="Components.runCode('${id}')">▶ Run</button>` : ''}
                </div>
            </div>
            <div class="code-block-body">
                <pre id="${id}">${highlighted}</pre>
            </div>
            <div id="${id}_output" class="code-output hidden"></div>
        </div>`;
    },

    // Syntax highlighting for C++
    highlightSyntax(code) {
        // Store strings and comments to avoid conflicts
        const placeholders = [];
        const placeholder = (index) => `__PH${index}__`;

        // Preserve strings
        code = code.replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, (match) => {
            placeholders.push(`<span class="str">${match}</span>`);
            return placeholder(placeholders.length - 1);
        });

        // Comments
        code = code.replace(/\/\/.*$/gm, (match) => {
            placeholders.push(`<span class="cmt">${match}</span>`);
            return placeholder(placeholders.length - 1);
        });
        code = code.replace(/\/\*[\s\S]*?\*\//g, (match) => {
            placeholders.push(`<span class="cmt">${match}</span>`);
            return placeholder(placeholders.length - 1);
        });

        // Preprocessor 
        code = code.replace(/^(\s*#\w+)/gm, '<span class="pp">$1</span>');
        code = code.replace(/(&lt;\w+(?:\/\w+)*(?:\.\w+)?&gt;)/g, '<span class="inc">$1</span>');

        // Keywords
        const keywords = ['int', 'double', 'float', 'char', 'string', 'bool', 'void', 'long', 'short', 'unsigned', 'signed',
            'const', 'static', 'struct', 'class', 'enum', 'union', 'typedef', 'namespace', 'using',
            'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'break', 'continue', 'return', 'default',
            'new', 'delete', 'try', 'catch', 'throw', 'public', 'private', 'protected', 'virtual', 'override',
            'auto', 'nullptr', 'true', 'false', 'template', 'typename', 'sizeof', 'this', 'operator',
            'vector', 'map', 'set', 'pair', 'queue', 'stack', 'deque', 'list', 'array', 'unordered_map',
            'cout', 'cin', 'endl', 'cerr', 'getline', 'ifstream', 'ofstream', 'fstream'];

        const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
        code = code.replace(keywordRegex, '<span class="kw">$1</span>');

        // Types
        const types = ['size_t', 'int32_t', 'int64_t', 'uint32_t', 'uint64_t', 'ptrdiff_t', 'FILE'];
        const typeRegex = new RegExp(`\\b(${types.join('|')})\\b`, 'g');
        code = code.replace(typeRegex, '<span class="type">$1</span>');

        // Numbers
        code = code.replace(/\b(\d+\.?\d*[fFLl]?)\b/g, '<span class="num">$1</span>');

        // Function calls
        code = code.replace(/\b(\w+)\s*\(/g, '<span class="fn">$1</span>(');

        // Operators
        code = code.replace(/(::|\-&gt;|&lt;&lt;|&gt;&gt;)/g, '<span class="op">$1</span>');

        // Restore placeholders
        for (let i = placeholders.length - 1; i >= 0; i--) {
            code = code.replace(placeholder(i), placeholders[i]);
        }

        return code;
    },

    escapeHtml(str) {
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    },

    copyCode(id) {
        const el = document.getElementById(id);
        if (!el) return;
        const text = el.textContent;
        navigator.clipboard.writeText(text).then(() => {
            App.showToast('Code copied!', 'success');
        }).catch(() => {
            App.showToast('Copy failed', 'error');
        });
    },

    runCode(id) {
        const el = document.getElementById(id);
        if (!el) return;
        const code = el.textContent;
        const outputEl = document.getElementById(id + '_output');
        if (!outputEl) return;

        const result = CodeRunner.run(code);
        outputEl.textContent = result.output;
        outputEl.classList.remove('hidden');
        outputEl.style.color = result.success ? 'var(--success)' : 'var(--danger)';
    },

    // Render MCQ question
    renderMCQ(mcq, index) {
        const id = `mcq_${mcq.id}`;
        const progress = Progress.load();
        const savedAnswer = progress.mcqAnswers[mcq.id];

        let optionsHtml = mcq.options.map((opt, i) => {
            const letters = ['A', 'B', 'C', 'D'];
            let extraClass = '';
            if (savedAnswer) {
                if (i === mcq.correct) extraClass = 'correct';
                else if (i === savedAnswer.selectedOption && !savedAnswer.isCorrect) extraClass = 'wrong';
            }
            return `
            <div class="mcq-option ${extraClass}" onclick="Components.selectMCQOption('${mcq.id}', ${i})" 
                 data-mcq="${mcq.id}" data-option="${i}" ${savedAnswer ? 'style="pointer-events:none"' : ''}>
                <span class="option-letter">${letters[i]}</span>
                <span class="option-text">${opt.text} ${opt.textAr ? `<span class="ar">${opt.textAr}</span>` : ''}</span>
            </div>`;
        }).join('');

        let feedbackHtml = '';
        if (savedAnswer) {
            const cls = savedAnswer.isCorrect ? 'correct-feedback' : 'wrong-feedback';
            feedbackHtml = `<div class="mcq-feedback ${cls}">${savedAnswer.isCorrect ? '✅ Correct! ' : '❌ Incorrect. '}${mcq.explanation}<br><span class="ar">${mcq.explanationAr || ''}</span></div>`;
        }

        return `
        <div class="mcq-card animate-in" id="${id}">
            <div class="mcq-question">Q${index + 1}. ${mcq.question}</div>
            ${mcq.questionAr ? `<div class="mcq-question-ar">${mcq.questionAr}</div>` : ''}
            <div class="mcq-options">${optionsHtml}</div>
            <div id="${id}_feedback">${feedbackHtml}</div>
        </div>`;
    },

    selectMCQOption(questionId, selected) {
        const content = CONTENT[App.currentSection];
        if (!content) return;
        const mcq = content.mcq.find(q => q.id === questionId);
        if (!mcq) return;

        const isCorrect = selected === mcq.correct;
        Progress.saveMCQAnswer(questionId, selected, isCorrect);

        // Update UI
        const container = document.getElementById(`mcq_${questionId}`);
        if (!container) return;

        const options = container.querySelectorAll('.mcq-option');
        options.forEach((opt, i) => {
            opt.style.pointerEvents = 'none';
            if (i === mcq.correct) opt.classList.add('correct');
            else if (i === selected && !isCorrect) opt.classList.add('wrong');
        });

        const feedbackEl = document.getElementById(`mcq_${questionId}_feedback`);
        if (feedbackEl) {
            const cls = isCorrect ? 'correct-feedback' : 'wrong-feedback';
            feedbackEl.innerHTML = `<div class="mcq-feedback ${cls}">${isCorrect ? '✅ Correct! ' : '❌ Incorrect. '}${mcq.explanation}<br><span class="ar">${mcq.explanationAr || ''}</span></div>`;
        }
    },

    // Render practice problem
    renderPractice(practice) {
        const id = `practice_${practice.id}`;
        const diffLabel = practice.difficulty <= 1 ? 'Easy' : practice.difficulty <= 2 ? 'Medium' : 'Hard';
        const diffClass = practice.difficulty <= 1 ? 'diff-easy' : practice.difficulty <= 2 ? 'diff-medium' : 'diff-hard';

        return `
        <div class="practice-card animate-in">
            <div class="practice-header">
                <span class="practice-title">💻 ${practice.title} ${practice.titleAr ? `<span class="ar">${practice.titleAr}</span>` : ''}</span>
                <span class="difficulty-badge ${diffClass}">${diffLabel}</span>
            </div>
            <p class="practice-desc">${practice.description}</p>
            ${practice.descriptionAr ? `<p class="practice-desc" style="direction:rtl;font-family:'Noto Sans Arabic',sans-serif;color:var(--text-muted);font-size:0.85rem">${practice.descriptionAr}</p>` : ''}
            <textarea class="practice-editor" id="${id}_editor">${practice.starterCode || ''}</textarea>
            <div class="practice-actions">
                <button class="btn btn-primary btn-sm" onclick="Components.runPractice('${id}')">▶ Run Code</button>
                <button class="btn btn-ghost btn-sm" onclick="Components.showHint('${id}')">💡 Hint</button>
                <button class="btn btn-ghost btn-sm" onclick="Components.showSolution('${id}')">📖 Solution</button>
            </div>
            <div id="${id}_hint" class="practice-output hidden"></div>
            <div id="${id}_output" class="practice-output hidden"></div>
            <div id="${id}_solution" class="code-block-container hidden" style="margin-top:12px"></div>
        </div>`;
    },

    runPractice(id) {
        const editor = document.getElementById(id + '_editor');
        const outputEl = document.getElementById(id + '_output');
        if (!editor || !outputEl) return;

        const result = CodeRunner.run(editor.value);
        outputEl.textContent = result.output;
        outputEl.classList.remove('hidden');
        outputEl.style.color = result.success ? 'var(--success)' : 'var(--danger)';
    },

    showHint(id) {
        const practiceId = id.replace('practice_', '');
        const content = CONTENT[App.currentSection];
        if (!content) return;
        const practice = content.practice?.find(p => p.id === practiceId);
        if (!practice || !practice.hints) return;

        const hintEl = document.getElementById(id + '_hint');
        if (hintEl) {
            hintEl.innerHTML = '💡 <strong>Hints:</strong><br>' + practice.hints.map((h, i) => `${i + 1}. ${h}`).join('<br>');
            hintEl.classList.remove('hidden');
        }
    },

    showSolution(id) {
        const practiceId = id.replace('practice_', '');
        const content = CONTENT[App.currentSection];
        if (!content) return;
        const practice = content.practice?.find(p => p.id === practiceId);
        if (!practice || !practice.solution) return;

        const solEl = document.getElementById(id + '_solution');
        if (solEl) {
            solEl.innerHTML = this.renderCodeBlock(practice.solution, '✅ Solution', '', false);
            solEl.classList.remove('hidden');
        }
    },

    // Render project card
    renderProjectCard(project) {
        const diffStars = '⭐'.repeat(project.difficulty);
        return `
        <div class="project-card" onclick="App.openProject(${project.id})">
            <h3>${project.title} <span class="ar">${project.titleAr || ''}</span></h3>
            <p>${project.description}</p>
            ${project.descriptionAr ? `<p style="direction:rtl;font-family:'Noto Sans Arabic',sans-serif;font-size:0.82rem;color:var(--text-muted)">${project.descriptionAr}</p>` : ''}
            <div style="margin-bottom:8px;font-size:0.85rem">Difficulty: ${diffStars}</div>
            <div class="project-tags">
                ${project.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
            </div>
        </div>`;
    },

    // Show project solution
    showProjectSolution(projectId) {
        const project = PROJECTS[projectId];
        if (!project) return;

        const main = document.getElementById('mainContent');
        if (!main) return;

        let html = `
        <div class="section-header">
            <h1 class="section-title">${project.title}</h1>
            <p class="section-title-ar">${project.titleAr || ''}</p>
            <div class="section-meta">
                <span>Difficulty: ${'⭐'.repeat(project.difficulty)}</span>
            </div>
        </div>
        <div class="content-block">
            <p class="theory-content">${project.description}</p>
            ${project.descriptionAr ? `<p class="theory-content-ar">${project.descriptionAr}</p>` : ''}
        </div>
        ${project.concepts ? `
        <div class="content-block">
            <h3 style="margin-bottom:12px">Concepts Used:</h3>
            <div class="project-tags">${project.concepts.map(c => `<span class="project-tag">${c}</span>`).join('')}</div>
        </div>` : ''}
        <div class="content-block">
            <h3 style="margin-bottom:12px">💻 Complete Solution:</h3>
            ${this.renderCodeBlock(project.solution, `${project.title}.cpp`, '', true)}
        </div>
        <div class="nav-buttons">
            <button class="btn btn-ghost" onclick="App.showProjects()">← Back to Projects</button>
        </div>`;

        main.innerHTML = html;
        main.scrollTop = 0;
    },

    // Render navigation item for sidebar
    renderNavItem(section, isCompleted, isActive, isUnlocked) {
        let statusClass = '';
        if (isCompleted) statusClass = 'completed';
        else if (isActive) statusClass = 'active';
        else if (!isUnlocked) statusClass = 'locked';

        const icon = isCompleted ? ICONS.check : (!isUnlocked ? ICONS.lock : getIcon(section.icon));

        return `
        <li>
            <button class="nav-item ${statusClass}" onclick="App.loadSection('${section.id}')" ${!isUnlocked && !isCompleted ? 'disabled' : ''}>
                <span class="nav-icon">${icon}</span>
                <span class="nav-label">${section.title}</span>
                <span class="nav-status"></span>
            </button>
        </li>`;
    },

    // Render interactive table visualization
    renderTableViz(headers, rows, title = '') {
        let html = `<div class="viz-container animate-in">`;
        if (title) html += `<h4>${title}</h4>`;
        html += `<div class="viz-canvas"><table class="viz-table"><thead><tr>`;
        headers.forEach(h => { html += `<th>${h}</th>`; });
        html += `</tr></thead><tbody>`;
        rows.forEach(row => {
            html += '<tr>';
            row.forEach(cell => { html += `<td>${cell}</td>`; });
            html += '</tr>';
        });
        html += `</tbody></table></div></div>`;
        return html;
    },

    // Render ER Diagram
    renderERDiagram(entities) {
        let html = `<div class="viz-container animate-in"><h4>Entity-Relationship Diagram</h4><div class="er-diagram">`;
        entities.forEach(entity => {
            html += `<div class="er-entity"><div class="er-entity-name">${entity.name}</div><div class="er-entity-attrs">`;
            entity.attrs.forEach(attr => {
                const cls = attr.pk ? 'pk' : (attr.fk ? 'fk' : '');
                html += `<div class="er-attr ${cls}">${attr.name} <small style="color:var(--text-muted)">(${attr.type})</small></div>`;
            });
            html += `</div></div>`;
        });
        html += `</div></div>`;
        return html;
    },

    // Render "Why This Matters" box
    renderWhyMatters(content, contentAr) {
        return `
        <div class="why-matters animate-in">
            <h4>🎯 Why This Matters</h4>
            <p>${content}</p>
            ${contentAr ? `<p class="ar" style="direction:rtl;margin-top:8px">${contentAr}</p>` : ''}
        </div>`;
    },

    // Render memory/pointer visualization
    renderMemoryViz(cells, title = 'Memory Layout') {
        let html = `<div class="viz-container animate-in"><h4>${title}</h4><div class="memory-viz">`;
        cells.forEach(cell => {
            html += `<div class="memory-cell">
                <span class="memory-addr">${cell.addr}</span>
                <span class="memory-val">${cell.value}</span>
                <span class="memory-label">${cell.label || ''}</span>
            </div>`;
        });
        html += `</div></div>`;
        return html;
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Components;
}
