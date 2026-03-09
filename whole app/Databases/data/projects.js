/**
 * Database Educational App - Projects Data
 * Detailed project specifications with C++ code
 */

const PROJECTS = {
    1: {
        id: 1,
        title: 'Personal Address Book',
        titleAr: 'دفتر العناوين الشخصي',
        difficulty: 1,
        description: 'Build a C++ address book application that stores contacts with names, phone numbers, and emails. Implement CRUD operations with file persistence so data survives program restarts.',
        descriptionAr: 'أنشئ تطبيق دفتر عناوين بلغة C++ يخزن جهات الاتصال بالأسماء وأرقام الهواتف والبريد الإلكتروني. نفذ عمليات CRUD مع حفظ على الملفات.',
        concepts: ['Structs', 'File I/O', 'CRUD Operations', 'Linear Search'],
        solution: `#include <iostream>
#include <fstream>
#include <vector>
#include <string>
using namespace std;

struct Contact {
    string name;
    string phone;
    string email;
};

vector<Contact> contacts;
const string FILENAME = "contacts.dat";

void saveToFile() {
    ofstream file(FILENAME);
    for (auto& c : contacts) {
        file << c.name << "\\n" << c.phone << "\\n" << c.email << "\\n";
    }
    file.close();
}

void loadFromFile() {
    ifstream file(FILENAME);
    Contact c;
    while (getline(file, c.name)) {
        getline(file, c.phone);
        getline(file, c.email);
        contacts.push_back(c);
    }
    file.close();
}

void addContact() {
    Contact c;
    cout << "Name: "; cin.ignore(); getline(cin, c.name);
    cout << "Phone: "; getline(cin, c.phone);
    cout << "Email: "; getline(cin, c.email);
    contacts.push_back(c);
    saveToFile();
    cout << "Contact added!\\n";
}

void viewContacts() {
    if (contacts.empty()) {
        cout << "No contacts found.\\n";
        return;
    }
    for (int i = 0; i < contacts.size(); i++) {
        cout << i+1 << ". " << contacts[i].name
             << " | " << contacts[i].phone
             << " | " << contacts[i].email << "\\n";
    }
}

void searchContact() {
    string query;
    cout << "Search name: "; cin.ignore(); getline(cin, query);
    bool found = false;
    for (auto& c : contacts) {
        if (c.name.find(query) != string::npos) {
            cout << c.name << " | " << c.phone << " | " << c.email << "\\n";
            found = true;
        }
    }
    if (!found) cout << "No matching contacts.\\n";
}

void deleteContact() {
    viewContacts();
    int idx;
    cout << "Delete # : "; cin >> idx;
    if (idx > 0 && idx <= contacts.size()) {
        contacts.erase(contacts.begin() + idx - 1);
        saveToFile();
        cout << "Deleted!\\n";
    }
}

int main() {
    loadFromFile();
    int choice;
    do {
        cout << "\\n=== Address Book ===\\n";
        cout << "1. Add  2. View  3. Search  4. Delete  0. Exit\\n";
        cout << "Choice: "; cin >> choice;
        switch(choice) {
            case 1: addContact(); break;
            case 2: viewContacts(); break;
            case 3: searchContact(); break;
            case 4: deleteContact(); break;
        }
    } while (choice != 0);
    return 0;
}`
    },

    2: {
        id: 2,
        title: 'Student Management System',
        titleAr: 'نظام إدارة الطلاب',
        difficulty: 2,
        description: 'Create a student records management system. Store student ID, name, grades, and GPA. Support adding, searching, sorting by GPA, and generating reports.',
        descriptionAr: 'أنشئ نظام إدارة سجلات طلاب. خزّن معرف الطالب والاسم والدرجات والمعدل. ادعم الإضافة والبحث والترتيب بالمعدل.',
        concepts: ['Structs', 'Vectors', 'Sorting', 'Search', 'File I/O'],
        solution: `#include <iostream>
#include <vector>
#include <algorithm>
#include <fstream>
using namespace std;

struct Student {
    int id;
    string name;
    double grades[5];
    double gpa;

    void calcGPA() {
        double sum = 0;
        for (int i = 0; i < 5; i++) sum += grades[i];
        gpa = sum / 5.0;
    }
};

vector<Student> students;

void addStudent() {
    Student s;
    cout << "ID: "; cin >> s.id;
    cout << "Name: "; cin.ignore(); getline(cin, s.name);
    cout << "Enter 5 grades:\\n";
    for (int i = 0; i < 5; i++) {
        cout << "  Grade " << i+1 << ": ";
        cin >> s.grades[i];
    }
    s.calcGPA();
    students.push_back(s);
    cout << "Student added! GPA: " << s.gpa << "\\n";
}

void viewAll() {
    cout << "\\nID\\tName\\t\\tGPA\\n";
    cout << "---\\t----\\t\\t---\\n";
    for (auto& s : students) {
        cout << s.id << "\\t" << s.name << "\\t\\t" << s.gpa << "\\n";
    }
}

void sortByGPA() {
    sort(students.begin(), students.end(),
         [](const Student& a, const Student& b) {
             return a.gpa > b.gpa;
         });
    cout << "Sorted by GPA (highest first):\\n";
    viewAll();
}

void searchStudent() {
    int id;
    cout << "Enter student ID: "; cin >> id;
    for (auto& s : students) {
        if (s.id == id) {
            cout << "Found: " << s.name << " (GPA: " << s.gpa << ")\\n";
            return;
        }
    }
    cout << "Student not found.\\n";
}

int main() {
    int choice;
    do {
        cout << "\\n=== Student Management ===\\n";
        cout << "1. Add  2. View All  3. Sort by GPA  4. Search  0. Exit\\n";
        cout << "Choice: "; cin >> choice;
        switch(choice) {
            case 1: addStudent(); break;
            case 2: viewAll(); break;
            case 3: sortByGPA(); break;
            case 4: searchStudent(); break;
        }
    } while (choice != 0);
    return 0;
}`
    },

    3: {
        id: 3,
        title: 'Library Database',
        titleAr: 'قاعدة بيانات المكتبة',
        difficulty: 2,
        description: 'Implement a library system with books (ISBN, title, author) and members (ID, name). Track book borrowing with a relationships table linking members to books.',
        descriptionAr: 'نفذ نظام مكتبة مع كتب (ISBN، عنوان، مؤلف) وأعضاء (معرف، اسم). تتبع استعارة الكتب بجدول علاقات.',
        concepts: ['Multiple Tables', 'Relationships', 'Foreign Keys', 'CRUD'],
        solution: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

struct Book {
    int isbn;
    string title;
    string author;
    bool available;
};

struct Member {
    int id;
    string name;
};

struct Borrow {
    int memberId;  // FK -> Member
    int bookIsbn;  // FK -> Book
    string date;
};

vector<Book> books;
vector<Member> members;
vector<Borrow> borrows;

void addBook() {
    Book b;
    cout << "ISBN: "; cin >> b.isbn;
    cout << "Title: "; cin.ignore(); getline(cin, b.title);
    cout << "Author: "; getline(cin, b.author);
    b.available = true;
    books.push_back(b);
    cout << "Book added!\\n";
}

void borrowBook() {
    int mid, bisbn;
    cout << "Member ID: "; cin >> mid;
    cout << "Book ISBN: "; cin >> bisbn;

    // Check member exists
    bool memberFound = false;
    for (auto& m : members) {
        if (m.id == mid) { memberFound = true; break; }
    }
    if (!memberFound) { cout << "Member not found!\\n"; return; }

    // Check book available
    for (auto& b : books) {
        if (b.isbn == bisbn) {
            if (!b.available) { cout << "Book not available!\\n"; return; }
            b.available = false;
            borrows.push_back({mid, bisbn, "2024-01-15"});
            cout << "Book borrowed!\\n";
            return;
        }
    }
    cout << "Book not found!\\n";
}

void viewAvailable() {
    cout << "\\nAvailable Books:\\n";
    for (auto& b : books) {
        if (b.available)
            cout << b.isbn << " - " << b.title << " by " << b.author << "\\n";
    }
}

int main() {
    // Seed data
    members.push_back({1, "Ahmed"});
    members.push_back({2, "Sara"});
    books.push_back({101, "Database Systems", "Ramez Elmasri", true});
    books.push_back({102, "C++ Primer", "Stanley Lippman", true});

    int choice;
    do {
        cout << "\\n=== Library System ===\\n";
        cout << "1. Add Book  2. Borrow  3. View Available  0. Exit\\n";
        cout << "Choice: "; cin >> choice;
        switch(choice) {
            case 1: addBook(); break;
            case 2: borrowBook(); break;
            case 3: viewAvailable(); break;
        }
    } while (choice != 0);
    return 0;
}`
    },

    4: {
        id: 4,
        title: 'Inventory System',
        titleAr: 'نظام المخزون',
        difficulty: 3,
        description: 'Build an inventory tracking system with products, categories, and stock levels. Include alerts for low stock, reports showing total value, and category summaries.',
        descriptionAr: 'أنشئ نظام تتبع مخزون مع منتجات وفئات ومستويات مخزون. اشمل تنبيهات للمخزون المنخفض وتقارير.',
        concepts: ['Aggregation', 'Reports', 'Filtering', 'Structs', 'Alerts'],
        solution: `#include <iostream>
#include <vector>
#include <string>
#include <iomanip>
using namespace std;

struct Product {
    int id;
    string name;
    string category;
    double price;
    int quantity;
};

vector<Product> inventory;
int nextId = 1;

void addProduct() {
    Product p;
    p.id = nextId++;
    cout << "Name: "; cin.ignore(); getline(cin, p.name);
    cout << "Category: "; getline(cin, p.category);
    cout << "Price: "; cin >> p.price;
    cout << "Quantity: "; cin >> p.quantity;
    inventory.push_back(p);
    cout << "Product #" << p.id << " added!\\n";
}

void viewAll() {
    cout << left << setw(5) << "ID" << setw(20) << "Name"
         << setw(15) << "Category" << setw(10) << "Price"
         << setw(8) << "Qty" << "\\n";
    cout << string(58, '-') << "\\n";
    for (auto& p : inventory) {
        cout << left << setw(5) << p.id << setw(20) << p.name
             << setw(15) << p.category << "$" << setw(9) << p.price
             << setw(8) << p.quantity << "\\n";
    }
}

void lowStockAlert() {
    cout << "\\n⚠️ Low Stock (< 5 items):\\n";
    bool found = false;
    for (auto& p : inventory) {
        if (p.quantity < 5) {
            cout << "  " << p.name << " - Only " << p.quantity << " left!\\n";
            found = true;
        }
    }
    if (!found) cout << "  All products well stocked.\\n";
}

void report() {
    double totalValue = 0;
    int totalItems = 0;
    for (auto& p : inventory) {
        totalValue += p.price * p.quantity;
        totalItems += p.quantity;
    }
    cout << "\\n=== Inventory Report ===\\n";
    cout << "Total Products: " << inventory.size() << "\\n";
    cout << "Total Items: " << totalItems << "\\n";
    cout << "Total Value: $" << fixed << setprecision(2) << totalValue << "\\n";
}

int main() {
    int choice;
    do {
        cout << "\\n=== Inventory System ===\\n";
        cout << "1. Add  2. View  3. Low Stock  4. Report  0. Exit\\n";
        cout << "Choice: "; cin >> choice;
        switch(choice) {
            case 1: addProduct(); break;
            case 2: viewAll(); break;
            case 3: lowStockAlert(); break;
            case 4: report(); break;
        }
    } while (choice != 0);
    return 0;
}`
    },

    5: {
        id: 5,
        title: 'Mini Banking System',
        titleAr: 'نظام بنكي مصغر',
        difficulty: 3,
        description: 'Create a banking system with accounts, deposits, withdrawals, and transfers. Implement transaction logging with BEGIN/COMMIT/ROLLBACK simulation.',
        descriptionAr: 'أنشئ نظام بنكي مع حسابات، إيداعات، سحوبات، وتحويلات. نفذ تسجيل المعاملات مع محاكاة BEGIN/COMMIT/ROLLBACK.',
        concepts: ['Transactions', 'CRUD', 'Logging', 'File Persistence'],
        solution: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

struct Account {
    int id;
    string name;
    double balance;
};

struct Transaction {
    int accountId;
    string type; // "DEPOSIT", "WITHDRAW", "TRANSFER"
    double amount;
    bool committed;
};

vector<Account> accounts;
vector<Transaction> txLog;
int nextAccId = 1001;

void createAccount() {
    Account a;
    a.id = nextAccId++;
    cout << "Name: "; cin.ignore(); getline(cin, a.name);
    cout << "Initial deposit: "; cin >> a.balance;
    accounts.push_back(a);
    txLog.push_back({a.id, "DEPOSIT", a.balance, true});
    cout << "Account #" << a.id << " created!\\n";
}

Account* findAccount(int id) {
    for (auto& a : accounts) {
        if (a.id == id) return &a;
    }
    return nullptr;
}

void deposit() {
    int id; double amount;
    cout << "Account ID: "; cin >> id;
    cout << "Amount: "; cin >> amount;
    Account* a = findAccount(id);
    if (!a) { cout << "Account not found!\\n"; return; }
    // BEGIN TRANSACTION
    double oldBalance = a->balance;
    a->balance += amount;
    // COMMIT
    txLog.push_back({id, "DEPOSIT", amount, true});
    cout << "Deposited $" << amount << ". New balance: $" << a->balance << "\\n";
}

void withdraw() {
    int id; double amount;
    cout << "Account ID: "; cin >> id;
    cout << "Amount: "; cin >> amount;
    Account* a = findAccount(id);
    if (!a) { cout << "Account not found!\\n"; return; }
    if (a->balance < amount) {
        // ROLLBACK
        txLog.push_back({id, "WITHDRAW", amount, false});
        cout << "Insufficient funds! Transaction rolled back.\\n";
        return;
    }
    a->balance -= amount;
    txLog.push_back({id, "WITHDRAW", amount, true});
    cout << "Withdrew $" << amount << ". Balance: $" << a->balance << "\\n";
}

void viewTransactions() {
    cout << "\\n=== Transaction Log ===\\n";
    for (auto& t : txLog) {
        cout << "Acct#" << t.accountId << " " << t.type
             << " $" << t.amount
             << (t.committed ? " [COMMITTED]" : " [ROLLED BACK]") << "\\n";
    }
}

int main() {
    int choice;
    do {
        cout << "\\n=== Mini Bank ===\\n";
        cout << "1. Create Account  2. Deposit  3. Withdraw  4. TX Log  0. Exit\\n";
        cout << "Choice: "; cin >> choice;
        switch(choice) {
            case 1: createAccount(); break;
            case 2: deposit(); break;
            case 3: withdraw(); break;
            case 4: viewTransactions(); break;
        }
    } while (choice != 0);
    return 0;
}`
    },

    6: {
        id: 6,
        title: 'Todo List with Persistence',
        titleAr: 'قائمة مهام مع حفظ',
        difficulty: 2,
        description: 'Build a todo application that saves tasks to a file. Support adding, completing, filtering (all/active/completed), and deleting tasks.',
        descriptionAr: 'أنشئ تطبيق مهام يحفظ المهام على ملف. ادعم الإضافة والإكمال والتصفية والحذف.',
        concepts: ['File I/O', 'CRUD', 'Filtering', 'Structs'],
        solution: `#include <iostream>
#include <vector>
#include <fstream>
#include <string>
using namespace std;

struct Task {
    int id;
    string text;
    bool done;
};

vector<Task> tasks;
int nextId = 1;

void save() {
    ofstream f("todos.txt");
    for (auto& t : tasks)
        f << t.id << "|" << t.text << "|" << t.done << "\\n";
}

void load() {
    ifstream f("todos.txt");
    string line;
    while (getline(f, line)) {
        Task t;
        size_t p1 = line.find('|');
        size_t p2 = line.rfind('|');
        t.id = stoi(line.substr(0, p1));
        t.text = line.substr(p1+1, p2-p1-1);
        t.done = (line.substr(p2+1) == "1");
        tasks.push_back(t);
        if (t.id >= nextId) nextId = t.id + 1;
    }
}

void addTask() {
    Task t;
    t.id = nextId++;
    t.done = false;
    cout << "Task: "; cin.ignore(); getline(cin, t.text);
    tasks.push_back(t);
    save();
    cout << "Added!\\n";
}

void viewTasks(int filter) { // 0=all, 1=active, 2=done
    for (auto& t : tasks) {
        if (filter == 1 && t.done) continue;
        if (filter == 2 && !t.done) continue;
        cout << t.id << ". [" << (t.done ? "X" : " ") << "] " << t.text << "\\n";
    }
}

void toggleTask() {
    int id;
    cout << "Toggle task #: "; cin >> id;
    for (auto& t : tasks) {
        if (t.id == id) { t.done = !t.done; save(); return; }
    }
}

int main() {
    load();
    int choice;
    do {
        cout << "\\n=== Todo List ===\\n";
        cout << "1. Add  2. All  3. Active  4. Done  5. Toggle  0. Exit\\n";
        cout << "Choice: "; cin >> choice;
        switch(choice) {
            case 1: addTask(); break;
            case 2: viewTasks(0); break;
            case 3: viewTasks(1); break;
            case 4: viewTasks(2); break;
            case 5: toggleTask(); break;
        }
    } while (choice != 0);
    return 0;
}`
    },

    7: {
        id: 7,
        title: 'Simple E-Commerce Catalog',
        titleAr: 'كتالوج تجارة إلكترونية بسيط',
        difficulty: 3,
        description: 'Build a product catalog with categories, search by name/category, price range filtering, and a simple cart system.',
        descriptionAr: 'أنشئ كتالوج منتجات مع فئات وبحث بالاسم والفئة وتصفية بالسعر ونظام سلة بسيط.',
        concepts: ['Tables', 'Search', 'Filtering', 'Relationships', 'Aggregation'],
        solution: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

struct Product {
    int id;
    string name;
    string category;
    double price;
    int stock;
};

struct CartItem {
    int productId;
    int qty;
};

vector<Product> products = {
    {1, "Laptop", "Electronics", 999.99, 10},
    {2, "Phone", "Electronics", 599.99, 25},
    {3, "Desk", "Furniture", 249.99, 15},
    {4, "Chair", "Furniture", 179.99, 20},
    {5, "Book: C++", "Books", 49.99, 50},
    {6, "Book: SQL", "Books", 39.99, 30}
};
vector<CartItem> cart;

void searchByCategory() {
    string cat;
    cout << "Category: "; cin.ignore(); getline(cin, cat);
    for (auto& p : products) {
        if (p.category == cat)
            cout << p.id << ". " << p.name << " - $" << p.price << "\\n";
    }
}

void filterByPrice() {
    double minP, maxP;
    cout << "Min price: "; cin >> minP;
    cout << "Max price: "; cin >> maxP;
    for (auto& p : products) {
        if (p.price >= minP && p.price <= maxP)
            cout << p.id << ". " << p.name << " - $" << p.price << "\\n";
    }
}

void addToCart() {
    int id, qty;
    cout << "Product ID: "; cin >> id;
    cout << "Quantity: "; cin >> qty;
    cart.push_back({id, qty});
    cout << "Added to cart!\\n";
}

void viewCart() {
    double total = 0;
    cout << "\\n=== Your Cart ===\\n";
    for (auto& ci : cart) {
        for (auto& p : products) {
            if (p.id == ci.productId) {
                double sub = p.price * ci.qty;
                cout << p.name << " x" << ci.qty << " = $" << sub << "\\n";
                total += sub;
            }
        }
    }
    cout << "Total: $" << total << "\\n";
}

int main() {
    int choice;
    do {
        cout << "\\n=== E-Commerce ===\\n";
        cout << "1. All Products  2. By Category  3. By Price\\n";
        cout << "4. Add to Cart  5. View Cart  0. Exit\\n";
        cout << "Choice: "; cin >> choice;
        switch(choice) {
            case 1:
                for (auto& p : products)
                    cout << p.id << ". " << p.name << " (" << p.category
                         << ") $" << p.price << "\\n";
                break;
            case 2: searchByCategory(); break;
            case 3: filterByPrice(); break;
            case 4: addToCart(); break;
            case 5: viewCart(); break;
        }
    } while (choice != 0);
    return 0;
}`
    },

    8: {
        id: 8,
        title: 'Social Network Simulation',
        titleAr: 'محاكاة شبكة اجتماعية',
        difficulty: 4,
        description: 'Simulate a social network with users, friendships (many-to-many), and posts. Users can add friends, create posts, and view their friends\' posts (news feed).',
        descriptionAr: 'حاكِ شبكة اجتماعية مع مستخدمين وصداقات (عديد-لعديد) ومنشورات.',
        concepts: ['Many-to-Many Relationships', 'Graph Simulation', 'Complex Queries'],
        solution: `#include <iostream>
#include <vector>
#include <string>
#include <set>
using namespace std;

struct User { int id; string name; };
struct Post { int userId; string content; string timestamp; };
struct Friendship { int user1; int user2; };

vector<User> users;
vector<Post> posts;
vector<Friendship> friendships;

void addFriend(int u1, int u2) {
    friendships.push_back({u1, u2});
    friendships.push_back({u2, u1}); // Bidirectional
    cout << "Friendship created!\\n";
}

vector<int> getFriends(int userId) {
    vector<int> friends;
    for (auto& f : friendships) {
        if (f.user1 == userId) friends.push_back(f.user2);
    }
    return friends;
}

void newsFeed(int userId) {
    auto friends = getFriends(userId);
    set<int> friendSet(friends.begin(), friends.end());
    friendSet.insert(userId); // Include own posts

    cout << "\\n=== News Feed ===\\n";
    for (auto& p : posts) {
        if (friendSet.count(p.userId)) {
            string authorName = "Unknown";
            for (auto& u : users) {
                if (u.id == p.userId) { authorName = u.name; break; }
            }
            cout << authorName << ": " << p.content << "\\n";
        }
    }
}

int main() {
    users = {{1,"Ahmed"},{2,"Sara"},{3,"Omar"},{4,"Layla"}};
    addFriend(1, 2); addFriend(1, 3); addFriend(2, 4);

    posts.push_back({1, "Learning databases!", "10:00"});
    posts.push_back({2, "SQL is powerful", "10:30"});
    posts.push_back({3, "Building a DB engine", "11:00"});
    posts.push_back({4, "NoSQL is flexible", "11:30"});

    cout << "Ahmed's friends: ";
    for (int fid : getFriends(1)) {
        for (auto& u : users) if (u.id == fid) cout << u.name << " ";
    }
    cout << "\\n";

    newsFeed(1); // Ahmed sees his, Sara's, Omar's posts
    return 0;
}`
    },

    9: {
        id: 9,
        title: 'Log Analytics Tool',
        titleAr: 'أداة تحليل السجلات',
        difficulty: 4,
        description: 'Parse log files and run analytical queries: count by type, filter by date, aggregate statistics, and find patterns.',
        descriptionAr: 'حلل ملفات السجلات وشغّل استعلامات تحليلية: العدد بالنوع، التصفية بالتاريخ، الإحصائيات.',
        concepts: ['Parsing', 'Aggregation', 'Filtering', 'File I/O'],
        solution: `#include <iostream>
#include <vector>
#include <string>
#include <map>
using namespace std;

struct LogEntry {
    string timestamp;
    string level; // INFO, WARNING, ERROR
    string source;
    string message;
};

vector<LogEntry> logs = {
    {"2024-01-15 10:00", "INFO", "Server", "Started"},
    {"2024-01-15 10:05", "WARNING", "DB", "Slow query detected"},
    {"2024-01-15 10:10", "ERROR", "Auth", "Login failed"},
    {"2024-01-15 10:15", "INFO", "Server", "Request processed"},
    {"2024-01-15 10:20", "ERROR", "DB", "Connection timeout"},
    {"2024-01-15 10:25", "INFO", "Auth", "User logged in"},
    {"2024-01-15 10:30", "WARNING", "Server", "High memory usage"},
    {"2024-01-15 10:35", "ERROR", "Auth", "Invalid token"},
};

void countByLevel() {
    map<string, int> counts;
    for (auto& l : logs) counts[l.level]++;
    cout << "\\n--- Count by Level ---\\n";
    for (auto& [level, count] : counts)
        cout << level << ": " << count << "\\n";
}

void filterByLevel(string level) {
    cout << "\\n--- " << level << " Logs ---\\n";
    for (auto& l : logs) {
        if (l.level == level)
            cout << l.timestamp << " [" << l.source << "] " << l.message << "\\n";
    }
}

void countBySource() {
    map<string, int> counts;
    for (auto& l : logs) counts[l.source]++;
    cout << "\\n--- Count by Source ---\\n";
    for (auto& [src, count] : counts)
        cout << src << ": " << count << " entries\\n";
}

int main() {
    int choice;
    do {
        cout << "\\n=== Log Analytics ===\\n";
        cout << "1. All Logs  2. Count by Level  3. Errors Only\\n";
        cout << "4. Warnings Only  5. Count by Source  0. Exit\\n";
        cout << "Choice: "; cin >> choice;
        switch(choice) {
            case 1:
                for (auto& l : logs)
                    cout << l.timestamp << " [" << l.level << "] "
                         << l.source << ": " << l.message << "\\n";
                break;
            case 2: countByLevel(); break;
            case 3: filterByLevel("ERROR"); break;
            case 4: filterByLevel("WARNING"); break;
            case 5: countBySource(); break;
        }
    } while (choice != 0);
    return 0;
}`
    },

    10: {
        id: 10,
        title: 'Mini Relational DB Engine',
        titleAr: 'محرك قاعدة بيانات علائقية مصغر',
        difficulty: 5,
        description: 'Build a mini relational database engine that supports CREATE TABLE, INSERT, SELECT with WHERE, and basic indexing using a hash map. Includes a simple query parser.',
        descriptionAr: 'أنشئ محرك قاعدة بيانات علائقية مصغر يدعم CREATE TABLE وINSERT وSELECT مع WHERE والفهرسة بخريطة تجزئة.',
        concepts: ['Query Parsing', 'Hash Indexes', 'Table Storage', 'CRUD Engine'],
        solution: `#include <iostream>
#include <vector>
#include <map>
#include <string>
#include <sstream>
using namespace std;

struct Column { string name; string type; };
struct Row { vector<string> values; };

struct Table {
    string name;
    vector<Column> columns;
    vector<Row> rows;
    map<string, map<string, vector<int>>> indexes; // col -> val -> row indices

    void createIndex(string colName) {
        int colIdx = -1;
        for (int i = 0; i < columns.size(); i++)
            if (columns[i].name == colName) colIdx = i;
        if (colIdx == -1) return;

        indexes[colName].clear();
        for (int i = 0; i < rows.size(); i++)
            indexes[colName][rows[i].values[colIdx]].push_back(i);
        cout << "Index created on " << colName << "\\n";
    }

    void insert(vector<string> vals) {
        rows.push_back({vals});
        // Update indexes
        for (auto& [col, idx] : indexes) {
            int ci = -1;
            for (int i = 0; i < columns.size(); i++)
                if (columns[i].name == col) ci = i;
            if (ci >= 0)
                idx[vals[ci]].push_back(rows.size()-1);
        }
    }

    void selectAll() {
        for (auto& c : columns) cout << c.name << "\\t";
        cout << "\\n" << string(columns.size()*12, '-') << "\\n";
        for (auto& r : rows) {
            for (auto& v : r.values) cout << v << "\\t";
            cout << "\\n";
        }
    }

    void selectWhere(string col, string val) {
        int colIdx = -1;
        for (int i = 0; i < columns.size(); i++)
            if (columns[i].name == col) colIdx = i;
        if (colIdx == -1) { cout << "Column not found\\n"; return; }

        // Use index if available
        if (indexes.count(col)) {
            cout << "(Using index)\\n";
            if (indexes[col].count(val)) {
                for (auto& c : columns) cout << c.name << "\\t";
                cout << "\\n";
                for (int ri : indexes[col][val]) {
                    for (auto& v : rows[ri].values) cout << v << "\\t";
                    cout << "\\n";
                }
            }
            return;
        }

        // Full table scan
        cout << "(Full scan)\\n";
        for (auto& c : columns) cout << c.name << "\\t";
        cout << "\\n";
        for (auto& r : rows) {
            if (r.values[colIdx] == val) {
                for (auto& v : r.values) cout << v << "\\t";
                cout << "\\n";
            }
        }
    }
};

map<string, Table> database;

int main() {
    // Create a table
    Table t;
    t.name = "students";
    t.columns = {{"id","INT"},{"name","TEXT"},{"gpa","REAL"}};
    database["students"] = t;

    // Insert rows
    database["students"].insert({"1","Ahmed","3.8"});
    database["students"].insert({"2","Sara","3.9"});
    database["students"].insert({"3","Omar","3.5"});
    database["students"].insert({"4","Layla","3.8"});

    cout << "=== SELECT * FROM students ===\\n";
    database["students"].selectAll();

    cout << "\\n=== SELECT WHERE gpa = 3.8 (no index) ===\\n";
    database["students"].selectWhere("gpa", "3.8");

    // Create index
    cout << "\\n";
    database["students"].createIndex("gpa");

    cout << "\\n=== SELECT WHERE gpa = 3.8 (with index) ===\\n";
    database["students"].selectWhere("gpa", "3.8");

    return 0;
}`
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = PROJECTS;
}
