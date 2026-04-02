// Phase 3 — Variables & Data Types
const PHASES_3 = [
    {
        id: 'p3', title: 'Phase 3 — Variables & Data Types', lessons: [
            {
                id: 'p3l1', title: 'Variables & Naming',
                en: 'Imagine you are moving houses. You put items into <strong>Boxes</strong> and write <strong>Labels</strong> on them. In programming, these boxes are "Variables" and the labels are "Variable Names."<br><br>\n<strong>Professional Naming (lowerCamelCase):</strong>\n<div class="feature-grid">\n  <div class="feature-card"><h5>📉 Start Small</h5><p>Always start with a small letter: <code>userAge</code>, not <code>UserAge</code>.</p></div>\n  <div class="feature-card"><h5>🐫 Camel Case</h5><p>If there are two words, capitalize the second one: <code>totalScore</code>.</p></div>\n  <div class="feature-card"><h5>📝 Be Descriptive</h5><p>Choose names like <code>price</code>, which are better than just <code>p</code>.</p></div>\n</div>',
                ar: 'تخيل أنك تنتقل لمنزل جديد. تضع الأشياء في <strong>صناديق</strong> وتكتب عليها <strong>ملصقات</strong>. في البرمجة، هذه الصناديق هي "المتغيرات" والملصقات هي "أسماء المتغيرات".<br><br>\n<strong>قواعد التسمية الاحترافية (lowerCamelCase):</strong>\n<div class="feature-grid">\n  <div class="feature-card"><h5>📉 ابدأ بحرف صغير</h5><p>ابدأ دائماً بحرف صغير: <code>userAge</code>، وليس <code>UserAge</code>.</p></div>\n  <div class="feature-card"><h5>🐫 سنام الجمل</h5><p>إذا كان هناك كلمتان، كبّر حرف الكلمة الثانية: <code>totalScore</code>.</p></div>\n  <div class="feature-card"><h5>📝 كن وصفياً</h5><p>اختر أسماء واضحة مثل <code>price</code>، فهي أفضل بكثير من مجرد <code>p</code>.</p></div>\n</div>',
                examples: [
                    { level: 'Beginner', code: 'void main() {\n  var name = "Dart"; // Inferred as String\n  int age = 13; // Explicitly defined\n  print("$name is $age years old.");\n}', desc: 'Declaring variables with inference and explicit types.', descAr: 'تعريف المتغيرات باستخدام الاستنتاج والأنواع الصريحة.' },
                    { level: 'Intermediate', code: '// Naming Examples:\nvar loginAttempts = 3; // Good\nvar l = 3; // Bad (not descriptive)', desc: 'Professional naming conventions.', descAr: 'اصطلاحات التسمية الاحترافية.' }
                ],
                why: 'Clear variable names act as "self-documenting code," making it easy for others (and your future self) to understand your logic.',
                whyAr: 'أسماء المتغيرات الواضحة تعمل بمثابة "كود يوثق نفسه"، مما يسهل على الآخرين (وعلى نفسك مستقبلاً) فهم منطقك.',
                mistakes: [
                    { bad: 'var 1stPlace = "Ahmed"; // Starts with number', good: 'var firstPlace = "Ahmed";', badAr: 'var 1stPlace = "Ahmed"; // يبدأ برقم', goodAr: 'var firstPlace = "Ahmed";' }
                ],
                goodVsBad: { bad: 'var a = 100; // What is 100?', good: 'var maxFuelCapacity = 100; // Crystal clear' },
                mcqs: [
                    { q: 'Which characters are allowed in variable names?', opts: ['Letters, digits, underscores, and $', 'Only letters', 'Letters and spaces', 'Letters and emojis'], ans: 0, fb: 'Names can include alphanumeric characters, underscores, and dollar signs.' }
                ],
                codingQs: [
                    { q: 'Create a variable using "var" named "userScore" and set it to 100.', start: '', answer: 'var userScore = 100' },
                    { q: 'Write a variable name for "player name" using the correct lowerCamelCase.', start: 'String ', answer: 'playerName' }
                ]
            },
            {
                id: 'p3l2', title: 'Data Types Deep Dive',
                en: 'Just like you wouldn\'t put soup in a cardboard box, you shouldn\'t put a decimal number in an "int" box. Dart has specific containers for your data:<br><br>\n<div class="feature-grid">\n  <div class="feature-card"><h5>🔢 int</h5><p>For whole numbers. (e.g., Age: 25, Goals: 3)</p></div>\n  <div class="feature-card"><h5>📡 double</h5><p>For numbers with decimals. (e.g., Price: 19.99)</p></div>\n  <div class="feature-card"><h5>🔤 String</h5><p>For text and characters. (e.g., Name: "Ali")</p></div>\n  <div class="feature-card"><h5>✔️ bool</h5><p>For true/false logic. (e.g., isLoggedIn: true)</p></div>\n</div>\n<strong>Tip:</strong> Use <code>num</code> if you want a box that can hold BOTH int and double.',
                ar: 'تماماً كما أنك لن تضع الحساء في صندوق كرتوني، لا يجب وضع رقم عشري في صندوق "int". لغة Dart لديها حاويات محددة لبياناتك:<br><br>\n<div class="feature-grid">\n  <div class="feature-card"><h5>🔢 int</h5><p>للأرقام الصحيحة (مثل: العمر: 25، الأهداف: 3).</p></div>\n  <div class="feature-card"><h5>📡 double</h5><p>للأرقام بفاصلة عشرية (مثل: السعر: 19.99).</p></div>\n  <div class="feature-card"><h5>🔤 String</h5><p>للنصوص والكلام (مثل: الاسم: "علي").</p></div>\n  <div class="feature-card"><h5>✔️ bool</h5><p>للأسئلة المنطقية صح/خطأ (مثل: isLoggedIn: true).</p></div>\n</div>\n<strong>نصيحة:</strong> استخدم <code>num</code> إذا كنت تريد صندوقاً يحمل كلاً من int و double.',
                examples: [
                    { level: 'Beginner', code: 'int age = 25;\ndouble temp = 36.6;\nnum score = 95; // Can be int or double\nString name = "Ibrahim";\nbool isReady = true;', desc: 'Basic types in action.', descAr: 'الأنواع الأساسية أثناء العمل.' },
                    { level: 'Intermediate', code: 'String message = "Hello, $name!\\nYour score is ${score + 5}.";\nprint(message);', desc: 'Using interpolation and escape characters.', descAr: 'استخدام الدمج وأحرف الهروب.' }
                ],
                why: 'Choosing the right data type is like choosing the right container for storage. It prevents bugs and makes your code run efficiently.',
                whyAr: 'اختيار نوع البيانات الصحيح يشبه اختيار الحاوية الصحيحة للتخزين. يمنع الأخطاء ويجعل كودك يعمل بكفاءة.',
                mistakes: [
                    { bad: 'var price = "10"; // It\'s a String, can\'t do math!', good: 'double price = 10.0;', badAr: 'var price = "10"; // هذا نص، لا يمكن إجراء حسابيات عليه!', goodAr: 'double price = 10.0;' }
                ],
                goodVsBad: { bad: 'print("Result: " + x.toString()); // Old way', good: 'print("Result: $x"); // Modern Dart way' },
                mcqs: [
                    { q: 'What is the main difference between int and double?', opts: ['int is faster', 'int is for whole numbers, double for decimals', 'double uses less memory', 'There is no difference'], ans: 1, fb: 'int (integer) handles whole numbers like 5; double handles decimals like 5.5.' }
                ],
                codingQs: [
                    { q: 'Create a "double" variable named "pi" set to 3.14159.', start: '', answer: 'double pi = 3.14159' },
                    { q: 'Create a "String" variable named "city" set to "Cairo".', start: '', answer: 'String city = "Cairo"' }
                ]
            },
            {
                id: 'p3l3', title: 'var / dynamic / final / const',
                en: 'How do you tell the computer if a value can be changed? Dart provides several ways to define variables:<br><br>\n<div class="feature-grid">\n  <div class="feature-card"><h5>📦 var</h5><p>Flexible. You can change the value later, but the "type" must stay the same.</p></div>\n  <div class="feature-card"><h5>🪄 dynamic</h5><p>Magic. You can change BOTH the value and the type anytime. (Use with caution!)</p></div>\n  <div class="feature-card"><h5>🔒 final</h5><p>Locked at runtime. Once set, it cannot be changed. Set when the app is running.</p></div>\n  <div class="feature-card"><h5>🧊 const</h5><p>Locked at compile-time. Set before the app starts. Faster and safer for constants.</p></div>\n</div>',
                ar: 'كيف تخبر الكمبيوتر إذا كان يمكن تغيير القيمة أم لا؟ توفر Dart عدة طرق لتعريف المتغيرات:<br><br>\n<div class="feature-grid">\n  <div class="feature-card"><h5>📦 var</h5><p>مرن. يمكنك تغيير القيمة لاحقاً، لكن "النوع" يجب أن يبقى كما هو.</p></div>\n  <div class="feature-card"><h5>🪄 dynamic</h5><p>سحري. يمكنك تغيير القيمة والنوع في أي وقت. (استخدمه بحذر!)</p></div>\n  <div class="feature-card"><h5>🔒 final</h5><p>مقفل عند التشغيل. بمجرد تحديده، لا يمكن تغييره. يتم تحديده أثناء عمل التطبيق.</p></div>\n  <div class="feature-card"><h5>🧊 const</h5><p>مقفل عند البرمجة. يتم تحديده قبل بدء التطبيق. أسرع وأكثر أماناً للثوابت.</p></div>\n</div>',
                examples: [
                    { level: 'Beginner', code: 'final name = "Ahmed";\nconst pi = 3.14;', desc: 'Using final and const.', descAr: 'استخدام final و const.' },
                    { level: 'Intermediate', code: 'dynamic value = 10;\nvalue = "Hello"; // allowed', desc: 'dynamic can change types.', descAr: 'dynamic يمكن أن يغير الأنواع.' },
                    { level: 'Advanced', code: 'final now = DateTime.now();\n// const now = DateTime.now(); // Error! Need result now.', desc: 'final vs const with runtime values.', descAr: 'final مقابل const مع قيم وقت التشغيل.' }
                ],
                why: 'Using final and const improves performance and prevents accidental changes.',
                whyAr: 'استخدام final و const يحسن الأداء ويمنع التغييرات العرضية.',
                mistakes: [
                    { bad: 'Using var for everything', good: 'Use final by default if the value doesn\'t change', badAr: 'استخدام var لكل شيء', goodAr: 'استخدم final بشكل افتراضي إذا كانت القيمة لا تتغير' }
                ],
                goodVsBad: { bad: 'var pi = 3.14;', good: 'const pi = 3.14;' },
                mcqs: [
                    { q: 'Can a "const" variable be assigned using DateTime.now()?', opts: ['Yes', 'No', 'Only on Sundays', 'Only if it is a String'], ans: 1, fb: 'No, because DateTime.now() is calculated at runtime, not compile-time.' }
                ],
                codingQs: [
                    { q: 'Declare a "const" variable for the "gravity" value 9.8.', start: '', answer: 'const gravity = 9.8' },
                    { q: 'Declare a "final" variable for the current "userName".', start: '', answer: 'final userName' }
                ]
            }
        ]
    }
];
