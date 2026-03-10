// Phase 10 — Null Safety (CRITICAL)
const PHASES_10 = [
    {
        id: 'p10', title: 'Phase 10 — Null Safety (CRITICAL)', lessons: [
            {
                id: 'p10l1', title: 'Null Safety & Operators',
                en: 'In the old days, apps often crashed because a variable was "Nothing" (Null) when the computer expected "Something." This was called the "Billion Dollar Mistake." \n\nDart 3 fixes this with Null Safety. It is like "Insurance" for your code. You must explicitly tell Dart:\n- Type? (Nullable): "This box MIGHT be empty."\n- ?? (Default): "If the box is empty, use this instead."\n- ! (Assertion): "I swear this box isn\'t empty!" (Be careful, if you lie, the app crashes).',
                ar: 'في الأيام الخوالي، كانت التطبيقات تتعطل غالباً لأن المتغير كان "لا شيء" (Null) بينما كان الكمبيوتر يتوقع "شيئاً ما". كان هذا يسمى "غلطة المليار دولار".\n\nلغة Dart 3 تعالج هذا مع ميزة "أمان Null". إنها تشبه "التأمين" لكودك. يجب عليك إخبار Dart صراحةً:\n- النوع؟ (Nullable): "هذا الصندوق قد يكون فارغاً".\n- ?? (الافتراضي): "إذا كان الصندوق فارغاً، استخدم هذا البديل".\n- ! (التأكيد): "أقسم أن هذا الصندوق ليس فارغاً!" (كن حذراً، إذا كذبت، سيتعطل التطبيق).',
                examples: [
                    { level: 'Beginner', code: 'void main() {\n  String? name; // Nullable\n  print(name ?? "Guest"); // Prints Guest\n}', desc: 'Using the null-coalescing operator.', descAr: 'استخدام عامل دمج null.' },
                    { level: 'Intermediate', code: 'String? user;\n// name is only set if user is NOT null\nint? length = user?.length;\nprint(length); // null, no crash!', desc: 'Null-aware access.', descAr: 'الوصول الحذر للبيانات.' },
                    { level: 'Advanced', code: 'int? score;\nscore ??= 0; // If null, set to 0. If not null, keep value.\nprint(score);', desc: 'Null-aware assignment (??=).', descAr: 'التعيين الحذر (??=).' }
                ],
                why: 'In the past, apps crashed all the time due to "Null Pointer Exceptions." Dart 3 100% Sound Null Safety eliminates this entire category of bugs.',
                whyAr: 'في الماضي، كانت التطبيقات تتعطل باستمرار بسبب "أخطاء Null". أمان Null الصارم في Dart 3 يلغي هذه الفئة من الأخطاء تماماً.',
                mistakes: [
                    { bad: 'myVariable!.doSomething(); // CRASH if null', good: 'myVariable?.doSomething(); // Safe', badAr: 'استخدام ! والمخاطرة بتعطل التطبيق', goodAr: 'استخدم ?. للوصول الآمن' }
                ],
                goodVsBad: { bad: 'if (x != null) { x.run(); }', good: 'x?.run(); // Short & Professional' },
                mcqs: [
                    { q: 'Why is using "!" considered dangerous?', opts: ['It makes the app slow', 'It can cause a runtime crash if you are wrong', 'It is not supported in Dart 3', 'It only works with numbers'], ans: 1, fb: 'If the value is null when you use "!", Dart throws a runtime error.' }
                ],
                codingQs: [
                    { q: 'Declare a nullable String variable "lastName".', start: 'String', answer: '? lastName' },
                    { q: 'Use the null-aware access operator to get the length of "name" only if it is NOT null.', start: 'String? name;\nint? len = ', answer: 'name?.length' }
                ]
            },
            {
                id: 'p10l2', title: 'Late & Required',
                en: 'Sometimes you know a value will arrive, but you don\'t have it RIGHT NOW (like a package in the mail). \n\n- late: This is a promise. "I don\'t have the data now, but I promise to give it to you before you use it." If you break this promise, the app crashes!\n- required: Think of this as mandatory baggage. You can\'t board the flight (call the function) unless you bring this specific item.',
                ar: 'أحياناً تعرف أن القيمة ستصل، لكنك لا تملكها في هذه اللحظة (مثل طرد في البريد).\n\n- late: هذا وعد. "أنا لا أملك البيانات الآن، لكني أعدك بأن أعطيك إياها قبل أن تستخدمها". إذا أخلفت هذا الوعد، سيتعطل التطبيق!\n- required: فكر في هذا على أنه أمتعة إجبارية. لا يمكنك صعود الطائرة (استدعاء الدالة) إلا إذا أحضرت هذا الشيء المحدد.',
                examples: [
                    { level: 'Beginner', code: 'class Profile {\n  late String bio;\n  \n  void init() => bio = "Hello!";\n}\n\nvoid main() {\n  var p = Profile();\n  p.init();\n  print(p.bio);\n}', desc: 'Using late for delayed setup.', descAr: 'استخدام late لـ "التهيئة المتأخرة".' },
                    { level: 'Intermediate', code: 'class Button {\n  final String label;\n  Button({required this.label}); // Compiler error if label is missing\n}', desc: 'Using required for mandatory data.', descAr: 'استخدام required للبيانات الإلزامية.' }
                ],
                why: 'Using "late" correctly avoids having to make everything nullable (?), which means you don\'t have to write "if (x != null)" everywhere in your code.',
                whyAr: 'استخدام "late" بشكل صحيح يغنيك عن جعل كل شيء قابلاً لـ null (؟)، مما يعني أنك لن تضطر لكتابة "if (x != null)" في كل مكان في كودك.',
                mistakes: [
                    { bad: 'late String x; print(x); // CRASH! Never set', good: 'String? x; print(x); // Prints null (safer if uncertain)', badAr: 'استخدام late لمتغير قد لا يتم تعيينه أبداً', goodAr: 'استخدم late فقط إذا كنت متأكداً بنسبة ١٠٠٪ من التعيين قبل الاستخدام' }
                ],
                goodVsBad: { bad: 'String? title; // then using title!', good: 'late String title;' },
                mcqs: [
                    { q: 'What is a benefit of "late" initialization besides laziness?', opts: ['It uses more memory', 'It allows circular dependencies between classes', 'It is faster than const', 'It works only for integers'], ans: 1, fb: 'It allows you to initialize fields that depend on other object properties in an init() method or constructor body.' }
                ],
                codingQs: [
                    { q: 'Declare a "late" String variable named "description".', start: 'late ', answer: 'String description' },
                    { q: 'Write a constructor for class "Avatar" with a "required" named parameter "imageUrl".', start: 'class Avatar {\n  Avatar({required ', answer: 'this.imageUrl' }
                ]
            }
        ]
    }
];
