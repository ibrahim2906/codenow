// Phase 5 — Conditions
const PHASES_5 = [
    {
        id: 'p5', title: 'Phase 5 — Conditions', lessons: [
            {
                id: 'p5l1', title: 'If & Ternary',
                en: 'Imagine you are driving and you come to a Fork in the Road. If you go left, you reach the beach. If you go right, you reach the city. In programming, "If statements" are that fork. They let your app make decisions. \n\nTernary Operator (The Shortcut): \nThis is a one-line way to make a simple choice. Think of it as a quick "Yes or No" question. \nSyntax: (Is it raining?) ? "Take Umbrella" : "Go Sunbathing";',
                ar: 'تخيل أنك تقود سيارتك ووصلت إلى مفترق طرق. إذا ذهبت يساراً، ستصل إلى الشاطئ. إذا ذهبت يميناً، ستصل إلى المدينة. في البرمجة، "عبارات If" هي ذلك المفترق. إنها تسمح لتطبيقك باتخاذ القرارات.\n\nالعامل الثلاثي (Ternary Operator) - الاختصار:\nهذه طريقة من سطر واحد لاتخاذ قرار بسيط. فكر فيها كأنها سؤال سريع بـ "نعم أو لا".\nالصيغة: (هل تمطر؟) ؟ "خذ مظلة" : "اذهب للتنزه في الشمس"؛',
                examples: [
                    { level: 'Beginner', code: 'void main() {\n  int score = 85;\n  if (score >= 90) {\n    print("Excellent!");\n  } else if (score >= 70) {\n    print("Good Job!");\n  } else {\n    print("Keep Trying!");\n  }\n}', desc: 'Standard If/Else chain.', descAr: 'سلسلة If/Else قياسية.' },
                    { level: 'Intermediate', code: 'int hour = 14;\n// Ternary example\nString greeting = (hour < 12) ? "Good Morning" : "Good Afternoon";\nprint(greeting);', desc: 'Sleek decision making with ternary.', descAr: 'اتخاذ قرار أنيق بالمعامل الثلاثي.' }
                ],
                why: 'Conditional logic is the heart of app "intelligence." It allows the app to feel personal and responsive to the user.',
                whyAr: 'المنطق الشرطي هو قلب "ذكاء" التطبيق. يتيح للتطبيق أن يشعر المستخدم بأنه شخصي ومستجيب.',
                mistakes: [
                    { bad: 'if (isHappy == true) // Redundant', good: 'if (isHappy) // Cleaner', badAr: 'if (isHappy == true) // حشو زائد', goodAr: 'if (isHappy) // أنظف' }
                ],
                goodVsBad: { bad: 'if (x > 0) { if (y > 0) { ... } } // Deep nesting', good: 'if (x > 0 && y > 0) { ... } // Flattened logic' },
                mcqs: [
                    { q: 'A Ternary operator is a shortcut for which statement?', opts: ['For loop', 'Switch', 'If/Else', 'While loop'], ans: 2, fb: 'It provides a one-line way to perform a simple if-else assignment.' }
                ],
                codingQs: [
                    { q: 'Write an if-else statement that prints "Pass" if score >= 50, else "Fail".', start: 'int score = 75;\n', answer: 'if' },
                    { q: 'Convert the previous if-else into a single line using a Ternary operator.', start: 'String result = ', answer: '?' }
                ],
                codingChallenge: {
                    task: 'Use a Ternary operator to check if "age" is >= 18. If true return "Adult", else "Minor".',
                    answer: '?',
                    solution: 'String status = (age >= 18) ? "Adult" : "Minor";'
                }
            },
            {
                id: 'p5l2', title: 'Switch & Dart 3 Expressions',
                en: 'What if you have many choices, like choosing a floor in an Elevator? You could use 50 "if" statements, but that would be messy. "Switch" is like the elevator panel—you press one button, and it takes you straight to the right floor.\n\nDart 3 Superpower: Switch Expressions\nIn modern Dart, a switch can now "Return" a result directly to a variable. It is cleaner, faster, and much more powerful than the old way.',
                ar: 'ماذا لو كان لديك العديد من الخيارات، مثل اختيار طابق في مصعد؟ يمكنك استخدام 50 عبارة "if"، لكن ذلك سيكون فوضوياً. "Switch" تشبه لوحة المصعد — تضغط على زر واحد، وتأخذك مباشرة إلى الطابق الصحيح.\n\nقوة Dart 3 الخارقة: تعبيرات Switch\nفي Dart الحديثة، يمكن لـ switch الآن "إرجاع" نتيجة مباشرة إلى متغير. إنها أنظف وأسرع وأقوى بكثير من الطريقة القديمة.',
                examples: [
                    { level: 'Beginner', code: 'void main() {\n  String grade = "A";\n  switch (grade) {\n    case "A": print("Amazing!"); break;\n    case "B": print("Good!"); break;\n    default: print("Study hard!");\n  }\n}', desc: 'Basic Switch Case.', descAr: 'عبارة Switch Case أساسية.' },
                    { level: 'Intermediate', code: 'String weather = "Sunny";\n// Dart 3 Switch Expression\nString activity = switch (weather) {\n  "Cloudy" => "Reading",\n  "Sunny" => "Hiking",\n  _ => "Stay home"\n};\nprint(activity);', desc: 'Modern Switch expression syntax.', descAr: 'صيغة تعبير Switch الحديثة.' }
                ],
                why: 'Using Switch instead of long If/Else chains makes your code much easier to read and maintain as your app grows.',
                whyAr: 'استخدام Switch بدلاً من سلاسل If/Else الطويلة يجعل كودك أسهل بكثير في القراءة والصيانة مع نمو تطبيقك.',
                mistakes: [
                    { bad: 'Forgetting "break" in a traditional switch', good: 'Modern switch expressions dont need "break"!', badAr: 'نسيان "break" في switch التقليدية', goodAr: 'تعبيرات switch الحديثة لا تحتاج لـ "break"!' }
                ],
                goodVsBad: { bad: 'if (x==1)... else if (x==2)... else if (x==3)...', good: 'switch(x) { case 1... case 2... } // Much cleaner' },
                mcqs: [
                    { q: 'Do modern Dart 3 Switch Expressions require the "break" keyword?', opts: ['Yes', 'No', 'Only for strings', 'Only in debug mode'], ans: 1, fb: 'Switch expressions use arrow (=>) syntax and do not need breaks.' }
                ],
                codingQs: [
                    { q: 'Write a basic Switch statement for a variable "command" with cases "start" and "stop".', start: 'String command = "start";\nswitch(command) {\n  ', answer: 'case' },
                    { q: 'Write a Dart 3 Switch Expression that returns 1 for "on" and 0 for "off".', start: 'var state = "on";\nint value = switch(state) {\n  ', answer: '=>' }
                ],
                codingChallenge: {
                    task: 'Write a Dart 3 Switch Expression that checks "color" and returns "Go" for "Green" and "Stop" for "Red".',
                    answer: '=>',
                    solution: 'String signal = switch(color) { "Green" => "Go", "Red" => "Stop", _ => "Wait" };'
                }
            }
        ]
    }
];
