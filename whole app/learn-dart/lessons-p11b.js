const PHASES_11B = [
    {
        id: 'p11b', title: 'Phase 11 — Streams (Advanced Async)', lessons: [
            {
                id: 'p11bl1', title: 'Streams & Sequences',
                en: 'A Stream is like a "Radio Station." Instead of getting one song all at once (Future), you listen to a continuous flow of music over time. If you tune in late, you miss the songs that already played! \n\n- Single Subscription: Like a private phone call (Only 1 listener allowed).\n- Broadcast: Like a loud speaker at a party (Anyone can join and listen at any time).',
                ar: 'الـ Stream يشبه "محطة الراديو". بدلاً من الحصول على أغنية واحدة دفعة واحدة (Future)، أنت تستمع إلى تدفق مستمر من الموسيقى عبر الزمن. إذا ضبطت المحطة متأخراً، فستفوتك الأغاني التي عُرضت بالفعل!\n\n- اشتراك واحد: يشبه مكالمة هاتفية خاصة (يُسمح بـ مستمع واحد فقط).\n- البث (Broadcast): يشبه مكبر صوت في حفلة (يمكن لأي شخص الانضمام والاستماع في أي وقت).',
                examples: [
                    { level: 'Beginner', code: 'Stream<int> timerStream() async* {\n  for (int i = 5; i >= 1; i--) {\n    await Future.delayed(Duration(seconds: 1));\n    yield i; // Emit i\n  }\n}', desc: 'Creating a countdown stream.', descAr: 'إنشاء stream للعد التنازلي.' },
                    { level: 'Intermediate', code: 'void main() {\n  var myStream = Stream.fromIterable([1, 2, 3]).asBroadcastStream();\n  myStream.listen((n) => print("L1: $n"));\n  myStream.listen((n) => print("L2: $n")); // Works because of broadcast\n}', desc: 'Using broadcast streams.', descAr: 'استخدام الـ broadcast streams.' }
                ],
                why: 'Streams are the "heartbeat" of reactive apps. In Flutter, the StreamBuilder widget lets you build UIs that update automatically as data flows in.',
                whyAr: 'تعد الـ Streams هي "نبض القلب" للتطبيقات التفاعلية. في Flutter، تسمح لك StreamBuilder ببناء واجهات مستخدم تتحدث تلقائياً مع تدفق البيانات.',
                mistakes: [
                    { bad: 'Listening twice to a single-subscription stream', good: 'Use .asBroadcastStream() if you need multiple listeners', badAr: 'الاستماع مرتين لـ stream ذي اشتراك واحد', goodAr: 'استخدم asBroadcastStream() إذا كنت بحاجة لعدة مستمعين' }
                ],
                goodVsBad: { bad: 'Future<List> getAllMessages();', good: 'Stream<Message> getMessageStream(); // Real-time chat' },
                mcqs: [
                    { q: 'What keyword outputs a value into a stream?', opts: ['return', 'emit', 'yield', 'push'], ans: 2, fb: 'The yield keyword is used inside async* to add values to a stream.' },
                    { q: 'What is a Stream in Dart?', opts: ['A single value', 'A sequence of data over time', 'A type of integer', 'A way to name classes'], ans: 1, fb: 'Streams are like a river of data that arrives asynchronously.' },
                    { q: 'Which keyword is used in a function that returns a Stream?', opts: ['async', 'async*', 'sync*', 'stream'], ans: 1, fb: 'async* defines a generator function that produces a Stream.' }
                ],
                codingQs: [
                    { q: 'What keyword replaces "return" when emitting many values in a stream?', start: 'Stream<int> counts() async* {\n  yield 1;\n  ', answer: 'yield 2;' },
                    { q: 'Convert a standard Stream into one that allows multiple listeners.', start: 'var broadcast = myStream.', answer: 'asBroadcastStream()' }
                ]
            },
            {
                id: 'p11bl2', title: 'StreamControllers',
                en: 'A StreamController is the "Radio Transmitter." It is how you manually broadcast your own songs or data. \n\nPro Tip: Always turn off the transmitter (controller.close()) when the show is over! If you leave it running, you waste energy (Memory Leak).',
                ar: 'الـ StreamController هو "جهاز إرسال الراديو". إنه الطريقة التي تبث بها أغانيك أو بياناتك يدوياً.\n\nنصيحة للمحترفين: أغلق جهاز الإرسال دائماً (controller.close()) عندما ينتهي العرض! إذا تركته يعمل، فستفقد الطاقة (تسريب الذاكرة - Memory Leak).',
                examples: [
                    { level: 'Advanced', code: 'final controller = StreamController<String>();\n\nvoid start() {\n  controller.stream.listen((data) => print(data));\n  controller.sink.add("Hello async world!");\n  // Don\'t forget to close later!\n}', desc: 'Using StreamController manually.', descAr: 'استخدام StreamController يدوياً.' }
                ],
                why: 'StreamControllers are the building blocks of the BLoC pattern, which is the most popular way to manage complex data in large Flutter apps.',
                whyAr: 'تعد StreamControllers هي لبنات بناء نمط BLoC، وهي الطريقة الأكثر شيوعاً لإدارة البيانات المعقدة في تطبيقات Flutter الكبيرة.',
                mistakes: [
                    { bad: 'Leaving a controller open after use (Memory Leak)', good: 'Always override dispose() in Flutter to close controllers', badAr: 'ترك الـ controller مفتوحاً بعد الاستخدام', goodAr: 'أغلق الـ controllers دائماً عند انتهاء الحاجة إليها' }
                ],
                goodVsBad: { bad: 'controller.add(e);', good: 'controller.sink.add(e); // Best practice' },
                mcqs: [
                    { q: 'A StreamController is essentially a...', opts: ['Type of list', 'Manual way to manage a Stream', 'Replacement for main()', 'Physics engine'], ans: 1, fb: 'Controllers give you a sink to put data in and a stream to read data out.' }
                ],
                codingQs: [
                    { q: 'Add the String "Ping" to a StreamController named "ctrl".', start: 'ctrl.sink.', answer: 'add("Ping")' },
                    { q: 'Close the StreamController "ctrl" to prevent memory leaks.', start: 'ctrl.', answer: 'close()' }
                ]
            }
        ]
    }
];
