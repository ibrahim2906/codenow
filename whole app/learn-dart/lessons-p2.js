// Phase 2 (continued) - Lesson Data
const PHASES_2B_6 = [
    {
        id: 'p2',
        title: 'Phase 2 — Dart Introduction',
        lessons: [
            {
                id: 'p2l2',
                title: 'Why Dart Exists',
                en: 'Why did Google create Dart when languages like Java or Python already existed? To solve the "UI Paradox." Developers love fast development (seeing changes instantly), but users love fast performance (smooth apps). Usually, you can only have one. Dart gives you both!\n\n1. UI Optimized: It handles creating and destroying small items (widgets) extremely fast.\n2. Multi-Platform: It can speak "JavaScript" for web browsers and "Binary" for phone processors.\n3. Productive: It allows for "Hot Reload," meaning you can change your app\'s code and see the result in less than a second without restarting.',
                ar: 'لماذا أنشأت Google لغة Dart بينما كانت لغات مثل Java أو Python موجودة بالفعل؟ لحل "تناقض واجهة المستخدم". يحب المطورون التطوير السريع (رؤية التغييرات فوراً)، لكن المستخدمين يحبون الأداء السريع (تطبيقات سلسة). عادةً، يمكنك الحصول على واحد فقط. Dart تمنحك كليهما!\n\n1. محسنة لواجهة المستخدم: تتعامل مع إنشاء وتدمير العناصر الصغيرة (الـ widgets) بسرعة فائقة.\n2. متعددة المنصات: يمكنها التحدث بلغة "JavaScript" لمتصفحات الويب و "Binary" لمعالجات الهاتف.\n3. إنتاجية: تسمح بميزة "Hot Reload"، مما يعني أنه يمكنك تغيير كود تطبيقك ورؤية النتيجة في أقل من ثانية دون إعادة التشغيل.',
                examples: [
                    {
                        level: 'Beginner',
                        code: '// Dart Targets:\n// 1. Mobile (iOS/Android)\n// 2. Web (Chrome/Safari)\n// 3. Desktop (Windows/Mac/Linux)\n// 4. Server (Backend)',
                        desc: 'One language, every platform.',
                        descAr: 'لغة واحدة، لكل المنصات.'
                    },
                    {
                        level: 'Intermediate',
                        code: 'void main() {\n  // Dart is "Soundly Typed"\n  // This means it catches type errors before you ship!\n  int score = 100;\n  // score = "A"; // Error: Cannot put string in int\n}',
                        desc: 'Type safety makes apps more stable.',
                        descAr: 'أمان الـ Types يجعل التطبيقات أكثر استقراراً.'
                    }
                ],
                why: 'Understanding the "Why" helps you see that Dart isn\'t just another language—it\'s a tool specifically crafted for modern app development.',
                whyAr: 'فهم "لماذا" يساعدك على رؤية أن Dart ليست مجرد لغة أخرى — إنها أداة مصممة خصيصاً لتطوير التطبيقات الحديثة.',
                mistakes: [
                    {
                        bad: 'Thinking Dart is only for Flutter',
                        good: 'Dart is a general-purpose language used for many things',
                        badAr: 'الاعتقاد أن Dart فقط لـ Flutter',
                        goodAr: 'Dart هي لغة للأغراض العامة وتستخدم لأشياء كثيرة'
                    }
                ],
                goodVsBad: {
                    bad: '// JavaScript (Dynamic/Loose)\nlet x = 10;\nx = "Ten"; // No error, but might crash later',
                    good: '// Dart (Sound/Strict)\nint x = 10;\n// x = "Ten"; // Error caught immediately!'
                },
                mcqs: [
                    {
                        q: 'What makes Dart unique for UI development?',
                        opts: ['Only one platform', 'Both JIT and AOT compilation', 'It is older than Java', 'It only works on Windows'],
                        ans: 1,
                        fb: 'The dual-compilation (JIT + AOT) is Dart\'s unique advantage for UI.'
                    },
                    {
                        q: 'Which compilation mode allows sub-second hot reload?',
                        opts: ['AOT', 'JIT', 'Bytecode', 'Binary'],
                        ans: 1,
                        fb: 'JIT enables hot reload during development.'
                    },
                    {
                        q: 'What is the "UI Paradox" Dart aims to solve?',
                        opts: ['Fast dev vs Fast perf', 'White vs Dark mode', 'Small vs Large icons', 'Arabic vs English'],
                        ans: 0,
                        fb: 'Dart solves the conflict between fast development cycles and high runtime performance.'
                    },
                    {
                        q: 'What does "Soundly Typed" mean?',
                        opts: ['It makes noise', 'It catches type errors at compile time', 'It only accepts strings', 'It allows changing types anytime'],
                        ans: 1,
                        fb: 'Type safety (soundness) prevents many errors before the app even runs.'
                    },
                    {
                        q: 'Which of these is NOT a primary target platform for Dart?',
                        opts: ['Mobile', 'Web', 'Desktop', 'Microwave Ovens'],
                        ans: 3,
                        fb: 'While versatile, Dart targets Mobile, Web, and Desktop primarily.'
                    }
                ],
                codingQs: [
                    { q: 'Write a print statement that says "Dart targets Web and Mobile".', start: '', answer: 'print' },
                    { q: 'Write a variable declaration for an integer "count" with value 10.', start: '', answer: 'int count = 10' }
                ],
                codingChallenge: {
                    task: 'Write a Dart 3 "Hello" message to verify your setup. Just use the "print" keyword.',
                    answer: 'print',
                    solution: 'void main() => print("Hello Dart 3!");'
                }
            },
            {
                id: 'p2l3',
                title: 'Installing Dart',
                en: 'Getting Dart onto your computer is like setting up a workbench before starting a project. You have two main ways:\n1. The Dart SDK: This is just the language itself. Great for learning and building command-line tools.\n2. The Flutter SDK: If you plan to build mobile apps, installing Flutter is the best way because it includes the Dart SDK automatically!\n\nYou can find everything you need at dart.dev or flutter.dev.',
                ar: 'الحصول على Dart على جهاز الكمبيوتر الخاص بك يشبه إعداد طاولة العمل قبل بدء مشروع. لديك طريقتان رئيسيتان:\n1. Dart SDK: هذه هي اللغة نفسها فقط. رائعة للتعلم وبناء أدوات سطر الأوامر.\n2. Flutter SDK: إذا كنت تخطط لبناء تطبيقات الهاتف، فإن تثبيت Flutter هو أفضل طريقة لأنه يتضمن Dart SDK تلقائياً!\n\nيمكنك العثور على كل ما تحتاجه في dart.dev أو flutter.dev.',
                examples: [
                    {
                        level: 'Beginner',
                        code: '// Windows:\n// choco install dart-sdk\n\n// Mac:\n// brew install dart',
                        desc: 'Installing Dart.',
                        descAr: 'تثبيت Dart.'
                    }
                ],
                why: 'Setting up your environment is the first step.',
                whyAr: 'إعداد بيئتك هو الخطوة الأولى.',
                mistakes: [
                    {
                        bad: 'Not verifying the installation',
                        good: 'Always verify your tools are installed correctly',
                        badAr: 'عدم التحقق من التثبيت',
                        goodAr: 'تحقق دائماً من تثبيت أدواتك'
                    }
                ],
                goodVsBad: {
                    bad: '// Just hoping it works',
                    good: 'dart --version // Verification'
                },
                mcqs: [
                    {
                        q: 'Verify Dart installation with which command?',
                        opts: ['dart check', 'dart --version', 'dart run', 'dart verify'],
                        ans: 1,
                        fb: 'dart --version is the standard check.'
                    },
                    {
                        q: 'Where is the official source to download Dart?',
                        opts: ['google.com', 'dart.dev', 'flutter.io', 'github.com'],
                        ans: 1,
                        fb: 'dart.dev is the home of the Dart language.'
                    },
                    {
                        q: 'Does installing Flutter also install the Dart SDK?',
                        opts: ['No', 'Yes', 'Only on Windows', 'Only on Mac'],
                        ans: 1,
                        fb: 'The Flutter SDK includes a compatible version of Dart automatically.'
                    },
                    {
                        q: 'Which package manager is used on macOS to install Dart?',
                        opts: ['Chocolatey', 'Apt', 'Homebrew (brew)', 'NPM'],
                        ans: 2,
                        fb: 'Brew is the standard installer for Mac tools.'
                    },
                    {
                        q: 'On Windows, which command installs Dart using Chocolatey?',
                        opts: ['choco add dart', 'choco install dart-sdk', 'get dart', 'npm install dart'],
                        ans: 1,
                        fb: 'choco install dart-sdk is the correct command.'
                    }
                ],
                codingQs: [
                    { q: 'Write a comment showing the command to check your Dart version.', start: '// ', answer: 'dart --version' },
                    { q: 'Write the command (as code/string) to install dart-sdk via choco.', start: '', answer: 'choco install dart-sdk' }
                ]
            },
            {
                id: 'p2l4',
                title: 'Running First Dart Program',
                en: 'Every Dart app needs a "door" to enter through. In programming, we call this the "Entry Point." In Dart, the entry point is a special function called main(). When you tell the computer to run your Dart code, it immediately looks for this main() function. If it doesn\'t find it, nothing happens!\n\nInside the main() function, you write the instructions that you want the computer to perform first.',
                ar: 'يحتاج كل تطبيق Dart إلى "باب" للدخول منه. في البرمجة، نسمي هذا "نقطة الدخول" (Entry Point). في Dart، نقطة الدخول هي دالة خاصة تسمى main(). عندما تطلب من الكمبيوتر تشغيل كود Dart الخاص بك، فإنه يبحث فوراً عن دالة main(). إذا لم يجدها، فلن يحدث شيء!\n\nداخل دالة main()، تكتب التعليمات التي تريد أن ينفذها الكمبيوتر أولاً.',
                examples: [
                    {
                        level: 'Beginner',
                        code: 'void main() {\n  print("Hello, World!");\n}',
                        desc: 'The classic first program.',
                        descAr: 'برنامج أول كلاسيكي.'
                    },
                    {
                        level: 'Intermediate',
                        code: 'void main() {\n  var name = "Learner";\n  print("Welcome, $name!");\n}',
                        desc: 'Variables in main().',
                        descAr: 'متغيرات في main().'
                    }
                ],
                why: 'main() is the starting point of every app.',
                whyAr: 'main() هي نقطة البداية لكل تطبيق.',
                mistakes: [
                    {
                        bad: 'Forgetting void before main()',
                        good: 'Always write void main()',
                        badAr: 'نسيان void قبل main()',
                        goodAr: 'دائماً اكتب void main()'
                    }
                ],
                goodVsBad: {
                    bad: 'main() { print("hi") }',
                    good: 'void main() { print("hi"); }'
                },
                mcqs: [
                    {
                        q: 'Entry point of every Dart program is...',
                        opts: ['start()', 'begin()', 'main()', 'init()'],
                        ans: 2,
                        fb: 'The main() function is where execution begins.'
                    },
                    {
                        q: 'What is the return type of the main function?',
                        opts: ['int', 'String', 'void', 'bool'],
                        ans: 2,
                        fb: 'void means the function returns no value.'
                    },
                    {
                        q: 'To show text in the console, you use...',
                        opts: ['console.log()', 'print()', 'echo()', 'write()'],
                        ans: 1,
                        fb: 'The print() function outputs a string to the console.'
                    },
                    {
                        q: 'Every instruction in main() should end with...',
                        opts: ['A colon (:)', 'A semicolon (;)', 'A period (.)', 'Nothing'],
                        ans: 1,
                        fb: 'Dart requires semicolons to terminate statements.'
                    },
                    {
                        q: 'Which is a correct main function start?',
                        opts: ['void main() {', 'Main() {', 'start program {', 'public main() {'],
                        ans: 0,
                        fb: 'void main() { is the standard syntax.'
                    }
                ],
                codingQs: [
                    { q: 'Write the entry point function "main" with no parameters.', start: 'void ', answer: 'main()' },
                    { q: 'Inside main, write a print statement for "Hello!".', start: 'void main() {\n  \n}', answer: 'print("Hello!");' }
                ]
            },
            {
                id: 'p2l5',
                title: 'Dart Syntax Basics',
                en: 'Just like every human language has grammar rules, programming languages have "Syntax." These are the strict rules you must follow so the computer understands you. \n\nTwo BIG rules in Dart:\n1. The Semicolon (;): Think of this like the "Period" at the end of a sentence. It tells Dart that your current instruction is finished.\n2. Curly Braces ({}): These are like containers. They group multiple lines of code together into a single "Block" or "Family."',
                ar: 'تماماً كما أن لكل لغة بشرية قواعد نحوية، فإن لغات البرمجة لها "بناء جملة" (Syntax). هذه هي القواعد الصارمة التي يجب عليك اتباعها حتى يفهمك الكمبيوتر.\n\nقاعدتان كبيرتان في Dart:\n1. الفاصلة المنقوطة (;): فكر في هذا مثل "النقطة" في نهاية الجملة. إنها تخبر Dart أن تعليماتك الحالية قد انتهت.\n2. الأقواس المعقوفة ({}): هذه تشبه الحاويات. إنها تجمع عدة أسطر من الكود معاً في "كتلة" (Block) أو "عائلة" واحدة.',
                examples: [
                    {
                        level: 'Beginner',
                        code: 'void main() {\n  print("Semicolons are required;");\n}',
                        desc: 'Basic syntax.',
                        descAr: 'قواعد أساسية.'
                    }
                ],
                why: 'Syntax is the grammar of programming.',
                whyAr: 'القواعد هي نحو البرمجة.',
                mistakes: [
                    {
                        bad: 'Forgetting semicolons',
                        good: 'Every statement ends with ;',
                        badAr: 'نسيان الفواصل المنقوطة',
                        goodAr: 'كل عبارة تنتهي بـ ;'
                    }
                ],
                goodVsBad: {
                    bad: 'print("Hi")',
                    good: 'print("Hi");'
                },
                mcqs: [
                    {
                        q: 'Statements in Dart MUST end with...',
                        opts: ['.', ':', ';', '!'],
                        ans: 2,
                        fb: 'Semicolons are required to end statements in Dart.'
                    },
                    {
                        q: 'What characters define a code block in Dart?',
                        opts: ['( )', '[ ]', '{ }', '< >'],
                        ans: 2,
                        fb: 'Curly braces define the scope of functions, loops, and classes.'
                    },
                    {
                        q: 'Which is a valid single-line comment?',
                        opts: ['# comment', '// comment', '/* comment', '-- comment'],
                        ans: 1,
                        fb: 'Two slashes are used for single-line comments.'
                    },
                    {
                        q: 'What happens if you forget a semicolon?',
                        opts: ['It runs anyway', 'The compiler shows an error', 'The computer restarts', 'The text turns red'],
                        ans: 1,
                        fb: 'Forgetting a semicolon is a syntax error and keeps the code from running.'
                    },
                    {
                        q: 'Which of these is a correct statement?',
                        opts: ['print "Hi"', 'print("Hi");', 'print("Hi")', 'call print("Hi")'],
                        ans: 1,
                        fb: 'print("Hi"); follows all syntax rules.'
                    }
                ],
                codingQs: [
                    { q: 'Write a print statement for "Syntax" and don\'t forget the semicolon.', start: '', answer: 'print("Syntax");' },
                    { q: 'Create an empty main function with its curly braces.', start: 'void ', answer: 'main() {}' }
                ]
            }
        ]
    }
];
