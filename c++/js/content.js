/**
 * C++ Educational App - Content Module
 * Contains all section content with English + Arabic translations
 * Includes detailed theory, examples, common mistakes, advanced topics, practice, and quizzes
 */

const CONTENT = {
    // Section 1: Introduction to Programming & C++
    section1: {
        id: 'section1',
        title: 'Introduction to Programming & C++',
        titleAr: 'مقدمة في البرمجة ولغة C++',
        iconName: 'rocket',
        duration: '60-90 min',

        theory: [
            {
                heading: 'What is Programming?',
                headingAr: 'ما هي البرمجة؟',
                content: `Programming is the art of instructing computers to perform specific tasks. Imagine you're giving directions to someone who follows them exactly - computers work the same way. They execute instructions precisely, one step at a time. A program is simply a collection of these instructions written in a language the computer can understand.`,
                contentAr: `البرمجة هي فن إعطاء التعليمات للحاسوب لتنفيذ مهام محددة. تخيل أنك تعطي اتجاهات لشخص يتبعها بالضبط - الحواسيب تعمل بنفس الطريقة. تنفذ التعليمات بدقة، خطوة بخطوة. البرنامج هو ببساطة مجموعة من هذه التعليمات مكتوبة بلغة يفهمها الحاسوب.`,
            },
            {
                heading: 'Why Learn C++?',
                headingAr: 'لماذا تتعلم C++؟',
                content: `C++ is one of the most powerful and versatile programming languages ever created. It's the backbone of game engines (Unreal Engine, Unity internals), operating systems (Windows, Linux), browsers (Chrome, Firefox), and high-performance applications. Learning C++ gives you deep understanding of how computers actually work - memory management, processor optimization, and system-level programming. This knowledge transfers to any other language you learn later.`,
                contentAr: `C++ هي واحدة من أقوى وأكثر لغات البرمجة تنوعاً على الإطلاق. إنها العمود الفقري لمحركات الألعاب وأنظمة التشغيل والمتصفحات والتطبيقات عالية الأداء. تعلم C++ يمنحك فهماً عميقاً لكيفية عمل الحواسيب فعلياً - إدارة الذاكرة، تحسين المعالج، وبرمجة مستوى النظام.`,
            },
            {
                heading: 'How C++ Programs Work',
                headingAr: 'كيف تعمل برامج C++',
                content: `When you write C++ code, it's called "source code". This human-readable code must be translated into machine code (binary: 0s and 1s) that the computer's processor can execute. This translation is done by a "compiler". The process: Write code → Compile → Execute. Unlike interpreted languages (Python, JavaScript), C++ is compiled once and runs very fast.`,
                contentAr: `عندما تكتب كود C++، يُسمى "الكود المصدري". هذا الكود المقروء بشرياً يجب ترجمته إلى كود الآلة (ثنائي: أصفار وآحاد) الذي يستطيع معالج الحاسوب تنفيذه. هذه الترجمة تتم بواسطة "المترجم" (Compiler). العملية: كتابة الكود ← الترجمة ← التنفيذ.`,
            },
            {
                heading: 'Structure of a C++ Program',
                headingAr: 'هيكل برنامج C++',
                content: `Every C++ program has essential parts: (1) Preprocessor directives (#include) - importing libraries, (2) The main() function - where execution starts, (3) Statements - the actual instructions, (4) Return statement - indicates success/failure. The main() function is special - it's the entry point where your program begins executing. Everything between the curly braces {} is the function body.`,
                contentAr: `كل برنامج C++ له أجزاء أساسية: (1) توجيهات المعالج المسبق (#include) - استيراد المكتبات، (2) دالة main() - حيث يبدأ التنفيذ، (3) الجمل - التعليمات الفعلية، (4) جملة الإرجاع - تشير إلى النجاح/الفشل. دالة main() خاصة - هي نقطة الدخول حيث يبدأ برنامجك بالتنفيذ.`,
            }
        ],

        codeExamples: [
            {
                title: 'Hello World - Your First Program',
                titleAr: 'مرحباً بالعالم - برنامجك الأول',
                code: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
                explanation: `Line by line breakdown:
• #include <iostream> - Includes the input/output stream library that provides cout and cin
• using namespace std; - Allows us to use cout instead of std::cout (convenience)
• int main() - The main function, program starts here. 'int' means it returns an integer
• cout << "Hello, World!" - 'cout' is the console output stream. << is the insertion operator
• endl - Moves cursor to next line (end line)
• return 0 - Returns 0 to indicate successful execution`,
                explanationAr: `شرح سطر بسطر:
• #include <iostream> - يتضمن مكتبة تدفق الإدخال/الإخراج التي توفر cout وcin
• using namespace std; - يسمح لنا باستخدام cout بدلاً من std::cout (للتسهيل)
• int main() - الدالة الرئيسية، البرنامج يبدأ هنا. 'int' يعني أنها ترجع عدداً صحيحاً
• cout << "Hello, World!" - 'cout' هو تدفق الإخراج. << هو عامل الإدراج
• endl - ينقل المؤشر للسطر التالي
• return 0 - يرجع 0 للإشارة إلى التنفيذ الناجح`
            },
            {
                title: 'Variables - Storing Data',
                titleAr: 'المتغيرات - تخزين البيانات',
                code: `#include <iostream>
using namespace std;

int main() {
    // Integer: whole numbers (positive/negative)
    int age = 25;
    int temperature = -10;
    
    // Double: decimal numbers (high precision)
    double price = 19.99;
    double pi = 3.14159;
    
    // Character: single character in quotes
    char grade = 'A';
    char symbol = '#';
    
    // String: text (multiple characters)
    string name = "Ahmed";
    string message = "Hello!";
    
    // Boolean: true or false
    bool isStudent = true;
    bool hasLicense = false;
    
    // Display values
    cout << "Name: " << name << endl;
    cout << "Age: " << age << " years old" << endl;
    cout << "Grade: " << grade << endl;
    cout << "Price: $" << price << endl;
    
    return 0;
}`,
                explanation: `Variables are containers that store data. Each variable has:
• A TYPE (int, double, char, string, bool) - determines what kind of data it holds
• A NAME (age, price, name) - how you refer to it
• A VALUE (25, 19.99, "Ahmed") - the actual data stored

Memory sizes: int=4 bytes, double=8 bytes, char=1 byte, bool=1 byte, string=variable`,
                explanationAr: `المتغيرات هي حاويات تخزن البيانات. كل متغير له:
• نوع (int, double, char, string, bool) - يحدد نوع البيانات التي يحملها
• اسم (age, price, name) - كيف تشير إليه
• قيمة (25, 19.99, "Ahmed") - البيانات الفعلية المخزنة

أحجام الذاكرة: int=4 بايت، double=8 بايت، char=1 بايت، bool=1 بايت، string=متغير`
            },
            {
                title: 'User Input with cin',
                titleAr: 'إدخال المستخدم مع cin',
                code: `#include <iostream>
using namespace std;

int main() {
    string name;
    int age;
    double height;
    
    cout << "Enter your name: ";
    cin >> name;
    
    cout << "Enter your age: ";
    cin >> age;
    
    cout << "Enter your height (in meters): ";
    cin >> height;
    
    cout << endl;
    cout << "=== Your Profile ===" << endl;
    cout << "Name: " << name << endl;
    cout << "Age: " << age << " years" << endl;
    cout << "Height: " << height << " meters" << endl;
    
    return 0;
}`,
                explanation: `cin (console input) reads data from the keyboard:
• cin >> variable; - Reads input and stores it in the variable
• The >> is the extraction operator (opposite of << used with cout)
• cin automatically converts input to the variable's type
• cin stops reading at whitespace (spaces), so for full sentences use getline()`,
                explanationAr: `cin (إدخال وحدة التحكم) يقرأ البيانات من لوحة المفاتيح:
• cin >> variable; - يقرأ الإدخال ويخزنه في المتغير
• >> هو عامل الاستخراج (عكس << المستخدم مع cout)
• cin يحول الإدخال تلقائياً لنوع المتغير
• cin يتوقف عند الفراغات، لجمل كاملة استخدم getline()`
            }
        ],

        commonMistakes: [
            {
                title: 'Forgetting Semicolons',
                titleAr: 'نسيان الفواصل المنقوطة',
                wrong: `cout << "Hello"
cout << "World"`,
                correct: `cout << "Hello";
cout << "World";`,
                explanation: `Every statement in C++ must end with a semicolon (;). It tells the compiler where one instruction ends. Forgetting it causes a compilation error.`,
                explanationAr: `كل جملة في C++ يجب أن تنتهي بفاصلة منقوطة (;). تخبر المترجم أين تنتهي التعليمة. نسيانها يسبب خطأ في الترجمة.`
            },
            {
                title: 'Using Wrong Quotes',
                titleAr: 'استخدام علامات الاقتباس الخاطئة',
                wrong: `char letter = "A";
string word = 'Hello';`,
                correct: `char letter = 'A';
string word = "Hello";`,
                explanation: `Single quotes '' are for single characters (char). Double quotes "" are for strings (text). Mixing them causes errors.`,
                explanationAr: `علامات الاقتباس المفردة '' للحروف المفردة (char). علامات الاقتباس المزدوجة "" للنصوص (string). خلطها يسبب أخطاء.`
            },
            {
                title: 'Variable Not Declared',
                titleAr: 'المتغير غير معرّف',
                wrong: `cout << age;  // age not declared!`,
                correct: `int age = 25;
cout << age;  // Now it works!`,
                explanation: `You must declare a variable (specify its type and name) before using it. C++ needs to know what type of data to expect.`,
                explanationAr: `يجب أن تعلن عن المتغير (تحدد نوعه واسمه) قبل استخدامه. C++ بحاجة لمعرفة نوع البيانات المتوقع.`
            }
        ],

        advancedTopics: {
            intro: `Before tackling the quiz, let's understand some higher-level concepts that will help you solve more complex problems in this section.`,
            introAr: `قبل الإجابة على الاختبار، دعنا نفهم بعض المفاهيم المتقدمة التي ستساعدك في حل مشاكل أكثر تعقيداً في هذا القسم.`,
            topics: [
                {
                    title: 'How to Break Down a Problem',
                    titleAr: 'كيف تقسّم المشكلة',
                    explanation: `When facing any programming problem: (1) Understand what input you have, (2) Understand what output you need, (3) Think about the steps in between. For example, "Calculate the area of a rectangle" means: Input = width and height, Output = area, Steps = multiply width × height.`,
                    explanationAr: `عند مواجهة أي مشكلة برمجية: (1) افهم المدخلات المتوفرة، (2) افهم المخرجات المطلوبة، (3) فكر في الخطوات بينهما. مثلاً، "احسب مساحة مستطيل" يعني: المدخلات = العرض والطول، المخرجات = المساحة، الخطوات = ضرب العرض × الطول.`,
                    example: `// Problem: Calculate area of rectangle
// Input: width, height
// Output: area

#include <iostream>
using namespace std;

int main() {
    double width, height, area;
    
    cout << "Enter width: ";
    cin >> width;
    
    cout << "Enter height: ";
    cin >> height;
    
    area = width * height;
    
    cout << "Area: " << area << endl;
    return 0;
}`
                },
                {
                    title: 'Choosing the Right Data Type',
                    titleAr: 'اختيار نوع البيانات الصحيح',
                    explanation: `Always think about what kind of data you're storing: Ages, counts, quantities → int. Money, measurements, scientific values → double. Yes/No questions → bool. Names, messages → string. Grades, symbols → char. Using the wrong type wastes memory or causes precision errors.`,
                    explanationAr: `دائماً فكر في نوع البيانات التي تخزنها: الأعمار، الأعداد، الكميات ← int. المال، القياسات، القيم العلمية ← double. أسئلة نعم/لا ← bool. الأسماء، الرسائل ← string. الدرجات، الرموز ← char.`,
                    example: null
                },
                {
                    title: 'Reading Error Messages',
                    titleAr: 'قراءة رسائل الخطأ',
                    explanation: `When your code has errors, the compiler tells you: (1) Line number - where the error is, (2) Error type - what went wrong. Common errors: "expected ';'" = missing semicolon, "undeclared identifier" = variable not declared, "cannot convert" = wrong data type.`,
                    explanationAr: `عندما يكون في كودك أخطاء، المترجم يخبرك: (1) رقم السطر - أين الخطأ، (2) نوع الخطأ - ما الذي حدث خطأ. الأخطاء الشائعة: "expected ';'" = فاصلة منقوطة ناقصة، "undeclared identifier" = متغير غير معرّف.`,
                    example: null
                }
            ]
        },

        practice: [
            {
                id: 'p1_1',
                title: 'Personal Profile',
                titleAr: 'الملف الشخصي',
                difficulty: 1,
                description: `Create a program that asks the user for their name and age, then displays a personalized greeting. The output should look like: "Hello, [name]! You are [age] years old."`,
                descriptionAr: `أنشئ برنامجاً يسأل المستخدم عن اسمه وعمره، ثم يعرض تحية شخصية. المخرجات يجب أن تكون مثل: "Hello, [name]! You are [age] years old."`,
                starterCode: `#include <iostream>
using namespace std;

int main() {
    // Declare variables for name and age
    
    // Ask user for name and store it
    
    // Ask user for age and store it
    
    // Display the greeting message
    
    return 0;
}`,
                solution: `#include <iostream>
using namespace std;

int main() {
    string name;
    int age;
    
    cout << "Enter your name: ";
    cin >> name;
    
    cout << "Enter your age: ";
    cin >> age;
    
    cout << "Hello, " << name << "! You are " << age << " years old." << endl;
    
    return 0;
}`,
                hints: ['Use string for name and int for age', 'Use cin >> to read user input', 'Use cout << to display output']
            },
            {
                id: 'p1_2',
                title: 'Rectangle Calculator',
                titleAr: 'حاسبة المستطيل',
                difficulty: 2,
                description: `Write a program that asks for the width and height of a rectangle, then calculates and displays both the area (width × height) and perimeter (2 × width + 2 × height).`,
                descriptionAr: `اكتب برنامجاً يسأل عن عرض وارتفاع مستطيل، ثم يحسب ويعرض المساحة (العرض × الارتفاع) والمحيط (2 × العرض + 2 × الارتفاع).`,
                starterCode: `#include <iostream>
using namespace std;

int main() {
    // Use double for width, height, area, perimeter
    
    // Get width from user
    
    // Get height from user
    
    // Calculate area and perimeter
    
    // Display results
    
    return 0;
}`,
                solution: `#include <iostream>
using namespace std;

int main() {
    double width, height, area, perimeter;
    
    cout << "Enter width: ";
    cin >> width;
    
    cout << "Enter height: ";
    cin >> height;
    
    area = width * height;
    perimeter = 2 * width + 2 * height;
    
    cout << "Area: " << area << endl;
    cout << "Perimeter: " << perimeter << endl;
    
    return 0;
}`,
                hints: ['Use double because dimensions can be decimals', 'Area = width * height', 'Perimeter = 2*width + 2*height']
            }
        ],

        mcq: [
            {
                id: 'q1_1',
                question: 'What does #include <iostream> do in a C++ program?',
                questionAr: 'ماذا يفعل #include <iostream> في برنامج C++؟',
                options: [
                    { text: 'Declares the main function', textAr: 'يعلن عن الدالة الرئيسية' },
                    { text: 'Includes the input/output library', textAr: 'يتضمن مكتبة الإدخال/الإخراج' },
                    { text: 'Starts program execution', textAr: 'يبدأ تنفيذ البرنامج' },
                    { text: 'Creates a variable', textAr: 'ينشئ متغيراً' }
                ],
                correct: 1,
                explanation: `#include <iostream> is a preprocessor directive that includes the iostream library, which provides input/output functionality like cout (console output) and cin (console input).`,
                explanationAr: `#include <iostream> هو توجيه للمعالج المسبق يتضمن مكتبة iostream، التي توفر وظائف الإدخال/الإخراج مثل cout (إخراج وحدة التحكم) وcin (إدخال وحدة التحكم).`
            },
            {
                id: 'q1_2',
                question: 'Which data type would you use to store a person\'s height in meters (e.g., 1.75)?',
                questionAr: 'أي نوع بيانات ستستخدم لتخزين طول شخص بالأمتار (مثل 1.75)؟',
                options: [
                    { text: 'int', textAr: 'int' },
                    { text: 'double', textAr: 'double' },
                    { text: 'char', textAr: 'char' },
                    { text: 'bool', textAr: 'bool' }
                ],
                correct: 1,
                explanation: `double is used for decimal (floating-point) numbers like 1.75. int only stores whole numbers, char stores single characters, and bool stores true/false values.`,
                explanationAr: `double يُستخدم للأرقام العشرية (النقطة العائمة) مثل 1.75. int يخزن الأعداد الصحيحة فقط، char يخزن حروفاً مفردة، وbool يخزن قيم صح/خطأ.`
            },
            {
                id: 'q1_3',
                question: 'What happens if you forget the semicolon at the end of a statement?',
                questionAr: 'ماذا يحدث إذا نسيت الفاصلة المنقوطة في نهاية الجملة؟',
                options: [
                    { text: 'The program runs but with a warning', textAr: 'البرنامج يعمل لكن مع تحذير' },
                    { text: 'The program compiles but crashes at runtime', textAr: 'البرنامج يُترجم لكن يتعطل عند التشغيل' },
                    { text: 'The compiler gives an error and won\'t compile', textAr: 'المترجم يعطي خطأ ولن يترجم' },
                    { text: 'Nothing, semicolons are optional', textAr: 'لا شيء، الفواصل المنقوطة اختيارية' }
                ],
                correct: 2,
                explanation: `In C++, semicolons are mandatory at the end of statements. Forgetting one causes a compilation error - the compiler won't be able to understand where one statement ends and another begins.`,
                explanationAr: `في C++، الفواصل المنقوطة إلزامية في نهاية الجمل. نسيانها يسبب خطأ في الترجمة - المترجم لن يستطيع فهم أين تنتهي جملة وأين تبدأ أخرى.`
            },
            {
                id: 'q1_4',
                question: 'What is the purpose of "return 0;" in the main function?',
                questionAr: 'ما هو الغرض من "return 0;" في الدالة الرئيسية؟',
                options: [
                    { text: 'It displays the number 0 on screen', textAr: 'يعرض الرقم 0 على الشاشة' },
                    { text: 'It indicates the program executed successfully', textAr: 'يشير إلى أن البرنامج تنفذ بنجاح' },
                    { text: 'It restarts the program', textAr: 'يعيد تشغيل البرنامج' },
                    { text: 'It clears all variables from memory', textAr: 'يمسح كل المتغيرات من الذاكرة' }
                ],
                correct: 1,
                explanation: `return 0; tells the operating system that the program finished successfully. A non-zero return value typically indicates an error occurred.`,
                explanationAr: `return 0; يخبر نظام التشغيل أن البرنامج انتهى بنجاح. قيمة إرجاع غير صفرية تشير عادةً إلى حدوث خطأ.`
            },
            {
                id: 'q1_5',
                question: 'Which of the following creates a new line in C++ output?',
                questionAr: 'أي مما يلي ينشئ سطراً جديداً في إخراج C++؟',
                options: [
                    { text: 'new_line()', textAr: 'new_line()' },
                    { text: 'break', textAr: 'break' },
                    { text: 'endl', textAr: 'endl' },
                    { text: 'nextLine', textAr: 'nextLine' }
                ],
                correct: 2,
                explanation: `endl (end line) is used with cout to insert a new line character.`,
                explanationAr: `endl يُستخدم مع cout لإدراج سطر جديد.`
            }
        ]
    },

    // Section 2: Variables and Data Types
    section2: {
        id: 'section2',
        title: 'Variables and Data Types',
        titleAr: 'المتغيرات وأنواع البيانات',
        iconName: 'box',
        duration: '60-90 min',

        theory: [
            {
                heading: 'What are Variables?',
                headingAr: 'ما هي المتغيرات؟',
                content: `Variables are like labeled containers that store data in your program. Think of them as boxes with names written on them - you can put values inside, read what's in them, and change their contents. Every variable has three things: a name (identifier), a type (what kind of data it holds), and a value (the actual data stored).`,
                contentAr: `المتغيرات مثل الحاويات المُسمّاة التي تخزن البيانات في برنامجك. فكر فيها كصناديق عليها أسماء - يمكنك وضع قيم بداخلها، قراءة ما فيها، وتغيير محتوياتها. كل متغير له ثلاثة أشياء: اسم (معرّف)، نوع (ما نوع البيانات التي يحملها)، وقيمة (البيانات الفعلية المخزنة).`,
            },
            {
                heading: 'Fundamental Data Types',
                headingAr: 'أنواع البيانات الأساسية',
                content: `C++ has several built-in data types:\n• int - Integer numbers (whole numbers like 1, 42, -100). Uses 4 bytes, range: -2.1 billion to +2.1 billion\n• double - Decimal numbers with high precision (like 3.14159, 99.99). Uses 8 bytes\n• float - Decimal numbers with less precision. Uses 4 bytes\n• char - Single character (like 'A', '5', '@'). Uses 1 byte\n• bool - Boolean true/false values. Uses 1 byte\n• string - Text (sequence of characters). Variable size`,
                contentAr: `C++ لديها عدة أنواع بيانات مدمجة:\n• int - أعداد صحيحة (مثل 1، 42، -100). يستخدم 4 بايت\n• double - أرقام عشرية بدقة عالية (مثل 3.14159). يستخدم 8 بايت\n• float - أرقام عشرية بدقة أقل. يستخدم 4 بايت\n• char - حرف واحد (مثل 'A'، '5'). يستخدم 1 بايت\n• bool - قيم صح/خطأ. يستخدم 1 بايت\n• string - نص (سلسلة حروف). حجم متغير`,
            },
            {
                heading: 'Variable Declaration and Initialization',
                headingAr: 'إعلان وتهيئة المتغيرات',
                content: `Declaration creates a variable: type name;\nInitialization gives it a value: type name = value;\nYou can declare first and assign later, or do both at once. It's best practice to initialize variables when you declare them to avoid garbage values (random data left in memory).`,
                contentAr: `الإعلان ينشئ متغيراً: type name;\nالتهيئة تعطيه قيمة: type name = value;\nيمكنك الإعلان أولاً ثم التعيين لاحقاً، أو فعل كليهما معاً. أفضل ممارسة هي تهيئة المتغيرات عند إعلانها لتجنب القيم العشوائية.`,
            },
            {
                heading: 'Variable Naming Rules',
                headingAr: 'قواعد تسمية المتغيرات',
                content: `Rules for naming variables:\n• Must start with a letter or underscore (_)\n• Can contain letters, digits, and underscores\n• Cannot use C++ keywords (int, return, if, etc.)\n• Case-sensitive (age ≠ Age ≠ AGE)\n\nBest practices: Use descriptive names (studentAge not x), use camelCase for multi-word names (firstName, totalScore).`,
                contentAr: `قواعد تسمية المتغيرات:\n• يجب أن تبدأ بحرف أو شرطة سفلية (_)\n• يمكن أن تحتوي حروف وأرقام وشرطات سفلية\n• لا يمكن استخدام كلمات C++ المحجوزة\n• حساسة لحالة الأحرف (age ≠ Age)\n\nأفضل الممارسات: استخدم أسماء وصفية (studentAge وليس x).`,
            },
            {
                heading: 'Constants',
                headingAr: 'الثوابت',
                content: `Constants are variables whose values cannot be changed after initialization. Use the 'const' keyword: const double PI = 3.14159; Trying to modify a constant causes a compiler error. Use constants for values that should never change, like mathematical constants or configuration values.`,
                contentAr: `الثوابت هي متغيرات لا يمكن تغيير قيمها بعد التهيئة. استخدم كلمة 'const': const double PI = 3.14159; محاولة تعديل ثابت تسبب خطأ في الترجمة. استخدم الثوابت للقيم التي يجب ألا تتغير أبداً.`,
            }
        ],

        codeExamples: [
            {
                title: 'Declaring and Using Variables',
                titleAr: 'إعلان واستخدام المتغيرات',
                code: `#include <iostream>
using namespace std;

int main() {
    // Declaration and initialization
    int age = 25;
    double salary = 5500.50;
    char grade = 'A';
    string name = "Ahmed";
    bool isEmployed = true;
    
    // Display values
    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
    cout << "Salary: $" << salary << endl;
    cout << "Grade: " << grade << endl;
    cout << "Employed: " << isEmployed << endl;
    
    return 0;
}`,
                explanation: `This example shows how to declare variables of different types and display their values. Each variable is declared with its type, given a name, and assigned an initial value. The cout statement outputs each variable's value.`,
                explanationAr: `هذا المثال يوضح كيفية إعلان متغيرات من أنواع مختلفة وعرض قيمها. كل متغير يُعلن بنوعه، يُعطى اسماً، ويُعيَّن له قيمة أولية. جملة cout تُخرج قيمة كل متغير.`
            },
            {
                title: 'Modifying Variables',
                titleAr: 'تعديل المتغيرات',
                code: `#include <iostream>
using namespace std;

int main() {
    int score = 0;
    cout << "Initial score: " << score << endl;
    
    // Add points
    score = score + 10;
    cout << "After adding 10: " << score << endl;
    
    // Shorthand operators
    score += 5;   // Same as: score = score + 5
    cout << "After += 5: " << score << endl;
    
    score++;      // Increment by 1
    cout << "After ++: " << score << endl;
    
    score *= 2;   // Double the score
    cout << "After *= 2: " << score << endl;
    
    return 0;
}`,
                explanation: `Variables can be modified after creation. Use = for assignment, += -= *= /= for compound assignment, and ++ -- for increment/decrement. The variable's value changes each time you assign a new value to it.`,
                explanationAr: `يمكن تعديل المتغيرات بعد إنشائها. استخدم = للتعيين، += -= *= /= للتعيين المركب، و++ -- للزيادة/النقصان. قيمة المتغير تتغير كل مرة تعيّن له قيمة جديدة.`
            },
            {
                title: 'Type Conversion',
                titleAr: 'تحويل الأنواع',
                code: `#include <iostream>
using namespace std;

int main() {
    // Implicit conversion (automatic)
    int num = 10;
    double result = num;  // int to double (safe)
    cout << "Implicit: " << result << endl;
    
    // Explicit conversion (casting)
    double price = 19.99;
    int rounded = (int)price;  // Loses decimal part!
    cout << "Cast to int: " << rounded << endl;
    
    // Char to int (ASCII value)
    char letter = 'A';
    int ascii = letter;
    cout << "'A' ASCII value: " << ascii << endl;
    
    return 0;
}`,
                explanation: `C++ can convert between types. Implicit conversion happens automatically when safe (int to double). Explicit conversion (casting) forces conversion but may lose data (double to int loses decimals). Characters have numeric ASCII values.`,
                explanationAr: `C++ يمكنها التحويل بين الأنواع. التحويل الضمني يحدث تلقائياً عندما يكون آمناً. التحويل الصريح (casting) يُجبر التحويل لكن قد يفقد بيانات. الحروف لها قيم ASCII رقمية.`
            },
            {
                title: 'Constants and sizeof',
                titleAr: 'الثوابت وحجم المتغيرات',
                code: `#include <iostream>
using namespace std;

int main() {
    // Constants cannot be changed
    const double PI = 3.14159;
    const int MAX_SCORE = 100;
    
    cout << "PI = " << PI << endl;
    cout << "Max Score = " << MAX_SCORE << endl;
    
    // sizeof shows bytes used
    cout << "Size of int: " << sizeof(int) << " bytes" << endl;
    cout << "Size of double: " << sizeof(double) << " bytes" << endl;
    cout << "Size of char: " << sizeof(char) << " byte" << endl;
    cout << "Size of bool: " << sizeof(bool) << " byte" << endl;
    
    return 0;
}`,
                explanation: `Use 'const' to create values that cannot change. sizeof() shows how many bytes a type uses in memory. Understanding memory sizes helps write efficient programs.`,
                explanationAr: `استخدم 'const' لإنشاء قيم لا يمكن تغييرها. sizeof() تظهر كم بايت يستخدم نوع في الذاكرة. فهم أحجام الذاكرة يساعد في كتابة برامج فعالة.`
            }
        ],

        commonMistakes: [
            {
                title: 'Using Uninitialized Variables',
                titleAr: 'استخدام متغيرات غير مهيأة',
                wrong: `int age;
cout << age;  // Garbage value!`,
                correct: `int age = 0;
cout << age;  // Safe: 0`,
                explanation: `Uninitialized variables contain random "garbage" values left in memory. Always initialize variables when you declare them.`,
                explanationAr: `المتغيرات غير المهيأة تحتوي قيم "قمامة" عشوائية متبقية في الذاكرة. دائماً هيّئ المتغيرات عند إعلانها.`
            },
            {
                title: 'Integer Division Surprise',
                titleAr: 'مفاجأة قسمة الأعداد الصحيحة',
                wrong: `int a = 5, b = 2;
double result = a / b;
// result = 2.0, not 2.5!`,
                correct: `int a = 5, b = 2;
double result = (double)a / b;
// result = 2.5`,
                explanation: `When dividing two integers, C++ performs integer division (discards decimal). Cast at least one to double for decimal result.`,
                explanationAr: `عند قسمة عددين صحيحين، C++ تقوم بقسمة صحيحة (تتجاهل الكسر). حوّل واحداً على الأقل إلى double للحصول على نتيجة عشرية.`
            },
            {
                title: 'Confusing = and ==',
                titleAr: 'الخلط بين = و ==',
                wrong: `int x = 5;
if (x = 10)  // Assignment, not comparison!`,
                correct: `int x = 5;
if (x == 10)  // Comparison`,
                explanation: `= is assignment (gives a value). == is comparison (checks equality). Using = in conditions is a common bug.`,
                explanationAr: `= للتعيين (يعطي قيمة). == للمقارنة (يتحقق من التساوي). استخدام = في الشروط خطأ شائع.`
            }
        ],

        advancedTopics: {
            intro: `Understanding how to choose the right data type and manage variables effectively is crucial for writing efficient code.`,
            introAr: `فهم كيفية اختيار نوع البيانات الصحيح وإدارة المتغيرات بفعالية أمر حاسم لكتابة كود فعال.`,
            topics: [
                {
                    title: 'Choosing the Right Data Type',
                    titleAr: 'اختيار نوع البيانات الصحيح',
                    explanation: `Ask yourself: What kind of data? Whole numbers → int. Decimals → double. Yes/No → bool. Single character → char. Text → string. Also consider the range: age (0-150) → int is fine. Population → might need long.`,
                    explanationAr: `اسأل نفسك: ما نوع البيانات؟ أعداد صحيحة ← int. أعداد عشرية ← double. نعم/لا ← bool. حرف واحد ← char. نص ← string.`,
                    example: null
                },
                {
                    title: 'Memory Efficiency',
                    titleAr: 'كفاءة الذاكرة',
                    explanation: `For most programs, use int for integers and double for decimals. Only worry about smaller types (short, float) when memory is critical (embedded systems, large arrays). Premature optimization is the root of all evil!`,
                    explanationAr: `لمعظم البرامج، استخدم int للأعداد الصحيحة وdouble للعشرية. قلق بشأن الأنواع الأصغر فقط عندما تكون الذاكرة حرجة.`,
                    example: null
                },
                {
                    title: 'Naming Conventions',
                    titleAr: 'اصطلاحات التسمية',
                    explanation: `Good names make code readable: Use camelCase (studentName), be descriptive (totalScore not ts), use ALL_CAPS for constants (MAX_SIZE). Avoid single letters except for loop counters (i, j).`,
                    explanationAr: `الأسماء الجيدة تجعل الكود مقروءاً: استخدم camelCase، كن وصفياً، استخدم أحرف كبيرة للثوابت.`,
                    example: `// Bad naming
int x, y, z;
double a = 100;

// Good naming
int studentAge = 20;
double examScore = 85.5;
const int MAX_STUDENTS = 30;`
                }
            ]
        },

        practice: [
            {
                id: 'p2_1',
                title: 'Student Data',
                titleAr: 'بيانات الطالب',
                difficulty: 1,
                description: `Create a program that stores a student's name, age, and GPA, then displays all information.`,
                descriptionAr: `أنشئ برنامجاً يخزن اسم الطالب وعمره ومعدله التراكمي، ثم يعرض كل المعلومات.`,
                starterCode: `#include <iostream>
using namespace std;

int main() {
    // Declare variables for name, age, and GPA
    
    // Assign values
    
    // Display student information
    
    return 0;
}`,
                solution: `#include <iostream>
using namespace std;

int main() {
    string name = "Mohamed";
    int age = 20;
    double gpa = 3.75;
    
    cout << "=== Student Record ===" << endl;
    cout << "Name: " << name << endl;
    cout << "Age: " << age << " years" << endl;
    cout << "GPA: " << gpa << endl;
    
    return 0;
}`,
                hints: ['Use string for name', 'Use int for age', 'Use double for GPA (decimal)']
            },
            {
                id: 'p2_2',
                title: 'Temperature Converter',
                titleAr: 'محول درجات الحرارة',
                difficulty: 2,
                description: `Ask user for temperature in Celsius and convert it to Fahrenheit. Formula: F = C × 9/5 + 32`,
                descriptionAr: `اسأل المستخدم عن درجة الحرارة بالسلسيوس وحولها إلى فهرنهايت. المعادلة: F = C × 9/5 + 32`,
                starterCode: `#include <iostream>
using namespace std;

int main() {
    // Declare variable for Celsius temperature
    
    // Ask user for input
    
    // Calculate Fahrenheit
    
    // Display result
    
    return 0;
}`,
                solution: `#include <iostream>
using namespace std;

int main() {
    double celsius, fahrenheit;
    
    cout << "Enter temperature in Celsius: ";
    cin >> celsius;
    
    fahrenheit = celsius * 9 / 5 + 32;
    
    cout << celsius << " C = " << fahrenheit << " F" << endl;
    
    return 0;
}`,
                hints: ['Use double for temperature values', 'Remember operator precedence', 'F = C * 9 / 5 + 32']
            },
            {
                id: 'p2_3',
                title: 'Overflow Detective',
                titleAr: 'كاشف الفيض',
                difficulty: 3,
                description: `Read two 32-bit signed integers. Print "OVERFLOW" if their sum overflows INT_MAX or underflows INT_MIN, otherwise print the sum.`,
                descriptionAr: `اقرأ عددين صحيحين 32-بت. اطبع "OVERFLOW" إذا تجاوز مجموعهما INT_MAX أو أقل من INT_MIN، وإلا اطبع المجموع.`,
                starterCode: `#include <bits/stdc++.h>
using namespace std;

int main() {
    // Read two numbers
    // Check if sum overflows
    // Print result
    return 0;
}`,
                solution: `#include <bits/stdc++.h>
using namespace std;

int main() {
    long long a, b; 
    cin >> a >> b;
    long long s = a + b;
    if (s > INT_MAX || s < INT_MIN) 
        cout << "OVERFLOW";
    else 
        cout << (int)s;
    return 0;
}`,
                hints: ['Use long long to store the sum safely', 'INT_MAX and INT_MIN are in <climits>', 'Cast back to int for output']
            },
            {
                id: 'p2_4',
                title: 'Precision Loss',
                titleAr: 'فقدان الدقة',
                difficulty: 2,
                description: `Read a double. Store it in a float variable. Print the absolute difference between the original double and the float to show precision loss.`,
                descriptionAr: `اقرأ double. خزّنه في متغير float. اطبع الفرق المطلق بين الـ double الأصلي والـ float لإظهار فقدان الدقة.`,
                starterCode: `#include <bits/stdc++.h>
using namespace std;

int main() {
    double d;
    cin >> d;
    // Store in float
    // Calculate and print difference
    return 0;
}`,
                solution: `#include <bits/stdc++.h>
using namespace std;

int main() {
    double d; 
    cin >> d;
    float f = d;
    cout << fixed << setprecision(10) << abs(d - f);
    return 0;
}`,
                hints: ['float has less precision than double', 'Use abs() for absolute value', 'Use fixed and setprecision for output']
            },
            {
                id: 'p2_5',
                title: 'Bit Size Reporter',
                titleAr: 'مُبلّغ حجم البت',
                difficulty: 1,
                description: `Print the size in bits of: int, long, long long, and double. Use sizeof() which returns size in bytes.`,
                descriptionAr: `اطبع الحجم بالبت لـ: int، long، long long، و double. استخدم sizeof() التي ترجع الحجم بالبايت.`,
                starterCode: `#include <bits/stdc++.h>
using namespace std;

int main() {
    // Print size in bits of each type
    // Remember: 1 byte = 8 bits
    return 0;
}`,
                solution: `#include <bits/stdc++.h>
using namespace std;

int main() {
    cout << sizeof(int) * 8 << " ";
    cout << sizeof(long) * 8 << " ";
    cout << sizeof(long long) * 8 << " ";
    cout << sizeof(double) * 8;
    return 0;
}`,
                hints: ['sizeof() returns bytes', 'Multiply by 8 to get bits', '1 byte = 8 bits']
            },
            {
                id: 'p2_6',
                title: 'Swap Without Temp (XOR)',
                titleAr: 'التبديل بدون متغير مؤقت (XOR)',
                difficulty: 3,
                description: `Read two integers and swap their values without using a temporary variable. Use XOR bitwise operator.`,
                descriptionAr: `اقرأ عددين صحيحين وبدّل قيمهما بدون استخدام متغير مؤقت. استخدم عامل XOR.`,
                starterCode: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    // Swap using XOR (no temp variable)
    cout << a << " " << b;
    return 0;
}`,
                solution: `#include <bits/stdc++.h>
using namespace std;

int main() {
    int a, b; 
    cin >> a >> b;
    a ^= b; 
    b ^= a; 
    a ^= b;
    cout << a << " " << b;
    return 0;
}`,
                hints: ['XOR: a ^= b means a = a XOR b', 'Three XOR operations swap values', 'a ^= b; b ^= a; a ^= b;']
            },
            {
                id: 'p2_7',
                title: 'Type Promotion Check',
                titleAr: 'فحص ترقية النوع',
                difficulty: 2,
                description: `Print the result of these expressions: 5/2, 5/2.0, and 5.0/2. Observe how mixing int and double affects the result.`,
                descriptionAr: `اطبع نتيجة هذه التعبيرات: 5/2، 5/2.0، و 5.0/2. لاحظ كيف يؤثر خلط int و double على النتيجة.`,
                starterCode: `#include <bits/stdc++.h>
using namespace std;

int main() {
    // Print result of 5/2
    // Print result of 5/2.0
    // Print result of 5.0/2
    return 0;
}`,
                solution: `#include <bits/stdc++.h>
using namespace std;

int main() {
    cout << 5/2 << endl;     // 2 (integer division)
    cout << 5/2.0 << endl;   // 2.5 (promoted to double)
    cout << 5.0/2 << endl;   // 2.5 (promoted to double)
    return 0;
}`,
                hints: ['int/int = int (truncated)', 'If one operand is double, result is double', 'This is called type promotion']
            }
        ],

        mcq: [
            {
                id: 'q2_1',
                question: 'Which data type should you use to store a person\'s height in meters (e.g., 1.75)?',
                questionAr: 'أي نوع بيانات يجب استخدامه لتخزين طول شخص بالأمتار (مثل 1.75)؟',
                options: [
                    { text: 'int', textAr: 'int' },
                    { text: 'double', textAr: 'double' },
                    { text: 'char', textAr: 'char' },
                    { text: 'bool', textAr: 'bool' }
                ],
                correct: 1,
                explanation: `double is used for decimal numbers like 1.75. int only stores whole numbers, char stores single characters, bool stores true/false.`,
                explanationAr: `double يُستخدم للأرقام العشرية مثل 1.75. int يخزن الأعداد الصحيحة فقط، char يخزن حرفاً واحداً، bool يخزن صح/خطأ.`
            },
            {
                id: 'q2_2',
                question: 'What is the result of: int x = 7 / 2; ?',
                questionAr: 'ما نتيجة: int x = 7 / 2; ؟',
                options: [
                    { text: '3.5', textAr: '3.5' },
                    { text: '3', textAr: '3' },
                    { text: '4', textAr: '4' },
                    { text: 'Error', textAr: 'خطأ' }
                ],
                correct: 1,
                explanation: `Integer division discards the decimal part. 7 / 2 = 3 (not 3.5). To get 3.5, use double or cast: (double)7 / 2.`,
                explanationAr: `قسمة الأعداد الصحيحة تتجاهل الجزء العشري. 7 / 2 = 3 (وليس 3.5). للحصول على 3.5، استخدم double أو التحويل.`
            },
            {
                id: 'q2_3',
                question: 'Which variable declaration is INVALID?',
                questionAr: 'أي إعلان متغير غير صالح؟',
                options: [
                    { text: 'int age = 25;', textAr: 'int age = 25;' },
                    { text: 'double _price = 9.99;', textAr: 'double _price = 9.99;' },
                    { text: 'int 2ndPlace = 2;', textAr: 'int 2ndPlace = 2;' },
                    { text: 'string firstName = "Ali";', textAr: 'string firstName = "Ali";' }
                ],
                correct: 2,
                explanation: `Variable names cannot start with a number. 2ndPlace is invalid. Use secondPlace or place2 instead.`,
                explanationAr: `أسماء المتغيرات لا يمكن أن تبدأ برقم. 2ndPlace غير صالح. استخدم secondPlace أو place2 بدلاً منه.`
            },
            {
                id: 'q2_4',
                question: 'What does const mean?',
                questionAr: 'ماذا تعني const؟',
                options: [
                    { text: 'The variable is very large', textAr: 'المتغير كبير جداً' },
                    { text: 'The variable cannot be changed', textAr: 'المتغير لا يمكن تغييره' },
                    { text: 'The variable is public', textAr: 'المتغير عام' },
                    { text: 'The variable is temporary', textAr: 'المتغير مؤقت' }
                ],
                correct: 1,
                explanation: `const creates a constant - a value that cannot be modified after initialization. Attempting to change it causes a compiler error.`,
                explanationAr: `const تنشئ ثابتاً - قيمة لا يمكن تعديلها بعد التهيئة. محاولة تغييرها تسبب خطأ في الترجمة.`
            },
            {
                id: 'q2_5',
                question: 'Which keyword is used to declare a constant variable?',
                questionAr: 'أي كلمة محجوزة تُستخدم للإعلان عن متغير ثابت؟',
                options: [
                    { text: 'const', textAr: 'const' },
                    { text: 'constant', textAr: 'constant' },
                    { text: 'final', textAr: 'final' },
                    { text: 'static', textAr: 'static' }
                ],
                correct: 0,
                explanation: `The const keyword makes a variable unmodifiable.`,
                explanationAr: `كلمة const تجعل المتغير غير قابل للتعديل.`
            }
        ]
    },

    // Section 3: Operators and Expressions
    section3: {
        id: 'section3',
        title: 'Operators and Expressions',
        titleAr: 'العوامل والتعبيرات',
        iconName: 'plus',
        duration: '60-90 min',

        theory: [
            {
                heading: 'What are Operators?',
                headingAr: 'ما هي العوامل؟',
                content: `Operators are symbols that tell the compiler to perform specific operations. They work on operands (values or variables). For example, in 5 + 3, the + is the operator and 5, 3 are operands. C++ has many types of operators for different purposes.`,
                contentAr: `العوامل هي رموز تخبر المترجم بتنفيذ عمليات محددة. تعمل على المعاملات (قيم أو متغيرات). مثلاً، في 5 + 3، الـ + هو العامل و5، 3 هما المعاملان. C++ لديها أنواع عديدة من العوامل لأغراض مختلفة.`,
            },
            {
                heading: 'Arithmetic Operators',
                headingAr: 'العوامل الحسابية',
                content: `Basic math operations:\n• + Addition (5 + 3 = 8)\n• - Subtraction (5 - 3 = 2)\n• * Multiplication (5 * 3 = 15)\n• / Division (10 / 3 = 3 for int, 3.33 for double)\n• % Modulus - remainder (10 % 3 = 1)\n\nImportant: Integer division truncates! Use doubles for decimal results.`,
                contentAr: `العمليات الحسابية الأساسية:\n• + الجمع (5 + 3 = 8)\n• - الطرح (5 - 3 = 2)\n• * الضرب (5 * 3 = 15)\n• / القسمة (10 / 3 = 3 لـ int)\n• % باقي القسمة (10 % 3 = 1)\n\nمهم: قسمة الأعداد الصحيحة تقطع الكسر!`,
            },
            {
                heading: 'Comparison Operators',
                headingAr: 'عوامل المقارنة',
                content: `Compare values and return true or false:\n• == Equal to (5 == 5 → true)\n• != Not equal to (5 != 3 → true)\n• > Greater than (5 > 3 → true)\n• < Less than (5 < 3 → false)\n• >= Greater than or equal\n• <= Less than or equal\n\nUsed mainly in if statements and loops.`,
                contentAr: `مقارنة القيم وإرجاع صح أو خطأ:\n• == يساوي (5 == 5 ← صح)\n• != لا يساوي (5 != 3 ← صح)\n• > أكبر من (5 > 3 ← صح)\n• < أصغر من (5 < 3 ← خطأ)\n• >= أكبر من أو يساوي\n• <= أصغر من أو يساوي\n\nتُستخدم أساساً في جمل if والحلقات.`,
            },
            {
                heading: 'Logical Operators',
                headingAr: 'العوامل المنطقية',
                content: `Combine multiple conditions:\n• && AND - both must be true (true && true = true)\n• || OR - at least one must be true (true || false = true)\n• ! NOT - reverses the value (!true = false)\n\nExample: (age >= 18 && hasLicense) - must be 18+ AND have license.`,
                contentAr: `دمج شروط متعددة:\n• && و (AND) - كلاهما يجب أن يكون صحيحاً\n• || أو (OR) - واحد على الأقل يجب أن يكون صحيحاً\n• ! ليس (NOT) - يعكس القيمة\n\nمثال: (age >= 18 && hasLicense) - يجب أن يكون 18+ ولديه رخصة.`,
            },
            {
                heading: 'Assignment Operators',
                headingAr: 'عوامل التعيين',
                content: `Assign and modify values:\n• = Simple assignment (x = 5)\n• += Add and assign (x += 3 same as x = x + 3)\n• -= Subtract and assign\n• *= Multiply and assign\n• /= Divide and assign\n• ++ Increment by 1 (x++ or ++x)\n• -- Decrement by 1`,
                contentAr: `تعيين وتعديل القيم:\n• = تعيين بسيط (x = 5)\n• += جمع وتعيين (x += 3 مثل x = x + 3)\n• -= طرح وتعيين\n• *= ضرب وتعيين\n• /= قسمة وتعيين\n• ++ زيادة بـ 1\n• -- نقصان بـ 1`,
            },
            {
                heading: 'Operator Precedence',
                headingAr: 'أولوية العوامل',
                content: `Like math, operators have precedence:\n1. () Parentheses - highest priority\n2. * / % Multiplication, Division, Modulus\n3. + - Addition, Subtraction\n4. < > <= >= Comparison\n5. == != Equality\n6. && Logical AND\n7. || Logical OR\n8. = Assignment - lowest priority\n\nWhen in doubt, use parentheses!`,
                contentAr: `مثل الرياضيات، العوامل لها أولوية:\n1. () الأقواس - أعلى أولوية\n2. * / % الضرب، القسمة، باقي القسمة\n3. + - الجمع، الطرح\n4. < > <= >= المقارنة\n5. == != التساوي\n6. && و المنطقية\n7. || أو المنطقية\n8. = التعيين - أدنى أولوية\n\nعندما تشك، استخدم الأقواس!`,
            }
        ],

        codeExamples: [
            {
                title: 'Arithmetic Operations',
                titleAr: 'العمليات الحسابية',
                code: `#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 3;
    
    cout << "a = " << a << ", b = " << b << endl;
    cout << "a + b = " << a + b << endl;   // 13
    cout << "a - b = " << a - b << endl;   // 7
    cout << "a * b = " << a * b << endl;   // 30
    cout << "a / b = " << a / b << endl;   // 3 (integer!)
    cout << "a % b = " << a % b << endl;   // 1 (remainder)
    
    // For decimal division
    double x = 10.0, y = 3.0;
    cout << "x / y = " << x / y << endl;   // 3.333...
    
    return 0;
}`,
                explanation: `This shows all arithmetic operators. Note that 10/3 gives 3 (not 3.33) because both are integers. The modulus % gives the remainder after division. For decimal results, use double.`,
                explanationAr: `هذا يُظهر كل العوامل الحسابية. لاحظ أن 10/3 تعطي 3 (وليس 3.33) لأن كليهما أعداد صحيحة. % تعطي الباقي بعد القسمة. للنتائج العشرية، استخدم double.`
            },
            {
                title: 'Comparison and Logic',
                titleAr: 'المقارنة والمنطق',
                code: `#include <iostream>
using namespace std;

int main() {
    int age = 20;
    bool hasID = true;
    
    // Comparison operators
    cout << "age == 20: " << (age == 20) << endl;  // 1 (true)
    cout << "age > 18: " << (age > 18) << endl;    // 1 (true)
    cout << "age < 18: " << (age < 18) << endl;    // 0 (false)
    
    // Logical operators
    cout << "Adult with ID: " << (age >= 18 && hasID) << endl;  // 1
    cout << "Teen or adult: " << (age >= 13 || age >= 18) << endl; // 1
    cout << "NOT hasID: " << (!hasID) << endl;     // 0
    
    // Combined conditions
    bool canEnter = (age >= 18) && hasID;
    cout << "Can enter: " << canEnter << endl;
    
    return 0;
}`,
                explanation: `Comparison returns 1 (true) or 0 (false). && requires both conditions true. || requires at least one true. ! reverses the value. Always use parentheses around comparisons in cout.`,
                explanationAr: `المقارنة ترجع 1 (صح) أو 0 (خطأ). && تتطلب كلا الشرطين صحيحين. || تتطلب واحداً على الأقل صحيحاً. ! تعكس القيمة. استخدم دائماً الأقواس حول المقارنات.`
            },
            {
                title: 'Increment and Decrement',
                titleAr: 'الزيادة والنقصان',
                code: `#include <iostream>
using namespace std;

int main() {
    int x = 5;
    
    cout << "Initial x: " << x << endl;      // 5
    
    x++;  // Post-increment
    cout << "After x++: " << x << endl;      // 6
    
    ++x;  // Pre-increment
    cout << "After ++x: " << x << endl;      // 7
    
    x--;  // Decrement
    cout << "After x--: " << x << endl;      // 6
    
    // Difference: pre vs post
    int a = 5;
    int b = a++;  // b gets 5, then a becomes 6
    cout << "a = " << a << ", b = " << b << endl;
    
    int c = 5;
    int d = ++c;  // c becomes 6, then d gets 6
    cout << "c = " << c << ", d = " << d << endl;
    
    return 0;
}`,
                explanation: `++ adds 1, -- subtracts 1. Pre-increment (++x) increments first then returns. Post-increment (x++) returns value first then increments. When used alone, they're the same.`,
                explanationAr: `++ تضيف 1، -- تطرح 1. الزيادة المسبقة (++x) تزيد أولاً ثم ترجع. الزيادة اللاحقة (x++) ترجع القيمة أولاً ثم تزيد. عند استخدامها وحدها، هما نفس الشيء.`
            },
            {
                title: 'Compound Assignment',
                titleAr: 'التعيين المركب',
                code: `#include <iostream>
using namespace std;

int main() {
    int score = 100;
    
    cout << "Initial: " << score << endl;   // 100
    
    score += 20;  // score = score + 20
    cout << "After += 20: " << score << endl;  // 120
    
    score -= 30;  // score = score - 30
    cout << "After -= 30: " << score << endl;  // 90
    
    score *= 2;   // score = score * 2
    cout << "After *= 2: " << score << endl;   // 180
    
    score /= 3;   // score = score / 3
    cout << "After /= 3: " << score << endl;   // 60
    
    score %= 7;   // score = score % 7
    cout << "After %= 7: " << score << endl;   // 4
    
    return 0;
}`,
                explanation: `Compound operators combine operation with assignment. They're shorter to write and slightly more efficient. x += 5 is the same as x = x + 5 but cleaner.`,
                explanationAr: `العوامل المركبة تجمع العملية مع التعيين. هي أقصر في الكتابة وأكثر كفاءة قليلاً. x += 5 هي نفس x = x + 5 لكن أنظف.`
            }
        ],

        commonMistakes: [
            {
                title: 'Using = Instead of ==',
                titleAr: 'استخدام = بدلاً من ==',
                wrong: `if (x = 5)  // WRONG! This assigns 5 to x`,
                correct: `if (x == 5)  // Correct: compares x to 5`,
                explanation: `= assigns a value, == compares values. Using = in conditions is a common bug that's hard to find because it doesn't cause an error.`,
                explanationAr: `= تعيّن قيمة، == تقارن القيم. استخدام = في الشروط خطأ شائع يصعب إيجاده لأنه لا يسبب خطأ.`
            },
            {
                title: 'Integer Division Mistake',
                titleAr: 'خطأ قسمة الأعداد الصحيحة',
                wrong: `double avg = (80 + 90 + 75) / 3;  // avg = 81.0, not 81.67`,
                correct: `double avg = (80 + 90 + 75) / 3.0;  // avg = 81.67`,
                explanation: `If all operands are integers, result is integer. Add .0 to one number or cast to double to get decimal result.`,
                explanationAr: `إذا كانت كل المعاملات أعداداً صحيحة، النتيجة عدد صحيح. أضف .0 لرقم واحد أو حوّل إلى double للحصول على نتيجة عشرية.`
            },
            {
                title: 'Operator Precedence Confusion',
                titleAr: 'الخلط في أولوية العوامل',
                wrong: `bool result = 5 + 3 > 2 + 1 && 10 / 2 == 5;  // Hard to read`,
                correct: `bool result = ((5 + 3) > (2 + 1)) && ((10 / 2) == 5);  // Clear`,
                explanation: `Even if you know precedence, use parentheses for clarity. Your future self and teammates will thank you.`,
                explanationAr: `حتى لو تعرف الأولوية، استخدم الأقواس للوضوح. نفسك في المستقبل وزملاؤك سيشكرونك.`
            }
        ],

        advancedTopics: {
            intro: `Understanding operators deeply helps you write more efficient and bug-free code.`,
            introAr: `فهم العوامل بعمق يساعدك في كتابة كود أكثر كفاءة وخالٍ من الأخطاء.`,
            topics: [
                {
                    title: 'Short-Circuit Evaluation',
                    titleAr: 'التقييم المختصر',
                    explanation: `In && (AND), if the first condition is false, the second is not evaluated. In || (OR), if the first is true, the second is not evaluated. This can improve performance and prevent errors.`,
                    explanationAr: `في && (و)، إذا كان الشرط الأول خاطئاً، الثاني لا يُقيَّم. في || (أو)، إذا كان الأول صحيحاً، الثاني لا يُقيَّم. هذا يحسّن الأداء ويمنع الأخطاء.`,
                    example: `// Safe: won't divide by zero
if (b != 0 && a/b > 5) { }

// If b is 0, a/b is never evaluated!`
                },
                {
                    title: 'Ternary Operator',
                    titleAr: 'العامل الثلاثي',
                    explanation: `A shorthand for simple if-else: condition ? value_if_true : value_if_false. Example: int max = (a > b) ? a : b;`,
                    explanationAr: `اختصار لـ if-else البسيطة: شرط ? قيمة_إذا_صح : قيمة_إذا_خطأ. مثال: int max = (a > b) ? a : b;`,
                    example: `int age = 20;
string status = (age >= 18) ? "Adult" : "Minor";
// status = "Adult"`
                },
                {
                    title: 'Modulus Uses',
                    titleAr: 'استخدامات باقي القسمة',
                    explanation: `The % operator is useful for: checking even/odd (n % 2), wrapping around (index % size), extracting digits (n % 10 for last digit).`,
                    explanationAr: `عامل % مفيد لـ: فحص زوجي/فردي (n % 2)، الالتفاف (index % size)، استخراج الأرقام (n % 10 لآخر رقم).`,
                    example: `int n = 12345;
bool isEven = (n % 2 == 0);   // true
int lastDigit = n % 10;        // 5
int hour = 25 % 24;            // 1 (wraps around)`
                }
            ]
        },

        practice: [
            {
                id: 'p3_1',
                title: 'Simple Calculator',
                titleAr: 'آلة حاسبة بسيطة',
                difficulty: 1,
                description: `Create a calculator that takes two numbers and shows all arithmetic operations (+, -, *, /, %).`,
                descriptionAr: `أنشئ آلة حاسبة تأخذ رقمين وتُظهر كل العمليات الحسابية (+، -، *، /، %).`,
                starterCode: `#include <iostream>
using namespace std;

int main() {
    // Declare two integer variables
    
    // Get input from user
    
    // Display all operations
    
    return 0;
}`,
                solution: `#include <iostream>
using namespace std;

int main() {
    int a, b;
    
    cout << "Enter first number: ";
    cin >> a;
    cout << "Enter second number: ";
    cin >> b;
    
    cout << a << " + " << b << " = " << a + b << endl;
    cout << a << " - " << b << " = " << a - b << endl;
    cout << a << " * " << b << " = " << a * b << endl;
    cout << a << " / " << b << " = " << a / b << endl;
    cout << a << " % " << b << " = " << a % b << endl;
    
    return 0;
}`,
                hints: ['Declare int a, b', 'Use cin to get input', 'Print each operation result separately']
            },
            {
                id: 'p3_2',
                title: 'Even or Odd Checker',
                titleAr: 'فاحص زوجي أو فردي',
                difficulty: 2,
                description: `Ask user for a number and use the modulus operator to check if it's even or odd.`,
                descriptionAr: `اسأل المستخدم عن رقم واستخدم عامل باقي القسمة للتحقق إذا كان زوجياً أو فردياً.`,
                starterCode: `#include <iostream>
using namespace std;

int main() {
    int number;
    
    // Get input
    
    // Check if even or odd using %
    
    // Display result
    
    return 0;
}`,
                solution: `#include <iostream>
using namespace std;

int main() {
    int number;
    
    cout << "Enter a number: ";
    cin >> number;
    
    if (number % 2 == 0) {
        cout << number << " is EVEN" << endl;
    } else {
        cout << number << " is ODD" << endl;
    }
    
    return 0;
}`,
                hints: ['Even numbers have remainder 0 when divided by 2', 'Use: number % 2 == 0', 'Use if-else to display the result']
            },
            {
                id: 'p3_3',
                title: 'Expression Evaluator',
                titleAr: 'مقيّم التعبيرات',
                difficulty: 2,
                description: `Evaluate this expression step by step: result = 5 + 3 * 2 - 8 / 4. Show each step and explain operator precedence.`,
                descriptionAr: `قيّم هذا التعبير خطوة بخطوة: result = 5 + 3 * 2 - 8 / 4. أظهر كل خطوة واشرح أولوية العوامل.`,
                starterCode: `#include <iostream>
using namespace std;

int main() {
    // Calculate step by step
    // Show multiplication first: 3 * 2
    // Show division: 8 / 4
    // Then additions and subtractions
    
    // Show final result
    
    return 0;
}`,
                solution: `#include <iostream>
using namespace std;

int main() {
    cout << "Expression: 5 + 3 * 2 - 8 / 4" << endl;
    cout << "Step 1: 3 * 2 = " << 3 * 2 << endl;
    cout << "Step 2: 8 / 4 = " << 8 / 4 << endl;
    cout << "Step 3: 5 + 6 - 2 = " << 5 + 6 - 2 << endl;
    
    int result = 5 + 3 * 2 - 8 / 4;
    cout << "Final Result: " << result << endl;  // 9
    
    return 0;
}`,
                hints: ['Multiplication and division happen before addition/subtraction', '3*2=6 and 8/4=2 first', 'Then 5+6-2=9']
            },
            {
                id: 'p3_4',
                title: 'Bitwise Flag Checker',
                titleAr: 'فاحص الأعلام الثنائية',
                difficulty: 3,
                description: `Use bitwise AND (&) to check if specific bits are set. Given flags = 13 (binary: 1101), check if bit 0, bit 2, and bit 3 are set.`,
                descriptionAr: `استخدم AND الثنائية (&) للتحقق إذا كانت بتات معينة مضبوطة. بالنظر إلى flags = 13 (ثنائي: 1101)، تحقق إذا كانت البت 0 و 2 و 3 مضبوطة.`,
                starterCode: `#include <iostream>
using namespace std;

int main() {
    int flags = 13;  // Binary: 1101
    
    // Check bit 0 (value 1)
    // Check bit 1 (value 2)
    // Check bit 2 (value 4)
    // Check bit 3 (value 8)
    
    return 0;
}`,
                solution: `#include <iostream>
using namespace std;

int main() {
    int flags = 13;  // Binary: 1101
    
    cout << "Flags = " << flags << " (binary: 1101)" << endl;
    
    // Check each bit using AND
    if (flags & 1) cout << "Bit 0 is SET" << endl;
    else cout << "Bit 0 is NOT set" << endl;
    
    if (flags & 2) cout << "Bit 1 is SET" << endl;
    else cout << "Bit 1 is NOT set" << endl;
    
    if (flags & 4) cout << "Bit 2 is SET" << endl;
    else cout << "Bit 2 is NOT set" << endl;
    
    if (flags & 8) cout << "Bit 3 is SET" << endl;
    else cout << "Bit 3 is NOT set" << endl;
    
    return 0;
}`,
                hints: ['Use & with powers of 2 to check bits', 'Bit 0 = 1, Bit 1 = 2, Bit 2 = 4, Bit 3 = 8', '13 & 1 = 1 (bit 0 set), 13 & 2 = 0 (bit 1 not set)']
            },
            {
                id: 'p3_5',
                title: 'Logical Expression Builder',
                titleAr: 'باني التعبيرات المنطقية',
                difficulty: 3,
                description: `Create a program that checks if a person can vote: age >= 18 AND has valid ID AND is a citizen. Use logical operators.`,
                descriptionAr: `أنشئ برنامجاً يتحقق إذا كان الشخص يستطيع التصويت: العمر >= 18 و لديه هوية صالحة و هو مواطن. استخدم العوامل المنطقية.`,
                starterCode: `#include <iostream>
using namespace std;

int main() {
    int age;
    bool hasID, isCitizen;
    
    // Get input for all conditions
    
    // Check all conditions with && and ||
    
    // Display result
    
    return 0;
}`,
                solution: `#include <iostream>
using namespace std;

int main() {
    int age;
    char hasIDInput, isCitizenInput;
    
    cout << "Enter your age: ";
    cin >> age;
    
    cout << "Do you have valid ID? (y/n): ";
    cin >> hasIDInput;
    bool hasID = (hasIDInput == 'y' || hasIDInput == 'Y');
    
    cout << "Are you a citizen? (y/n): ";
    cin >> isCitizenInput;
    bool isCitizen = (isCitizenInput == 'y' || isCitizenInput == 'Y');
    
    // All conditions must be true
    if (age >= 18 && hasID && isCitizen) {
        cout << "You CAN vote!" << endl;
    } else {
        cout << "You CANNOT vote." << endl;
        if (age < 18) cout << "- You must be 18 or older" << endl;
        if (!hasID) cout << "- You need a valid ID" << endl;
        if (!isCitizen) cout << "- You must be a citizen" << endl;
    }
    
    return 0;
}`,
                hints: ['Use && to require ALL conditions', 'Use || to accept either y or Y', 'Check which condition failed for helpful message']
            }
        ],

        mcq: [
            {
                id: 'q3_1',
                question: 'What is the result of 17 % 5?',
                questionAr: 'ما نتيجة 17 % 5؟',
                options: [
                    { text: '3', textAr: '3' },
                    { text: '2', textAr: '2' },
                    { text: '3.4', textAr: '3.4' },
                    { text: '12', textAr: '12' }
                ],
                correct: 1,
                explanation: `% gives the remainder. 17 ÷ 5 = 3 remainder 2. So 17 % 5 = 2.`,
                explanationAr: `% تعطي الباقي. 17 ÷ 5 = 3 والباقي 2. لذا 17 % 5 = 2.`
            },
            {
                id: 'q3_2',
                question: 'What does && mean?',
                questionAr: 'ماذا تعني &&؟',
                options: [
                    { text: 'OR - at least one true', textAr: 'أو - واحد على الأقل صحيح' },
                    { text: 'AND - both must be true', textAr: 'و - كلاهما يجب أن يكون صحيحاً' },
                    { text: 'NOT - reverses value', textAr: 'ليس - تعكس القيمة' },
                    { text: 'EQUAL - same values', textAr: 'يساوي - نفس القيم' }
                ],
                correct: 1,
                explanation: `&& is logical AND. Both conditions must be true for the result to be true. If either is false, result is false.`,
                explanationAr: `&& هي و المنطقية. كلا الشرطين يجب أن يكون صحيحاً لتكون النتيجة صحيحة.`
            },
            {
                id: 'q3_3',
                question: 'What is the value of x after: int x = 5; x += 3;',
                questionAr: 'ما قيمة x بعد: int x = 5; x += 3;',
                options: [
                    { text: '5', textAr: '5' },
                    { text: '3', textAr: '3' },
                    { text: '8', textAr: '8' },
                    { text: '15', textAr: '15' }
                ],
                correct: 2,
                explanation: `x += 3 is shorthand for x = x + 3. So 5 + 3 = 8.`,
                explanationAr: `x += 3 اختصار لـ x = x + 3. لذا 5 + 3 = 8.`
            },
            {
                id: 'q3_4',
                question: 'Which has higher precedence (calculated first)?',
                questionAr: 'أي عامل له أولوية أعلى (يُحسب أولاً)؟',
                options: [
                    { text: '+ (addition)', textAr: '+ (جمع)' },
                    { text: '* (multiplication)', textAr: '* (ضرب)' },
                    { text: '== (comparison)', textAr: '== (مقارنة)' },
                    { text: '= (assignment)', textAr: '= (تعيين)' }
                ],
                correct: 1,
                explanation: `Multiplication has higher precedence than addition, which has higher precedence than comparison, which has higher precedence than assignment.`,
                explanationAr: `الضرب له أولوية أعلى من الجمع، والجمع أعلى من المقارنة، والمقارنة أعلى من التعيين.`
            },
            {
                id: 'q3_5',
                question: 'What does the ++ operator do?',
                questionAr: 'ماذا يفعل العامل ++ ؟',
                options: [
                    { text: 'Adds 2', textAr: 'يضيف 2' },
                    { text: 'Increments by 1', textAr: 'يزيد بمقدار 1' },
                    { text: 'Multiplies by 2', textAr: 'يضرب في 2' },
                    { text: 'Checks equality', textAr: 'يتحقق من التساوي' }
                ],
                correct: 1,
                explanation: `The ++ operator is the increment operator.`,
                explanationAr: `العامل ++ هو عامل الزيادة.`
            }
        ]
    },

    // Section 4: Input and Output
    section4: {
        id: 'section4',
        title: 'Input and Output',
        titleAr: 'الإدخال والإخراج',
        iconName: 'terminal',
        duration: '45-60 min',

        theory: [
            {
                heading: 'Console Output with cout',
                headingAr: 'الإخراج على الشاشة مع cout',
                content: `cout (console output) displays text and values to the screen. Use << (insertion operator) to send data to cout. You can chain multiple << operators. endl creates a new line. Include <iostream> to use cout.`,
                contentAr: `cout (إخراج الشاشة) يعرض النصوص والقيم على الشاشة. استخدم << (عامل الإدراج) لإرسال البيانات إلى cout. يمكنك ربط عدة عوامل <<. endl تنشئ سطراً جديداً. ضمّن <iostream> لاستخدام cout.`,
            },
            {
                heading: 'Console Input with cin',
                headingAr: 'الإدخال من المستخدم مع cin',
                content: `cin (console input) reads data from the keyboard. Use >> (extraction operator) to get data from cin. The program waits for user to type and press Enter. Data is stored in the variable you provide.`,
                contentAr: `cin (إدخال الشاشة) يقرأ البيانات من لوحة المفاتيح. استخدم >> (عامل الاستخراج) للحصول على البيانات من cin. البرنامج ينتظر المستخدم للكتابة والضغط على Enter. البيانات تُخزَّن في المتغير الذي توفره.`,
            },
            {
                heading: 'Reading Strings with Spaces',
                headingAr: 'قراءة النصوص مع المسافات',
                content: `cin >> stops at whitespace (spaces, tabs). For full lines with spaces, use getline(cin, variableName). This reads everything until Enter is pressed.`,
                contentAr: `cin >> تتوقف عند المسافات البيضاء. للأسطر الكاملة مع المسافات، استخدم getline(cin, variableName). هذا يقرأ كل شيء حتى الضغط على Enter.`,
            },
            {
                heading: 'Formatting Output',
                headingAr: 'تنسيق الإخراج',
                content: `Control output appearance:\n• endl - new line\n• "\\t" - tab character\n• "\\n" - new line (alternative to endl)\n• fixed and setprecision(n) - control decimal places\n• setw(n) - set field width (from <iomanip>)`,
                contentAr: `التحكم في مظهر الإخراج:\n• endl - سطر جديد\n• "\\t" - حرف تاب\n• "\\n" - سطر جديد (بديل لـ endl)\n• fixed و setprecision(n) - التحكم في المنازل العشرية\n• setw(n) - تعيين عرض الحقل`,
            }
        ],

        codeExamples: [
            {
                title: 'Basic Output',
                titleAr: 'الإخراج الأساسي',
                code: `#include <iostream>
using namespace std;

int main() {
    // Simple text output
    cout << "Hello, World!" << endl;
    
    // Output with variables
    int age = 25;
    string name = "Ahmed";
    
    cout << "Name: " << name << endl;
    cout << "Age: " << age << " years" << endl;
    
    // Chaining outputs
    cout << name << " is " << age << " years old." << endl;
    
    // Special characters
    cout << "Line 1\\nLine 2\\nLine 3" << endl;
    cout << "Col1\\tCol2\\tCol3" << endl;
    
    return 0;
}`,
                explanation: `cout displays text and variables. Use << to chain multiple items. endl or \\n creates new lines. \\t creates tabs for alignment.`,
                explanationAr: `cout يعرض النص والمتغيرات. استخدم << لربط عناصر متعددة. endl أو \\n تنشئ أسطراً جديدة. \\t تنشئ تابات للمحاذاة.`
            },
            {
                title: 'Getting User Input',
                titleAr: 'الحصول على إدخال المستخدم',
                code: `#include <iostream>
using namespace std;

int main() {
    string name;
    int age;
    double height;
    
    cout << "Enter your name: ";
    cin >> name;
    
    cout << "Enter your age: ";
    cin >> age;
    
    cout << "Enter your height (m): ";
    cin >> height;
    
    cout << "\\n=== Your Info ===" << endl;
    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
    cout << "Height: " << height << "m" << endl;
    
    return 0;
}`,
                explanation: `cin >> waits for user input. It reads until whitespace. Each cin >> reads one value. The type of variable determines what kind of data is expected.`,
                explanationAr: `cin >> ينتظر إدخال المستخدم. يقرأ حتى المسافة البيضاء. كل cin >> تقرأ قيمة واحدة. نوع المتغير يحدد نوع البيانات المتوقع.`
            },
            {
                title: 'Reading Full Lines',
                titleAr: 'قراءة أسطر كاملة',
                code: `#include <iostream>
using namespace std;

int main() {
    string fullName;
    string address;
    
    cout << "Enter your full name: ";
    getline(cin, fullName);
    
    cout << "Enter your address: ";
    getline(cin, address);
    
    cout << "\\nName: " << fullName << endl;
    cout << "Address: " << address << endl;
    
    return 0;
}`,
                explanation: `getline(cin, variable) reads the entire line including spaces. Use this when you need to read names, sentences, or addresses that contain spaces.`,
                explanationAr: `getline(cin, variable) تقرأ السطر بالكامل متضمناً المسافات. استخدمها عندما تحتاج قراءة أسماء أو جمل أو عناوين تحتوي مسافات.`
            },
            {
                title: 'Simple Calculator Example',
                titleAr: 'مثال آلة حاسبة بسيطة',
                code: `#include <iostream>
using namespace std;

int main() {
    double num1, num2;
    char operation;
    
    cout << "Enter first number: ";
    cin >> num1;
    
    cout << "Enter operation (+, -, *, /): ";
    cin >> operation;
    
    cout << "Enter second number: ";
    cin >> num2;
    
    double result;
    if (operation == '+') result = num1 + num2;
    else if (operation == '-') result = num1 - num2;
    else if (operation == '*') result = num1 * num2;
    else if (operation == '/') result = num1 / num2;
    
    cout << num1 << " " << operation << " " << num2 << " = " << result << endl;
    
    return 0;
}`,
                explanation: `This combines input and output. We read numbers and an operator from the user, perform the calculation, and display the result. char is used for single characters.`,
                explanationAr: `هذا يجمع الإدخال والإخراج. نقرأ أرقاماً وعاملاً من المستخدم، نجري الحساب، ونعرض النتيجة. char يُستخدم للحروف المفردة.`
            }
        ],

        commonMistakes: [
            {
                title: 'Mixing cin >> and getline',
                titleAr: 'خلط cin >> مع getline',
                wrong: `int age;
cin >> age;
string name;
getline(cin, name);  // Skipped! Reads empty line`,
                correct: `int age;
cin >> age;
cin.ignore();  // Clear leftover newline
string name;
getline(cin, name);  // Now works!`,
                explanation: `cin >> leaves a newline in the buffer. getline reads it immediately. Use cin.ignore() to clear the buffer before getline.`,
                explanationAr: `cin >> تترك سطراً جديداً في المخزن المؤقت. getline تقرأه فوراً. استخدم cin.ignore() لمسح المخزن قبل getline.`
            },
            {
                title: 'Wrong Operator Direction',
                titleAr: 'اتجاه العامل الخاطئ',
                wrong: `cin << name;   // WRONG!
cout >> age;   // WRONG!`,
                correct: `cin >> name;   // Correct: data flows INTO variable
cout << age;   // Correct: data flows TO screen`,
                explanation: `Remember: << points toward cout (data TO screen). >> points toward variable (data INTO variable).`,
                explanationAr: `تذكر: << تشير نحو cout (بيانات إلى الشاشة). >> تشير نحو المتغير (بيانات إلى المتغير).`
            }
        ],

        advancedTopics: {
            intro: `Mastering I/O helps you create interactive programs that communicate effectively with users.`,
            introAr: `إتقان الإدخال/الإخراج يساعدك في إنشاء برامج تفاعلية تتواصل بفعالية مع المستخدمين.`,
            topics: [
                {
                    title: 'Input Validation',
                    titleAr: 'التحقق من الإدخال',
                    explanation: `Always validate user input. Check if cin succeeded with if(cin). Use cin.fail() to detect errors. cin.clear() resets error state.`,
                    explanationAr: `تحقق دائماً من إدخال المستخدم. تحقق إذا نجحت cin مع if(cin). استخدم cin.fail() لاكتشاف الأخطاء.`,
                    example: `int age;
cin >> age;
if (cin.fail()) {
    cout << "Invalid input!" << endl;
}`
                },
                {
                    title: 'Formatting Numbers',
                    titleAr: 'تنسيق الأرقام',
                    explanation: `Use <iomanip> for formatting: fixed shows fixed-point, setprecision(n) sets decimal places, setw(n) sets minimum width.`,
                    explanationAr: `استخدم <iomanip> للتنسيق: fixed تظهر النقطة الثابتة، setprecision(n) تحدد المنازل العشرية.`,
                    example: `#include <iomanip>
double price = 19.5;
cout << fixed << setprecision(2);
cout << "$" << price << endl;  // $19.50`
                }
            ]
        },

        practice: [
            {
                id: 'p4_1',
                title: 'Personal Info Form',
                titleAr: 'نموذج معلومات شخصية',
                difficulty: 1,
                description: `Ask user for their name, age, and city. Display all info in a nice format.`,
                descriptionAr: `اسأل المستخدم عن اسمه وعمره ومدينته. أظهر كل المعلومات بتنسيق جميل.`,
                starterCode: `#include <iostream>
using namespace std;

int main() {
    // Declare variables
    
    // Get input
    
    // Display info
    
    return 0;
}`,
                solution: `#include <iostream>
using namespace std;

int main() {
    string name, city;
    int age;
    
    cout << "Enter your name: ";
    cin >> name;
    
    cout << "Enter your age: ";
    cin >> age;
    
    cout << "Enter your city: ";
    cin >> city;
    
    cout << "\\n=== Profile ===" << endl;
    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
    cout << "City: " << city << endl;
    
    return 0;
}`,
                hints: ['Use string for text, int for age', 'Use cin >> for each input', 'Format output nicely with endl']
            },
            {
                id: 'p4_2',
                title: 'Full Name with Spaces',
                titleAr: 'الاسم الكامل مع المسافات',
                difficulty: 2,
                description: `Read a user's full name (first and last) including spaces using getline(). Display a greeting.`,
                descriptionAr: `اقرأ الاسم الكامل للمستخدم (الأول والأخير) متضمناً المسافات باستخدام getline(). اعرض تحية.`,
                starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string fullName;
    
    // Ask for full name with spaces
    // Use getline instead of cin >>
    
    // Display greeting
    
    return 0;
}`,
                solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string fullName;
    
    cout << "Enter your full name: ";
    getline(cin, fullName);
    
    cout << "Hello, " << fullName << "!" << endl;
    cout << "Welcome to our program." << endl;
    
    return 0;
}`,
                hints: ['getline(cin, variable) reads entire line', 'Include <string> header', 'cin >> only reads until space']
            },
            {
                id: 'p4_3',
                title: 'Formatted Receipt',
                titleAr: 'إيصال منسق',
                difficulty: 2,
                description: `Create a shopping receipt. Ask for item name and price. Display with proper decimal formatting (2 decimal places).`,
                descriptionAr: `أنشئ إيصال تسوق. اسأل عن اسم المنتج والسعر. اعرضه بتنسيق عشري صحيح (منزلتين عشريتين).`,
                starterCode: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    string item;
    double price;
    
    // Get item name and price
    
    // Display formatted receipt
    // Use fixed and setprecision(2)
    
    return 0;
}`,
                solution: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    string item;
    double price;
    int quantity;
    
    cout << "Enter item name: ";
    cin >> item;
    
    cout << "Enter price: $";
    cin >> price;
    
    cout << "Enter quantity: ";
    cin >> quantity;
    
    double total = price * quantity;
    double tax = total * 0.05;
    double grandTotal = total + tax;
    
    cout << "\\n====== RECEIPT ======" << endl;
    cout << fixed << setprecision(2);
    cout << "Item: " << item << endl;
    cout << "Price: $" << price << endl;
    cout << "Qty: " << quantity << endl;
    cout << "Subtotal: $" << total << endl;
    cout << "Tax (5%): $" << tax << endl;
    cout << "TOTAL: $" << grandTotal << endl;
    cout << "=====================" << endl;
    
    return 0;
}`,
                hints: ['Include <iomanip> for formatting', 'Use fixed << setprecision(2)', 'Calculate tax as price * 0.05']
            },
            {
                id: 'p4_4',
                title: 'Mixed Input Handler',
                titleAr: 'معالج الإدخال المختلط',
                difficulty: 3,
                description: `Read age first, then full address with spaces. Handle the cin.ignore() issue properly.`,
                descriptionAr: `اقرأ العمر أولاً، ثم العنوان الكامل مع المسافات. عالج مشكلة cin.ignore() بشكل صحيح.`,
                starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    int age;
    string address;
    
    // Get age first
    
    // Clear buffer before getline
    
    // Get full address with spaces
    
    // Display info
    
    return 0;
}`,
                solution: `#include <iostream>
