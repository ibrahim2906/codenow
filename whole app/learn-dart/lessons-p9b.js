const PHASES_9B = [
    {
        id: 'p9b', title: 'Phase 9 — Advanced OOP', lessons: [
            {
                id: 'p9bl1', title: 'Inheritance & Super',
                en: 'Inheritance is like the relationship between a Father and a Son. The Son inherits "DNA" (Code) from the Father, but he can also have his own unique features or change how he does things (Override). \n\n- super: Like calling your dad for advice. It triggers the parent’s logic from inside the child.\n- @override: Like saying "Dad, I know how you walk, but I walk faster!" (Replacing parent logic).',
                ar: 'الوراثة تشبه العلاقة بين الأب والابن. يرث الابن "الحمض النووي" (الكود) من والده، ولكن يمكنه أيضاً امتلاك ميزاته الفريدة أو تغيير كيفية قيامه بالأشياء (Override).\n\n- super: يشبه الاتصال بوالدك لطلب النصيحة. إنه يستدعي منطق الأب من داخل الابن.\n- @override: يشبه قول "يا أبي، أنا أعرف كيف تمشي، لكني أمشي أسرع!" (استبدال منطق الأب).',
                examples: [
                    { level: 'Beginner', code: 'class Parent {\n  Parent() { print("Parent born"); }\n}\n\nclass Child extends Parent {\n  Child() : super(); // Calls Parent constructor\n}', desc: 'Using super() in constructor.', descAr: 'استخدام ()super في المنشئ.' },
                    { level: 'Intermediate', code: 'class Animal {\n  void eat() => print("Eating...");\n}\n\nclass Cat extends Animal {\n  @override\n  void eat() {\n    super.eat(); // Calls parent eat first\n    print("Meow! and eating...");\n  }\n}', desc: 'Using @override and super.', descAr: 'استخدام @override و super.' }
                ],
                why: 'Inheritance is how you build specific versions of a general thing. In Flutter, your custom widget "extends" the standard "StatelessWidget".',
                whyAr: 'الوراثة هي كيف تبني نسخاً مخصصة من شيء عام. في Flutter، الـ widget المخصصة الخاصة بك "ترث" من "StatelessWidget" القياسية.',
                mistakes: [
                    { bad: 'Forgetting @override', good: 'Always use @override for clarity and to let the compiler help you catch typos', badAr: 'نسيان @override', goodAr: 'استخدم دائماً @override للوضوح ولمساعدة المترجم في اكتشاف الأخطاء المطبعية' }
                ],
                goodVsBad: { bad: 'class Dog { void breathe() {} } class Cat { void breathe() {} }', good: 'class Animal { void breathe() {} } class Dog extends Animal {}' },
                mcqs: [
                    { q: 'Which keyword is used to access the parent class?', opts: ['parent', 'base', 'super', 'this'], ans: 2, fb: 'super refers to the immediate parent class.' },
                    { q: 'Which keyword is used to inherit from a parent class?', opts: ['extends', 'implements', 'with', 'inherits'], ans: 0, fb: 'The "extends" keyword creates a child-parent relationship.' },
                    { q: 'What is "@override" used for?', opts: ['Creating a new method', 'Informing Dart you are replacing a parent method', 'Speeding up the app', 'Adding a comment'], ans: 1, fb: '@override makes code clearer and helps the compiler verify you are correctly overriding a parent member.' },
                    { q: 'How many classes can a Dart class directly "extend"?', opts: ['Only one', 'Two', 'Unlimited', 'Zero'], ans: 0, fb: 'Dart supports single inheritance only.' },
                    { q: 'If class B extends A, and both have a method "doit()", how does B call A\'s version?', opts: ['A.doit()', 'parent.doit()', 'super.doit()', 'this.doit()'], ans: 2, fb: 'Use "super.methodName()" to trigger parent logic from within an override.' }
                ],
                codingQs: [
                    { q: 'Create a class "Motorcycle" that inherits from "Vehicle" using the correct keyword.', start: 'class Vehicle {}\n', answer: 'extends' },
                    { q: 'Inside a child class, call the parent\'s method "honk()" using the super keyword.', start: 'void makeNoise() {\n  \n}', answer: 'super.honk()' }
                ]
            },
            {
                id: 'p9bl2', title: 'Abstract & Interfaces',
                en: 'Think of an Abstract Class as a "Legal Contract." It says: "If you want to be a Shape, you MUST provide a way to calculate Area." You cannot build a "Shape" itself—it is too general. You can only build specific shapes like Circles or Squares that follow the contract. \n\n- Interface: In Dart, every class can behave like a contract. When you "implement" a class, you are signing that contract!',
                ar: 'فكر في الكلاس المجرد (Abstract Class) على أنه "عقد قانوني". يقول: "إذا كنت تريد أن تكون شكلاً (Shape)، فيجب عليك توفير طريقة لحساب المساحة (Area)". لا يمكنك بناء "شكل" في حد ذاته — فهو عام جداً. يمكنك فقط بناء أشكال محددة مثل الدوائر أو المربعات التي تلتزم بالعقد.\n\n- الواجهة (Interface): في Dart، يمكن لكل كلاس أن يعمل كعقد. عندما تقوم بـ "implement" لكلاس، فأنت توقع على ذلك العقد!',
                examples: [
                    { level: 'Intermediate', code: 'abstract class Payment {\n  void pay(double amount); // No body here!\n}\n\nclass Visa implements Payment {\n  @override\n  void pay(double amount) => print("Paid $amount using Visa");\n}', desc: 'Payment interface requirement.', descAr: 'متطلبات واجهة الدفع.' }
                ],
                why: 'Abstract classes allow you to write code that works with ANY payment type (Visa, PayPal, etc.) without knowing the details of how each one works.',
                whyAr: 'تسمح لك الكلاسات المجردة بكتابة كود يعمل مع أي نوع دفع (Visa، PayPal، إلخ) دون معرفة تفاصيل كيفية عمل كل منها.',
                mistakes: [
                    { bad: 'class Square extends Shape { } // Error: missing calculateArea', good: 'class Square extends Shape { @override void calculateArea()... }', badAr: 'نسيان تنفيذ الدوال المجردة في الكلاس الابن', goodAr: 'يجب دائماً تنفيذ جميع الدوال المجردة' }
                ],
                goodVsBad: { bad: 'class Shape { void draw() {} } // Empty but not abstract', good: 'abstract class Shape { void draw(); }' },
                mcqs: [
                    { q: 'What keyword is used to follow an interface strictly?', opts: ['extends', 'implements', 'with', 'inherits'], ans: 1, fb: 'The "implements" keyword forces a class to provide all methods of another class.' },
                    { q: 'Can you create an instance of an abstract class directly?', opts: ['Yes', 'No', 'Only in main()', 'Only if it has data'], ans: 1, fb: 'Abstract classes are incomplete and cannot be instantiated with "()".' },
                    { q: 'Every class in Dart is implicitly a...', opts: ['Function', 'Object', 'Interface', 'List'], ans: 2, fb: 'In Dart, you can "implements" any class as an interface.' },
                    { q: 'What happens if a class "implements" another class?', opts: ['It gets all code for free', 'It must override every member of that class', 'It deletes the target class', 'It becomes abstract'], ans: 1, fb: 'Implements only takes the "blueprint" (API), not the implementation code.' },
                    { q: 'An "Abstract Method" is defined as...', opts: ['A method with no name', 'A method with no body (no {})', 'A method that only returns strings', 'A method inside main()'], ans: 1, fb: 'Abstract methods only have a signature and end with a semicolon.' }
                ],
                codingQs: [
                    { q: 'Define an abstract class named "CloudStorage".', start: '', answer: 'abstract class' },
                    { q: 'Inside a class, use the "implements" keyword to follow the "Printer" contract.', start: 'class Epson ', answer: 'implements Printer' }
                ]
            },
            {
                id: 'p9bl3', title: 'Mixins & Logic Reuse',
                en: 'Mixins are like "Superpowers" or "Plugins." Unlike inheritance (where you are a "son"), a mixin is something you "have." \n\nA class can have many mixins. For example, a "SuperHero" class can have "with Flying, with SuperStrength." It doesn\'t inherit these from a father; it "plugs them in" to use their powers.',
                ar: 'الـ Mixins تشبه "القوى الخارقة" أو "الإضافات" (Plugins). على عكس الوراثة (حيث تكون "ابناً")، الـ mixin هو شيء "تملكه".\n\nيمكن للكلاس امتلاك العديد من الـ mixins. على سبيل المثال، يمكن لكلاس "بطل خارق" أن يمتلك "with Flying, with SuperStrength". هو لا يرث هذه الصفات من أب؛ بل "يقوم بتوصيلها" لاستخدام قواها.',
                examples: [
                    { level: 'Advanced', code: 'mixin Swimmer {\n  void swim() => print("I can swim!");\n}\n\nclass Dolphin with Swimmer {}\nclass Human with Swimmer {}', desc: 'Sharing logic without inheritance.', descAr: 'مشاركة المنطق دون وراثة.' }
                ],
                why: 'Mixins allow you to share specialized behaviors (like "Flying" or "DatabaseSync") across completely different classes without creating a messy inheritance tree.',
                whyAr: 'تسمح لك الـ Mixins بمشاركة سلوكيات متخصصة (مثل "الطيران" أو "مزامنة قاعدة البيانات") عبر كلاسات مختلفة تماماً دون إنشاء شجرة وراثة فوضوية.',
                mistakes: [
                    { bad: 'class Cat with Animal', good: 'class Cat extends Animal', badAr: 'استخدام mixin لعلاقة "نوع من"', goodAr: 'استخدم الوراثة لعلاقة "الأب والابن"' }
                ],
                goodVsBad: { bad: 'mixin X { X(); } // Error', good: 'mixin X { void doSomething() {} }' },
                mcqs: [
                    { q: 'What keyword is used to apply a mixin?', opts: ['extends', 'implements', 'with', 'using'], ans: 2, fb: 'The "with" keyword is used for mixin application.' },
                    { q: 'What is a major limitation of Mixins?', opts: ['They cannot have methods', 'They cannot have constructors', 'They can only be used once', 'They only work for integers'], ans: 1, fb: 'Mixins are "code-plug-ins" and cannot be initialized with constructors.' },
                    { q: 'Why would you use a Mixin over regular Inheritance?', opts: ['To save memory', 'To share logic across classes that don\'t have a common parent', 'To make code run faster', 'Because inheritance is deprecated'], ans: 1, fb: 'Mixins solve the "multiple inheritance" problem by allowing shared behavior on any class.' },
                    { q: 'Can a single class use multiple Mixins?', opts: ['Yes', 'No', 'Only up to two', 'Only in Flutter'], ans: 0, fb: 'You can use many mixins: class MyClass with Mixin1, Mixin2, Mixin3.' },
                    { q: 'Which is a correct Mixin application?', opts: ['class A extends B with C', 'class A with B extends C', 'class A implements B with C', 'class A use B'], ans: 0, fb: 'Mixins come after the "extends" or "implements" clause using "with".' }
                ],
                codingQs: [
                    { q: 'Define a mixin named "Logger" that contains a simple print statement.', start: 'mixin ', answer: 'mixin Logger' },
                    { q: 'Create a class "Bird" that uses the mixin "Flyer" using the "with" keyword.', start: 'class Bird ', answer: 'with Flyer' }
                ]
            },
            {
                id: 'p9bl4', title: 'Encapsulation & Privacy',
                en: 'Encapsulation is like an ATM Machine. You interact with the buttons and the screen (Public API), but the money and the complex mechanical gears are hidden inside (Private Logic). \n\n- Underscore (_): In Dart, putting a "_" before a name is like Locking the Door. Only code inside that same file can see what is behind that door.',
                ar: 'التغليف (Encapsulation) يشبه آلة الصراف الآلي (ATM). أنت تتعامل مع الأزرار والشاشة (واجهة عامة)، ولكن المال والتروس الميكانيكية المعقدة مخفية في الداخل (منطق خاص).\n\n- الشرطة السفلية (_): في Dart، وضع "_" قبل الاسم يشبه قفل الباب. فقط الكود الموجود داخل نفس الملف يمكنه رؤية ما وراء ذلك الباب.',
                examples: [
                    { level: 'Beginner', code: 'class BankAccount {\n  double _balance = 0; // Private!\n  \n  double get balance => _balance;\n  \n  set deposit(double amount) {\n    if (amount > 0) _balance += amount;\n  }\n}', desc: 'Private field with getter/setter.', descAr: 'حقل خاص مع getter/setter.' }
                ],
                why: 'Encapsulation prevents other parts of your app from accidentally breaking your internal logic (like setting a bank balance to -10,000,000).',
                whyAr: 'يمنع التغليف الأجزاء الأخرى من تطبيقك من إفساد منطقك الداخلي بالخطأ (مثل تعيين رصيد البنك إلى 10,000,000-).',
                mistakes: [
                    { bad: 'myAccount._balance = -100;', good: 'myAccount.deposit = 100;', badAr: 'الوصول المباشر للحقول الخاصة من خارج الملف', goodAr: 'استخدام setters للتحقق من صحة البيانات' }
                ],
                goodVsBad: { bad: 'double balance;', good: 'double _balance; double get balance => _balance;' },
                mcqs: [
                    { q: 'How do you make a variable private in Dart?', opts: ['private keyword', 'static keyword', 'Underscore prefix', 'Final keyword'], ans: 2, fb: 'Dart uses a leading underscore (_) for privacy.' },
                    { q: 'Is a private variable (_name) accessible from a DIFFERENT file?', opts: ['Yes', 'No', 'Only if imported', 'Only if public'], ans: 1, fb: 'Privacy in Dart is per-library (per-file).' },
                    { q: 'What is the purpose of a "Getter"?', opts: ['To delete data', 'To provide read-only access to a private property', 'To rename a class', 'To create a new object'], ans: 1, fb: 'Getters allow external code to read data without modifying it directly.' },
                    { q: 'What is the purpose of a "Setter"?', opts: ['To display data', 'To provide controlled write access with validation', 'To finish the program', 'To call a function'], ans: 1, fb: 'Setters allow you to check data before assigning it (e.g., checking if age > 0).' },
                    { q: 'Encapsulation is essentially about...', opts: ['Hiding complexity and protecting data', 'Making code longer', 'Adding more comments', 'Using more memory'], ans: 0, fb: 'It ensures that an object’s internal state is only modified in safe, intended ways.' }
                ],
                codingQs: [
                    { q: 'Create a private numeric variable called "secretPin" using the Dart convention.', start: 'var ', answer: '_secretPin' },
                    { q: 'Write a getter for a private variable "_name" called "userName".', start: 'String get ', answer: 'userName => _name' }
                ]
            }
        ]
    }
];