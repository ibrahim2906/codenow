// Lesson Data - Part 1: Introduction & Basic Structure
const lessons = [
  // Phase 1: Introduction
  {
    id: 1, phase: 1, phaseTitle: "Introduction",
    title: "What is HTML",
    content: {
      explanation: [
        { en: "HTML stands for HyperText Markup Language. It is the standard language used to create and structure content on web pages.", ar: "HTML تعني لغة ترميز النص التشعبي. وهي اللغة المعيارية المستخدمة لإنشاء وهيكلة المحتوى على صفحات الويب." },
        { en: "HTML is not a programming language - it's a markup language that uses tags to define elements on a page.", ar: "HTML ليست لغة برمجة - بل هي لغة ترميز تستخدم الوسوم لتعريف العناصر على الصفحة." }
      ],
      why: "HTML is the foundation of every website. Without HTML, there would be no web pages. Every web developer must master HTML before moving to CSS and JavaScript.",
      whyAr: "HTML هي أساس كل موقع ويب. بدون HTML، لن تكون هناك صفحات ويب. يجب على كل مطور ويب إتقان HTML قبل الانتقال إلى CSS و JavaScript.",
      examples: [
        { level: "Beginner", code: "<h1>Hello World</h1>", desc: "A simple heading element" },
        { level: "Intermediate", code: "<article>\n  <h1>Article Title</h1>\n  <p>Article content goes here.</p>\n</article>", desc: "Semantic article structure" },
        { level: "Advanced", code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>My Page</title>\n</head>\n<body>\n  <header>\n    <nav>Navigation</nav>\n  </header>\n  <main>\n    <h1>Welcome</h1>\n  </main>\n</body>\n</html>", desc: "Complete page structure" }
      ],
      mistakes: [
        { bad: "Using HTML for styling (like <font> or inline styles)", good: "Keep HTML for structure, use CSS for styling", why: "Separation of concerns makes code maintainable" }
      ],
      mcqs: [
        { q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"], correct: 0 },
        { q: "Is HTML a programming language?", options: ["Yes", "No, it's a markup language", "Only in browsers", "Sometimes"], correct: 1 },
        { q: "What is the main purpose of HTML?", options: ["To style web pages", "To structure content", "To add interactivity", "To store data"], correct: 1 }
      ]
    }
  },
  {
    id: 2, phase: 1, phaseTitle: "Introduction",
    title: "Why HTML is Important",
    content: {
      explanation: [
        { en: "HTML is the backbone of the web. Every website you visit is built with HTML at its core.", ar: "HTML هي العمود الفقري للويب. كل موقع تزوره مبني على HTML في جوهره." },
        { en: "Learning HTML opens doors to web development, content creation, and understanding how the internet works.", ar: "تعلم HTML يفتح أبواباً لتطوير الويب وإنشاء المحتوى وفهم كيفية عمل الإنترنت." }
      ],
      why: "Employers expect web developers to have solid HTML skills. It's required for roles in front-end, full-stack, and even some back-end positions.",
      whyAr: "يتوقع أصحاب العمل أن يمتلك مطورو الويب مهارات HTML قوية. وهي مطلوبة لوظائف الواجهة الأمامية والمكدس الكامل وحتى بعض وظائف الواجهة الخلفية.",
      examples: [
        { level: "Beginner", code: "<p>This is a paragraph.</p>", desc: "Basic text content" }
      ],
      mistakes: [
        { bad: "Skipping HTML to learn frameworks directly", good: "Master HTML fundamentals first", why: "Frameworks generate HTML - you need to understand what they produce" }
      ],
      mcqs: [
        { q: "Why should you learn HTML first?", options: ["It's the easiest", "It's the foundation of web development", "It's required by law", "It runs faster"], correct: 1 }
      ]
    }
  },
  {
    id: 3, phase: 1, phaseTitle: "Introduction",
    title: "How the Web Works",
    content: {
      explanation: [
        { en: "When you type a URL, your browser sends a request to a server. The server responds with HTML, CSS, and JavaScript files.", ar: "عندما تكتب عنوان URL، يرسل متصفحك طلباً إلى الخادم. يستجيب الخادم بملفات HTML و CSS و JavaScript." },
        { en: "The browser then parses the HTML to build the page structure, applies CSS for styling, and runs JavaScript for interactivity.", ar: "ثم يقوم المتصفح بتحليل HTML لبناء هيكل الصفحة، وتطبيق CSS للتنسيق، وتشغيل JavaScript للتفاعلية." }
      ],
      why: "Understanding client-server communication helps you debug issues and optimize website performance.",
      whyAr: "فهم الاتصال بين العميل والخادم يساعدك على تصحيح المشاكل وتحسين أداء الموقع.",
      examples: [
        { level: "Beginner", code: "Browser → Request → Server\nServer → Response → Browser", desc: "Basic request-response cycle" }
      ],
      mcqs: [
        { q: "What does the server send back to the browser?", options: ["Only images", "HTML, CSS, and JavaScript files", "Binary code only", "Nothing"], correct: 1 }
      ]
    }
  },
  {
    id: 4, phase: 1, phaseTitle: "Introduction",
    title: "How Browsers Work",
    content: {
      explanation: [
        { en: "Browsers read HTML code and convert it into a visual representation called the DOM (Document Object Model).", ar: "تقرأ المتصفحات كود HTML وتحوله إلى تمثيل مرئي يسمى DOM (نموذج كائن المستند)." },
        { en: "Different browsers (Chrome, Firefox, Safari, Edge) may render pages slightly differently.", ar: "قد تعرض المتصفحات المختلفة (Chrome و Firefox و Safari و Edge) الصفحات بشكل مختلف قليلاً." }
      ],
      why: "Knowing how browsers parse HTML helps you write compatible code that works everywhere.",
      whyAr: "معرفة كيفية تحليل المتصفحات لـ HTML يساعدك على كتابة كود متوافق يعمل في كل مكان.",
      examples: [
        { level: "Beginner", code: "HTML Source → DOM Tree → Rendered Page", desc: "Browser rendering pipeline" }
      ],
      mcqs: [
        { q: "What is the DOM?", options: ["A database", "Document Object Model - visual representation", "A browser type", "A server"], correct: 1 }
      ]
    }
  },
  {
    id: 5, phase: 1, phaseTitle: "Introduction",
    title: "HTML History",
    content: {
      explanation: [
        { en: "HTML was created by Tim Berners-Lee in 1991. It has evolved from HTML 1.0 to the current HTML5 standard.", ar: "تم إنشاء HTML بواسطة تيم بيرنرز لي في عام 1991. وقد تطورت من HTML 1.0 إلى معيار HTML5 الحالي." },
        { en: "HTML5 introduced semantic elements, multimedia support, and powerful APIs for modern web applications.", ar: "قدمت HTML5 عناصر دلالية ودعم الوسائط المتعددة وواجهات برمجة تطبيقات قوية لتطبيقات الويب الحديثة." }
      ],
      why: "HTML5 is the industry standard. Knowing its features helps you build modern, accessible websites.",
      whyAr: "HTML5 هو المعيار الصناعي. معرفة ميزاتها يساعدك على بناء مواقع ويب حديثة وسهلة الوصول.",
      mcqs: [
        { q: "Who created HTML?", options: ["Steve Jobs", "Bill Gates", "Tim Berners-Lee", "Mark Zuckerberg"], correct: 2 }
      ]
    }
  },
  {
    id: 6, phase: 1, phaseTitle: "Introduction",
    title: "Your First HTML Page",
    content: {
      explanation: [
        { en: "Create a file with .html extension and open it in a browser. The browser will render your HTML code.", ar: "أنشئ ملفاً بامتداد .html وافتحه في المتصفح. سيقوم المتصفح بعرض كود HTML الخاص بك." }
      ],
      why: "Getting hands-on experience immediately reinforces learning and builds confidence.",
      whyAr: "الحصول على تجربة عملية فورية يعزز التعلم ويبني الثقة.",
      examples: [
        { level: "Beginner", code: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Hello, World!</h1>\n  <p>This is my first web page.</p>\n</body>\n</html>", desc: "Complete first HTML page" }
      ],
      mcqs: [
        { q: "What file extension is used for HTML files?", options: [".txt", ".doc", ".html", ".htm or .html"], correct: 3 }
      ]
    }
  },
  {
    id: 7, phase: 1, phaseTitle: "Introduction",
    title: "HTML Syntax Basics",
    content: {
      explanation: [
        { en: "HTML uses tags enclosed in angle brackets. Most tags come in pairs: opening <tag> and closing </tag>.", ar: "يستخدم HTML وسوماً محاطة بأقواس زاوية. معظم الوسوم تأتي في أزواج: وسم الفتح <tag> ووسم الإغلاق </tag>." },
        { en: "Tags can have attributes that provide additional information: <tag attribute=\"value\">", ar: "يمكن أن تحتوي الوسوم على سمات توفر معلومات إضافية: <tag attribute=\"value\">" }
      ],
      examples: [
        { level: "Beginner", code: "<tagname>Content</tagname>", desc: "Basic tag structure" },
        { level: "Intermediate", code: "<a href=\"https://example.com\">Link Text</a>", desc: "Tag with attribute" }
      ],
      mistakes: [
        { bad: "<p>Text<p>", good: "<p>Text</p>", why: "Always close your tags properly" }
      ],
      mcqs: [
        { q: "What is the closing tag for <div>?", options: ["<div/>", "</div>", "<//div>", "[/div]"], correct: 1 }
      ]
    }
  },
  // Phase 2: Basic Structure
  {
    id: 8, phase: 2, phaseTitle: "Basic Structure",
    title: "DOCTYPE Declaration",
    content: {
      explanation: [
        { en: "<!DOCTYPE html> tells the browser that this is an HTML5 document. It must be the very first line of your HTML file, before any other content including comments or whitespace.", ar: "<!DOCTYPE html> يخبر المتصفح أن هذا مستند HTML5. يجب أن يكون السطر الأول في ملف HTML الخاص بك، قبل أي محتوى آخر بما في ذلك التعليقات أو المسافات البيضاء." },
        { en: "DOCTYPE is not an HTML tag - it's a declaration (instruction) that tells the browser which version of HTML the page is written in. Think of it as telling the browser 'hey, I'm speaking HTML5!'", ar: "DOCTYPE ليس وسم HTML - بل هو إعلان (تعليمات) يخبر المتصفح أي نسخة من HTML كُتبت بها الصفحة. فكر فيه كأنك تقول للمتصفح 'مرحباً، أنا أتحدث HTML5!'" },
        { en: "In HTML5, the DOCTYPE is beautifully simple: just <!DOCTYPE html>. No URLs, no version numbers, no complex strings. This simplicity was a deliberate design choice.", ar: "في HTML5، DOCTYPE بسيط وجميل: فقط <!DOCTYPE html>. لا عناوين URL، لا أرقام إصدارات، لا نصوص معقدة. هذه البساطة كانت خياراً تصميمياً مقصوداً." },
        { en: "In older HTML versions (HTML 4.01, XHTML 1.0), the DOCTYPE was extremely long and needed to reference a DTD (Document Type Definition) URL. Developers often copy-pasted it because memorizing it was nearly impossible.", ar: "في إصدارات HTML القديمة (HTML 4.01, XHTML 1.0)، كان DOCTYPE طويلاً جداً وكان يحتاج للإشارة إلى عنوان DTD (تعريف نوع المستند). كان المطورون غالباً ينسخونه لأن حفظه كان شبه مستحيل." },
        { en: "The DOCTYPE declaration is case-insensitive. This means <!DOCTYPE html>, <!doctype html>, <!DocType HTML>, and even <!dOcTyPe HtMl> all work exactly the same.", ar: "إعلان DOCTYPE غير حساس لحالة الأحرف. هذا يعني أن <!DOCTYPE html> و <!doctype html> و <!DocType HTML> وحتى <!dOcTyPe HtMl> كلها تعمل بنفس الطريقة تماماً." },
        { en: "If you forget DOCTYPE, browsers enter 'Quirks Mode' - a backward compatibility mode that mimics old browser behavior. This causes CSS to render differently, box model calculations to change, and many modern features to break.", ar: "إذا نسيت DOCTYPE، تدخل المتصفحات 'وضع الغرائب' - وضع توافق خلفي يحاكي سلوك المتصفحات القديمة. هذا يسبب عرض CSS بشكل مختلف، وتغيير حسابات Box Model، وتعطل العديد من الميزات الحديثة." },
        { en: "With DOCTYPE, browsers use 'Standards Mode' - rendering pages according to modern web standards. This ensures consistent behavior across all browsers (Chrome, Firefox, Safari, Edge).", ar: "مع DOCTYPE، تستخدم المتصفحات 'وضع المعايير' - عرض الصفحات وفقاً لمعايير الويب الحديثة. هذا يضمن سلوكاً متسقاً عبر جميع المتصفحات (Chrome, Firefox, Safari, Edge)." },
        { en: "You can check which mode a page is in using Developer Tools (F12) → Console → type: document.compatMode. It returns 'BackCompat' for Quirks Mode or 'CSS1Compat' for Standards Mode.", ar: "يمكنك التحقق من الوضع الذي تعمل به الصفحة باستخدام أدوات المطور (F12) ← Console ← اكتب: document.compatMode. يعيد 'BackCompat' لوضع الغرائب أو 'CSS1Compat' لوضع المعايير." },
        { en: "Pro Tip: Always use a code editor snippet or template that includes DOCTYPE automatically. This prevents you from ever forgetting it.", ar: "نصيحة احترافية: استخدم دائماً قالب أو مقتطف في محرر الكود يتضمن DOCTYPE تلقائياً. هذا يمنعك من نسيانه أبداً." }
      ],
      why: "DOCTYPE is the foundation of every web page. Without it, your carefully crafted CSS may look completely different across browsers. Quirks Mode can cause: 1) Box model changes (width calculations differ), 2) Table and form styling issues, 3) Font rendering differences, 4) Broken flexbox/grid layouts. Always include DOCTYPE as the absolute first thing in your HTML file.",
      whyAr: "DOCTYPE هو أساس كل صفحة ويب. بدونه، قد يبدو CSS الذي صممته بعناية مختلفاً تماماً عبر المتصفحات. وضع الغرائب يمكن أن يسبب: 1) تغييرات في Box Model (حسابات العرض تختلف)، 2) مشاكل تنسيق الجداول والنماذج، 3) اختلافات في عرض الخطوط، 4) تعطل تخطيطات flexbox/grid. دائماً أضف DOCTYPE كأول شيء مطلق في ملف HTML.",
      examples: [
        { level: "Beginner", code: "<!DOCTYPE html>\n<html>\n  <head>\n    <title>My Page</title>\n  </head>\n  <body>\n    <h1>Hello World</h1>\n  </body>\n</html>", desc: "Complete HTML5 document with DOCTYPE - the foundation of every web page" },
        { level: "Intermediate", code: "<!-- OLD HTML 4.01 DOCTYPE (Complex!) -->\n<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\"\n  \"http://www.w3.org/TR/html4/strict.dtd\">\n\n<!-- OLD XHTML 1.0 DOCTYPE (Even Worse!) -->\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\"\n  \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n\n<!-- HTML5 DOCTYPE (Simple!) -->\n<!DOCTYPE html>", desc: "Comparison showing how HTML5 simplified DOCTYPE dramatically" },
        { level: "Advanced", code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <!-- Must be first in head for proper encoding -->\n  <meta charset=\"UTF-8\">\n  \n  <!-- Responsive viewport for mobile -->\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  \n  <!-- Modern HTML5 template -->\n  <title>Modern HTML5 Page</title>\n</head>\n<body>\n  <!-- All visible content here -->\n</body>\n</html>", desc: "Modern HTML5 boilerplate with DOCTYPE - use this as your starting template" },
        { level: "Advanced", code: "// Check rendering mode in browser console:\nconsole.log(document.compatMode);\n// 'CSS1Compat' = Standards Mode (Good!)\n// 'BackCompat' = Quirks Mode (Bad!)\n\n// Check DOCTYPE exists:\nconsole.log(document.doctype);\n// Should show: <!DOCTYPE html>", desc: "How to check if your page is in Standards Mode using JavaScript" }
      ],
      mistakes: [
        { bad: "<html>\n  <head>...</head>\n  <body>...</body>\n</html>", good: "<!DOCTYPE html>\n<html>\n  <head>...</head>\n  <body>...</body>\n</html>", why: "Missing DOCTYPE causes Quirks Mode - your CSS will render inconsistently across browsers" },
        { bad: "<!DOCTYPE html>\n\n<html>", good: "<!DOCTYPE html>\n<html>", why: "Some older browsers may ignore DOCTYPE if there's whitespace or blank lines before <html>. Keep them together." },
        { bad: "<!-- My Website -->\n<!DOCTYPE html>\n<html>", good: "<!DOCTYPE html>\n<!-- My Website -->\n<html>", why: "Comments before DOCTYPE can trigger Quirks Mode in some browsers. DOCTYPE must be FIRST." }
      ],
      mcqs: [
        { q: "Where should DOCTYPE be placed?", options: ["End of file", "Inside body", "First line of the file", "Inside head"], correct: 2 },
        { q: "What happens if you forget DOCTYPE?", options: ["Page won't load", "Browser enters Quirks Mode", "Nothing happens", "Error message shows"], correct: 1 },
        { q: "Is <!doctype html> valid?", options: ["No, must be uppercase", "Yes, it's case-insensitive", "Only in some browsers", "Only with XHTML"], correct: 1 },
        { q: "What does document.compatMode return in Standards Mode?", options: ["'BackCompat'", "'Standards'", "'CSS1Compat'", "'HTML5'"], correct: 2 },
        { q: "Why is HTML5's DOCTYPE simpler than HTML4's?", options: ["To save bandwidth", "For easier memorization and less errors", "It's not simpler", "For faster loading"], correct: 1 }
      ]
    }
  },
  {
    id: 9, phase: 2, phaseTitle: "Basic Structure",
    title: "The html Tag and lang Attribute",
    content: {
      explanation: [
        { en: "The <html> tag is the root element of every HTML page. It's the container that wraps ALL other elements (except DOCTYPE). Everything else lives inside <html>.", ar: "وسم <html> هو العنصر الجذر لكل صفحة HTML. إنه الحاوي الذي يغلف كل العناصر الأخرى (باستثناء DOCTYPE). كل شيء آخر يعيش داخل <html>." },
        { en: "The lang attribute specifies the primary language of the page. This is one of the most important accessibility attributes - screen readers use it to pronounce text with the correct accent and pronunciation rules.", ar: "سمة lang تحدد اللغة الرئيسية للصفحة. هذه واحدة من أهم سمات إمكانية الوصول - قارئات الشاشة تستخدمها لنطق النص بالتشكيل والقواعد الصحيحة." },
        { en: "Common lang values: 'en' (English), 'ar' (Arabic), 'es' (Spanish), 'fr' (French), 'de' (German), 'zh' (Chinese), 'ja' (Japanese), 'ko' (Korean), 'hi' (Hindi), 'pt' (Portuguese).", ar: "قيم lang الشائعة: 'en' (الإنجليزية)، 'ar' (العربية)، 'es' (الإسبانية)، 'fr' (الفرنسية)، 'de' (الألمانية)، 'zh' (الصينية)، 'ja' (اليابانية)، 'ko' (الكورية)، 'hi' (الهندية)، 'pt' (البرتغالية)." },
        { en: "You can specify regional variants for more precision: 'en-US' (American English), 'en-GB' (British English), 'en-AU' (Australian English), 'es-MX' (Mexican Spanish), 'pt-BR' (Brazilian Portuguese).", ar: "يمكنك تحديد المتغيرات الإقليمية لمزيد من الدقة: 'en-US' (الإنجليزية الأمريكية)، 'en-GB' (الإنجليزية البريطانية)، 'en-AU' (الإنجليزية الأسترالية)، 'es-MX' (الإسبانية المكسيكية)، 'pt-BR' (البرتغالية البرازيلية)." },
        { en: "For RTL (Right-to-Left) languages like Arabic, Hebrew, Persian, and Urdu, you MUST add dir=\"rtl\" along with lang. This flips the entire page layout from right to left.", ar: "للغات من اليمين لليسار مثل العربية والعبرية والفارسية والأردية، يجب إضافة dir=\"rtl\" مع lang. هذا يقلب تخطيط الصفحة بالكامل من اليمين لليسار." },
        { en: "The lang attribute affects browser features: spell-checking uses the correct dictionary, translation prompts appear for foreign languages, and hyphenation follows language-specific rules.", ar: "سمة lang تؤثر على ميزات المتصفح: التدقيق الإملائي يستخدم القاموس الصحيح، تظهر مطالبات الترجمة للغات الأجنبية، والتقسيم يتبع قواعد خاصة باللغة." },
        { en: "Search engines use lang to understand and categorize content by language. This helps your site appear in the correct regional search results.", ar: "محركات البحث تستخدم lang لفهم وتصنيف المحتوى حسب اللغة. هذا يساعد موقعك على الظهور في نتائج البحث الإقليمية الصحيحة." },
        { en: "CSS can target specific languages with the :lang() selector. For example, :lang(ar) { font-family: 'Arabic Font'; } applies styles only to Arabic content.", ar: "CSS يمكنه استهداف لغات محددة باستخدام محدد :lang(). مثال: :lang(ar) { font-family: 'Arabic Font'; } يطبق الأنماط فقط على المحتوى العربي." },
        { en: "You can use lang on any element, not just <html>. This is useful for multilingual content - marking a quote in French within an English article.", ar: "يمكنك استخدام lang على أي عنصر، ليس فقط <html>. هذا مفيد للمحتوى متعدد اللغات - مثل وضع علامة على اقتباس بالفرنسية داخل مقال إنجليزي." },
        { en: "The lang attribute is required by WCAG (Web Content Accessibility Guidelines) at the AA level. Failing to include it means your site may not meet accessibility standards.", ar: "سمة lang مطلوبة بموجب WCAG (إرشادات الوصول لمحتوى الويب) على مستوى AA. عدم تضمينها يعني أن موقعك قد لا يلبي معايير إمكانية الوصول." }
      ],
      why: "The lang attribute is critical for: 1) Screen readers - pronounce 'read' differently in past vs present tense, 2) Browser translation - know when to offer translation, 3) SEO - appear in correct regional results, 4) CSS styling - apply language-specific fonts, 5) Legal compliance - WCAG accessibility requirements. Never skip it!",
      whyAr: "سمة lang حرجة لـ: 1) قارئات الشاشة - نطق الكلمات بشكل صحيح، 2) ترجمة المتصفح - معرفة متى تعرض الترجمة، 3) تحسين محركات البحث - الظهور في النتائج الإقليمية الصحيحة، 4) تنسيق CSS - تطبيق خطوط خاصة باللغة، 5) الامتثال القانوني - متطلبات إمكانية الوصول WCAG. لا تتخطاها أبداً!",
      examples: [
        { level: "Beginner", code: "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <title>English Page</title>\n  </head>\n  <body>\n    <h1>Welcome to My Website!</h1>\n  </body>\n</html>", desc: "English language page - the most common setup" },
        { level: "Intermediate", code: "<!DOCTYPE html>\n<html lang=\"ar\" dir=\"rtl\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>صفحة عربية</title>\n    <style>\n      body { font-family: 'Segoe UI', Tahoma, Arial, sans-serif; }\n    </style>\n  </head>\n  <body>\n    <h1>مرحباً بكم في موقعنا!</h1>\n    <p>هذه صفحة باللغة العربية مع دعم RTL.</p>\n  </body>\n</html>", desc: "Arabic RTL page with proper font and direction settings" },
        { level: "Advanced", code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Multilingual Article</title>\n  <style>\n    :lang(ar) { \n      font-family: 'Noto Sans Arabic', sans-serif;\n      font-size: 1.1em;\n    }\n    :lang(fr) { font-style: italic; }\n  </style>\n</head>\n<body>\n  <h1>Welcome to Our Global Blog</h1>\n  <article>\n    <p>Here's what our customers say:</p>\n    \n    <blockquote lang=\"ar\" dir=\"rtl\">\n      \"منتج رائع! أنصح به بشدة.\"\n    </blockquote>\n    \n    <blockquote lang=\"fr\">\n      \"C'est magnifique! Je l'adore.\"\n    </blockquote>\n    \n    <blockquote lang=\"es\">\n      \"¡Excelente producto! Lo recomiendo.\"\n    </blockquote>\n  </article>\n</body>\n</html>", desc: "Multilingual page with lang on specific elements and CSS :lang() selector" },
        { level: "Advanced", code: "<!DOCTYPE html>\n<html lang=\"en-US\">\n<!-- American English - uses 'color', 'center' -->\n\n<!DOCTYPE html>\n<html lang=\"en-GB\">\n<!-- British English - uses 'colour', 'centre' -->\n\n<!DOCTYPE html>\n<html lang=\"zh-CN\">\n<!-- Simplified Chinese (China) -->\n\n<!DOCTYPE html>\n<html lang=\"zh-TW\">\n<!-- Traditional Chinese (Taiwan) -->", desc: "Regional language variants for more precise localization" }
      ],
      mistakes: [
        { bad: "<html>\n  <!-- No lang attribute -->", good: "<html lang=\"en\">", why: "Missing lang attribute hurts accessibility (screen readers) and SEO (search engines)" },
        { bad: "<html lang=\"ar\">", good: "<html lang=\"ar\" dir=\"rtl\">", why: "Arabic requires dir=\"rtl\" for proper text direction, otherwise layout will be backwards" },
        { bad: "<html lang=\"english\">", good: "<html lang=\"en\">", why: "Use ISO 639-1 two-letter codes, not full language names" },
        { bad: "<html lang=\"EN\">", good: "<html lang=\"en\">", why: "Although it works, lang values should be lowercase by convention" }
      ],
      mcqs: [
        { q: "What does lang=\"en\" mean?", options: ["Encoding type", "English language", "Entry point", "Enable features"], correct: 1 },
        { q: "Which attribute is needed for Arabic pages?", options: ["lang only", "dir only", "Both lang and dir", "Neither"], correct: 2 },
        { q: "Why is the lang attribute important?", options: ["Just for styling", "For accessibility, SEO, and browser features", "Only for translation", "Not important"], correct: 1 },
        { q: "What does RTL stand for?", options: ["Real Time Loading", "Right To Left", "Read The Language", "Root Tag Level"], correct: 1 },
        { q: "Can you use lang on elements other than <html>?", options: ["No, only on html", "Yes, on any element", "Only on body", "Only on text elements"], correct: 1 },
        { q: "What CSS selector targets a specific language?", options: [".lang(ar)", "#lang-ar", ":lang(ar)", "[lang=ar]"], correct: 2 }
      ]
    }
  },
  {
    id: 10, phase: 2, phaseTitle: "Basic Structure",
    title: "Head and Body Sections",
    content: {
      explanation: [
        { en: "Every HTML document has two main sections inside <html>: the <head> and <body>. Think of head as the 'control room' (invisible to users) and body as the 'stage' (what users see).", ar: "كل مستند HTML له قسمان رئيسيان داخل <html>: <head> و <body>. فكر في head كـ 'غرفة التحكم' (غير مرئية للمستخدمين) و body كـ 'المسرح' (ما يراه المستخدمون)." },
        { en: "The <head> section contains metadata - information ABOUT the page that doesn't display on screen. This includes title, character encoding, stylesheets, scripts, and social media tags.", ar: "قسم <head> يحتوي على البيانات الوصفية - معلومات عن الصفحة لا تظهر على الشاشة. يشمل العنوان وترميز الأحرف وأوراق الأنماط والنصوص البرمجية ووسوم وسائل التواصل." },
        { en: "The <body> section contains all visible content - text, images, videos, buttons, forms, links - everything the user sees and interacts with.", ar: "قسم <body> يحتوي على كل المحتوى المرئي - النصوص والصور والفيديوهات والأزرار والنماذج والروابط - كل ما يراه المستخدم ويتفاعل معه." },
        { en: "The head MUST come before body. This is not optional - browsers parse the head first to load styles and understand the page before rendering content.", ar: "يجب أن يأتي head قبل body. هذا ليس اختيارياً - المتصفحات تحلل head أولاً لتحميل الأنماط وفهم الصفحة قبل عرض المحتوى." },
        { en: "Common <head> elements: <title> (browser tab), <meta charset> (encoding), <meta viewport> (mobile), <meta description> (SEO), <link> (CSS files), <style> (inline CSS), <script> (JS files).", ar: "عناصر <head> الشائعة: <title> (تبويب المتصفح)، <meta charset> (الترميز)، <meta viewport> (الموبايل)، <meta description> (SEO)، <link> (ملفات CSS)، <style> (CSS مضمن)، <script> (ملفات JS)." },
        { en: "The <title> tag is REQUIRED and must be inside head. It appears in browser tabs, bookmarks, and search results. Every page needs a unique, descriptive title.", ar: "وسم <title> مطلوب ويجب أن يكون داخل head. يظهر في تبويبات المتصفح والإشارات المرجعية ونتائج البحث. كل صفحة تحتاج عنواناً فريداً ووصفياً." },
        { en: "Meta viewport tag is essential for responsive design: <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">. Without it, mobile devices zoom out showing a tiny desktop version.", ar: "وسم meta viewport ضروري للتصميم المتجاوب: <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">. بدونه، الأجهزة المحمولة تصغر الصفحة وتعرض نسخة سطح المكتب صغيرة." },
        { en: "CSS stylesheets in head load before content renders, preventing 'flash of unstyled content' (FOUC). JavaScript in head can block rendering, so it's often placed at the end of body instead.", ar: "أوراق الأنماط CSS في head تُحمّل قبل عرض المحتوى، مما يمنع 'ومضة المحتوى غير المنسق' (FOUC). JavaScript في head يمكن أن يحظر العرض، لذا غالباً يوضع في نهاية body." },
        { en: "Social media meta tags (Open Graph, Twitter Cards) go in head. These control how your page looks when shared on Facebook, Twitter, LinkedIn, etc.", ar: "وسوم meta لوسائل التواصل (Open Graph, Twitter Cards) توضع في head. هذه تتحكم في كيفية ظهور صفحتك عند مشاركتها على فيسبوك وتويتر ولينكدإن، إلخ." },
        { en: "Pro Tip: Order in head matters! Put charset first, then viewport, then title, then description, then stylesheets, then scripts.", ar: "نصيحة احترافية: الترتيب في head مهم! ضع charset أولاً، ثم viewport، ثم title، ثم description، ثم stylesheets، ثم scripts." }
      ],
      why: "Understanding head vs body is fundamental. Bad practices cause: 1) FOUC (flash of unstyled content) if CSS is in wrong place, 2) SEO failures if meta tags are in body, 3) Performance issues if scripts block rendering, 4) Mobile display problems if viewport is missing, 5) Social sharing issues if OG tags are wrong.",
      whyAr: "فهم الفرق بين head و body أساسي. الممارسات السيئة تسبب: 1) FOUC (ومضة المحتوى غير المنسق) إذا كان CSS في المكان الخطأ، 2) فشل SEO إذا كانت وسوم meta في body، 3) مشاكل أداء إذا كانت scripts تحظر العرض، 4) مشاكل العرض على المحمول إذا كان viewport مفقوداً، 5) مشاكل المشاركة الاجتماعية إذا كانت وسوم OG خاطئة.",
      examples: [
        { level: "Beginner", code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <!-- The Control Room - invisible to users -->\n  <meta charset=\"UTF-8\">\n  <title>My Website</title>\n</head>\n<body>\n  <!-- The Stage - what users see -->\n  <h1>Welcome!</h1>\n  <p>This is my website.</p>\n</body>\n</html>", desc: "Basic head and body structure with clear separation" },
        { level: "Intermediate", code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <!-- 1. Character Encoding (always first!) -->\n  <meta charset=\"UTF-8\">\n  \n  <!-- 2. Viewport for Mobile -->\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  \n  <!-- 3. Page Title -->\n  <title>My Professional Website | Home</title>\n  \n  <!-- 4. SEO Description -->\n  <meta name=\"description\" content=\"Welcome to my professional website. I create amazing web experiences.\">\n  \n  <!-- 5. External CSS -->\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <header>\n    <nav>...</nav>\n  </header>\n  <main>\n    <h1>Welcome to My Website</h1>\n  </main>\n  <footer>...</footer>\n  \n  <!-- Scripts at end of body for performance -->\n  <script src=\"app.js\"></script>\n</body>\n</html>", desc: "Complete head with all common elements in correct order" },
        { level: "Advanced", code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  \n  <!-- Primary Meta Tags -->\n  <title>Product Name - Company | Main Benefit</title>\n  <meta name=\"title\" content=\"Product Name - Company | Main Benefit\">\n  <meta name=\"description\" content=\"Compelling description under 160 chars for search results.\">\n  \n  <!-- Open Graph / Facebook -->\n  <meta property=\"og:type\" content=\"website\">\n  <meta property=\"og:url\" content=\"https://example.com/\">\n  <meta property=\"og:title\" content=\"Product Name - Company\">\n  <meta property=\"og:description\" content=\"Description for Facebook sharing.\">\n  <meta property=\"og:image\" content=\"https://example.com/social-image.jpg\">\n  \n  <!-- Twitter -->\n  <meta property=\"twitter:card\" content=\"summary_large_image\">\n  <meta property=\"twitter:url\" content=\"https://example.com/\">\n  <meta property=\"twitter:title\" content=\"Product Name - Company\">\n  <meta property=\"twitter:description\" content=\"Description for Twitter sharing.\">\n  <meta property=\"twitter:image\" content=\"https://example.com/social-image.jpg\">\n  \n  <!-- Favicon -->\n  <link rel=\"icon\" href=\"/favicon.ico\">\n  <link rel=\"apple-touch-icon\" href=\"/apple-touch-icon.png\">\n  \n  <!-- Stylesheets -->\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <!-- All visible content -->\n</body>\n</html>", desc: "Professional head with SEO, Open Graph, Twitter Cards, and Favicons" },
        { level: "Advanced", code: "<!-- head element order best practice: -->\n<head>\n  <!-- 1. Charset (must be in first 1024 bytes) -->\n  <meta charset=\"UTF-8\">\n  \n  <!-- 2. Viewport -->\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  \n  <!-- 3. Title -->\n  <title>Page Title</title>\n  \n  <!-- 4. Meta description -->\n  <meta name=\"description\" content=\"...\">\n  \n  <!-- 5. Other meta tags -->\n  <meta name=\"author\" content=\"...\">\n  <meta property=\"og:...\" content=\"...\">\n  \n  <!-- 6. Favicon -->\n  <link rel=\"icon\" href=\"...\">\n  \n  <!-- 7. Stylesheets -->\n  <link rel=\"stylesheet\" href=\"...\">\n  <style>/* Critical CSS */</style>\n  \n  <!-- 8. Preconnect/Preload (optional) -->\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n  \n  <!-- 9. Scripts (if needed in head) -->\n  <script defer src=\"...\"></script>\n</head>", desc: "Optimal ordering of head elements for performance and compatibility" }
      ],
      mistakes: [
        { bad: "<html>\n<body>\n  <title>Page Title</title>\n  <h1>Content</h1>\n</body>\n</html>", good: "<html>\n<head>\n  <title>Page Title</title>\n</head>\n<body>\n  <h1>Content</h1>\n</body>\n</html>", why: "Title MUST be in head. Putting it in body is invalid HTML and causes SEO issues." },
        { bad: "<head>\n  <h1>Welcome</h1>\n  <style>...</style>\n</head>", good: "<head>\n  <style>...</style>\n</head>\n<body>\n  <h1>Welcome</h1>\n</body>", why: "Visible elements like <h1> belong in body, not head. Head is for metadata only." },
        { bad: "<head>\n  <title>Page</title>\n  <meta charset=\"UTF-8\">\n</head>", good: "<head>\n  <meta charset=\"UTF-8\">\n  <title>Page</title>\n</head>", why: "Charset must be first in head (within first 1024 bytes) to properly decode the rest of the document." },
        { bad: "<body>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n  <h1>Hello</h1>\n</body>", good: "<head>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <h1>Hello</h1>\n</body>", why: "Stylesheets in body cause Flash of Unstyled Content (FOUC). Always put CSS links in head." }
      ],
      mcqs: [
        { q: "Where does visible content go?", options: ["head", "body", "title", "meta"], correct: 1 },
        { q: "Which element MUST be in the head?", options: ["<h1>", "<p>", "<title>", "<div>"], correct: 2 },
        { q: "What does the head section contain?", options: ["Visible text", "Images", "Metadata about the page", "User forms"], correct: 2 },
        { q: "Which comes first in the document?", options: ["body", "head", "Any order works", "Neither"], correct: 1 },
        { q: "Where should CSS stylesheets be placed?", options: ["body", "head", "After body", "Before DOCTYPE"], correct: 1 },
        { q: "What happens if viewport meta is missing?", options: ["Nothing", "Page won't load", "Mobile shows tiny desktop version", "CSS breaks"], correct: 2 },
        { q: "Which meta tag should be first in head?", options: ["description", "viewport", "charset", "title"], correct: 2 }
      ]
    }
  }
];

// Export for use in main app
window.lessonsData = lessons;
