const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync('index.html', 'utf8');

const dom = new JSDOM(html, {
    url: "http://localhost/",
    runScripts: "dangerously",
    resources: "usable"
});

// Mock localStorage
let storage = {};
dom.window.localStorage = {
    getItem: (k) => storage[k] || null,
    setItem: (k, v) => storage[k] = String(v),
    removeItem: (k) => delete storage[k],
    clear: () => storage = {}
};
dom.window.localStorage.setItem('htmlCourse_seenIntro', 'true');

dom.window.addEventListener('error', (event) => {
    console.error('SCRIPT ERROR:', event.error);
});

dom.window.document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        console.log('--- AFTER INIT ---');
        console.log('Lesson Content contains spinner?', dom.window.document.getElementById('lessonContent').innerHTML.includes('spinner'));
        console.log('Progress Text:', dom.window.document.getElementById('progressText').textContent);
    }, 1000);
});
