// Phase 8 — Collections
const PHASES_8 = [
    {
        id: 'p8', title: 'Phase 8 — Collections', lessons: [
            {
                id: 'p8l1', title: 'Lists & Collection logic',
                en: 'A List is like a Shopping List—an ordered sequence of items. But modern Dart has "Magic Powers" for lists:\n\n- Spread Operator (...): Like merging two shopping lists into one big one instantly.\n- Collection If: Like saying "Add milk to the list ONLY IF it is not in the fridge."\n- Collection For: Like saying "Look at this box of 10 apples and add each one to my bag."',
                ar: 'القائمة (List) تشبه قائمة التسوق — تسلسل مرتب من العناصر. لكن لغة Dart الحديثة لديها "قوى سحرية" للقوائم:\n\n- عامل الانتشار (...): مثل دمج قائمتي تسوق في قائمة واحدة كبيرة فوراً.\n- Collection If: مثل قول "أضف الحليب إلى القائمة فقط إذا لم يكن موجوداً في الثلاجة".\n- Collection For: مثل قول "انظر إلى هذا الصندوق الذي يحتوي على 10 تفاحات وأضف كل واحدة منها إلى حقيبتي".',
                examples: [
                    { level: 'Beginner', code: 'void main() {\n  var fruits = ["Apple", "Banana"];\n  var moreFruits = ["Mango", ...fruits]; // Spread\n  print(moreFruits); // [Mango, Apple, Banana]\n}', desc: 'Using the spread operator.', descAr: 'استخدام عامل الانتشار.' },
                    { level: 'Intermediate', code: 'bool isPremium = true;\nvar features = [\n  "Basic Chat",\n  if (isPremium) "Video Calls", // Collection If\n];', desc: 'Building lists based on conditions.', descAr: 'بناء القوائم بناءً على الشروط.' },
                    { level: 'Advanced', code: 'var numbers = [1, 2, 3];\nvar squared = [\n  for (var n in numbers) n * n, // Collection For\n];\nprint(squared); // [1, 4, 9]', desc: 'Using for inside a list definition.', descAr: 'استخدام for داخل تعريف القائمة.' }
                ],
                why: 'Collection If/For and the spread operator are essential for building UIs in Flutter, like adding a "Login" button only if the user is logged out.',
                whyAr: 'تعد Collection If/For وعامل الانتشار ضروريين لبناء واجهات المستخدم في Flutter، مثل إضافة زر "تسجيل الدخول" فقط إذا كان المستخدم قد سجل خروجه.',
                mistakes: [
                    { bad: 'var x = [1, 2, [3, 4]]; // List inside a list', good: 'var x = [1, 2, ...[3, 4]]; // Flat list [1, 2, 3, 4]', badAr: 'قائمة داخل قائمة', goodAr: 'قائمة مسطحة باستخدام عامل الانتشار' }
                ],
                goodVsBad: { bad: 'if (isAdmin) list.add("Admin Panel");', good: 'var ui = [ "Home", if (isAdmin) "Admin Panel" ];' },
                mcqs: [
                    { q: 'Why are collection expressions (If/For/Spread) so important in Flutter?', opts: ['They make apps run on Android', 'They are used to define the UI layout declaratively', 'They compress image files', 'They handle user passwords'], ans: 1, fb: 'In Flutter, layouts are built using collection literals, so these tools are essential for dynamic UIs.' }
                ],
                codingQs: [
                    { q: 'Use the spread operator to create a list "combined" containing all elements from "list1" and "list2".', start: 'var list1 = [1, 2];\nvar list2 = [3, 4];\nvar combined = ', answer: '...list1, ...list2' },
                    { q: 'Write a list that includes "Camera" only if "hasCamera" is true using Collection If.', start: 'bool hasCamera = true;\nvar tools = [\n  "Phone",\n  ', answer: 'if (hasCamera)' }
                ]
            },
            {
                id: 'p8l2', title: 'Maps & Sets',
                en: 'Lists are great, but sometimes you need something else:\n\n1. Map (The Dictionary): Stores items in "Pairs." Just like a dictionary has a "Word" and its "Meaning," a Map has a "Key" and a "Value." \n   Example: "phone" -> "0100200..."\n2. Set (Unique Collection): Imagine a box of unique stamps. If you try to put a duplicate stamp in, it just disappears. A Set ensures every item is unique—no repeats allowed!',
                ar: 'القوائم رائعة، ولكن في بعض الأحيان تحتاج إلى شيء آخر:\n\n1. الخريطة - Map (القاموس): تخزن العناصر في "أزواج". تماماً كما يحتوي القاموس على "كلمة" و "معناها"، تحتوي الخريطة على "مفتاح" (Key) و "قيمة" (Value).\n   مثال: "الهاتف" -> "0100200..."\n2. المجموعة - Set (المجموعة الفريدة): تخيل صندوقاً من الطوابع الفريدة. إذا حاولت وضع طابع مكرر فيه، فسيختفي ببساطة. تضمن المجموعة أن يكون كل عنصر فريداً — لا يُسمح بالتكرار!',
                examples: [
                    { level: 'Beginner', code: 'void main() {\n  // Map example\n  var user = {"name": "Ali", "role": "Admin"};\n  \n  // Set example (Duplicates are ignored)\n  var ids = {101, 102, 101};\n  print(ids); // {101, 102}\n}', desc: 'Basic Map and Set usage.', descAr: 'استخدام الخريطة والمجموعة بشكل أساسي.' },
                    { level: 'Intermediate', code: 'Map<int, String> status = {200: "OK", 404: "Not Found"};\nif (status.containsKey(200)) {\n  print(status[200]);\n}', desc: 'Checking for keys in a map.', descAr: 'التحقق من وجود مفاتيح في الخريطة.' }
                ],
                why: 'Choosing the right collection (List, Map, or Set) is half the battle in programming. It ensures your data is stored efficiently and safely.',
                whyAr: 'اختيار المجموعة الصحيحة (قائمة، أو خريطة، أو مجموعة) هو نصف المعركة في البرمجة. يضمن ذلك تخزين بياناتك بكفاءة وأمان.',
                mistakes: [
                    { bad: 'var x = [1, 1, 2]; // I want unique numbers', good: 'var x = {1, 1, 2}; // Set automatically removes duplicates', badAr: 'استخدام قائمة عندما تريد قيم فريدة', goodAr: 'استخدم مجموعة (Set) لإزالة التكرارات تلقائياً' }
                ],
                goodVsBad: { bad: 'myMap.keys.forEach(...) // Slow for some tasks', good: 'myMap.forEach((k, v) => ...) // Concise and fast' },
                mcqs: [
                    { q: 'What happens if you add "Dart" to a Set that already contains "Dart"?', opts: ['The app crashes', 'It is added again', 'It is ignored (no change)', 'It deletes the old one'], ans: 2, fb: 'Sets enforce uniqueness; adding an existing item has no effect.' }
                ],
                codingQs: [
                    { q: 'Create a Set named "uniqueNames" with "Ali" and "Fatima".', start: 'var uniqueNames = ', answer: '{"Ali", "Fatima"}' },
                    { q: 'Create a Map named "capitals" where "Egypt" is linked to "Cairo".', start: 'var capitals = ', answer: '{"Egypt": "Cairo"}' }
                ]
            }
        ]
    }
];
