// Phase 11 — Async Thinking Basics
const PHASES_11 = [
    {
        id: 'p11', title: 'Phase 11 — Async Thinking Basics', lessons: [
            {
                id: 'p11l1', title: 'Future, Async & Errors',
                en: 'Async programming is like "Ordering a Pizza." You call the shop (Start the task), you hang up (the code continues), and you go watch TV (doing other tasks). Eventually, the pizza arrives (Future is complete). You don\'t stand by the phone for 30 minutes doing nothing! \n\n- Future: The pizza order ticket. \n- await: Waiting at the door when you know the delivery is almost there.\n- try/catch: What to do if the shop calls and says "We are out of pepperoni!" (Handling errors).',
                ar: 'البرمجة غير المتزامنة (Async) تشبه "طلب بيتزا". أنت تتصل بالمطعم (تبدأ المهمة)، وتغلق الهاتف (يستمر الكود في العمل)، وتذهب لمشاهدة التلفاز (القيام بمهام أخرى). في النهاية، تصل البيتزا (اكتمل الـ Future). أنت لا تقف بجانب الهاتف لمدة 30 دقيقة دون فعل شيء!\n\n- Future: تذكرة طلب البيتزا.\n- await: الانتظار عند الباب عندما تعرف أن عامل التوصيل على وصول.\n- try/catch: ماذا تفعل إذا اتصل المطعم وقال "لقد نفدت البيتزا!" (معالجة الأخطاء).',
                examples: [
                    { level: 'Beginner', code: 'Future<void> main() async {\n  print("Fetching news...");\n  await Future.delayed(Duration(seconds: 1)); // Wait 1s\n  print("News arrived!");\n}', desc: 'Basic delayed execution.', descAr: 'تنفيذ متأخر بسيط.' },
                    { level: 'Intermediate', code: 'Future<void> loadData() async {\n  try {\n    var data = await fetchFromNet(); // Might fail\n    print(data);\n  } catch (e) {\n    print("Error: $e"); // Handles failures gracefully\n  }\n}', desc: 'Handling async errors.', descAr: 'معالجة أخطاء العمليات غير المتزامنة.' },
                    { level: 'Advanced', code: 'void fetchLotOfData() async {\n  // Run 3 tasks at the same time!\n  await Future.wait([\n    task1(), \n    task2(), \n    task3()\n  ]);\n  print("All done!");\n}', desc: 'Running parallel futures with wait.', descAr: 'تشغيل عدة Futures بالتوازي.' }
                ],
                why: 'In Flutter, almost every "action" (pressing a button, loading a list) involves async code. Knowing how to handle the result—and the errors—is what makes you a senior developer.',
                whyAr: 'في Flutter، كل "إجراء" تقريباً (ضغط زر، تحميل قائمة) يتضمن كوداً غير متزامن. معرفة كيفية التعامل مع النتيجة — والأخطاء — هي ما يجعلك مطوراً محترفاً.',
                mistakes: [
                    { bad: 'fetchData(); // Results used later but not awaited', good: 'await fetchData();', badAr: 'عدم انتظار النتيجة قبل استخدامها', goodAr: 'استخدم await دائماً قبل استخدام نتيجة Future' }
                ],
                goodVsBad: { bad: 'Future.delayed(...).then((v) { ... }) // Nested callbacks', good: 'await Future.delayed(...); // Clean and flat code' },
                mcqs: [
                    { q: 'What is "try/catch" used for in asynchronous code?', opts: ['To speed up the app', 'To handle errors (like a network failure)', 'To create a new list', 'To define a class'], ans: 1, fb: 'try/catch ensures that if an async operation fails, the app doesn\'t crash.' }
                ],
                codingQs: [
                    { q: 'Write an "async" function named "fetch" that returns a Future.', start: 'Future<void> fetch() ', answer: 'async' },
                    { q: 'Use "await" to wait for "myFuture" and print "Loaded".', start: 'void main() async {\n  ', answer: 'await myFuture;\n  print("Loaded");' }
                ],
                codingChallenge: {
                    task: 'Write an asynchronous function called "waitAndPrint" that waits for 2 seconds and then prints "Time is up!".',
                    answer: 'await',
                    solution: 'Future<void> waitAndPrint() async {\n  await Future.delayed(Duration(seconds: 2));\n  print("Time is up!");\n}'
                }
            }
        ]
    }
];
