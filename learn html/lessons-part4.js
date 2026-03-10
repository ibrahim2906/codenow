// Lesson Data - Part 4: Accessibility, SEO, Extra HTML, Best Practices
const lessonsPart4 = [
    // Phase 9: Accessibility
    {
        id: 44, phase: 9, phaseTitle: "Accessibility", title: "Alt Text Best Practices",
        content: {
            explanation: [{ en: "Good alt text describes the image content and purpose. Be concise but descriptive.", ar: "النص البديل الجيد يصف محتوى الصورة والغرض منها. كن موجزاً ولكن وصفياً." }],
            why: "Over 1 billion people have disabilities. Alt text makes your site usable for everyone.",
            examples: [{ level: "Beginner", code: "<img src=\"dog.jpg\" alt=\"Golden retriever playing in a park\">", desc: "Descriptive alt" },
            { level: "Advanced", code: "<img src=\"chart.png\" alt=\"Bar chart showing sales grew 50% from Q1 to Q4 2024\">", desc: "Complex image alt" }],
            mistakes: [{ bad: "alt=\"image.jpg\" or alt=\"\"", good: "alt=\"Descriptive content\"", why: "Empty or filename alts don't help users" }],
            mcqs: [{ q: "When can alt be empty?", options: ["Never", "For decorative images only", "Always", "When lazy"], correct: 1 }]
        }
    },
    {
        id: 45, phase: 9, phaseTitle: "Accessibility", title: "ARIA Labels",
        content: {
            explanation: [{ en: "ARIA (Accessible Rich Internet Applications) adds accessibility info when HTML isn't enough.", ar: "ARIA (تطبيقات الإنترنت الغنية المتاحة) تضيف معلومات إمكانية الوصول عندما لا يكفي HTML." }],
            examples: [{ level: "Intermediate", code: "<button aria-label=\"Close dialog\">X</button>\n<nav aria-label=\"Main navigation\">", desc: "ARIA labels" }],
            mcqs: [{ q: "When do you use aria-label?", options: ["Always", "When visible text isn't descriptive enough", "Never", "Only for images"], correct: 1 }]
        }
    },
    {
        id: 46, phase: 9, phaseTitle: "Accessibility", title: "Keyboard Navigation",
        content: {
            explanation: [{ en: "All interactive elements must be keyboard accessible. Use tabindex and proper focus styles.", ar: "جميع العناصر التفاعلية يجب أن تكون متاحة بلوحة المفاتيح. استخدم tabindex وأنماط التركيز المناسبة." }],
            examples: [{ level: "Intermediate", code: "<button onclick=\"action()\">Click me</button>\n<!-- Buttons are naturally focusable -->\n<div tabindex=\"0\" onclick=\"action()\">Custom button</div>", desc: "Keyboard accessible" }],
            mcqs: [{ q: "What makes elements keyboard focusable?", options: ["onclick", "tabindex", "href", "class"], correct: 1 }]
        }
    },
    {
        id: 47, phase: 9, phaseTitle: "Accessibility", title: "Accessible HTML Mindset",
        content: {
            explanation: [{ en: "Write HTML with accessibility in mind from the start. Use semantic elements, proper headings, and labels.", ar: "اكتب HTML مع وضع إمكانية الوصول في الاعتبار من البداية. استخدم العناصر الدلالية والعناوين والتسميات المناسبة." }],
            why: "Accessible sites rank better in SEO and reach more users.",
            examples: [{ level: "Advanced", code: "<header role=\"banner\">\n  <nav aria-label=\"Primary\">\n    <ul>\n      <li><a href=\"/\">Home</a></li>\n    </ul>\n  </nav>\n</header>", desc: "Accessible structure" }],
            mcqs: [{ q: "Should you think about accessibility early?", options: ["No, add later", "Yes, from the start", "Only for gov sites", "Only if required"], correct: 1 }]
        }
    },
    // Phase 10: SEO
    {
        id: 48, phase: 10, phaseTitle: "SEO Basics", title: "Heading Hierarchy",
        content: {
            explanation: [
                { en: "Search engines use headings (h1-h6) to understand page structure and topic importance. Think of headings as a document outline.", ar: "محركات البحث تستخدم العناوين (h1-h6) لفهم هيكل الصفحة وأهمية المواضيع. فكر في العناوين كمخطط للمستند." },
                { en: "Every page should have exactly ONE <h1>. It's your main topic/title. Multiple h1s confuse search engines and dilute SEO value.", ar: "كل صفحة يجب أن تحتوي على <h1> واحد بالضبط. إنه موضوعك/عنوانك الرئيسي. عدة h1s تربك محركات البحث وتخفف قيمة SEO." },
                { en: "Headings should follow logical order: h1 → h2 → h3. Never skip levels (h1 → h3) as it breaks the outline structure.", ar: "العناوين يجب أن تتبع ترتيباً منطقياً: h1 → h2 → h3. لا تتخطى أبداً المستويات (h1 → h3) لأنها تكسر هيكل المخطط." },
                { en: "h2 elements are main sections under h1. Use them for major topics: Features, Pricing, About, Contact, etc.", ar: "عناصر h2 هي الأقسام الرئيسية تحت h1. استخدمها للمواضيع الكبرى: الميزات، الأسعار، حول، الاتصال، إلخ." },
                { en: "h3-h6 are subsections. h3 under h2, h4 under h3, etc. Most pages rarely need beyond h4.", ar: "h3-h6 هي أقسام فرعية. h3 تحت h2، h4 تحت h3، إلخ. معظم الصفحات نادراً ما تحتاج أبعد من h4." },
                { en: "Include keywords in headings naturally. 'Best Practices for HTML SEO' is better than 'HTML SEO Best Practices Keywords SEO'.", ar: "ضمّن الكلمات المفتاحية في العناوين بشكل طبيعي. 'أفضل ممارسات HTML لـ SEO' أفضل من 'HTML SEO أفضل ممارسات كلمات SEO'." },
                { en: "Screen readers navigate by headings too. Proper hierarchy helps both SEO AND accessibility - two benefits in one!", ar: "قارئات الشاشة تتنقل بالعناوين أيضاً. التسلسل الهرمي الصحيح يساعد SEO وإمكانية الوصول معاً - فائدتان في واحدة!" },
                { en: "Google extracts featured snippets often from h2/h3 content. Well-structured headings increase featured snippet chances.", ar: "Google تستخرج المقتطفات المميزة غالباً من محتوى h2/h3. العناوين المنظمة جيداً تزيد فرص المقتطفات المميزة." },
                { en: "Don't use headings just for styling (making text bigger). Use CSS for styling, headings for structure.", ar: "لا تستخدم العناوين فقط للتنسيق (تكبير النص). استخدم CSS للتنسيق، والعناوين للهيكل." },
                { en: "Pro Tip: Create your heading structure BEFORE writing content. It forces clear thinking about page organization.", ar: "نصيحة احترافية: أنشئ هيكل عناوينك قبل كتابة المحتوى. هذا يفرض تفكيراً واضحاً حول تنظيم الصفحة." }
            ],
            why: "Proper heading hierarchy can significantly improve search rankings. It helps Google understand your content better and improves user navigation!",
            whyAr: "التسلسل الهرمي الصحيح للعناوين يمكن أن يحسن ترتيب البحث بشكل كبير. يساعد Google على فهم محتواك بشكل أفضل ويحسن تنقل المستخدم!",
            examples: [
                { level: "Beginner", code: "<!-- Correct heading hierarchy -->\n<h1>Learn HTML Programming</h1>\n\n<h2>Getting Started</h2>\n<p>Introduction content...</p>\n\n<h2>Basic Elements</h2>\n<h3>Headings</h3>\n<p>About headings...</p>\n<h3>Paragraphs</h3>\n<p>About paragraphs...</p>\n\n<h2>Advanced Topics</h2>\n<p>Advanced content...</p>", desc: "Logical heading structure" },
                { level: "Intermediate", code: "<!-- Blog post structure -->\n<article>\n  <h1>Complete Guide to Web Development</h1>\n  \n  <h2>Frontend Technologies</h2>\n  <h3>HTML Basics</h3>\n  <h4>Document Structure</h4>\n  <h4>Semantic Elements</h4>\n  <h3>CSS Styling</h3>\n  <h3>JavaScript</h3>\n  \n  <h2>Backend Technologies</h2>\n  <h3>Node.js</h3>\n  <h3>Databases</h3>\n  \n  <h2>Conclusion</h2>\n</article>", desc: "Complex article outline" },
                { level: "Advanced", code: "<!-- SEO-optimized landing page -->\n<main>\n  <h1>Best Project Management Software for Teams in 2024</h1>\n  \n  <section>\n    <h2>Why Choose Our Project Management Tool?</h2>\n    <h3>Real-time Collaboration Features</h3>\n    <h3>Integrations with 100+ Apps</h3>\n    <h3>Enterprise-grade Security</h3>\n  </section>\n  \n  <section>\n    <h2>Pricing Plans for Every Team Size</h2>\n    <h3>Free Plan - Perfect for Individuals</h3>\n    <h3>Pro Plan - For Growing Teams</h3>\n    <h3>Enterprise - Custom Solutions</h3>\n  </section>\n  \n  <section>\n    <h2>What Our Customers Say</h2>\n    <!-- Testimonials -->\n  </section>\n  \n  <section>\n    <h2>Frequently Asked Questions</h2>\n    <h3>Is there a free trial?</h3>\n    <h3>Can I cancel anytime?</h3>\n  </section>\n</main>", desc: "SEO-optimized page with keywords in headings" }
            ],
            mistakes: [
                { bad: "<h1>Welcome</h1>\n<h1>About Us</h1>\n<h1>Contact</h1>", good: "<h1>Welcome to Our Company</h1>\n<h2>About Us</h2>\n<h2>Contact</h2>", why: "Only ONE h1 per page! Multiple h1s confuse search engines about your main topic." },
                { bad: "<h1>Title</h1>\n<h3>Subsection</h3>\n<!-- Skipped h2! -->", good: "<h1>Title</h1>\n<h2>Section</h2>\n<h3>Subsection</h3>", why: "Never skip heading levels. Go from h1 → h2 → h3 in order." },
                { bad: "<h2 style=\"font-size: 12px;\">Small text that should be paragraph</h2>", good: "<p class=\"subtitle\">Small text that should be paragraph</p>", why: "Don't use headings for styling. Use them for document structure only." },
                { bad: "<h2>Click here to learn more about our amazing products!!!</h2>", good: "<h2>Our Product Features</h2>\n<p>Click to <a href=\"#\">learn more</a></p>", why: "Headings should describe content structure, not be call-to-action text." }
            ],
            mcqs: [
                { q: "How many h1 elements should a page have?", options: ["None", "Exactly one", "As many as needed", "One per section"], correct: 1 },
                { q: "How do search engines use headings?", options: ["Ignore them", "To understand structure", "For styling only", "To count words"], correct: 1 },
                { q: "What's wrong with h1 → h3 (skipping h2)?", options: ["Nothing", "Breaks outline structure", "Page won't load", "Only affects styling"], correct: 1 },
                { q: "Should you use headings for styling?", options: ["Yes, that's their purpose", "No, use CSS for styling", "Only for big text", "Only h1"], correct: 1 },
                { q: "Where should keywords appear?", options: ["Only in h1", "Naturally in headings", "Stuffed everywhere", "Only in paragraph"], correct: 1 },
                { q: "Do headings help accessibility?", options: ["No", "Yes, screen readers use them", "Only on mobile", "Only for images"], correct: 1 }
            ]
        }
    },
    {
        id: 49, phase: 10, phaseTitle: "SEO Basics", title: "Semantic Impact on SEO",
        content: {
            explanation: [
                { en: "Semantic HTML tells search engines WHAT your content is, not just how it looks. <article> says 'this is an article', <nav> says 'this is navigation'.", ar: "HTML الدلالي يخبر محركات البحث ماهية محتواك، ليس فقط كيف يبدو. <article> يقول 'هذا مقال'، <nav> يقول 'هذا تنقل'." },
                { en: "Google's algorithms understand semantic elements. Using <article> instead of <div class='article'> helps Google identify your main content.", ar: "خوارزميات Google تفهم العناصر الدلالية. استخدام <article> بدلاً من <div class='article'> يساعد Google على تحديد محتواك الرئيسي." },
                { en: "<main> tells search engines where the primary content is. Everything outside <main> (header, sidebar, footer) is secondary.", ar: "<main> يخبر محركات البحث أين المحتوى الأساسي. كل شيء خارج <main> (الرأس، الشريط الجانبي، التذييل) ثانوي." },
                { en: "<nav> identifies navigation blocks. Search engines treat nav links differently than content links for crawling purposes.", ar: "<nav> يحدد كتل التنقل. محركات البحث تتعامل مع روابط nav بشكل مختلف عن روابط المحتوى لأغراض الزحف." },
                { en: "<article> content can appear in Google News, Discover, and search features. Non-semantic markup may miss these opportunities.", ar: "محتوى <article> يمكن أن يظهر في أخبار Google، Discover، وميزات البحث. الترميز غير الدلالي قد يفوت هذه الفرص." },
                { en: "<header> and <footer> in articles help Google understand publication info, author details, and related content.", ar: "<header> و<footer> في المقالات يساعدان Google على فهم معلومات النشر، تفاصيل الكاتب، والمحتوى ذو الصلة." },
                { en: "<time datetime='2024-03-15'> helps Google understand when content was published/updated. Important for news and time-sensitive content.", ar: "<time datetime='2024-03-15'> يساعد Google على فهم متى نُشر/حُدث المحتوى. مهم للأخبار والمحتوى الحساس للوقت." },
                { en: "Schema.org structured data pairs with semantic HTML. <article> + Article schema = maximum SEO impact.", ar: "البيانات المنظمة من Schema.org تتزاوج مع HTML الدلالي. <article> + مخطط Article = أقصى تأثير SEO." },
                { en: "Semantic HTML makes your site more accessible. Accessibility improvements often correlate with better SEO rankings.", ar: "HTML الدلالي يجعل موقعك أكثر إتاحة. تحسينات إمكانية الوصول غالباً ما ترتبط بترتيب SEO أفضل." },
                { en: "Pro Tip: Use browser dev tools (Elements panel) to see if your structure makes semantic sense. If it's all divs, add semantics!", ar: "نصيحة احترافية: استخدم أدوات المطور في المتصفح (لوحة Elements) لمعرفة إذا كان هيكلك منطقي دلالياً. إذا كان كله divs، أضف دلالات!" }
            ],
            why: "Search engines understand content better with semantic HTML. It's a free SEO boost that also improves accessibility!",
            whyAr: "محركات البحث تفهم المحتوى بشكل أفضل مع HTML الدلالي. إنه تعزيز SEO مجاني يحسن أيضاً إمكانية الوصول!",
            examples: [
                { level: "Beginner", code: "<!-- Non-semantic (harder for SEO) -->\n<div class=\"article\">\n  <div class=\"title\">Article Title</div>\n  <div class=\"content\">Content here...</div>\n</div>\n\n<!-- Semantic (better for SEO) -->\n<article>\n  <h1>Article Title</h1>\n  <p>Content here...</p>\n</article>", desc: "Semantic vs non-semantic comparison" },
                { level: "Intermediate", code: "<!-- SEO-optimized page structure -->\n<header>\n  <nav aria-label=\"Main navigation\">\n    <a href=\"/\">Home</a>\n    <a href=\"/blog\">Blog</a>\n  </nav>\n</header>\n\n<main>\n  <article>\n    <header>\n      <h1>Main Content Title</h1>\n      <time datetime=\"2024-03-15\">March 15, 2024</time>\n      <address>By <a href=\"/author\">John Doe</a></address>\n    </header>\n    <p>Article content...</p>\n  </article>\n</main>\n\n<aside>\n  <h2>Related Articles</h2>\n  <!-- Sidebar content -->\n</aside>\n\n<footer>\n  <p>&copy; 2024 Company</p>\n</footer>", desc: "Full semantic page structure" },
                { level: "Advanced", code: "<!-- Combining semantic HTML with Schema.org -->\n<article itemscope itemtype=\"https://schema.org/Article\">\n  <header>\n    <h1 itemprop=\"headline\">Complete SEO Guide for 2024</h1>\n    <meta itemprop=\"datePublished\" content=\"2024-03-15\">\n    <address itemprop=\"author\" itemscope itemtype=\"https://schema.org/Person\">\n      By <span itemprop=\"name\">Jane Smith</span>\n    </address>\n  </header>\n  \n  <div itemprop=\"articleBody\">\n    <section>\n      <h2>1. Technical SEO</h2>\n      <p>Content about technical SEO...</p>\n    </section>\n    <section>\n      <h2>2. Content Strategy</h2>\n      <p>Content about strategy...</p>\n    </section>\n  </div>\n</article>", desc: "Semantic HTML with structured data" }
            ],
            mistakes: [
                { bad: "<div class=\"main\">\n  <div class=\"article\">\n    <div class=\"heading\">Title</div>\n  </div>\n</div>", good: "<main>\n  <article>\n    <h1>Title</h1>\n  </article>\n</main>", why: "Using divs with class names doesn't provide semantic meaning. Search engines understand <main>, <article>, <h1> natively." },
                { bad: "<span class=\"date\">March 15, 2024</span>", good: "<time datetime=\"2024-03-15\">March 15, 2024</time>", why: "The <time> element with datetime attribute helps search engines understand dates precisely." },
                { bad: "<div id=\"navigation\">\n  <a href=\"/\">Home</a>\n</div>", good: "<nav aria-label=\"Main\">\n  <a href=\"/\">Home</a>\n</nav>", why: "Using <nav> explicitly identifies navigation for both search engines and screen readers." }
            ],
            mcqs: [
                { q: "Why use semantic HTML for SEO?", options: ["Faster loading", "Search engines understand content better", "More styling options", "Required by law"], correct: 1 },
                { q: "What does <main> tell search engines?", options: ["Site footer", "Where primary content is", "Advertisement area", "Navigation menu"], correct: 1 },
                { q: "Which element helps with dates in SEO?", options: ["<date>", "<time>", "<datetime>", "<calendar>"], correct: 1 },
                { q: "Can semantic HTML improve accessibility?", options: ["No connection", "Yes, both benefit", "Only SEO", "Only accessibility"], correct: 1 },
                { q: "What pairs with semantic HTML for max SEO?", options: ["More divs", "Schema.org data", "Inline styles", "JavaScript"], correct: 1 },
                { q: "Where does article content appear beyond search?", options: ["Nowhere", "Google News/Discover", "Only ads", "Email"], correct: 1 }
            ]
        }
    },
    {
        id: 50, phase: 10, phaseTitle: "SEO Basics", title: "Meta Description",
        content: {
            explanation: [
                { en: "The meta description is the snippet shown in search results below your title. It's your 'ad copy' to convince users to click.", ar: "وصف الميتا هو المقتطف الظاهر في نتائج البحث تحت عنوانك. إنه 'نص إعلانك' لإقناع المستخدمين بالضغط." },
                { en: "Optimal length: 150-160 characters. Longer descriptions get truncated. Too short wastes valuable real estate.", ar: "الطول الأمثل: 150-160 حرف. الأوصاف الأطول تُقطع. القصير جداً يضيع مساحة قيمة." },
                { en: "Include your target keyword naturally. Google bolds matching keywords in search results, drawing user attention.", ar: "ضمّن الكلمة المفتاحية المستهدفة بشكل طبيعي. Google تخط الكلمات المطابقة بالعريض في نتائج البحث، مما يجذب انتباه المستخدم." },
                { en: "Write unique descriptions for every page. Duplicate meta descriptions across pages is a common SEO mistake.", ar: "اكتب أوصافاً فريدة لكل صفحة. تكرار أوصاف الميتا عبر الصفحات خطأ SEO شائع." },
                { en: "Include a call-to-action: 'Learn more', 'Discover how', 'Get started today'. CTAs increase click-through rates.", ar: "ضمّن دعوة للعمل: 'تعلم المزيد'، 'اكتشف كيف'، 'ابدأ اليوم'. CTAs تزيد معدلات النقر." },
                { en: "Meta descriptions don't directly affect rankings, BUT they affect click-through rate (CTR), which DOES affect rankings.", ar: "أوصاف الميتا لا تؤثر مباشرة على الترتيب، لكنها تؤثر على معدل النقر (CTR)، الذي يؤثر على الترتيب." },
                { en: "Avoid: All caps, excessive punctuation (!!!), keyword stuffing, generic text like 'Welcome to our website'.", ar: "تجنب: كل الحروف كبيرة، علامات ترقيم مفرطة (!!!)، حشو الكلمات المفتاحية، نص عام مثل 'مرحباً بكم في موقعنا'." },
                { en: "Google may rewrite your meta description if it thinks its own snippet is better. Write good ones to prevent this!", ar: "Google قد تعيد كتابة وصف الميتا إذا اعتقدت أن مقتطفها أفضل. اكتب أوصافاً جيدة لمنع هذا!" },
                { en: "For e-commerce: Include price, availability, brand. For articles: Include publish date, author expertise.", ar: "للتجارة الإلكترونية: ضمّن السعر، التوفر، العلامة التجارية. للمقالات: ضمّن تاريخ النشر، خبرة الكاتب." },
                { en: "Pro Tip: Preview your meta description using Google's SERP preview tools. See exactly how it will appear in search results.", ar: "نصيحة احترافية: عاين وصف الميتا باستخدام أدوات معاينة SERP من Google. شاهد بالضبط كيف سيظهر في نتائج البحث." }
            ],
            why: "A compelling meta description can dramatically increase your click-through rate. More clicks = more traffic = better rankings over time!",
            whyAr: "وصف ميتا مقنع يمكن أن يزيد معدل النقر بشكل كبير. نقرات أكثر = زيارات أكثر = ترتيب أفضل بمرور الوقت!",
            examples: [
                { level: "Beginner", code: "<head>\n  <meta charset=\"UTF-8\">\n  <title>Learn HTML - Free Interactive Course</title>\n  <meta name=\"description\" content=\"Master HTML from scratch with our free interactive course. Learn web development fundamentals in just 2 weeks. Start coding today!\">\n</head>", desc: "Basic meta description with call-to-action" },
                { level: "Intermediate", code: "<!-- Different page types need different descriptions -->\n\n<!-- Homepage -->\n<meta name=\"description\" content=\"TechStore - Your one-stop shop for electronics. Free shipping on orders over $50. Shop laptops, phones, and accessories.\">\n\n<!-- Product page -->\n<meta name=\"description\" content=\"iPhone 15 Pro - $999 | In Stock | Free 2-day shipping. 256GB, Titanium finish. 5-star rated by 2,000+ customers.\">\n\n<!-- Blog post -->\n<meta name=\"description\" content=\"Learn the 10 essential SEO techniques for 2024. Written by John Smith, SEO expert with 15 years experience. Updated March 2024.\">\n\n<!-- Contact page -->\n<meta name=\"description\" content=\"Contact TechStore support 24/7. Live chat, email, or call 1-800-TECH. Average response time: 5 minutes.\">", desc: "Different descriptions for different pages" },
                { level: "Advanced", code: "<!-- Complete head section with SEO elements -->\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  \n  <!-- Primary SEO -->\n  <title>Best JavaScript Frameworks 2024 | Complete Comparison Guide</title>\n  <meta name=\"description\" content=\"Compare React, Vue, Angular & Svelte in our 2024 guide. Performance benchmarks, learning curves, job market data. Find your perfect framework.\">\n  \n  <!-- Open Graph for social sharing -->\n  <meta property=\"og:title\" content=\"Best JavaScript Frameworks 2024\">\n  <meta property=\"og:description\" content=\"Compare React, Vue, Angular & Svelte...\">\n  <meta property=\"og:image\" content=\"/images/frameworks-comparison.jpg\">\n  \n  <!-- Twitter Card -->\n  <meta name=\"twitter:card\" content=\"summary_large_image\">\n  <meta name=\"twitter:title\" content=\"Best JavaScript Frameworks 2024\">\n  <meta name=\"twitter:description\" content=\"Compare React, Vue, Angular & Svelte...\">\n</head>", desc: "Complete SEO meta setup" }
            ],
            mistakes: [
                { bad: "<meta name=\"description\" content=\"Welcome to our website. We have many products.\">", good: "<meta name=\"description\" content=\"Shop 1000+ electronics at TechMart. Free shipping, 30-day returns. Find laptops, phones & more.\">", why: "Generic descriptions don't encourage clicks. Be specific about what you offer and include benefits." },
                { bad: "<meta name=\"description\" content=\"BUY NOW!!! BEST PRICES!!! CLICK HERE!!! AMAZING DEALS!!! SEO KEYWORDS!!!\">", good: "<meta name=\"description\" content=\"Quality web development tools at competitive prices. Professional-grade software with free support.\">", why: "Excessive caps, punctuation, and keyword stuffing looks spammy and reduces click-through rates." },
                { bad: "<!-- Using same description on all pages -->\n<meta name=\"description\" content=\"Company Description\">", good: "<!-- Homepage -->\n<meta name=\"description\" content=\"Unique for homepage...\">\n<!-- About -->\n<meta name=\"description\" content=\"Unique for about...\">", why: "Every page needs a unique meta description. Duplicate descriptions hurt SEO." },
                { bad: "<meta name=\"description\" content=\"This is a really long meta description that goes on and on with excessive text that will definitely be truncated by search engines because it exceeds the recommended character limit of approximately 150-160 characters which means users won't see the important information at the end.\">", good: "<meta name=\"description\" content=\"Learn HTML in 30 days. Free course with interactive exercises. Join 50,000+ students. Start today!\">", why: "Keep under 160 characters. Long descriptions get cut off in search results." }
            ],
            mcqs: [
                { q: "What is ideal meta description length?", options: ["50 chars", "100 chars", "150-160 chars", "500 chars"], correct: 2 },
                { q: "Do meta descriptions directly affect rankings?", options: ["Yes, major factor", "No, but affect CTR", "Only for images", "Replaced by AI"], correct: 1 },
                { q: "Should every page have unique description?", options: ["No, copy is fine", "Yes, always unique", "Only homepage", "Only blog posts"], correct: 1 },
                { q: "What should you include for e-commerce?", options: ["Just keywords", "Price and availability", "Only brand name", "Nothing specific"], correct: 1 },
                { q: "What makes Google rewrite your description?", options: ["It's always random", "If theirs seems better", "Never happens", "Only on mobile"], correct: 1 },
                { q: "What's a good element to include?", options: ["All caps text", "Call-to-action", "Many exclamation marks", "Keyword stuffing"], correct: 1 }
            ]
        }
    },
    // Phase 11: Extra HTML
    {
        id: 51, phase: 11, phaseTitle: "Extra HTML", title: "HTML Entities",
        content: {
            explanation: [
                { en: "HTML entities are special codes to display reserved characters. They start with & and end with ; like &lt; for <.", ar: "كيانات HTML هي رموز خاصة لعرض الأحرف المحجوزة. تبدأ بـ & وتنتهي بـ ; مثل &lt; لـ <." },
                { en: "Reserved characters MUST be encoded: < (&lt;), > (&gt;), & (&amp;). Using raw < can break your HTML!", ar: "الأحرف المحجوزة يجب ترميزها: < (&lt;)، > (&gt;)، & (&amp;). استخدام < الخام يمكن أن يكسر HTML!" },
                { en: "Common symbols: &copy; for copyright, &reg; for registered, &trade; for trademark, &euro; for Euro.", ar: "الرموز الشائعة: &copy; لحقوق النشر، &reg; للمسجل، &trade; للعلامة التجارية، &euro; لليورو." },
                { en: "&nbsp; is non-breaking space. It prevents line breaks between words and adds visible whitespace.", ar: "&nbsp; هي مسافة غير قابلة للكسر. تمنع فواصل الأسطر بين الكلمات وتضيف مسافة مرئية." },
                { en: "Numeric entities use numbers: &#60; is < (decimal), &#x3C; is < (hexadecimal). Same result as named entities.", ar: "الكيانات الرقمية تستخدم أرقام: &#60; هي < (عشري)، &#x3C; هي < (ست عشري). نفس نتيجة الكيانات المسماة." },
                { en: "Math symbols: &times; for multiply, &divide; for divide, &plusmn; for plus-minus, &ne; for not equal.", ar: "رموز الرياضيات: &times; للضرب، &divide; للقسمة، &plusmn; للزائد-ناقص، &ne; لغير مساوي." },
                { en: "Quotation entities: &ldquo; and &rdquo; for curly double quotes, &lsquo; and &rsquo; for curly single quotes.", ar: "كيانات الاقتباس: &ldquo; و&rdquo; لعلامات الاقتباس المزدوجة، &lsquo; و&rsquo; للمفردة." },
                { en: "Security: Always encode user input displayed on pages. Prevents XSS attacks where < could inject scripts.", ar: "الأمان: رمز دائماً مدخلات المستخدم المعروضة. يمنع هجمات XSS حيث < يمكن أن تحقن نصوص." },
                { en: "Pro Tip: With UTF-8 encoding, you can type most symbols directly. Entities are mainly needed for < > &.", ar: "نصيحة: مع ترميز UTF-8، يمكنك كتابة معظم الرموز مباشرة. الكيانات مطلوبة أساساً لـ < > &." }
            ],
            why: "Entities let you display characters that would otherwise break HTML or aren't on your keyboard!",
            whyAr: "الكيانات تتيح لك عرض أحرف ستكسر HTML أو غير موجودة على لوحة المفاتيح!",
            examples: [
                { level: "Beginner", code: "<!-- Reserved characters -->\n<p>5 &lt; 10 and 10 &gt; 5</p>\n<!-- Displays: 5 < 10 and 10 > 5 -->\n\n<p>Tom &amp; Jerry</p>\n<!-- Displays: Tom & Jerry -->\n\n<!-- Common symbols -->\n<p>&copy; 2024 Company</p>\n<p>Price: &euro;99.99</p>", desc: "Basic reserved characters and symbols" },
                { level: "Intermediate", code: "<!-- Non-breaking space uses -->\n<p>10&nbsp;km</p>  <!-- Prevents line break -->\n<p>Dr.&nbsp;Smith</p>  <!-- Keeps title with name -->\n\n<!-- Show code in HTML -->\n<p>Use &lt;strong&gt; for bold text</p>\n<!-- Displays: Use <strong> for bold text -->", desc: "Spacing and displaying code" },
                { level: "Advanced", code: "<!-- Math symbols -->\n<p>5 &times; 3 = 15</p>\n<p>10 &divide; 2 = 5</p>\n<p>x &ne; y means not equal</p>\n\n<!-- Arrows -->\n<p>Previous &larr; | &rarr; Next</p>", desc: "Math and arrow symbols" }
            ],
            mistakes: [
                { bad: "<p>5 < 10 is true</p>", good: "<p>5 &lt; 10 is true</p>", why: "Always encode < and > in content. Browser may parse them as tags." },
                { bad: "<a href=\"page.html?a=1&b=2\">Link</a>", good: "<a href=\"page.html?a=1&amp;b=2\">Link</a>", why: "Ampersands in URLs should be encoded as &amp; in HTML." },
                { bad: "<p>&nbsp;&nbsp;&nbsp;Indented</p>", good: "<p style=\"text-indent: 2em;\">Indented</p>", why: "Use CSS for spacing, not &nbsp; chains." }
            ],
            mcqs: [
                { q: "How do you display < in HTML?", options: ["<", "&lt;", "\\<", "[<]"], correct: 1 },
                { q: "What is &nbsp; used for?", options: ["Line break", "Non-breaking space", "Tab", "Section break"], correct: 1 },
                { q: "What does &amp; display?", options: ["@", "#", "&", "%"], correct: 2 },
                { q: "Which shows copyright symbol?", options: ["&copyright;", "&copy;", "&(c);", "&cr;"], correct: 1 },
                { q: "Why encode < in user content?", options: ["Styling", "SEO", "Prevent XSS attacks", "Faster loading"], correct: 2 }
            ]
        }
    },
    {
        id: 52, phase: 11, phaseTitle: "Extra HTML", title: "Data Attributes",
        content: {
            explanation: [
                { en: "Custom data-* attributes store extra information on HTML elements for JavaScript to use.", ar: "سمات data-* المخصصة تخزن معلومات إضافية على عناصر HTML لاستخدام JavaScript." },
                { en: "Syntax: data-[name]=\"value\". The name must be lowercase with no spaces. Use hyphens for multi-word names.", ar: "الصيغة: data-[اسم]=\"قيمة\". الاسم يجب أن يكون بأحرف صغيرة بدون مسافات. استخدم الواصلات للأسماء المتعددة." },
                { en: "Access in JavaScript via element.dataset. data-user-id becomes element.dataset.userId (camelCase).", ar: "الوصول في JavaScript عبر element.dataset. data-user-id يصبح element.dataset.userId (camelCase)." },
                { en: "Common uses: storing IDs, configuration, state, API parameters, and component settings.", ar: "الاستخدامات الشائعة: تخزين IDs، التكوين، الحالة، معلمات API، وإعدادات المكونات." },
                { en: "Data attributes are great for JavaScript frameworks. React, Vue, and others use them extensively.", ar: "سمات البيانات ممتازة لأطر JavaScript. React، Vue، وغيرها تستخدمها بكثافة." },
                { en: "You can also access data attributes using getAttribute() and setAttribute() methods.", ar: "يمكنك أيضاً الوصول لسمات البيانات باستخدام getAttribute() وsetAttribute()." },
                { en: "CSS can select by data attributes: [data-active=\"true\"] { color: green; }", ar: "CSS يمكنها التحديد بسمات البيانات: [data-active=\"true\"] { color: green; }" },
                { en: "Don't put sensitive data in data attributes - they're visible in page source!", ar: "لا تضع بيانات حساسة في سمات data - إنها مرئية في مصدر الصفحة!" },
                { en: "Pro Tip: Use data attributes instead of non-standard attributes. They're valid HTML5 and won't cause errors.", ar: "نصيحة: استخدم سمات data بدلاً من السمات غير القياسية. إنها HTML5 صالحة ولن تسبب أخطاء." }
            ],
            why: "Data attributes bridge HTML and JavaScript. They store information without non-standard attributes!",
            whyAr: "سمات البيانات تربط HTML وJavaScript. تخزن المعلومات بدون سمات غير قياسية!",
            examples: [
                { level: "Beginner", code: "<!-- Basic data attributes -->\n<button data-action=\"save\">Save</button>\n<div data-user-id=\"123\" data-role=\"admin\">\n  User Card\n</div>\n\n<script>\n  const div = document.querySelector('div');\n  console.log(div.dataset.userId); // \"123\"\n  console.log(div.dataset.role);   // \"admin\"\n</script>", desc: "Basic usage and JavaScript access" },
                { level: "Intermediate", code: "<!-- Interactive component -->\n<div class=\"accordion\" data-collapsed=\"true\">\n  <h3>Click to expand</h3>\n  <div class=\"content\">Hidden content</div>\n</div>\n\n<script>\n  const acc = document.querySelector('.accordion');\n  acc.addEventListener('click', () => {\n    const collapsed = acc.dataset.collapsed === 'true';\n    acc.dataset.collapsed = !collapsed;\n  });\n</script>\n\n<style>\n  [data-collapsed=\"true\"] .content { display: none; }\n  [data-collapsed=\"false\"] .content { display: block; }\n</style>", desc: "State management with data attributes" },
                { level: "Advanced", code: "<!-- E-commerce product card -->\n<div class=\"product\"\n     data-product-id=\"SKU-12345\"\n     data-price=\"29.99\"\n     data-currency=\"USD\"\n     data-stock=\"15\"\n     data-category=\"electronics\">\n  <h3>Wireless Mouse</h3>\n  <button class=\"add-to-cart\">Add to Cart</button>\n</div>\n\n<script>\n  document.querySelectorAll('.add-to-cart').forEach(btn => {\n    btn.addEventListener('click', (e) => {\n      const product = e.target.closest('.product');\n      const { productId, price, currency } = product.dataset;\n      \n      addToCart({\n        id: productId,\n        price: parseFloat(price),\n        currency: currency\n      });\n    });\n  });\n</script>", desc: "E-commerce integration" }
            ],
            mistakes: [
                { bad: "<div userId=\"123\">", good: "<div data-user-id=\"123\">", why: "Custom attributes must use data- prefix for valid HTML5." },
                { bad: "<div data-User-ID=\"123\">", good: "<div data-user-id=\"123\">", why: "Data attribute names must be lowercase. Use hyphens between words." },
                { bad: "element.getAttribute('data-user-id')", good: "element.dataset.userId", why: "Use dataset for cleaner code. getAttribute works but is more verbose." }
            ],
            mcqs: [
                { q: "How do you access data-user-id in JS?", options: ["data-user-id", "dataset.userId", "getAttribute('user-id')", "data.userId"], correct: 1 },
                { q: "What prefix must custom data attributes have?", options: ["custom-", "attr-", "data-", "html-"], correct: 2 },
                { q: "Can CSS select by data attributes?", options: ["No", "Yes", "Only with classes", "Only IDs"], correct: 1 },
                { q: "How is data-my-value accessed in JS?", options: ["dataset.my-value", "dataset.myValue", "dataset.MyValue", "data.myValue"], correct: 1 },
                { q: "Should passwords go in data attributes?", options: ["Yes", "No, visible in source", "Only encrypted", "Only hashed"], correct: 1 }
            ]
        }
    },
    {
        id: 53, phase: 11, phaseTitle: "Extra HTML", title: "HTML5 APIs Overview",
        content: {
            explanation: [
                { en: "HTML5 introduced powerful JavaScript APIs that work with HTML. They extend browser capabilities significantly.", ar: "HTML5 قدمت واجهات برمجة JavaScript قوية تعمل مع HTML. إنها توسع قدرات المتصفح بشكل كبير." },
                { en: "Web Storage API: localStorage persists data forever, sessionStorage clears when tab closes.", ar: "Web Storage API: localStorage تحفظ البيانات للأبد، sessionStorage تُمسح عند إغلاق التبويب." },
                { en: "Geolocation API: Get user's location (with permission). Essential for maps and location-based services.", ar: "Geolocation API: احصل على موقع المستخدم (بإذن). أساسية للخرائط والخدمات المعتمدة على الموقع." },
                { en: "Canvas API: Draw graphics, create games, visualize data. Uses <canvas> element with JavaScript.", ar: "Canvas API: ارسم رسومات، أنشئ ألعاب، جسّد البيانات. تستخدم عنصر <canvas> مع JavaScript." },
                { en: "Drag and Drop API: Native drag-drop without libraries. Uses draggable attribute and drag events.", ar: "Drag and Drop API: سحب وإفلات أصلي بدون مكتبات. تستخدم سمة draggable وأحداث السحب." },
                { en: "Web Workers API: Run JavaScript in background threads. Perfect for heavy computations without freezing UI.", ar: "Web Workers API: شغّل JavaScript في خيوط خلفية. مثالية للحسابات الثقيلة بدون تجميد الواجهة." },
                { en: "History API: Manipulate browser history. Enables single-page apps with back/forward navigation.", ar: "History API: تلاعب بتاريخ المتصفح. تمكّن تطبيقات الصفحة الواحدة مع تنقل للأمام/الخلف." },
                { en: "Notifications API: Show system notifications (with permission). Great for real-time updates.", ar: "Notifications API: أظهر إشعارات النظام (بإذن). ممتازة للتحديثات الفورية." },
                { en: "Pro Tip: Always check API support with 'if (apiName in window)' before using HTML5 APIs.", ar: "نصيحة: تحقق دائماً من دعم API بـ 'if (apiName in window)' قبل استخدام واجهات HTML5." }
            ],
            why: "HTML5 APIs turn browsers into powerful application platforms. They enable offline apps, games, and rich experiences!",
            whyAr: "واجهات HTML5 تحول المتصفحات لمنصات تطبيقات قوية. تمكّن التطبيقات بدون إنترنت والألعاب!",
            examples: [
                { level: "Beginner", code: "// Web Storage - persist data\nlocalStorage.setItem('username', 'Ahmed');\nconst name = localStorage.getItem('username');\nconsole.log(name); // \"Ahmed\"\n\n// Remove item\nlocalStorage.removeItem('username');\n\n// Clear all\nlocalStorage.clear();", desc: "Local Storage basics" },
                { level: "Intermediate", code: "// Geolocation API\nif ('geolocation' in navigator) {\n  navigator.geolocation.getCurrentPosition(\n    (position) => {\n      console.log('Lat:', position.coords.latitude);\n      console.log('Lng:', position.coords.longitude);\n    },\n    (error) => {\n      console.log('Error:', error.message);\n    }\n  );\n} else {\n  alert('Geolocation not supported');\n}", desc: "Getting user location" },
                { level: "Advanced", code: "<!-- Canvas drawing -->\n<canvas id=\"myCanvas\" width=\"400\" height=\"200\"></canvas>\n\n<script>\n  const canvas = document.getElementById('myCanvas');\n  const ctx = canvas.getContext('2d');\n  \n  // Draw rectangle\n  ctx.fillStyle = 'blue';\n  ctx.fillRect(10, 10, 100, 100);\n  \n  // Draw circle\n  ctx.beginPath();\n  ctx.arc(200, 60, 50, 0, Math.PI * 2);\n  ctx.fillStyle = 'red';\n  ctx.fill();\n  \n  // Draw text\n  ctx.font = '20px Arial';\n  ctx.fillStyle = 'black';\n  ctx.fillText('Hello Canvas!', 120, 180);\n</script>", desc: "Canvas drawing basics" }
            ],
            mistakes: [
                { bad: "localStorage.setItem('user', {name: 'Ali'})", good: "localStorage.setItem('user', JSON.stringify({name: 'Ali'}))", why: "Web Storage only stores strings. Use JSON.stringify for objects." },
                { bad: "navigator.geolocation.getCurrentPosition(fn)", good: "if ('geolocation' in navigator) {...}", why: "Always check API support before using. Not all browsers support all APIs." }
            ],
            mcqs: [
                { q: "Which API stores data in browser?", options: ["Geolocation", "Web Storage", "Canvas", "Audio"], correct: 1 },
                { q: "Does localStorage persist after browser close?", options: ["No", "Yes", "Only 24 hours", "Until cleared"], correct: 1 },
                { q: "What element does Canvas API use?", options: ["<draw>", "<graphics>", "<canvas>", "<paint>"], correct: 2 },
                { q: "What runs JS in background threads?", options: ["Canvas", "Storage", "Web Workers", "History"], correct: 2 },
                { q: "Does Geolocation need user permission?", options: ["No", "Yes", "Only on mobile", "Only for GPS"], correct: 1 }
            ]
        }
    },
    // Phase 12: Best Practices
    {
        id: 54, phase: 12, phaseTitle: "Best Practices", title: "Writing Clean HTML",
        content: {
            explanation: [
                { en: "Clean HTML is easier to read, maintain, and debug. It's a sign of professional development.", ar: "HTML النظيف أسهل للقراءة والصيانة والتصحيح. إنه علامة على التطوير المحترف." },
                { en: "Use consistent indentation - 2 or 4 spaces. Never mix tabs and spaces in the same project.", ar: "استخدم مسافات بادئة متسقة - 2 أو 4 مسافات. لا تخلط أبداً بين tabs والمسافات في نفس المشروع." },
                { en: "All tag names should be lowercase: <div> not <DIV>. This is the HTML5 standard.", ar: "جميع أسماء الوسوم يجب أن تكون بحروف صغيرة: <div> ليس <DIV>. هذا معيار HTML5." },
                { en: "Always close your tags properly. Even self-closing tags should be consistent: <br> or <br/>.", ar: "أغلق دائماً وسومك بشكل صحيح. حتى الوسوم ذاتية الإغلاق يجب أن تكون متسقة: <br> أو <br/>." },
                { en: "Proper nesting: elements must close in reverse order: <div><p></p></div> not <div><p></div></p>.", ar: "التداخل الصحيح: العناصر يجب أن تُغلق بترتيب معكوس: <div><p></p></div> ليس <div><p></div></p>." },
                { en: "Use meaningful attribute order: id first, then class, then other attributes, then data attributes.", ar: "استخدم ترتيب سمات ذو معنى: id أولاً، ثم class، ثم سمات أخرى، ثم سمات data." },
                { en: "Keep lines under 80-120 characters. Break long lines for readability.", ar: "احتفظ بالأسطر تحت 80-120 حرف. اكسر الأسطر الطويلة للقراءة." },
                { en: "Group related elements and add blank lines between sections for visual separation.", ar: "جمّع العناصر المرتبطة وأضف أسطر فارغة بين الأقسام للفصل البصري." },
                { en: "Pro Tip: Use a code formatter like Prettier. It automatically enforces consistent style.", ar: "نصيحة: استخدم منسق كود مثل Prettier. إنه يفرض تلقائياً نمطاً متسقاً." }
            ],
            why: "Clean HTML reduces bugs, helps team collaboration, and makes future updates much easier!",
            whyAr: "HTML النظيف يقلل الأخطاء، يساعد تعاون الفريق، ويجعل التحديثات المستقبلية أسهل!",
            examples: [
                { level: "Beginner", code: "<!-- Bad: Inconsistent and messy -->\n<DIV><P>text</DIV></P>\n\n<!-- Good: Clean and consistent -->\n<div>\n  <p>text</p>\n</div>", desc: "Basic cleanup comparison" },
                { level: "Intermediate", code: "<!-- Poorly formatted -->\n<div class=\"card\"><h2>Title</h2><p>Text here that is very long and goes on forever</p><button>Click</button></div>\n\n<!-- Well formatted -->\n<div class=\"card\">\n  <h2>Title</h2>\n  <p>\n    Text here that is very long and \n    goes on to multiple lines\n  </p>\n  <button>Click</button>\n</div>", desc: "Proper line breaks and indentation" },
                { level: "Advanced", code: "<!-- Professional attribute ordering -->\n<input\n  id=\"user-email\"\n  class=\"form-control input-lg\"\n  type=\"email\"\n  name=\"email\"\n  placeholder=\"Enter your email\"\n  required\n  aria-label=\"Email address\"\n  data-validate=\"email\"\n  data-error-message=\"Invalid email\"\n>", desc: "Clean attribute organization" }
            ],
            mistakes: [
                { bad: "<DIV><P>text</DIV></P>", good: "<div>\n  <p>text</p>\n</div>", why: "Use lowercase tags and proper nesting. Elements close in reverse order." },
                { bad: "<div class='a'><p class='b'><span class='c'>text</span></p></div>", good: "<div class=\"a\">\n  <p class=\"b\">\n    <span class=\"c\">text</span>\n  </p>\n</div>", why: "Add indentation and line breaks. Use double quotes for consistency." },
                { bad: "<input type=text name=email>", good: "<input type=\"text\" name=\"email\">", why: "Always quote attribute values, even when not strictly required." }
            ],
            mcqs: [
                { q: "Should tags be lowercase?", options: ["Yes, always", "No, uppercase", "Does not matter", "Only in HTML5"], correct: 0 },
                { q: "What's the correct nesting order?", options: ["Open order", "Reverse order", "Any order", "Alphabetical"], correct: 1 },
                { q: "Should you quote attribute values?", options: ["Never", "Always", "Only strings", "Only numbers"], correct: 1 },
                { q: "What tool helps format HTML?", options: ["Compiler", "Prettier", "Debugger", "Minifier"], correct: 1 },
                { q: "How many spaces for indentation?", options: ["1", "2 or 4", "8", "No standard"], correct: 1 }
            ]
        }
    },
    {
        id: 55, phase: 12, phaseTitle: "Best Practices", title: "Code Readability",
        content: {
            explanation: [
                { en: "Readable code is code that other developers (and future you!) can understand quickly.", ar: "الكود القابل للقراءة هو كود يمكن للمطورين الآخرين (وأنت في المستقبل!) فهمه بسرعة." },
                { en: "Use HTML comments to explain complex sections: <!-- Navigation Menu --> before nav blocks.", ar: "استخدم تعليقات HTML لشرح الأقسام المعقدة: <!-- قائمة التنقل --> قبل كتل nav." },
                { en: "Group related elements logically. Keep header elements together, footer together, etc.", ar: "جمّع العناصر المرتبطة منطقياً. احتفظ بعناصر header معاً، footer معاً، إلخ." },
                { en: "Use meaningful class names: class='product-card' not class='box1' or class='a1b2'.", ar: "استخدم أسماء فئات ذات معنى: class='product-card' ليس class='box1' أو class='a1b2'." },
                { en: "Use meaningful IDs: id='main-navigation' not id='nav1' or id='x'.", ar: "استخدم IDs ذات معنى: id='main-navigation' ليس id='nav1' أو id='x'." },
                { en: "Follow a naming convention: BEM (Block-Element-Modifier), or your team's standard.", ar: "اتبع اصطلاح تسمية: BEM (كتلة-عنصر-معدّل)، أو معيار فريقك." },
                { en: "Keep files focused. Split large HTML into logical components or partials.", ar: "احتفظ بالملفات مركزة. قسّم HTML الكبير إلى مكونات أو أجزاء منطقية." },
                { en: "Don't comment obvious things. <!-- This is a paragraph --> before <p> is unnecessary.", ar: "لا تعلق على الأشياء الواضحة. <!-- هذه فقرة --> قبل <p> غير ضروري." },
                { en: "Pro Tip: Read your HTML aloud. If you stumble explaining it, it needs simplification.", ar: "نصيحة: اقرأ HTML بصوت عالٍ. إذا تعثرت في الشرح، تحتاج لتبسيط." }
            ],
            why: "Readable code saves time for everyone. You'll spend more time reading code than writing it!",
            whyAr: "الكود القابل للقراءة يوفر الوقت للجميع. ستقضي وقتاً أكثر في قراءة الكود من كتابته!",
            examples: [
                { level: "Beginner", code: "<!-- Header Section -->\n<header class=\"site-header\">\n  <!-- Logo -->\n  <div class=\"logo\">...</div>\n  \n  <!-- Main Navigation -->\n  <nav class=\"main-nav\">...</nav>\n</header>", desc: "Clear comments and naming" },
                { level: "Intermediate", code: "<!-- BEM naming convention -->\n<article class=\"card\">\n  <header class=\"card__header\">\n    <h2 class=\"card__title\">Title</h2>\n  </header>\n  <div class=\"card__body\">\n    <p class=\"card__text\">Content...</p>\n  </div>\n  <footer class=\"card__footer\">\n    <button class=\"card__button card__button--primary\">Action</button>\n  </footer>\n</article>", desc: "BEM methodology" },
                { level: "Advanced", code: "<!-- \n  Product Grid Component\n  \n  Usage: Display products in responsive grid\n  Dependencies: product-card.css\n  Author: Development Team\n  Updated: 2024-03-15\n-->\n<section \n  class=\"product-grid\"\n  id=\"featured-products\"\n  aria-label=\"Featured Products\"\n>\n  <!-- Product cards injected by JavaScript -->\n</section>", desc: "Documented component header" }
            ],
            mistakes: [
                { bad: "<div class=\"a\"><div class=\"b\"><div class=\"c\">", good: "<section class=\"hero-section\">\n  <div class=\"hero-content\">\n    <h1 class=\"hero-title\">", why: "Use semantic elements and meaningful class names." },
                { bad: "<!-- This is a div -->\n<div>", good: "<!-- User Profile Section -->\n<div class=\"user-profile\">", why: "Comments should explain PURPOSE, not state the obvious." }
            ],
            mcqs: [
                { q: "Why use comments in HTML?", options: ["Required", "To explain code sections", "For styling", "SEO boost"], correct: 1 },
                { q: "What makes a good class name?", options: ["Short like 'a1'", "Descriptive like 'product-card'", "Numbers only", "Random letters"], correct: 1 },
                { q: "What is BEM?", options: ["HTML tag", "Naming convention", "Browser", "SEO tool"], correct: 1 },
                { q: "Should you comment every tag?", options: ["Yes", "No, only complex sections", "Only divs", "Only spans"], correct: 1 },
                { q: "Why split large HTML files?", options: ["Required", "Easier to maintain", "Faster loading", "Better SEO"], correct: 1 }
            ]
        }
    },
    {
        id: 56, phase: 12, phaseTitle: "Best Practices", title: "Maintainable Structure",
        content: {
            explanation: [
                { en: "Maintainable HTML is easy to update, extend, and refactor without breaking things.", ar: "HTML القابل للصيانة سهل التحديث والتوسيع وإعادة التصميم بدون كسر الأشياء." },
                { en: "Separate concerns: HTML for structure, CSS for styling, JavaScript for behavior.", ar: "افصل الاهتمامات: HTML للهيكل، CSS للتنسيق، JavaScript للسلوك." },
                { en: "Avoid inline styles: Use CSS classes instead of style attributes in HTML.", ar: "تجنب الأنماط السطرية: استخدم فئات CSS بدلاً من سمات style في HTML." },
                { en: "Avoid inline JavaScript: Use external scripts and event listeners instead of onclick attributes.", ar: "تجنب JavaScript السطري: استخدم السكربتات الخارجية ومستمعي الأحداث بدلاً من سمات onclick." },
                { en: "Use reusable patterns. Create consistent card, button, form, and list structures.", ar: "استخدم أنماط قابلة لإعادة الاستخدام. أنشئ هياكل بطاقات وأزرار ونماذج وقوائم متسقة." },
                { en: "Plan for change. Use containers and wrappers that can accommodate future additions.", ar: "خطط للتغيير. استخدم حاويات ولفافات يمكنها استيعاب الإضافات المستقبلية." },
                { en: "Document your structure. Create a style guide or component library for your project.", ar: "وثّق هيكلك. أنشئ دليل أنماط أو مكتبة مكونات لمشروعك." },
                { en: "Use version control (Git). Track changes and collaborate with your team safely.", ar: "استخدم التحكم بالإصدارات (Git). تتبع التغييرات وتعاون مع فريقك بأمان." },
                { en: "Pro Tip: If you find yourself copying HTML, create a reusable component instead.", ar: "نصيحة: إذا وجدت نفسك تنسخ HTML، أنشئ مكوناً قابلاً لإعادة الاستخدام بدلاً من ذلك." }
            ],
            why: "Maintainable code reduces bugs and speeds up development. Your future self will thank you!",
            whyAr: "الكود القابل للصيانة يقلل الأخطاء ويسرّع التطوير. نفسك المستقبلية ستشكرك!",
            examples: [
                { level: "Beginner", code: "<!-- Bad: Inline styles everywhere -->\n<div style=\"color: red; font-size: 20px;\">Text</div>\n\n<!-- Good: Use CSS classes -->\n<div class=\"error-message\">Text</div>\n\n/* In CSS file */\n.error-message {\n  color: red;\n  font-size: 20px;\n}", desc: "Separating HTML and CSS" },
                { level: "Intermediate", code: "<!-- Bad: Inline JavaScript -->\n<button onclick=\"alert('clicked')\">Click</button>\n\n<!-- Good: External event listener -->\n<button id=\"my-button\">Click</button>\n\n<script>\n  document.getElementById('my-button')\n    .addEventListener('click', () => {\n      alert('clicked');\n    });\n</script>", desc: "Separating HTML and JavaScript" },
                { level: "Advanced", code: "<!-- Reusable card component pattern -->\n<article class=\"card\">\n  <div class=\"card__media\">\n    <!-- Image slot -->\n  </div>\n  <div class=\"card__content\">\n    <h3 class=\"card__title\"><!-- Title --></h3>\n    <p class=\"card__description\"><!-- Description --></p>\n  </div>\n  <div class=\"card__actions\">\n    <!-- Buttons slot -->\n  </div>\n</article>\n\n<!-- Used consistently throughout app -->", desc: "Reusable component structure" }
            ],
            mistakes: [
                { bad: "<div style=\"margin: 20px; padding: 10px; background: #fff;\">", good: "<div class=\"content-box\">", why: "Move styles to CSS. Inline styles are hard to maintain and override." },
                { bad: "<button onclick=\"submitForm()\">Submit</button>", good: "<button id=\"submit-btn\">Submit</button>", why: "Use event listeners in JavaScript files, not inline handlers." }
            ],
            mcqs: [
                { q: "What makes HTML maintainable?", options: ["Inline styles", "Separation of concerns", "Long files", "No comments"], correct: 1 },
                { q: "Should you use inline styles?", options: ["Yes", "No, use CSS", "Only for colors", "Only important"], correct: 1 },
                { q: "Why avoid onclick attributes?", options: ["Slow", "Hard to maintain", "Not supported", "Bad for SEO"], correct: 1 },
                { q: "What helps track HTML changes?", options: ["Comments", "Git version control", "More divs", "Inline styles"], correct: 1 },
                { q: "When should you create components?", options: ["Never", "When copying HTML", "Only for divs", "Only for forms"], correct: 1 }
            ]
        }
    },
    {
        id: 57, phase: 12, phaseTitle: "Best Practices", title: "Preparing HTML for CSS",
        content: {
            explanation: [
                { en: "Good HTML structure makes CSS styling much easier. Think about styling while writing HTML.", ar: "هيكل HTML الجيد يجعل تنسيق CSS أسهل بكثير. فكر في التنسيق أثناء كتابة HTML." },
                { en: "Use containers and wrappers. <div class='container'> around sections helps with layout.", ar: "استخدم الحاويات واللفافات. <div class='container'> حول الأقسام يساعد في التخطيط." },
                { en: "Add classes for every element you might style, even if you don't style it now.", ar: "أضف فئات لكل عنصر قد تنسقه، حتى لو لم تنسقه الآن." },
                { en: "Use semantic elements as styling hooks: header, footer, article, section, aside.", ar: "استخدم العناصر الدلالية كنقاط تنسيق: header، footer، article، section، aside." },
                { en: "Plan for states: add structure for hover, active, disabled, error, success states.", ar: "خطط للحالات: أضف هيكل لحالات hover، active، disabled، error، success." },
                { en: "Consider responsive design: add wrapper divs for flex/grid layouts before they're needed.", ar: "فكر في التصميم المتجاوب: أضف divs لفافة لتخطيطات flex/grid قبل الحاجة إليها." },
                { en: "Use consistent structure across similar components. All cards should have same HTML structure.", ar: "استخدم هيكل متسق عبر المكونات المتشابهة. كل البطاقات يجب أن يكون لها نفس هيكل HTML." },
                { en: "Avoid deeply nested elements. Flat structures are easier to style with CSS.", ar: "تجنب العناصر المتداخلة بعمق. الهياكل المسطحة أسهل للتنسيق مع CSS." },
                { en: "Pro Tip: Sketch your layout first, then create the HTML structure to match it.", ar: "نصيحة: ارسم تخطيطك أولاً، ثم أنشئ هيكل HTML ليطابقه." }
            ],
            why: "HTML prepared for CSS reduces styling time. Think structure before appearance!",
            whyAr: "HTML المُعد لـ CSS يقلل وقت التنسيق. فكر في الهيكل قبل المظهر!",
            examples: [
                { level: "Beginner", code: "<!-- Not CSS-ready -->\n<div>\n  <p>Title</p>\n  <p>Content</p>\n</div>\n\n<!-- CSS-ready with classes -->\n<div class=\"card\">\n  <h3 class=\"card-title\">Title</h3>\n  <p class=\"card-content\">Content</p>\n</div>", desc: "Adding classes for styling" },
                { level: "Intermediate", code: "<!-- Flex/Grid ready structure -->\n<div class=\"page-layout\">\n  <header class=\"page-header\">...</header>\n  \n  <div class=\"page-content\">\n    <main class=\"main-content\">...</main>\n    <aside class=\"sidebar\">...</aside>\n  </div>\n  \n  <footer class=\"page-footer\">...</footer>\n</div>\n\n/* CSS can easily target these */\n.page-content {\n  display: flex;\n}\n.main-content {\n  flex: 1;\n}", desc: "Layout-ready structure" },
                { level: "Advanced", code: "<!-- Component with state classes -->\n<form class=\"login-form\">\n  <div class=\"form-group\">\n    <label class=\"form-label\">Email</label>\n    <input \n      class=\"form-input\" \n      type=\"email\"\n    >\n    <span class=\"form-error\">Invalid email</span>\n  </div>\n  \n  <button class=\"btn btn--primary btn--large\">\n    Login\n  </button>\n</form>\n\n/* States handled via class modifiers */\n.form-group.has-error .form-error { display: block; }\n.btn--primary { background: blue; }\n.btn--large { padding: 1rem 2rem; }", desc: "Component with state support" }
            ],
            mistakes: [
                { bad: "<div><div><div><p>Deep nesting</p></div></div></div>", good: "<article class=\"content\">\n  <p>Flat structure</p>\n</article>", why: "Avoid deep nesting. Flat structures are easier to style." },
                { bad: "<p>Title</p>\n<p>Content</p>", good: "<h3 class=\"title\">Title</h3>\n<p class=\"content\">Content</p>", why: "Use appropriate tags and add classes for styling flexibility." }
            ],
            mcqs: [
                { q: "Should you think of CSS when writing HTML?", options: ["No, separate", "Yes, plan structure", "Only for colors", "Never"], correct: 1 },
                { q: "Why add classes before styling?", options: ["Required", "Future-proofs code", "Faster loading", "Better SEO"], correct: 1 },
                { q: "What helps with flex/grid layouts?", options: ["More paragraphs", "Wrapper divs", "Inline styles", "More IDs"], correct: 1 },
                { q: "Is deep nesting good for CSS?", options: ["Yes", "No, keep flat", "Only for divs", "Only for forms"], correct: 1 },
                { q: "What should you do before writing HTML?", options: ["Write CSS", "Sketch layout", "Add JavaScript", "Nothing"], correct: 1 }
            ]
        }
    }
];

window.lessonsData = window.lessonsData.concat(lessonsPart4);
