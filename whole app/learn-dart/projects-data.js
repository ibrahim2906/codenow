const PROJECTS_PHASE = [
    {
        id: 'p15',
        title: 'Phase 15 — Real World Projects',
        lessons: [
            {
                id: 'p15l1', title: 'Beginner Projects (1-5)',
                en: 'Put your basics to the test! These projects focus on variables, logic, and basic loops.',
                ar: 'اختبر أساسياتك! تركز هذه المشاريع على المتغيرات والمنطق وحلقات التكرار الأساسية.',
                projects: [
                    {
                        title: '1. The Tip Calculator',
                        difficulty: 'Beginner',
                        task: 'Create a program that takes a bill amount and a tip percentage, then outputs the total bill.',
                        solution: 'void main() {\n  double bill = 100.0;\n  double tipPercent = 15.0;\n  double total = bill + (bill * tipPercent / 100);\n  print("Total: \\$total");\n}'
                    },
                    {
                        title: '2. Temperature Converter',
                        difficulty: 'Beginner',
                        task: 'Write a program to convert Celsius to Fahrenheit. Formula: (C * 9/5) + 32.',
                        solution: 'void main() {\n  double celsius = 25.0;\n  double fahrenheit = (celsius * 9 / 5) + 32;\n  print("\\$celsius°C is \\$fahrenheit°F");\n}'
                    },
                    {
                        title: '3. Even or Odd Checker',
                        difficulty: 'Beginner',
                        task: 'Create a function that takes a list of numbers and prints which ones are Even and which are Odd.',
                        solution: 'void main() {\n  List<int> nums = [1, 2, 3, 4, 5];\n  for (var n in nums) {\n    if (n % 2 == 0) print("\\$n is Even");\n    else print("\\$n is Odd");\n  }\n}'
                    },
                    {
                        title: '4. Simple Login Logic',
                        difficulty: 'Beginner',
                        task: 'Check if a username is "admin" and password is "1234". Print "Success" or "Denied".',
                        solution: 'void main() {\n  String user = "admin";\n  String pass = "1234";\n  if (user == "admin" && pass == "1234") print("Success");\n  else print("Denied");\n}'
                    },
                    {
                        title: '5. Multiplier Table',
                        difficulty: 'Beginner',
                        task: 'Generate a multiplication table for a number (e.g., 5 * 1 to 5 * 10).',
                        solution: 'void main() {\n  int n = 5;\n  for (int i = 1; i <= 10; i++) {\n    print("\\$n * \\$i = \\${n * i}");\n  }\n}'
                    }
                ]
            },
            {
                id: 'p15l2', title: 'Intermediate Projects (6-10)',
                en: 'Step up your game with collections, functions, and advanced classes.',
                ar: 'ارفع مستواك مع المجموعات والدوال والكلاسات المتقدمة.',
                projects: [
                    {
                        title: '6. Guest List Manager',
                        difficulty: 'Intermediate',
                        task: 'Create a List of guests. Add a check to see if a name exists before adding it (prevent duplicates).',
                        solution: 'void main() {\n  Set<String> guests = {"Ali", "Sara"};\n  String newGuest = "Ali";\n  if (guests.contains(newGuest)) print("Already invited!");\n  else guests.add(newGuest);\n}'
                    },
                    {
                        title: '7. Student Grade Tracker',
                        difficulty: 'Intermediate',
                        task: 'Use a Map to store student names and their scores. Calculate the average score.',
                        solution: 'void main() {\n  Map<String, int> grades = {"Ali": 90, "Sara": 85, "Omar": 70};\n  double sum = grades.values.reduce((a, b) => a + b).toDouble();\n  print("Average: \\${sum / grades.length}");\n}'
                    },
                    {
                        title: '8. Product Inventory Class',
                        difficulty: 'Intermediate',
                        task: 'Create a "Product" class with name, price, and stock. Add a method to "sell" a product.',
                        solution: 'class Product {\n  String name; double price; int stock;\n  Product(this.name, this.price, this.stock);\n  void sell() {\n    if (stock > 0) { stock--; print("Sold!"); }\n    else print("Out of stock!");\n  }\n}'
                    },
                    {
                        title: '9. Age Finder (Null Safety)',
                        difficulty: 'Intermediate',
                        task: 'Create a function that takes a nullable int and returns "Age unknown" if null, or the age string.',
                        solution: 'String checkAge(int? age) {\n  return age != null ? "Age is \\$age" : "Age unknown";\n}\nvoid main() => print(checkAge(null));'
                    },
                    {
                        title: '10. Password Strength Checker',
                        difficulty: 'Intermediate',
                        task: 'Check if a password is valid (Length > 8 and contains a digit).',
                        solution: 'bool isStrong(String p) => p.length > 8 && p.contains(RegExp(r\'\\d\'));\nvoid main() => print(isStrong("pass12345"));'
                    }
                ]
            },
            {
                id: 'p15l3', title: 'Advanced Projects (11-15)',
                en: 'Master long-running tasks and complex system logic.',
                ar: 'أتقن المهام طويلة الأمد ومنطق الأنظمة المعقدة.',
                projects: [
                    {
                        title: '11. Fake API Fetcher (Async)',
                        difficulty: 'Advanced',
                        task: 'Simulate fetching user data with a 2-second delay using Future.delayed.',
                        solution: 'Future<void> fetchUser() async {\n  print("Loading...");\n  await Future.delayed(Duration(seconds: 2));\n  print("User: DartMaster123");\n}\nvoid main() => fetchUser();'
                    },
                    {
                        title: '12. Bank Transaction System',
                        difficulty: 'Advanced',
                        task: 'Create an Account class with private balance. Throw an error if a user tries to withdraw more than they have.',
                        solution: 'class Bank {\n  double _balance = 100;\n  void withdraw(double amount) {\n    if (amount > _balance) throw "No money!";\n    _balance -= amount;\n  }\n}'
                    },
                    {
                        title: '13. Live Data Stream',
                        difficulty: 'Advanced',
                        task: 'Create a Stream that emits a number every second and stops after 10.',
                        solution: 'Stream<int> count() async* {\n  for (int i=1; i<=10; i++) {\n    await Future.delayed(Duration(seconds: 1));\n    yield i;\n  }\n}'
                    },
                    {
                        title: '14. Universal Data Holder (Generics)',
                        difficulty: 'Advanced',
                        task: 'Create a generic "Box<T>" class that stores a value and has a "print" method.',
                        solution: 'class Box<T> {\n  T value; Box(this.value);\n  void show() => print(value);\n}\nvoid main() => Box<String>("Dart").show();'
                    },
                    {
                        title: '15. Shapes Library (Abstract)',
                        difficulty: 'Advanced',
                        task: 'Create an abstract "Shape" with an "area()" method. Implement it for Circle and Square.',
                        solution: 'abstract class Shape { double area(); }\nclass Square extends Shape {\n  double s; Square(this.s);\n  double area() => s * s;\n}'
                    }
                ]
            }
        ]
    }
];

// If node environment, export it
if (typeof module !== 'undefined') module.exports = PROJECTS_PHASE;