#include <string>
using namespace std;

int main() {
    int age;
    string address;
    
    cout << "Enter your age: ";
    cin >> age;
    
    cin.ignore();  // Clear the newline left in buffer
    
    cout << "Enter your full address: ";
    getline(cin, address);
    
    cout << "\\n=== Info ===" << endl;
    cout << "Age: " << age << " years old" << endl;
    cout << "Address: " << address << endl;
    
    return 0;
}`,
                hints: ['cin >> leaves newline in buffer', 'Use cin.ignore() before getline', 'getline reads the empty line otherwise']
            },
            {
                id: 'p4_5',
                title: 'Temperature Logger',
                titleAr: 'مسجل الحرارة',
                difficulty: 3,
                description: `Read 3 temperature values, calculate average, and display all with proper alignment using setw().`,
                descriptionAr: `اقرأ 3 قيم درجة حرارة، احسب المتوسط، واعرض الكل بمحاذاة صحيحة باستخدام setw().`,
                starterCode: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double temp1, temp2, temp3;
    
    // Get 3 temperatures
    
    // Calculate average
    
    // Display with alignment using setw()
    
    return 0;
}`,
                solution: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double temp1, temp2, temp3;
    
    cout << "Enter temperature 1: ";
    cin >> temp1;
    cout << "Enter temperature 2: ";
    cin >> temp2;
    cout << "Enter temperature 3: ";
    cin >> temp3;
    
    double average = (temp1 + temp2 + temp3) / 3;
    
    cout << "\\n=== Temperature Log ===" << endl;
    cout << fixed << setprecision(1);
    cout << setw(15) << "Reading 1:" << setw(10) << temp1 << " C" << endl;
    cout << setw(15) << "Reading 2:" << setw(10) << temp2 << " C" << endl;
    cout << setw(15) << "Reading 3:" << setw(10) << temp3 << " C" << endl;
    cout << "------------------------" << endl;
    cout << setw(15) << "Average:" << setw(10) << average << " C" << endl;
    
    return 0;
}`,
                hints: ['setw(n) sets minimum field width', 'Include <iomanip>', 'Use setprecision(1) for 1 decimal place']
            }
        ],

        mcq: [
            {
                id: 'q4_1',
                question: 'Which reads user input in C++?',
                questionAr: 'أيها يقرأ إدخال المستخدم في C++؟',
                options: [
                    { text: 'cout', textAr: 'cout' },
                    { text: 'cin', textAr: 'cin' },
                    { text: 'print', textAr: 'print' },
                    { text: 'input', textAr: 'input' }
                ],
                correct: 1,
                explanation: `cin (console input) reads from keyboard. cout outputs to screen. print and input are not C++ keywords.`,
                explanationAr: `cin (إدخال الشاشة) تقرأ من لوحة المفاتيح. cout تُخرج إلى الشاشة. print و input ليست كلمات C++.`
            },
            {
                id: 'q4_2',
                question: 'What does getline() do?',
                questionAr: 'ماذا تفعل getline()؟',
                options: [
                    { text: 'Reads one word', textAr: 'تقرأ كلمة واحدة' },
                    { text: 'Reads entire line with spaces', textAr: 'تقرأ السطر كاملاً مع المسافات' },
                    { text: 'Reads one character', textAr: 'تقرأ حرفاً واحداً' },
                    { text: 'Reads a number', textAr: 'تقرأ رقماً' }
                ],
                correct: 1,
                explanation: `getline(cin, str) reads the entire line including spaces until Enter is pressed.`,
                explanationAr: `getline(cin, str) تقرأ السطر كاملاً متضمناً المسافات حتى الضغط على Enter.`
            },
            {
                id: 'q4_3',
                question: 'What creates a new line?',
                questionAr: 'ما الذي يُنشئ سطراً جديداً؟',
                options: [
                    { text: 'endl and \\n', textAr: 'endl و \\n' },
                    { text: 'newline only', textAr: 'newline فقط' },
                    { text: 'return', textAr: 'return' },
                    { text: 'break', textAr: 'break' }
                ],
                correct: 0,
                explanation: `Both endl and the escape sequence \\n create new lines. endl also flushes the buffer.`,
                explanationAr: `كلاً من endl والتسلسل الهروبي \\n ينشئان أسطراً جديدة. endl أيضاً تفرغ المخزن المؤقت.`
            },
            {
                id: 'q4_5',
                question: 'Which object is used for standard input in C++?',
                questionAr: 'أي كائن يُستخدم للإدخال القياسي في C++؟',
                options: [
                    { text: 'cin', textAr: 'cin' },
                    { text: 'cout', textAr: 'cout' },
                    { text: 'scanner', textAr: 'scanner' },
                    { text: 'input', textAr: 'input' }
                ],
                correct: 0,
                explanation: `cin is the standard input stream.`,
                explanationAr: `cin هو تدفق الإدخال القياسي.`
            }
        ]
    },

    // Section 5: Conditional Statements
    section5: {
        id: 'section5',
        title: 'Conditional Statements',
        titleAr: 'الجمل الشرطية',
        iconName: 'git-branch',
        duration: '60-90 min',

        theory: [
            {
                heading: 'What are Conditionals?',
                headingAr: 'ما هي الشروط؟',
                content: `Conditionals allow your program to make decisions. Based on whether a condition is true or false, different code executes. This is how programs become "smart" - they can respond differently to different situations.`,
                contentAr: `الشروط تسمح لبرنامجك باتخاذ قرارات. بناءً على كون الشرط صحيحاً أو خاطئاً، كود مختلف يُنفَّذ. هكذا تصبح البرامج "ذكية" - يمكنها الاستجابة بشكل مختلف لمواقف مختلفة.`,
            },
            {
                heading: 'The if Statement',
                headingAr: 'جملة if',
                content: `if (condition) { code } - executes code only if condition is true. The condition is a boolean expression (evaluates to true/false). If false, the code block is skipped entirely.`,
                contentAr: `if (condition) { code } - تنفذ الكود فقط إذا كان الشرط صحيحاً. الشرط هو تعبير منطقي (يُقيَّم إلى صح/خطأ). إذا كان خاطئاً، كتلة الكود تُتخطى كلياً.`,
            },
            {
                heading: 'The if-else Statement',
                headingAr: 'جملة if-else',
                content: `if (condition) { code1 } else { code2 } - if condition is true, code1 runs. Otherwise, code2 runs. Exactly one of the two blocks always executes.`,
                contentAr: `if (condition) { code1 } else { code2 } - إذا كان الشرط صحيحاً، code1 يعمل. وإلا، code2 يعمل. واحدة بالضبط من الكتلتين تُنفَّذ دائماً.`,
            },
            {
                heading: 'The else-if Ladder',
                headingAr: 'سلسلة else-if',
                content: `For multiple conditions: if (cond1) {...} else if (cond2) {...} else if (cond3) {...} else {...}. Conditions are checked top to bottom. First true condition's block runs, rest are skipped.`,
                contentAr: `لشروط متعددة: if (cond1) {...} else if (cond2) {...} else {...}. الشروط تُفحص من الأعلى للأسفل. كتلة أول شرط صحيح تعمل، والباقي يُتخطى.`,
            },
            {
                heading: 'The switch Statement',
                headingAr: 'جملة switch',
                content: `switch is for checking one variable against multiple specific values. Each case: is a possible value. break; exits the switch. default: runs if no case matches. Better than many if-else for menu-style choices.`,
                contentAr: `switch لفحص متغير واحد مقابل قيم محددة متعددة. كل case: هي قيمة محتملة. break; تخرج من switch. default: تعمل إذا لم تتطابق أي حالة. أفضل من if-else كثيرة لخيارات نمط القائمة.`,
            },
            {
                heading: 'Nested Conditions',
                headingAr: 'الشروط المتداخلة',
                content: `You can put if statements inside other if statements. This is called nesting. Useful for complex logic but can become hard to read. Consider using && or || instead when possible.`,
                contentAr: `يمكنك وضع جمل if داخل جمل if أخرى. هذا يسمى التداخل. مفيد للمنطق المعقد لكن يمكن أن يصبح صعب القراءة. فكر في استخدام && أو || بدلاً منه عند الإمكان.`,
            }
        ],

        codeExamples: [
            {
                title: 'Basic if Statement',
                titleAr: 'جملة if الأساسية',
                code: `#include <iostream>
using namespace std;

int main() {
    int age;
    cout << "Enter your age: ";
    cin >> age;
    
    if (age >= 18) {
        cout << "You are an adult!" << endl;
        cout << "You can vote." << endl;
    }
    
    if (age < 18) {
        cout << "You are a minor." << endl;
    }
    
    cout << "Program continues..." << endl;
    
    return 0;
}`,
                explanation: `The code inside {} runs only if the condition is true. Multiple statements can be in one block. Always use {} even for single statements - it prevents bugs.`,
                explanationAr: `الكود داخل {} يعمل فقط إذا كان الشرط صحيحاً. جمل متعددة يمكن أن تكون في كتلة واحدة. استخدم دائماً {} حتى للجمل المفردة - هذا يمنع الأخطاء.`
            },
            {
                title: 'if-else Example',
                titleAr: 'مثال if-else',
                code: `#include <iostream>
using namespace std;

int main() {
    int score;
    cout << "Enter your score: ";
    cin >> score;
    
    if (score >= 60) {
        cout << "Congratulations! You PASSED!" << endl;
    } else {
        cout << "Sorry, you FAILED." << endl;
        cout << "Better luck next time." << endl;
    }
    
    return 0;
}`,
                explanation: `if-else guarantees one block runs. If condition is true, first block runs. If false, else block runs. You never get both or neither.`,
                explanationAr: `if-else تضمن تشغيل كتلة واحدة. إذا كان الشرط صحيحاً، الكتلة الأولى تعمل. إذا كان خاطئاً، كتلة else تعمل. لن تحصل على كليهما أو لا شيء.`
            },
            {
                title: 'else-if Ladder (Grading)',
                titleAr: 'سلسلة else-if (التقييم)',
                code: `#include <iostream>
using namespace std;

int main() {
    int score;
    cout << "Enter score (0-100): ";
    cin >> score;
    
    if (score >= 90) {
        cout << "Grade: A - Excellent!" << endl;
    } else if (score >= 80) {
        cout << "Grade: B - Very Good" << endl;
    } else if (score >= 70) {
        cout << "Grade: C - Good" << endl;
    } else if (score >= 60) {
        cout << "Grade: D - Passing" << endl;
    } else {
        cout << "Grade: F - Failed" << endl;
    }
    
    return 0;
}`,
                explanation: `Conditions are checked in order. Once a true condition is found, its block runs and the rest are skipped. Order matters - put more specific conditions first.`,
                explanationAr: `الشروط تُفحص بالترتيب. بمجرد إيجاد شرط صحيح، كتلته تعمل والباقي يُتخطى. الترتيب مهم - ضع الشروط الأكثر تحديداً أولاً.`
            },
            {
                title: 'switch Statement (Menu)',
                titleAr: 'جملة switch (قائمة)',
                code: `#include <iostream>
using namespace std;

int main() {
    int choice;
    
    cout << "=== MENU ===" << endl;
    cout << "1. Start Game" << endl;
    cout << "2. Load Game" << endl;
    cout << "3. Settings" << endl;
    cout << "4. Exit" << endl;
    cout << "Enter choice: ";
    cin >> choice;
    
    switch (choice) {
        case 1:
            cout << "Starting new game..." << endl;
            break;
        case 2:
            cout << "Loading saved game..." << endl;
            break;
        case 3:
            cout << "Opening settings..." << endl;
            break;
        case 4:
            cout << "Goodbye!" << endl;
            break;
        default:
            cout << "Invalid choice!" << endl;
    }
    
    return 0;
}`,
                explanation: `switch compares one variable to multiple values. case X: runs if variable == X. break exits the switch. default handles invalid values. Don't forget break!`,
                explanationAr: `switch تقارن متغيراً واحداً مع قيم متعددة. case X: تعمل إذا variable == X. break تخرج من switch. default تتعامل مع القيم غير الصالحة. لا تنسَ break!`
            }
        ],

        commonMistakes: [
            {
                title: 'Forgetting break in switch',
                titleAr: 'نسيان break في switch',
                wrong: `switch (x) {
    case 1: cout << "One";
    case 2: cout << "Two";  // Falls through!
}`,
                correct: `switch (x) {
    case 1: cout << "One"; break;
    case 2: cout << "Two"; break;
}`,
                explanation: `Without break, execution "falls through" to next case. If x=1, both "One" and "Two" print! Always use break unless you intentionally want fallthrough.`,
                explanationAr: `بدون break، التنفيذ "يسقط" للحالة التالية. إذا x=1، كلاً من "One" و"Two" تُطبع! استخدم break دائماً إلا إذا أردت السقوط عمداً.`
            },
            {
                title: 'Using = Instead of ==',
                titleAr: 'استخدام = بدلاً من ==',
                wrong: `if (score = 100)  // ASSIGNS 100, always true!`,
                correct: `if (score == 100)  // COMPARES to 100`,
                explanation: `= assigns, == compares. This bug is hard to find because it doesn't cause an error - it just always evaluates to true.`,
                explanationAr: `= تعيّن، == تقارن. هذا الخطأ صعب إيجاده لأنه لا يسبب خطأ - فقط يُقيَّم دائماً كـ true.`
            },
            {
                title: 'Missing Braces',
                titleAr: 'نسيان الأقواس',
                wrong: `if (score >= 60)
    cout << "Passed!";
    cout << "Congrats!";  // ALWAYS runs!`,
                correct: `if (score >= 60) {
    cout << "Passed!";
    cout << "Congrats!";  // Only if passed
}`,
                explanation: `Without braces, only the first statement is conditional. The second runs always! Always use braces, even for one statement.`,
                explanationAr: `بدون أقواس، فقط الجملة الأولى شرطية. الثانية تعمل دائماً! استخدم الأقواس دائماً، حتى لجملة واحدة.`
            }
        ],

        advancedTopics: {
            intro: `Mastering conditionals is key to creating dynamic, responsive programs.`,
            introAr: `إتقان الشروط مفتاح لإنشاء برامج ديناميكية ومتجاوبة.`,
            topics: [
                {
                    title: 'Ternary Operator',
                    titleAr: 'العامل الثلاثي',
                    explanation: `condition ? value_if_true : value_if_false is a one-line if-else. Good for simple assignments: string result = (score >= 60) ? "Pass" : "Fail";`,
                    explanationAr: `condition ? value_if_true : value_if_false هو if-else في سطر واحد. جيد للتعيينات البسيطة.`,
                    example: `int age = 20;
string status = (age >= 18) ? "Adult" : "Minor";
cout << status;  // Adult`
                },
                {
                    title: 'Complex Conditions',
                    titleAr: 'الشروط المعقدة',
                    explanation: `Combine conditions with && (AND), || (OR), ! (NOT). Group with parentheses for clarity: if ((age >= 18 && hasID) || isVIP)`,
                    explanationAr: `اجمع الشروط مع && (و)، || (أو)، ! (ليس). جمّع بالأقواس للوضوح.`,
                    example: `bool canEnter = (age >= 21 && hasID) || isEmployee;
if (canEnter) {
    cout << "Welcome!" << endl;
}`
                }
            ]
        },

        practice: [
            {
                id: 'p5_1',
                title: 'Age Category',
                titleAr: 'فئة العمر',
                difficulty: 1,
                description: `Ask for age and display: 0-12="Child", 13-19="Teenager", 20-59="Adult", 60+="Senior"`,
                descriptionAr: `اسأل عن العمر واعرض: 0-12="طفل"، 13-19="مراهق"، 20-59="بالغ"، 60+="كبير السن"`,
                starterCode: `#include <iostream>
using namespace std;

int main() {
    int age;
    
    // Get age
    
    // Check category with if-else
    
    return 0;
}`,
                solution: `#include <iostream>
using namespace std;

int main() {
    int age;
    
    cout << "Enter your age: ";
    cin >> age;
    
    if (age <= 12) {
        cout << "You are a Child" << endl;
    } else if (age <= 19) {
        cout << "You are a Teenager" << endl;
    } else if (age <= 59) {
        cout << "You are an Adult" << endl;
    } else {
        cout << "You are a Senior" << endl;
    }
    
    return 0;
}`,
                hints: ['Use else-if ladder', 'Check ranges in order', 'Use <= for upper bounds']
            },
            {
                id: 'p5_2',
                title: 'Simple Login',
                titleAr: 'تسجيل دخول بسيط',
                difficulty: 2,
                description: `Check if username is "admin" and password is "1234". Show success or error message.`,
                descriptionAr: `تحقق إذا كان اسم المستخدم "admin" وكلمة المرور "1234". أظهر رسالة نجاح أو خطأ.`,
                starterCode: `#include <iostream>
using namespace std;

int main() {
    string username, password;
    
    // Get input
    
    // Check credentials
    
    return 0;
}`,
                solution: `#include <iostream>
using namespace std;

int main() {
    string username, password;
    
    cout << "Username: ";
    cin >> username;
    
    cout << "Password: ";
    cin >> password;
    
    if (username == "admin" && password == "1234") {
        cout << "Login successful! Welcome, admin." << endl;
    } else {
        cout << "Invalid username or password." << endl;
    }
    
    return 0;
}`,
                hints: ['Use && to check both conditions', 'Compare strings with ==', 'One if-else is enough']
            },
            {
                id: 'p5_3',
                title: 'Calculator Menu',
                titleAr: 'قائمة الآلة الحاسبة',
                difficulty: 2,
                description: `Use a switch to build a calculator: 1=Add, 2=Subtract, 3=Multiply, 4=Divide. Handle invalid choices.`,
                descriptionAr: `استخدم switch لبناء آلة حاسبة: 1=جمع، 2=طرح، 3=ضرب، 4=قسمة. عالج الخيارات غير الصالحة.`,
                starterCode: `#include <iostream>
using namespace std;

int main() {
    int choice;
    double a, b;
    
    // Show menu and get choice
    
    // Get two numbers
    
    // Use switch to perform operation
    
    return 0;
}`,
                solution: `#include <iostream>
using namespace std;

int main() {
    int choice;
    double a, b;
    
    cout << "=== Calculator ===" << endl;
    cout << "1. Add" << endl;
    cout << "2. Subtract" << endl;
    cout << "3. Multiply" << endl;
    cout << "4. Divide" << endl;
    cout << "Choice: ";
    cin >> choice;
    
    cout << "Enter two numbers: ";
    cin >> a >> b;
    
    switch (choice) {
        case 1:
            cout << a << " + " << b << " = " << a + b << endl;
            break;
        case 2:
            cout << a << " - " << b << " = " << a - b << endl;
            break;
        case 3:
            cout << a << " * " << b << " = " << a * b << endl;
            break;
        case 4:
            if (b != 0)
                cout << a << " / " << b << " = " << a / b << endl;
            else
                cout << "Error: Division by zero!" << endl;
            break;
        default:
            cout << "Invalid choice!" << endl;
    }
    
    return 0;
}`,
                hints: ['Use switch(choice)', 'Check for division by zero', 'Include break after each case']
            },
            {
                id: 'p5_4',
                title: 'Grade with Remarks',
                titleAr: 'الدرجة مع ملاحظات',
                difficulty: 2,
                description: `Convert score to grade (A/B/C/D/F) and add a remark: A="Excellent!", B="Very Good", C="Good", D="Pass", F="Fail"`,
                descriptionAr: `حول الدرجة إلى تقدير (A/B/C/D/F) وأضف ملاحظة: A="ممتاز!"، B="جيد جداً"، C="جيد"، D="ناجح"، F="راسب"`,
                starterCode: `#include <iostream>
using namespace std;

int main() {
    int score;
    
    // Get score
    
    // Determine grade and remark
    
    return 0;
}`,
                solution: `#include <iostream>
using namespace std;

int main() {
    int score;
    char grade;
    string remark;
    
    cout << "Enter score (0-100): ";
    cin >> score;
    
    if (score >= 90) {
        grade = 'A';
        remark = "Excellent!";
    } else if (score >= 80) {
        grade = 'B';
        remark = "Very Good";
    } else if (score >= 70) {
        grade = 'C';
        remark = "Good";
    } else if (score >= 60) {
        grade = 'D';
        remark = "Pass";
    } else {
        grade = 'F';
        remark = "Fail - Study harder!";
    }
    
    cout << "Grade: " << grade << endl;
    cout << "Remark: " << remark << endl;
    
    return 0;
}`,
                hints: ['Use else-if ladder', 'Declare both grade and remark', 'Check from highest to lowest']
            },
            {
                id: 'p5_5',
                title: 'Leap Year Checker',
                titleAr: 'فاحص السنة الكبيسة',
                difficulty: 3,
                description: `Check if a year is a leap year. Rules: divisible by 4, BUT not by 100, UNLESS also divisible by 400.`,
                descriptionAr: `تحقق إذا كانت السنة كبيسة. القواعد: قابلة للقسمة على 4، لكن ليس على 100، إلا إذا كانت قابلة للقسمة على 400 أيضاً.`,
                starterCode: `#include <iostream>
using namespace std;

int main() {
    int year;
    
    // Get year
    
    // Check leap year with complex conditions
    
    return 0;
}`,
                solution: `#include <iostream>
using namespace std;

int main() {
    int year;
    
    cout << "Enter a year: ";
    cin >> year;
    
    bool isLeap = false;
    
    if (year % 400 == 0) {
        isLeap = true;  // Divisible by 400 = leap year
    } else if (year % 100 == 0) {
        isLeap = false;  // Divisible by 100 but not 400 = not leap
    } else if (year % 4 == 0) {
        isLeap = true;  // Divisible by 4 but not 100 = leap year
    }
    
    if (isLeap) {
        cout << year << " is a LEAP year" << endl;
    } else {
        cout << year << " is NOT a leap year" << endl;
    }
    
    return 0;
}`,
                hints: ['Check 400 first, then 100, then 4', '2000 is leap (400), 1900 is not (100), 2024 is leap (4)', 'Use boolean variable for clarity']
            }
        ],

        mcq: [
            {
                id: 'q5_1',
                question: 'What happens if the if condition is false and there is no else?',
                questionAr: 'ماذا يحدث إذا كان شرط if خاطئاً ولا يوجد else؟',
                options: [
                    { text: 'Error occurs', textAr: 'يحدث خطأ' },
                    { text: 'Program crashes', textAr: 'البرنامج يتوقف' },
                    { text: 'The if block is skipped', textAr: 'كتلة if تُتخطى' },
                    { text: 'The if block runs anyway', textAr: 'كتلة if تعمل على أي حال' }
                ],
                correct: 2,
                explanation: `If condition is false and no else exists, the if block is simply skipped and program continues with the next statement.`,
                explanationAr: `إذا كان الشرط خاطئاً ولا يوجد else، كتلة if تُتخطى ببساطة والبرنامج يستمر بالجملة التالية.`
            },
            {
                id: 'q5_2',
                question: 'What does break do in a switch?',
                questionAr: 'ماذا تفعل break في switch؟',
                options: [
                    { text: 'Stops the program', textAr: 'توقف البرنامج' },
                    { text: 'Exits the switch block', textAr: 'تخرج من كتلة switch' },
                    { text: 'Goes to default', textAr: 'تذهب إلى default' },
                    { text: 'Returns a value', textAr: 'ترجع قيمة' }
                ],
                correct: 1,
                explanation: `break exits the switch statement. Without it, execution continues to the next case (called "fallthrough").`,
                explanationAr: `break تخرج من جملة switch. بدونها، التنفيذ يستمر للحالة التالية (يُسمى "السقوط").`
            },
            {
                id: 'q5_3',
                question: 'Which is the correct syntax?',
                questionAr: 'أيها بناء جملي صحيح؟',
                options: [
                    { text: 'if x == 5 { }', textAr: 'if x == 5 { }' },
                    { text: 'if (x == 5) { }', textAr: 'if (x == 5) { }' },
                    { text: 'if [x == 5] { }', textAr: 'if [x == 5] { }' },
                    { text: 'if x = 5 then { }', textAr: 'if x = 5 then { }' }
                ],
                correct: 1,
                explanation: `C++ if syntax requires parentheses around the condition: if (condition) { code }`,
                explanationAr: `بناء جملة if في C++ يتطلب أقواس حول الشرط: if (condition) { code }`
            },
            {
                id: 'q5_4',
                question: 'When does the default case run in a switch?',
                questionAr: 'متى تعمل حالة default في switch؟',
                options: [
                    { text: 'Always first', textAr: 'دائماً أولاً' },
                    { text: 'Always last', textAr: 'دائماً أخيراً' },
                    { text: 'When no case matches', textAr: 'عندما لا تتطابق أي حالة' },
                    { text: 'Never runs', textAr: 'لا تعمل أبداً' }
                ],
                correct: 2,
                explanation: `default runs when the variable doesn't match any case value. It's like else for switch.`,
                explanationAr: `default تعمل عندما لا يتطابق المتغير مع أي قيمة حالة. هي مثل else لـ switch.`
            },
            {
                id: 'q5_5',
                question: 'Which statement is used to execute code only if a condition is true?',
                questionAr: 'أي جملة تُستخدم لتنفيذ الكود فقط إذا كان الشرط صحيحاً؟',
                options: [
                    { text: 'when', textAr: 'when' },
                    { text: 'loop', textAr: 'loop' },
                    { text: 'if', textAr: 'if' },
                    { text: 'check', textAr: 'check' }
                ],
                correct: 2,
                explanation: `The if statement evaluates a condition.`,
                explanationAr: `جملة if تقيم شرطاً.`
            }
        ]
    },

    // Section 6: Loops
    section6: {
        id: 'section6',
        title: 'Loops',
        titleAr: 'الحلقات التكرارية',
        iconName: 'repeat',
        duration: '60-90 min',

        theory: [
            {
                heading: 'What are Loops?',
                headingAr: 'ما هي الحلقات؟',
                content: `Loops are fundamental programming constructs that allow you to repeat a block of code multiple times. Imagine you need to print numbers 1 to 1000 - without loops, you'd write 1000 lines of code! With a loop, you write it once and let the computer repeat it. Loops are essential for processing data, creating patterns, and automating repetitive tasks. Every real-world program uses loops extensively.`,
                contentAr: `الحلقات هي بُنى برمجية أساسية تسمح لك بتكرار كتلة من الكود عدة مرات. تخيل أنك تحتاج لطباعة الأرقام من 1 إلى 1000 - بدون حلقات، ستكتب 1000 سطر! مع حلقة، تكتبها مرة واحدة وتدع الحاسوب يكررها. الحلقات أساسية لمعالجة البيانات، إنشاء الأنماط، وأتمتة المهام المتكررة.`,
            },
            {
                heading: 'The for Loop - Structure Explained',
                headingAr: 'حلقة for - شرح الهيكل',
                content: `The for loop has three parts separated by semicolons: for (initialization; condition; update) { body }\n\n• Initialization: Runs ONCE at the very beginning. Usually creates a counter variable (int i = 0)\n• Condition: Checked BEFORE each iteration. If true, body runs. If false, loop ends\n• Update: Runs AFTER each iteration. Usually increments the counter (i++)\n• Body: The code that repeats\n\nExecution order: init → check condition → run body → update → check condition → run body → update → ... until condition is false`,
                contentAr: `حلقة for لها ثلاثة أجزاء مفصولة بفواصل منقوطة: for (تهيئة; شرط; تحديث) { جسم }\n\n• التهيئة: تعمل مرة واحدة في البداية. عادة تنشئ متغير عداد\n• الشرط: يُفحص قبل كل تكرار. إذا صحيح، الجسم يعمل. إذا خاطئ، الحلقة تنتهي\n• التحديث: يعمل بعد كل تكرار. عادة يزيد العداد\n• الجسم: الكود الذي يتكرر`,
            },
            {
                heading: 'The while Loop - Condition First',
                headingAr: 'حلقة while - الشرط أولاً',
                content: `while (condition) { body }\n\nThe while loop is simpler: it just checks a condition and keeps running while it's true. Key difference from for: you manage the counter variable yourself.\n\n• Condition is checked FIRST\n• If condition is false from the start, body never runs (0 iterations possible)\n• You must manually update variables to eventually make condition false\n• Best for: unknown number of iterations, waiting for user input, processing until a condition is met`,
                contentAr: `while (condition) { body }\n\nحلقة while أبسط: تفحص شرطاً وتستمر بالعمل طالما هو صحيح. الفرق الرئيسي عن for: أنت تدير متغير العداد بنفسك.\n\n• الشرط يُفحص أولاً\n• إذا كان الشرط خاطئاً من البداية، الجسم لا يعمل أبداً\n• يجب عليك تحديث المتغيرات يدوياً لجعل الشرط خاطئاً في النهاية`,
            },
            {
                heading: 'The do-while Loop - Run At Least Once',
                headingAr: 'حلقة do-while - تعمل مرة على الأقل',
                content: `do { body } while (condition);\n\nUnique feature: The body runs AT LEAST ONCE before the condition is checked. This is perfect for menus where you want to show options first, then ask if user wants to continue. Note the semicolon after while(condition);`,
                contentAr: `do { body } while (condition);\n\nميزة فريدة: الجسم يعمل مرة واحدة على الأقل قبل فحص الشرط. هذا مثالي للقوائم حيث تريد عرض الخيارات أولاً، ثم تسأل إذا كان المستخدم يريد الاستمرار. لاحظ الفاصلة المنقوطة بعد while(condition);`,
            },
            {
                heading: 'break and continue - Loop Control',
                headingAr: 'break و continue - التحكم في الحلقة',
                content: `These keywords give you extra control:\n\n• break: Immediately EXIT the loop completely. The loop stops and program continues after the loop.\n• continue: SKIP the rest of current iteration and jump to next iteration (back to condition check in while, or to update in for).\n\nUse cases:\n- break: Found what you're looking for, exit early\n- continue: Skip invalid data, don't process this item but continue with others`,
                contentAr: `هذه الكلمات المفتاحية تعطيك تحكماً إضافياً:\n\n• break: تخرج من الحلقة فوراً. الحلقة تتوقف والبرنامج يستمر بعد الحلقة.\n• continue: تتخطى بقية التكرار الحالي وتقفز للتكرار التالي.\n\nحالات الاستخدام:\n- break: وجدت ما تبحث عنه، اخرج مبكراً\n- continue: تخطَّ البيانات غير الصالحة`,
            },
            {
                heading: 'Nested Loops - Loops Inside Loops',
                headingAr: 'الحلقات المتداخلة - حلقات داخل حلقات',
                content: `You can put loops inside loops. The inner loop runs completely for EACH iteration of the outer loop. If outer runs 5 times and inner runs 3 times, total iterations = 5 × 3 = 15.\n\nCommon uses:\n• 2D patterns (rectangles, triangles)\n• Multiplication tables\n• Processing 2D arrays (grids, matrices)\n• Comparing every element with every other element`,
                contentAr: `يمكنك وضع حلقات داخل حلقات. الحلقة الداخلية تعمل بالكامل لكل تكرار للحلقة الخارجية. إذا الخارجية تعمل 5 مرات والداخلية 3 مرات، إجمالي التكرارات = 5 × 3 = 15.\n\nاستخدامات شائعة:\n• أنماط ثنائية الأبعاد (مستطيلات، مثلثات)\n• جداول الضرب\n• معالجة المصفوفات ثنائية الأبعاد`,
            }
        ],

        codeExamples: [
            {
                title: 'for Loop - Complete Example',
                titleAr: 'حلقة for - مثال كامل',
                code: `#include <iostream>
using namespace std;

int main() {
    // Basic counting 1 to 10
    cout << "Counting 1 to 10: ";
    for (int i = 1; i <= 10; i++) {
        cout << i << " ";
    }
    cout << endl;
    
    // Counting backwards
    cout << "Countdown: ";
    for (int i = 10; i >= 1; i--) {
        cout << i << " ";
    }
    cout << "BLAST OFF!" << endl;
    
    // Counting by 2s (even numbers)
    cout << "Even numbers 2-20: ";
    for (int i = 2; i <= 20; i += 2) {
        cout << i << " ";
    }
    cout << endl;
    
    // Sum of 1 to 100
    int sum = 0;
    for (int i = 1; i <= 100; i++) {
        sum += i;
    }
    cout << "Sum of 1-100 = " << sum << endl;  // 5050
    
    return 0;
}`,
                explanation: `This example shows various for loop patterns:\n• Basic counting forward (i++)\n• Counting backward (i--)\n• Counting by steps (i += 2 for even numbers)\n• Accumulating a sum\n\nThe counter variable 'i' only exists inside the loop (local scope).`,
                explanationAr: `هذا المثال يُظهر أنماط مختلفة لحلقة for:\n• العد للأمام (i++)\n• العد للخلف (i--)\n• العد بخطوات (i += 2 للأرقام الزوجية)\n• تجميع مجموع\n\nمتغير العداد 'i' موجود فقط داخل الحلقة.`
            },
            {
                title: 'while Loop - User Input Validation',
                titleAr: 'حلقة while - التحقق من إدخال المستخدم',
                code: `#include <iostream>
using namespace std;

int main() {
    int number;
    
    cout << "Enter a positive number: ";
    cin >> number;
    
    // Keep asking until valid input
    while (number <= 0) {
        cout << "Invalid! Must be positive. Try again: ";
        cin >> number;
    }
    
    cout << "You entered: " << number << endl;
    
    // Guessing game
    int secret = 7;
    int guess;
    int attempts = 0;
    
    cout << "\\nGuess the number (1-10): ";
    cin >> guess;
    
    while (guess != secret) {
        attempts++;
        if (guess < secret) {
            cout << "Too low! Try again: ";
        } else {
            cout << "Too high! Try again: ";
        }
        cin >> guess;
    }
    
    cout << "Correct! You got it in " << attempts + 1 << " attempts!" << endl;
    
    return 0;
}`,
                explanation: `while loops are perfect for input validation and games where you don't know how many iterations are needed. The loop continues until the user provides valid input or guesses correctly.`,
                explanationAr: `حلقات while مثالية للتحقق من الإدخال والألعاب حيث لا تعرف كم عدد التكرارات المطلوبة. الحلقة تستمر حتى يقدم المستخدم إدخالاً صالحاً أو يخمن بشكل صحيح.`
            },
            {
                title: 'do-while Loop - Menu System',
                titleAr: 'حلقة do-while - نظام قائمة',
                code: `#include <iostream>
using namespace std;

int main() {
    int choice;
    
    do {
        cout << "\\n=== MENU ===" << endl;
        cout << "1. Say Hello" << endl;
        cout << "2. Show Date" << endl;
        cout << "3. Calculate" << endl;
        cout << "0. Exit" << endl;
        cout << "Choice: ";
        cin >> choice;
        
        switch (choice) {
            case 1: cout << "Hello, User!" << endl; break;
            case 2: cout << "Today is a great day!" << endl; break;
            case 3: cout << "5 + 3 = 8" << endl; break;
            case 0: cout << "Goodbye!" << endl; break;
            default: cout << "Invalid choice!" << endl;
        }
    } while (choice != 0);
    
    return 0;
}`,
                explanation: `The do-while loop is perfect for menus because you always want to show the menu at least once before checking if user wants to exit. The loop runs while choice != 0, meaning it stops when user enters 0.`,
                explanationAr: `حلقة do-while مثالية للقوائم لأنك تريد دائماً عرض القائمة مرة واحدة على الأقل قبل التحقق إذا كان المستخدم يريد الخروج. الحلقة تعمل طالما choice != 0، أي تتوقف عندما يُدخل المستخدم 0.`
            },
            {
                title: 'Nested Loops - Patterns',
                titleAr: 'الحلقات المتداخلة - الأنماط',
                code: `#include <iostream>
using namespace std;

int main() {
    // Rectangle of stars
    cout << "Rectangle 4x6:" << endl;
    for (int row = 1; row <= 4; row++) {
        for (int col = 1; col <= 6; col++) {
            cout << "* ";
        }
        cout << endl;
    }
    
    cout << endl;
    
    // Right triangle
    cout << "Right Triangle:" << endl;
    for (int i = 1; i <= 5; i++) {
        for (int j = 1; j <= i; j++) {
            cout << "* ";
        }
        cout << endl;
    }
    
    cout << endl;
    
    // Multiplication table
    cout << "Multiplication Table 5x5:" << endl;
    for (int i = 1; i <= 5; i++) {
        for (int j = 1; j <= 5; j++) {
            cout << i * j << "\\t";
        }
        cout << endl;
    }
    
    return 0;
}`,
                explanation: `Nested loops are loops inside loops. The outer loop controls rows, inner loop controls columns. For the triangle, the inner loop runs 'i' times (1, then 2, then 3, etc.), creating the growing pattern.`,
                explanationAr: `الحلقات المتداخلة هي حلقات داخل حلقات. الحلقة الخارجية تتحكم في الصفوف، الداخلية تتحكم في الأعمدة. للمثلث، الحلقة الداخلية تعمل 'i' مرات، مما ينشئ النمط المتنامي.`
            }
        ],

        commonMistakes: [
            {
                title: 'Infinite Loop - Forgetting to Update',
                titleAr: 'الحلقة اللانهائية - نسيان التحديث',
                wrong: `int i = 0;
while (i < 10) {
    cout << i;
    // Forgot i++! Loop runs forever!
}`,
                correct: `int i = 0;
while (i < 10) {
    cout << i;
    i++;  // Don't forget to update!
}`,
                explanation: `If you never update the loop variable, the condition never becomes false and the loop runs forever. This freezes your program. Always ensure your loop will eventually end.`,
                explanationAr: `إذا لم تُحدّث متغير الحلقة أبداً، الشرط لن يصبح خاطئاً أبداً والحلقة تعمل للأبد. هذا يُجمّد برنامجك. تأكد دائماً أن حلقتك ستنتهي في النهاية.`
            },
            {
                title: 'Off-by-One Error',
                titleAr: 'خطأ بمقدار واحد',
                wrong: `// Print 1 to 10
for (int i = 1; i < 10; i++) {
    cout << i << " ";  // Only prints 1-9!
}`,
                correct: `// Print 1 to 10
for (int i = 1; i <= 10; i++) {
    cout << i << " ";  // Correctly prints 1-10
}`,
                explanation: `Using < when you mean <= (or vice versa) causes your loop to run one time too few or too many. This is one of the most common bugs. Always double-check your boundaries.`,
                explanationAr: `استخدام < عندما تقصد <= (أو العكس) يجعل حلقتك تعمل مرة أقل أو أكثر. هذا من أكثر الأخطاء شيوعاً. تحقق دائماً من حدودك.`
            },
            {
                title: 'Semicolon After for/while',
                titleAr: 'فاصلة منقوطة بعد for/while',
                wrong: `for (int i = 0; i < 5; i++); {  // Empty loop!
    cout << i;  // Runs once, i is undefined
}`,
                correct: `for (int i = 0; i < 5; i++) {
    cout << i;  // Correct - runs 5 times
}`,
                explanation: `A semicolon after for() or while() creates an empty loop body. The actual code block runs only once, after the loop finishes. This is a very subtle bug.`,
                explanationAr: `فاصلة منقوطة بعد for() أو while() تنشئ جسم حلقة فارغ. كتلة الكود الفعلية تعمل مرة واحدة فقط، بعد انتهاء الحلقة. هذا خطأ خفي جداً.`
            },
            {
                title: 'Modifying Loop Variable Inside Loop',
                titleAr: 'تعديل متغير الحلقة داخل الحلقة',
                wrong: `for (int i = 0; i < 10; i++) {
    cout << i;
    i++;  // Double increment! Skips numbers
}`,
                correct: `for (int i = 0; i < 10; i++) {
    cout << i;  // Let for loop handle increment
}`,
                explanation: `Modifying the loop counter inside the body AND in the update part causes unexpected behavior. Let the for loop handle the counter, or use while if you need custom logic.`,
                explanationAr: `تعديل عداد الحلقة داخل الجسم وفي جزء التحديث يسبب سلوكاً غير متوقع. دع حلقة for تتعامل مع العداد، أو استخدم while إذا احتجت منطقاً مخصصاً.`
            }
        ],

        advancedTopics: {
            intro: `Let's explore some advanced loop concepts that will help you write more efficient and elegant code.`,
            introAr: `دعنا نستكشف بعض مفاهيم الحلقات المتقدمة التي ستساعدك في كتابة كود أكثر كفاءة وأناقة.`,
            topics: [
                {
                    title: 'Breaking Out of Nested Loops',
                    titleAr: 'الخروج من الحلقات المتداخلة',
                    explanation: `break only exits the innermost loop. To exit multiple levels, use a flag variable or put the loops in a function and use return.`,
                    explanationAr: `break تخرج فقط من الحلقة الأعمق. للخروج من مستويات متعددة، استخدم متغير علم أو ضع الحلقات في دالة واستخدم return.`,
                    example: `bool found = false;
for (int i = 0; i < 10 && !found; i++) {
    for (int j = 0; j < 10 && !found; j++) {
        if (arr[i][j] == target) {
            found = true;
        }
    }
}`
                },
                {
                    title: 'Calculating Loop Iterations',
                    titleAr: 'حساب تكرارات الحلقة',
                    explanation: `For a loop from a to b: iterations = b - a + 1 (if using <=) or b - a (if using <). For nested loops: multiply the counts.`,
                    explanationAr: `لحلقة من a إلى b: التكرارات = b - a + 1 (إذا استخدمت <=) أو b - a (إذا استخدمت <). للحلقات المتداخلة: اضرب العدادات.`,
                    example: `// for (i = 5; i <= 15; i++) runs 15-5+1 = 11 times
// for (i = 0; i < 10; i++) runs 10-0 = 10 times
// Nested: 5 outer × 3 inner = 15 total iterations`
                },
                {
                    title: 'Choosing the Right Loop',
                    titleAr: 'اختيار الحلقة الصحيحة',
                    explanation: `• Use for when you know exactly how many times to iterate\n• Use while when you don't know the count, just a condition\n• Use do-while when you need to run at least once`,
                    explanationAr: `• استخدم for عندما تعرف بالضبط كم مرة ستكرر\n• استخدم while عندما لا تعرف العدد، فقط شرط\n• استخدم do-while عندما تحتاج التشغيل مرة واحدة على الأقل`,
                    example: `// for - known count
for (int i = 0; i < 10; i++) {...}

// while - unknown count  
while (userInput != "quit") {...}

// do-while - at least once
do { showMenu(); } while (choice != 0);`
                }
            ]
        },

        practice: [
            {
                id: 'p6_1',
                title: 'Sum of N Numbers',
                titleAr: 'مجموع N أرقام',
                difficulty: 1,
                description: `Ask user for a number N. Calculate and print the sum of all numbers from 1 to N.`,
                descriptionAr: `اسأل المستخدم عن رقم N. احسب واطبع مجموع كل الأرقام من 1 إلى N.`,
                starterCode: `#include <iostream>
using namespace std;

int main() {
    int n;
    // Get n from user
    // Calculate sum using a loop
    // Print the sum
    return 0;
}`,
                solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter N: ";
    cin >> n;
    
    int sum = 0;
    for (int i = 1; i <= n; i++) {
        sum += i;
    }
    
    cout << "Sum from 1 to " << n << " = " << sum << endl;
    return 0;
}`,
                hints: ['Initialize sum to 0 before the loop', 'Use sum += i inside the loop', 'Loop from 1 to n inclusive']
            },
            {
                id: 'p6_2',
                title: 'Factorial Calculator',
                titleAr: 'حساب المضروب',
                difficulty: 2,
                description: `Calculate the factorial of a number. Factorial of N = N × (N-1) × (N-2) × ... × 1. Example: 5! = 5×4×3×2×1 = 120`,
                descriptionAr: `احسب مضروب رقم. مضروب N = N × (N-1) × (N-2) × ... × 1. مثال: 5! = 5×4×3×2×1 = 120`,
                starterCode: `#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter a number: ";
    cin >> n;
    // Calculate factorial
    return 0;
}`,
                solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter a number: ";
    cin >> n;
    
    long long factorial = 1;
    for (int i = 1; i <= n; i++) {
        factorial *= i;
    }
    
    cout << n << "! = " << factorial << endl;
    return 0;
}`,
                hints: ['Start factorial at 1, not 0', 'Multiply by each number from 1 to n', 'Use long long for large results']
            },
            {
                id: 'p6_3',
                title: 'Prime Number Checker',
                titleAr: 'فاحص الأعداد الأولية',
                difficulty: 2,
                description: `Check if a number is prime (divisible only by 1 and itself). Use a loop to check divisibility.`,
                descriptionAr: `تحقق إذا كان الرقم أولياً (قابل للقسمة فقط على 1 وعلى نفسه). استخدم حلقة لفحص القابلية للقسمة.`,
                starterCode: `#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter a number: ";
    cin >> n;
    
    // Check if prime using a loop
    
    return 0;
}`,
                solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter a number: ";
    cin >> n;
    
    bool isPrime = true;
    
    if (n <= 1) {
        isPrime = false;
    } else {
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    
    if (isPrime) {
        cout << n << " is PRIME" << endl;
    } else {
        cout << n << " is NOT prime" << endl;
    }
    
    return 0;
}`,
                hints: ['Numbers <= 1 are not prime', 'Check divisors from 2 to sqrt(n)', 'Use break when you find a divisor']
            },
            {
                id: 'p6_4',
                title: 'Number Triangle Pattern',
                titleAr: 'نمط مثلث الأرقام',
                difficulty: 3,
                description: `Print a triangle pattern: row 1 has "1", row 2 has "1 2", row 3 has "1 2 3", etc. up to n rows.`,
                descriptionAr: `اطبع نمط مثلث: الصف 1 يحتوي "1"، الصف 2 يحتوي "1 2"، الصف 3 يحتوي "1 2 3"، إلخ حتى n صف.`,
                starterCode: `#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter number of rows: ";
    cin >> n;
    
    // Use nested loops to print pattern
    
    return 0;
}`,
                solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter number of rows: ";
    cin >> n;
    
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            cout << j << " ";
        }
        cout << endl;
    }
    
    return 0;
}`,
                hints: ['Outer loop for rows (1 to n)', 'Inner loop prints 1 to current row number', 'Print endl after each row']
            },
            {
                id: 'p6_5',
                title: 'Password with Attempts',
                titleAr: 'كلمة المرور مع المحاولات',
                difficulty: 3,
                description: `Give user 3 attempts to enter correct password "secret". Lock out after 3 wrong attempts.`,
                descriptionAr: `أعطِ المستخدم 3 محاولات لإدخال كلمة المرور الصحيحة "secret". اقفل بعد 3 محاولات خاطئة.`,
                starterCode: `#include <iostream>
using namespace std;

int main() {
    string password;
    int attempts = 3;
    
    // Loop until correct or out of attempts
    
    return 0;
}`,
                solution: `#include <iostream>
using namespace std;

int main() {
    string password;
    int attempts = 3;
    
    while (attempts > 0) {
        cout << "Enter password (" << attempts << " attempts left): ";
        cin >> password;
        
        if (password == "secret") {
            cout << "Access granted! Welcome!" << endl;
            break;
        } else {
            attempts--;
            if (attempts > 0) {
                cout << "Wrong password. Try again." << endl;
            } else {
                cout << "LOCKED OUT! No more attempts." << endl;
            }
        }
    }
    
    return 0;
}`,
                hints: ['Use while(attempts > 0)', 'Break when password is correct', 'Decrement attempts on wrong password']
            }
        ],

        mcq: [
            {
                id: 'q6_1',
                question: 'How many times does this loop run? for(int i = 0; i < 5; i++)',
                questionAr: 'كم مرة تعمل هذه الحلقة؟ for(int i = 0; i < 5; i++)',
                options: [
                    { text: '4 times', textAr: '4 مرات' },
                    { text: '5 times', textAr: '5 مرات' },
                    { text: '6 times', textAr: '6 مرات' },
                    { text: 'Infinite', textAr: 'لانهائي' }
                ],
                correct: 1,
                explanation: `i goes 0, 1, 2, 3, 4 (stops when i becomes 5 because 5 < 5 is false). That's 5 iterations.`,
                explanationAr: `i تذهب 0، 1، 2، 3، 4 (تتوقف عندما i تصبح 5 لأن 5 < 5 خاطئ). هذه 5 تكرارات.`
            },
            {
                id: 'q6_2',
                question: 'What is the difference between break and continue?',
                questionAr: 'ما الفرق بين break و continue؟',
                options: [
                    { text: 'break exits loop, continue skips to next iteration', textAr: 'break تخرج من الحلقة، continue تتخطى للتكرار التالي' },
                    { text: 'continue exits loop, break skips iteration', textAr: 'continue تخرج من الحلقة، break تتخطى التكرار' },
                    { text: 'Both exit the loop', textAr: 'كلاهما تخرج من الحلقة' },
                    { text: 'Both skip to next iteration', textAr: 'كلاهما تتخطى للتكرار التالي' }
                ],
                correct: 0,
                explanation: `break completely exits the loop. continue skips the rest of the current iteration and goes to the next one.`,
                explanationAr: `break تخرج من الحلقة كلياً. continue تتخطى بقية التكرار الحالي وتذهب للتالي.`
            },
            {
                id: 'q6_3',
                question: 'When does a while loop body first execute?',
                questionAr: 'متى يُنفَّذ جسم حلقة while أول مرة؟',
                options: [
                    { text: 'Always at least once', textAr: 'دائماً مرة واحدة على الأقل' },
                    { text: 'Only if condition is true', textAr: 'فقط إذا كان الشرط صحيحاً' },
                    { text: 'Only if condition is false', textAr: 'فقط إذا كان الشرط خاطئاً' },
                    { text: 'After the update runs', textAr: 'بعد تشغيل التحديث' }
                ],
                correct: 1,
                explanation: `while checks condition FIRST. If false initially, body never runs. Use do-while if you need at least one execution.`,
                explanationAr: `while تفحص الشرط أولاً. إذا كان خاطئاً من البداية، الجسم لا يعمل أبداً. استخدم do-while إذا احتجت تنفيذ واحد على الأقل.`
            },
            {
                id: 'q6_4',
                question: 'What does i-- do?',
                questionAr: 'ماذا تفعل i--؟',
                options: [
                    { text: 'Adds 1 to i', textAr: 'تضيف 1 لـ i' },
                    { text: 'Subtracts 1 from i', textAr: 'تطرح 1 من i' },
                    { text: 'Multiplies i by -1', textAr: 'تضرب i في -1' },
                    { text: 'Makes i negative', textAr: 'تجعل i سالباً' }
                ],
                correct: 1,
                explanation: `i-- is the decrement operator. It subtracts 1 from i. It's the opposite of i++ which adds 1.`,
                explanationAr: `i-- هي عامل النقصان. تطرح 1 من i. هي عكس i++ التي تضيف 1.`
            },
            {
                id: 'q6_5',
                question: 'Which loop is guaranteed to execute at least once?',
                questionAr: 'أي حلقة مضمونة التنفيذ مرة واحدة على الأقل؟',
                options: [
                    { text: 'for loop', textAr: 'for' },
                    { text: 'do-while loop', textAr: 'do-while' },
                    { text: 'while loop', textAr: 'while' },
                    { text: 'infinite loop', textAr: 'infinite' }
                ],
                correct: 1,
                explanation: `do-while evaluates condition after execution.`,
                explanationAr: `do-while تقيم شرطها بعد التنفيذ.`
            }
        ]
    },

    // Section 7: Functions
    section7: {
        id: 'section7',
        title: 'Functions',
        titleAr: 'الدوال',
        iconName: 'code',
        duration: '90-120 min',

        theory: [
            {
                heading: 'What are Functions?',
                headingAr: 'ما هي الدوال؟',
                content: `Functions are reusable blocks of code that perform specific tasks. Instead of repeating code, put it in a function and call it when needed.\n\nBenefits of using functions:\n• Code Reuse — write once, use many times\n• Organization — break complex programs into smaller, manageable pieces\n• Easier Debugging — isolate and fix problems in individual functions\n• Abstraction — hide complex logic behind simple function calls\n• Team Work — different team members can work on different functions`,
                contentAr: `الدوال هي كتل من الكود قابلة لإعادة الاستخدام تؤدي مهام محددة. بدلاً من تكرار الكود، ضعه في دالة واستدعها عند الحاجة.\n\nفوائد استخدام الدوال:\n• إعادة استخدام الكود — اكتبه مرة واستخدمه عدة مرات\n• التنظيم — قسّم البرامج المعقدة لأجزاء أصغر\n• سهولة التصحيح — اعزل وأصلح المشاكل في دوال منفصلة\n• التجريد — أخفِ المنطق المعقد خلف استدعاءات دوال بسيطة`,
            },
            {
                heading: 'Function Syntax',
                headingAr: 'بناء جملة الدالة',
                content: `returnType functionName(parameters) {\n    // function body\n    return value;\n}\n\n• returnType: what the function gives back (int, double, bool, string, void)\n• functionName: descriptive name following camelCase convention\n• parameters: inputs the function needs (can be zero or more)\n• return: sends a value back to where the function was called\n• void functions don't need a return statement\n\nFunction Declaration (Prototype) vs Definition:\n• Declaration: tells compiler the function exists — int add(int a, int b);\n• Definition: contains the actual code — int add(int a, int b) { return a + b; }`,
                contentAr: `returnType functionName(parameters) {\n    // جسم الدالة\n    return value;\n}\n\n• returnType: ما تُرجعه الدالة (int, double, bool, string, void)\n• functionName: اسم وصفي يتبع قاعدة camelCase\n• parameters: المدخلات التي تحتاجها الدالة\n• return: ترسل قيمة للمكان الذي استُدعيت منه الدالة\n• دوال void لا تحتاج return`,
            },
            {
                heading: 'Parameters and Arguments',
                headingAr: 'المعاملات والوسيطات',
                content: `Parameters: variables listed in the function definition (placeholders).\nArguments: actual values passed when calling the function.\n\nPass by Value (default): a COPY of the value is passed. Changes inside the function do NOT affect the original.\nPass by Reference (&): the ORIGINAL variable is passed. Changes inside the function DO affect the original.\n\nExample:\n• void byValue(int x) — x is a copy\n• void byReference(int &x) — x IS the original variable`,
                contentAr: `المعاملات: المتغيرات المذكورة في تعريف الدالة (حاملات مكان).\nالوسيطات: القيم الفعلية المُمررة عند استدعاء الدالة.\n\nالتمرير بالقيمة (افتراضي): نُسخة من القيمة تُمرر. التغييرات داخل الدالة لا تؤثر على الأصل.\nالتمرير بالمرجع (&): المتغير الأصلي يُمرر. التغييرات داخل الدالة تؤثر على الأصل.`,
            },
            {
                heading: 'Function Overloading',
                headingAr: 'التحميل الزائد للدوال',
                content: `C++ allows multiple functions with the SAME NAME but DIFFERENT parameters. The compiler picks the right one based on the arguments you pass.\n\nRules:\n• Functions must differ in number of parameters OR types of parameters\n• Return type alone is NOT enough to distinguish overloaded functions\n• The compiler decides which version to call at compile time\n\nExample: int add(int a, int b) and double add(double a, double b) can coexist.`,
                contentAr: `C++ تسمح بعدة دوال بنفس الاسم لكن معاملات مختلفة. المترجم يختار الدالة الصحيحة بناءً على الوسيطات التي تمررها.\n\nالقواعد:\n• الدوال يجب أن تختلف في عدد المعاملات أو أنواعها\n• نوع الإرجاع وحده لا يكفي للتمييز\n• المترجم يقرر أي نسخة يستدعي وقت الترجمة`,
            },
            {
                heading: 'Default Parameters & Recursion',
                headingAr: 'المعاملات الافتراضية والتكرار الذاتي',
                content: `Default Parameters: You can give parameters default values. If the caller doesn't provide a value, the default is used.\n• void greet(string name = "User") — calling greet() uses "User"\n• Default params must be rightmost: int foo(int a, int b = 5, int c = 10)\n\nRecursion: A function that calls itself. Every recursive function needs:\n• Base Case — when to STOP (prevents infinite recursion)\n• Recursive Case — the function calls itself with a smaller/simpler input\n• Example: factorial(5) = 5 × factorial(4) = 5 × 4 × factorial(3) = ...`,
                contentAr: `المعاملات الافتراضية: يمكنك إعطاء المعاملات قيم افتراضية. إذا لم يوفر المستدعي قيمة، تُستخدم الافتراضية.\n\nالتكرار الذاتي (Recursion): دالة تستدعي نفسها. كل دالة تكرارية تحتاج:\n• حالة أساسية — متى تتوقف (تمنع التكرار اللانهائي)\n• حالة تكرارية — الدالة تستدعي نفسها بمدخل أصغر/أبسط\n• مثال: factorial(5) = 5 × factorial(4) = 5 × 4 × factorial(3) = ...`,
            }
        ],

        codeExamples: [
            {
                title: 'Basic Function',
                titleAr: 'دالة أساسية',
                code: `#include <iostream>
using namespace std;

// Function with no parameters and no return
void greet() {
    cout << "Hello, World!" << endl;
}

// Function with parameters and return value
int add(int a, int b) {
    return a + b;
}

// Function that returns a bool
bool isEven(int n) {
    return n % 2 == 0;
}

int main() {
    greet();  // Call void function
    
    int result = add(5, 3);
    cout << "5 + 3 = " << result << endl;  // 8
    
    cout << "10 + 20 = " << add(10, 20) << endl;  // 30
    
    if (isEven(4)) {
        cout << "4 is even" << endl;
    }
    
    return 0;
}`,
                explanation: `Three types of functions shown:\n• void greet() — no parameters, no return value, just performs an action\n• int add(int a, int b) — takes two ints, returns their sum\n• bool isEven(int n) — takes one int, returns true/false\n\nFunctions must be defined BEFORE main() or declared with a prototype above main and defined below it.`,
                explanationAr: `ثلاثة أنواع من الدوال:\n• void greet() — بدون معاملات، بدون قيمة إرجاع\n• int add(int a, int b) — تأخذ عددين وترجع مجموعهما\n• bool isEven(int n) — تأخذ عدداً وترجع true/false\n\nالدوال يجب تعريفها قبل main() أو إعلانها بنموذج أولي.`
            },
            {
                title: 'Pass by Value vs Reference',
                titleAr: 'التمرير بالقيمة مقابل المرجع',
                code: `#include <iostream>
using namespace std;

// Pass by VALUE - x is a COPY
void tryToChange(int x) {
    x = 999;  // Only changes the copy!
    cout << "Inside function: " << x << endl;  // 999
}

// Pass by REFERENCE - x IS the original
void actuallyChange(int &x) {
    x = 999;  // Changes the original!
    cout << "Inside function: " << x << endl;  // 999
}

// Practical use: swap two values
void swap(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int num = 5;
    
    tryToChange(num);
    cout << "After tryToChange: " << num << endl;  // Still 5!
    
    actuallyChange(num);
    cout << "After actuallyChange: " << num << endl;  // Now 999!
    
    int x = 10, y = 20;
    swap(x, y);
    cout << x << ", " << y << endl;  // 20, 10
    
    return 0;
}`,
                explanation: `Pass by value creates a COPY — original is safe.\nPass by reference (&) gives access to the ORIGINAL — changes affect caller.\n\nUse pass by reference when:\n• You need to modify the original variable\n• The data is large (avoids expensive copying)\n• You need to return multiple values from a function`,
                explanationAr: `التمرير بالقيمة ينشئ نسخة — الأصل آمن.\nالتمرير بالمرجع (&) يعطي وصولاً للمتغير الأصلي — التغييرات تؤثر على المستدعي.\n\nاستخدم التمرير بالمرجع عندما:\n• تحتاج تعديل المتغير الأصلي\n• البيانات كبيرة (تجنب النسخ المكلف)\n• تحتاج إرجاع قيم متعددة من دالة`
            },
            {
                title: 'Function Overloading',
                titleAr: 'التحميل الزائد للدوال',
                code: `#include <iostream>
using namespace std;

// Same name, different parameter types
int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

// Same name, different number of parameters
int add(int a, int b, int c) {
    return a + b + c;
}

// Overloaded print function
void print(int x) {
    cout << "Integer: " << x << endl;
}

void print(string s) {
    cout << "String: " << s << endl;
}

void print(double d) {
    cout << "Double: " << d << endl;
}

int main() {
    cout << add(3, 4) << endl;       // Calls int version: 7
    cout << add(3.5, 4.2) << endl;   // Calls double version: 7.7
    cout << add(1, 2, 3) << endl;    // Calls 3-param version: 6
    
    print(42);           // Integer: 42
    print("Hello");      // String: Hello
    print(3.14);         // Double: 3.14
    
    return 0;
}`,
                explanation: `Function overloading lets you have multiple functions with the same name but different parameter lists. The compiler automatically picks the right version based on:\n• Number of arguments\n• Types of arguments\n\nThis is a form of polymorphism — the same function name behaves differently depending on inputs. Very useful for creating intuitive, clean APIs.`,
                explanationAr: `التحميل الزائد يسمح لك بعدة دوال بنفس الاسم لكن قوائم معاملات مختلفة. المترجم يختار النسخة الصحيحة تلقائياً بناءً على عدد وأنواع الوسيطات.\n\nهذا شكل من أشكال تعدد الأشكال — نفس اسم الدالة يتصرف بشكل مختلف حسب المدخلات.`
            },
            {
                title: 'Recursion & Default Parameters',
                titleAr: 'التكرار الذاتي والمعاملات الافتراضية',
                code: `#include <iostream>
using namespace std;

// === RECURSION ===
// Factorial using recursion
long long factorial(int n) {
    if (n <= 1) return 1;      // Base case: stop here
    return n * factorial(n-1);  // Recursive case: call self
}

// Fibonacci using recursion
int fibonacci(int n) {
    if (n <= 0) return 0;    // Base case 1
    if (n == 1) return 1;    // Base case 2
    return fibonacci(n-1) + fibonacci(n-2);  // Recursive
}

// Sum of digits using recursion
int sumDigits(int n) {
    if (n == 0) return 0;
    return (n % 10) + sumDigits(n / 10);
}

// === DEFAULT PARAMETERS ===
void printLine(char symbol = '-', int count = 30) {
    for (int i = 0; i < count; i++) {
        cout << symbol;
    }
    cout << endl;
}

double calculatePrice(double price, double tax = 0.14, double discount = 0) {
    return price * (1 + tax) * (1 - discount);
}

int main() {
    // Recursion examples
    cout << "5! = " << factorial(5) << endl;        // 120
    cout << "Fib(7) = " << fibonacci(7) << endl;    // 13
    cout << "Sum digits 1234 = " << sumDigits(1234) << endl;  // 10
    
    // Default parameter examples
    printLine();          // Uses defaults: 30 dashes
    printLine('*');       // 30 stars
    printLine('=', 20);   // 20 equals signs
    
    cout << "Price: " << calculatePrice(100) << endl;        // 114 (14% tax)
    cout << "Price: " << calculatePrice(100, 0.14, 0.1) << endl;  // 102.6
    
    return 0;
}`,
                explanation: `Recursion is when a function calls itself. Every recursive function MUST have:\n1. Base case — condition to stop (if n <= 1 return 1)\n2. Recursive case — calls itself with smaller input (factorial(n-1))\n\nHow factorial(4) works:\n factorial(4) → 4 × factorial(3) → 4 × 3 × factorial(2) → 4 × 3 × 2 × factorial(1) → 4 × 3 × 2 × 1 = 24\n\nDefault parameters let you set fallback values. Callers can override them or use the defaults.`,
                explanationAr: `التكرار الذاتي هو عندما تستدعي الدالة نفسها. كل دالة تكرارية يجب أن تحتوي:\n1. حالة أساسية — شرط التوقف\n2. حالة تكرارية — تستدعي نفسها بمدخل أصغر\n\nكيف يعمل factorial(4):\nfactorial(4) → 4 × factorial(3) → 4 × 3 × factorial(2) → 4 × 3 × 2 × factorial(1) → 4 × 3 × 2 × 1 = 24\n\nالمعاملات الافتراضية تسمح لك بتعيين قيم احتياطية.`
            }
        ],

        commonMistakes: [
            {
                title: 'Forgetting return Statement',
                titleAr: 'نسيان جملة return',
                wrong: `int square(int x) {
    int result = x * x;
    // Forgot to return! Undefined behavior.
}`,
                correct: `int square(int x) {
    return x * x;  // Always return a value!
}`,
                explanation: `Non-void functions MUST return a value. Forgetting return leads to undefined behavior — the function may return garbage data. The compiler might warn you, but it's still valid syntax, making this a sneaky bug.`,
                explanationAr: `الدوال غير void يجب أن ترجع قيمة. نسيان return يؤدي إلى سلوك غير محدد — الدالة قد ترجع بيانات عشوائية.`
            },
            {
                title: 'Pass by Value When Reference Needed',
                titleAr: 'التمرير بالقيمة عندما يُحتاج المرجع',
                wrong: `void swapWrong(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
    // Only swapped the COPIES! Originals unchanged.
}`,
                correct: `void swapRight(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
    // Swapped the ORIGINALS using &
}`,
                explanation: `Without &, parameters are copies. Changes only affect the local copies inside the function. The original variables in main() remain unchanged. Always use & when you need to modify the original values.`,
                explanationAr: `بدون &، المعاملات هي نسخ. التغييرات تؤثر فقط على النسخ المحلية داخل الدالة. المتغيرات الأصلية في main() تبقى بدون تغيير. استخدم & دائماً عندما تحتاج تعديل القيم الأصلية.`
            },
            {
                title: 'Missing Base Case in Recursion',
                titleAr: 'نسيان الحالة الأساسية في التكرار',
                wrong: `int factorial(int n) {
    return n * factorial(n - 1);
    // No base case! Infinite recursion → stack overflow!
}`,
                correct: `int factorial(int n) {
    if (n <= 1) return 1;  // Base case stops recursion
    return n * factorial(n - 1);
}`,
                explanation: `Without a base case, the function calls itself forever until the program runs out of memory (stack overflow crash). EVERY recursive function must have at least one base case that returns a value without making another recursive call.`,
                explanationAr: `بدون حالة أساسية، الدالة تستدعي نفسها للأبد حتى ينفد الذاكرة (انهيار تجاوز المكدس). كل دالة تكرارية يجب أن تحتوي على حالة أساسية واحدة على الأقل.`
            }
        ],

        advancedTopics: {
            intro: `Let's dive deeper into functions with these advanced concepts that will help you write more powerful and elegant code.`,
            introAr: `دعنا نتعمق أكثر في الدوال مع هذه المفاهيم المتقدمة التي ستساعدك على كتابة كود أقوى وأكثر أناقة.`,
            topics: [
                {
                    title: 'Recursive Thinking',
                    titleAr: 'التفكير التكراري',
                    explanation: `Recursion is a different way of thinking about problems. Instead of loops, you break a problem into:\n1. The simplest version (base case)\n2. How to reduce to a smaller version\n\nPower example: power(2,4) = 2 × power(2,3) = 2 × 2 × power(2,2) = ...\nSum 1 to n: sum(n) = n + sum(n-1), sum(1) = 1\n\nRecursion vs Loops: Anything recursive CAN be done with loops, but some problems are naturally recursive (tree traversal, fractals, divide-and-conquer algorithms).`,
                    explanationAr: `التكرار الذاتي هو طريقة مختلفة للتفكير في المشاكل. بدلاً من الحلقات، تقسم المشكلة إلى: أبسط نسخة (حالة أساسية) وكيفية التبسيط لنسخة أصغر.`,
                    example: `// Recursive power function
int power(int base, int exp) {
    if (exp == 0) return 1;           // Base: anything^0 = 1
    return base * power(base, exp-1); // Recursive step
}

// Recursive sum from 1 to n
int sum(int n) {
    if (n == 1) return 1;       // Base case
    return n + sum(n - 1);      // n + sum of rest
}

// Trace: sum(4) → 4+sum(3) → 4+3+sum(2) → 4+3+2+sum(1) → 4+3+2+1 = 10`
                },
                {
                    title: 'Function Prototypes',
                    titleAr: 'النماذج الأولية للدوال',
                    explanation: `In large programs, you might want to define functions AFTER main(). Function prototypes let you declare a function's signature at the top, and define the body later.\n\nThis is how real C++ projects are organized:\n• Header files (.h) contain prototypes\n• Source files (.cpp) contain definitions\n• main() can call any declared function regardless of definition order`,
                    explanationAr: `في البرامج الكبيرة، قد تريد تعريف الدوال بعد main(). النماذج الأولية تسمح لك بإعلان توقيع الدالة في الأعلى، وتعريف الجسم لاحقاً.`,
                    example: `#include <iostream>
using namespace std;

// Prototypes (declarations) — just the signature with semicolon
int add(int a, int b);
void printResult(int result);
bool isPositive(int n);

int main() {
    // Can use functions even though they're defined below!
    int sum = add(10, 20);
    printResult(sum);
    cout << "Is 5 positive? " << isPositive(5) << endl;
    return 0;
}

// Definitions — the actual code
int add(int a, int b) {
    return a + b;
}

void printResult(int result) {
    cout << "Result: " << result << endl;
}

bool isPositive(int n) {
    return n > 0;
}`
                },
                {
                    title: 'Scope and Lifetime of Variables',
                    titleAr: 'نطاق ودورة حياة المتغيرات',
                    explanation: `Variables have scope (where they're visible) and lifetime (how long they exist):\n\n• Local variables: declared inside a function, only visible there, destroyed when function ends\n• Global variables: declared outside all functions, visible everywhere (avoid when possible!)\n• Static local variables: keep their value between function calls using 'static' keyword\n\nRule of thumb: Always use the smallest scope possible. Global variables make code harder to debug and maintain.`,
                    explanationAr: `المتغيرات لها نطاق (أين تكون مرئية) ودورة حياة (كم تستمر):\n\n• متغيرات محلية: تُعلن داخل دالة، مرئية فقط هناك\n• متغيرات عامة: تُعلن خارج كل الدوال، مرئية في كل مكان\n• متغيرات محلية ثابتة: تحتفظ بقيمتها بين استدعاءات الدالة`,
                    example: `#include <iostream>
using namespace std;

int globalVar = 100;  // Global — visible everywhere

void counter() {
    static int count = 0;  // Static — keeps value between calls!
    count++;
    cout << "Called " << count << " times" << endl;
}

void demo() {
    int localVar = 50;  // Local — only exists in demo()
    cout << "Local: " << localVar << endl;
    cout << "Global: " << globalVar << endl;
}

int main() {
    counter();  // Called 1 times
    counter();  // Called 2 times
    counter();  // Called 3 times
    demo();
    // cout << localVar;  // ERROR! localVar not visible here
    return 0;
}`
                }
            ]
        },

        practice: [
            {
                id: 'p7_1',
                title: 'Max of Two Numbers',
                titleAr: 'أكبر رقمين',
                difficulty: 1,
                description: `Write a function that takes two integers and returns the larger one.`,
                descriptionAr: `اكتب دالة تأخذ عددين صحيحين وترجع الأكبر.`,
                starterCode: `#include <iostream>
using namespace std;

// Write your max function here

int main() {
    cout << max(5, 3) << endl;  // Should print 5
    cout << max(2, 8) << endl;  // Should print 8
    return 0;
}`,
                solution: `#include <iostream>
using namespace std;

int max(int a, int b) {
    if (a > b) return a;
    else return b;
}

int main() {
    cout << max(5, 3) << endl;
    cout << max(2, 8) << endl;
    return 0;
}`,
                hints: ['Use if-else to compare', 'Return the larger value', 'Function returns int']
            },
            {
                id: 'p7_2',
                title: 'Factorial Function',
                titleAr: 'دالة المضروب',
                difficulty: 2,
                description: `Write a function that calculates factorial of a number and returns the result.`,
                descriptionAr: `اكتب دالة تحسب مضروب رقم وترجع النتيجة.`,
                starterCode: `#include <iostream>\nusing namespace std;\n\n// Write factorial function\n\nint main() {\n    cout << factorial(5) << endl;  // 120\n    cout << factorial(3) << endl;  // 6\n    return 0;\n}`,
                solution: `#include <iostream>\nusing namespace std;\n\nlong long factorial(int n) {\n    long long result = 1;\n    for (int i = 1; i <= n; i++) {\n        result *= i;\n    }\n    return result;\n}\n\nint main() {\n    cout << factorial(5) << endl;\n    cout << factorial(3) << endl;\n    return 0;\n}`,
                hints: ['Use long long for large results', 'Loop from 1 to n', 'Return the result']
            },
            {
                id: 'p7_3',
                title: 'Is Prime Function',
                titleAr: 'دالة هل الرقم أولي',
                difficulty: 2,
                description: `Write a function isPrime that returns true if a number is prime, false otherwise.`,
                descriptionAr: `اكتب دالة isPrime التي ترجع true إذا كان الرقم أولياً، وfalse خلاف ذلك.`,
                starterCode: `#include <iostream>\nusing namespace std;\n\n// Write isPrime function\n\nint main() {\n    cout << isPrime(7) << endl;   // 1 (true)\n    cout << isPrime(10) << endl;  // 0 (false)\n    return 0;\n}`,
                solution: `#include <iostream>\nusing namespace std;\n\nbool isPrime(int n) {\n    if (n <= 1) return false;\n    for (int i = 2; i * i <= n; i++) {\n        if (n % i == 0) return false;\n    }\n    return true;\n}\n\nint main() {\n    cout << isPrime(7) << endl;\n    cout << isPrime(10) << endl;\n    return 0;\n}`,
                hints: ['Return false if n <= 1', 'Check divisors up to sqrt(n)', 'Return bool type']
            },
            {
                id: 'p7_4',
                title: 'Swap by Reference',
                titleAr: 'التبديل بالمرجع',
                difficulty: 3,
                description: `Write a swap function that actually swaps two variables using pass-by-reference.`,
                descriptionAr: `اكتب دالة swap تبدل متغيرين فعلياً باستخدام التمرير بالمرجع.`,
                starterCode: `#include <iostream>\nusing namespace std;\n\n// Write swap function with references\n\nint main() {\n    int a = 5, b = 10;\n    swap(a, b);\n    cout << a << ", " << b << endl;  // 10, 5\n    return 0;\n}`,
                solution: `#include <iostream>\nusing namespace std;\n\nvoid swap(int &x, int &y) {\n    int temp = x;\n    x = y;\n    y = temp;\n}\n\nint main() {\n    int a = 5, b = 10;\n    swap(a, b);\n    cout << a << ", " << b << endl;\n    return 0;\n}`,
                hints: ['Use & for reference parameters', 'Use a temp variable', 'Function returns void']
            },
            {
                id: 'p7_5',
                title: 'Power Function',
                titleAr: 'دالة القوة',
                difficulty: 2,
                description: `Write a power function that calculates base^exponent without using pow().`,
                descriptionAr: `اكتب دالة power تحسب base^exponent بدون استخدام pow().`,
                starterCode: `#include <iostream>\nusing namespace std;\n\n// Write power function\n\nint main() {\n    cout << power(2, 3) << endl;   // 8\n    cout << power(5, 2) << endl;   // 25\n    return 0;\n}`,
                solution: `#include <iostream>\nusing namespace std;\n\nlong long power(int base, int exp) {\n    long long result = 1;\n    for (int i = 0; i < exp; i++) {\n        result *= base;\n    }\n    return result;\n}\n\nint main() {\n    cout << power(2, 3) << endl;\n    cout << power(5, 2) << endl;\n    return 0;\n}`,
                hints: ['Start result at 1', 'Multiply by base, exp times', 'Use long long for safety']
            }
        ],

        mcq: [
            {
                id: 'q7_1',
                question: 'What does void mean as a return type?',
                questionAr: 'ماذا تعني void كنوع إرجاع؟',
                options: [
                    { text: 'Returns 0', textAr: 'ترجع 0' },
                    { text: 'Returns nothing', textAr: 'لا ترجع شيئاً' },
                    { text: 'Returns empty string', textAr: 'ترجع نص فارغ' },
                    { text: 'Error type', textAr: 'نوع خطأ' }
                ],
                correct: 1,
                explanation: `void means the function doesn't return any value. It just performs an action.`,
                explanationAr: `void تعني أن الدالة لا ترجع أي قيمة. هي فقط تؤدي عملاً.`
            },
            {
                id: 'q7_2',
                question: 'What is function overloading?',
                questionAr: 'ما هو التحميل الزائد للدوال؟',
                options: [
                    { text: 'Calling a function too many times', textAr: 'استدعاء دالة مرات كثيرة جداً' },
                    { text: 'Multiple functions with same name but different parameters', textAr: 'عدة دوال بنفس الاسم لكن معاملات مختلفة' },
                    { text: 'A function that is too long', textAr: 'دالة طويلة جداً' },
                    { text: 'A function that crashes', textAr: 'دالة تنهار' }
                ],
                correct: 1,
                explanation: `Function overloading allows multiple functions with the same name but different parameter types or counts. The compiler picks the right one.`,
                explanationAr: `التحميل الزائد يسمح بعدة دوال بنفس الاسم لكن بأنواع أو أعداد معاملات مختلفة.`
            },
            {
                id: 'q7_3',
                question: 'What happens without a base case in recursion?',
                questionAr: 'ماذا يحدث بدون حالة أساسية في التكرار؟',
                options: [
                    { text: 'Function returns 0', textAr: 'الدالة ترجع 0' },
                    { text: 'Function runs once', textAr: 'الدالة تعمل مرة واحدة' },
                    { text: 'Infinite recursion / stack overflow', textAr: 'تكرار لانهائي / تجاوز المكدس' },
                    { text: 'Compilation error', textAr: 'خطأ ترجمة' }
                ],
                correct: 2,
                explanation: `Without a base case, the function calls itself forever, consuming more and more stack memory until the program crashes with a stack overflow error.`,
                explanationAr: `بدون حالة أساسية، الدالة تستدعي نفسها للأبد، مستهلكة ذاكرة أكثر فأكثر حتى ينهار البرنامج.`
            },
            {
                id: 'q7_4',
                question: 'What does & in a function parameter mean?',
                questionAr: 'ماذا يعني & في معامل الدالة؟',
                options: [
                    { text: 'Logical AND', textAr: 'و المنطقية' },
                    { text: 'Address of variable', textAr: 'عنوان المتغير' },
                    { text: 'Pass by reference', textAr: 'تمرير بالمرجع' },
                    { text: 'Multiply', textAr: 'ضرب' }
                ],
                correct: 2,
                explanation: `& in a parameter declaration means pass by reference — the function receives the original variable, not a copy, so changes affect the original.`,
                explanationAr: `& في إعلان المعامل تعني التمرير بالمرجع — الدالة تستقبل المتغير الأصلي وليس نسخة.`
            },
            {
                id: 'q7_5',
                question: 'Which is correct about default parameters?',
                questionAr: 'أي عبارة صحيحة عن المعاملات الافتراضية؟',
                options: [
                    { text: 'They must be leftmost parameters', textAr: 'يجب أن تكون المعاملات الأيسر' },
                    { text: 'They must be rightmost parameters', textAr: 'يجب أن تكون المعاملات الأيمن' },
                    { text: 'They can be in any position', textAr: 'يمكن أن تكون في أي موضع' },
                    { text: 'They are not allowed in C++', textAr: 'غير مسموحة في C++' }
                ],
                correct: 1,
                explanation: `Default parameters must be the rightmost (last) parameters. You can't have a default parameter followed by a non-default one.`,
                explanationAr: `المعاملات الافتراضية يجب أن تكون الأيمن (الأخيرة). لا يمكنك وضع معامل افتراضي يتبعه معامل غير افتراضي.`
            }
        ]
    },



