const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: "new" });
        const page = await browser.newPage();

        // Capture console messages
        page.on('console', msg => console.log('PAGE LOG:', msg.text()));
        page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
        page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure().errorText));

        // Inject script to bypass intro redirect
        await page.evaluateOnNewDocument(() => {
            localStorage.setItem('htmlCourse_seenIntro', 'true');
        });

        const filePath = "file:///c:/Users/Ibrahim%20Mohamed/Desktop/code%20now/learn%20html/index.html";
        await page.goto(filePath, { waitUntil: 'networkidle0' });

        // Wait a bit to ensure everything finishes
        await new Promise(r => setTimeout(r, 2000));

        // Check if spinner is still there
        const content = await page.evaluate(() => {
            return document.getElementById('lessonContent') ? document.getElementById('lessonContent').innerHTML : 'DIV NOT FOUND';
        });

        console.log("FINAL CONTENT:", content.includes('spinner') ? "SPINNER STILL VISIBLE" : "LESSON LOADED SUCCESSFULLY");

        await browser.close();
    } catch (e) {
        console.error("Puppeteer Script Error:", e);
        process.exit(1);
    }
})();
