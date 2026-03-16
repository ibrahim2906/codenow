// lessons-data.js - Part 1: Lessons 1-8
const lessonsData = [
  {
    id: 1,
    title: "Introduction to CSS",
    titleAr: "مقدمة في CSS",
    explanation: "CSS (Cascading Style Sheets) is the language used to describe the presentation of HTML documents. It controls how elements appear on screen — including layout, colors, fonts, spacing, animations, and responsiveness.\n\nThere are 3 ways to add CSS:\n1. Inline CSS: Using the style=\"\" attribute directly on an element. Quick but hard to maintain.\n2. Internal CSS: Using a <style> tag inside the <head>. Good for single-page styles.\n3. External CSS: Linking a .css file with <link>. The best practice for real projects — it separates content from presentation.\n\nCSS follows a 'cascading' order, meaning styles can be inherited from parent elements, overridden by more specific selectors, or overwritten by styles declared later. The cascade is determined by: (1) Source order, (2) Specificity, and (3) Importance (!important).\n\nWithout CSS, every website would look like a plain text document with default browser styling. CSS transforms raw HTML into beautiful, professional interfaces.",
    explanationAr: "CSS (أوراق الأنماط المتتالية) هي اللغة المستخدمة لوصف مظهر مستندات HTML. تتحكم في كيفية ظهور العناصر على الشاشة — بما في ذلك التخطيط والألوان والخطوط والمسافات والرسوم المتحركة والاستجابة.\n\nهناك 3 طرق لإضافة CSS:\n1. CSS مضمن: باستخدام سمة style مباشرة على العنصر.\n2. CSS داخلي: باستخدام وسم <style> داخل <head>.\n3. CSS خارجي: ربط ملف .css باستخدام <link>. أفضل ممارسة للمشاريع الحقيقية.\n\nCSS يتبع ترتيب 'التتالي'، مما يعني أن الأنماط يمكن أن تُورث من العناصر الأب، أو تُستبدل بمحددات أكثر تحديداً. بدون CSS، ستبدو كل المواقع كمستندات نص عادي.",
    examples: [
      {
        title: "Adding CSS to HTML",
        html: '<h1 class="demo-title">Hello World</h1>\n<p class="demo-text">This is styled with CSS</p>',
        css: '.demo-title {\n  color: #6366f1;\n  font-size: 28px;\n  font-family: Arial, sans-serif;\n}\n.demo-text {\n  color: #555;\n  font-size: 16px;\n  line-height: 1.6;\n}'
      }
    ],
    whyMatters: "CSS is the backbone of all web design. Without it, every website would look like plain text documents. It is essential for creating professional, usable interfaces.",
    whyMattersAr: "CSS هي العمود الفقري لكل تصميم ويب. بدونها، ستبدو كل المواقع كمستندات نص عادي.",
    commonMistakes: [
      { wrong: "Using inline styles everywhere:\n<h1 style=\"color:red;font-size:20px;\">", correct: "Use external CSS file:\n.title { color: red; font-size: 20px; }" },
      { wrong: "No CSS reset — browser defaults differ", correct: "Use a CSS reset or normalize.css at the top" }
    ],
    goodVsBad: { bad: "h1 { color: red; }\nh1 { color: blue; } /* duplicate selectors */", good: "h1 {\n  color: blue;\n  /* all h1 styles in one place */\n}" },
    exercises: [
      "Create an external CSS file and link it to an HTML document.",
      "Change the background color of the body to lightblue.",
      "Style a paragraph with font-size, color, and line-height.",
      "Use three different methods to add CSS (inline, internal, external).",
      "Create a class and apply it to multiple elements."
    ],
    challenges: [
      "Create a simple card component with a title, description, and styled border using only CSS.",
      "Style a navigation bar with horizontal links using CSS."
    ],
    mcqs: [
      { q: "What does CSS stand for?", options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"], answer: 1 },
      { q: "Which HTML tag links an external CSS file?", options: ["<style>", "<css>", "<link>", "<script>"], answer: 2 },
      { q: "Which is the correct CSS syntax?", options: ["body:color=black;", "{body;color:black;}", "body {color: black;}", "{body:color=black}"], answer: 2 },
      { q: "Where should external CSS be linked?", options: ["<body>", "<head>", "<footer>", "<main>"], answer: 1 },
      { q: "Which has highest priority?", options: ["External CSS", "Internal CSS", "Inline CSS", "Browser default"], answer: 2 },
      { q: "What is the file extension for CSS?", options: [".cs", ".css", ".style", ".stylesheet"], answer: 1 },
      { q: "Which property changes text color?", options: ["font-color", "text-color", "color", "foreground"], answer: 2 },
      { q: "What does 'cascading' mean in CSS?", options: ["Styles flow from parent to child", "Styles are applied randomly", "Styles cascade top to bottom with specificity rules", "Styles only apply to one element"], answer: 2 },
      { q: "Can CSS style multiple elements at once?", options: ["No", "Yes, using classes", "Only with JavaScript", "Only inline"], answer: 1 },
      { q: "Which is NOT a way to add CSS?", options: ["Inline", "Internal", "External", "Parallel"], answer: 3 }
    ]
  },
  {
    id: 2,
    title: "CSS Selectors",
    titleAr: "محددات CSS",
    explanation: "CSS Selectors are patterns used to target HTML elements for styling. They are the foundation of all CSS — without selectors, you cannot apply any style.\n\nMain selector types:\n• Element selector (h1, p, div) — targets all elements of that type\n• Class selector (.className) — targets elements with that class. Reusable on many elements.\n• ID selector (#idName) — targets a single unique element. Use sparingly for styling.\n• Universal selector (*) — targets every element on the page\n• Attribute selector (a[href], input[type='text']) — targets elements with specific attributes\n• Descendant selector (div p) — targets p inside any div\n• Child selector (div > p) — targets only direct children\n• Adjacent sibling (div + p) — targets p immediately after div\n• General sibling (div ~ p) — targets all p siblings after div\n\nPseudo-classes target element states: :hover, :focus, :active, :first-child, :nth-child(n), :not(), :visited.\n\nPseudo-elements style parts of elements: ::before (inserts before content), ::after (inserts after), ::first-line, ::first-letter, ::placeholder.\n\nSpecificity determines which rule wins when multiple selectors target the same element. From lowest to highest: element < class < ID < inline style < !important.",
    explanationAr: "محددات CSS هي أنماط تُستخدم لاستهداف عناصر HTML لتطبيق الأنماط. هي أساس كل CSS.\n\nأنواع المحددات الرئيسية:\n• محدد العنصر (h1, p, div) — يستهدف كل عناصر هذا النوع\n• محدد الفئة (.className) — يستهدف العناصر بتلك الفئة. قابل لإعادة الاستخدام.\n• محدد المعرف (#idName) — يستهدف عنصر فريد واحد\n• المحدد العام (*) — يستهدف كل عنصر\n• محددات السمات — تستهدف عناصر بسمات محددة\n\nالفئات الزائفة تستهدف حالات العنصر: :hover, :focus, :active, :first-child, :nth-child\n\nالعناصر الزائفة تنسق أجزاء من العناصر: ::before, ::after, ::first-line\n\nالخصوصية تحدد أي قاعدة تفوز عند تعارض المحددات: عنصر < فئة < معرف < نمط مضمن < !important.",
    examples: [
      {
        title: "Different Selector Types",
        html: '<h2 id="main-title">ID Selector</h2>\n<p class="highlight">Class Selector</p>\n<p>Element Selector</p>\n<a href="#">Link with :hover</a>',
        css: '#main-title { color: #e06c75; border-bottom: 2px solid #e06c75; }\n.highlight { background: #fffbcc; padding: 8px; border-radius: 4px; }\np { font-size: 16px; margin: 8px 0; }\na:hover { color: #6366f1; text-decoration: underline; }'
      }
    ],
    whyMatters: "Selectors are the foundation of CSS — you must know how to accurately target elements to style them efficiently without conflicts.",
    whyMattersAr: "المحددات هي أساس CSS — يجب أن تعرف كيف تستهدف العناصر بدقة لتنسيقها بكفاءة.",
    commonMistakes: [
      { wrong: "Using IDs for styling everywhere:\n#btn1 { } #btn2 { } #btn3 { }", correct: "Use classes for reusable styles:\n.btn { } /* apply to all buttons */" },
      { wrong: "Over-qualifying selectors:\ndiv.container ul li a { }", correct: "Keep selectors simple:\n.nav-link { }" }
    ],
    goodVsBad: { bad: "div > div > div > p > span { color: red; }", good: ".text-highlight { color: red; }" },
    exercises: [
      "Select all paragraphs and change their color.",
      "Select an element by its ID and add a border.",
      "Use a class selector to style multiple elements identically.",
      "Use an attribute selector to style all links with target='_blank'.",
      "Combine selectors: style only paragraphs inside a specific div."
    ],
    challenges: [
      "Create a styled table where alternate rows have different backgrounds using :nth-child.",
      "Build a form where input focus states change border color using :focus pseudo-class."
    ],
    mcqs: [
      { q: "Which selector targets elements by class?", options: ["#name", ".name", "name", "*name"], answer: 1 },
      { q: "Which selector has the highest specificity?", options: ["Element", "Class", "ID", "Universal"], answer: 2 },
      { q: "What does * select?", options: ["First element", "Last element", "All elements", "No elements"], answer: 2 },
      { q: "Which pseudo-class applies on mouse hover?", options: [":active", ":focus", ":hover", ":visited"], answer: 2 },
      { q: "What does p.intro select?", options: ["All p and .intro", "p inside .intro", "p elements with class intro", "All intros"], answer: 2 },
      { q: "Which selects direct children only?", options: ["div p", "div > p", "div + p", "div ~ p"], answer: 1 },
      { q: "What does ::before do?", options: ["Selects before the page loads", "Inserts content before element content", "Selects the previous sibling", "None"], answer: 1 },
      { q: ":nth-child(odd) selects?", options: ["Even children", "Odd children", "First child", "Last child"], answer: 1 },
      { q: "Which is a valid attribute selector?", options: ["a[href]", "a{href}", "a(href)", "a<href>"], answer: 0 },
      { q: "div + p selects?", options: ["All p in div", "First p after div", "p immediately after div", "All siblings"], answer: 2 }
    ]
  },
  {
    id: 3,
    title: "CSS Colors",
    titleAr: "الألوان في CSS",
    explanation: "CSS provides multiple color formats, each with different advantages:\n\n• Named Colors: 147 predefined names like red, blue, coral, steelblue. Easy to read but limited precision.\n\n• HEX (#RRGGBB): Six hexadecimal digits (0-F) representing Red, Green, Blue. #ff0000 = pure red. Shorthand: #f00. Most common format in web development.\n\n• RGB (rgb(R, G, B)): Each channel ranges from 0-255. rgb(255, 0, 0) = red. More intuitive for programmatic color manipulation.\n\n• RGBA (rgba(R, G, B, A)): Same as RGB but with Alpha transparency channel (0 = invisible, 1 = fully opaque). rgba(0, 0, 0, 0.5) creates a semi-transparent black overlay.\n\n• HSL (hsl(Hue, Saturation%, Lightness%)): Hue is the color angle (0-360° on the color wheel: 0=red, 120=green, 240=blue). Saturation is color intensity. Lightness controls brightness. Much more intuitive for creating color palettes!\n\n• HSLA: HSL with Alpha transparency.\n\nPro tips:\n- Use CSS variables to store your color palette: --primary: hsl(250, 80%, 65%);\n- Use HSL for easy theme creation — change just the hue to get a whole new palette\n- Always check contrast ratios for accessibility (WCAG requires 4.5:1 for normal text)\n- The opacity property affects the entire element, while RGBA/HSLA alpha only affects the color",
    explanationAr: "توفر CSS تنسيقات ألوان متعددة، كل منها بمزايا مختلفة:\n\n• الألوان المسماة: 147 اسماً محدداً مسبقاً مثل red, blue, coral. سهلة القراءة لكن محدودة الدقة.\n\n• HEX (#RRGGBB): ستة أرقام سداسية عشرية تمثل الأحمر والأخضر والأزرق.\n\n• RGB: كل قناة تتراوح من 0-255. أكثر بديهية للتلاعب البرمجي بالألوان.\n\n• RGBA: مثل RGB لكن مع قناة شفافية ألفا (0 = غير مرئي، 1 = معتم بالكامل).\n\n• HSL: الصبغة هي زاوية اللون (0-360°)، التشبع هو شدة اللون، الإضاءة تتحكم في السطوع. الأكثر بديهية لإنشاء لوحات الألوان!\n\n• HSLA: HSL مع شفافية ألفا.\n\nنصائح احترافية: استخدم متغيرات CSS لتخزين لوحة الألوان. استخدم HSL لإنشاء السمات بسهولة.",
    examples: [
      {
        title: "Color Formats",
        html: '<div class=\"color-box c1\">Named: red</div>\n<div class=\"color-box c2\">HEX: #6366f1</div>\n<div class=\"color-box c3\">RGB: rgb(99,102,241)</div>\n<div class=\"color-box c4\">RGBA: 50% opacity</div>\n<div class=\"color-box c5\">HSL: hsl(170,80%,50%)</div>',
        css: '.color-box { padding: 12px 20px; margin: 6px 0; border-radius: 8px; color: #fff; font-family: monospace; font-size: 14px; }\n.c1 { background: red; }\n.c2 { background: #6366f1; }\n.c3 { background: rgb(99,102,241); }\n.c4 { background: rgba(99,102,241,0.5); color: #333; }\n.c5 { background: hsl(170,80%,50%); }'
      }
    ],
    whyMatters: "Colors directly affect user experience, accessibility, and branding. Understanding color formats lets you create precise, consistent color schemes across your projects.",
    whyMattersAr: "الألوان تؤثر مباشرة على تجربة المستخدم وسهولة الوصول والعلامة التجارية.",
    commonMistakes: [
      { wrong: "Using only named colors:\ncolor: red;\nbackground: blue;", correct: "Use HEX or HSL for precise colors:\ncolor: #e74c3c;\nbackground: hsl(220, 80%, 50%);" },
      { wrong: "Poor contrast between text and background", correct: "Ensure WCAG contrast ratio of at least 4.5:1" }
    ],
    goodVsBad: { bad: "body { color: black; background: white; }\na { color: blue; }", good: ":root { --text: #1a1a2e; --bg: #f5f5f5; --link: #6366f1; }\nbody { color: var(--text); background: var(--bg); }" },
    exercises: [
      "Set a background color using HEX notation.",
      "Use RGBA to create a semi-transparent overlay.",
      "Create a color palette using HSL with the same hue but different lightness.",
      "Apply an opacity property to make an element 70% transparent.",
      "Use CSS variables to store and reuse colors."
    ],
    challenges: [
      "Create a gradient background using linear-gradient with 3 colors.",
      "Build a color palette showcase with 5 cards, each showing a color's name, HEX, and RGB values."
    ],
    mcqs: [
      { q: "Which is a valid HEX color?", options: ["#gg0000", "#ff0000", "#ff000", "ff0000"], answer: 1 },
      { q: "What does the 'A' in RGBA stand for?", options: ["Alignment", "Alpha", "Application", "Attribute"], answer: 1 },
      { q: "HSL stands for?", options: ["Hue Shade Light", "Hue Saturation Lightness", "High Saturation Low", "None"], answer: 1 },
      { q: "rgb(0, 0, 0) represents?", options: ["White", "Black", "Red", "Transparent"], answer: 1 },
      { q: "opacity: 0.5 makes element?", options: ["Invisible", "Fully visible", "50% transparent", "Blurred"], answer: 2 },
      { q: "Which property sets text color?", options: ["background-color", "font-color", "color", "text-style"], answer: 2 },
      { q: "#fff is shorthand for?", options: ["#f0f0f0", "#ffffff", "#000fff", "#ff00ff"], answer: 1 },
      { q: "RGBA alpha value range is?", options: ["0-100", "0-255", "0-1", "1-10"], answer: 2 },
      { q: "currentColor keyword refers to?", options: ["Default browser color", "The element's color value", "Black", "White"], answer: 1 },
      { q: "transparent is equivalent to?", options: ["rgba(0,0,0,1)", "rgba(0,0,0,0)", "rgb(255,255,255)", "#fff"], answer: 1 }
    ]
  },
  {
    id: 4,
    title: "CSS Backgrounds",
    titleAr: "الخلفيات في CSS",
    explanation: "CSS background properties give you full control over element backgrounds. There are many sub-properties:\n\n• background-color: Sets a solid color. Applies behind any background image.\n\n• background-image: Sets one or more images. Can use url('path.jpg') or gradients like linear-gradient(135deg, #6366f1, #06b6d4).\n\n• background-repeat: Controls tiling — repeat (default), no-repeat, repeat-x, repeat-y, space, round.\n\n• background-size: cover (fills entire area, may crop), contain (fits completely, may leave gaps), or specific values like 200px 100px.\n\n• background-position: Where the image sits — center, top left, 50% 50%, or pixel values.\n\n• background-attachment: scroll (default, moves with page), fixed (creates parallax effect), local (scrolls with element content).\n\n• background-origin: Where the background starts — padding-box (default), border-box, content-box.\n\n• background-clip: Where the background is visible — same values as origin, plus text (clips to text shape).\n\nThe shorthand 'background' combines all: background: color url() position/size repeat attachment;\n\nYou can layer multiple backgrounds separated by commas — the first listed appears on top!\n\nGradient types: linear-gradient(), radial-gradient(), conic-gradient(), repeating-linear-gradient(), repeating-radial-gradient().",
    explanationAr: "خصائص الخلفية في CSS تمنحك تحكماً كاملاً في خلفيات العناصر:\n\n• background-color: يضبط لوناً صلباً. يُطبق خلف أي صورة خلفية.\n\n• background-image: يضبط صورة أو أكثر. يمكن استخدام url() أو التدرجات مثل linear-gradient().\n\n• background-repeat: يتحكم في التبليط — repeat (افتراضي)، no-repeat، repeat-x، repeat-y.\n\n• background-size: cover (يملأ المنطقة بالكامل)، contain (يتناسب بالكامل)، أو قيم محددة.\n\n• background-position: أين تقع الصورة — center، top left، أو قيم بكسل.\n\n• background-attachment: scroll (افتراضي)، fixed (يخلق تأثير بارالكس)، local.\n\nالاختصار 'background' يجمع الكل. يمكنك وضع طبقات خلفيات متعددة مفصولة بفواصل!",
    examples: [
      {
        title: "Background Properties",
        html: '<div class=\"bg-demo bg1\">Solid Color</div>\n<div class=\"bg-demo bg2\">Gradient</div>\n<div class=\"bg-demo bg3\">Multiple Backgrounds</div>',
        css: '.bg-demo { padding: 30px; margin: 8px 0; border-radius: 10px; color: #fff; font-weight: bold; text-align: center; font-size: 16px; }\n.bg1 { background-color: #6366f1; }\n.bg2 { background: linear-gradient(135deg, #6366f1, #06b6d4); }\n.bg3 { background: linear-gradient(135deg, rgba(99,102,241,0.8), rgba(6,182,212,0.8)), repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px); }'
      }
    ],
    whyMatters: "Backgrounds are crucial for visual design — hero sections, cards, overlays, and patterns all rely on background properties. Mastering them is key to professional layouts.",
    whyMattersAr: "الخلفيات ضرورية للتصميم المرئي — الأقسام الرئيسية والبطاقات والتراكبات كلها تعتمد على خصائص الخلفية.",
    commonMistakes: [
      { wrong: "background-image without background-size:\nbackground-image: url('bg.jpg');", correct: "Always set size:\nbackground: url('bg.jpg') center/cover no-repeat;" },
      { wrong: "Forgetting background-repeat: no-repeat;", correct: "Set repeat behavior explicitly for images" }
    ],
    goodVsBad: { bad: "div {\n  background-color: blue;\n  background-image: url(bg.jpg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}", good: "div {\n  background: blue url(bg.jpg) center/cover no-repeat;\n}" },
    exercises: [
      "Set a solid background color on a div.", "Apply a linear-gradient as background.", "Use background-size: cover with an image.", "Create a radial gradient background.", "Use background-attachment: fixed for a parallax effect."
    ],
    challenges: [
      "Create a hero section with a gradient overlay on top of a pattern background.",
      "Build a card with a glassmorphism effect using background and backdrop-filter."
    ],
    mcqs: [
      { q: "Which is the shorthand for background?", options: ["bg", "background", "back", "bkg"], answer: 1 },
      { q: "background-size: cover does what?", options: ["Tiles the image", "Stretches to cover entire area", "Centers the image", "Makes it 100px"], answer: 1 },
      { q: "background-attachment: fixed creates?", options: ["Scrolling background", "Parallax effect", "Blurred background", "Tiled background"], answer: 1 },
      { q: "Can an element have multiple backgrounds?", options: ["No", "Yes", "Only with JavaScript", "Only images"], answer: 1 },
      { q: "background-repeat default value?", options: ["no-repeat", "repeat-x", "repeat", "space"], answer: 2 },
      { q: "Which creates a gradient?", options: ["background-color", "background-gradient", "linear-gradient()", "gradient()"], answer: 2 },
      { q: "background-position: center means?", options: ["Top-left", "Center of element", "Center of page", "Bottom"], answer: 1 },
      { q: "background-clip: text does?", options: ["Clips bg to text shape", "Adds bg to text", "Nothing", "Changes text color"], answer: 0 },
      { q: "background-size: contain?", options: ["Fills entire area", "Fits while maintaining ratio", "100% width only", "Repeats"], answer: 1 },
      { q: "Which value of background-origin sets bg relative to content box?", options: ["padding-box", "border-box", "content-box", "margin-box"], answer: 2 }
    ]
  },
  {
    id: 5,
    title: "Padding",
    titleAr: "الحشو (Padding)",
    explanation: "Padding is the inner spacing between an element's content and its border. It is part of the CSS Box Model.\n\nPadding properties:\n• padding-top, padding-right, padding-bottom, padding-left — set individual sides\n\nShorthand syntax (padding):\n• 1 value: padding: 20px — all four sides get 20px\n• 2 values: padding: 10px 20px — top/bottom 10px, left/right 20px\n• 3 values: padding: 10px 20px 30px — top 10px, left/right 20px, bottom 30px\n• 4 values: padding: 10px 20px 30px 40px — top, right, bottom, left (clockwise)\n\nKey concepts:\n• Padding CANNOT be negative (unlike margin)\n• Padding is INSIDE the border — it increases the element's visual size unless you use box-sizing: border-box\n• The element's background color/image extends into the padding area\n• With default box-sizing: content-box, adding padding ADDS to the declared width/height\n• With box-sizing: border-box, padding is included WITHIN the declared width/height — this is the modern standard\n\nBest practice: Always include * { box-sizing: border-box; } in your CSS reset. This makes sizing predictable.",
    explanationAr: "الحشو هو المسافة الداخلية بين محتوى العنصر وحدوده. هو جزء من نموذج الصندوق في CSS.\n\nخصائص الحشو:\n• padding-top, padding-right, padding-bottom, padding-left — تضبط جوانب فردية\n\nصيغة الاختصار (padding):\n• قيمة واحدة: padding: 20px — جميع الجوانب الأربعة تحصل على 20px\n• قيمتان: padding: 10px 20px — أعلى/أسفل 10px، يسار/يمين 20px\n• 3 قيم: padding: 10px 20px 30px — أعلى 10px، يسار/يمين 20px، أسفل 30px\n• 4 قيم: padding: 10px 20px 30px 40px — أعلى، يمين، أسفل، يسار (باتجاه عقارب الساعة)\n\nمفاهيم مهمة:\n• الحشو لا يمكن أن يكون سالباً (على عكس الهامش)\n• الحشو داخل الحدود — يزيد حجم العنصر المرئي ما لم تستخدم box-sizing: border-box\n• لون/صورة خلفية العنصر تمتد إلى منطقة الحشو\n• مع box-sizing: border-box، الحشو يُضمّن داخل العرض/الارتفاع المعلن\n\nأفضل ممارسة: دائماً أضف * { box-sizing: border-box; } في إعادة ضبط CSS.",
    examples: [
      {
        title: "Padding Values",
        html: '<div class=\"pad-demo p1\">padding: 10px</div>\n<div class=\"pad-demo p2\">padding: 10px 30px</div>\n<div class=\"pad-demo p3\">padding: 10px 30px 20px 40px</div>',
        css: '.pad-demo { background: #6366f1; color: #fff; margin: 8px 0; border-radius: 6px; font-size: 14px; font-family: monospace; }\n.p1 { padding: 10px; }\n.p2 { padding: 10px 30px; }\n.p3 { padding: 10px 30px 20px 40px; }'
      }
    ],
    whyMatters: "Padding controls how spacious elements feel. Too little padding makes content cramped; too much wastes space. Consistent padding creates visual rhythm in your designs.",
    whyMattersAr: "الحشو يتحكم في مدى اتساع العناصر. القليل جداً من الحشو يجعل المحتوى مزدحماً.",
    commonMistakes: [
      { wrong: "Confusing padding with margin:\npadding is outside the element", correct: "Padding is INSIDE the border,\nMargin is OUTSIDE the border" },
      { wrong: "Not using box-sizing: border-box;\nPadding increases element size!", correct: "Add box-sizing: border-box;\nto keep declared width/height" }
    ],
    goodVsBad: { bad: ".card {\n  padding-top: 20px;\n  padding-right: 20px;\n  padding-bottom: 20px;\n  padding-left: 20px;\n}", good: ".card {\n  padding: 20px; /* shorthand */\n}" },
    exercises: [
      "Add 20px padding to all sides of a div.", "Use the 2-value shorthand for padding.", "Set different padding on each side.", "Add padding only to the left and right.", "Show how box-sizing affects padding behavior."
    ],
    challenges: [
      "Create a pricing card with appropriate padding for header, body, and footer sections.",
      "Build a navigation bar where the padding creates the click target area."
    ],
    mcqs: [
      { q: "padding: 10px 20px means?", options: ["All sides 10px", "Top/bottom 10px, left/right 20px", "Top 10px, rest 20px", "Left 10px, right 20px"], answer: 1 },
      { q: "Padding is space between?", options: ["Elements", "Content and border", "Border and margin", "Page and element"], answer: 1 },
      { q: "Can padding be negative?", options: ["Yes", "No", "Only padding-top", "Only in Flexbox"], answer: 1 },
      { q: "padding: 10px 20px 30px has how many values?", options: ["2", "3", "4", "1"], answer: 1 },
      { q: "In 3-value shorthand, middle value applies to?", options: ["Top and bottom", "Left and right", "All sides", "Only right"], answer: 1 },
      { q: "Does padding affect element's total size by default?", options: ["No", "Yes", "Only width", "Only height"], answer: 1 },
      { q: "box-sizing: border-box includes padding in?", options: ["Margin", "Width and height", "Content only", "Nothing"], answer: 1 },
      { q: "padding: 0 auto is valid for centering?", options: ["Yes", "No, use margin: 0 auto", "Only for blocks", "Yes for inline"], answer: 1 },
      { q: "Default padding value?", options: ["10px", "auto", "0", "inherit"], answer: 2 },
      { q: "Padding background is?", options: ["Transparent", "Same as element's background", "White", "None"], answer: 1 }
    ]
  },
  {
    id: 6,
    title: "Margin",
    titleAr: "الهامش (Margin)",
    explanation: "Margin is the outer spacing outside an element's border. It creates space between elements.\n\nMargin properties:\n• margin-top, margin-right, margin-bottom, margin-left — individual sides\n• Shorthand works exactly like padding: 1-4 values (clockwise: top, right, bottom, left)\n\nThe special value 'auto':\n• margin: 0 auto centers a block element horizontally (it must have a declared width!)\n• margin: auto on flex items distributes space — useful for pushing items apart\n• Inline elements cannot be centered with margin: auto\n\nMargin Collapse (critical concept!):\n• When two vertical margins touch (top of one element meets bottom of another), they COLLAPSE — the larger margin wins, they don't add up\n• Example: Element A has margin-bottom: 30px and Element B has margin-top: 20px. The gap between them is 30px, NOT 50px!\n• Margin collapse does NOT happen: horizontally, in Flexbox, in Grid, when there's padding/border between them, or when overflow is set\n\nNegative margins:\n• Unlike padding, margins CAN be negative\n• Negative margins pull elements closer or overlap them\n• margin-top: -20px moves element UP 20px; margin-left: -20px moves LEFT\n\nDefault browser margins: Most browsers add 8px margin to <body>, and varying margins to headings and paragraphs. CSS resets remove these.",
    explanationAr: "الهامش هو المسافة الخارجية خارج حدود العنصر. يُنشئ مسافة بين العناصر.\n\nخصائص الهامش:\n• margin-top, margin-right, margin-bottom, margin-left — جوانب فردية\n• الاختصار يعمل تماماً مثل الحشو: 1-4 قيم (باتجاه عقارب الساعة)\n\nالقيمة الخاصة 'auto':\n• margin: 0 auto يوسط عنصر كتلي أفقياً (يجب أن يكون له عرض معلن!)\n• margin: auto في عناصر Flex يوزع المساحة\n\nانهيار الهامش (مفهوم حاسم!):\n• عندما يتلامس هامشان عموديان، ينهاران — الهامش الأكبر يفوز، لا يتجمعان\n• مثال: العنصر A له margin-bottom: 30px والعنصر B له margin-top: 20px. الفجوة 30px وليس 50px!\n• انهيار الهامش لا يحدث: أفقياً، في Flexbox، في Grid\n\nالهوامش السلبية:\n• على عكس الحشو، يمكن أن تكون الهوامش سالبة\n• الهوامش السلبية تسحب العناصر أقرب أو تتداخلها",
    examples: [
      {
        title: "Margin & Auto Centering",
        html: '<div class=\"m-box\">margin: 20px</div>\n<div class=\"m-center\">margin: 0 auto (centered)</div>',
        css: '.m-box { background: #6366f1; color: #fff; padding: 15px; margin: 20px; border-radius: 6px; font-size: 14px; }\n.m-center { background: #06b6d4; color: #fff; padding: 15px; width: 250px; margin: 10px auto; border-radius: 6px; text-align: center; font-size: 14px; }'
      }
    ],
    whyMatters: "Margins control the spacing between elements. Understanding margin collapse prevents unexpected layout issues. margin: auto is the classic way to center block elements.",
    whyMattersAr: "الهوامش تتحكم في المسافات بين العناصر. فهم انهيار الهامش يمنع مشاكل التخطيط غير المتوقعة.",
    commonMistakes: [
      { wrong: "Not understanding margin collapse:\nTwo 20px margins = 20px gap, not 40px", correct: "Vertical margins collapse — the larger margin wins.\nUse padding or flex gap instead." },
      { wrong: "Using margin to center inline elements", correct: "margin: auto works on block elements with a width set" }
    ],
    goodVsBad: { bad: ".box {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  margin-left: auto;\n  margin-right: auto;\n}", good: ".box {\n  margin: 20px auto;\n}" },
    exercises: [
      "Center a div horizontally using margin: auto.", "Create equal spacing between 3 boxes.", "Demonstrate margin collapse.", "Use negative margins to overlap elements.", "Remove default margins from h1 and p elements."
    ],
    challenges: [
      "Create a centered page layout with max-width and auto margins.", "Build a card grid with consistent margins between all cards."
    ],
    mcqs: [
      { q: "margin: auto centers an element?", options: ["Always", "Only block elements with width", "Only inline", "Never"], answer: 1 },
      { q: "Margin collapse occurs?", options: ["Horizontally", "Vertically between adjacent elements", "Always", "With floats"], answer: 1 },
      { q: "Can margin be negative?", options: ["No", "Yes", "Only on left", "Only in Grid"], answer: 1 },
      { q: "margin: 0 selects?", options: ["No margin", "Default margin", "Auto margin", "10px margin"], answer: 0 },
      { q: "Which prevents margin collapse?", options: ["Adding border", "Adding padding", "overflow: hidden", "All of the above"], answer: 3 },
      { q: "Margin area background is?", options: ["Element's background", "Always transparent", "White", "Inherited"], answer: 1 },
      { q: "margin: 10px 20px 30px 40px — left margin is?", options: ["10px", "20px", "30px", "40px"], answer: 3 },
      { q: "margin: inherit does what?", options: ["Resets margin", "Takes parent's margin", "Sets auto", "Nothing"], answer: 1 },
      { q: "In Flexbox, do margins collapse?", options: ["Yes", "No", "Only horizontal", "Only vertical"], answer: 1 },
      { q: "Default body margin in browsers?", options: ["0", "8px", "10px", "16px"], answer: 1 }
    ]
  },
  {
    id: 7,
    title: "Border",
    titleAr: "الحدود (Border)",
    explanation: "Border draws a visible line around an element, sitting between the padding and the margin in the Box Model.\n\nBorder sub-properties:\n• border-width: thin, medium, thick, or pixel values like 2px\n• border-style (REQUIRED): none, solid, dashed, dotted, double, groove, ridge, inset, outset, hidden\n• border-color: Any CSS color value. Defaults to text color if not specified.\n\nShorthand: border: width style color; e.g., border: 2px solid #6366f1;\nNote: border-style is REQUIRED — without it, the border won't appear!\n\nPer-side borders: border-top, border-right, border-bottom, border-left\n\nBorder Radius (rounded corners):\n• border-radius: 10px — all corners equally\n• border-radius: 50% — circle on square elements, ellipse on rectangles\n• 4 values: top-left, top-right, bottom-right, bottom-left\n\nBorder vs Outline: Borders take space in layout; outlines do NOT.\nbox-shadow is often preferred for decorative effects since it doesn't affect layout.",
    explanationAr: "الحدود ترسم خطاً مرئياً حول العنصر، تقع بين الحشو والهامش في نموذج الصندوق.\n\nخصائص الحدود:\n• border-width: thin، medium، thick، أو قيم بكسل\n• border-style (مطلوب): none، solid، dashed، dotted، double، groove\n• border-color: أي قيمة لون\n\nالاختصار: border: width style color;\nملاحظة: border-style مطلوب — بدونه لن يظهر الحد!\n\nنصف قطر الحدود: border-radius: 50% ينشئ دائرة على العناصر المربعة.\nالحدود مقابل الإطار الخارجي: الحدود تأخذ مساحة، الإطارات الخارجية لا.",
    examples: [
      {
        title: "Border Styles",
        html: '<div class=\"border-demo b1\">solid</div>\n<div class=\"border-demo b2\">dashed</div>\n<div class=\"border-demo b3\">dotted</div>\n<div class=\"border-demo b4\">double</div>\n<div class=\"border-demo b5\">rounded</div>\n<div class=\"border-demo b6\">circle</div>',
        css: '.border-demo { padding: 12px 20px; margin: 6px 0; display: inline-block; font-size: 14px; margin-right: 8px; }\n.b1 { border: 3px solid #6366f1; }\n.b2 { border: 3px dashed #e06c75; }\n.b3 { border: 3px dotted #06b6d4; }\n.b4 { border: 4px double #f59e0b; }\n.b5 { border: 2px solid #6366f1; border-radius: 12px; }\n.b6 { border: 2px solid #10b981; border-radius: 50%; width: 60px; height: 60px; display: inline-flex; align-items: center; justify-content: center; }'
      }
    ],
    whyMatters: "Borders define element boundaries visually. border-radius is essential for modern rounded designs — from buttons to avatars to cards.",
    whyMattersAr: "الحدود تحدد حدود العناصر بصرياً. نصف قطر الحدود ضروري للتصاميم المستديرة الحديثة.",
    commonMistakes: [
      { wrong: "border: 1px; /* missing style */", correct: "border: 1px solid #ccc; /* style is required */" },
      { wrong: "Using border-radius: 50% on rectangles and expecting a circle", correct: "border-radius: 50% creates a circle only on square elements" }
    ],
    goodVsBad: { bad: "div {\n  border-top: 1px solid #ccc;\n  border-right: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  border-left: 1px solid #ccc;\n}", good: "div {\n  border: 1px solid #ccc;\n}" },
    exercises: [
      "Create a div with a solid border.", "Apply different borders to each side.", "Create a circle using border-radius.", "Use border-bottom only for an underline effect.", "Create a border with gradient using border-image."
    ],
    challenges: [
      "Create avatar images with circular borders and an online status indicator.", "Build a decorative section divider using border styles."
    ],
    mcqs: [
      { q: "Which border-style is required?", options: ["color", "width", "style", "radius"], answer: 2 },
      { q: "border-radius: 50% creates?", options: ["Square", "Circle (on square)", "Triangle", "Oval"], answer: 1 },
      { q: "border: none removes?", options: ["Only color", "The entire border", "Only width", "Only style"], answer: 1 },
      { q: "Default border-style?", options: ["solid", "none", "dotted", "hidden"], answer: 1 },
      { q: "border-collapse applies to?", options: ["Divs", "Tables", "Lists", "Forms"], answer: 1 },
      { q: "outline is different from border because?", options: ["It's inside padding", "It doesn't take space", "It's always red", "It can't be styled"], answer: 1 },
      { q: "border shorthand order?", options: ["color style width", "width style color", "style width color", "Any order"], answer: 3 },
      { q: "border-radius: 10px 20px means?", options: ["All 10px", "Top-left/bottom-right 10px, others 20px", "Top 10px, bottom 20px", "Left 10px, right 20px"], answer: 1 },
      { q: "Can borders be transparent?", options: ["No", "Yes", "Only in dark mode", "Only solid"], answer: 1 },
      { q: "box-shadow vs border?", options: ["Same thing", "box-shadow doesn't affect layout", "Border doesn't affect layout", "No difference"], answer: 1 }
    ]
  },
  {
    id: 8,
    title: "Display Property",
    titleAr: "خاصية العرض (Display)",
    explanation: "The display property is one of the most fundamental CSS properties. It defines how an element generates boxes and participates in layout.\n\nCore values:\n• block: Takes full width. Starts on new line. Accepts all sizing. Examples: div, h1-h6, p, section.\n• inline: Only takes content width. Flows with text. Does NOT accept width/height or vertical margin. Examples: span, a, strong.\n• inline-block: Flows inline but ACCEPTS width, height, vertical margin/padding like block.\n• none: Completely removed from layout. No space. Screen readers skip it.\n• flex: Creates Flexbox container (1D layout). Children become flex items.\n• grid: Creates Grid container (2D layout). Children become grid items.\n• inline-flex / inline-grid: Container behaves as inline-level.\n\nDisplay vs Visibility vs Opacity:\n• display: none — removed from layout, no space\n• visibility: hidden — hidden but keeps space\n• opacity: 0 — transparent but keeps space AND is still clickable!",
    explanationAr: "خاصية العرض هي واحدة من أهم خصائص CSS. تحدد كيف يُنشئ العنصر صناديق في التخطيط.\n• block: عرض كامل، سطر جديد. inline: عرض المحتوى، يتدفق مع النص.\n• inline-block: يجمع inline و block. none: مُزال تماماً.\n• flex: Flexbox (1D). grid: Grid (2D).\nالفرق: display:none يزيل، visibility:hidden يخفي لكن يحتفظ بالمساحة، opacity:0 شفاف وقابل للنقر.",
    examples: [
      {
        title: "Display Values",
        html: '<span class=\"d-block\">Block</span>\n<span class=\"d-inline\">Inline 1</span>\n<span class=\"d-inline\">Inline 2</span>\n<br><br>\n<span class=\"d-ib\">Inline-Block 1</span>\n<span class=\"d-ib\">Inline-Block 2</span>',
        css: '.d-block { display: block; background: #6366f1; color: #fff; padding: 10px; margin: 4px 0; border-radius: 6px; }\n.d-inline { display: inline; background: #06b6d4; color: #fff; padding: 5px 10px; border-radius: 4px; }\n.d-ib { display: inline-block; background: #f59e0b; color: #fff; padding: 15px 25px; margin: 4px; border-radius: 6px; width: 160px; text-align: center; }'
      }
    ],
    whyMatters: "Display is one of the most important CSS properties. It controls whether elements stack vertically, flow inline, or use advanced layout modes like Flexbox and Grid.",
    whyMattersAr: "العرض هي واحدة من أهم خصائص CSS. تتحكم في ما إذا كانت العناصر تتكدس رأسياً أو تتدفق بشكل سطري.",
    commonMistakes: [
      { wrong: "Setting width/height on inline elements:\nspan { width: 200px; } /* ignored */", correct: "Use display: inline-block or block:\nspan { display: inline-block; width: 200px; }" },
      { wrong: "Using display: none for accessibility\n(screen readers can't see it)", correct: "Use visibility: hidden or sr-only class\nif content should be accessible" }
    ],
    goodVsBad: { bad: "/* Using floats for layout */\n.col { float: left; width: 33%; }\n.clearfix::after { clear: both; }", good: "/* Use modern layout */\n.row { display: flex; gap: 20px; }\n.col { flex: 1; }" },
    exercises: [
      "Change a span to display as block.", "Create a horizontal menu using inline-block.", "Hide an element with display: none.", "Compare block, inline, and inline-block.", "Create a gallery grid using inline-block."
    ],
    challenges: [
      "Create a horizontal navigation with inline-block without gaps between items.", "Build a responsive layout switching from horizontal to vertical using display changes."
    ],
    mcqs: [
      { q: "Default display of div?", options: ["inline", "block", "inline-block", "flex"], answer: 1 },
      { q: "Default display of span?", options: ["block", "inline", "inline-block", "none"], answer: 1 },
      { q: "display: none vs visibility: hidden?", options: ["Same", "none removes space, hidden keeps space", "hidden removes space", "No difference"], answer: 1 },
      { q: "Can inline elements have width?", options: ["Yes", "No", "Only height", "Only with !important"], answer: 1 },
      { q: "inline-block allows?", options: ["Only width", "Width and height while staying inline", "Full width", "Nothing extra"], answer: 1 },
      { q: "display: flex creates?", options: ["Block container", "Flex container", "Grid container", "Inline container"], answer: 1 },
      { q: "display: contents does?", options: ["Shows content", "Removes element box, keeps children", "Hides content", "Nothing"], answer: 1 },
      { q: "Which is NOT a display value?", options: ["block", "center", "grid", "table"], answer: 1 },
      { q: "list-item display shows?", options: ["No bullets", "Bullets/numbers", "Inline", "Hidden"], answer: 1 },
      { q: "display: inline-flex?", options: ["Flex items inline", "Inline flex container", "Same as flex", "Invalid"], answer: 1 }
    ]
  },
  {
    id: 9, title: "Text & Typography", titleAr: "النصوص والخطوط",
    explanation: "CSS typography controls how text appears: font-family, font-size, font-weight, font-style, line-height, letter-spacing, word-spacing, text-align, text-decoration, text-transform, text-shadow, text-indent, white-space, word-break.\n\nFont properties:\n• font-family: Use font stacks: 'Inter', 'Helvetica', sans-serif. Browser picks first available.\n• font-size: Use rem for scalability. 1rem = root font-size (usually 16px).\n• font-weight: 100 (thin) to 900 (black). 400 = normal, 700 = bold.\n• line-height: 1.5-1.8 for body. Use unitless values.\n• letter-spacing: Space between characters. Great for headings.\n• text-align: left, right, center, justify.\n• text-transform: uppercase, lowercase, capitalize.\n• text-shadow: x-offset y-offset blur color.\n• white-space: nowrap prevents wrapping.\n\nGoogle Fonts: Free web fonts via <link> or @import. Use 2-3 fonts max.",
    explanationAr: "خصائص الطباعة تتحكم في مظهر النص:\n• font-family: استخدم مجموعات خطوط. font-size: استخدم rem للتطوير.\n• font-weight: 100-900. line-height: 1.5-1.8 للنص الأساسي.\n• text-align, text-transform, text-shadow, letter-spacing.\n• Google Fonts: خطوط مجانية. استخدم 2-3 كحد أقصى.",
    examples: [{ title: "Typography Properties", html: '<h2 class="typo-title">Typography</h2>\n<p class="typo-body">Body text with good line-height.</p>\n<p class="typo-caps">uppercase text</p>\n<p class="typo-shadow">Text Shadow Effect</p>', css: '.typo-title { font-family: Georgia, serif; font-size: 28px; font-weight: 700; letter-spacing: -0.5px; color: #6366f1; }\n.typo-body { font-size: 16px; line-height: 1.8; color: #444; max-width: 500px; }\n.typo-caps { text-transform: uppercase; letter-spacing: 3px; font-size: 14px; font-weight: 600; color: #888; }\n.typo-shadow { font-size: 24px; font-weight: 700; text-shadow: 2px 2px 4px rgba(99,102,241,0.4); color: #333; }' }],
    whyMatters: "Typography is 90% of web design. Good font choices and spacing dramatically improve readability, professionalism, and user experience.",
    whyMattersAr: "الطباعة هي 90% من تصميم الويب. اختيار الخطوط الجيدة والتباعد يحسن قابلية القراءة بشكل كبير.",
    commonMistakes: [
      { wrong: "Using too many different fonts:\nfont-family: Arial, Comic Sans, Impact;", correct: "Stick to 2-3 fonts max:\nfont-family: 'Inter', sans-serif;" },
      { wrong: "Line-height too tight:\nline-height: 1;", correct: "Use comfortable line-height:\nline-height: 1.6 to 1.8;" }
    ],
    goodVsBad: { bad: "p { font-size: 12px; line-height: 1; }", good: "p { font-size: 16px; line-height: 1.7; }" },
    exercises: ["Change font-family of body text.", "Set line-height to 1.7 for paragraphs.", "Use text-transform: uppercase on a heading.", "Add text-shadow to a title.", "Use Google Fonts in your CSS."],
    challenges: ["Create a blog post layout with proper heading hierarchy and readable body text.", "Build a typographic scale using rem units."],
    mcqs: [
      { q: "font-weight: 700 equals?", options: ["normal", "bold", "light", "bolder"], answer: 1 },
      { q: "text-transform: capitalize does?", options: ["All uppercase", "All lowercase", "First letter of each word uppercase", "Nothing"], answer: 2 },
      { q: "line-height: 1.5 means?", options: ["1.5px", "1.5 times the font size", "15px", "150%"], answer: 1 },
      { q: "text-decoration: none removes?", options: ["Color", "Underlines/overlines", "Font", "Size"], answer: 1 },
      { q: "font-style: italic makes text?", options: ["Bold", "Italic", "Underlined", "Uppercase"], answer: 1 },
      { q: "text-align: justify does?", options: ["Centers text", "Aligns left", "Stretches lines to fill width", "Aligns right"], answer: 2 },
      { q: "Which unit is relative to root font size?", options: ["px", "em", "rem", "%"], answer: 2 },
      { q: "Default font-size in browsers?", options: ["14px", "16px", "12px", "18px"], answer: 1 },
      { q: "letter-spacing controls?", options: ["Line height", "Space between letters", "Word spacing", "Paragraph indent"], answer: 1 },
      { q: "white-space: nowrap does?", options: ["Wraps text", "Prevents text wrapping", "Hides text", "Trims spaces"], answer: 1 }
    ]
  },
  {
    id: 10, title: "Float", titleAr: "التعويم (Float)",
    explanation: "Float was originally for wrapping text around images. It removes an element from normal flow.\n\nValues: float: left, float: right, float: none (default).\n• Floated elements are taken out of normal flow\n• Text and inline elements wrap around floated elements\n• Parent elements collapse when containing only floated children\n\nClearfix solutions:\n• overflow: hidden on parent (simple but may clip)\n• .parent::after { content: ''; display: table; clear: both; }\n• clear: both on a sibling element\n\nModern usage: Float ONLY for text wrapping around images. Use Flexbox/Grid for layouts.",
    explanationAr: "التعويم صُمم للف النص حول الصور. يزيل العنصر من التدفق العادي.\n• القيم: left, right, none\n• مشكلة Clearfix: العنصر الأب ينهار. الحل: overflow:hidden أو ::after clearfix.\n• اليوم: استخدم float فقط للف النص. Flexbox/Grid للتخطيطات.",
    examples: [{ title: "Float Example", html: '<div class="float-container">\n  <div class="float-box">Float Left</div>\n  <p class="float-text">This text wraps around the floated element. Float was the original way to create multi-column layouts before Flexbox and Grid were available.</p>\n</div>', css: '.float-container { overflow: hidden; padding: 10px; background: #f0f2f8; border-radius: 8px; }\n.float-box { float: left; width: 120px; height: 80px; background: #6366f1; color: #fff; display: flex; align-items: center; justify-content: center; margin: 0 15px 10px 0; border-radius: 6px; font-size: 14px; }\n.float-text { font-size: 14px; line-height: 1.7; color: #444; }' }],
    whyMatters: "While floats are considered legacy for layout, you will encounter them in older codebases and they are still relevant for text-wrapping around images.",
    whyMattersAr: "بينما يُعتبر التعويم قديماً للتخطيطات، ستواجهه في الأكواد القديمة ولا يزال مهماً لالتفاف النص.",
    commonMistakes: [
      { wrong: "Using floats for page layout in new projects", correct: "Use Flexbox or Grid for layouts" },
      { wrong: "Forgetting to clear floats:\nParent collapses!", correct: "Use overflow: hidden on parent\nor clearfix technique" }
    ],
    goodVsBad: { bad: ".col-1 { float: left; width: 50%; }\n.col-2 { float: left; width: 50%; }", good: ".row { display: flex; gap: 20px; }\n.col { flex: 1; }" },
    exercises: ["Float an image to the left of text.", "Create a 2-column layout with floats.", "Clear floats using the clearfix technique.", "Use overflow: hidden to contain floats.", "Compare float layout with Flexbox layout."],
    challenges: ["Create a magazine-style layout with text wrapping around images.", "Convert a float-based layout to Flexbox."],
    mcqs: [
      { q: "float: left does?", options: ["Centers element", "Pushes element to left", "Hides element", "Stacks vertically"], answer: 1 },
      { q: "Which clears floats?", options: ["clear: both", "float: none", "display: block", "position: static"], answer: 0 },
      { q: "Float removes element from?", options: ["DOM", "Normal flow", "Page", "Memory"], answer: 1 },
      { q: "Modern alternative to floats?", options: ["Tables", "Flexbox/Grid", "Position", "Margin"], answer: 1 },
      { q: "Parent of floated children may?", options: ["Expand", "Collapse", "Disappear", "Float too"], answer: 1 },
      { q: "overflow: hidden on parent?", options: ["Hides content", "Contains floats", "Removes floats", "Nothing"], answer: 1 },
      { q: "float: none is?", options: ["Invalid", "Default value", "Same as left", "Clearfix"], answer: 1 },
      { q: "Floated elements become?", options: ["Inline", "Block-level", "Inline-block", "Hidden"], answer: 1 },
      { q: "Can you float inline elements?", options: ["No", "Yes", "Only spans", "Only images"], answer: 1 },
      { q: "Float is best used for?", options: ["Page layouts", "Text wrapping around images", "Centering", "Animation"], answer: 1 }
    ]
  },
  {
    id: 11, title: "Position", titleAr: "التموضع (Position)",
    explanation: "Position controls where elements are placed. Essential for overlays, modals, sticky headers, tooltips.\n\nValues:\n• static (default): Normal flow. Offset properties have NO effect.\n• relative: Stays in flow, can be offset. Creates positioning context for absolute children.\n• absolute: Removed from flow. Positions relative to nearest positioned ancestor. If none, uses <html>.\n• fixed: Removed from flow. Relative to viewport. Stays during scroll. Great for sticky navs.\n• sticky: Acts relative until scroll threshold, then fixed. Requires top/right/bottom/left.\n\nOffset: top, right, bottom, left (non-static only).\nz-index: Stacking order (higher = on top). Only on positioned elements!\n\nCenter with absolute: position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);",
    explanationAr: "التموضع يتحكم في وضع العناصر:\n• static: تدفق عادي. relative: إزاحة مع الحفاظ على المساحة.\n• absolute: مُزال من التدفق. fixed: نسبة للنافذة. sticky: هجين.\n• z-index: تكديس العناصر. الأعلى فوق.",
    examples: [{ title: "Position Values", html: '<div class="pos-relative">\n  Relative Parent\n  <div class="pos-absolute">Absolute Child</div>\n</div>\n<div class="pos-sticky-demo">Scroll down to see sticky</div>', css: '.pos-relative { position: relative; background: #e8ebf3; padding: 40px 20px 20px; border-radius: 8px; margin: 10px 0; font-size: 14px; color: #666; height: 120px; }\n.pos-absolute { position: absolute; top: 10px; right: 10px; background: #6366f1; color: #fff; padding: 8px 16px; border-radius: 6px; font-size: 13px; }\n.pos-sticky-demo { position: sticky; top: 0; background: #06b6d4; color: #fff; padding: 10px 20px; border-radius: 6px; font-size: 14px; }' }],
    whyMatters: "Position is essential for overlays, dropdowns, sticky headers, tooltips, and modals. It gives precise control over element placement.",
    whyMattersAr: "التموضع ضروري للتراكبات، القوائم المنسدلة، الرؤوس اللاصقة، والنوافذ المنبثقة.",
    commonMistakes: [
      { wrong: "Using absolute without a positioned parent", correct: "Set position: relative on the parent container" },
      { wrong: "Using position for layout instead of Flexbox/Grid", correct: "Position is for specific placements, not general layout" }
    ],
    goodVsBad: { bad: ".element { position: absolute; top: 200px; left: 300px; }", good: ".parent { position: relative; }\n.element { position: absolute; top: 0; right: 0; }" },
    exercises: ["Position a badge on a card corner using absolute.", "Create a sticky header.", "Build a tooltip with absolute positioning.", "Overlap elements using z-index.", "Create a fixed back-to-top button."],
    challenges: ["Create a modal overlay with centered content using position fixed.", "Build a sticky sidebar that stops at footer."],
    mcqs: [
      { q: "Default position value?", options: ["relative", "absolute", "static", "fixed"], answer: 2 },
      { q: "position: absolute is relative to?", options: ["Viewport", "Body", "Nearest positioned ancestor", "Parent"], answer: 2 },
      { q: "position: fixed is relative to?", options: ["Parent", "Body", "Viewport", "Document"], answer: 2 },
      { q: "z-index works on?", options: ["Any element", "Positioned elements only", "Block elements", "Inline only"], answer: 1 },
      { q: "position: sticky requires?", options: ["z-index", "A top/bottom value", "overflow: hidden", "JavaScript"], answer: 1 },
      { q: "Absolute element is removed from?", options: ["DOM", "Normal flow", "Page", "Browser"], answer: 1 },
      { q: "Relative positioning moves element from?", options: ["Parent", "Its normal position", "Viewport", "Sibling"], answer: 1 },
      { q: "Higher z-index means?", options: ["Behind", "In front", "Transparent", "Bigger"], answer: 1 },
      { q: "position: static ignores?", options: ["margin", "padding", "top/left/right/bottom", "display"], answer: 2 },
      { q: "Sticky is a mix of?", options: ["absolute and fixed", "relative and fixed", "static and absolute", "relative and absolute"], answer: 1 }
    ]
  },
  {
    id: 12, title: "Overflow & Visibility", titleAr: "الفائض والرؤية",
    explanation: "Overflow controls what happens when content exceeds its container.\n\nValues:\n• visible (default): Content overflows freely, may overlap other elements\n• hidden: Clips content at the container edge. No scrollbars. Commonly used for clearfix and hiding overflow.\n• scroll: Always shows scrollbars, even if content fits\n• auto: Only shows scrollbars when needed — the best choice for most cases\n\nSub-properties: overflow-x, overflow-y control horizontal/vertical separately.\n\nVisibility property:\n• visibility: visible (default)\n• visibility: hidden — hides element but KEEPS its space in layout\n• visibility: collapse — for table elements\n\nText truncation recipe: overflow: hidden + text-overflow: ellipsis + white-space: nowrap. This creates the '...' effect on long text.\n\nopacity: 0 vs visibility: hidden:\n• opacity: 0 = transparent but STILL clickable and focusable\n• visibility: hidden = not clickable, not focusable.",
    explanationAr: "الفائض يتحكم فيما يحدث عندما يتجاوز المحتوى حاويته:\n• visible (افتراضي): يتجاوز بحرية\n• hidden: يقص المحتوى. بدون أشرطة تمرير\n• scroll: يعرض أشرطة تمرير دائماً\n• auto: أشرطة تمرير عند الحاجة\n\nقص النص: overflow: hidden + text-overflow: ellipsis + white-space: nowrap.\n• opacity: 0 = شفاف لكن قابل للنقر. visibility: hidden = غير قابل للنقر.",
    examples: [{ title: "Overflow Behaviors", html: '<div class="overflow-demo ov-hidden">\n  <p>This content is clipped because overflow is hidden. Extra text here to demonstrate the overflow behavior clearly.</p>\n</div>\n<div class="overflow-demo ov-scroll">\n  <p>This content has scrollbars. Try scrolling to see more content that extends beyond the container boundaries.</p>\n</div>', css: '.overflow-demo { width: 250px; height: 60px; border: 2px solid #6366f1; border-radius: 8px; padding: 10px; margin: 10px 0; display: inline-block; vertical-align: top; margin-right: 15px; font-size: 13px; line-height: 1.5; }\n.ov-hidden { overflow: hidden; }\n.ov-scroll { overflow: auto; }' }],
    whyMatters: "Overflow is essential for scrollable containers, text truncation, and containing floated/positioned elements. It prevents content from breaking layouts.",
    whyMattersAr: "الفائض ضروري للحاويات القابلة للتمرير وقص النصوص ومنع المحتوى من كسر التخطيطات.",
    commonMistakes: [
      { wrong: "overflow: scroll on everything\n(unnecessary scrollbars)", correct: "Use overflow: auto\n(scrollbars only when needed)" },
      { wrong: "Using visibility: hidden thinking it removes space", correct: "visibility: hidden keeps the space.\nUse display: none to remove space." }
    ],
    goodVsBad: { bad: ".box { overflow: scroll; } /* always shows scrollbars */", good: ".box { overflow: auto; } /* only when needed */" },
    exercises: ["Create a scrollable div with fixed height.", "Truncate text with overflow and text-overflow.", "Hide overflow on one axis only.", "Show difference between visibility hidden and display none.", "Use overflow: hidden to contain floats."],
    challenges: ["Create a custom scrollbar styled with CSS.", "Build a text truncation component with 'Read more' functionality."],
    mcqs: [
      { q: "Default overflow value?", options: ["hidden", "auto", "visible", "scroll"], answer: 2 },
      { q: "overflow: hidden does?", options: ["Shows scrollbar", "Clips content", "Removes content", "Wraps content"], answer: 1 },
      { q: "text-overflow: ellipsis requires?", options: ["overflow: hidden + white-space: nowrap", "Just text-overflow", "JavaScript", "display: block"], answer: 0 },
      { q: "visibility: hidden vs display: none?", options: ["Same", "hidden keeps space, none removes it", "none keeps space", "No diff"], answer: 1 },
      { q: "overflow: auto shows scrollbars?", options: ["Always", "Never", "When content overflows", "Only horizontal"], answer: 2 },
      { q: "overflow-x controls?", options: ["Vertical overflow", "Horizontal overflow", "Both", "Neither"], answer: 1 },
      { q: "opacity: 0 vs visibility: hidden?", options: ["Same", "opacity: 0 is still clickable", "visibility is clickable", "No difference"], answer: 1 },
      { q: "Can you scroll hidden overflow?", options: ["Yes with JS", "No", "Yes with CSS", "Only on mobile"], answer: 0 },
      { q: "overflow: clip vs hidden?", options: ["Same", "clip prevents programmatic scrolling", "hidden prevents scrolling", "No difference"], answer: 1 },
      { q: "Default visibility?", options: ["hidden", "visible", "collapse", "inherit"], answer: 1 }
    ]
  },
  {
    id: 13, title: "Width, Height & Dimensions", titleAr: "العرض والارتفاع والأبعاد",
    explanation: "Width and height set element dimensions. CSS offers many units for responsive design.\n\nDimension properties: width, height, min-width, max-width, min-height, max-height.\n\nUnits:\n• px: Fixed pixels. Exact but not responsive.\n• %: Relative to parent. width: 50% = half of parent.\n• em: Relative to element's font-size. rem: Relative to root font-size (predictable).\n• vw, vh: 1% of viewport width/height. 100vh = full screen height.\n• vmin, vmax: 1% of smaller/larger viewport dimension.\n• ch: Width of '0'. calc(): Combine units! width: calc(100% - 300px);\n\nbox-sizing:\n• content-box (default): Padding/border ADD to size.\n• border-box: Padding/border INCLUDED in size. Much better!\n\nBest practice: * { box-sizing: border-box; } and max-width: 1200px; width: 100%; for containers.",
    explanationAr: "العرض والارتفاع يحددان أبعاد العنصر.\n• الوحدات: px (ثابت), % (نسبة للأب), em/rem (نسبة للخط), vw/vh (نسبة للنافذة).\n• calc(): دمج الوحدات. box-sizing: border-box الأفضل.",
    examples: [{ title: "Dimension Units", html: '<div class="dim-px">300px wide</div>\n<div class="dim-percent">50% wide</div>\n<div class="dim-max">max-width: 400px</div>\n<div class="dim-vh">20vh tall</div>', css: '.dim-px { width: 300px; background: #6366f1; color: #fff; padding: 12px; border-radius: 6px; margin: 6px 0; font-size: 14px; }\n.dim-percent { width: 50%; background: #06b6d4; color: #fff; padding: 12px; border-radius: 6px; margin: 6px 0; font-size: 14px; }\n.dim-max { max-width: 400px; width: 100%; background: #f59e0b; color: #fff; padding: 12px; border-radius: 6px; margin: 6px 0; font-size: 14px; }\n.dim-vh { height: 20vh; min-height: 60px; background: #10b981; color: #fff; padding: 12px; border-radius: 6px; margin: 6px 0; font-size: 14px; display: flex; align-items: center; }' }],
    whyMatters: "Understanding dimensions and units is crucial for responsive design. Using relative units and max-width creates layouts that adapt to any screen size.",
    whyMattersAr: "فهم الأبعاد والوحدات ضروري للتصميم المتجاوب.",
    commonMistakes: [
      { wrong: "Setting fixed height on content containers:\ndiv { height: 500px; }", correct: "Let content determine height:\ndiv { min-height: 500px; }" },
      { wrong: "Using only px for everything", correct: "Use rem for fonts, % or vw for widths,\nvh for heights when appropriate" }
    ],
    goodVsBad: { bad: ".container { width: 960px; }", good: ".container { width: 100%; max-width: 960px; margin: 0 auto; }" },
    exercises: ["Set element width in px, %, and vw.", "Use min-width and max-width together.", "Create a full-viewport-height section.", "Compare box-sizing values.", "Use calc() to combine units."],
    challenges: ["Create a responsive container that is never wider than 1200px but fills the screen.", "Build a full-screen hero section using viewport units."],
    mcqs: [
      { q: "1vw equals?", options: ["1px", "1% of viewport width", "1% of parent", "1em"], answer: 1 },
      { q: "max-width overrides width when?", options: ["Always", "When content is smaller", "When width exceeds max-width", "Never"], answer: 2 },
      { q: "100vh is?", options: ["100 pixels", "100% of parent", "Full viewport height", "100% width"], answer: 2 },
      { q: "box-sizing: border-box includes?", options: ["Only content", "Content + padding + border", "Everything including margin", "Only padding"], answer: 1 },
      { q: "1rem equals?", options: ["16px always", "Root font-size", "Parent font-size", "1% of viewport"], answer: 1 },
      { q: "calc(100% - 20px) does?", options: ["Invalid", "Full width minus 20px", "100% + 20px", "Nothing"], answer: 1 },
      { q: "min-height: 0 is useful in?", options: ["Always", "Flexbox to allow shrinking", "Never", "Grid only"], answer: 1 },
      { q: "Default width of block element?", options: ["0", "auto (100%)", "50%", "fit-content"], answer: 1 },
      { q: "width: fit-content does?", options: ["Full width", "Shrinks to content", "Fixed 100px", "Viewport width"], answer: 1 },
      { q: "vmin uses?", options: ["Larger dimension", "Smaller of vw/vh", "Both", "Neither"], answer: 1 }
    ]
  },
  {
    id: 14, title: "Outline", titleAr: "الإطار الخارجي (Outline)",
    explanation: "Outline is a line drawn OUTSIDE the border. Unlike border, outline doesn't take up space and doesn't affect layout.\n\nProperties:\n• outline-width, outline-style, outline-color, outline-offset\n• Shorthand: outline: width style color;\n\nKey differences from border:\n• Outline does NOT take space in layout\n• Outline cannot have individual sides (always all 4)\n• Outline can overlap other elements\n• Outline respects outline-offset for spacing\n\nAccessibility:\n• Browsers show an outline on focused elements for keyboard navigation\n• NEVER remove :focus outlines without an alternative!\n• Use :focus-visible — it only triggers for keyboard, not mouse\n• Best: *:focus-visible { outline: 3px solid #6366f1; outline-offset: 2px; }",
    explanationAr: "الإطار الخارجي خط يُرسم خارج الحدود. لا يأخذ مساحة.\n• الخصائص: outline-width, outline-style, outline-color, outline-offset\n• لا يمكن تعيين جوانب فردية\n• ضروري للوصولية: لا تزل :focus outlines بدون بديل!\n• استخدم :focus-visible بدلاً من :focus.",
    examples: [{ title: "Outline vs Border", html: '<button class="outline-demo o1">Focus Me (Tab)</button>\n<div class="outline-demo o2">Outline with offset</div>\n<div class="outline-demo o3">Border (takes space)</div>', css: '.outline-demo { padding: 12px 24px; margin: 8px; display: inline-block; font-size: 14px; border-radius: 6px; background: var(--bg-tertiary, #e8ebf3); }\n.o1:focus { outline: 3px solid #6366f1; outline-offset: 3px; }\n.o2 { outline: 3px dashed #06b6d4; outline-offset: 8px; }\n.o3 { border: 3px solid #f59e0b; }' }],
    whyMatters: "Outlines are essential for accessibility — they show which element has keyboard focus. Never remove outlines without providing an alternative focus indicator.",
    whyMattersAr: "الإطارات الخارجية ضرورية لسهولة الوصول — تُظهر العنصر الذي يركز عليه لوحة المفاتيح.",
    commonMistakes: [
      { wrong: "Removing outlines for aesthetics:\n*:focus { outline: none; }", correct: "Replace with custom focus styles:\n*:focus-visible { outline: 3px solid #6366f1; outline-offset: 2px; }" },
      { wrong: "Thinking outline affects layout", correct: "Outline does NOT affect layout — it overlaps nearby content" }
    ],
    goodVsBad: { bad: "* { outline: none; } /* removes accessibility */", good: "*:focus-visible {\n  outline: 3px solid #6366f1;\n  outline-offset: 2px;\n}" },
    exercises: ["Add an outline to a button on focus.", "Use outline-offset to create space between outline and element.", "Compare outline and border behavior.", "Use :focus-visible for keyboard-only focus.", "Style form inputs with custom outlines."],
    challenges: ["Create accessible focus indicators for all interactive elements.", "Build a form with clear visual focus management."],
    mcqs: [
      { q: "Outline occupies space?", options: ["Yes", "No", "Only outline-offset", "Same as border"], answer: 1 },
      { q: "outline: none is bad for?", options: ["Performance", "Accessibility", "Layout", "Colors"], answer: 1 },
      { q: ":focus-visible applies when?", options: ["Always", "On mouse click", "On keyboard focus", "Never"], answer: 2 },
      { q: "outline-offset creates?", options: ["Space between outline and border", "Thicker outline", "Colored space", "Nothing"], answer: 0 },
      { q: "Can outline have border-radius?", options: ["Yes in modern browsers", "No never", "Only in Firefox", "Only circles"], answer: 0 },
      { q: "Default outline style?", options: ["solid", "none", "dotted", "Browser default"], answer: 3 },
      { q: "Outline is drawn?", options: ["Inside padding", "Between padding and border", "Outside border", "Inside border"], answer: 2 },
      { q: "outline shorthand order?", options: ["width style color", "color style width", "Any order", "style only"], answer: 2 },
      { q: "Can outline be on one side only?", options: ["Yes", "No, it's always all sides", "Only top", "Only bottom"], answer: 1 },
      { q: "Tab key navigates?", options: ["All elements", "Focusable elements", "Only inputs", "Only buttons"], answer: 1 }
    ]
  },
  {
    id: 15, title: "Flexbox", titleAr: "فليكس بوكس (Flexbox)",
    explanation: "Flexbox is a one-dimensional layout model. Container: display: flex, flex-direction, justify-content, align-items, flex-wrap, gap. Items: flex-grow, flex-shrink, flex-basis, order, align-self.",
    explanationAr: "فليكس بوكس هو نموذج تخطيط أحادي البعد لتوزيع المساحة. خصائص الحاوية: flex-direction, justify-content, align-items, flex-wrap, gap.",
    examples: [{ title: "Flexbox Layout", html: '<div class="flex-demo"><div class="flex-item">1</div><div class="flex-item">2</div><div class="flex-item">3</div></div>', css: '.flex-demo { display: flex; gap: 12px; padding: 15px; background: #f0f2f8; border-radius: 8px; justify-content: space-between; }\n.flex-item { background: #6366f1; color: #fff; padding: 20px 30px; border-radius: 8px; font-weight: 700; flex: 1; text-align: center; }' }],
    whyMatters: "Flexbox solves vertical centering, equal-height columns, and space distribution elegantly.",
    whyMattersAr: "فليكس بوكس يحل مشاكل التوسيط العمودي والأعمدة متساوية الارتفاع.",
    commonMistakes: [{ wrong: "Forgetting flex-wrap: wrap", correct: "Add flex-wrap: wrap for responsive layouts" }, { wrong: "Using margin for flex gaps", correct: "Use the gap property" }],
    goodVsBad: { bad: ".item { width: 33.33%; float: left; }", good: ".container { display: flex; gap: 20px; }\n.item { flex: 1; }" },
    exercises: ["Center an element with Flexbox.", "Create card row with flex-wrap.", "Use flex-grow.", "Use flex-direction: column.", "Reorder items with order."],
    challenges: ["Build a responsive nav with Flexbox.", "Create holy grail layout with Flexbox."],
    mcqs: [
      { q: "display: flex creates?", options: ["Block", "Flex container", "Grid", "Inline"], answer: 1 },
      { q: "justify-content aligns on?", options: ["Cross axis", "Main axis", "Both", "Neither"], answer: 1 },
      { q: "align-items aligns on?", options: ["Main axis", "Cross axis", "Both", "Z axis"], answer: 1 },
      { q: "flex: 1 shorthand for?", options: ["flex-grow:1", "grow:1 shrink:1 basis:0", "basis:1", "All"], answer: 1 },
      { q: "flex-wrap: wrap does?", options: ["Prevents wrapping", "Wraps to next line", "Stretches", "Hides"], answer: 1 },
      { q: "gap works in Flexbox?", options: ["No", "Yes", "Grid only", "No"], answer: 1 },
      { q: "Default flex-direction?", options: ["column", "row", "row-reverse", "column-reverse"], answer: 1 },
      { q: "align-self overrides?", options: ["justify-content", "align-items", "direction", "gap"], answer: 1 },
      { q: "flex-shrink controls?", options: ["Growing", "Shrinking", "Order", "Alignment"], answer: 1 },
      { q: "Center both axes?", options: ["justify+align center", "margin auto", "Both work", "Neither"], answer: 2 }
    ]
  },
  {
    id: 16, title: "CSS Grid", titleAr: "شبكة CSS (Grid)",
    explanation: "CSS Grid is a two-dimensional layout. Define rows/columns with grid-template-columns/rows. Place items with grid-column/row. Use fr, repeat(), minmax(), auto-fill/auto-fit. Named areas with grid-template-areas.",
    explanationAr: "شبكة CSS نظام تخطيط ثنائي الأبعاد. حدد الصفوف والأعمدة باستخدام grid-template-columns/rows.",
    examples: [{ title: "Grid Layout", html: '<div class="grid-demo"><div class="gi gi1">Header</div><div class="gi gi2">Side</div><div class="gi gi3">Main</div><div class="gi gi4">Footer</div></div>', css: '.grid-demo { display: grid; grid-template-columns: 200px 1fr; grid-template-rows: auto 1fr auto; gap: 10px; min-height: 200px; }\n.gi { background: #6366f1; color: #fff; padding: 15px; border-radius: 6px; font-weight: 600; }\n.gi1 { grid-column: 1/-1; background: #06b6d4; }\n.gi2 { background: #f59e0b; }\n.gi4 { grid-column: 1/-1; background: #10b981; }' }],
    whyMatters: "Grid handles complex 2D layouts that would need nested Flexbox, making code simpler.",
    whyMattersAr: "الشبكة تتعامل مع التخطيطات ثنائية الأبعاد المعقدة.",
    commonMistakes: [{ wrong: "Hardcoding columns: 1fr 1fr 1fr", correct: "Use repeat(auto-fit, minmax(250px, 1fr))" }, { wrong: "Using Grid for simple row", correct: "Use Flexbox for 1D, Grid for 2D" }],
    goodVsBad: { bad: ".grid { grid-template-columns: 300px 300px 300px; }", good: ".grid { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }" },
    exercises: ["Create a 3-column grid.", "Use grid-template-areas.", "Span item across columns.", "Responsive grid with auto-fit.", "Use fr units."],
    challenges: ["Full page layout with grid-template-areas.", "Responsive image gallery with varying sizes."],
    mcqs: [
      { q: "fr unit means?", options: ["Fixed ratio", "Fractional unit", "Font ratio", "Frame"], answer: 1 },
      { q: "grid-column: 1/-1 spans?", options: ["One col", "All columns", "Half", "None"], answer: 1 },
      { q: "repeat(3, 1fr)?", options: ["1 column", "3 equal columns", "3 rows", "3fr"], answer: 1 },
      { q: "grid-template-areas uses?", options: ["Numbers", "Named strings", "Classes", "IDs"], answer: 1 },
      { q: "auto-fit vs auto-fill?", options: ["Same", "auto-fit collapses empty tracks", "auto-fill collapses", "No diff"], answer: 1 },
      { q: "minmax(200px, 1fr)?", options: ["200px fixed", "Min 200px, max flexible", "Max 200px", "Both"], answer: 1 },
      { q: "gap in Grid?", options: ["Margin", "Space between tracks", "Padding", "Border"], answer: 1 },
      { q: "Grid vs Flexbox?", options: ["Same", "Grid 2D, Flex 1D", "Flex 2D", "Grid deprecated"], answer: 1 },
      { q: "grid-auto-flow: dense?", options: ["Removes gaps", "Fills holes", "Compresses", "Deletes"], answer: 1 },
      { q: "display: inline-grid?", options: ["Invalid", "Inline-level grid container", "Same as grid", "Block grid"], answer: 1 }
    ]
  },
  {
    id: 17, title: "CSS Transforms", titleAr: "التحويلات (Transforms)",
    explanation: "Transforms modify elements visually without affecting layout: translate(), rotate(), scale(), skew(), matrix(). Use transform-origin for pivot. 3D: perspective(), rotateX/Y/Z().",
    explanationAr: "التحويلات تعدل العناصر بصرياً دون التأثير على التخطيط: translate(), rotate(), scale(), skew().",
    examples: [{ title: "Transforms", html: '<div class="tf-row"><div class="tf-box tf1">Translate</div><div class="tf-box tf2">Rotate</div><div class="tf-box tf3">Scale ⟵hover</div><div class="tf-box tf4">Skew</div></div>', css: '.tf-row { display: flex; gap: 15px; flex-wrap: wrap; padding: 20px; }\n.tf-box { width: 100px; height: 100px; background: #6366f1; color: #fff; display: flex; align-items: center; justify-content: center; border-radius: 8px; font-size: 12px; font-weight: 600; transition: transform 0.3s; }\n.tf1 { transform: translateX(20px); }\n.tf2 { transform: rotate(15deg); }\n.tf3:hover { transform: scale(1.2); }\n.tf4 { transform: skewX(-10deg); }' }],
    whyMatters: "Transforms are GPU-accelerated for smooth animations and hover effects.",
    whyMattersAr: "التحويلات يتم تسريعها بواسطة GPU للرسوم المتحركة السلسة.",
    commonMistakes: [{ wrong: "Animating width/height (causes reflow)", correct: "Use transform: translate() instead" }, { wrong: "Forgetting transform-origin", correct: "Set transform-origin for correct pivot" }],
    goodVsBad: { bad: ".box:hover { left: 20px; }", good: ".box:hover { transform: translateX(20px); }" },
    exercises: ["Use translateX/Y.", "Rotate 45 degrees.", "Scale on hover.", "Combine transforms.", "Change transform-origin."],
    challenges: ["3D card flip on hover.", "Rotating cube with 3D transforms."],
    mcqs: [
      { q: "translateX(50px) moves?", options: ["Down", "Right 50px", "Up", "Left"], answer: 1 },
      { q: "scale(2) does?", options: ["Moves", "Doubles size", "Halves", "Rotates"], answer: 1 },
      { q: "Transform affects layout?", options: ["Yes", "No (visual only)", "Only translate", "Only scale"], answer: 1 },
      { q: "transform-origin default?", options: ["top left", "center", "0 0", "bottom right"], answer: 1 },
      { q: "rotate(360deg)?", options: ["Quarter", "Half", "Full rotation", "None visually"], answer: 2 },
      { q: "Combine transforms?", options: ["No", "Yes, space-separated", "Only two", "Commas"], answer: 1 },
      { q: "translate(-50%,-50%) for?", options: ["Off-screen", "Centering", "Scaling", "Rotating"], answer: 1 },
      { q: "skew() does?", options: ["Rotates", "Shears element", "Scales", "Moves"], answer: 1 },
      { q: "Transforms are?", options: ["CPU heavy", "GPU accelerated", "JS only", "Deprecated"], answer: 1 },
      { q: "perspective() for?", options: ["2D", "3D depth", "Color", "Size"], answer: 1 }
    ]
  },
  {
    id: 18, title: "Transitions & Animations", titleAr: "الانتقالات والرسوم المتحركة",
    explanation: "Transitions smoothly animate property changes. Animations use @keyframes for multi-step effects with control over iteration, direction, fill-mode, and timing.",
    explanationAr: "الانتقالات تحرك تغييرات الخصائص بسلاسة. الرسوم المتحركة تستخدم @keyframes للتأثيرات متعددة الخطوات.",
    examples: [{ title: "Transition & Animation", html: '<button class="trans-btn">Hover Me</button>\n<div class="anim-box">Bouncing</div>', css: '.trans-btn { padding: 12px 30px; background: #6366f1; color: #fff; border: none; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; }\n.trans-btn:hover { background: #4f46e5; transform: translateY(-3px); box-shadow: 0 8px 25px rgba(99,102,241,0.4); }\n.anim-box { display: inline-block; padding: 15px 25px; background: #06b6d4; color: #fff; border-radius: 8px; font-weight: 600; animation: bounce 1s ease infinite; margin-left: 15px; }\n@keyframes bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }' }],
    whyMatters: "Subtle transitions make interfaces feel polished and professional.",
    whyMattersAr: "الانتقالات الدقيقة تجعل الواجهات تبدو مصقولة واحترافية.",
    commonMistakes: [{ wrong: "transition: all 0.3s (animates everything)", correct: "Be specific: transition: transform 0.3s, opacity 0.3s;" }, { wrong: "Animations too slow", correct: "200-300ms for UI, 500-1000ms for attention" }],
    goodVsBad: { bad: "transition: all 2s linear;", good: "transition: transform 0.3s ease, opacity 0.3s ease;" },
    exercises: ["Add hover transition.", "Create fadeIn keyframe.", "Use animation-delay.", "Custom cubic-bezier.", "Infinite loading animation."],
    challenges: ["Notification toast slide-in.", "Multi-step onboarding animation."],
    mcqs: [
      { q: "Transition needs?", options: ["Keyframes", "Property change trigger", "JS", "Timer"], answer: 1 },
      { q: "iteration-count: infinite?", options: ["Once", "Loops forever", "Invalid", "Twice"], answer: 1 },
      { q: "ease is?", options: ["Duration", "Delay", "Timing function", "Property"], answer: 2 },
      { q: "fill-mode: forwards?", options: ["Resets", "Keeps final state", "Reverses", "Pauses"], answer: 1 },
      { q: "@keyframes defines?", options: ["Transitions", "Animation steps", "Selectors", "Variables"], answer: 1 },
      { q: "Pause animations?", options: ["No", "animation-play-state", "Only JS", "Reset"], answer: 1 },
      { q: "Best to animate?", options: ["width/height", "transform/opacity", "margin", "top/left"], answer: 1 },
      { q: "transition: none?", options: ["Default", "Removes transitions", "Instant", "Invalid"], answer: 1 },
      { q: "direction: alternate?", options: ["Forward only", "Forward then backward", "Backward", "Random"], answer: 1 },
      { q: "prefers-reduced-motion?", options: ["CSS prop", "Media query", "JS API", "Anim type"], answer: 1 }
    ]
  },
  {
    id: 19, title: "Media Queries & Responsive", titleAr: "استعلامات الوسائط والتصميم المتجاوب",
    explanation: "Media queries apply CSS based on device characteristics. Mobile-first uses min-width. Desktop-first uses max-width. Common breakpoints: 480px, 768px, 1024px, 1200px.",
    explanationAr: "استعلامات الوسائط تطبق CSS بناءً على خصائص الجهاز. النهج المحمول أولاً يستخدم min-width.",
    examples: [{ title: "Responsive Box", html: '<div class="resp-box">Resize browser: purple→gold→red</div>', css: '.resp-box { padding: 25px; background: #6366f1; color: #fff; border-radius: 8px; text-align: center; font-weight: 600; transition: background 0.3s; }\n@media (max-width: 768px) { .resp-box { background: #f59e0b; } }\n@media (max-width: 480px) { .resp-box { background: #e06c75; font-size: 14px; } }' }],
    whyMatters: "Over 50% of web traffic is mobile. Responsive design is mandatory.",
    whyMattersAr: "أكثر من 50% من حركة الويب من الهواتف. التصميم المتجاوب إلزامي.",
    commonMistakes: [{ wrong: "Targeting specific devices: @media (width: 375px)", correct: "Use ranges: @media (max-width: 768px)" }, { wrong: "Forgetting viewport meta tag", correct: "Always add <meta name='viewport' content='width=device-width, initial-scale=1'>" }],
    goodVsBad: { bad: "@media (max-width: 1200px) { } @media (max-width: 800px) { }", good: "/* Mobile first */\n@media (min-width: 768px) { }\n@media (min-width: 1024px) { }" },
    exercises: ["Media query for <768px.", "min-width mobile-first.", "Change layout on mobile.", "Hide element on small screens.", "prefers-color-scheme dark mode."],
    challenges: ["Responsive hamburger nav.", "Dashboard with collapsing sidebar."],
    mcqs: [
      { q: "Mobile-first uses?", options: ["max-width", "min-width", "exact-width", "device-width"], answer: 1 },
      { q: "Common tablet breakpoint?", options: ["480px", "768px", "1024px", "1440px"], answer: 1 },
      { q: "orientation: landscape checks?", options: ["Width > height", "Height > width", "Rotation", "Window"], answer: 0 },
      { q: "viewport meta for?", options: ["SEO", "Proper mobile scaling", "Performance", "Security"], answer: 1 },
      { q: "Combine media queries?", options: ["No", "Yes with 'and'", "Only JS", "Only two"], answer: 1 },
      { q: "prefers-reduced-motion for?", options: ["Speed", "Accessibility", "Performance", "Layout"], answer: 1 },
      { q: "prefers-color-scheme: dark?", options: ["Forces dark", "Detects user pref", "Changes browser", "Invalid"], answer: 1 },
      { q: "@media print?", options: ["3D printers", "Print stylesheets", "Screen print", "PDF"], answer: 1 },
      { q: "Container queries?", options: ["Same as media", "Based on container size", "Deprecated", "JS only"], answer: 1 },
      { q: "Best breakpoint practice?", options: ["Target devices", "Content-based", "Use one", "Avoid"], answer: 1 }
    ]
  },
  {
    id: 20, title: "CSS Variables & Global Values", titleAr: "متغيرات CSS والقيم العامة",
    explanation: "CSS custom properties (--name) store reusable values via var(). Global values: inherit, initial, unset, revert. Build frameworks with utility classes for spacing, colors, typography.",
    explanationAr: "خصائص CSS المخصصة (--name) تخزن قيماً قابلة لإعادة الاستخدام. القيم العامة: inherit, initial, unset, revert.",
    examples: [{ title: "CSS Variables", html: '<div class="var-row"><div class="var-card">Primary</div><div class="var-card alt">Alt Theme</div></div>', css: ':root { --card-bg: #6366f1; --card-text: #fff; --radius: 12px; }\n.var-row { display: flex; gap: 15px; }\n.var-card { background: var(--card-bg); color: var(--card-text); padding: 20px; border-radius: var(--radius); font-weight: 600; flex: 1; text-align: center; }\n.var-card.alt { --card-bg: #06b6d4; }' }],
    whyMatters: "CSS variables enable theming and DRY code. Building frameworks teaches systematic design thinking.",
    whyMattersAr: "متغيرات CSS تمكن السمات والكود الغير مكرر.",
    commonMistakes: [{ wrong: "Defining vars in local scope", correct: "Define globals in :root, override locally" }, { wrong: "Confusing inherit/initial/unset", correct: "inherit=parent, initial=spec default, unset=inherit if inheritable else initial" }],
    goodVsBad: { bad: ".btn { background: #6366f1; }\n.header { background: #6366f1; }", good: ":root { --primary: #6366f1; }\n.btn, .header { background: var(--primary); }" },
    exercises: ["Define and use CSS variables.", "Theme switcher with variables.", "var() with fallback.", "inherit vs initial vs unset.", "Build utility classes."],
    challenges: ["Build mini CSS framework.", "Dark/light theme with CSS variables."],
    mcqs: [
      { q: "CSS variables start with?", options: ["$", "--", "@", "var"], answer: 1 },
      { q: "var(--color, red) — red is?", options: ["Value", "Fallback", "Override", "Error"], answer: 1 },
      { q: ":root defines?", options: ["Body", "Global scope", "Local", "HTML"], answer: 1 },
      { q: "inherit takes from?", options: ["Browser", "Parent", "Root", "Sibling"], answer: 1 },
      { q: "initial resets to?", options: ["Parent", "CSS spec default", "Zero", "Browser default"], answer: 1 },
      { q: "unset acts as?", options: ["Always initial", "inherit or initial", "Always inherit", "Reset"], answer: 1 },
      { q: "Change CSS vars with JS?", options: ["No", "Yes", "Only :root", "Only strings"], answer: 1 },
      { q: "CSS variables are?", options: ["Compiled", "Runtime/dynamic", "Static", "Preprocessor"], answer: 1 },
      { q: "revert restores to?", options: ["Initial", "Browser default", "Parent", "None"], answer: 1 },
      { q: "CSS framework provides?", options: ["JS logic", "Reusable CSS utilities", "DB access", "Server"], answer: 1 }
    ]
  }
];
window.lessonsData = lessonsData;
