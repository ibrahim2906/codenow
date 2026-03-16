// Phase 3 — Variables & Data Types
const PHASES_3 = [
    {
        id: 'p3', title: 'Phase 3 — Variables & Data Types', lessons: [
            {
                id: 'p3l1', title: 'Variables & Naming',
                en: 'Imagine you are moving houses. You have many items, so you put them into Boxes and write Labels on them (e.g., "Kitchen stuff"). In programming, these boxes are "Variables" and the labels are "Variable Names." \n\nIn Dart, you can let the computer guess what is in the box using "var" (Type Inference), or you can be specific and write the type yourself (String, int). \n\nProfessional Naming Rules (lowerCamelCase):\n- Always start with a small letter: userAge, not UserAge.\n- If there are two words, capitalize the second one: totalScore.\n- Be descriptive: "price" is better than "p".',
                ar: 'تخيل أنك تنتقل إلى منزل جديد. لديك العديد من الأشياء، لذا تضعها في صناديق (Boxes) وتكتب عليها ملصقات (Labels) (مثلاً: "أدوات المطبخ"). في البرمجة، هذه الصناديق هي "المتغيرات" والملصقات هي "أسماء المتغيرات".\n\nفي Dart، يمكنك ترك الكمبيوتر يخمن ما يوجد في الصندوق باستخدام "var" (استنتاج النوع)، أو يمكنك أن تكون محدداً وتكتب النوع بنفسك (String، int).\n\nقواعد التسمية الاحترافية (lowerCamelCase):\n- ابدأ دائماً بحرف صغير: userAge، وليس UserAge.\n- إذا كان هناك كلمتان، اجعل حرف الكلمة الثانية كبيراً: totalScore.\n- كن وصفياً: اسم "price" أفضل بكثير من "p".',
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
                en: 'Just like you wouldn\'t put soup in a cardboard box, you shouldn\'t put a decimal number in an "int" box. Dart has specific containers for different data:\n\n1. int: For whole numbers (Age: 25, Goals: 3).\n2. double: For numbers with decimals (Price: 19.99, Temperature: 37.5).\n3. String: For text (Name: "Ali", City: "Cairo").\n4. bool: For true/false questions (isLoggedIn: true).\n\nBonus Rule: If you want one box that can hold ANY type of number, use "num".',
                ar: 'تماماً كما أنك لن تضع الحساء في صندوق من الكرتون، لا يجب أن تضع رقماً عشرياً في صندوق من نوع "int". لغة Dart لديها حاويات محددة للبيانات المختلفة:\n\n1. int: للأرقام الصحيحة (العمر: 25، الأهداف: 3).\n2. double: للأرقام بفاصلة عشرية (السعر: 19.99، درجة الحرارة: 37.5).\n3. String: للنصوص (الاسم: "علي"، المدينة: "القاهرة").\n4. bool: للأسئلة التي إجابتها صح أو خطأ (isLoggedIn: true).\n\nقاعدة إضافية: إذا كنت تريد صندوقاً واحداً يمكنه حمل أي نوع من الأرقام، فاستخدم "num".',
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
                en: 'How do you tell the computer if a value can be changed or not? \n\n- var: The flexible box. You can change what\'s inside later, but the "type" stays the same.\n- dynamic: The magic box. You can change the content AND the type anytime (Be careful, this is risky!).\n- final: The locked box. Once you put something in, you can never change it. The value is set when the app is running.\n- const: The super-locked box. The value is set before the app even starts. This is the fastest and safest way for things like Pi (3.14).',
                ar: 'كيف تخبر الكمبيوتر إذا كان يمكن تغيير القيمة أم لا؟\n\n- var: الصندوق المرن. يمكنك تغيير ما بداخل الصندوق لاحقاً، ولكن "النوع" يبقى كما هو.\n- dynamic: الصندوق السحري. يمكنك تغيير المحتوى والنوع في أي وقت (كن حذراً، هذا قد يسبب مشاكل!).\n- final: الصندوق المقفل. بمجرد وضع شيء بداخله، لا يمكنك تغييره أبداً. يتم تحديد القيمة أثناء تشغيل التطبيق.\n- const: الصندوق المقفل تماماً. يتم تحديد القيمة قبل أن يبدأ التطبيق العمل. هذه هي الطريقة الأسرع والأكثر أماناً لأشياء مثل ط (3.14).',
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
