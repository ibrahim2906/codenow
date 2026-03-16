const PHASES_14 = [
    {
        id: 'p14', title: 'Phase 14 — The Road to Flutter', lessons: [
            {
                id: 'p14l1', title: 'Widgets & State',
                en: 'In Flutter, everything is a Widget! Think of Widgets as "Lego Blocks" for your phone screen. A button is a block, a piece of text is a block, and even the "Space" between them is a block. \n\n- StatelessWidget: A block that never changes color or size (Static). \n- StatefulWidget: A "Magic" block that can change color or show a new number when you touch it (Dynamic).',
                ar: 'في Flutter، كل شيء هو Widget! فكر في الـ Widgets على أنها "قطع ليغو" لشاشة هاتفك. الزر هو قطعة، والنص هو قطعة، وحتى "المساحة" بينهما هي قطعة.\n\n- StatelessWidget: قطعة لا يتغير لونها أو حجمها أبداً (ثابتة).\n- StatefulWidget: قطعة "سحرية" يمكنها تغيير لونها أو إظهار رقم جديد عند لمسها (ديناميكية).',
                examples: [
                    { level: 'Beginner', code: '// Static UI\nclass WelcomeText extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Text("Hello, Dart Master!");\n  }\n}', desc: 'A simple StatelessWidget.', descAr: 'StatelessWidget بسيط.' },
                    { level: 'Intermediate', code: '// Dynamic UI (Concept)\nclass Counter extends StatefulWidget {\n  // This class "has-a" state\n  @override\n  _CounterState createState() => _CounterState();\n}', desc: 'The structure of a StatefulWidget.', descAr: 'هيكل StatefulWidget.' }
                ],
                why: 'Understanding that a Widget is just a Class is the "Eureka!" moment for Flutter developers. Your knowledge of Classes and Inheritance is exactly what Flutter is built on.',
                whyAr: 'فهم أن الـ Widget هي مجرد كلاس هو لحظة الإدراك الحقيقية لمطوري Flutter. معرفتك بالكلاسات والوراثة هي بالضبط ما بني عليه Flutter.',
                mistakes: [
                    { bad: 'Thinking Widgets are complex magic', good: 'Remember they are just Dart classes with a build() method', badAr: 'الاعتقاد بأن الـ Widgets سحر معقد', goodAr: 'تذكر أنها مجرد كلاسات Dart تحتوي على دالة build()' }
                ],
                goodVsBad: { bad: 'void main() { // Trying to write HTML }', good: 'void main() => runApp(MyApp()); // Running a Dart app' },
                mcqs: [
                    { q: 'Flutter UI approach is described as...', opts: ['Imperative', 'Manual', 'Declarative', 'Hidden'], ans: 2, fb: 'Declarative means you describe "what" the UI should look like for a given state.' }
                ],
                codingQs: [
                    { q: 'Which base class is used for a widget that never changes?', start: 'class MyWidget extends ', answer: 'StatelessWidget' },
                    { q: 'What is the name of the method that builds the UI in a Widget?', start: 'Widget ', answer: 'build' }
                ],
                codingChallenge: {
                    task: 'Write a basic StatelessWidget class called "MyText" that returns a Text widget.',
                    answer: 'StatelessWidget',
                    solution: 'class MyText extends StatelessWidget {\n  @override\n  Widget build(Context c) => Text("Hi");\n}'
                }
            },
            {
                id: 'p14l2', title: 'Roadmap & Mastery',
                en: 'Congratulations! You have finished the "Flight Simulator" (Dart). You now know how the engine works, how to handle emergencies (Errors), and how to navigate the clouds (Async). \n\nNow, it is time to Fly the Real Plane (Flutter)! You have the foundation that most beginners skip. \n\nNext Steps: \n1. Install Flutter SDK. \n2. Build a "Simple Counter" app. \n3. Learn "Layouts" (How to put blocks next to each other).',
                ar: 'تهانينا! لقد انتهيت من "محاكي الطيران" (لغة Dart). أنت تعرف الآن كيف يعمل المحرك، وكيفية التعامل مع حالات الطوارئ (الأخطاء)، وكيفية التنقل عبر السحب (Async).\n\nالآن، حان وقت قيادة "الطائرة الحقيقية" (Flutter)! لديك الأساس الذي يتخطاه معظم المبتدئين.\n\nالخطوات التالية:\n1. تثبيت Flutter SDK.\n2. بناء تطبيق "عداد بسيط".\n3. تعلم التنسيقات (Layouts) - كيف تضع القطع بجانب بعضها البعض.',
                examples: [
                    { level: 'Pro', code: 'void main() {\n  const goal = "Build 3 Apps in 30 Days";\n  print("Status: Ready to Launch! 🚀");\n}', desc: 'Setting your sights high.', descAr: 'تحديد أهداف طموحة.' }
                ],
                why: 'Learning syntax is just the start. Engineering is about solving problems with your tools. You now have the best tool in the market.',
                whyAr: 'تعلم القواعد هو مجرد البداية. الهندسة تتعلق بحل المشكلات باستخدام أدواتك. لديك الآن أفضل أداة في السوق.',
                mistakes: [
                    { bad: 'Watching tutorials without coding along', good: 'Break things, fix them, and build small projects daily', badAr: 'مشاهدة الدروس دون تطبيق عملي', goodAr: 'جرب، أخطئ، أصلح، وابنِ مشاريع صغيرة يومياً' }
                ],
                goodVsBad: { bad: 'print("I will be a developer someday");', good: 'print("I am a Dart developer. I start building today.");' },
                mcqs: [
                    { q: 'Which function is the starting point of ANY Dart program?', opts: ['start()', 'build()', 'main()', 'run()'], ans: 2, fb: 'Every Dart/Flutter app begins execution in the main() function.' }
                ],
                codingQs: [
                    { q: 'Write the entry point function for any Dart app.', start: 'void ', answer: 'main()' },
                    { q: 'Call the function that starts a Flutter app with "MyApp()".', start: 'void main() => ', answer: 'runApp(MyApp())' }
                ],
                codingChallenge: {
                    task: 'Write the main function that runs a Flutter app called "MyApp".',
                    answer: 'runApp',
                    solution: 'void main() => runApp(MyApp());'
                }
            }
        ]
    }
];
