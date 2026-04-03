
const roadmap = [
  {
    id: "phase-1",
    title: "المرحلة الأولى: Dart + Programming Logic",
    subtitle: "من الصفر تمامًا",
    meta: [
      "المدة: من 2 إلى 3 أسابيع",
      "الهدف: تفكر كمبرمج وتفهم الكود مش تحفظه"
    ],
    goal: "مش إنك تعرف Dart… بل إنك تفكر كمبرمج وتفهم الكود مش تحفظه.",
    weeks: [
      {
        title: "الأسبوع الأول: الأساسيات القوية جدًا",
        days: [
          {
            id: "p1-d1",
            day: "اليوم 1",
            title: "يعني إيه برمجة + أول كود",
            tags: ["أساسيات"],
            blocks: [
              {
                title: "تتعلم",
                items: [
                  "يعني إيه Programming",
                  "يعني إيه Algorithm",
                  "إزاي الكود بيشتغل"
                ]
              },
              {
                title: "أول كود",
                code: `void main() {\n  print("Hello Ibrahim");\n}`
              },
              {
                title: "تفهم",
                items: ["main() = نقطة بداية البرنامج", "print() = إخراج"]
              },
              {
                title: "تدريب",
                items: ["غير الجملة 10 مرات: اسمك / جمل مختلفة / أرقام"]
              }
            ],
            timeline: [
              "00:00:00 Introduction",
              "00:01:16 What is Dart?",
              "00:02:52 Dart SDK",
              "00:05:57 Print Statement",
              "00:13:39 Comments"
            ]
          },
          {
            id: "p1-d2",
            day: "اليوم 2",
            title: "Variables (أهم أساس)",
            tags: ["Dart"],
            blocks: [
              {
                title: "تتعلم",
                code: `int age = 20;\ndouble height = 175.5;\nString name = "Ibrahim";\nbool isStudent = true;`
              },
              {
                title: "تفهم",
                items: ["الفرق بين الأنواع", "ليه كل نوع مهم"]
              },
              {
                title: "تدريب",
                items: ["اعمل برنامج يخزن بياناتك ويطبعها"]
              }
            ],
            timeline: [
              "00:16:31 Variables",
              "00:48:08 var, const and final Variables",
              "00:54:10 final vs const variables"
            ]
          },
          {
            id: "p1-d3",
            day: "اليوم 3",
            title: "العمليات (Operators)",
            blocks: [
              {
                title: "تتعلم",
                items: ["+ - * / %"]
              },
              {
                title: "تدريب",
                items: ["اعمل آلة حاسبة بسيطة"]
              }
            ],
            timeline: ["00:08:59 Operators"]
          },
          {
            id: "p1-d4",
            day: "اليوم 4",
            title: "If / Else (اتخاذ القرار)",
            blocks: [
              {
                title: "تتعلم",
                code: `if (age > 18) {\n  print("Adult");\n} else {\n  print("Child");\n}`
              },
              {
                title: "تدريب",
                items: ["برنامج يحدد: ناجح أو راسب", "برنامج يحدد: موجب أو سالب"]
              }
            ],
            timeline: [
              "01:10:35 If Condition",
              "01:28:42 Ternary Operators",
              "01:31:02 Switch Statement",
              "01:36:52 Exercise 1"
            ]
          },
          {
            id: "p1-d5",
            day: "اليوم 5",
            title: "Loops (نقطة ضعفك 🔥)",
            tags: ["تركيز"],
            blocks: [
              {
                title: "تتعلم",
                code: `for (int i = 0; i < 5; i++) {\n  print(i);\n}`
              },
              {
                title: "تفهمها بعمق",
                items: ["البداية", "الشرط", "التكرار"]
              },
              {
                title: "تدريبات قوية",
                items: ["اطبع من 1 لـ 100", "اطبع الأعداد الزوجية", "جدول الضرب"]
              }
            ],
            timeline: [
              "01:45:06 For Loop",
              "01:58:30 While Loop",
              "02:01:39 Do While Loop",
              "02:05:12 continue keyword",
              "02:08:11 Exercise 2",
              "02:08:30 break keyword"
            ]
          },
          {
            id: "p1-d6",
            day: "اليوم 6",
            title: "Functions (تنظيم الكود)",
            blocks: [
              {
                title: "تتعلم",
                code: `void sayHello() {\n  print("Hello");\n}`
              },
              {
                title: "تدريب",
                items: ["function تجمع رقمين", "function تحدد أكبر رقم"]
              }
            ],
            timeline: [
              "02:09:49 Functions",
              "02:18:49 Returning 2 Values from a Function (Records)",
              "02:21:56 Patterns",
              "02:23:45 Returning Nullable Variables/Values",
              "02:25:48 Function Positional Arguments & Global Variables",
              "02:33:43 Function Named Arguments",
              "02:40:40 Named Records",
              "02:43:03 Returning Functions from Functions",
              "02:44:59 Arrow Function",
              "02:45:48 Anonymous Functions"
            ]
          },
          {
            id: "p1-d7",
            day: "اليوم 7",
            title: "مراجعة + Mini Project",
            tags: ["مشروع"],
            blocks: [
              {
                title: "مشروع اليوم",
                items: [
                  "Calculator بسيط",
                  "يدخل رقمين",
                  "ويحسب: جمع / طرح / ضرب / قسمة"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "الأسبوع الثاني: التفكير الحقيقي",
        days: [
          {
            id: "p1-d8",
            day: "اليوم 8",
            title: "Lists",
            blocks: [
              {
                title: "تتعلم",
                code: `List numbers = [1, 2, 3];`
              },
              {
                title: "تدريب",
                items: ["تضيف عنصر", "تحذف عنصر", "تبحث عن عنصر"]
              }
            ],
            timeline: ["04:39:48 Lists", "05:22:04 Sets"]
          },
          {
            id: "p1-d9",
            day: "اليوم 9",
            title: "Maps",
            blocks: [
              {
                title: "تتعلم",
                code: `Map student = {\n  "name": "Ibrahim",\n  "age": 20\n};`
              }
            ],
            timeline: ["05:24:39 Maps", "05:49:32 Enums", "05:57:22 Enhanced Enums"]
          },
          {
            id: "p1-d10",
            day: "اليوم 10",
            title: "Loops متقدم",
            blocks: [
              {
                title: "تتعلم",
                items: ["Nested loops", "مشاكل صعبة شوية"]
              }
            ]
          },
          {
            id: "p1-d11",
            day: "اليوم 11",
            title: "Strings",
            blocks: [
              {
                title: "تتعلم",
                items: ["دمج النصوص", "التعامل مع النصوص"]
              }
            ]
          },
          {
            id: "p1-d12",
            day: "اليوم 12",
            title: "Null Safety",
            blocks: [
              {
                title: "أهم نقطة في Dart",
                items: ["تعرف تستخدم ?, !, late بشكل صحيح"]
              }
            ],
            timeline: ["00:58:25 Optional Variables/ Nullable Variables"]
          },
          {
            id: "p1-d13",
            day: "اليوم 13",
            title: "Error Handling",
            blocks: [
              {
                title: "تتعلم",
                items: [
                  "try / catch / finally",
                  "التعامل مع الأخطاء بدون ما البرنامج يقع"
                ]
              }
            ],
            timeline: ["06:02:03 Exception Handling"]
          },
          {
            id: "p1-d14",
            day: "اليوم 14",
            title: "Project أقوى",
            tags: ["مشروع"],
            blocks: [
              {
                title: "مشروع",
                items: ["نظام إدارة طلاب بسيط"]
              }
            ]
          }
        ]
      },
      {
        title: "الأسبوع الثالث: الاحتراف",
        days: [
          {
            id: "p1-d15",
            day: "اليوم 15",
            title: "OOP (الأساسيات)",
            blocks: [
              {
                title: "تتعلم",
                items: ["مفهوم الكلاسات والـ Objects"]
              },
              {
                title: "مثال",
                code: `class Car {\n  String name;\n  int speed;\n\n  Car(this.name, this.speed);\n}`
              }
            ],
            timeline: [
              "02:45:53 Classes",
              "03:06:02 Constructor",
              "03:10:53 this keyword",
              "03:11:38 Positional Constructor Arguments",
              "03:17:43 Immutable Classes",
              "03:20:19 Named Constructor Arguments",
              "03:21:18 Classes Terminology"
            ]
          },
          {
            id: "p1-d16",
            day: "اليوم 16",
            title: "OOP (Constructors + Encapsulation)",
            blocks: [
              {
                title: "تتعلم",
                items: ["Constructors", "Encapsulation", "Getters / Setters"]
              }
            ],
            timeline: [
              "03:22:29 Private Variables",
              "03:26:46 Getters",
              "03:30:30 Setters",
              "03:32:26 Static Variables",
              "03:37:26 Static Functions",
              "03:38:09 When to use static keyword?"
            ]
          },
          {
            id: "p1-d17",
            day: "اليوم 17",
            title: "OOP (Inheritance + Polymorphism)",
            blocks: [
              {
                title: "تتعلم",
                items: ["Inheritance", "Polymorphism", "override"]
              }
            ],
            timeline: [
              "03:40:10 Inheritance",
              "03:58:58 implements keyword",
              "04:09:13 Abstract Classes",
              "04:14:03 Object Oriented Programming (OOP) in Dart",
              "04:16:09 Polymorphism",
              "04:19:52 Abstraction",
              "04:22:12 Encapsulation",
              "04:24:11 OOP Brief",
              "04:25:14 Mixins",
              "04:32:40 Class Modifiers"
            ]
          },
          {
            id: "p1-d18",
            day: "اليوم 18",
            title: "Async / Await (مهم جدًا لـ Flutter)",
            blocks: [
              {
                title: "تتعلم",
                items: ["Future", "async / await", "التعامل مع العمليات البطيئة"]
              }
            ],
            timeline: ["06:10:45 Futures (Promises)"]
          },
          {
            id: "p1-d19",
            day: "اليوم 19",
            title: "Future & Stream أساسيات",
            blocks: [
              {
                title: "تتعلم",
                items: ["الفرق بين Future و Stream", "أمثلة بسيطة للتجربة"]
              }
            ],
            timeline: [
              "06:55:08 Streams",
              "07:18:46 Bonus: Creating Records",
              "07:22:57 Bonus: Patterns & Pattern Matching",
              "07:35:11 Extensions",
              "07:41:25 Conclusion"
            ]
          },
          {
            id: "p1-d20",
            day: "اليوم 20",
            title: "مراجعة قوية + مشروع",
            tags: ["مشروع"],
            blocks: [
              {
                title: "مراجعة",
                items: ["راجع أهم المفاهيم بسرعة وتركيز"]
              },
              {
                title: "مشروع",
                items: ["اختار مشروع صغير يجمع الأساسيات"]
              }
            ]
          },
          {
            id: "p1-d21",
            day: "اليوم 21",
            title: "إنهاء المشروع + تحسينات",
            tags: ["تسليم"],
            blocks: [
              {
                title: "تنفيذ",
                items: [
                  "نفّذ المشروع للنهاية",
                  "ضيف تحسينات بسيطة",
                  "اكتب ملخص لما اتعلمته"
                ]
              }
            ]
          }
        ]
      }
    ],
    extras: [
      {
        title: "طريقة المذاكرة الصح",
        split: {
          leftTitle: "❌ غلط",
          leftItems: ["تتفرج بس", "تنسخ الكود"],
          rightTitle: "✅ صح",
          rightItems: ["تكتب بإيدك", "تغلط", "تصلح"]
        }
      },
      {
        title: "أفضل مصادر مجانية",
        items: [
          "Dart 8 hours (ابدأ بيه)",
          "FreeCodeCamp 37 hours (للتعمق)",
          "HackerRank",
          "LeetCode (easy بس)"
        ]
      },
      {
        title: "أهم مشاكل هتقابلك",
        pairs: [
          {
            problem: "مش فاهم loops",
            solution: "ارسمها على ورقة"
          },
          {
            problem: "بنسى الكود",
            solution: "مش مطلوب تحفظ… افهم"
          },
          {
            problem: "بتوه في المشاريع",
            solution: "قسم المشروع لأجزاء"
          }
        ]
      },
      {
        title: "الهدف النهائي من المرحلة",
        items: [
          "تفهم أي كود Dart",
          "تكتب برامج لوحدك",
          "جاهز تدخل Flutter بقوة"
        ]
      }
    ]
  },
  {
    id: "phase-2",
    title: "المرحلة الثانية: Flutter بالتفصيل العميق",
    subtitle: "Flutter = Widgets × Widgets × Widgets",
    meta: [
      "المدة: من 4 إلى 6 أسابيع",
      "الهدف: UI احترافي + Apps حقيقية"
    ],
    goal: "تبني UI احترافي، تفهم Flutter من جوّه مش تحفظ Widgets، وتعمل Apps حقيقية.",
    weeks: [
      {
        title: "الأسبوع 1: الأساس الحقيقي (UI Core)",
        days: [
          {
            id: "p2-d1",
            day: "اليوم 1",
            title: "أول App + Structure",
            blocks: [
              {
                title: "تتعلم",
                items: ["تثبيت Flutter", "إنشاء مشروع", "تشغيل التطبيق"]
              },
              {
                title: "الكود الأساسي",
                code: `void main() {\n  runApp(MyApp());\n}`
              },
              {
                title: "تفهم",
                items: ["runApp = تشغيل التطبيق", "كل حاجة تبدأ من هنا"]
              }
            ]
          },
          {
            id: "p2-d2",
            day: "اليوم 2",
            title: "Scaffold (هيكل الشاشة)",
            blocks: [
              {
                title: "تتعلم",
                code: `Scaffold(\n  appBar: AppBar(title: Text("My App")),\n  body: Center(child: Text("Hello")),\n)`
              },
              {
                title: "تفهم",
                items: ["AppBar = الشريط العلوي", "body = محتوى الصفحة"]
              }
            ]
          },
          {
            id: "p2-d3",
            day: "اليوم 3",
            title: "Layout (Row / Column)",
            blocks: [
              {
                title: "تتعلم",
                code: `Column(\n  children: [\n    Text("A"),\n    Text("B"),\n  ],\n)`
              },
              {
                title: "تفهم",
                items: ["Column = عمودي", "Row = أفقي"]
              },
              {
                title: "تدريب",
                items: ["اعمل UI فيه: صورة / نص / زرار"]
              }
            ]
          },
          {
            id: "p2-d4",
            day: "اليوم 4",
            title: "Spacing & Design",
            blocks: [
              {
                title: "تتعلم",
                items: ["Padding", "Margin", "SizedBox"]
              }
            ]
          },
          {
            id: "p2-d5",
            day: "اليوم 5",
            title: "Buttons + Interaction",
            blocks: [
              {
                title: "تتعلم",
                code: `ElevatedButton(\n  onPressed: () {\n    print("Clicked");\n  },\n  child: Text("Click me"),\n)`
              },
              {
                title: "تدريب",
                items: ["زرار يطبع رسالة عند الضغط"]
              }
            ]
          },
          {
            id: "p2-d6",
            day: "اليوم 6",
            title: "Stateless vs Stateful",
            blocks: [
              {
                title: "مفاهيم",
                items: ["Stateless = ثابت", "Stateful = بيتغير"]
              },
              {
                title: "مثال",
                items: ["زرار يزود رقم → لازم Stateful"]
              }
            ]
          },
          {
            id: "p2-d7",
            day: "اليوم 7",
            title: "Mini Project",
            tags: ["مشروع"],
            blocks: [
              {
                title: "Profile UI",
                items: ["صورة", "اسم", "وصف", "زرار"]
              }
            ]
          }
        ]
      },
      {
        title: "الأسبوع 2: Navigation + Forms",
        days: [
          {
            id: "p2-d8",
            day: "اليوم 8",
            title: "Navigation",
            blocks: [
              {
                title: "تتعلم",
                items: ["Navigator.push(...)", "إزاي تنتقل بين صفحات"]
              }
            ]
          },
          {
            id: "p2-d9",
            day: "اليوم 9",
            title: "Forms + Input",
            blocks: [
              {
                title: "تتعلم",
                items: ["TextField()", "شاشة Login للتدريب"]
              }
            ]
          },
          {
            id: "p2-d10",
            day: "اليوم 10",
            title: "Validation",
            blocks: [
              {
                title: "تتعلم",
                items: ["تحقق من البيانات", "رسائل خطأ واضحة"]
              }
            ]
          },
          {
            id: "p2-d11",
            day: "اليوم 11",
            title: "ListView",
            blocks: [
              {
                title: "تتعلم",
                items: ["ListView.builder()", "قائمة منتجات للتجربة"]
              }
            ]
          },
          {
            id: "p2-d12",
            day: "اليوم 12",
            title: "Images + Assets",
            blocks: [
              {
                title: "تتعلم",
                items: ["إضافة الصور للمشروع", "تنظيم مجلد assets"]
              }
            ]
          },
          {
            id: "p2-d13",
            day: "اليوم 13",
            title: "HTTP (API)",
            blocks: [
              {
                title: "تتعلم",
                items: ["http.get(...)", "إزاي تجيب بيانات من الإنترنت"]
              }
            ]
          },
          {
            id: "p2-d14",
            day: "اليوم 14",
            title: "Project",
            tags: ["مشروع"],
            blocks: [
              {
                title: "Todo App",
                items: ["واجهة مرتبة", "تجربة استخدام واضحة"]
              }
            ]
          }
        ]
      },
      {
        title: "الأسبوع 3: الاحتراف الحقيقي",
        days: [
          {
            id: "p2-d15",
            day: "اليوم 15",
            title: "State Management (Provider)",
            blocks: [
              {
                title: "تتعلم",
                items: ["Provider", "ربط البيانات بالواجهة"]
              }
            ]
          },
          {
            id: "p2-d16",
            day: "اليوم 16",
            title: "Clean Code",
            blocks: [
              {
                title: "تتعلم",
                items: ["تقسيم الكود", "تنظيم المشروع", "فصل الملفات"]
              }
            ]
          },
          {
            id: "p2-d17",
            day: "اليوم 17",
            title: "Reusable Widgets",
            blocks: [
              {
                title: "تتعلم",
                items: ["تحويل الأجزاء المتكررة إلى Widgets قابلة لإعادة الاستخدام"]
              }
            ]
          },
          {
            id: "p2-d18",
            day: "اليوم 18",
            title: "Animations (بداية)",
            blocks: [
              {
                title: "تتعلم",
                items: ["AnimatedContainer", "Hero", "AnimationController (لمحة)"]
              }
            ]
          },
          {
            id: "p2-d19",
            day: "اليوم 19",
            title: "Theming",
            blocks: [
              {
                title: "تتعلم",
                items: ["Dark / Light Theme", "استخدام ThemeData"]
              }
            ]
          },
          {
            id: "p2-d20",
            day: "اليوم 20",
            title: "Project قوي (Notes App + Firebase)",
            tags: ["مشروع"],
            blocks: [
              {
                title: "الجزء الأول",
                items: ["خطط للتطبيق", "صمم UI نظيف"]
              }
            ]
          },
          {
            id: "p2-d21",
            day: "اليوم 21",
            title: "Project قوي (Notes App + Firebase)",
            tags: ["مشروع"],
            blocks: [
              {
                title: "الجزء الثاني",
                items: ["اربط Firebase", "أنهِ التطبيق واختبره"]
              }
            ]
          }
        ]
      },
      {
        title: "الأسبوع 4+: مستوى الشركات",
        days: [
          {
            id: "p2-p1",
            day: "محور 1",
            title: "Riverpod أو Bloc",
            detailsLabel: "تفاصيل المحور",
            blocks: [
              {
                title: "تتعلم",
                items: ["State Management متقدم", "اختيار الأنسب للمشروع"]
              }
            ]
          },
          {
            id: "p2-p2",
            day: "محور 2",
            title: "Architecture (MVVM / Clean Architecture)",
            detailsLabel: "تفاصيل المحور",
            blocks: [
              {
                title: "تتعلم",
                items: ["تنظيم المشروع على مستوى الشركات", "فصل الطبقات"]
              }
            ]
          },
          {
            id: "p2-p3",
            day: "محور 3",
            title: "Performance Optimization",
            detailsLabel: "تفاصيل المحور",
            blocks: [
              {
                title: "تتعلم",
                items: ["تحسين الأداء", "تقليل إعادة البناء"]
              }
            ]
          },
          {
            id: "p2-p4",
            day: "محور 4",
            title: "UI/UX داخل Flutter",
            detailsLabel: "تفاصيل المحور",
            blocks: [
              {
                title: "تتعلم",
                items: ["قواعد التصميم الاحترافي", "مراجعة واجهات تطبيقات كبيرة"]
              }
            ]
          }
        ]
      }
    ],
    extras: [
      {
        title: "كل حاجة Widget",
        items: [
          "زرار = Widget",
          "نص = Widget",
          "شاشة = Widget",
          "التطبيق كله = Widget"
        ]
      },
      {
        title: "UI/UX داخل Flutter",
        split: {
          leftTitle: "✅ اعمل",
          leftItems: ["مسافات مريحة", "ألوان قليلة", "خطوط واضحة"],
          rightTitle: "❌ متعملش",
          rightItems: ["UI مزعج", "زحمة عناصر"]
        }
      },
      {
        title: "أدوات مهمة",
        items: ["Figma (تصميم)", "Flutter DevTools"]
      },
      {
        title: "استخدام AI هنا",
        items: ["تحسين UI", "شرح Widget", "Debug", "مثال: اشـرحلي ليه الكود ده مش شغال"]
      },
      {
        title: "المشاريع الأساسية",
        items: ["Todo App", "Notes App", "E-commerce UI"]
      },
      {
        title: "أخطاء قاتلة",
        split: {
          leftTitle: "❌",
          leftItems: ["حفظ Widgets", "نسخ كود", "تجاهل State Management"],
          rightTitle: "✅",
          rightItems: ["تفهم كل Widget ليه موجود", "تبني UI بإيدك", "تنظم الحالة"]
        }
      },
      {
        title: "الهدف النهائي من المرحلة",
        items: [
          "تبني أي UI",
          "تربط API",
          "تعمل Apps حقيقية",
          "جاهز Backend"
        ]
      }
    ]
  },
  {
    id: "phase-3",
    title: "المرحلة الثالثة: Backend + Database (باحتراف)",
    subtitle: "Flutter + Backend + Database",
    meta: [
      "الهدف: فهم البيانات وبناء APIs وربط Flutter بسيرفر حقيقي",
      "التركيز: Firebase ثم APIs ثم Node.js"
    ],
    goal: "تفهم إزاي البيانات بتتحرك، تبني APIs، وتربط Flutter بباك إند حقيقي.",
    weeks: [
      {
        title: "الأسبوع 1: Firebase Basics",
        days: [
          {
            id: "p3-d1",
            day: "اليوم 1",
            title: "Firebase Setup",
            blocks: [
              {
                title: "تتعلم",
                items: ["إنشاء مشروع", "ربطه بـ Flutter"]
              }
            ]
          },
          {
            id: "p3-d2",
            day: "اليوم 2",
            title: "Authentication",
            blocks: [
              {
                title: "تتعلم",
                items: ["Email/Password login", "Register"]
              }
            ]
          },
          {
            id: "p3-d3",
            day: "اليوم 3",
            title: "Firestore (Database)",
            blocks: [
              {
                title: "تتعلم",
                items: ["قاعدة بيانات NoSQL", "تنظيم البيانات داخل collections"]
              }
            ]
          },
          {
            id: "p3-d4",
            day: "اليوم 4",
            title: "CRUD Operations",
            blocks: [
              {
                title: "تتعلم",
                items: ["Create", "Read", "Update", "Delete"]
              }
            ]
          },
          {
            id: "p3-d5",
            day: "اليوم 5",
            title: "Storage",
            blocks: [
              {
                title: "تتعلم",
                items: ["رفع الصور", "تنظيم الملفات"]
              }
            ]
          },
          {
            id: "p3-d6",
            day: "اليوم 6",
            title: "Security Rules",
            blocks: [
              {
                title: "تتعلم",
                items: ["حماية البيانات", "تقييد الوصول"]
              }
            ]
          },
          {
            id: "p3-d7",
            day: "اليوم 7",
            title: "Project",
            tags: ["مشروع"],
            blocks: [
              {
                title: "Login + Profile App",
                items: ["تسجيل/دخول", "صفحة بروفايل"]
              }
            ]
          }
        ]
      },
      {
        title: "الأسبوع 2: API + Networking",
        days: [
          {
            id: "p3-d8",
            day: "اليوم 8",
            title: "REST API",
            blocks: [
              {
                title: "تفهم",
                items: ["GET", "POST", "PUT", "DELETE"]
              }
            ]
          },
          {
            id: "p3-d9",
            day: "اليوم 9",
            title: "JSON",
            blocks: [
              {
                title: "تتعلم",
                code: `{
  "name": "Ibrahim"
}`
              }
            ]
          },
          {
            id: "p3-d10",
            day: "اليوم 10",
            title: "ربط Flutter بـ API",
            blocks: [
              {
                title: "تتعلم",
                items: ["قراءة البيانات من السيرفر", "عرضها في الواجهة"]
              }
            ]
          },
          {
            id: "p3-d11",
            day: "اليوم 11",
            title: "Error Handling",
            blocks: [
              {
                title: "تتعلم",
                items: ["تتعامل مع أخطاء الشبكة", "رسائل واضحة للمستخدم"]
              }
            ]
          },
          {
            id: "p3-d12",
            day: "اليوم 12",
            title: "Authentication Token (JWT)",
            blocks: [
              {
                title: "تتعلم",
                items: ["JWT", "إرسال التوكن مع الطلبات"]
              }
            ]
          },
          {
            id: "p3-d13",
            day: "اليوم 13",
            title: "Project: App يسحب بيانات من API",
            tags: ["مشروع"],
            blocks: [
              {
                title: "الجزء الأول",
                items: ["اختار API", "اعمل شاشة عرض البيانات"]
              }
            ]
          },
          {
            id: "p3-d14",
            day: "اليوم 14",
            title: "Project: App يسحب بيانات من API",
            tags: ["مشروع"],
            blocks: [
              {
                title: "الجزء الثاني",
                items: ["أضف تحميل/أخطاء", "حسن تجربة الاستخدام"]
              }
            ]
          }
        ]
      },
      {
        title: "الأسبوع 3: Backend حقيقي (Node.js)",
        days: [
          {
            id: "p3-d15",
            day: "اليوم 15",
            title: "مقدمة Node.js",
            blocks: [
              {
                title: "تتعلم",
                items: ["فكرة السيرفر", "تشغيل Node.js"]
              }
            ]
          },
          {
            id: "p3-d16",
            day: "اليوم 16",
            title: "Express",
            blocks: [
              {
                title: "تتعلم",
                code: `app.get("/users", (req, res) => {\n  res.send("Users");\n});`
              }
            ]
          },
          {
            id: "p3-d17",
            day: "اليوم 17",
            title: "إنشاء API",
            blocks: [
              {
                title: "تتعلم",
                items: ["بناء endpoints نظيفة", "تنظيم الـ routes"]
              }
            ]
          },
          {
            id: "p3-d18",
            day: "اليوم 18",
            title: "Database (MongoDB)",
            blocks: [
              {
                title: "تتعلم",
                items: ["ربط قاعدة البيانات", "إنشاء collections"]
              }
            ]
          },
          {
            id: "p3-d19",
            day: "اليوم 19",
            title: "Authentication",
            blocks: [
              {
                title: "تتعلم",
                items: ["Login system", "حماية المسارات"]
              }
            ]
          },
          {
            id: "p3-d20",
            day: "اليوم 20",
            title: "Project: Backend كامل لتطبيق",
            tags: ["مشروع"],
            blocks: [
              {
                title: "الجزء الأول",
                items: ["خطط للـ API", "ابدأ ببناء endpoints"]
              }
            ]
          },
          {
            id: "p3-d21",
            day: "اليوم 21",
            title: "Project: Backend كامل لتطبيق",
            tags: ["مشروع"],
            blocks: [
              {
                title: "الجزء الثاني",
                items: ["ربط قاعدة البيانات", "اختبر الـ API بالكامل"]
              }
            ]
          }
        ]
      }
    ],
    extras: [
      {
        title: "الفكرة الأساسية",
        items: [
          "Flutter (Frontend)",
          "Backend (Server)",
          "Database (بيانات)",
          "العملية: Flutter → Backend → Database → Backend → Flutter"
        ]
      },
      {
        title: "ابدأ بـ Firebase",
        items: ["سهل جدًا", "سريع", "بيخليك تركز على الفهم", "بعده: Supabase ثم Node.js"]
      },
      {
        title: "Database بعمق",
        split: {
          leftTitle: "NoSQL",
          leftItems: ["Firebase", "MongoDB", "مرن", "سريع"],
          rightTitle: "SQL",
          rightItems: ["PostgreSQL", "منظم", "قوي"]
        }
      },
      {
        title: "أهم مهارات لازم تتقنها",
        items: [
          "تصميم Database (users / posts / orders)",
          "كتابة APIs نظيفة",
          "Authentication",
          "Security"
        ]
      },
      {
        title: "استخدام AI هنا",
        items: ["كتابة APIs", "Debug", "تحسين الأداء"]
      },
      {
        title: "أخطاء قاتلة",
        split: {
          leftTitle: "❌",
          leftItems: ["الاعتماد على Firebase بس", "عدم فهم API", "تجاهل Security"],
          rightTitle: "✅",
          rightItems: ["فهم request/response", "بناء Backend بنفسك", "تأمين البيانات"]
        }
      },
      {
        title: "مشاريع المرحلة",
        items: ["Login System", "Chat App", "E-commerce Backend"]
      },
      {
        title: "الهدف النهائي",
        items: [
          "تعمل Backend كامل",
          "تربط Flutter مع Database",
          "تبني App حقيقي",
          "جاهز لشركات كبيرة"
        ]
      }
    ]
  },
  {
    id: "phase-4",
    title: "المرحلة الرابعة: UI/UX + Portfolio + Career",
    subtitle: "الناس مش بتشتري كود… الناس بتشتري تجربة",
    meta: [
      "الهدف: UI احترافي + Portfolio يخطف العميل",
      "المسار: Design → Portfolio → Freelancing/Job"
    ],
    goal: "تصمم تطبيقات شكلها شركة كبيرة، تبني Portfolio قوي، وتبدأ Freelancing أو شغل شركة.",
    weeks: [
      {
        title: "الجزء الأول: UI Design (الشكل)",
        days: [
          {
            id: "p4-u1",
            day: "محور 1",
            title: "الألوان (Color Theory)",
            detailsLabel: "تفاصيل المحور",
            blocks: [
              {
                title: "تفهم",
                items: ["Primary Color", "Secondary", "Background"]
              },
              {
                title: "قواعد ذهبية",
                items: ["استخدم 2–3 ألوان بس", "خلي في contrast واضح", "متستخدمش ألوان عشوائية"]
              }
            ]
          },
          {
            id: "p4-u2",
            day: "محور 2",
            title: "Typography (الخطوط)",
            detailsLabel: "تفاصيل المحور",
            blocks: [
              {
                title: "قواعد",
                items: ["استخدم خط واحد أو اتنين", "اعمل hierarchy (عنوان / نص)"]
              }
            ]
          },
          {
            id: "p4-u3",
            day: "محور 3",
            title: "Spacing (المسافات)",
            detailsLabel: "تفاصيل المحور",
            blocks: [
              {
                title: "أهم نقطة",
                items: [
                  "padding: 16",
                  "margin: 8",
                  "المسافات هي الفرق بين مبتدئ ومحترف"
                ]
              }
            ]
          },
          {
            id: "p4-u4",
            day: "محور 4",
            title: "Layout",
            detailsLabel: "تفاصيل المحور",
            blocks: [
              {
                title: "تفهم",
                items: ["grid system", "alignment"]
              }
            ]
          }
        ]
      },
      {
        title: "الجزء الثاني: UX (تجربة المستخدم)",
        days: [
          {
            id: "p4-x1",
            day: "محور 1",
            title: "مبادئ UX الأساسية",
            detailsLabel: "تفاصيل المحور",
            blocks: [
              {
                title: "مبادئ",
                items: ["البساطة", "السرعة", "الوضوح"]
              }
            ]
          },
          {
            id: "p4-x2",
            day: "محور 2",
            title: "مثال عملي: Login Screen",
            detailsLabel: "تفاصيل المحور",
            blocks: [
              {
                title: "لازم يكون",
                items: ["input واضح", "زرار واضح", "error واضح"]
              }
            ]
          }
        ]
      },
      {
        title: "أدواتك",
        days: [
          {
            id: "p4-t1",
            day: "محور 1",
            title: "Figma",
            detailsLabel: "تفاصيل المحور",
            blocks: [
              {
                title: "تتعلم",
                items: ["تصميم Screens", "Components", "Auto Layout"]
              }
            ]
          }
        ]
      },
      {
        title: "تدريب عملي",
        days: [
          {
            id: "p4-p1",
            day: "محور 1",
            title: "حلل تطبيقات كبيرة",
            detailsLabel: "تفاصيل المحور",
            blocks: [
              {
                title: "اعمل كده",
                items: [
                  "افتح تطبيق: Instagram أو TikTok",
                  "حلله: ليه الزر هنا؟ ليه اللون ده؟",
                  "قلد التصميم"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Portfolio (سلاحك الحقيقي)",
        days: [
          {
            id: "p4-f1",
            day: "محور 1",
            title: "محتوى البورتفوليو",
            detailsLabel: "تفاصيل المحور",
            blocks: [
              {
                title: "لازم يحتوي",
                items: ["Projects قوية", "Screenshots + شرح", "GitHub"]
              }
            ]
          },
          {
            id: "p4-f2",
            day: "محور 2",
            title: "الجودة أهم من العدد",
            detailsLabel: "تفاصيل المحور",
            blocks: [
              {
                title: "مهم",
                items: ["مش عدد المشاريع… الجودة"]
              }
            ]
          }
        ]
      },
      {
        title: "Freelancing",
        days: [
          {
            id: "p4-f3",
            day: "محور 1",
            title: "تبدأ فين؟",
            detailsLabel: "تفاصيل المحور",
            blocks: [
              {
                title: "منصات",
                items: ["Upwork", "Fiverr"]
              }
            ]
          },
          {
            id: "p4-f4",
            day: "محور 2",
            title: "أول خطوة",
            detailsLabel: "تفاصيل المحور",
            blocks: [
              {
                title: "نفّذ",
                items: ["اعمل Profile قوي", "حط مشاريعك"]
              }
            ]
          },
          {
            id: "p4-f5",
            day: "محور 3",
            title: "Tips",
            detailsLabel: "تفاصيل المحور",
            blocks: [
              {
                title: "اعمل",
                items: ["عروض بسيطة", "أسعار أقل في البداية"]
              },
              {
                title: "متعملش",
                items: ["Copy/Paste proposals"]
              }
            ]
          }
        ]
      },
      {
        title: "شغل الشركات",
        days: [
          {
            id: "p4-j1",
            day: "محور 1",
            title: "الشركات عايزة",
            detailsLabel: "تفاصيل المحور",
            blocks: [
              {
                title: "Skills",
                items: ["Flutter", "Backend", "UI/UX", "Problem solving"]
              }
            ]
          },
          {
            id: "p4-j2",
            day: "محور 2",
            title: "لازم",
            detailsLabel: "تفاصيل المحور",
            blocks: [
              {
                title: "ركز",
                items: ["Projects قوية", "Code نظيف", "فهم مش حفظ"]
              }
            ]
          }
        ]
      },
      {
        title: "الخطة النهائية (من 0 للاحتراف)",
        days: [
          {
            id: "p4-r1",
            day: "محور 1",
            title: "0 → 3 شهور",
            detailsLabel: "تفاصيل المحور",
            blocks: [
              {
                title: "تعمل",
                items: ["Dart + Flutter basics"]
              }
            ]
          },
          {
            id: "p4-r2",
            day: "محور 2",
            title: "3 → 6 شهور",
            detailsLabel: "تفاصيل المحور",
            blocks: [
              {
                title: "تعمل",
                items: ["Projects + Firebase"]
              }
            ]
          },
          {
            id: "p4-r3",
            day: "محور 3",
            title: "6 → 9 شهور",
            detailsLabel: "تفاصيل المحور",
            blocks: [
              {
                title: "تعمل",
                items: ["Backend + Apps كبيرة"]
              }
            ]
          },
          {
            id: "p4-r4",
            day: "محور 4",
            title: "بعد 9 شهور",
            detailsLabel: "تفاصيل المحور",
            blocks: [
              {
                title: "النتيجة",
                items: ["Freelance أو Job"]
              }
            ]
          }
        ]
      },
      {
        title: "مشروعك النهائي",
        days: [
          {
            id: "p4-fn1",
            day: "محور 1",
            title: "App كامل لازم تعمله",
            detailsLabel: "تفاصيل المحور",
            blocks: [
              {
                title: "مثال",
                items: ["Social Media App أو E-commerce App"]
              },
              {
                title: "لازم يحتوي",
                items: ["Login", "Database", "UI احترافي", "API"]
              }
            ]
          }
        ]
      }
    ],
    extras: [
      {
        title: "أخطاء قاتلة",
        split: {
          leftTitle: "❌",
          leftItems: ["تهمل UI", "تركز على الكود بس", "تكسل في المشاريع"],
          rightTitle: "✅",
          rightItems: ["تبني مشاريع حقيقية", "تطور نفسك يوميًا", "تفهم كل حاجة"]
        }
      },
      {
        title: "استخدام AI هنا",
        items: ["تحسين التصميم", "كتابة proposals", "تحليل apps", "مثال: حسنلي UI ده وخليه زي Apple"]
      },
      {
        title: "أهم خطوة",
        items: ["مش المعلومات… التنفيذ"]
      }
    ]
  }
];

const STORAGE_KEY = "roadmap-progress-v1";
const THEME_KEY = "roadmap-theme";
const COMPACT_KEY = "roadmap-compact";

function escapeHTML(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttr(value) {
  return escapeHTML(value).replace(/\n/g, " ");
}

function renderBlock(block, dayId, blockIndex) {
  const variant = block.variant ? ` ${block.variant}` : "";
  let items = "";
  if (block.items && block.items.length) {
    items = `
      <ul class="task-list">
        ${block.items
          .map((item, itemIndex) => {
            const taskId = `${dayId}::${blockIndex}::${itemIndex}`;
            return `
              <li>
                <label class="task-item">
                  <input type="checkbox" data-task="${taskId}" data-day="${dayId}" />
                  <span>${escapeHTML(item)}</span>
                </label>
              </li>
            `;
          })
          .join("")}
      </ul>
    `;
  }

  if (!items && block.code) {
    const taskId = `${dayId}::${blockIndex}::code`;
    items = `
      <ul class="task-list">
        <li>
          <label class="task-item">
            <input type="checkbox" data-task="${taskId}" data-day="${dayId}" />
            <span>نفّذ المثال وجربه عمليًا</span>
          </label>
        </li>
      </ul>
    `;
  }
  const code = block.code
    ? `<pre><code>${escapeHTML(block.code)}</code></pre>`
    : "";
  return `
    <div class="detail-block${variant}">
      <h5>${escapeHTML(block.title)}</h5>
      ${items}
      ${code}
    </div>
  `;
}

function toSearchText(day) {
  const parts = [day.day, day.title, day.subtitle];
  if (day.tags) {
    parts.push(...day.tags);
  }
  if (day.blocks) {
    day.blocks.forEach(block => {
      parts.push(block.title || "");
      if (block.items) parts.push(...block.items);
      if (block.code) parts.push(block.code);
    });
  }
  if (day.timeline) {
    parts.push(...day.timeline);
  }
  return parts
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function renderDay(day, phaseId) {
  const detailsLabel =
    day.detailsLabel || (day.day && day.day.includes("محور") ? "تفاصيل المحور" : "تفاصيل اليوم");
  const dayLabel = day.day || "";
  const tags = (day.tags || []).filter(Boolean);
  const searchText = toSearchText(day);
  const blocks = day.blocks ? [...day.blocks] : [];
  const timelineBlock =
    day.timeline && day.timeline.length
      ? {
          title: "تايمستامب الفيديو",
          items: day.timeline,
          variant: "detail-block--timeline"
        }
      : null;

  return `
    <article class="day-card reveal" data-id="${day.id}" data-phase="${phaseId}" data-search="${escapeAttr(searchText)}">
      <div class="day-header">
        ${dayLabel ? `<div class="day-number">${escapeHTML(dayLabel)}</div>` : ""}
        <div class="day-status" data-day-status>غير مكتمل</div>
        <div class="day-progress" data-day-progress>0/0</div>
      </div>
      <div class="day-row">
        <div class="day-tags">
          ${tags
            .map(tag => {
              const extra =
                tag === "تركيز"
                  ? " pill--accent"
                  : tag === "مشروع"
                    ? " pill--project"
                    : tag === "تسليم"
                      ? " pill--deliver"
                      : "";
              return `<span class="pill pill--tiny${extra}">${escapeHTML(tag)}</span>`;
            })
            .join("")}
        </div>
      </div>
      <div class="day-body">
        <h4>${escapeHTML(day.title)}</h4>
        ${day.subtitle ? `<p class="day-sub">${escapeHTML(day.subtitle)}</p>` : ""}
        <details>
          <summary>${detailsLabel}</summary>
          <div class="details-body">
            ${
              timelineBlock
                ? `
                  <div class="details-grid">
                    <div class="details-main">
                      ${blocks.map((block, index) => renderBlock(block, day.id, index)).join("")}
                    </div>
                    <div class="details-aside">
                      ${renderBlock(timelineBlock, day.id, "timeline")}
                    </div>
                  </div>
                `
                : `${blocks.map((block, index) => renderBlock(block, day.id, index)).join("")}`
            }
          </div>
        </details>
      </div>
    </article>
  `;
}

function renderWeek(week, phaseId) {
  return `
    <div class="week">
      <h3 class="week__title">${escapeHTML(week.title)}</h3>
      <div class="phase__grid">
        ${week.days.map(day => renderDay(day, phaseId)).join("")}
      </div>
    </div>
  `;
}

function renderExtra(extra) {
  if (extra.split) {
    return `
      <div class="extra-card">
        <h4>${escapeHTML(extra.title)}</h4>
        <div class="extra-split">
          <div>
            <strong>${escapeHTML(extra.split.leftTitle)}</strong>
            <ul class="extra-list">
              ${extra.split.leftItems.map(item => `<li>${escapeHTML(item)}</li>`).join("")}
            </ul>
          </div>
          <div>
            <strong>${escapeHTML(extra.split.rightTitle)}</strong>
            <ul class="extra-list">
              ${extra.split.rightItems.map(item => `<li>${escapeHTML(item)}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  if (extra.pairs) {
    return `
      <div class="extra-card">
        <h4>${escapeHTML(extra.title)}</h4>
        ${extra.pairs
          .map(
            pair => `
            <div class="extra-pair">
              <strong>${escapeHTML(pair.problem)}</strong>
              <div>${escapeHTML(pair.solution)}</div>
            </div>
          `
          )
          .join("")}
      </div>
    `;
  }

  return `
    <div class="extra-card">
      <h4>${escapeHTML(extra.title)}</h4>
      <ul class="extra-list">
        ${extra.items.map(item => `<li>${escapeHTML(item)}</li>`).join("")}
      </ul>
    </div>
  `;
}

function renderPhase(phase) {
  const meta = phase.meta
    ? phase.meta.map(item => `<span class="pill pill--ghost">${escapeHTML(item)}</span>`).join("")
    : "";

  return `
    <section class="phase" id="${phase.id}">
      <div class="phase__shell">
        <div class="phase__header">
          <div>
            <h2>${escapeHTML(phase.title)}</h2>
            ${phase.subtitle ? `<p>${escapeHTML(phase.subtitle)}</p>` : ""}
            ${phase.goal ? `<p>${escapeHTML(phase.goal)}</p>` : ""}
          </div>
          <div class="phase__meta">${meta}</div>
          <div class="phase__progress">
            <div class="phase__progress-bar"><span></span></div>
            <div class="phase__progress-label">0%</div>
          </div>
        </div>
        <div class="phase__content">
          ${phase.weeks.map(week => renderWeek(week, phase.id)).join("")}
          ${phase.extras ? `<div class="extras">${phase.extras.map(renderExtra).join("")}</div>` : ""}
        </div>
      </div>
    </section>
  `;
}

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (error) {
    return {};
  }
}

function saveProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function applyProgress(progress, taskBoxes) {
  taskBoxes.forEach(box => {
    const id = box.dataset.task;
    box.checked = Boolean(progress[id]);
  });
}

function updateDayState(card) {
  const tasks = Array.from(card.querySelectorAll("input[data-task]"));
  const done = tasks.filter(task => task.checked).length;
  const total = tasks.length;
  const status = card.querySelector("[data-day-status]");
  const progress = card.querySelector("[data-day-progress]");

  if (progress) {
    progress.textContent = `${done}/${total}`;
  }

  if (total > 0 && done === total) {
    card.classList.add("is-done");
    if (status) status.textContent = "مكتمل";
  } else {
    card.classList.remove("is-done");
    if (status) status.textContent = total === 0 ? "بدون مهام" : "غير مكتمل";
  }
}

function updateCounts(cards) {
  const total = cards.length;
  const done = cards.filter(card => card.classList.contains("is-done")).length;
  const remaining = total - done;
  const percent = total ? Math.round((done / total) * 100) : 0;

  document.getElementById("total-count").textContent = total;
  document.getElementById("done-count").textContent = done;
  document.getElementById("remaining-count").textContent = remaining;
  document.getElementById("overall-progress").style.width = `${percent}%`;
  document.getElementById("overall-label").textContent = `${percent}%`;

  document.querySelectorAll(".phase").forEach(phase => {
    const phaseCards = Array.from(phase.querySelectorAll(".day-card"));
    const phaseDone = phaseCards.filter(card => card.classList.contains("is-done")).length;
    const phasePercent = phaseCards.length
      ? Math.round((phaseDone / phaseCards.length) * 100)
      : 0;
    const bar = phase.querySelector(".phase__progress-bar span");
    const label = phase.querySelector(".phase__progress-label");
    bar.style.width = `${phasePercent}%`;
    label.textContent = `${phasePercent}%`;
  });
}

function setupReveal() {
  const revealItems = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach(item => observer.observe(item));
}

function setupThemeToggle() {
  const body = document.body;
  const button = document.getElementById("toggle-theme");
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light") {
    body.classList.remove("theme-dark");
  }

  const updateLabel = () => {
    button.textContent = body.classList.contains("theme-dark") ? "الوضع الفاتح" : "الوضع الداكن";
  };

  updateLabel();
  button.addEventListener("click", () => {
    body.classList.toggle("theme-dark");
    localStorage.setItem(THEME_KEY, body.classList.contains("theme-dark") ? "dark" : "light");
    updateLabel();
  });
}

function setupCompactToggle() {
  const body = document.body;
  const button = document.getElementById("toggle-compact");
  const saved = localStorage.getItem(COMPACT_KEY);
  if (saved === "on") {
    body.classList.add("compact");
  }

  const updateLabel = () => {
    button.textContent = body.classList.contains("compact") ? "عرض واسع" : "عرض مركز";
  };

  updateLabel();
  button.addEventListener("click", () => {
    body.classList.toggle("compact");
    localStorage.setItem(COMPACT_KEY, body.classList.contains("compact") ? "on" : "off");
    updateLabel();
  });
}

function setupDetailsControls() {
  document.getElementById("expand-all").addEventListener("click", () => {
    document.querySelectorAll("details").forEach(detail => {
      detail.open = true;
    });
  });

  document.getElementById("collapse-all").addEventListener("click", () => {
    document.querySelectorAll("details").forEach(detail => {
      detail.open = false;
    });
  });
}

function setupFilters(cards) {
  const state = { filter: "all", query: "" };
  const filterButtons = document.querySelectorAll(".filter");
  const searchInput = document.getElementById("search");

  function applyFilters() {
    const query = state.query.trim().toLowerCase();
    cards.forEach(card => {
      const isDone = card.classList.contains("is-done");
      const matchesFilter =
        state.filter === "all" ||
        (state.filter === "done" && isDone) ||
        (state.filter === "todo" && !isDone);
      const matchesSearch = !query || card.dataset.search.includes(query);
      card.classList.toggle("hidden", !(matchesFilter && matchesSearch));
    });
  }

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      state.filter = button.dataset.filter;
      applyFilters();
    });
  });

  searchInput.addEventListener("input", event => {
    state.query = event.target.value;
    applyFilters();
  });

  return applyFilters;
}

function setupProgressReset(progress, checkboxes, cards, applyFilters) {
  const button = document.getElementById("reset-progress");
  button.addEventListener("click", () => {
    const confirmed = confirm("هل تريد تصفير كل الإنجاز؟");
    if (!confirmed) return;
    Object.keys(progress).forEach(key => delete progress[key]);
    saveProgress(progress);
    applyProgress(progress, checkboxes);
    cards.forEach(updateDayState);
    updateCounts(cards);
    applyFilters();
  });
}

const roadmapEl = document.getElementById("roadmap");
const activePhaseId = document.body.dataset.phase;
const phasesToRender = activePhaseId ? roadmap.filter(phase => phase.id === activePhaseId) : roadmap;
roadmapEl.innerHTML = (phasesToRender.length ? phasesToRender : roadmap).map(renderPhase).join("");

const checkboxes = Array.from(document.querySelectorAll("input[type=checkbox][data-task]"));
const cards = Array.from(document.querySelectorAll(".day-card"));
const progress = loadProgress();

applyProgress(progress, checkboxes);
cards.forEach(updateDayState);
updateCounts(cards);

const applyFilters = setupFilters(cards);
applyFilters();

checkboxes.forEach(box => {
  box.addEventListener("change", () => {
    const id = box.dataset.task;
    const card = box.closest(".day-card");
    if (box.checked) {
      progress[id] = true;
    } else {
      delete progress[id];
    }
    saveProgress(progress);
    updateDayState(card);
    updateCounts(cards);
    applyFilters();
  });
});

setupReveal();
setupThemeToggle();
setupCompactToggle();
setupDetailsControls();
setupProgressReset(progress, checkboxes, cards, applyFilters);
