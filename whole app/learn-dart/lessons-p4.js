// Phase 4 — Operators & Logic
const PHASES_4 = [
    {
        id: 'p4', title: 'Phase 4 — Operators & Logic', lessons: [
            {
                id: 'p4l1', title: 'Arithmetic & Assignment',
                en: 'Arithmetic operators are how you do math in code. But there are some special ones you need to know for professional Dart development:<br><br>\n<div class="feature-grid">\n  <div class="feature-card"><h5>~/ Integer Division</h5><p>Throws away decimals. <code>10 ~/ 3</code> becomes <code>3</code>.</p></div>\n  <div class="feature-card"><h5>% Modulo</h5><p>Returns the remainder. <code>10 % 3</code> becomes <code>1</code>.</p></div>\n  <div class="feature-card"><h5>+= Compound</h5><p>The professional way to update variables: <code>score += 5</code>.</p></div>\n</div>',
                ar: 'العوامل الحسابية هي كيفية إجراء العمليات الحسابية في الكود، ولكن هناك عوامل خاصة تجعلك مبرمجاً محترفاً:<br><br>\n<div class="feature-grid">\n  <div class="feature-card"><h5>~/ القسمة الصحيحة</h5><p>تتخلص من الأرقام العشرية. <code>10 ~/ 3</code> تعطي <code>3</code>.</p></div>\n  <div class="feature-card"><h5>% باقي القسمة</h5><p>ترجع الباقي فقط. <code>10 % 3</code> تعطي <code>1</code>.</p></div>\n  <div class="feature-card"><h5>+= التعيين المركب</h5><p>الطريقة الاحترافية لتحديث المتغيرات: <code>score += 5</code>.</p></div>\n</div>',
                examples: [
                    { level: 'Beginner', code: 'void main() {\n  int score = 10;\n  score += 5; // score is now 15\n  score *= 2; // score is now 30\n  print(score);\n}', desc: 'Using compound assignment.', descAr: 'استخدام التعيين المركب.' },
                    { level: 'Intermediate', code: 'double d = 10 / 3; // 3.333\nint i = 10 ~/ 3;   // 3\nint r = 10 % 3;    // 1\nprint("Div: $d, IntDiv: $i, Rem: $r");', desc: 'Different types of division.', descAr: 'أنواع مختلفة من القسمة.' }
                ],
                why: 'Using compound operators makes your code more "idiomatic" (the standard, expert way to write code).',
                whyAr: 'استخدام العوامل المركبة يجعل كودك أكثر "احترافية" (الطريقة القياسية التي يكتب بها الخبراء).',
                mistakes: [
                    { bad: 'x = x + 1; // Not "wrong" but wordy', good: 'x++; // Cleaner and standard', badAr: 'x = x + 1; // ليست "خطأ" ولكنها طويلة', goodAr: 'x++; // أنظف وقياسية' }
                ],
                goodVsBad: { bad: 'score = score + 10;', good: 'score += 10;' },
                mcqs: [
                    { q: 'What is the result of 7 ~/ 2?', opts: ['3.5', '3', '4', '1'], ans: 1, fb: 'Integer division returns only the whole number part.' }
                ],
                codingQs: [
                    { q: 'Write a program to find the remainder of 25 divided by 4.', start: 'void main() {\n  var result = ', answer: '25 % 4' },
                    { q: 'Use a compound assignment operator to add 20 to the variable "balance".', start: 'int balance = 100;\n', answer: 'balance += 20' }
                ]
            },
            {
                id: 'p4l2', title: 'Logic & Decisions',
                en: 'Comparisons (==, >, <) ask questions, and Logical Operators combine them. Think like a security guard:<br><br>\n<div class="feature-grid">\n  <div class="feature-card"><h5>&& AND</h5><p><strong>Both</strong> must be true. (e.g., ID exists AND age > 18).</p></div>\n  <div class="feature-card"><h5>|| OR</h5><p><strong>At least one</strong> must be true. (e.g., Student OR Senior discount).</p></div>\n  <div class="feature-card"><h5>! NOT</h5><p>Flips the value. <code>!true</code> becomes <code>false</code>.</p></div>\n</div>',
                ar: 'المقارنات (==، >، <) تطرح أسئلة، والعوامل المنطقية تدمجها معاً. فكر كحارس أمن:<br><br>\n<div class="feature-grid">\n  <div class="feature-card"><h5>&& و (AND)</h5><p>يجب أن يكون <strong>كلاهما</strong> صحيحاً. (مثلاً: وجود بطاقة هويّة وَ العمر > 18).</p></div>\n  <div class="feature-card"><h5>|| أو (OR)</h5><p>يكفي أن يكون <strong>واحد</strong> صحيحاً. (مثلاً: طالب أو خصم كبار السن).</p></div>\n  <div class="feature-card"><h5>! العكس (NOT)</h5><p>تعكس القيمة. <code>!true</code> تصبح <code>false</code>.</p></div>\n</div>',
                examples: [
                    { level: 'Beginner', code: 'void main() {\n  int age = 20;\n  bool hasID = true;\n  print(age >= 18 && hasID); // true\n}', desc: 'Basic logic.', descAr: 'منطق بسيط.' },
                    { level: 'Intermediate', code: 'bool isWeekend = true;\nbool isHoliday = false;\n// Either one is enough for a "Free Day"\nbool isFreeDay = isWeekend || isHoliday;\nprint("Is free: $isFreeDay");', desc: 'Logical OR (||) in action.', descAr: 'استخدام "أو" المنطقية (||).' },
                    { level: 'Advanced', code: '// Using short-circuit to prevent errors\nString? name;\nif (name != null && name.length > 5) {\n  print("Long name");\n} // If name is null, it STOPS before checking .length!', desc: 'Pro-tip: short-circuit preventing null errors.', descAr: 'نصيحة للمحترفين: ميزة الاختصار تمنع أخطاء null.' }
                ],
                why: 'Mastering logic lets you handle complex real-world rules, like "Is this user a premium member AND is their subscription active?"',
                whyAr: 'إتقان المنطق يتيح لك التعامل مع قواعد العالم الحقيقي المعقدة، مثل "هل هذا المستخدم عضو بريميوم وهل اشتراكه نشط؟"',
                mistakes: [
                    { bad: 'if (age = 18) // Oops! Assigning instead of comparing', good: 'if (age == 18)', badAr: 'if (age = 18) // خطأ! تعيين بدلاً من مقارنة', goodAr: 'if (age == 18)' }
                ],
                goodVsBad: { bad: 'bool x = true; if (x == true) // Redundant', good: 'bool x = true; if (x) // Professional' },
                mcqs: [
                    { q: 'In (False && Anything), does the "Anything" part run?', opts: ['Yes', 'No', 'Only if it is a function', 'Only in release mode'], ans: 1, fb: 'Because the first part is False, the AND is definitely False, so it stops immediately.' }
                ],
                codingQs: [
                    { q: 'Write a logical expression to check if age is >= 18 AND hasPermission is true.', start: 'bool canEnter = ', answer: '&&' },
                    { q: 'Flip the boolean value of "isLoggedIn" using the NOT operator.', start: 'bool isLoggedIn = true;\nbool isLoggedOut = ', answer: '!isLoggedIn' }
                ]
            },
        ]
    }
];
