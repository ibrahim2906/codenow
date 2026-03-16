const PHASES_13 = [
    {
        id: 'p13', title: 'Phase 13 — Advanced Dart Secrets', lessons: [
            {
                id: 'p13l1', title: 'Extension Methods',
                en: 'Extensions let you add "Gadgets" to existing tools. Imagine you have a regular Knife, and you add a Screwdriver to it. Now it is better! \n\nIn Dart, you can take a standard "String" and add a function like .toArabicNumbers() or .isEmail(). It feels like it was always part of Dart, even though YOU wrote it. \n\n- Pro-tip: They only add logic (methods), not storage (variables).',
                ar: 'تتيح لك الـ Extensions إضافة "أدوات إضافية" (Gadgets) للأدوات الموجودة. تخيل أن لديك سكيناً عادياً، وأضفت إليه مفك براغي. الآن أصبح أفضل!\n\nفي Dart، يمكنك أخذ كلاس "String" القياسي وإضافة دالة له مثل .toArabicNumbers() أو .isEmail(). سيبدو الأمر وكأنه كان دائماً جزءاً من Dart، رغم أنك أنت من كتبته.\n\n- نصيحة للمحترفين: هي تضيف المنطق (الدوال) فقط، وليس التخزين (المتغيرات).',
                examples: [
                    { level: 'Beginner', code: 'extension StringExt on String {\n  bool get isGmail => endsWith("@gmail.com");\n}\n\nvoid main() {\n  print("ali@gmail.com".isGmail); // true\n}', desc: 'Adding a getter to String.', descAr: 'إضافة getter لنوع String.' },
                    { level: 'Intermediate', code: 'extension ListExt<T> on List<T> {\n  void printAll() => forEach(print);\n}\n\nvoid main() {\n  [1, 2, 3].printAll(); // Prints 1, 2, 3\n}', desc: 'Extension on a generic List.', descAr: 'Extension على قائمة generic.' }
                ],
                why: 'Extensions are the secret behind Flutter’s clean syntax. Instead of "Theme.of(context).textTheme", many developers use "context.textTheme" via an extension.',
                whyAr: 'الـ Extensions هي السر وراء بناء الجمل البرمجية النظيفة في Flutter. بدلاً من "Theme.of(context).textTheme"، يستخدم العديد من المطورين "context.textTheme" عبر extension.',
                mistakes: [
                    { bad: 'extension X on int { int score = 0; } // Error', good: 'extension X on int { int get score => 0; } // Works', badAr: 'محاولة إضافة متغيرات (instance fields) للـ extension', goodAr: 'استخدم getters لحساب القيم بدلاً من تخزينها' }
                ],
                goodVsBad: { bad: 'String reverse(String s) => s.split("").reversed.join();', good: 'extension on String { String get reversedStr => ... }' },
                mcqs: [
                    { q: 'Can an extension be defined on a nullable type like "String?"?', opts: ['Yes', 'No', 'Only if final', 'Only in Dart 2'], ans: 0, fb: 'Defining an extension on a nullable type allows you to handle null cases gracefully within the extension logic.' }
                ],
                codingQs: [
                    { q: 'Write the first line of an extension named "MyExt" on "String".', start: 'extension MyExt ', answer: 'on String' },
                    { q: 'Use an extension getter named "isBig" on a number 100.', start: 'bool result = 100.', answer: 'isBig' }
                ],
                codingChallenge: {
                    task: 'Write an extension on "int" called "IntExt" that adds a getter "isEvenNumber" returning a bool.',
                    answer: 'extension',
                    solution: 'extension IntExt on int {\n  bool get isEvenNumber => this % 2 == 0;\n}'
                }
            },
            {
                id: 'p13l2', title: 'Generics & Safety',
                en: 'Generics (<T>) are like a "Universal Remote Control." One remote that can work with a Samsung, Sony, or LG TV. \n\nYou write one piece of code (like a List or a DataHolder) and use it for Strings, Integers, or custom Objects. No more copying and pasting the same code 10 times for different types! \n\n- <T>: Think of T as a "Type Container" that will be filled later.',
                ar: 'الـ Generics (<T>) تشبه "جهاز التحكم عن بعد الشامل" (Universal Remote Control). جهاز واحد يمكنه العمل مع تلفزيونات Samsung أو Sony أو LG.\n\nأنت تكتب قطعة كود واحدة (مثل List أو DataHolder) وتستخدمها مع النصوص، الأرقام، أو الكائنات المخصصة. لا مزيد من نسخ ولصق نفس الكود 10 مرات لأنواع مختلفة!\n\n- <T>: فكر في T كـ "حاوية نوع" سيتم ملؤها لاحقاً.',
                examples: [
                    { level: 'Intermediate', code: 'class DataHolder<T> {\n  T data;\n  DataHolder(this.data);\n}\n\nvoid main() {\n  var name = DataHolder<String>("Ali");\n  var age = DataHolder<int>(25);\n}', desc: 'Generic class example.', descAr: 'مثال على كلاس generic.' },
                    { level: 'Advanced', code: 'T findMax<T extends num>(T a, T b) {\n  return (a > b) ? a : b;\n}\n\nvoid main() {\n  print(findMax(10, 20)); // Works\n  // findMax("A", "B"); // Error! String doesn\'t extend num', desc: 'Generic constraints with extends.', descAr: 'قيود الـ Generics باستخدام extends.' }
                ],
                why: 'Generics are the reason why "List<String>" only allows strings. Without them, you would constantly have to check if a list item is a String, int, or something else.',
                whyAr: 'الـ Generics هي السبب في أن "List<String>" تسمح فقط بالنصوص. بدونها، سيكون عليك باستمرار التحقق مما إذا كان عنصر القائمة نصاً أم رقماً أم شيئاً آخر.',
                mistakes: [
                    { bad: 'List items = [1, "Hi"]; // dynamic list', good: 'List<int> items = [1, 2]; // Type-safe list', badAr: 'استخدام قائمة dynamic تسمح بأي شيء', goodAr: 'حدد النوع دائماً باستخدام Generics للأمان' }
                ],
                goodVsBad: { bad: 'dynamic add(dynamic a, dynamic b) { ... }', good: 'T calculate<T extends num>(T a, T b) { ... }' },
                mcqs: [
                    { q: 'If you have <T extends num>, which of these is NOT allowed?', opts: ['int', 'double', 'String', 'All are allowed'], ans: 2, fb: 'String does not extend the numeric family (num).' }
                ],
                codingQs: [
                    { q: 'Declare a List that only holds "int" values using Generics.', start: 'List', answer: '<int>' },
                    { q: 'Write a generic function signature "check<T>" that returns type T.', start: 'T check', answer: '<T>' }
                ],
                codingChallenge: {
                    task: 'Create a generic function "swapper<T>" that takes two variables of type T and prints them (simulated).',
                    answer: '<T>',
                    solution: 'void swapper<T>(T a, T b) {\n  print("$a, $b");\n}'
                }
            }
        ]
    }
];
