/**
 * C++ Educational App - Project Solutions Data
 * Contains solutions and detailed descriptions for all 30 final projects
 */

const PROJECT_SOLUTIONS = {
    1: {
        title: 'Hello World Customizer',
        titleAr: 'مخصص مرحباً بالعالم',
        difficulty: 1,
        description: 'Create a program that asks the user for their name and displays a personalized greeting. This is the classic first program with a twist - making it interactive!',
        descriptionAr: 'أنشئ برنامجاً يسأل المستخدم عن اسمه ويعرض تحية شخصية.',
        hints: ['Use cin to get user input', 'Use string variable for name', 'Concatenate strings with cout'],
        hintsAr: ['استخدم cin للحصول على إدخال المستخدم', 'استخدم متغير نصي للاسم'],
        solution: `#include <iostream>
using namespace std;

int main() {
    string name;
    
    cout << "Enter your name: ";
    cin >> name;
    
    cout << "Hello, " << name << "!" << endl;
    cout << "Welcome to C++ programming!" << endl;
    
    return 0;
}`
    },
    2: {
        title: 'Simple Calculator',
        titleAr: 'آلة حاسبة بسيطة',
        difficulty: 1,
        description: 'Build a calculator that takes two numbers and an operator (+, -, *, /) from the user and displays the result.',
        descriptionAr: 'ابنِ آلة حاسبة تأخذ رقمين وعامل حسابي من المستخدم وتعرض النتيجة.',
        hints: ['Use double for numbers', 'Use char for operator', 'Use if-else for each operation'],
        hintsAr: ['استخدم double للأرقام', 'استخدم char للعامل'],
        solution: `#include <iostream>
using namespace std;

int main() {
    double num1, num2, result;
    char op;
    
    cout << "Enter first number: ";
    cin >> num1;
    cout << "Enter operator (+, -, *, /): ";
    cin >> op;
    cout << "Enter second number: ";
    cin >> num2;
    
    if (op == '+') result = num1 + num2;
    else if (op == '-') result = num1 - num2;
    else if (op == '*') result = num1 * num2;
    else if (op == '/') result = num1 / num2;
    
    cout << num1 << " " << op << " " << num2 << " = " << result << endl;
    return 0;
}`
    },
    3: {
        title: 'Temperature Converter',
        titleAr: 'محول درجات الحرارة',
        difficulty: 1,
        description: 'Create a program to convert temperatures between Celsius and Fahrenheit. Ask the user which direction they want to convert.',
        descriptionAr: 'أنشئ برنامجاً لتحويل درجات الحرارة بين سلسيوس وفهرنهايت.',
        hints: ['F = C × 9/5 + 32', 'C = (F - 32) × 5/9'],
        hintsAr: ['F = C × 9/5 + 32', 'C = (F - 32) × 5/9'],
        solution: `#include <iostream>
using namespace std;

int main() {
    double temp, converted;
    int choice;
    
    cout << "Temperature Converter" << endl;
    cout << "1. Celsius to Fahrenheit" << endl;
    cout << "2. Fahrenheit to Celsius" << endl;
    cout << "Enter choice: ";
    cin >> choice;
    
    cout << "Enter temperature: ";
    cin >> temp;
    
    if (choice == 1) {
        converted = temp * 9 / 5 + 32;
        cout << temp << " C = " << converted << " F" << endl;
    } else {
        converted = (temp - 32) * 5 / 9;
        cout << temp << " F = " << converted << " C" << endl;
    }
    return 0;
}`
    },
    4: {
        title: 'Age Calculator',
        titleAr: 'حاسب العمر',
        difficulty: 1,
        description: 'Calculate and display the user\'s age in years, months, and days based on their birth year.',
        descriptionAr: 'احسب وأظهر عمر المستخدم بالسنوات بناءً على سنة ميلاده.',
        hints: ['Get current year and birth year', 'Subtract to find age'],
        hintsAr: ['احصل على السنة الحالية وسنة الميلاد', 'اطرح للحصول على العمر'],
        solution: `#include <iostream>
using namespace std;

int main() {
    int birthYear, currentYear = 2026;
    
    cout << "Enter your birth year: ";
    cin >> birthYear;
    
    int age = currentYear - birthYear;
    
    cout << "You are " << age << " years old." << endl;
    cout << "That's approximately " << age * 12 << " months!" << endl;
    
    return 0;
}`
    },
    5: {
        title: 'Even/Odd Checker',
        titleAr: 'فاحص زوجي/فردي',
        difficulty: 1,
        description: 'Create a program that checks if a number is even or odd using the modulus operator.',
        descriptionAr: 'أنشئ برنامجاً يفحص إذا كان الرقم زوجياً أو فردياً باستخدام عامل باقي القسمة.',
        hints: ['Use modulus % operator', 'Even numbers have remainder 0 when divided by 2'],
        hintsAr: ['استخدم عامل باقي القسمة %', 'الأرقام الزوجية لها باقي 0 عند القسمة على 2'],
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
}`
    },
    6: {
        title: 'Grade Calculator',
        titleAr: 'حاسب الدرجات',
        difficulty: 2,
        description: 'Convert numeric scores (0-100) to letter grades (A, B, C, D, F) with appropriate ranges.',
        descriptionAr: 'حول الدرجات الرقمية (0-100) إلى حروف (A, B, C, D, F) مع المجالات المناسبة.',
        hints: ['A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60'],
        hintsAr: ['A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: أقل من 60'],
        solution: `#include <iostream>
using namespace std;

int main() {
    int score;
    char grade;
    
    cout << "Enter score (0-100): ";
    cin >> score;
    
    if (score >= 90) grade = 'A';
    else if (score >= 80) grade = 'B';
    else if (score >= 70) grade = 'C';
    else if (score >= 60) grade = 'D';
    else grade = 'F';
    
    cout << "Grade: " << grade << endl;
    return 0;
}`
    },
    7: {
        title: 'Leap Year Checker',
        titleAr: 'فاحص السنة الكبيسة',
        difficulty: 2,
        description: 'Determine if a given year is a leap year. Remember the rules: divisible by 4, except centuries unless divisible by 400.',
        descriptionAr: 'حدد إذا كانت السنة المعطاة سنة كبيسة.',
        hints: ['Divisible by 4 AND (not divisible by 100 OR divisible by 400)'],
        hintsAr: ['قابلة للقسمة على 4 و(غير قابلة للقسمة على 100 أو قابلة للقسمة على 400)'],
        solution: `#include <iostream>
using namespace std;

int main() {
    int year;
    cout << "Enter year: ";
    cin >> year;
    
    bool isLeap = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
    
    if (isLeap) cout << year << " is a leap year." << endl;
    else cout << year << " is not a leap year." << endl;
    
    return 0;
}`
    },
    8: {
        title: 'Number Guessing Game',
        titleAr: 'لعبة تخمين الأرقام',
        difficulty: 2,
        description: 'Create a game where the computer picks a random number and the player tries to guess it with hints (too high/too low).',
        descriptionAr: 'أنشئ لعبة يختار فيها الكمبيوتر رقماً عشوائياً ويحاول اللاعب تخمينه.',
        hints: ['Use rand() for random number', 'Use a while loop until correct'],
        hintsAr: ['استخدم rand() لرقم عشوائي', 'استخدم حلقة while حتى الصواب'],
        solution: `#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

int main() {
    srand(time(0));
    int secret = rand() % 100 + 1;
    int guess, attempts = 0;
    
    cout << "Guess a number between 1-100!" << endl;
    
    do {
        cout << "Your guess: ";
        cin >> guess;
        attempts++;
        
        if (guess > secret) cout << "Too high!" << endl;
        else if (guess < secret) cout << "Too low!" << endl;
    } while (guess != secret);
    
    cout << "Correct! You got it in " << attempts << " tries." << endl;
    return 0;
}`
    },
    9: {
        title: 'Multiplication Table',
        titleAr: 'جدول الضرب',
        difficulty: 2,
        description: 'Print the multiplication table (1-10) for any number entered by the user.',
        descriptionAr: 'اطبع جدول الضرب (1-10) لأي رقم يدخله المستخدم.',
        hints: ['Use a for loop from 1 to 10', 'Multiply the number by loop counter'],
        hintsAr: ['استخدم حلقة for من 1 إلى 10', 'اضرب الرقم في عداد الحلقة'],
        solution: `#include <iostream>
using namespace std;

int main() {
    int num;
    cout << "Enter a number: ";
    cin >> num;
    
    cout << "Multiplication Table for " << num << ":" << endl;
    for (int i = 1; i <= 10; i++) {
        cout << num << " x " << i << " = " << num * i << endl;
    }
    return 0;
}`
    },
    10: {
        title: 'Factorial Calculator',
        titleAr: 'حاسب المضروب',
        difficulty: 2,
        description: 'Calculate the factorial of a number (n! = n × (n-1) × ... × 1).',
        descriptionAr: 'احسب مضروب رقم (n! = n × (n-1) × ... × 1).',
        hints: ['Use a loop from 1 to n', 'Multiply result by each number'],
        hintsAr: ['استخدم حلقة من 1 إلى n', 'اضرب النتيجة في كل رقم'],
        solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    long long factorial = 1;
    
    cout << "Enter a number: ";
    cin >> n;
    
    for (int i = 1; i <= n; i++) {
        factorial *= i;
    }
    
    cout << n << "! = " << factorial << endl;
    return 0;
}`
    },
    11: {
        title: 'Prime Number Checker', titleAr: 'فاحص الأعداد الأولية', difficulty: 2,
        description: 'Check if a number is prime (only divisible by 1 and itself).',
        descriptionAr: 'تحقق إذا كان الرقم أولياً.', hints: ['Check divisibility from 2 to sqrt(n)'], hintsAr: ['تحقق من القابلية للقسمة من 2 إلى جذر n'],
        solution: `#include <iostream>
using namespace std;

int main() {
    int n;
    bool isPrime = true;
    cout << "Enter number: ";
    cin >> n;
    
    if (n <= 1) isPrime = false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) { isPrime = false; break; }
    }
    cout << n << (isPrime ? " is prime" : " is not prime") << endl;
    return 0;
}`
    },
    12: {
        title: 'Fibonacci Sequence', titleAr: 'متتالية فيبوناتشي', difficulty: 2, description: 'Generate Fibonacci numbers up to n terms.', descriptionAr: 'ولّد أرقام فيبوناتشي حتى n حد.', hints: ['Each number is sum of previous two'], hintsAr: ['كل رقم هو مجموع الرقمين السابقين'], solution: `#include <iostream>
using namespace std;
int main() {
    int n, a = 0, b = 1;
    cout << "How many terms? ";
    cin >> n;
    for (int i = 0; i < n; i++) {
        cout << a << " ";
        int next = a + b;
        a = b; b = next;
    }
    return 0;
}` },
    13: {
        title: 'Simple ATM', titleAr: 'صراف آلي', difficulty: 3, description: 'Simulate ATM with deposit, withdraw, check balance.', descriptionAr: 'حاكِ صراف آلي مع إيداع وسحب ورصيد.', hints: ['Use a menu loop', 'Track balance variable'], hintsAr: ['استخدم قائمة متكررة'], solution: `#include <iostream>
using namespace std;
int main() {
    double balance = 1000;
    int choice;
    do {
        cout << "1.Check 2.Deposit 3.Withdraw 4.Exit: ";
        cin >> choice;
        double amount;
        if (choice == 1) cout << "Balance: $" << balance << endl;
        else if (choice == 2) { cin >> amount; balance += amount; }
        else if (choice == 3) { cin >> amount; if (amount <= balance) balance -= amount; }
    } while (choice != 4);
    return 0;
}` },
    14: {
        title: 'Rock Paper Scissors', titleAr: 'حجر ورقة مقص', difficulty: 3, description: 'Play rock-paper-scissors against the computer.', descriptionAr: 'العب حجر-ورقة-مقص ضد الكمبيوتر.', hints: ['1=rock, 2=paper, 3=scissors'], hintsAr: ['1=حجر، 2=ورقة، 3=مقص'], solution: `#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;
int main() {
    srand(time(0));
    int comp = rand() % 3 + 1, player;
    cout << "1.Rock 2.Paper 3.Scissors: ";
    cin >> player;
    string names[] = {"", "Rock", "Paper", "Scissors"};
    cout << "Computer: " << names[comp] << endl;
    if (player == comp) cout << "Tie!" << endl;
    else if ((player == 1 && comp == 3) || (player == 2 && comp == 1) || (player == 3 && comp == 2))
        cout << "You win!" << endl;
    else cout << "Computer wins!" << endl;
    return 0;
}` },
    15: {
        title: 'Password Generator', titleAr: 'مولد كلمات المرور', difficulty: 3, description: 'Generate random passwords of specified length.', descriptionAr: 'ولّد كلمات مرور عشوائية بطول محدد.', hints: ['Use random characters from a string of allowed chars'], hintsAr: ['استخدم أحرف عشوائية'], solution: `#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;
int main() {
    string chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$";
    int len;
    cout << "Password length: ";
    cin >> len;
    srand(time(0));
    for (int i = 0; i < len; i++) cout << chars[rand() % chars.length()];
    cout << endl;
    return 0;
}` },
    16: {
        title: 'Array Statistics', titleAr: 'إحصائيات المصفوفة', difficulty: 3, description: 'Find min, max, sum, and average of array elements.', descriptionAr: 'اعثر على الحد الأدنى والأقصى والمجموع والمتوسط.', hints: ['Loop through array tracking values'], hintsAr: ['تتبع القيم خلال الحلقة'], solution: `#include <iostream>
using namespace std;
int main() {
    int arr[] = {5, 2, 8, 1, 9, 3};
    int n = 6, minVal = arr[0], maxVal = arr[0], sum = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] < minVal) minVal = arr[i];
        if (arr[i] > maxVal) maxVal = arr[i];
        sum += arr[i];
    }
    cout << "Min: " << minVal << ", Max: " << maxVal << ", Avg: " << (double)sum/n << endl;
    return 0;
}` },
    17: {
        title: 'Bubble Sort', titleAr: 'ترتيب الفقاعات', difficulty: 3, description: 'Sort an array using bubble sort algorithm.', descriptionAr: 'رتب مصفوفة باستخدام خوارزمية ترتيب الفقاعات.', hints: ['Compare adjacent elements and swap'], hintsAr: ['قارن العناصر المتجاورة وبدّل'], solution: `#include <iostream>
using namespace std;
int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = 7;
    for (int i = 0; i < n-1; i++)
        for (int j = 0; j < n-i-1; j++)
            if (arr[j] > arr[j+1]) swap(arr[j], arr[j+1]);
    for (int i = 0; i < n; i++) cout << arr[i] << " ";
    return 0;
}` },
    18: {
        title: 'Linear Search', titleAr: 'البحث الخطي', difficulty: 3, description: 'Search for an element in an array.', descriptionAr: 'ابحث عن عنصر في مصفوفة.', hints: ['Check each element one by one'], hintsAr: ['تحقق من كل عنصر واحداً تلو الآخر'], solution: `#include <iostream>
using namespace std;
int main() {
    int arr[] = {5, 2, 8, 1, 9};
    int target, found = -1;
    cout << "Search for: ";
    cin >> target;
    for (int i = 0; i < 5; i++)
        if (arr[i] == target) { found = i; break; }
    if (found != -1) cout << "Found at index " << found << endl;
    else cout << "Not found" << endl;
    return 0;
}` },
    19: {
        title: 'Palindrome Checker', titleAr: 'فاحص التناظر', difficulty: 3, description: 'Check if a string reads the same forwards and backwards.', descriptionAr: 'تحقق إذا كانت الكلمة تُقرأ نفسها من الأمام والخلف.', hints: ['Compare first char with last, second with second-last'], hintsAr: ['قارن الحرف الأول مع الأخير'], solution: `#include <iostream>
using namespace std;
int main() {
    string s;
    cout << "Enter word: ";
    cin >> s;
    bool isPalin = true;
    for (int i = 0; i < s.length()/2; i++)
        if (s[i] != s[s.length()-1-i]) isPalin = false;
    cout << (isPalin ? "Palindrome!" : "Not palindrome") << endl;
    return 0;
}` },
    20: {
        title: 'Word Counter', titleAr: 'عدّاد الكلمات', difficulty: 3, description: 'Count words in a sentence.', descriptionAr: 'عد الكلمات في جملة.', hints: ['Count spaces + 1'], hintsAr: ['عد الفراغات + 1'], solution: `#include <iostream>
using namespace std;
int main() {
    string s;
    cout << "Enter sentence: ";
    getline(cin, s);
    int count = 1;
    for (char c : s) if (c == ' ') count++;
    cout << "Words: " << count << endl;
    return 0;
}` },
    21: {
        title: 'Student Records', titleAr: 'سجلات الطلاب', difficulty: 4, description: 'Store and display student data using structures.', descriptionAr: 'خزّن وأظهر بيانات الطلاب باستخدام الهياكل.', hints: ['Create a struct with name, id, grade'], hintsAr: ['أنشئ هيكل باسم ورقم ودرجة'], solution: `#include <iostream>
using namespace std;
struct Student { string name; int id; double grade; };
int main() {
    Student s1 = {"Ahmed", 101, 89.5};
    cout << "Name: " << s1.name << ", ID: " << s1.id << ", Grade: " << s1.grade << endl;
    return 0;
}` },
    22: {
        title: 'Binary Search', titleAr: 'البحث الثنائي', difficulty: 4, description: 'Search a sorted array using binary search.', descriptionAr: 'ابحث في مصفوفة مرتبة باستخدام البحث الثنائي.', hints: ['Divide and conquer - check middle'], hintsAr: ['فرّق وسُد - تحقق من الوسط'], solution: `#include <iostream>
using namespace std;
int main() {
    int arr[] = {1, 3, 5, 7, 9, 11, 13};
    int target = 7, left = 0, right = 6, found = -1;
    while (left <= right) {
        int mid = (left + right) / 2;
        if (arr[mid] == target) { found = mid; break; }
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    cout << (found != -1 ? "Found!" : "Not found") << endl;
    return 0;
}` },
    23: {
        title: 'Matrix Operations', titleAr: 'عمليات المصفوفات', difficulty: 4, description: 'Add two matrices.', descriptionAr: 'اجمع مصفوفتين.', hints: ['Use nested loops for 2D arrays'], hintsAr: ['استخدم حلقات متداخلة'], solution: `#include <iostream>
using namespace std;
int main() {
    int a[2][2] = {{1,2},{3,4}}, b[2][2] = {{5,6},{7,8}}, c[2][2];
    for (int i = 0; i < 2; i++)
        for (int j = 0; j < 2; j++)
            c[i][j] = a[i][j] + b[i][j];
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) cout << c[i][j] << " ";
        cout << endl;
    }
    return 0;
}` },
    24: {
        title: 'Tic Tac Toe', titleAr: 'إكس أو', difficulty: 4, description: 'Create a 2-player tic-tac-toe game.', descriptionAr: 'أنشئ لعبة إكس أو للاعبين.', hints: ['Use 3x3 array, check win conditions'], hintsAr: ['استخدم مصفوفة 3×3'], solution: `#include <iostream>
using namespace std;
char board[3][3] = {{'1','2','3'},{'4','5','6'},{'7','8','9'}};
void display() { for(int i=0;i<3;i++){for(int j=0;j<3;j++)cout<<board[i][j]<<" ";cout<<endl;}}
int main() {
    int pos; char player = 'X';
    for (int turn = 0; turn < 9; turn++) {
        display();
        cout << player << "'s turn: ";
        cin >> pos;
        board[(pos-1)/3][(pos-1)%3] = player;
        player = (player == 'X') ? 'O' : 'X';
    }
    display();
    return 0;
}` },
    25: {
        title: 'File Logger', titleAr: 'مسجل الملفات', difficulty: 4, description: 'Write messages to a log file.', descriptionAr: 'اكتب رسائل إلى ملف سجل.', hints: ['Use ofstream to write to file'], hintsAr: ['استخدم ofstream للكتابة'], solution: `#include <iostream>
#include <fstream>
using namespace std;
int main() {
    ofstream file("log.txt");
    file << "Log started" << endl;
    file << "Entry 1: Hello" << endl;
    file.close();
    cout << "Log written!" << endl;
    return 0;
}` },
    26: {
        title: 'Contact Book', titleAr: 'دفتر جهات الاتصال', difficulty: 4, description: 'Store contacts with name and phone.', descriptionAr: 'خزّن جهات اتصال باسم ورقم.', hints: ['Use struct array or file'], hintsAr: ['استخدم مصفوفة هياكل'], solution: `#include <iostream>
using namespace std;
struct Contact { string name, phone; };
int main() {
    Contact contacts[10];
    int count = 0;
    contacts[count++] = {"Ahmed", "0123456789"};
    contacts[count++] = {"Sara", "0987654321"};
    for (int i = 0; i < count; i++)
        cout << contacts[i].name << ": " << contacts[i].phone << endl;
    return 0;
}` },
    27: {
        title: 'Quiz Application', titleAr: 'تطبيق اختبار', difficulty: 5,
        description: 'Interactive quiz app using arrays of structs, functions, string comparison, and score tracking with file persistence.',
        descriptionAr: 'تطبيق اختبار تفاعلي باستخدام مصفوفات الهياكل والدوال ومقارنة النصوص وتتبع النتيجة مع حفظ في ملف.',
        hints: ['Use struct for questions', 'Array of structs for quiz bank', 'Save high score to file', 'Use functions for display and checking'],
        hintsAr: ['استخدم هيكل للأسئلة', 'مصفوفة هياكل لبنك الأسئلة', 'احفظ أعلى نتيجة في ملف'],
        solution: `#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nstruct Question {\n    string text;\n    string options[4];\n    int correct;  // 0-3\n};\n\nvoid displayQuestion(Question q, int num) {\n    cout << "\\nQ" << num << ": " << q.text << endl;\n    for (int i = 0; i < 4; i++)\n        cout << "  " << (i+1) << ". " << q.options[i] << endl;\n}\n\nint loadHighScore() {\n    ifstream file("highscore.txt");\n    int score = 0;\n    if (file.is_open()) { file >> score; file.close(); }\n    return score;\n}\n\nvoid saveHighScore(int score) {\n    ofstream file("highscore.txt");\n    file << score;\n    file.close();\n}\n\nint main() {\n    Question quiz[5] = {\n        {"What is the size of int in C++?", {"2 bytes", "4 bytes", "8 bytes", "Depends"}, 1},\n        {"Which operator gets memory address?", {"*", "&", "->", "#"}, 1},\n        {"What does void mean?", {"Returns 0", "Returns nothing", "Error", "Empty string"}, 1},\n        {"Array index starts at?", {"1", "0", "-1", "Depends"}, 1},\n        {"Which reads entire line?", {"cin >>", "scanf", "getline", "read"}, 2}\n    };\n\n    int score = 0, answer;\n    cout << "=== C++ Quiz ==="  << endl;\n\n    for (int i = 0; i < 5; i++) {\n        displayQuestion(quiz[i], i+1);\n        cout << "Your answer (1-4): ";\n        cin >> answer;\n        if (answer-1 == quiz[i].correct) {\n            cout << "Correct!" << endl;\n            score++;\n        } else {\n            cout << "Wrong! Answer: " << quiz[i].options[quiz[i].correct] << endl;\n        }\n    }\n\n    cout << "\\nScore: " << score << "/5" << endl;\n    int highScore = loadHighScore();\n    if (score > highScore) {\n        cout << "New high score!" << endl;\n        saveHighScore(score);\n    } else {\n        cout << "High score: " << highScore << endl;\n    }\n    return 0;\n}`
    },
    28: {
        title: 'Bank Management', titleAr: 'إدارة البنك', difficulty: 5,
        description: 'Bank system with structs for accounts, functions for operations (deposit, withdraw, transfer), and file-based persistence.',
        descriptionAr: 'نظام بنكي مع هياكل للحسابات ودوال للعمليات وحفظ في ملفات.',
        hints: ['Struct for Account with id, name, balance', 'Functions for deposit, withdraw, display', 'Menu loop with switch', 'Save/load from file'],
        hintsAr: ['هيكل للحساب', 'دوال للإيداع والسحب', 'قائمة متكررة', 'حفظ/تحميل من ملف'],
        solution: `#include <iostream>\n#include <fstream>\nusing namespace std;\n\nstruct Account {\n    int id;\n    string name;\n    double balance;\n};\n\nvoid deposit(Account &acc, double amount) {\n    acc.balance += amount;\n    cout << "Deposited $" << amount << ". New balance: $" << acc.balance << endl;\n}\n\nbool withdraw(Account &acc, double amount) {\n    if (amount > acc.balance) {\n        cout << "Insufficient funds!" << endl;\n        return false;\n    }\n    acc.balance -= amount;\n    cout << "Withdrew $" << amount << ". New balance: $" << acc.balance << endl;\n    return true;\n}\n\nvoid displayAccount(Account acc) {\n    cout << "\\n--- Account Info ---" << endl;\n    cout << "ID: " << acc.id << endl;\n    cout << "Name: " << acc.name << endl;\n    cout << "Balance: $" << acc.balance << endl;\n}\n\nvoid saveAccount(Account acc) {\n    ofstream file("account.txt");\n    file << acc.id << endl << acc.name << endl << acc.balance;\n    file.close();\n}\n\nint main() {\n    Account acc = {1001, "Ahmed", 5000.0};\n    int choice;\n    double amount;\n\n    do {\n        cout << "\\n=== Bank Menu ===" << endl;\n        cout << "1. View Account" << endl;\n        cout << "2. Deposit" << endl;\n        cout << "3. Withdraw" << endl;\n        cout << "4. Save & Exit" << endl;\n        cout << "Choice: ";\n        cin >> choice;\n\n        switch (choice) {\n            case 1: displayAccount(acc); break;\n            case 2:\n                cout << "Amount: $";\n                cin >> amount;\n                deposit(acc, amount);\n                break;\n            case 3:\n                cout << "Amount: $";\n                cin >> amount;\n                withdraw(acc, amount);\n                break;\n            case 4:\n                saveAccount(acc);\n                cout << "Account saved. Goodbye!" << endl;\n                break;\n        }\n    } while (choice != 4);\n    return 0;\n}`
    },
    29: {
        title: 'Library System', titleAr: 'نظام المكتبة', difficulty: 5,
        description: 'Library management using array of structs, functions for adding/searching/borrowing books, and file storage.',
        descriptionAr: 'نظام إدارة مكتبة باستخدام مصفوفة هياكل ودوال للإضافة والبحث والاستعارة.',
        hints: ['Book struct with title, author, available', 'Array of books with count tracker', 'Functions for add, search, borrow, return', 'Save catalog to file'],
        hintsAr: ['هيكل كتاب', 'مصفوفة كتب مع عداد', 'دوال للإضافة والبحث والاستعارة'],
        solution: `#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nstruct Book {\n    string title;\n    string author;\n    bool available;\n};\n\nvoid addBook(Book books[], int &count, string title, string author) {\n    books[count] = {title, author, true};\n    count++;\n    cout << "Added: " << title << endl;\n}\n\nvoid displayBooks(Book books[], int count) {\n    cout << "\\n=== Library Catalog (" << count << " books) ===" << endl;\n    for (int i = 0; i < count; i++) {\n        cout << (i+1) << ". " << books[i].title << " by " << books[i].author\n             << " [" << (books[i].available ? "Available" : "Borrowed") << "]" << endl;\n    }\n}\n\nint searchBook(Book books[], int count, string query) {\n    for (int i = 0; i < count; i++) {\n        if (books[i].title.find(query) != string::npos) return i;\n    }\n    return -1;\n}\n\nvoid borrowBook(Book books[], int index) {\n    if (books[index].available) {\n        books[index].available = false;\n        cout << "Borrowed: " << books[index].title << endl;\n    } else {\n        cout << "Already borrowed!" << endl;\n    }\n}\n\nvoid saveCatalog(Book books[], int count) {\n    ofstream file("library.txt");\n    for (int i = 0; i < count; i++) {\n        file << books[i].title << "," << books[i].author << "," << books[i].available << endl;\n    }\n    file.close();\n    cout << "Catalog saved!" << endl;\n}\n\nint main() {\n    Book books[50];\n    int count = 0;\n    addBook(books, count, "C++ Primer", "Lippman");\n    addBook(books, count, "Clean Code", "Robert Martin");\n    addBook(books, count, "The Pragmatic Programmer", "Hunt & Thomas");\n\n    int choice;\n    do {\n        cout << "\\n1.View  2.Search  3.Borrow  4.Return  5.Save  6.Exit: ";\n        cin >> choice;\n        cin.ignore();\n\n        if (choice == 1) displayBooks(books, count);\n        else if (choice == 2) {\n            string query;\n            cout << "Search: "; getline(cin, query);\n            int idx = searchBook(books, count, query);\n            if (idx != -1) cout << "Found: " << books[idx].title << endl;\n            else cout << "Not found." << endl;\n        }\n        else if (choice == 3) {\n            displayBooks(books, count);\n            int idx; cout << "Book #: "; cin >> idx;\n            if (idx >= 1 && idx <= count) borrowBook(books, idx-1);\n        }\n        else if (choice == 4) {\n            int idx; cout << "Return book #: "; cin >> idx;\n            if (idx >= 1 && idx <= count) {\n                books[idx-1].available = true;\n                cout << "Returned!" << endl;\n            }\n        }\n        else if (choice == 5) saveCatalog(books, count);\n    } while (choice != 6);\n    return 0;\n}`
    },
    30: {
        title: 'Mini Text Editor', titleAr: 'محرر نصوص مصغر', difficulty: 5,
        description: 'Text editor with save/load, word count, find/replace, and line editing — combining strings, file I/O, and functions.',
        descriptionAr: 'محرر نصوص مع حفظ/تحميل وعد كلمات وبحث/استبدال — يجمع النصوص والملفات والدوال.',
        hints: ['Store lines in string array', 'Functions for each operation', 'File I/O for save/load', 'String find/replace for editing'],
        hintsAr: ['خزّن الأسطر في مصفوفة نصوص', 'دوال لكل عملية', 'ملفات للحفظ/التحميل'],
        solution: `#include <iostream>\n#include <fstream>\n#include <string>\nusing namespace std;\n\nstring lines[100];\nint lineCount = 0;\n\nvoid addLine(string text) {\n    if (lineCount < 100) {\n        lines[lineCount++] = text;\n        cout << "Line added." << endl;\n    }\n}\n\nvoid displayAll() {\n    cout << "\\n--- Document ---" << endl;\n    for (int i = 0; i < lineCount; i++)\n        cout << (i+1) << ": " << lines[i] << endl;\n    cout << "--- End ---" << endl;\n}\n\nint countWords() {\n    int total = 0;\n    for (int i = 0; i < lineCount; i++) {\n        if (lines[i].length() > 0) {\n            total++;\n            for (int j = 0; j < lines[i].length(); j++)\n                if (lines[i][j] == ' ') total++;\n        }\n    }\n    return total;\n}\n\nvoid saveFile(string filename) {\n    ofstream file(filename);\n    for (int i = 0; i < lineCount; i++)\n        file << lines[i] << endl;\n    file.close();\n    cout << "Saved to " << filename << endl;\n}\n\nvoid loadFile(string filename) {\n    ifstream file(filename);\n    if (!file.is_open()) { cout << "File not found!" << endl; return; }\n    lineCount = 0;\n    while (getline(file, lines[lineCount]) && lineCount < 100)\n        lineCount++;\n    file.close();\n    cout << "Loaded " << lineCount << " lines." << endl;\n}\n\nvoid findReplace(string find, string replace) {\n    int found = 0;\n    for (int i = 0; i < lineCount; i++) {\n        int pos;\n        while ((pos = lines[i].find(find)) != string::npos) {\n            lines[i].replace(pos, find.length(), replace);\n            found++;\n        }\n    }\n    cout << "Replaced " << found << " occurrences." << endl;\n}\n\nint main() {\n    int choice;\n    string input, input2;\n    cout << "=== Mini Text Editor ===" << endl;\n\n    do {\n        cout << "\\n1.Add  2.View  3.Save  4.Load  5.Words  6.Find/Replace  7.Exit: ";\n        cin >> choice;\n        cin.ignore();\n\n        switch (choice) {\n            case 1:\n                cout << "Enter text: ";\n                getline(cin, input);\n                addLine(input);\n                break;\n            case 2: displayAll(); break;\n            case 3:\n                cout << "Filename: "; getline(cin, input);\n                saveFile(input);\n                break;\n            case 4:\n                cout << "Filename: "; getline(cin, input);\n                loadFile(input);\n                break;\n            case 5: cout << "Words: " << countWords() << endl; break;\n            case 6:\n                cout << "Find: "; getline(cin, input);\n                cout << "Replace: "; getline(cin, input2);\n                findReplace(input, input2);\n                break;\n        }\n    } while (choice != 7);\n    cout << "Goodbye!" << endl;\n    return 0;\n}`
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = PROJECT_SOLUTIONS;
}