// Section 8: Arrays
section8: {
    id: 'section8',
        title: 'Arrays',
            titleAr: 'المصفوفات',
                iconName: 'list',
                    duration: '90-120 min',

                        theory: [
                            {
                                heading: 'What are Arrays?',
                                headingAr: 'ما هي المصفوفات؟',
                                content: `Arrays store multiple values of the SAME TYPE in one variable. Instead of declaring 100 separate variables, use one array!\n\nWhy arrays?\n• Store collections of related data (scores, names, temperatures)\n• Process data with loops instead of repetitive code\n• Foundation for data structures (lists, stacks, queues)\n\nThink of an array as a row of numbered boxes — each box holds one value, accessed by its index number.`,
                                contentAr: `المصفوفات تخزن قيم متعددة من نفس النوع في متغير واحد. بدلاً من إعلان 100 متغير منفصل، استخدم مصفوفة واحدة!\n\nلماذا المصفوفات؟\n• تخزين مجموعات من البيانات المرتبطة\n• معالجة البيانات بالحلقات بدلاً من التكرار\n• أساس هياكل البيانات`,
                            },
                            {
                                heading: 'Array Declaration & Initialization',
                                headingAr: 'إعلان المصفوفة وتهيئتها',
                                content: `type name[size];\n\nWays to initialize:\n• int arr[5] = {1, 2, 3, 4, 5}; — explicit values\n• int arr[5] = {0}; — all zeros\n• int arr[] = {1, 2, 3}; — size auto-detected (3)\n• int arr[5]; — uninitialized (contains garbage!)\n\nSize MUST be a constant — cannot use a variable for size in standard C++.\nMemory: int arr[5] uses 5 × 4 = 20 bytes (since int = 4 bytes).`,
                                contentAr: `type name[size];\n\nطرق التهيئة:\n• int arr[5] = {1, 2, 3, 4, 5}; — قيم صريحة\n• int arr[5] = {0}; — كلها أصفار\n• int arr[] = {1, 2, 3}; — الحجم يُكتشف تلقائياً\n• int arr[5]; — غير مهيأة (تحتوي قيم عشوائية!)`,
                            },
                            {
                                heading: 'Accessing & Modifying Elements',
                                headingAr: 'الوصول وتعديل العناصر',
                                content: `Elements are accessed by INDEX (starting from 0):\n• arr[0] — first element\n• arr[1] — second element\n• arr[size-1] — last element\n\nIMPORTANT: Accessing arr[size] or beyond is OUT OF BOUNDS!\nC++ does NOT check bounds — it will read/write garbage memory, causing bugs or crashes.\n\nModify: arr[2] = 99; — sets 3rd element to 99`,
                                contentAr: `العناصر يتم الوصول إليها بالفهرس (بدءاً من 0):\n• arr[0] — العنصر الأول\n• arr[size-1] — العنصر الأخير\n\nمهم: الوصول لـ arr[size] أو أبعد يتجاوز الحدود!\nC++ لا تتحقق من الحدود.`,
                            },
                            {
                                heading: '2D Arrays (Matrices)',
                                headingAr: 'المصفوفات ثنائية الأبعاد',
                                content: `2D arrays are arrays of arrays — think of them as tables with rows and columns.\n\nDeclaration: int matrix[3][4]; — 3 rows, 4 columns\nAccess: matrix[row][col]\n\nInitialization:\nint grid[2][3] = {\n    {1, 2, 3},\n    {4, 5, 6}\n};\n\nUse nested loops to traverse: outer loop for rows, inner loop for columns.`,
                                contentAr: `المصفوفات ثنائية الأبعاد هي مصفوفات من المصفوفات — فكر فيها كجداول بصفوف وأعمدة.\n\nالإعلان: int matrix[3][4]; — 3 صفوف، 4 أعمدة\nالوصول: matrix[row][col]\n\nاستخدم حلقات متداخلة للتنقل.`,
                            },
                            {
                                heading: 'Arrays with Functions',
                                headingAr: 'المصفوفات مع الدوال',
                                content: `When you pass an array to a function, you pass a POINTER to the first element (not a copy).\n\n• void printArr(int arr[], int size) — arr is a pointer\n• Changes to arr inside the function affect the ORIGINAL array\n• Always pass the size as a separate parameter\n\nThis is different from regular variables which pass by value (copy).`,
                                contentAr: `عندما تمرر مصفوفة لدالة، تمرر مؤشراً للعنصر الأول (ليس نسخة).\n\n• التغييرات على arr داخل الدالة تؤثر على المصفوفة الأصلية\n• مرر الحجم دائماً كمعامل منفصل`,
                            }
                        ],

                            codeExamples: [
                                {
                                    title: 'Basic Array Usage',
                                    titleAr: 'استخدام المصفوفة الأساسي',
                                    code: `#include <iostream>
using namespace std;

int main() {
    // Declaration and initialization
    int scores[5] = {90, 85, 78, 92, 88};
    
    // Access elements
    cout << "First: " << scores[0] << endl;   // 90
    cout << "Third: " << scores[2] << endl;   // 78
    
    // Modify element
    scores[1] = 95;
    
    // Loop through array
    cout << "All scores: ";
    for (int i = 0; i < 5; i++) {
        cout << scores[i] << " ";
    }
    cout << endl;
    
    // Different initialization methods
    int zeros[5] = {0};         // All zeros
    int partial[5] = {1, 2};    // Rest are 0: 1 2 0 0 0
    int autoSize[] = {10, 20, 30};  // Size = 3
    
    return 0;
}`,
                                    explanation: `Arrays are indexed from 0 to size-1. Use loops to process all elements.\n\n• {0} fills entire array with zeros\n• Partial initialization fills rest with 0\n• Omit size to let compiler count elements`,
                                    explanationAr: `المصفوفات مُفهرسة من 0 إلى size-1. استخدم الحلقات لمعالجة كل العناصر.`
                                },
                                {
                                    title: 'Array Operations (Sum, Max, Min)',
                                    titleAr: 'عمليات المصفوفة (المجموع، الأكبر، الأصغر)',
                                    code: `#include <iostream>
using namespace std;

int main() {
    int nums[8] = {15, 3, 42, 7, 28, 11, 55, 19};
    int size = 8;
    
    // Find sum and average
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += nums[i];
    }
    double avg = (double)sum / size;
    cout << "Sum: " << sum << ", Avg: " << avg << endl;
    
    // Find max and min
    int maxVal = nums[0], minVal = nums[0];
    for (int i = 1; i < size; i++) {
        if (nums[i] > maxVal) maxVal = nums[i];
        if (nums[i] < minVal) minVal = nums[i];
    }
    cout << "Max: " << maxVal << ", Min: " << minVal << endl;
    
    return 0;
}`,
                                    explanation: `Common operations:\n• Sum: accumulate all values\n• Average: sum / count (cast to double)\n• Max/Min: start with first element, compare each\n\nAlways initialize sum=0, max/min with arr[0].`,
                                    explanationAr: `عمليات شائعة: المجموع، المتوسط، الأكبر/الأصغر. هيّئ sum=0 و max/min بالعنصر الأول.`
                                },
                                {
                                    title: '2D Arrays & Passing Arrays to Functions',
                                    titleAr: 'المصفوفات ثنائية الأبعاد وتمريرها للدوال',
                                    code: `#include <iostream>
using namespace std;

// Arrays passed to functions affect the ORIGINAL
void doubleAll(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        arr[i] *= 2;
    }
}

void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) cout << arr[i] << " ";
    cout << endl;
}

int main() {
    int nums[5] = {1, 2, 3, 4, 5};
    cout << "Before: "; printArray(nums, 5);
    doubleAll(nums, 5);
    cout << "After:  "; printArray(nums, 5);
    
    // 2D Array
    int matrix[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    
    cout << "\\nMatrix:" << endl;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            cout << matrix[i][j] << "\\t";
        }
        cout << endl;
    }
    
    return 0;
}`,
                                    explanation: `Key concepts:\n• Arrays passed to functions are NOT copies — changes affect the original\n• Always pass size as a separate parameter\n• 2D arrays use nested loops: outer for rows, inner for columns\n• Access with matrix[row][col]`,
                                    explanationAr: `المصفوفات المُمررة للدوال ليست نسخاً — التغييرات تؤثر على الأصل.\nالمصفوفات ثنائية الأبعاد تستخدم حلقات متداخلة.`
                                }
                            ],

                                commonMistakes: [
                                    {
                                        title: 'Array Index Out of Bounds',
                                        titleAr: 'فهرس المصفوفة خارج الحدود',
                                        wrong: `int arr[5] = {1, 2, 3, 4, 5};
cout << arr[5];  // OUT OF BOUNDS! Valid: 0-4`,
                                        correct: `int arr[5] = {1, 2, 3, 4, 5};
cout << arr[4];  // Last element at index size-1`,
                                        explanation: `Array indices go from 0 to size-1. Accessing beyond reads random memory — the #1 cause of C++ bugs!`,
                                        explanationAr: `فهارس المصفوفة من 0 إلى size-1. الوصول خارج الحدود يقرأ ذاكرة عشوائية.`
                                    },
                                    {
                                        title: 'Using Variable as Array Size',
                                        titleAr: 'استخدام متغير كحجم مصفوفة',
                                        wrong: `int n;
cin >> n;
int arr[n];  // NOT standard C++!`,
                                        correct: `const int MAX_SIZE = 100;
int arr[MAX_SIZE];  // Use a constant
int n;
cin >> n;  // Track actual used size separately`,
                                        explanation: `In standard C++, array size must be a compile-time constant. Use const for fixed max size.`,
                                        explanationAr: `في C++ القياسية، حجم المصفوفة يجب أن يكون ثابتاً وقت الترجمة.`
                                    }
                                ],

                                    advancedTopics: {
        intro: `Let's explore more powerful array techniques used in real programming.`,
            introAr: `دعنا نستكشف تقنيات مصفوفات أقوى تُستخدم في البرمجة الحقيقية.`,
                topics: [
                    {
                        title: 'Bubble Sort Algorithm',
                        titleAr: 'خوارزمية ترتيب الفقاعات',
                        explanation: `Bubble Sort repeatedly compares adjacent elements and swaps them if in wrong order. Each pass "bubbles" the largest to its position. O(n²) time — slow but simple to learn.`,
                        explanationAr: `ترتيب الفقاعات يقارن العناصر المتجاورة ويبدلها إذا كانت بترتيب خاطئ.`,
                        example: `int arr[] = {64, 34, 25, 12, 22};
int n = 5;
for (int i = 0; i < n-1; i++)
    for (int j = 0; j < n-i-1; j++)
        if (arr[j] > arr[j+1]) {
            int temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
// Result: 12 22 25 34 64`
                    },
                    {
                        title: 'Binary Search',
                        titleAr: 'البحث الثنائي',
                        explanation: `Binary Search works on SORTED arrays only. Check middle, eliminate half each time. O(log n) — with 1000 elements, only ~10 comparisons vs 1000 for linear search!`,
                        explanationAr: `البحث الثنائي يعمل على المصفوفات المرتبة فقط. يفحص الوسط ويزيل النصف كل مرة.`,
                        example: `int binarySearch(int arr[], int size, int target) {
    int left = 0, right = size - 1;
    while (left <= right) {
        int mid = (left + right) / 2;
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;  // Not found
}`
                    },
                    {
                        title: '2D Array Patterns',
                        titleAr: 'أنماط المصفوفات ثنائية الأبعاد',
                        explanation: `2D arrays are used for: game boards, image pixels, spreadsheets, mathematical matrices.\n\nCommon patterns:\n• Diagonal: matrix[i][i]\n• Transpose: swap matrix[i][j] with matrix[j][i]\n• Matrix addition: c[i][j] = a[i][j] + b[i][j]`,
                        explanationAr: `المصفوفات ثنائية الأبعاد تُستخدم في: لوحات الألعاب، الصور، الجداول، المصفوفات الرياضية.`,
                        example: `// Matrix addition
int a[2][2] = {{1, 2}, {3, 4}};
int b[2][2] = {{5, 6}, {7, 8}};
int c[2][2];
for (int i = 0; i < 2; i++)
    for (int j = 0; j < 2; j++)
        c[i][j] = a[i][j] + b[i][j];
// c = {{6, 8}, {10, 12}}`
                    }
                ]
    },

    practice: [
        {
            id: 'p8_1',
            title: 'Average of Array',
            titleAr: 'متوسط المصفوفة',
            difficulty: 2,
            description: `Create an array of 5 numbers and calculate their average.`,
            descriptionAr: `أنشئ مصفوفة من 5 أرقام واحسب متوسطها.`,
            starterCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int nums[5] = {10, 20, 30, 40, 50};\n    // Calculate and print average\n    return 0;\n}`,
            solution: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int nums[5] = {10, 20, 30, 40, 50};\n    int sum = 0;\n    for (int i = 0; i < 5; i++) sum += nums[i];\n    double avg = (double)sum / 5;\n    cout << "Average: " << avg << endl;\n    return 0;\n}`,
            hints: ['Sum all elements', 'Divide by count', 'Cast to double for decimal']
        },
        {
            id: 'p8_2',
            title: 'Find Maximum',
            titleAr: 'إيجاد الأكبر',
            difficulty: 2,
            description: `Find and print the maximum value in an array of 5 numbers.`,
            descriptionAr: `أوجد واطبع القيمة الأكبر في مصفوفة من 5 أرقام.`,
            starterCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int nums[5] = {4, 2, 9, 1, 7};\n    // Find and print maximum\n    return 0;\n}`,
            solution: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int nums[5] = {4, 2, 9, 1, 7};\n    int max = nums[0];\n    for (int i = 1; i < 5; i++)\n        if (nums[i] > max) max = nums[i];\n    cout << "Maximum: " << max << endl;\n    return 0;\n}`,
            hints: ['Initialize max with first element', 'Compare each element', 'Update if larger']
        },
        {
            id: 'p8_3',
            title: 'Reverse Array',
            titleAr: 'عكس المصفوفة',
            difficulty: 2,
            description: `Reverse the elements of an array in-place and print the result.`,
            descriptionAr: `اعكس عناصر المصفوفة في مكانها واطبع النتيجة.`,
            starterCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    // Reverse the array\n    // Print reversed array\n    return 0;\n}`,
            solution: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    for (int i = 0; i < 5/2; i++) {\n        int temp = arr[i];\n        arr[i] = arr[4-i];\n        arr[4-i] = temp;\n    }\n    cout << "Reversed: ";\n    for (int i = 0; i < 5; i++) cout << arr[i] << " ";\n    return 0;\n}`,
            hints: ['Swap first with last', 'Loop only halfway', 'Use temp for swapping']
        },
        {
            id: 'p8_4',
            title: 'Count Occurrences',
            titleAr: 'عد التكرارات',
            difficulty: 2,
            description: `Count how many times a specific number appears in an array.`,
            descriptionAr: `احسب كم مرة يظهر رقم معين في مصفوفة.`,
            starterCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[8] = {1, 3, 2, 3, 3, 1, 4, 3};\n    int target = 3;\n    // Count occurrences of target\n    return 0;\n}`,
            solution: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[8] = {1, 3, 2, 3, 3, 1, 4, 3};\n    int target = 3, count = 0;\n    for (int i = 0; i < 8; i++)\n        if (arr[i] == target) count++;\n    cout << target << " appears " << count << " times" << endl;\n    return 0;\n}`,
            hints: ['Initialize count to 0', 'Increment when match', 'Loop entire array']
        },
        {
            id: 'p8_5',
            title: 'Linear Search',
            titleAr: 'البحث الخطي',
            difficulty: 3,
            description: `Search for a number in an array and print its index, or -1 if not found.`,
            descriptionAr: `ابحث عن رقم في مصفوفة واطبع فهرسه، أو -1 إذا لم يوجد.`,
            starterCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[5] = {10, 25, 30, 45, 50};\n    int target = 30;\n    // Find index of target\n    return 0;\n}`,
            solution: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[5] = {10, 25, 30, 45, 50};\n    int target = 30, found = -1;\n    for (int i = 0; i < 5; i++)\n        if (arr[i] == target) { found = i; break; }\n    if (found != -1) cout << target << " at index " << found << endl;\n    else cout << target << " not found" << endl;\n    return 0;\n}`,
            hints: ['Initialize foundIndex to -1', 'Break when found', 'Check after loop']
        }
    ],

        mcq: [
            {
                id: 'q8_1',
                question: 'What is the index of the first element in an array?',
                questionAr: 'ما هو فهرس العنصر الأول في المصفوفة؟',
                options: [
                    { text: '1', textAr: '1' },
                    { text: '0', textAr: '0' },
                    { text: '-1', textAr: '-1' },
                    { text: 'Depends on size', textAr: 'يعتمد على الحجم' }
                ],
                correct: 1,
                explanation: `Arrays in C++ are zero-indexed. First element is at index 0.`,
                explanationAr: `المصفوفات في C++ مُفهرسة من الصفر.`
            },
            {
                id: 'q8_2',
                question: 'What happens when you access beyond array size?',
                questionAr: 'ماذا يحدث عند تجاوز حجم المصفوفة؟',
                options: [
                    { text: 'Returns 0', textAr: 'ترجع 0' },
                    { text: 'Compilation error', textAr: 'خطأ ترجمة' },
                    { text: 'Undefined behavior', textAr: 'سلوك غير محدد' },
                    { text: 'Returns -1', textAr: 'ترجع -1' }
                ],
                correct: 2,
                explanation: `C++ does not check array bounds. Out-of-bounds access is undefined behavior.`,
                explanationAr: `C++ لا تتحقق من حدود المصفوفة. الوصول خارج الحدود سلوك غير محدد.`
            },
            {
                id: 'q8_3',
                question: 'How to declare a 2D array with 3 rows and 4 columns?',
                questionAr: 'كيف تعلن مصفوفة ثنائية الأبعاد بـ 3 صفوف و4 أعمدة؟',
                options: [
                    { text: 'int arr[4][3];', textAr: 'int arr[4][3];' },
                    { text: 'int arr[3][4];', textAr: 'int arr[3][4];' },
                    { text: 'int arr[3,4];', textAr: 'int arr[3,4];' },
                    { text: 'int arr(3)(4);', textAr: 'int arr(3)(4);' }
                ],
                correct: 1,
                explanation: `2D arrays: type name[rows][cols]. First index = rows, second = columns.`,
                explanationAr: `المصفوفات ثنائية: type name[rows][cols].`
            },
            {
                id: 'q8_4',
                question: 'When passing array to function, what is passed?',
                questionAr: 'ماذا يُمرر عند تمرير مصفوفة لدالة؟',
                options: [
                    { text: 'A copy', textAr: 'نسخة' },
                    { text: 'The size', textAr: 'الحجم' },
                    { text: 'A pointer to first element', textAr: 'مؤشر للعنصر الأول' },
                    { text: 'Nothing', textAr: 'لا شيء' }
                ],
                correct: 2,
                explanation: `Arrays decay to pointers when passed to functions — the address of the first element.`,
                explanationAr: `المصفوفات تتحول لمؤشرات عند تمريرها للدوال.`
            },
            {
                id: 'q8_5',
                question: 'What does int arr[5] = {0}; do?',
                questionAr: 'ماذا يفعل int arr[5] = {0}; ؟',
                options: [
                    { text: 'Sets only first to 0', textAr: 'تعيّن الأول فقط' },
                    { text: 'Sets all elements to 0', textAr: 'تعيّن الكل إلى 0' },
                    { text: 'Creates size-0 array', textAr: 'مصفوفة بحجم 0' },
                    { text: 'Error', textAr: 'خطأ' }
                ],
                correct: 1,
                explanation: `{0} sets first element to 0, remaining are auto-initialized to 0.`,
                explanationAr: `{0} تهيئ الأول بـ 0 والباقي تلقائياً.`
            }
        ]
},

// Section 9: Strings
section9: {
    id: 'section9',
        title: 'Strings',
            titleAr: 'النصوص',
                iconName: 'type',
                    duration: '60-90 min',

                        theory: [
                            {
                                heading: 'What are Strings?',
                                headingAr: 'ما هي النصوص؟',
                                content: `Strings are sequences of characters. C++ has two types:\n\n1. C-strings: char arrays ending with '\\0' (null terminator) — old style, harder to use\n2. std::string: modern C++ string class from <string> — easier, safer, recommended\n\nWe focus on std::string. It handles memory automatically, supports comparison with ==, concatenation with +, and has many useful methods.`,
                                contentAr: `النصوص هي تسلسلات من الحروف. C++ لديها نوعان:\n\n1. C-strings: مصفوفات char تنتهي بـ '\\0' — نمط قديم\n2. std::string: صنف نصوص C++ الحديث من <string> — أسهل وأأمن\n\nنركز على std::string.`,
                            },
                            {
                                heading: 'String Operations',
                                headingAr: 'عمليات النصوص',
                                content: `Essential string operations:\n• length() or size() — get number of characters\n• + — concatenate (join) strings\n• == , != , < , > — compare strings (alphabetically)\n• [] — access individual character by index\n• substr(pos, len) — extract substring\n• find(str) — search for substring, returns position or string::npos\n• append(str) — add to end\n• insert(pos, str) — insert at position\n• erase(pos, len) — remove characters\n• replace(pos, len, str) — replace portion`,
                                contentAr: `عمليات النصوص الأساسية:\n• length() أو size() — عدد الحروف\n• + — ربط النصوص\n• == — مقارنة النصوص\n• [] — الوصول لحرف بالفهرس\n• substr() — استخراج نص فرعي\n• find() — البحث عن نص فرعي`,
                            },
                            {
                                heading: 'Reading Strings: cin vs getline',
                                headingAr: 'قراءة النصوص: cin مقابل getline',
                                content: `cin >> str reads ONE word (stops at space).\ngetline(cin, str) reads the ENTIRE line (including spaces).\n\nIMPORTANT: If you use cin >> before getline(), you must call cin.ignore() first to clear the leftover newline character!\n\nExample:\ncin >> age;         // reads number\ncin.ignore();       // clear the newline\ngetline(cin, name); // now reads the full line`,
                                contentAr: `cin >> str تقرأ كلمة واحدة (تتوقف عند المسافة).\ngetline(cin, str) تقرأ السطر كاملاً (بما فيه المسافات).\n\nمهم: إذا استخدمت cin >> قبل getline()، يجب استدعاء cin.ignore() أولاً!`,
                            },
                            {
                                heading: 'Character Functions',
                                headingAr: 'دوال الحروف',
                                content: `Individual characters can be manipulated with <cctype> functions:\n• toupper(c) — convert to uppercase\n• tolower(c) — convert to lowercase\n• isalpha(c) — is it a letter?\n• isdigit(c) — is it a digit?\n• isspace(c) — is it whitespace?\n• isalnum(c) — is it letter or digit?\n\nThese work on single chars. Loop through string to apply to all characters.`,
                                contentAr: `الحروف المفردة يمكن معالجتها بدوال <cctype>:\n• toupper(c) — تحويل لحرف كبير\n• tolower(c) — تحويل لحرف صغير\n• isalpha(c) — هل هو حرف؟\n• isdigit(c) — هل هو رقم؟`,
                            }
                        ],

                            codeExamples: [
                                {
                                    title: 'String Basics & Operations',
                                    titleAr: 'أساسيات وعمليات النصوص',
                                    code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string name = "Ahmed";
    string city = "Cairo";
    
    // Length
    cout << "Length: " << name.length() << endl;  // 5
    
    // Concatenation
    string greeting = "Hello, " + name + " from " + city + "!";
    cout << greeting << endl;
    
    // Access characters
    cout << "First: " << name[0] << endl;     // A
    cout << "Last: " << name[name.length()-1] << endl;  // d
    
    // Comparison
    if (name == "Ahmed") cout << "Match!" << endl;
    if (name < city) cout << name << " comes before " << city << endl;
    
    // Substring and find
    string text = "Hello World";
    cout << text.substr(6, 5) << endl;   // World
    
    int pos = text.find("World");
    if (pos != string::npos) {
        cout << "Found at position: " << pos << endl;  // 6
    }
    
    return 0;
}`,
                                    explanation: `std::string is much easier than C-strings:\n• Use + to join strings\n• Compare with == (case-sensitive)\n• Access characters like arrays with []\n• substr(start, length) extracts a portion\n• find() returns position or string::npos if not found`,
                                    explanationAr: `std::string أسهل بكثير من C-strings. استخدم + للربط، == للمقارنة، [] للوصول للحروف.`
                                },
                                {
                                    title: 'getline & String Manipulation',
                                    titleAr: 'getline ومعالجة النصوص',
                                    code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string fullName;
    int age;
    
    cout << "Enter age: ";
    cin >> age;
    cin.ignore();  // IMPORTANT: clear newline before getline!
    
    cout << "Enter full name: ";
    getline(cin, fullName);  // Reads entire line with spaces
    
    cout << "Hello, " << fullName << "! You are " << age << endl;
    
    // String manipulation
    string text = "Hello World";
    
    // Convert to uppercase
    for (int i = 0; i < text.length(); i++) {
        text[i] = toupper(text[i]);
    }
    cout << text << endl;  // HELLO WORLD
    
    // Count specific character
    int spaceCount = 0;
    for (int i = 0; i < text.length(); i++) {
        if (text[i] == ' ') spaceCount++;
    }
    cout << "Spaces: " << spaceCount << endl;
    
    // Replace
    string msg = "I love C";
    msg.replace(7, 1, "C++");
    cout << msg << endl;  // I love C++
    
    return 0;
}`,
                                    explanation: `Key points:\n• cin.ignore() is critical after cin >> before getline()\n• Loop through characters for transformations\n• toupper()/tolower() works on single chars\n• replace(pos, len, newStr) modifies string in place`,
                                    explanationAr: `نقاط رئيسية:\n• cin.ignore() ضروري بعد cin >> قبل getline()\n• استخدم حلقة للتحويلات على الحروف`
                                },
                                {
                                    title: 'Advanced String Operations',
                                    titleAr: 'عمليات النصوص المتقدمة',
                                    code: `#include <iostream>
#include <string>
using namespace std;

// Count words in a string
int countWords(string s) {
    int count = 0;
    bool inWord = false;
    for (int i = 0; i < s.length(); i++) {
        if (s[i] != ' ' && !inWord) {
            count++;
            inWord = true;
        } else if (s[i] == ' ') {
            inWord = false;
        }
    }
    return count;
}

// Check if palindrome
bool isPalindrome(string s) {
    int left = 0, right = s.length() - 1;
    while (left < right) {
        if (tolower(s[left]) != tolower(s[right])) return false;
        left++;
        right--;
    }
    return true;
}

int main() {
    cout << countWords("Hello World C++") << " words" << endl;  // 3
    
    cout << "radar: " << (isPalindrome("radar") ? "Yes" : "No") << endl;
    cout << "Racecar: " << (isPalindrome("Racecar") ? "Yes" : "No") << endl;
    cout << "hello: " << (isPalindrome("hello") ? "Yes" : "No") << endl;
    
    // String to number
    string numStr = "42";
    int num = stoi(numStr);  // String to int
    cout << num + 8 << endl;  // 50
    
    // Number to string
    string result = to_string(3.14);
    cout << "Pi: " << result << endl;
    
    return 0;
}`,
                                    explanation: `Advanced techniques:\n• Word counting with state tracking (inWord flag)\n• Palindrome check: compare from both ends, case-insensitive\n• stoi() converts string to int, stod() to double\n• to_string() converts numbers to strings`,
                                    explanationAr: `تقنيات متقدمة:\n• عد الكلمات بتتبع الحالة\n• فحص التناظر: مقارنة من الطرفين\n• stoi() تحول نص لعدد، to_string() تحول عدد لنص`
                                }
                            ],

                                commonMistakes: [
                                    {
                                        title: 'cin vs getline Confusion',
                                        titleAr: 'الخلط بين cin و getline',
                                        wrong: `int age;
string name;
cin >> age;
getline(cin, name);  // SKIPPED! Reads empty line`,
                                        correct: `int age;
string name;
cin >> age;
cin.ignore();        // Clear the leftover newline!
getline(cin, name);  // Now works correctly`,
                                        explanation: `After cin >>, a newline character '\\n' remains in the buffer. getline() reads it as an empty line. Always call cin.ignore() to clear it before using getline().`,
                                        explanationAr: `بعد cin >>، يبقى حرف سطر جديد في المخزن المؤقت. getline() تقرأه كسطر فارغ. استخدم cin.ignore() دائماً.`
                                    },
                                    {
                                        title: 'String Comparison with = Instead of ==',
                                        titleAr: 'مقارنة النصوص بـ = بدل ==',
                                        wrong: `if (name = "Ahmed") {  // WRONG! = is assignment, not comparison!
    cout << "Found";
}`,
                                        correct: `if (name == "Ahmed") {  // Correct! == for comparison
    cout << "Found";
}`,
                                        explanation: `= is assignment (sets the value), == is comparison (checks equality). This is a common bug — the code compiles but doesn't work as expected.`,
                                        explanationAr: `= هو تعيين (يغير القيمة)، == هو مقارنة (يتحقق من التساوي). هذا خطأ شائع.`
                                    }
                                ],

                                    advancedTopics: {
        intro: `Master these string techniques for competitive programming and real-world applications.`,
            introAr: `أتقن تقنيات النصوص هذه للبرمجة التنافسية والتطبيقات الحقيقية.`,
                topics: [
                    {
                        title: 'String Algorithms',
                        titleAr: 'خوارزميات النصوص',
                        explanation: `Common string algorithms:\n• Reverse a string: swap from both ends\n• Check palindrome: compare chars from outside in\n• Count vowels/consonants: check each char\n• Remove duplicates: track seen characters\n• Caesar cipher: shift each letter by fixed amount`,
                        explanationAr: `خوارزميات النصوص الشائعة: عكس النص، فحص التناظر، عد حروف العلة.`,
                        example: `// Caesar Cipher - shift each letter
string encrypt(string text, int shift) {
    for (int i = 0; i < text.length(); i++) {
        if (isalpha(text[i])) {
            char base = isupper(text[i]) ? 'A' : 'a';
            text[i] = (text[i] - base + shift) % 26 + base;
        }
    }
    return text;
}
// encrypt("Hello", 3) → "Khoor"`
                    },
                    {
                        title: 'Parsing and Tokenizing',
                        titleAr: 'التحليل والتقسيم',
                        explanation: `Parsing means extracting meaningful data from strings. Common tasks:\n• Split by delimiter (comma, space)\n• Extract numbers from text\n• Validate input format (email, phone)\n\nUse find() + substr() for manual parsing, or stringstream for splitting by whitespace.`,
                        explanationAr: `التحليل يعني استخراج بيانات ذات معنى من النصوص.`,
                        example: `// Split string by comma
string csv = "Ahmed,25,Cairo,Egypt";
int pos;
while ((pos = csv.find(",")) != string::npos) {
    cout << csv.substr(0, pos) << endl;
    csv.erase(0, pos + 1);
}
cout << csv << endl;  // Last token`
                    }
                ]
    },

    practice: [
        {
            id: 'p9_1',
            title: 'Reverse String',
            titleAr: 'عكس النص',
            difficulty: 2,
            description: `Take a string and print it reversed.`,
            descriptionAr: `خذ نصاً واطبعه معكوساً.`,
            starterCode: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string text = "Hello";\n    // Print reversed\n    return 0;\n}`,
            solution: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string text = "Hello";\n    for (int i = text.length()-1; i >= 0; i--)\n        cout << text[i];\n    cout << endl;  // olleH\n    return 0;\n}`,
            hints: ['Loop from end to start', 'text.length()-1 is last index', 'Print each character']
        },
        {
            id: 'p9_2',
            title: 'Count Vowels',
            titleAr: 'عد حروف العلة',
            difficulty: 2,
            description: `Count the number of vowels (a,e,i,o,u) in a string.`,
            descriptionAr: `احسب عدد حروف العلة في نص.`,
            starterCode: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string text = "Hello World";\n    // Count vowels\n    return 0;\n}`,
            solution: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string text = "Hello World";\n    int count = 0;\n    for (int i = 0; i < text.length(); i++) {\n        char c = tolower(text[i]);\n        if (c=='a'||c=='e'||c=='i'||c=='o'||c=='u') count++;\n    }\n    cout << "Vowels: " << count << endl;\n    return 0;\n}`,
            hints: ['Use tolower() for case', 'Check a,e,i,o,u', 'Increment count']
        },
        {
            id: 'p9_3',
            title: 'Palindrome Check',
            titleAr: 'فحص المتناظر',
            difficulty: 3,
            description: `Check if a string is a palindrome.`,
            descriptionAr: `تحقق إذا كان النص متناظراً.`,
            starterCode: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string text = "radar";\n    // Check if palindrome\n    return 0;\n}`,
            solution: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string text = "radar";\n    bool isPalin = true;\n    int len = text.length();\n    for (int i = 0; i < len/2; i++)\n        if (text[i] != text[len-1-i]) { isPalin = false; break; }\n    cout << text << (isPalin ? " is" : " is NOT") << " a palindrome" << endl;\n    return 0;\n}`,
            hints: ['Compare first with last', 'Loop halfway', 'Break on mismatch']
        },
        {
            id: 'p9_4',
            title: 'Word Counter',
            titleAr: 'عداد الكلمات',
            difficulty: 2,
            description: `Count the number of words in a sentence.`,
            descriptionAr: `احسب عدد الكلمات في جملة.`,
            starterCode: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string sentence = "Hello world this is C++";\n    // Count words\n    return 0;\n}`,
            solution: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string sentence = "Hello world this is C++";\n    int count = 1;\n    for (int i = 0; i < sentence.length(); i++)\n        if (sentence[i] == ' ') count++;\n    cout << "Words: " << count << endl;\n    return 0;\n}`,
            hints: ['Count spaces and add 1', 'Start with 1', 'Each space separates a word']
        },
        {
            id: 'p9_5',
            title: 'To Uppercase',
            titleAr: 'تحويل لحروف كبيرة',
            difficulty: 2,
            description: `Convert a string to all uppercase letters.`,
            descriptionAr: `حول نصاً إلى حروف كبيرة كلها.`,
            starterCode: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string text = "Hello World";\n    // Convert to uppercase\n    return 0;\n}`,
            solution: `#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string text = "Hello World";\n    for (int i = 0; i < text.length(); i++)\n        text[i] = toupper(text[i]);\n    cout << text << endl;\n    return 0;\n}`,
            hints: ['Use toupper() on each char', 'Modify string in place', 'Loop all characters']
        }
    ],

        mcq: [
            {
                id: 'q9_1',
                question: 'How do you get string length?',
                questionAr: 'كيف تحصل على طول النص؟',
                options: [
                    { text: 'str.len()', textAr: 'str.len()' },
                    { text: 'str.length()', textAr: 'str.length()' },
                    { text: 'length(str)', textAr: 'length(str)' },
                    { text: 'str.count()', textAr: 'str.count()' }
                ],
                correct: 1,
                explanation: `Use str.length() or str.size() for number of characters.`,
                explanationAr: `استخدم str.length() أو str.size().`
            },
            {
                id: 'q9_2',
                question: 'What does getline(cin, str) do?',
                questionAr: 'ماذا تفعل getline(cin, str)؟',
                options: [
                    { text: 'Reads one word', textAr: 'تقرأ كلمة واحدة' },
                    { text: 'Reads entire line with spaces', textAr: 'تقرأ السطر كاملاً مع المسافات' },
                    { text: 'Reads one character', textAr: 'تقرأ حرفاً واحداً' },
                    { text: 'Reads a number', textAr: 'تقرأ رقماً' }
                ],
                correct: 1,
                explanation: `getline() reads the entire line including spaces, unlike cin >> which stops at whitespace.`,
                explanationAr: `getline() تقرأ السطر كاملاً بما فيه المسافات.`
            },
            {
                id: 'q9_3',
                question: 'What does string::npos mean?',
                questionAr: 'ماذا تعني string::npos؟',
                options: [
                    { text: 'Position 0', textAr: 'الموضع 0' },
                    { text: 'Last position', textAr: 'الموضع الأخير' },
                    { text: 'Not found', textAr: 'غير موجود' },
                    { text: 'Null position', textAr: 'موضع فارغ' }
                ],
                correct: 2,
                explanation: `string::npos is returned by find() when the substring is not found. It equals the maximum value of size_t.`,
                explanationAr: `string::npos تُرجع من find() عندما لا يُعثر على النص الفرعي.`
            },
            {
                id: 'q9_4',
                question: 'Why use cin.ignore() before getline()?',
                questionAr: 'لماذا نستخدم cin.ignore() قبل getline()؟',
                options: [
                    { text: 'To speed up input', textAr: 'لتسريع الإدخال' },
                    { text: 'To clear leftover newline', textAr: 'لمسح السطر الجديد المتبقي' },
                    { text: 'To ignore errors', textAr: 'لتجاهل الأخطاء' },
                    { text: 'Not needed', textAr: 'غير مطلوب' }
                ],
                correct: 1,
                explanation: `After cin >>, a newline remains in buffer. cin.ignore() removes it so getline() reads correctly.`,
                explanationAr: `بعد cin >>، يبقى سطر جديد في المخزن المؤقت. cin.ignore() تزيله.`
            },
            {
                id: 'q9_5',
                question: 'Which header is needed for strings?',
                questionAr: 'أي ملف ترويسة مطلوب للنصوص؟',
                options: [
                    { text: '<iostream>', textAr: '<iostream>' },
                    { text: '<text>', textAr: '<text>' },
                    { text: '<string>', textAr: '<string>' },
                    { text: '<chars>', textAr: '<chars>' }
                ],
                correct: 2,
                explanation: `<string> is required for std::string.`,
                explanationAr: `<string> مطلوب لـ std::string.`
            }
        ]
},

