// Phase 9 — Object-Oriented Programming (OOP) Basics
const PHASES_9 = [
    {
        id: 'p9', title: 'Phase 9 — Object-Oriented Programming Basics', lessons: [
            {
                id: 'p9l1', title: 'Classes & Objects',
                en: 'Imagine you want to build a house. You don\'t just start stacking bricks! First, you need a "Blueprint." In programming, the blueprint is the "Class." Once you have the blueprint, you can build many actual houses from it. Each physical house is an "Object." \n\nInside a Class, you have:\n- Properties (Properties): Like the color or size of the house.\n- Methods (Methods): Like "Open Door" or "Turn on Lights" (actions the house can do).',
                ar: 'تخيل أنك تريد بناء منزل. أنت لا تبدأ فقط في رص الطوب! أولاً، تحتاج إلى "مخطط" (Blueprint). في البرمجة، المخطط هو "الكلاس" (Class). بمجرد حصولك على المخطط، يمكنك بناء العديد من المنازل الحقيقية منه. كل منزل مادي هو "كائن" (Object).\n\nداخل الكلاس، لديك:\n- الخصائص (Properties): مثل لون المنزل أو مساحته.\n- الدوال (Methods): مثل "فتح الباب" أو "تشغيل الأضواء" (إجراءات يمكن للمنزل القيام بها).',
                examples: [
                    { level: 'Beginner', code: 'class User {\n  String name = "Guest";\n  void sayHi() => print("Hi, I am $name");\n}\n\nvoid main() {\n  var me = User();\n  me.name = "Ali";\n  me.sayHi();\n}', desc: 'Defining properties and methods.', descAr: 'تعريف الخصائص والدوال.' },
                    { level: 'Intermediate', code: 'class MathUtils {\n  static int add(int a, int b) => a + b;\n}\n\nvoid main() {\n  // No need to create an object!\n  print(MathUtils.add(5, 5));\n}', desc: 'Using static methods.', descAr: 'استخدام الدوال الثابتة.' }
                ],
                why: 'OOP allow you to group code logically. Instead of having 50 variables for "User", you have ONE User class that holds everything.',
                whyAr: 'تسمح لك البرمجة الكائنية بتجميع الكود منطقياً. بدلاً من وجود 50 متغيراً لـ "المستخدم"، لديك كلاس مستخدم واحد يحتوي على كل شيء.',
                mistakes: [
                    { bad: 'myObject.staticMethod() // Error!', good: 'MyClass.staticMethod()', badAr: 'محاولة استدعاء دالة ثابتة من كائن', goodAr: 'استدعاء الدوال الثابتة من الكلاس مباشرة' }
                ],
                goodVsBad: { bad: 'String car1Color, car2Color; void driveCar1() {}', good: 'class Car { String color; void drive() {} }' },
                mcqs: [
                    { q: 'How do you call a static method "run()" in a class "User"?', opts: ['User.run()', 'myUser.run()', 'run()', 'call User.run'], ans: 0, fb: 'Static methods are called on the Class name directly, not an object instance.' }
                ],
                codingQs: [
                    { q: 'Create a simple class "Car" with a String property "brand".', start: 'class ', answer: 'Car { String brand; }' },
                    { q: 'Create an object of the "Car" class in the main function.', start: 'void main() {\n  var myCar = ', answer: 'Car();' }
                ]
            },
            {
                id: 'p9l2', title: 'Constructors & Initializers',
                en: 'A Constructor is a special function that runs the moment you create an object. Think of it as the "Setup Stage" where you decide the initial colors and settings for your house.\n\nDart is very smart with constructors:\n- Generative (this.name): A quick way to say "Take the name I give you and put it in the name box." \n- Named (User.admin()): Sometimes you want a special way to build a house (like a Pre-furnished house). Named constructors let you do exactly that!',
                ar: 'المنشئ (Constructor) هو دالة خاصة تعمل في اللحظة التي تنشئ فيها كائناً. فكر فيه على أنه "مرحلة الإعداد" حيث تقرر الألوان والإعدادات الأولية لمنزلك.\n\nلغة Dart ذكية جداً في المنشئات:\n- التوليدي (this.name): طريقة سرية وسريعة لقول "خذ الاسم الذي أعطيتك إياه وضعه في صندوق الاسم".\n- المسمى (User.admin()): أحياناً تريد طريقة خاصة لبناء منزل (مثل منزل مفروش مسبقاً). المنشئات المسماة تتيح لك فعل ذلك بالضبط!',
                examples: [
                    { level: 'Beginner', code: 'class User {\n  String name;\n  // Short syntax saves time!\n  User(this.name);\n}', desc: 'Generative constructor.', descAr: 'منشئ توليدي.' },
                    { level: 'Intermediate', code: 'class User {\n  String name;\n  User(this.name);\n  \n  // Named constructor for special cases\n  User.anonymous() : name = "Anonymous";\n}\n\nvoid main() {\n  var u1 = User("Ali");\n  var u2 = User.anonymous();\n}', desc: 'Using named constructors.', descAr: 'استخدام المنشئات المسماة.' }
                ],
                why: 'Named constructors make your code much more readable. instead of passing "null" for a guest, you just call User.guest().',
                whyAr: 'المنشئات المسماة تجعل كودك أكثر قابلية للقراءة. بدلاً من تمرير "null" للضيف، تستدعي فقط User.guest().',
                mistakes: [
                    { bad: 'User(String name) { this.name = name; } // Too long', good: 'User(this.name); // Idiomatic Dart', badAr: 'كتابة منشئ طويل لا داعي له', goodAr: 'استخدم الصيغة المختصرة (this.name)' }
                ],
                goodVsBad: { bad: 'var u = User(); u.id = 1; u.name = "Ali";', good: 'var u = User(1, "Ali");' },
                mcqs: [
                    { q: 'Can you have two constructors with the exact same name in one class?', opts: ['Yes', 'No', 'Only if they have different colors', 'Only in main()'], ans: 1, fb: 'You can only have one primary constructor; others must be "named".' }
                ],
                codingQs: [
                    { q: 'Write a constructor for class "User" that uses the "this.name" shortcut.', start: 'class User {\n  String name;\n  ', answer: 'User(this.name);' },
                    { q: 'Write a named constructor "User.guest()" that sets name to "Guest".', start: 'class User {\n  String name;\n  ', answer: 'User.guest() : name = "Guest";' }
                ]
            }
        ]
    }
];
