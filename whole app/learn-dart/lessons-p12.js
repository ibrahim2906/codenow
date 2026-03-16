// Phase 12 — Clean Code Foundations
const PHASES_12 = [
    {
        id: 'p12', title: 'Phase 12 — Clean Code Foundations', lessons: [
            {
                id: 'p12l1', title: 'Clean Code & DRY',
                en: 'Clean code is like building with "Lego Blocks" instead of messy glue. If each block is clean and fits perfectly, you can change your building easily later! One master rule is DRY: "Don\'t Repeat Yourself." If you find yourself writing the same code twice, you are probably making a mistake. \n\n- Meaningful Names: Avoid x, y, z. Use userAge or totalAmount. \n- Single Responsibility: A function should do ONE thing well. Don\'t make a "saveAndPrintAndEmailAndCalculate" function!',
                ar: 'الكود النظيف يشبه البناء بـ "قطع الليغو" بدلاً من الغراء الفوضوي. إذا كانت كل قطعة نظيفة ومناسبة تماماً، يمكنك تغيير بنائك بسهولة لاحقاً! إحدى القواعد الأساسية هي DRY: "لا تكرر نفسك". إذا وجدت نفسك تكتب نفس الكود مرتين، فمن المحتمل أنك ترتكب خطأً.\n\n- أسماء ذات معنى: تجنب x، y، z. استخدم userAge أو totalAmount.\n- المسؤولية الواحدة: يجب أن تقوم الدالة بشيء واحد فقط وبشكل جيد. لا تصنع دالة تقوم بـ "الحفظ والطباعة والإرسال والحساب" معاً!',
                examples: [
                    { level: 'Beginner', code: 'void main() {\n  // Bad: var d = 5;\n  var daysUntilExpiry = 5; // Good\n}', desc: 'Naming for clarity.', descAr: 'طريقة التسمية للوضوح.' },
                    { level: 'Intermediate', code: '// Bad: 3 lines of same math in 3 places\n// Good: \ndouble calculateTax(double price) => price * 0.14;', desc: 'Applying DRY.', descAr: 'تطبيق مبدأ DRY.' }
                ],
                why: 'In a real job, you spend 90% of your time reading code and only 10% writing it. Clean code makes that 90% easy.',
                whyAr: 'في العمل الحقيقي، تقضي 90% من وقتك في قراءة الكود و10% فقط في كتابته. الكود النظيف يجعل تلك الـ 90% سهلة.',
                mistakes: [
                    { bad: 'Comment: // Adds 1 to x \nx++;', good: '// Need to increment id for next user\nid++;', badAr: 'شرح "ماذا" يفعل الكود (وهو واضح)', goodAr: 'شرح "لماذا" تم كتابة هذا الكود' }
                ],
                goodVsBad: { bad: 'void doEverything() { /* 500 lines */ }', good: 'void saveData() {} void updateUI() {}' },
                mcqs: [
                    { q: 'Why is Clean Code important in a professional setting?', opts: ['It makes the computer faster', 'Code is read many more times than it is written', 'It changes the text color in the editor', 'It is required by the internet'], ans: 1, fb: 'Maintenance and teamwork depend on other humans being able to understand your logic.' }
                ],
                codingQs: [
                    { q: 'Rename the variable "x" to something more meaningful for a user\'s birth year.', start: 'int x = 1995; // Bad\nint ', answer: 'birthYear' },
                    { q: 'Write a function "add" that follows the Single Responsibility principle (only adding).', start: 'int add(int a, int b) => ', answer: 'a + b' }
                ],
                codingChallenge: {
                    task: 'Rename this poorly named variable to something clean (meaningful): "var x = 25; // x is user age".',
                    answer: 'userAge',
                    solution: 'var userAge = 25;'
                }
            },
            {
                id: 'p12l2', title: 'Records & Patterns (Dart 3+)',
                en: 'Records are like a "Bento Box" for your data. Sometimes you want to return two or three things from a function (like a Name and an Age), but you don\'t want to build a whole new class for it. Records let you group them neatly in one line. \n\nPatterns are the tools to "Unpack" that box. Instead of saying x = box[0], you can say (name, age) = box and get the data out instantly!',
                ar: 'الـ Records تشبه "صندوق البينتو" (Bento Box) لبياناتك. أحياناً تريد إرجاع شيئين أو ثلاثة من دالة (مثل الاسم والعمر)، لكنك لا تريد بناء كلاس كامل لذلك. الـ Records تسمح لك بتجميعها بدقة في سطر واحد.\n\nالـ Patterns هي الأدوات لـ "تفريغ" ذلك الصندوق. بدلاً من قول x = box[0]، يمكنك قول (name, age) = box والحصول على البيانات على الفور!',
                examples: [
                    { level: 'Advanced', code: '(String, int) getUser() => ("Ali", 25);\n\nvoid main() {\n  var (name, age) = getUser(); // Pattern Matching!\n  print("$name is $age");\n}', desc: 'Returning and using records.', descAr: 'إرجاع واستخدام الـ records.' }
                ],
                why: 'Records and patterns make Dart feel modern and expressive, similar to Python or Swift, reducing the amount of "boilerplate" code.',
                whyAr: 'تجعل الـ Records والـ Patterns لغة Dart تبدو حديثة ومعبرة، مماثلة لـ Python أو Swift، وتقلل من الكود المتكرر (boilerplate).',
                mistakes: [
                    { bad: 'Creating a class just to return two values', good: 'Use a Record for temporary clusters of data', badAr: 'إنشاء كلاس فقط لإرجاع قيمتين', goodAr: 'استخدم Record لتجميع البيانات المؤقتة' }
                ],
                goodVsBad: { bad: 'Map<String, dynamic> result = {"w": 10, "h": 20};', good: 'var (w, h) = (10, 20);' },
                mcqs: [
                    { q: 'Records are "immutable," which means...', opts: ['They can be changed anytime', 'They cannot be modified after creation', 'They only hold strings', 'They are invisible'], ans: 1, fb: 'Once a record is created, its values cannot be reassigned; you must create a new one.' }
                ],
                codingQs: [
                    { q: 'Create a record that holds a String "Status" and a bool true.', start: 'var result = ', answer: '("Status", true)' },
                    { q: 'Using pattern matching, unpack the record (10, 20) into "x" and "y".', start: 'var (x, y) = ', answer: '(10, 20)' }
                ],
                codingChallenge: {
                    task: 'Create a record that stores a String "Dart" and an int 3.',
                    answer: '(',
                    solution: 'var myRecord = ("Dart", 3);'
                }
            }
        ]
    }
];