// Section 10: Pointers Basics
section10: {
    id: 'section10',
        title: 'Pointers Basics',
            titleAr: 'أساسيات المؤشرات',
                iconName: 'target',
                    duration: '90-120 min',

                        theory: [
                            {
                                heading: 'What are Pointers?',
                                headingAr: 'ما هي المؤشرات؟',
                                content: `A pointer is a variable that stores a MEMORY ADDRESS instead of a regular value.\n\nEvery variable in your program lives at a specific address in RAM. A pointer holds that address.\n\nWhy use pointers?\n• Modify original variables in functions (pass by reference)\n• Dynamic memory allocation (create data at runtime)\n• Efficient handling of large data (pass address instead of copying)\n• Build advanced data structures (linked lists, trees, graphs)`,
                                contentAr: `المؤشر هو متغير يخزن عنوان ذاكرة بدلاً من قيمة عادية.\n\nكل متغير في برنامجك يعيش في عنوان محدد في الذاكرة RAM. المؤشر يحمل ذلك العنوان.\n\nلماذا نستخدم المؤشرات؟\n• تعديل المتغيرات الأصلية في الدوال\n• تخصيص الذاكرة الديناميكي\n• معالجة فعالة للبيانات الكبيرة`,
                            },
                            {
                                heading: 'Pointer Syntax',
                                headingAr: 'بناء جملة المؤشرات',
                                content: `Two key operators:\n• & (address-of): gets the memory address of a variable — &x gives address of x\n• * (dereference): accesses the value AT the address — *ptr gives value at the address stored in ptr\n\nDeclaration:\nint x = 10;\nint *ptr = &x;   // ptr stores the address of x\n\nNow:\n• ptr holds the ADDRESS of x (e.g., 0x7fff5a)\n• *ptr gives the VALUE at that address (10)\n• Changing *ptr changes x!`,
                                contentAr: `عاملان مهمان:\n• & (عنوان): يحصل على عنوان الذاكرة لمتغير\n• * (إلغاء المرجع): يصل للقيمة في العنوان\n\nint x = 10;\nint *ptr = &x;   // ptr يخزن عنوان x\n\n• ptr يحمل عنوان x\n• *ptr يعطي القيمة في ذلك العنوان (10)\n• تغيير *ptr يغير x!`,
                            },
                            {
                                heading: 'Null Pointers',
                                headingAr: 'المؤشرات الفارغة',
                                content: `A pointer should always point to valid memory or be set to nullptr.\n\nint *ptr = nullptr;  // Points to nothing (safe)\n\nDereferencing nullptr crashes your program! Always check:\nif (ptr != nullptr) {\n    cout << *ptr;  // Safe to use\n}\n\nnullptr (C++11) is preferred over NULL or 0 for type safety.`,
                                contentAr: `المؤشر يجب أن يشير دائماً لذاكرة صالحة أو يُعيَّن لـ nullptr.\n\nint *ptr = nullptr;  // لا يشير لشيء (آمن)\n\nإلغاء مرجع nullptr يُنهي البرنامج! تحقق دائماً.`,
                            },
                            {
                                heading: 'Pointer Arithmetic',
                                headingAr: 'حساب المؤشرات',
                                content: `You can do math with pointers:\n• ptr + 1 moves to the NEXT element (not next byte — it moves by sizeof(type) bytes)\n• ptr - 1 moves to the previous element\n• ptr++ increments the pointer\n\nThis is especially useful with arrays:\nint arr[5] = {10, 20, 30, 40, 50};\nint *p = arr;  // Points to arr[0]\n\n*p → 10, *(p+1) → 20, *(p+2) → 30`,
                                contentAr: `يمكنك إجراء حسابات مع المؤشرات:\n• ptr + 1 ينتقل للعنصر التالي\n• ptr - 1 ينتقل للعنصر السابق\n\nهذا مفيد خاصة مع المصفوفات.`,
                            },
                            {
                                heading: 'Pointers and Arrays',
                                headingAr: 'المؤشرات والمصفوفات',
                                content: `Arrays and pointers are closely related:\n• Array name IS a pointer to the first element: arr == &arr[0]\n• arr[i] is same as *(arr + i)\n• When you pass an array to a function, you're really passing a pointer\n\nThis is why functions can modify array elements — they have the address, not a copy!`,
                                contentAr: `المصفوفات والمؤشرات مرتبطة ارتباطاً وثيقاً:\n• اسم المصفوفة هو مؤشر للعنصر الأول\n• arr[i] هو نفس *(arr + i)\n• عند تمرير مصفوفة لدالة، أنت تمرر مؤشراً فعلاً`,
                            }
                        ],

                            codeExamples: [
                                {
                                    title: 'Pointer Basics',
                                    titleAr: 'أساسيات المؤشرات',
                                    code: `#include <iostream>
using namespace std;

int main() {
    int x = 42;
    int *ptr = &x;  // ptr stores address of x
    
    cout << "Value of x:     " << x << endl;     // 42
    cout << "Address of x:   " << &x << endl;    // 0x7fff...
    cout << "ptr holds:      " << ptr << endl;   // Same address
    cout << "Value at ptr:   " << *ptr << endl;  // 42
    
    // Modify x through pointer
    *ptr = 100;
    cout << "x is now: " << x << endl;  // 100!
    
    // Pointer to different types
    double pi = 3.14;
    double *dPtr = &pi;
    cout << "Pi: " << *dPtr << endl;
    
    // Null pointer
    int *safePtr = nullptr;
    if (safePtr != nullptr) {
        cout << *safePtr << endl;
    } else {
        cout << "Pointer is null — safe!" << endl;
    }
    
    return 0;
}`,
                                    explanation: `• & gets the address of a variable\n• * dereferences — accesses value at the address\n• Changing *ptr changes the original variable\n• Always initialize pointers (use nullptr if no target yet)\n• Check for nullptr before dereferencing`,
                                    explanationAr: `• & تحصل على عنوان المتغير\n• * تصل للقيمة في العنوان\n• تغيير *ptr يغير المتغير الأصلي\n• هيّئ المؤشرات دائماً`
                                },
                                {
                                    title: 'Pointers with Arrays & Functions',
                                    titleAr: 'المؤشرات مع المصفوفات والدوال',
                                    code: `#include <iostream>
using namespace std;

// Function using pointer to modify value
void doubleIt(int *ptr) {
    *ptr = *ptr * 2;
}

// Array traversal with pointers
void printArray(int *arr, int size) {
    for (int i = 0; i < size; i++) {
        cout << *(arr + i) << " ";  // Same as arr[i]
    }
    cout << endl;
}

int main() {
    // Pointer with function
    int num = 5;
    doubleIt(&num);
    cout << "Doubled: " << num << endl;  // 10
    
    // Pointer arithmetic with arrays
    int arr[] = {10, 20, 30, 40, 50};
    int *p = arr;  // Points to arr[0]
    
    cout << *p << endl;       // 10
    cout << *(p + 1) << endl; // 20
    cout << *(p + 4) << endl; // 50
    
    p++;  // Now points to arr[1]
    cout << *p << endl;  // 20
    
    // Print using pointer function
    printArray(arr, 5);  // 10 20 30 40 50
    
    return 0;
}`,
                                    explanation: `Arrays and pointers are interchangeable:\n• arr[i] == *(arr + i)\n• Array name decays to pointer to first element\n• Pointer arithmetic moves by sizeof(type) bytes\n\nPassing &variable to a function with pointer parameter lets you modify the original.`,
                                    explanationAr: `المصفوفات والمؤشرات قابلة للتبادل:\n• arr[i] == *(arr + i)\n• اسم المصفوفة يتحول لمؤشر للعنصر الأول`
                                },
                                {
                                    title: 'Dynamic Memory (new/delete)',
                                    titleAr: 'الذاكرة الديناميكية (new/delete)',
                                    code: `#include <iostream>
using namespace std;

int main() {
    // Dynamic single variable
    int *p = new int;    // Allocate memory for one int
    *p = 42;
    cout << "Dynamic int: " << *p << endl;
    delete p;  // Free memory!
    
    // Dynamic array
    int size;
    cout << "Array size: ";
    cin >> size;
    
    int *arr = new int[size];  // Allocate array at runtime!
    
    // Fill array
    for (int i = 0; i < size; i++) {
        arr[i] = (i + 1) * 10;
    }
    
    // Print
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    delete[] arr;  // Free array memory!
    
    return 0;
}`,
                                    explanation: `Dynamic memory lets you create data at runtime:\n• new allocates memory on the heap\n• delete frees single variable memory\n• delete[] frees array memory\n\nALWAYS delete what you new! Forgetting = memory leak.\nDynamic arrays solve the "variable size" problem.`,
                                    explanationAr: `الذاكرة الديناميكية تسمح بإنشاء بيانات وقت التشغيل:\n• new تخصص ذاكرة\n• delete تحرر ذاكرة\n• delete[] تحرر ذاكرة مصفوفة\n\nاحذف دائماً ما خصصته بـ new!`
                                }
                            ],

                                commonMistakes: [
                                    {
                                        title: 'Uninitialized Pointer (Dangling)',
                                        titleAr: 'مؤشر غير مهيأ (معلق)',
                                        wrong: `int *ptr;        // Uninitialized! Points to random memory
*ptr = 42;       // CRASH! Writing to random address`,
                                        correct: `int x = 42;
int *ptr = &x;   // Points to valid memory
// OR
int *ptr = nullptr;  // Explicitly null — safe`,
                                        explanation: `Uninitialized pointers contain garbage addresses. Dereferencing them causes crashes or corruption. Always initialize to a valid address or nullptr.`,
                                        explanationAr: `المؤشرات غير المهيأة تحتوي عناوين عشوائية. إلغاء مرجعها يسبب انهيار. هيّئ دائماً لعنوان صالح أو nullptr.`
                                    },
                                    {
                                        title: 'Forgetting delete (Memory Leak)',
                                        titleAr: 'نسيان delete (تسريب ذاكرة)',
                                        wrong: `void process() {
    int *arr = new int[1000];
    // ... use arr ...
    // Forgot delete[]! Memory leaked!
}`,
                                        correct: `void process() {
    int *arr = new int[1000];
    // ... use arr ...
    delete[] arr;  // Always free!
}`,
                                        explanation: `Every new must have a matching delete. Memory leaks accumulate over time and can crash your program. Use delete for single variables, delete[] for arrays.`,
                                        explanationAr: `كل new يجب أن يكون لها delete مطابق. تسريبات الذاكرة تتراكم وقد تنهي البرنامج.`
                                    }
                                ],

                                    advancedTopics: {
        intro: `Pointers are the foundation of advanced C++ programming. Let's go deeper.`,
            introAr: `المؤشرات هي أساس البرمجة المتقدمة في C++. دعنا نتعمق أكثر.`,
                topics: [
                    {
                        title: 'Memory Model: Stack vs Heap',
                        titleAr: 'نموذج الذاكرة: المكدس مقابل الكومة',
                        explanation: `Program memory has two main areas:\n\nStack: for local variables, function calls. Automatic cleanup. Limited size. Fast.\nHeap: for dynamic allocation (new/delete). Manual cleanup. Large. Slower.\n\nLocal variables → Stack (auto cleanup)\nnew → Heap (you must delete)`,
                        explanationAr: `ذاكرة البرنامج لها منطقتان:\nالمكدس: للمتغيرات المحلية. تنظيف تلقائي. حجم محدود.\nالكومة: للتخصيص الديناميكي. تنظيف يدوي. حجم كبير.`,
                        example: `int x = 10;           // Stack
int *p = new int(20);  // Heap

// Stack variables auto-cleaned when function ends
// Heap variables need manual delete
delete p;`
                    },
                    {
                        title: 'Dynamic Arrays',
                        titleAr: 'المصفوفات الديناميكية',
                        explanation: `Dynamic arrays allow runtime sizing — the size is determined when the program runs, not at compile time.\n\nint *arr = new int[n]; creates an array of n integers on the heap.\nDon't forget delete[] arr when done!`,
                        explanationAr: `المصفوفات الديناميكية تسمح بالتحجيم وقت التشغيل.\n\nint *arr = new int[n]; تنشئ مصفوفة من n عنصر على الكومة.`,
                        example: `int n;
cin >> n;
int *arr = new int[n];

for (int i = 0; i < n; i++)
    arr[i] = i * 10;

for (int i = 0; i < n; i++)
    cout << arr[i] << " ";

delete[] arr;  // Free memory!`
                    }
                ]
    },

    practice: [
        {
            id: 'p10_1',
            title: 'Swap with Pointers',
            titleAr: 'التبديل بالمؤشرات',
            difficulty: 2,
            description: `Write a swap function using pointers to swap two integers.`,
            descriptionAr: `اكتب دالة تبديل باستخدام المؤشرات لتبديل عددين.`,
            starterCode: `#include <iostream>\nusing namespace std;\n\nvoid swap(int *a, int *b) {\n    // Your code here\n}\n\nint main() {\n    int x = 5, y = 10;\n    swap(&x, &y);\n    cout << x << ", " << y << endl;  // 10, 5\n    return 0;\n}`,
            solution: `#include <iostream>\nusing namespace std;\n\nvoid swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\n\nint main() {\n    int x = 5, y = 10;\n    swap(&x, &y);\n    cout << x << ", " << y << endl;\n    return 0;\n}`,
            hints: ['Use *a and *b to access values', 'Store *a in temp', 'Pass addresses with &']
        },
        {
            id: 'p10_2',
            title: 'Pointer Arithmetic',
            titleAr: 'حساب المؤشرات',
            difficulty: 2,
            description: `Use pointer arithmetic to print all elements of an array.`,
            descriptionAr: `استخدم حساب المؤشرات لطباعة كل عناصر المصفوفة.`,
            starterCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int *ptr = arr;\n    // Print using pointer arithmetic\n    return 0;\n}`,
            solution: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n    int *ptr = arr;\n    for (int i = 0; i < 5; i++) {\n        cout << *(ptr + i) << " ";\n    }\n    return 0;\n}`,
            hints: ['Use *(ptr + i)', 'arr name is already a pointer', 'Loop through all elements']
        },
        {
            id: 'p10_3',
            title: 'Modify via Pointer',
            titleAr: 'تعديل عبر المؤشر',
            difficulty: 2,
            description: `Use a pointer to double the value of a variable.`,
            descriptionAr: `استخدم مؤشراً لمضاعفة قيمة متغير.`,
            starterCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = 25;\n    int *ptr = &num;\n    // Double num using ptr\n    cout << num << endl;  // Should be 50\n    return 0;\n}`,
            solution: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int num = 25;\n    int *ptr = &num;\n    *ptr = *ptr * 2;\n    cout << num << endl;  // 50\n    return 0;\n}`,
            hints: ['*ptr gives the value', '*ptr = changes original', 'Multiply *ptr by 2']
        },
        {
            id: 'p10_4',
            title: 'Array Sum with Pointer',
            titleAr: 'مجموع المصفوفة بالمؤشر',
            difficulty: 3,
            description: `Write a function that takes a pointer to an array and its size, returns the sum.`,
            descriptionAr: `اكتب دالة تأخذ مؤشراً لمصفوفة وحجمها وترجع المجموع.`,
            starterCode: `#include <iostream>\nusing namespace std;\n\nint arraySum(int *arr, int size) {\n    // Your code here\n}\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    cout << "Sum: " << arraySum(arr, 5) << endl;  // 15\n    return 0;\n}`,
            solution: `#include <iostream>\nusing namespace std;\n\nint arraySum(int *arr, int size) {\n    int sum = 0;\n    for (int i = 0; i < size; i++) {\n        sum += *(arr + i);\n    }\n    return sum;\n}\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    cout << "Sum: " << arraySum(arr, 5) << endl;\n    return 0;\n}`,
            hints: ['Use *(arr + i) or arr[i]', 'Accumulate in sum', 'Pass array name as pointer']
        },
        {
            id: 'p10_5',
            title: 'Find Min/Max with Pointers',
            titleAr: 'إيجاد الأصغر/الأكبر بالمؤشرات',
            difficulty: 3,
            description: `Write a function that uses pointers to find and return the min and max of an array.`,
            descriptionAr: `اكتب دالة تستخدم مؤشرات لإيجاد وإرجاع الأصغر والأكبر في مصفوفة.`,
            starterCode: `#include <iostream>\nusing namespace std;\n\nvoid findMinMax(int *arr, int size, int *min, int *max) {\n    // Your code here\n}\n\nint main() {\n    int arr[] = {3, 7, 1, 9, 4};\n    int min, max;\n    findMinMax(arr, 5, &min, &max);\n    cout << "Min: " << min << ", Max: " << max << endl;\n    return 0;\n}`,
            solution: `#include <iostream>\nusing namespace std;\n\nvoid findMinMax(int *arr, int size, int *min, int *max) {\n    *min = arr[0];\n    *max = arr[0];\n    for (int i = 1; i < size; i++) {\n        if (arr[i] < *min) *min = arr[i];\n        if (arr[i] > *max) *max = arr[i];\n    }\n}\n\nint main() {\n    int arr[] = {3, 7, 1, 9, 4};\n    int min, max;\n    findMinMax(arr, 5, &min, &max);\n    cout << "Min: " << min << ", Max: " << max << endl;\n    return 0;\n}`,
            hints: ['Use pointer params for output', 'Initialize with arr[0]', 'Compare with * to access values']
        }
    ],

        mcq: [
            {
                id: 'q10_1',
                question: 'What does & do with a variable?',
                questionAr: 'ماذا تفعل & مع متغير؟',
                options: [
                    { text: 'Gets its value', textAr: 'تحصل على قيمته' },
                    { text: 'Gets its memory address', textAr: 'تحصل على عنوان ذاكرته' },
                    { text: 'Deletes it', textAr: 'تحذفه' },
                    { text: 'Doubles it', textAr: 'تضاعفه' }
                ],
                correct: 1,
                explanation: `& (address-of operator) returns the memory address where the variable is stored.`,
                explanationAr: `& (عامل العنوان) يُرجع عنوان الذاكرة حيث يُخزن المتغير.`
            },
            {
                id: 'q10_2',
                question: 'What does * do with a pointer?',
                questionAr: 'ماذا تفعل * مع مؤشر؟',
                options: [
                    { text: 'Gets the address', textAr: 'تحصل على العنوان' },
                    { text: 'Multiplies', textAr: 'تضرب' },
                    { text: 'Gets the value at the address', textAr: 'تحصل على القيمة في العنوان' },
                    { text: 'Creates a new pointer', textAr: 'تنشئ مؤشراً جديداً' }
                ],
                correct: 2,
                explanation: `* (dereference) accesses the value stored at the address the pointer holds.`,
                explanationAr: `* (إلغاء المرجع) تصل للقيمة المخزنة في العنوان الذي يحمله المؤشر.`
            },
            {
                id: 'q10_3',
                question: 'What is nullptr?',
                questionAr: 'ما هو nullptr؟',
                options: [
                    { text: 'A pointer to zero', textAr: 'مؤشر للصفر' },
                    { text: 'A pointer that points to nothing', textAr: 'مؤشر لا يشير لشيء' },
                    { text: 'An empty string', textAr: 'نص فارغ' },
                    { text: 'A deleted pointer', textAr: 'مؤشر محذوف' }
                ],
                correct: 1,
                explanation: `nullptr represents a pointer that doesn't point to any valid memory. Always check before dereferencing.`,
                explanationAr: `nullptr يمثل مؤشراً لا يشير لأي ذاكرة صالحة.`
            },
            {
                id: 'q10_4',
                question: 'What does new int[5] do?',
                questionAr: 'ماذا يفعل new int[5]؟',
                options: [
                    { text: 'Creates 5 pointers', textAr: 'ينشئ 5 مؤشرات' },
                    { text: 'Creates stack array', textAr: 'ينشئ مصفوفة على المكدس' },
                    { text: 'Allocates 5 ints on heap', textAr: 'يخصص 5 أعداد على الكومة' },
                    { text: 'Sets array to 5', textAr: 'يعيّن المصفوفة بـ 5' }
                ],
                correct: 2,
                explanation: `new int[5] dynamically allocates memory for 5 integers on the heap. Must be freed with delete[].`,
                explanationAr: `new int[5] تخصص ذاكرة ديناميكياً لـ 5 أعداد على الكومة. يجب تحريرها بـ delete[].`
            },
            {
                id: 'q10_5',
                question: 'If int *p = arr; what is *(p+2)?',
                questionAr: 'إذا int *p = arr; ما هو *(p+2)؟',
                options: [
                    { text: 'arr[0] + 2', textAr: 'arr[0] + 2' },
                    { text: 'arr[2]', textAr: 'arr[2]' },
                    { text: 'Address of arr[2]', textAr: 'عنوان arr[2]' },
                    { text: 'Error', textAr: 'خطأ' }
                ],
                correct: 1,
                explanation: `*(p+2) is equivalent to arr[2] — pointer arithmetic moves by element size.`,
                explanationAr: `*(p+2) تعادل arr[2] — حساب المؤشرات ينتقل بحجم العنصر.`
            }
        ]
},

