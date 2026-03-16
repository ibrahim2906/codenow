// Phase 4 — Operators & Logic
const PHASES_4 = [
    {
        id: 'p4', title: 'Phase 4 — Operators & Logic', lessons: [
            {
                id: 'p4l1', title: 'Arithmetic & Assignment',
                en: 'Arithmetic operators are how you do math in code. But there are some special ones you need to know:\n\n- ~/ (Integer Division): If you divide 10 by 3, you get 3.33. But in integer division, we throw away the decimals and just keep the 3.\n- % (Modulo): This tells you the "Remainder." If you have 10 cookies and give 3 to each of 3 friends, you have 1 left. So 10 % 3 = 1.\n- Compound Access (+=, *=): Instead of writing "score = score + 5", you can write "score += 5". It is the professional way to update variables.',
                ar: 'العوامل الحسابية هي كيفية إجراء الرياضيات في الكود. ولكن هناك بعض العوامل الخاصة التي يجب أن تعرفها:\n\n- ~/ (القسمة الصحيحة): إذا قسمت 10 على 3، فستحصل على 3.33. ولكن في القسمة الصحيحة، نرمي الأرقام العشرية ونحتفظ بـ 3 فقط.\n- % (باقي القسمة): هذا يخبرك بـ "الباقي". إذا كان لديك 10 كعكات وأعطيت 3 لكل واحد من أصدقائك الثلاثة، فسيتبقى معك واحدة. إذاً 10 % 3 = 1.\n- التعيين المركب (+=، *=): بدلاً من كتابة "score = score + 5"، يمكنك كتابة "score += 5". إنها الطريقة الاحترافية لتحديث المتغيرات.',
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
                en: 'Comparisons (==, !=, >, <) are how the computer asks questions like "Is the user older than 18?". Logical Operators (&&, ||) are how we combine those questions.\n\nThink like a security guard at a club:\n- AND (&&): "You can enter ONLY if you have an ID AND you are over 18." Both must be true.\n- OR (||): "You can have a discount if you are a Student OR if you are over 60." Only one needs to be true.\n- NOT (!): This flips a value. !true becomes false.',
                ar: 'المقارنات (==، !=، >، <) هي كيفية طرح الكمبيوتر لأسئلة مثل "هل المستخدم أكبر من 18 عاماً؟". العوامل المنطقية (&&، ||) هي كيفية دمج هذه الأسئلة.\n\nفكر كحارس أمن في نادي:\n- AND (&&): "يمكنك الدخول فقط إذا كان معك بطاقة هوية وكنت أكبر من 18 عاماً". يجب أن يكون كلاهما صحيحاً.\n- OR (||): "يمكنك الحصول على خصم إذا كنت طالباً أو إذا كان عمرك أكثر من 60 عاماً". يكفي أن يكون أحدهما صحيحاً.\n- NOT (!): هذا يعكس القيمة. يصبح !true هو false.',
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
