// Phase 6 — Loops
const PHASES_6 = [
    {
        id: 'p6', title: 'Phase 6 — Loops', lessons: [
            {
                id: 'p6l1', title: 'For Loops & Control',
                en: 'Why type the same code 10 times when you can just use a loop? Think of a For Loop like doing Reps at the Gym. You decide: "I will do 10 pushups." You start at 1, you check if you reached 10, and after each one, you increment by 1. \n\nKeywords for Control:\n- break: "Stop! I am exhausted." (Exits the loop early).\n- continue: "Skip this rep, my form was bad." (Skips to the next count).',
                ar: 'لماذا تكتب نفس الكود 10 مرات بينما يمكنك ببساطة استخدام حلقة تكرار؟ فكر في حلقة For مثل القيام بتمارين رياضية في الجيم. أنت تقرر: "سأقوم بـ 10 ضغطات". تبدأ من 1، وتتحقق مما إذا كنت قد وصلت إلى 10، وبعد كل واحدة، تزيد بمقدار 1.\n\nكلمات التحكم:\n- break: "توقف! أنا متعب". (يخرج من الحلقة مبكراً).\n- continue: "تخطَّ هذه المرة، كانت حركتي خاطئة". (ينتقل للعدة التالية مباشرةً).',
                examples: [
                    { level: 'Beginner', code: 'void main() {\n  for (int i = 1; i <= 3; i++) {\n    print("Iteration $i");\n  }\n}', desc: 'Basic for loop counting to 3.', descAr: 'حلقة for بسيطة تعد حتى 3.' },
                    { level: 'Intermediate', code: 'var fruits = ["Apple", "Banana", "Cherry"];\n// Option 1: for-in\nfor (var f in fruits) print(f);\n\n// Option 2: .forEach()\nfruits.forEach((f) => print(f));', desc: 'Modern ways to loop over lists.', descAr: 'طرق حديثة للتكرار عبر القوائم.' },
                    { level: 'Advanced', code: 'for (int i = 1; i <= 10; i++) {\n  if (i == 5) continue; // Skip 5\n  if (i == 8) break;    // Stop at 8\n  print(i);\n}', desc: 'Using continue and break to skip or stop.', descAr: 'استخدام continue و break للتخطي أو التوقف.' }
                ],
                why: 'Loops are essential for handling data sets (like a list of 1,000 products) without manually writing 1,000 lines of code.',
                whyAr: 'التكرارات ضرورية للتعامل مع مجموعات البيانات (مثل قائمة تضم 1000 منتج) دون كتابة 1000 سطر من الكود يدوياً.',
                mistakes: [
                    { bad: 'for (int i = 0; i < 5; i--) // Infinite loop (i always < 5)', good: 'for (int i = 0; i < 5; i++)', badAr: 'حلقة لا نهائية (i ستكون دائماً < 5)', goodAr: 'for (int i = 0; i < 5; i++)' }
                ],
                goodVsBad: { bad: 'print(list[0]); print(list[1]); ...', good: 'for (var item in list) print(item);' },
                mcqs: [
                    { q: 'Correct syntax for a basic for loop is...', opts: ['for (i to 5)', 'for (var i=0; i<5; i++)', 'loop (5 times)', 'for i in 1..5'], ans: 1, fb: 'The standard for loop takes an initial value, a condition, and an increment.' }
                ],
                codingQs: [
                    { q: 'Write a for loop that prints "Count: " and the numbers 1 to 5.', start: 'for (int i = 1; i <= 5; i++) {\n  ', answer: 'print' },
                    { q: 'Use a for-in loop to print all colors from the list ["Red", "Green", "Blue"].', start: 'var colors = ["Red", "Green", "Blue"];\n', answer: 'in' }
                ]
            },
            {
                id: 'p6l2', title: 'Conditional Looping',
                en: 'Sometimes, you don\'t know how many times you need to repeat. You just know when to STOP. This is where "While" loops shine. \n\nExamples:\n- While (water is not boiling) -> Keep heating.\n- While (user hasn\'t clicked exit) -> Keep showing the game.\n\nTypes:\n1. While: Checks the condition FIRST. If it is already false, the code never runs.\n2. Do-While: Runs the code ONCE first, then checks. Use this when you want to show a menu at least once.',
                ar: 'أحياناً، لا تعرف عدد المرات التي تحتاج فيها للتكرار. أنت تعرف فقط متى تتوقف. هنا تبرز قوة حلقات "While".\n\nأمثلة:\n- طالما (الماء لم يغلِ بعد) -> استمر في التسخين.\n- طالما (المستخدم لم يضغط على خروج) -> استمر في عرض اللعبة.\n\nالأنواع:\n1. While: تفحص الشرط أولاً. إذا كان خطأ من البداية، فلن يعمل الكود أبداً.\n2. Do-While: تشغل الكود مرة واحدة أولاً، ثم تفحص. استخدمها عندما تريد عرض قائمة خيارات مرة واحدة على الأقل.',
                examples: [
                    { level: 'Beginner', code: 'int energy = 3;\nwhile (energy > 0) {\n  print("Working... Energy: $energy");\n  energy--;\n}', desc: 'While loop for dynamic conditions.', descAr: 'حلقة While للشروط الديناميكية.' },
                    { level: 'Intermediate', code: 'String input = "";\n// Do-while is great for menus or user inputs\ndo {\n  print("Menu: 1. Play, 2. Exit");\n  input = "2"; // Simulate user choosing exit\n} while (input != "2");', desc: 'Do-while ensures the menu shows at least once.', descAr: 'تضمن Do-while ظهور القائمة مرة واحدة على الأقل.' }
                ],
                why: 'Choosing the right loop type makes your code more logical. Use "for" for counting, and "while" for waiting/searching.',
                whyAr: 'اختيار نوع التكرار الصحيح يجعل كودك أكثر منطقية. استخدم "for" للعد، و "while" للانتظار أو البحث.',
                mistakes: [
                    { bad: 'while (true) { } // Infinite loop with no break', good: 'while (true) { if (done) break; }', badAr: 'حلقة لا نهائية بدون break', goodAr: 'استخدم break للخروج من الحلقات اللانهائية' }
                ],
                goodVsBad: { bad: 'int i=0; while(i<5) { print(i); } // i never changes!', good: 'int i=0; while(i<5) { print(i); i++; }' },
                mcqs: [
                    { q: 'What is the most dangerous part of a while loop?', opts: ['Using a semicolon', 'Infinite loops (forgetting to update condition)', 'using {}', 'using print'], ans: 1, fb: 'If you never update the condition variable, the loop will run forever and hang the app.' }
                ],
                codingQs: [
                    { q: 'Write a while loop that runs while "count" is less than 3, printing "Hi" each time.', start: 'int count = 0;\nwhile (count < 3) {\n  ', answer: 'count++' },
                    { q: 'Write a do-while loop that prints "Once" one time, even if the condition is false.', start: 'do {\n  print("Once");\n} while (', answer: 'false' }
                ]
            }
        ]
    }
];