// Section 11: Structures
section11: {
    id: 'section11',
        title: 'Structures',
            titleAr: 'الهياكل',
                iconName: 'box',
                    duration: '60-90 min',

                        theory: [
                            {
                                heading: 'What are Structures?',
                                headingAr: 'ما هي الهياكل؟',
                                content: `Structures (structs) let you group DIFFERENT data types into one unit. While arrays store multiple values of the same type, structs can store different types together.\n\nReal-world examples:\n• Student: name (string), id (int), gpa (double)\n• Point: x (int), y (int)\n• Car: brand (string), year (int), price (double)\n\nStruct = your own custom data type!`,
                                contentAr: `الهياكل (structs) تسمح لك بتجميع أنواع بيانات مختلفة في وحدة واحدة. بينما المصفوفات تخزن قيم من نفس النوع، الهياكل يمكنها تخزين أنواع مختلفة معاً.\n\nأمثلة: طالب (اسم، رقم، معدل)، نقطة (x, y)، سيارة (ماركة، سنة، سعر).`,
                            },
                            {
                                heading: 'Struct Syntax',
                                headingAr: 'بناء جملة الهيكل',
                                content: `struct StructName {\n    type member1;\n    type member2;\n};  // Don't forget the semicolon!\n\nCreating variables:\nStructName var1;           // Uninitialized\nStructName var2 = {"value", 10, 3.5};  // Brace initialization\n\nAccess members with dot operator: var1.name = "Ahmed";`,
                                contentAr: `struct StructName {\n    type member1;\n    type member2;\n};  // لا تنسَ الفاصلة المنقوطة!\n\nالوصول للأعضاء بعامل النقطة: var1.name = "Ahmed";`,
                            },
                            {
                                heading: 'Arrays of Structures',
                                headingAr: 'مصفوفات من الهياكل',
                                content: `You can create arrays of structs to store collections of complex data:\n\nStudent students[30];  // Array of 30 students\nstudents[0].name = "Ahmed";\nstudents[0].grade = 95.5;\n\nLoop through them just like regular arrays:\nfor (int i = 0; i < count; i++) {\n    cout << students[i].name << endl;\n}`,
                                contentAr: `يمكنك إنشاء مصفوفات من الهياكل لتخزين مجموعات من بيانات معقدة:\n\nStudent students[30];\nstudents[0].name = "Ahmed";`,
                            },
                            {
                                heading: 'Structs with Functions',
                                headingAr: 'الهياكل مع الدوال',
                                content: `Structs can be passed to and returned from functions:\n\n• Pass by value: void print(Student s) — copies the struct\n• Pass by reference: void modify(Student &s) — modifies original\n\nPassing by reference is preferred for large structs to avoid expensive copying.\n\nFunctions can also return structs:\nStudent createStudent(string name, int id) {\n    Student s = {name, id, 0.0};\n    return s;\n}`,
                                contentAr: `الهياكل يمكن تمريرها للدوال وإرجاعها:\n\n• التمرير بالقيمة: void print(Student s) — تنسخ الهيكل\n• التمرير بالمرجع: void modify(Student &s) — تعدل الأصلي\n\nالتمرير بالمرجع مفضل للهياكل الكبيرة.`,
                            },
                            {
                                heading: 'Nested Structures',
                                headingAr: 'الهياكل المتداخلة',
                                content: `Structs can contain other structs:\n\nstruct Date {\n    int day, month, year;\n};\n\nstruct Student {\n    string name;\n    Date birthday;  // Nested struct!\n};\n\nAccess: student.birthday.year = 2000;`,
                                contentAr: `الهياكل يمكن أن تحتوي هياكل أخرى:\n\nstruct Date { int day, month, year; };\nstruct Student { string name; Date birthday; };\n\nالوصول: student.birthday.year = 2000;`,
                            }
                        ],

                            codeExamples: [
                                {
                                    title: 'Basic Struct Usage',
                                    titleAr: 'استخدام الهيكل الأساسي',
                                    code: `#include <iostream>
using namespace std;

struct Student {
    string name;
    int id;
    double gpa;
};

int main() {
    // Create and initialize
    Student s1 = {"Ahmed", 101, 3.8};
    
    // Access members
    cout << "Name: " << s1.name << endl;
    cout << "ID: " << s1.id << endl;
    cout << "GPA: " << s1.gpa << endl;
    
    // Modify members
    s1.gpa = 3.9;
    cout << "Updated GPA: " << s1.gpa << endl;
    
    // Create another
    Student s2;
    s2.name = "Sara";
    s2.id = 102;
    s2.gpa = 3.95;
    
    // Compare
    if (s2.gpa > s1.gpa)
        cout << s2.name << " has higher GPA" << endl;
    
    return 0;
}`,
                                    explanation: `Structs group related data together. Use dot (.) to access/modify members. Variables can be initialized with braces {} or assigned member by member.`,
                                    explanationAr: `الهياكل تجمع بيانات مرتبطة معاً. استخدم النقطة (.) للوصول/التعديل.`
                                },
                                {
                                    title: 'Array of Structs & Functions',
                                    titleAr: 'مصفوفة من الهياكل والدوال',
                                    code: `#include <iostream>
using namespace std;

struct Student {
    string name;
    int id;
    double grade;
};

// Pass by reference to modify
void updateGrade(Student &s, double newGrade) {
    s.grade = newGrade;
}

// Pass by value for read-only
void printStudent(Student s) {
    cout << s.id << ": " << s.name << " - " << s.grade << endl;
}

// Return a struct
Student createStudent(string name, int id) {
    Student s = {name, id, 0.0};
    return s;
}

int main() {
    Student students[3] = {
        {"Ahmed", 101, 89.5},
        {"Sara", 102, 95.0},
        {"Omar", 103, 78.0}
    };
    
    // Print all
    for (int i = 0; i < 3; i++) {
        printStudent(students[i]);
    }
    
    // Find highest grade
    int bestIdx = 0;
    for (int i = 1; i < 3; i++) {
        if (students[i].grade > students[bestIdx].grade)
            bestIdx = i;
    }
    cout << "Best: " << students[bestIdx].name << endl;
    
    // Update using function
    updateGrade(students[2], 85.0);
    cout << "Updated: "; printStudent(students[2]);
    
    return 0;
}`,
                                    explanation: `Array of structs = database-like storage. Pass by reference (&) to modify structs in functions. Functions can create and return structs.`,
                                    explanationAr: `مصفوفة من الهياكل = تخزين شبيه بقاعدة البيانات. استخدم & للتعديل في الدوال.`
                                },
                                {
                                    title: 'Nested Structs',
                                    titleAr: 'الهياكل المتداخلة',
                                    code: `#include <iostream>
using namespace std;

struct Date {
    int day, month, year;
};

struct Address {
    string city, country;
};

struct Employee {
    string name;
    int id;
    double salary;
    Date hireDate;     // Nested!
    Address address;   // Nested!
};

void printEmployee(Employee e) {
    cout << "Name: " << e.name << endl;
    cout << "ID: " << e.id << endl;
    cout << "Salary: $" << e.salary << endl;
    cout << "Hired: " << e.hireDate.day << "/" 
         << e.hireDate.month << "/" << e.hireDate.year << endl;
    cout << "Location: " << e.address.city << ", " 
         << e.address.country << endl;
}

int main() {
    Employee emp = {
        "Ahmed Ali",
        1001,
        5000.0,
        {15, 3, 2023},        // Date
        {"Cairo", "Egypt"}    // Address
    };
    
    printEmployee(emp);
    
    // Modify nested member
    emp.salary *= 1.1;  // 10% raise
    cout << "\\nNew salary: $" << emp.salary << endl;
    
    return 0;
}`,
                                    explanation: `Nested structs model complex real-world relationships. Access with chained dots: emp.hireDate.year. Initialize nested structs with nested braces.`,
                                    explanationAr: `الهياكل المتداخلة تنمذج علاقات العالم الحقيقي المعقدة. الوصول بنقاط متسلسلة: emp.hireDate.year.`
                                }
                            ],

                                commonMistakes: [
                                    {
                                        title: 'Forgetting Semicolon After Struct',
                                        titleAr: 'نسيان الفاصلة المنقوطة بعد الهيكل',
                                        wrong: `struct Point {
    int x, y;
}  // Missing semicolon! Confusing errors`,
                                        correct: `struct Point {
    int x, y;
};  // Semicolon required after closing brace!`,
                                        explanation: `This is unique to structs/classes — you MUST put a semicolon after the closing brace. The error messages from forgetting it are often confusing.`,
                                        explanationAr: `يجب وضع فاصلة منقوطة بعد قوس الإغلاق. رسائل الخطأ من نسيانها غالباً تكون مربكة.`
                                    },
                                    {
                                        title: 'Comparing Structs with ==',
                                        titleAr: 'مقارنة الهياكل بـ ==',
                                        wrong: `Student s1 = {"Ahmed", 101, 3.8};
Student s2 = {"Ahmed", 101, 3.8};
if (s1 == s2) // ERROR! Can't use == on structs directly`,
                                        correct: `// Compare member by member
if (s1.name == s2.name && s1.id == s2.id && s1.gpa == s2.gpa) {
    cout << "Same student" << endl;
}`,
                                        explanation: `C++ doesn't automatically know how to compare structs. You must compare each member individually. (Later, operator overloading lets you define ==.)`,
                                        explanationAr: `C++ لا تعرف تلقائياً كيف تقارن الهياكل. يجب مقارنة كل عضو على حدة.`
                                    }
                                ],

                                    advancedTopics: {
        intro: `Let's explore advanced struct patterns used in professional C++ codebases.`,
            introAr: `دعنا نستكشف أنماط هياكل متقدمة تُستخدم في المشاريع المحترفة.`,
                topics: [
                    {
                        title: 'Struct vs Class Preview',
                        titleAr: 'نظرة مسبقة: Struct مقابل Class',
                        explanation: `Structs are the foundation for C++ classes (OOP). The ONLY difference:\n• struct: members are public by default\n• class: members are private by default\n\nIn practice, structs are used for simple data grouping. Classes add methods, constructors, inheritance. You'll learn classes in OOP topics.`,
                        explanationAr: `الهياكل هي أساس الأصناف في C++. الفرق الوحيد: struct أعضاؤها عامة افتراضياً، class أعضاؤها خاصة.`,
                        example: `// Struct with a method — preview of classes!
struct Rectangle {
    double width, height;
    
    double area() {
        return width * height;
    }
    
    double perimeter() {
        return 2 * (width + height);
    }
};

Rectangle r = {5.0, 3.0};
cout << r.area() << endl;       // 15
cout << r.perimeter() << endl;  // 16`
                    },
                    {
                        title: 'typedef and using with Structs',
                        titleAr: 'typedef و using مع الهياكل',
                        explanation: `typedef creates an alias (shortname) for a type. Useful with structs to avoid typing 'struct' everywhere.\n\nModern C++ uses 'using' instead:\nusing StudentList = Student[100];\nusing Pair = pair<int, int>;`,
                        explanationAr: `typedef تنشئ اسماً مستعاراً لنوع. مفيد لتجنب كتابة 'struct' في كل مكان.\n\nC++ الحديثة تستخدم 'using' بدلاً.`,
                        example: `typedef struct {
    int x, y;
} Point;  // Can now use 'Point' directly

Point p1 = {10, 20};

// Modern C++ equivalent
using Vector2D = struct { double x, y; };
Vector2D v = {3.0, 4.0};`
                    }
                ]
    },

    practice: [
        {
            id: 'p11_1',
            title: 'Person Struct',
            titleAr: 'هيكل شخص',
            difficulty: 1,
            description: `Create a Person struct with name and age. Create a person and display their info.`,
            descriptionAr: `أنشئ هيكل Person باسم وعمر. أنشئ شخصاً وأظهر بياناته.`,
            starterCode: `#include <iostream>\nusing namespace std;\n\n// Define Person struct\n\nint main() {\n    // Create and print a person\n    return 0;\n}`,
            solution: `#include <iostream>\nusing namespace std;\n\nstruct Person {\n    string name;\n    int age;\n};\n\nint main() {\n    Person p = {"Ahmed", 25};\n    cout << p.name << " is " << p.age << " years old" << endl;\n    return 0;\n}`,
            hints: ['Use struct keyword', 'Use dot . to access', 'Initialize with braces']
        },
        {
            id: 'p11_2',
            title: 'Student Record',
            titleAr: 'سجل طالب',
            difficulty: 2,
            description: `Create a Student struct with name, id, and grade. Create 2 students and find who has the higher grade.`,
            descriptionAr: `أنشئ هيكل Student باسم ورقم ودرجة. أنشئ طالبين وأوجد من لديه درجة أعلى.`,
            starterCode: `#include <iostream>\nusing namespace std;\n\n// Define Student struct\n\nint main() {\n    // Create 2 students and compare\n    return 0;\n}`,
            solution: `#include <iostream>\nusing namespace std;\n\nstruct Student {\n    string name;\n    int id;\n    double grade;\n};\n\nint main() {\n    Student s1 = {"Ahmed", 101, 89.5};\n    Student s2 = {"Sara", 102, 95.0};\n    if (s1.grade > s2.grade)\n        cout << s1.name << " has higher grade" << endl;\n    else\n        cout << s2.name << " has higher grade" << endl;\n    return 0;\n}`,
            hints: ['Compare .grade members', 'Use if-else', 'Print winner name']
        },
        {
            id: 'p11_3',
            title: 'Array of Structs',
            titleAr: 'مصفوفة من الهياكل',
            difficulty: 3,
            description: `Create an array of 3 Products (name, price) and find the most expensive one.`,
            descriptionAr: `أنشئ مصفوفة من 3 منتجات (اسم، سعر) وأوجد الأغلى.`,
            starterCode: `#include <iostream>\nusing namespace std;\n\n// Define Product struct\n\nint main() {\n    // Create array and find most expensive\n    return 0;\n}`,
            solution: `#include <iostream>\nusing namespace std;\n\nstruct Product {\n    string name;\n    double price;\n};\n\nint main() {\n    Product products[3] = {{"Phone", 999}, {"Laptop", 1500}, {"Tablet", 599}};\n    int maxIdx = 0;\n    for (int i = 1; i < 3; i++)\n        if (products[i].price > products[maxIdx].price) maxIdx = i;\n    cout << "Most expensive: " << products[maxIdx].name << " $" << products[maxIdx].price << endl;\n    return 0;\n}`,
            hints: ['Loop and track max index', 'Compare .price', 'Print winner']
        },
        {
            id: 'p11_4',
            title: 'Rectangle Struct',
            titleAr: 'هيكل مستطيل',
            difficulty: 2,
            description: `Create a Rectangle struct with width and height. Calculate and display area and perimeter.`,
            descriptionAr: `أنشئ هيكل Rectangle بعرض وارتفاع. احسب وأظهر المساحة والمحيط.`,
            starterCode: `#include <iostream>\nusing namespace std;\n\n// Define Rectangle struct\n\nint main() {\n    // Create rectangle and calculate area/perimeter\n    return 0;\n}`,
            solution: `#include <iostream>\nusing namespace std;\n\nstruct Rectangle {\n    double width, height;\n};\n\nint main() {\n    Rectangle r = {5.0, 3.0};\n    cout << "Area: " << r.width * r.height << endl;\n    cout << "Perimeter: " << 2 * (r.width + r.height) << endl;\n    return 0;\n}`,
            hints: ['Area = width * height', 'Perimeter = 2*(w+h)', 'Use double type']
        },
        {
            id: 'p11_5',
            title: 'Point Distance',
            titleAr: 'مسافة بين نقطتين',
            difficulty: 3,
            description: `Create a Point struct with x,y. Calculate distance between two points.`,
            descriptionAr: `أنشئ هيكل Point بـ x,y. احسب المسافة بين نقطتين.`,
            starterCode: `#include <iostream>\n#include <cmath>\nusing namespace std;\n\n// Define Point struct\n\nint main() {\n    // Create 2 points and find distance\n    return 0;\n}`,
            solution: `#include <iostream>\n#include <cmath>\nusing namespace std;\n\nstruct Point { double x, y; };\n\nint main() {\n    Point p1 = {0, 0}, p2 = {3, 4};\n    double dist = sqrt(pow(p2.x-p1.x, 2) + pow(p2.y-p1.y, 2));\n    cout << "Distance: " << dist << endl;  // 5\n    return 0;\n}`,
            hints: ['Use distance formula', 'sqrt and pow from cmath', 'dx² + dy²']
        }
    ],

        mcq: [
            {
                id: 'q11_1',
                question: 'What is required after the closing brace of a struct?',
                questionAr: 'ما المطلوب بعد قوس إغلاق الهيكل؟',
                options: [
                    { text: 'Colon :', textAr: 'نقطتان :' },
                    { text: 'Semicolon ;', textAr: 'فاصلة منقوطة ;' },
                    { text: 'Nothing', textAr: 'لا شيء' },
                    { text: 'Parentheses ()', textAr: 'أقواس ()' }
                ],
                correct: 1,
                explanation: `Structs (and classes) require a semicolon after the closing brace. Forgetting it causes confusing errors.`,
                explanationAr: `الهياكل تتطلب فاصلة منقوطة بعد قوس الإغلاق.`
            },
            {
                id: 'q11_2',
                question: 'How do you access a struct member?',
                questionAr: 'كيف تصل لعضو في الهيكل؟',
                options: [
                    { text: 'struct->member', textAr: 'struct->member' },
                    { text: 'struct.member', textAr: 'struct.member' },
                    { text: 'struct[member]', textAr: 'struct[member]' },
                    { text: 'struct::member', textAr: 'struct::member' }
                ],
                correct: 1,
                explanation: `Use the dot (.) operator to access members of a struct variable.`,
                explanationAr: `استخدم عامل النقطة (.) للوصول لأعضاء متغير الهيكل.`
            },
            {
                id: 'q11_3',
                question: 'Can a struct contain another struct?',
                questionAr: 'هل يمكن للهيكل أن يحتوي هيكلاً آخر؟',
                options: [
                    { text: 'No', textAr: 'لا' },
                    { text: 'Yes (nested structs)', textAr: 'نعم (هياكل متداخلة)' },
                    { text: 'Only with pointers', textAr: 'فقط بالمؤشرات' },
                    { text: 'Only in classes', textAr: 'فقط في الأصناف' }
                ],
                correct: 1,
                explanation: `Structs can contain other structs as members — this is called nesting.`,
                explanationAr: `الهياكل يمكن أن تحتوي هياكل أخرى كأعضاء — هذا يسمى التداخل.`
            },
            {
                id: 'q11_4',
                question: 'Why pass structs by reference to functions?',
                questionAr: 'لماذا نمرر الهياكل بالمرجع للدوال؟',
                options: [
                    { text: 'Required by syntax', textAr: 'مطلوب بالقواعد' },
                    { text: 'To avoid copying + allow modification', textAr: 'لتجنب النسخ + السماح بالتعديل' },
                    { text: 'For read-only access', textAr: 'للوصول للقراءة فقط' },
                    { text: 'Not recommended', textAr: 'غير مستحسن' }
                ],
                correct: 1,
                explanation: `Passing by reference avoids expensive copying of large structs and allows the function to modify the original.`,
                explanationAr: `التمرير بالمرجع يتجنب النسخ المكلف ويسمح بالتعديل.`
            },
            {
                id: 'q11_5',
                question: 'What is the main difference between struct and class?',
                questionAr: 'ما الفرق الرئيسي بين struct و class؟',
                options: [
                    { text: 'Struct is faster', textAr: 'الهيكل أسرع' },
                    { text: 'Default access: struct=public, class=private', textAr: 'الوصول الافتراضي: struct=عام، class=خاص' },
                    { text: 'Struct cant have functions', textAr: 'الهيكل لا يمكنه احتواء دوال' },
                    { text: 'No difference', textAr: 'لا فرق' }
                ],
                correct: 1,
                explanation: `The only technical difference is default access level: struct members are public, class members are private.`,
                explanationAr: `الفرق التقني الوحيد هو مستوى الوصول الافتراضي: أعضاء struct عامة، أعضاء class خاصة.`
            }
        ]
},

