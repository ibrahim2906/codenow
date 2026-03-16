// playground.js - Interactive CSS Playground
const Playground = (() => {
  let previewFrame = null;
  let editorTextarea = null;
  let currentMode = 'general'; // general, boxmodel, flexbox, grid

  function init() {
    previewFrame = document.getElementById('playground-preview-frame');
    editorTextarea = document.getElementById('playground-editor');
    if (!editorTextarea) return;
    editorTextarea.addEventListener('input', debounce(updatePreview, 300));
    editorTextarea.addEventListener('keydown', handleTab);
    setupVisualizerTabs();
    setDefaultCode();
    updatePreview();
  }

  function debounce(fn, ms) {
    let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
  }

  function handleTab(e) {
    if (e.key === 'Tab') {
      e.preventDefault();
      const s = this.selectionStart, end = this.selectionEnd;
      this.value = this.value.substring(0, s) + '  ' + this.value.substring(end);
      this.selectionStart = this.selectionEnd = s + 2;
      updatePreview();
    }
  }

  function setDefaultCode() {
    if (currentMode === 'general') {
      editorTextarea.value = `/* Try editing this CSS! */\n.box {\n  width: 200px;\n  height: 200px;\n  background: linear-gradient(135deg, #6366f1, #06b6d4);\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-family: Arial, sans-serif;\n  font-size: 18px;\n  font-weight: bold;\n  box-shadow: 0 10px 30px rgba(99,102,241,0.3);\n  transition: transform 0.3s ease;\n}\n.box:hover {\n  transform: scale(1.1) rotate(5deg);\n}`;
    } else if (currentMode === 'boxmodel') {
      editorTextarea.value = `/* Box Model Visualizer */\n.box {\n  width: 200px;\n  height: 100px;\n  padding: 20px;\n  border: 5px solid #f59e0b;\n  margin: 30px;\n  background: #6366f1;\n  color: white;\n  font-family: Arial, sans-serif;\n  box-sizing: content-box;\n}`;
    } else if (currentMode === 'flexbox') {
      editorTextarea.value = `/* Flexbox Playground */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  flex-wrap: wrap;\n  min-height: 250px;\n  padding: 20px;\n}\n.item {\n  width: 80px;\n  height: 80px;\n  background: #6366f1;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: bold;\n  font-family: Arial;\n}`;
    } else if (currentMode === 'grid') {
      editorTextarea.value = `/* Grid Playground */\n.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(2, 100px);\n  gap: 12px;\n  padding: 20px;\n}\n.item {\n  background: #6366f1;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: bold;\n  font-family: Arial;\n}\n.item:first-child {\n  grid-column: span 2;\n  background: #06b6d4;\n}`;
    }
  }

  function getDefaultHTML() {
    if (currentMode === 'general') {
      return '<div class="box">Hello CSS!</div>';
    } else if (currentMode === 'boxmodel') {
      return '<div class="box">Content</div>';
    } else if (currentMode === 'flexbox' || currentMode === 'grid') {
      return '<div class="container"><div class="item">1</div><div class="item">2</div><div class="item">3</div><div class="item">4</div><div class="item">5</div><div class="item">6</div></div>';
    }
    return '<div class="box">Hello!</div>';
  }

  function updatePreview() {
    if (!previewFrame) return;
    const css = editorTextarea ? editorTextarea.value : '';
    const html = getDefaultHTML();
    const doc = previewFrame.contentDocument || previewFrame.contentWindow.document;
    doc.open();
    doc.write(`<!DOCTYPE html><html><head><style>body{margin:0;padding:20px;font-family:Arial,sans-serif;display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 40px);background:#f8f9fa;}${css}</style></head><body>${html}</body></html>`);
    doc.close();
  }

  function setupVisualizerTabs() {
    const tabs = document.querySelectorAll('.playground-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentMode = tab.dataset.mode || 'general';
        setDefaultCode();
        updatePreview();
      });
    });
  }

  function renderLessonExample(exampleData, container) {
    if (!exampleData || !container) return;
    const wrapper = document.createElement('div');
    wrapper.className = 'live-example';
    wrapper.innerHTML = `
      <div class="live-example-header">
        <span>▶ ${exampleData.title}</span>
        <button class="btn btn-ghost btn-sm try-btn" title="Try in playground">🧪 Try it</button>
      </div>
      <div class="code-block"><code>${escapeHtml(exampleData.css)}</code><span class="code-label">CSS</span></div>
      <div class="live-example-preview" id="example-preview-${Math.random().toString(36).substr(2,6)}"></div>
    `;
    container.appendChild(wrapper);
    const previewEl = wrapper.querySelector('.live-example-preview');
    const iframe = document.createElement('iframe');
    iframe.style.cssText = 'width:100%;border:none;min-height:100px;';
    previewEl.appendChild(iframe);
    setTimeout(() => {
      const d = iframe.contentDocument || iframe.contentWindow.document;
      d.open();
      d.write(`<!DOCTYPE html><html><head><style>body{margin:0;padding:15px;font-family:'Inter',Arial,sans-serif;}${exampleData.css}</style></head><body>${exampleData.html}</body></html>`);
      d.close();
      iframe.style.height = (d.body.scrollHeight + 20) + 'px';
    }, 50);
    const tryBtn = wrapper.querySelector('.try-btn');
    tryBtn.addEventListener('click', () => {
      if (editorTextarea) {
        editorTextarea.value = exampleData.css;
        currentMode = 'general';
        updatePreview();
        document.getElementById('playground-section')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  function escapeHtml(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  return { init, updatePreview, renderLessonExample };
})();
