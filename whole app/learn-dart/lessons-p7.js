// Phase 7 — Functions
const PHASES_7 = [
    {
        id: 'p7', title: 'Phase 7 — Functions', lessons: [
            {
                id: 'p7l1', title: 'Functions & Arrow Syntax',
                en: 'Think of a function as a "Toaster." You give it something (Bread), it does some work (Heats it), and it gives you something back (Toast). You don\'t need to know how the wires inside work every time you want breakfast! \n\nIn Dart, we often use "Arrow Syntax" (=>). It is a cool, short way to write a function that only does one thing. \nExample: int add(a, b) => a + b;',
                ar: 'فكر في الدالة (Function) على أنها "محمصة خبز". أنت تعطيها شيئاً (الخبز)، وهي تقوم ببعض العمل (تسخينه)، وتعطيك شيئاً في المقابل (خبز محمص). لست بحاجة لمعرفة كيفية عمل الأسلاك بالداخل في كل مرة تريد فيها إفطارك!\n\nفي Dart، غالباً ما نستخدم "صيغة السهم" (=>). إنها طريقة رائعة ومختصرة لكتابة دالة تقوم بشيء واحد فقط.\nمثال: int add(a, b) => a + b;',
                examples: [
                    { level: 'Beginner', code: '// Traditional\nvoid greet() {\n  print("Hello!");\n}\n\n// Arrow Syntax (Professional for short functions)\nvoid greetArrow() => print("Hello!");', desc: 'Traditional vs Arrow syntax.', descAr: 'الصيغة التقليدية مقابل صيغة السهم.' },
                    { level: 'Intermediate', code: 'int add(int a, int b) => a + b;\n\nvoid main() {\n  int result = add(5, 10);\n  print("Sum: $result");\n}', desc: 'Returning values with arrow syntax.', descAr: 'إرجاع القيم باستخدام صيغة السهم.' }
                ],
                why: 'Modularizing code into functions is the first step toward clean, professional architecture. It follows the DRY principle: Don\'t Repeat Yourself.',
                whyAr: 'تقسيم الكود إلى دوال هو الخطوة الأولى نحو بنية نظيفة واحترافية. إنه يتبع مبدأ DRY: لا تكرر نفسك.',
                mistakes: [
                    { bad: 'void printName(name) { print(name); } // No parameter type', good: 'void printName(String name) { ... }', badAr: 'void printName(name) // بدون تحديد نوع المعامل', goodAr: 'void printName(String name) { ... }' }
                ],
                goodVsBad: { bad: 'void main() { /* Everything here */ }', good: 'void main() { handleData(); updateUI(); }' },
                mcqs: [
                    { q: 'What does the DRY principle stand for?', opts: ['Do Repeat Yourself', 'Don\'t Repeat Yourself', 'Dart Runs Yield', 'Data Really Yellow'], ans: 1, fb: 'DRY is a core programming principle to avoid duplicating code.' }
                ],
                codingQs: [
                    { q: 'Write a function named "square" that takes an integer "x" and returns x * x using arrow syntax.', start: 'int square(int x) => ', answer: 'x * x' },
                    { q: 'Write a function "sayHello" that prints "Hello!" using traditional syntax.', start: 'void sayHello() {\n  ', answer: 'print("Hello!");' }
                ]
            },
            {
                id: 'p7l2', title: 'Advanced Parameters',
                en: 'How do you tell the Toaster exactly what you want? These are "Parameters." Dart gives you amazing flexibility:\n\n1. Named Parameters ({}): Instead of remembering the order, you just say "name: Ali". This is much clearer for other developers.\n2. Default Values (=): If you don\'t say how brown you want your toast, the toaster uses its "Default" setting.\n3. Required Values: If you try to use the toaster without putting in bread, it won\'t start!',
                ar: 'كيف تخبر المحمصة بما تريده بالضبط؟ هذه هي "المعاملات" (Parameters). تمنحك Dart مرونة مذهلة:\n\n1. المعاملات المسماة ({}): بدلاً من تذكر الترتيب، يمكنك فقط قول "الاسم: علي". هذا أوضح بكثير للمطورين الآخرين.\n2. القيم الافتراضية (=): إذا لم تحدد مدى التحميص الذي تريده، فستستخدم المحمصة إعدادها "الافتراضي".\n3. القيم المطلوبة (Required): إذا حاولت استخدام المحمصة دون وضع الخبز، فلن تبدأ العمل!',
                examples: [
                    { level: 'Beginner', code: '// Default values\nvoid settings({bool darkMode = false}) {\n  print("Dark mode: $darkMode");\n}\n\nvoid main() {\n  settings(); // Uses default (false)\n  settings(darkMode: true); // Overwrites default\n}', desc: 'Using default values in named parameters.', descAr: 'استخدام القيم الافتراضية في المعاملات المسماة.' },
                    { level: 'Intermediate', code: '// Required named parameters\nvoid login({required String user, required String pass}) {\n  print("Loggin in $user...");\n}', desc: 'Ensuring values are provided.', descAr: 'التأكد من تقديم القيم.' }
                ],
                why: 'Using named parameters with default values makes your functions incredibly flexible and easy for other developers to use without reading the whole definition.',
                whyAr: 'استخدام المعاملات المسماة مع القيم الافتراضية يجعل دوالك مرنة للغاية وسهلة الاستخدام للمطورين الآخرين دون قراءة التعريف بالكامل.',
                mistakes: [
                    { bad: 'void info(String n, int a, String g, bool i) // Confusing order!', good: 'void info({required String name, int age = 0, ...})', badAr: 'ترتيب محير للمعاملات الموضعية!', goodAr: 'استخدم المعاملات المسماة للوضوح' }
                ],
                goodVsBad: { bad: 'void greet(String name) { if (name == null) name = "Guest"; }', good: 'void greet([String name = "Guest"]) { ... }' },
                mcqs: [
                    { q: 'What is the syntax for optional positional parameters?', opts: ['{ }', '[ ]', '< >', '( )'], ans: 1, fb: 'Square brackets [ ] define optional parameters that must be provided in order.' }
                ],
                codingQs: [
                    { q: 'Define a function "greet" with a named parameter "name" that is required.', start: 'void greet({required String ', answer: 'name' },
                    { q: 'Define a function "volume" with a named parameter "unit" that defaults to "cm".', start: 'void volume({String unit = ', answer: '"cm"' }
                ]
            }
        ]
    }
];