// Section 12: File Handling
section12: {
    id: 'section12',
        title: 'File Handling',
            titleAr: 'التعامل مع الملفات',
                iconName: 'file-text',
                    duration: '60-90 min',

                        theory: [
                            {
                                heading: 'Why File Handling?',
                                headingAr: 'لماذا التعامل مع الملفات؟',
                                content: `Programs lose all data when they close. File handling lets you:\n• Save data permanently (persist between runs)\n• Read configuration and input data\n• Generate reports and output files\n• Log program events for debugging\n\nC++ uses <fstream> library:\n• ofstream — write to files (output file stream)\n• ifstream — read from files (input file stream)\n• fstream — both read and write`,
                                contentAr: `البرامج تفقد كل البيانات عند الإغلاق. التعامل مع الملفات يسمح لك بـ:\n• حفظ البيانات بشكل دائم\n• قراءة بيانات التكوين والإدخال\n• إنشاء التقارير وملفات الإخراج\n\nC++ تستخدم مكتبة <fstream>.`,
                            },
                            {
                                heading: 'File Operations',
                                headingAr: 'عمليات الملفات',
                                content: `Basic workflow:\n1. Open file (create stream object)\n2. Check if file opened successfully\n3. Read or write data\n4. Close file\n\nWriting: ofstream file("name.txt");\nReading: ifstream file("name.txt");\n\nAlways check: if (file.is_open()) { ... }\nAlways close: file.close();`,
                                contentAr: `سير العمل الأساسي:\n1. افتح الملف\n2. تحقق من نجاح الفتح\n3. اقرأ أو اكتب بيانات\n4. أغلق الملف`,
                            },
                            {
                                heading: 'File Modes',
                                headingAr: 'أوضاع الملفات',
                                content: `Files can be opened in different modes:\n• ios::out — write (default for ofstream, overwrites existing)\n• ios::in — read (default for ifstream)\n• ios::app — append (add to end, don't overwrite)\n• ios::ate — open at end\n• ios::trunc — clear file contents on open\n• ios::binary — binary mode\n\nCombine modes with | : fstream file("data.txt", ios::in | ios::out);`,
                                contentAr: `الملفات يمكن فتحها بأوضاع مختلفة:\n• ios::out — كتابة\n• ios::in — قراءة\n• ios::app — إضافة (بدون حذف المحتوى)\n• ios::binary — وضع ثنائي`,
                            },
                            {
                                heading: 'Error Handling with Files',
                                headingAr: 'معالجة الأخطاء مع الملفات',
                                content: `Files can fail to open (wrong path, permissions, disk full). Always check!\n\nMethods to check:\n• file.is_open() — returns true if file opened successfully\n• file.fail() — returns true if last operation failed\n• file.eof() — returns true if end of file reached\n• file.good() — returns true if everything is OK\n\nif (!file.is_open()) {\n    cout << "Error opening file!" << endl;\n    return 1;\n}`,
                                contentAr: `الملفات قد تفشل في الفتح. تحقق دائماً!\n\nطرق التحقق:\n• file.is_open() — ترجع true إذا نجح الفتح\n• file.fail() — ترجع true إذا فشلت العملية الأخيرة\n• file.eof() — ترجع true إذا وصلت لنهاية الملف`,
                            }
                        ],

                            codeExamples: [
                                {
                                    title: 'Writing to a File',
                                    titleAr: 'الكتابة في ملف',
                                    code: `#include <iostream>
#include <fstream>
using namespace std;

int main() {
    // Create and write to file
    ofstream file("output.txt");
    
    if (!file.is_open()) {
        cout << "Error creating file!" << endl;
        return 1;
    }
    
    file << "Hello, File!" << endl;
    file << "Name: Ahmed" << endl;
    file << "Score: " << 95 << endl;
    file << "GPA: " << 3.8 << endl;
    
    file.close();
    cout << "File written successfully!" << endl;
    
    // Append to existing file
    ofstream appendFile("output.txt", ios::app);
    appendFile << "\\nThis line was appended!" << endl;
    appendFile.close();
    
    return 0;
}`,
                                    explanation: `ofstream creates or overwrites a file. Use << just like cout.\nUse ios::app to ADD to existing files without overwriting.\nAlways check is_open() and call close() when done.`,
                                    explanationAr: `ofstream تنشئ أو تستبدل ملف. استخدم << مثل cout.\nاستخدم ios::app للإضافة بدون حذف. تحقق من is_open() دائماً.`
                                },
                                {
                                    title: 'Reading from a File',
                                    titleAr: 'القراءة من ملف',
                                    code: `#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    ifstream file("output.txt");
    
    if (!file.is_open()) {
        cout << "File not found!" << endl;
        return 1;
    }
    
    // Method 1: Read line by line
    string line;
    cout << "=== Line by line ===" << endl;
    while (getline(file, line)) {
        cout << line << endl;
    }
    
    // Reset to beginning for re-reading
    file.clear();
    file.seekg(0);
    
    // Method 2: Count lines
    int lineCount = 0;
    while (getline(file, line)) {
        lineCount++;
    }
    cout << "\\nTotal lines: " << lineCount << endl;
    
    file.close();
    return 0;
}`,
                                    explanation: `ifstream reads from files. Use getline() in a while loop to read all lines.\n• file.clear() resets error flags\n• file.seekg(0) goes back to start\n• Always check if file opened before reading`,
                                    explanationAr: `ifstream تقرأ من الملفات. استخدم getline() في حلقة while لقراءة كل الأسطر.`
                                },
                                {
                                    title: 'Structured Data with Files',
                                    titleAr: 'بيانات منظمة مع الملفات',
                                    code: `#include <iostream>
#include <fstream>
#include <string>
using namespace std;

struct Student {
    string name;
    int id;
    double grade;
};

void saveStudents(Student students[], int count) {
    ofstream file("students.txt");
    for (int i = 0; i < count; i++) {
        file << students[i].name << "," 
             << students[i].id << "," 
             << students[i].grade << endl;
    }
    file.close();
    cout << count << " students saved!" << endl;
}

int loadStudents(Student students[]) {
    ifstream file("students.txt");
    if (!file.is_open()) return 0;
    
    int count = 0;
    string line;
    while (getline(file, line) && count < 100) {
        int pos1 = line.find(",");
        int pos2 = line.find(",", pos1+1);
        
        students[count].name = line.substr(0, pos1);
        students[count].id = stoi(line.substr(pos1+1, pos2-pos1-1));
        students[count].grade = stod(line.substr(pos2+1));
        count++;
    }
    file.close();
    return count;
}

int main() {
    Student students[3] = {
        {"Ahmed", 101, 89.5},
        {"Sara", 102, 95.0},
        {"Omar", 103, 78.0}
    };
    
    saveStudents(students, 3);
    
    Student loaded[100];
    int count = loadStudents(loaded);
    
    cout << "Loaded " << count << " students:" << endl;
    for (int i = 0; i < count; i++) {
        cout << loaded[i].name << " - " << loaded[i].grade << endl;
    }
    
    return 0;
}`,
                                    explanation: `This combines structs, arrays, functions, and file I/O — a mini database!\n• Save: write each field separated by commas (CSV format)\n• Load: read lines, parse with find() + substr()\n• stoi() and stod() convert strings to int/double`,
                                    explanationAr: `هذا يجمع الهياكل والمصفوفات والدوال والملفات — قاعدة بيانات صغيرة!\n• الحفظ: اكتب كل حقل مفصولاً بفاصلة\n• التحميل: اقرأ الأسطر وحللها`
                                }
                            ],

                                commonMistakes: [
                                    {
                                        title: 'Not Checking if File Opened',
                                        titleAr: 'عدم التحقق من فتح الملف',
                                        wrong: `ifstream file("data.txt");
string line;
getline(file, line);  // If file doesn't exist, undefined!`,
                                        correct: `ifstream file("data.txt");
if (!file.is_open()) {
    cout << "Error!" << endl;
    return 1;
}
string line;
getline(file, line);  // Safe — file exists`,
                                        explanation: `Always check is_open() before reading/writing. Files can fail due to wrong path, permissions, or disk issues.`,
                                        explanationAr: `تحقق من is_open() دائماً قبل القراءة/الكتابة.`
                                    },
                                    {
                                        title: 'Forgetting to Close Files',
                                        titleAr: 'نسيان إغلاق الملفات',
                                        wrong: `ofstream file("log.txt");
file << "Some data";
// Forgot file.close()! Data may be lost!`,
                                        correct: `ofstream file("log.txt");
file << "Some data";
file.close();  // Ensures data is flushed to disk`,
                                        explanation: `Not closing files can cause data loss — data may be buffered in memory and never written to disk. Always close() when done.`,
                                        explanationAr: `عدم إغلاق الملفات قد يسبب فقدان البيانات. أغلق دائماً عند الانتهاء.`
                                    }
                                ],

                                    advancedTopics: {
        intro: `Let's explore advanced file handling patterns for real applications.`,
            introAr: `دعنا نستكشف أنماط التعامل المتقدم مع الملفات.`,
                topics: [
                    {
                        title: 'CSV File Processing',
                        titleAr: 'معالجة ملفات CSV',
                        explanation: `CSV (Comma-Separated Values) is a common file format for structured data. Each line is a record, fields separated by commas.\n\nReading CSV: use getline() for each line, then find() and substr() to parse fields.\nWriting CSV: output fields with commas between them.\n\nThis is the same format used by Excel and databases!`,
                        explanationAr: `CSV (القيم المفصولة بفاصلة) هو تنسيق ملفات شائع للبيانات المنظمة.`,
                        example: `// Read CSV file
ifstream file("data.csv");
string line;
while (getline(file, line)) {
    int pos = line.find(",");
    string name = line.substr(0, pos);
    string value = line.substr(pos + 1);
    cout << name << ": " << value << endl;
}`
                    },
                    {
                        title: 'File-Based Data Persistence',
                        titleAr: 'الاستمرارية المبنية على الملفات',
                        explanation: `Data persistence means keeping data between program runs. Pattern:\n\n1. On start: load data from file\n2. During run: modify data in memory\n3. On exit: save data back to file\n\nThis is the foundation of any app that remembers settings, scores, or user data.`,
                        explanationAr: `استمرارية البيانات تعني الاحتفاظ بالبيانات بين تشغيلات البرنامج.`,
                        example: `// Load settings on start
int highScore = 0;
ifstream loadFile("score.txt");
if (loadFile.is_open()) {
    loadFile >> highScore;
    loadFile.close();
}

// ... game plays, score changes ...

// Save on exit
ofstream saveFile("score.txt");
saveFile << highScore;
saveFile.close();`
                    }
                ]
    },

    practice: [
        {
            id: 'p12_1',
            title: 'Save User Data',
            titleAr: 'حفظ بيانات المستخدم',
            difficulty: 2,
            description: `Ask user for name and age, save to a file called "user.txt".`,
            descriptionAr: `اسأل المستخدم عن اسمه وعمره، واحفظهم في ملف "user.txt".`,
            starterCode: `#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n    // Get name and age, save to file\n    return 0;\n}`,
            solution: `#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n    string name;\n    int age;\n    cout << "Name: "; cin >> name;\n    cout << "Age: "; cin >> age;\n    \n    ofstream file("user.txt");\n    file << "Name: " << name << endl;\n    file << "Age: " << age << endl;\n    file.close();\n    cout << "Saved!" << endl;\n    return 0;\n}`,
            hints: ['Use ofstream', 'Write with <<', 'Close the file']
        },
        {
            id: 'p12_2',
            title: 'Read and Display',
            titleAr: 'اقرأ واعرض',
            difficulty: 2,
            description: `Read all lines from a file and display them with line numbers.`,
            descriptionAr: `اقرأ كل الأسطر من ملف واعرضها بأرقام الأسطر.`,
            starterCode: `#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    // Read file and print with line numbers\n    return 0;\n}`,
            solution: `#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    ifstream file("user.txt");\n    if (!file.is_open()) { cout << "File not found!" << endl; return 1; }\n    \n    string line;\n    int num = 1;\n    while (getline(file, line)) {\n        cout << num++ << ": " << line << endl;\n    }\n    file.close();\n    return 0;\n}`,
            hints: ['Use getline in while loop', 'Track line number', 'Check is_open()']
        },
        {
            id: 'p12_3',
            title: 'Append to File',
            titleAr: 'الإضافة لملف',
            difficulty: 2,
            description: `Append a new entry to an existing log file without overwriting.`,
            descriptionAr: `أضف إدخالاً جديداً لملف سجل موجود بدون حذف المحتوى.`,
            starterCode: `#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n    // Append a message to log.txt\n    return 0;\n}`,
            solution: `#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n    ofstream file("log.txt", ios::app);\n    file << "New log entry added!" << endl;\n    file.close();\n    cout << "Entry appended!" << endl;\n    return 0;\n}`,
            hints: ['Use ios::app mode', 'This adds to end', 'Existing content preserved']
        },
        {
            id: 'p12_4',
            title: 'Count Lines',
            titleAr: 'عد الأسطر',
            difficulty: 2,
            description: `Count and display the total number of lines in a text file.`,
            descriptionAr: `احسب واعرض إجمالي عدد الأسطر في ملف نصي.`,
            starterCode: `#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    // Count lines in a file\n    return 0;\n}`,
            solution: `#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    ifstream file("log.txt");\n    if (!file.is_open()) { cout << "File not found!" << endl; return 1; }\n    \n    string line;\n    int count = 0;\n    while (getline(file, line)) count++;\n    \n    cout << "Total lines: " << count << endl;\n    file.close();\n    return 0;\n}`,
            hints: ['getline in while loop', 'Increment count each line', 'Print after loop']
        },
        {
            id: 'p12_5',
            title: 'Copy File',
            titleAr: 'نسخ ملف',
            difficulty: 3,
            description: `Copy contents of one file to another file.`,
            descriptionAr: `انسخ محتويات ملف إلى ملف آخر.`,
            starterCode: `#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    // Copy source.txt to backup.txt\n    return 0;\n}`,
            solution: `#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nint main() {\n    ifstream src("log.txt");\n    ofstream dst("backup.txt");\n    \n    if (!src.is_open()) { cout << "Source not found!" << endl; return 1; }\n    \n    string line;\n    while (getline(src, line)) {\n        dst << line << endl;\n    }\n    \n    src.close();\n    dst.close();\n    cout << "File copied!" << endl;\n    return 0;\n}`,
            hints: ['Read from ifstream', 'Write to ofstream', 'Line by line with getline']
        }
    ],

        mcq: [
            {
                id: 'q12_1',
                question: 'Which header is needed for file handling?',
                questionAr: 'أي ملف ترويسة مطلوب للتعامل مع الملفات؟',
                options: [
                    { text: '<iostream>', textAr: '<iostream>' },
                    { text: '<fstream>', textAr: '<fstream>' },
                    { text: '<file>', textAr: '<file>' },
                    { text: '<fileio>', textAr: '<fileio>' }
                ],
                correct: 1,
                explanation: `<fstream> provides ofstream, ifstream, and fstream for file operations.`,
                explanationAr: `<fstream> توفر ofstream و ifstream و fstream لعمليات الملفات.`
            },
            {
                id: 'q12_2',
                question: 'What does ios::app do?',
                questionAr: 'ماذا يفعل ios::app؟',
                options: [
                    { text: 'Opens application', textAr: 'يفتح تطبيقاً' },
                    { text: 'Appends to end of file', textAr: 'يضيف لنهاية الملف' },
                    { text: 'Deletes file contents', textAr: 'يحذف محتوى الملف' },
                    { text: 'Creates new file', textAr: 'ينشئ ملفاً جديداً' }
                ],
                correct: 1,
                explanation: `ios::app opens the file in append mode — new data is added to the end without overwriting existing content.`,
                explanationAr: `ios::app يفتح الملف في وضع الإضافة — البيانات الجديدة تُضاف للنهاية.`
            },
            {
                id: 'q12_3',
                question: 'Which is used to READ from a file?',
                questionAr: 'أيهما يُستخدم للقراءة من ملف؟',
                options: [
                    { text: 'ofstream', textAr: 'ofstream' },
                    { text: 'ifstream', textAr: 'ifstream' },
                    { text: 'iostream', textAr: 'iostream' },
                    { text: 'filestream', textAr: 'filestream' }
                ],
                correct: 1,
                explanation: `ifstream (input file stream) is for reading. ofstream is for writing.`,
                explanationAr: `ifstream (تدفق ملف إدخال) للقراءة. ofstream للكتابة.`
            },
            {
                id: 'q12_4',
                question: 'Why check is_open() before using a file?',
                questionAr: 'لماذا نتحقق من is_open() قبل استخدام الملف؟',
                options: [
                    { text: 'To make code longer', textAr: 'لجعل الكود أطول' },
                    { text: 'Not needed', textAr: 'غير مطلوب' },
                    { text: 'File may fail to open', textAr: 'الملف قد يفشل في الفتح' },
                    { text: 'To close the file', textAr: 'لإغلاق الملف' }
                ],
                correct: 2,
                explanation: `Files can fail to open for many reasons (wrong path, permissions, etc). Using an un-opened file causes undefined behavior.`,
                explanationAr: `الملفات قد تفشل في الفتح لأسباب عديدة. استخدام ملف غير مفتوح يسبب سلوكاً غير محدد.`
            },
            {
                id: 'q12_5',
                question: 'What happens if you write to an existing file without ios::app?',
                questionAr: 'ماذا يحدث إذا كتبت في ملف موجود بدون ios::app؟',
                options: [
                    { text: 'Data is appended', textAr: 'البيانات تُضاف' },
                    { text: 'Error occurs', textAr: 'خطأ يحدث' },
                    { text: 'File contents are overwritten', textAr: 'محتوى الملف يُستبدل' },
                    { text: 'Nothing happens', textAr: 'لا شيء يحدث' }
                ],
                correct: 2,
                explanation: `Without ios::app, ofstream uses ios::trunc by default, which clears the file before writing.`,
                explanationAr: `بدون ios::app، ofstream تستخدم ios::trunc افتراضياً، مما يمسح الملف قبل الكتابة.`
            }
        ]
}
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONTENT;
}
