const courseData = [
    {
        id: "phase1",
        title: "PHASE 1 - Foundations",
        lessons: [
            {
                id: "l1",
                title: "What is a Data Structure?",
                content: `
                    <h2 class="lesson-title">What is a Data Structure?</h2>
                    <p class="en-text">A data structure is a specialized format for organizing, processing, retrieving, and storing data. It establishes connections and relationships between data so algorithms can work efficiently. Without the right data structure, even the best algorithm will run slowly.</p>
                    <p class="ar-text">هيكل البيانات هو تنسيق متخصص لتنظيم البيانات ومعالجتها واسترجاعها وتخزينها. ينشئ روابط وعلاقات بين البيانات حتى تتمكن الخوارزميات من العمل بكفاءة. بدون هيكل البيانات المناسب، حتى أفضل خوارزمية ستعمل ببطء.</p>

                    <div class="why-matters-box">
                        <h4>Why This Matters 🧠</h4>
                        <p>Imagine reading an encyclopedia with no index, no chapters, and random page numbers. Finding information would take forever. Data structures act as the "index and chapters" for your computer's memory, allowing instant retrieval or fast operations.</p>
                    </div>

                    <h3>Memory in C++</h3>
                    <p class="en-text">To master data structures, you must first master memory. In C++, memory is primarily divided into <strong>Stack Memory</strong> and <strong>Heap Memory</strong>.</p>
                    <p class="ar-text">لإتقان هياكل البيانات، يجب أولاً إتقان الذاكرة. في لغة C++، تنقسم الذاكرة بشكل أساسي إلى <strong>ذاكرة المكدس (Stack)</strong> و<strong>ذاكرة الكومة (Heap)</strong>.</p>
                    
                    <ul>
                        <li class="en-text"><strong>Stack Memory:</strong> Fast, automatically managed, but limited in size. Variables defined inside functions live here and die when the function ends.</li>
                        <li class="en-text"><strong>Heap Memory:</strong> Dynamic, massive, but manually managed. If you allocate it using <code>new</code>, you MUST free it using <code>delete</code>.</li>
                    </ul>

                    <div class="code-block">
                        <pre><code class="language-cpp">
// Stack Allocation (Fast, limited scope, automatic cleanup)
int age = 25; 
int grades[5] = {90, 85, 88, 92, 95};

// Heap Allocation (Dynamic, vast, manual cleanup required)
int* dynamicAge = new int(25);
int* dynamicArray = new int[1000]; // Array of 1000 integers

delete dynamicAge; // Prevent memory leak!
delete[] dynamicArray; // Prevent massive memory leak!
                        </code></pre>
                    </div>

                    <div class="common-mistake-box">
                        <h4>❌ Beginner Mistake</h4>
                        <p class="important-note">Forgetting to use <code>delete</code> or <code>delete[]</code> when allocating memory on the heap.</p>
                        <h4>✅ Correct Approach</h4>
                        <p class="correct-note">Every <code>new</code> MUST be matched with a <code>delete</code>. This is the #1 rule of C++ data structure implementation to prevent Memory Leaks.</p>
                    </div>
                `,
                practice: {
                    questions: [
                        { q: "Which memory is automatically managed in C++?", a: "Stack", options: ["Stack", "Heap", "Hard Drive", "Cache"] },
                        { q: "What keyword is used to allocate Heap memory?", a: "new", options: ["malloc", "new", "allocate", "create"] },
                        { q: "What happens if you don't delete heap memory?", a: "Memory leak", options: ["Syntax error", "Memory leak", "Faster execution", "Variables become static"] },
                        { q: "Which memory offers faster access times but is heavily constrained by size?", a: "Stack Memory", options: ["Heap Memory", "Virtual Memory", "Stack Memory", "SSD Storage"] },
                        { q: "If you create an array using `new int[50]`, what is the correct way to free it?", a: "delete[] arr;", options: ["delete arr;", "free(arr);", "delete[] arr;", "It cleans itself"] }
                    ],
                    coding: [
                        {
                            q: "Write a complete C++ program that dynamically allocates an integer variable on the heap, assigns it the value 42, prints it, and then safely deletes it.",
                            a: "int main() {\n    int* ptr = new int(42);\n    std::cout << *ptr;\n    delete ptr;\n    return 0;\n}"
                        },
                        {
                            q: "Given a pointer `int* arr = new int[5]{1, 2, 3, 4, 5};`, write the line of C++ code required to prevent a memory leak.",
                            a: "delete[] arr;"
                        }
                    ]
                }
            },
            {
                id: "l2",
                title: "Complexity Intuition (Big-O)",
                content: `
                    <h2 class="lesson-title">Introduction to Big-O Notation</h2>
                    <p class="en-text">Big-O notation is the language engineers use to describe how the runtime (Time Complexity) or memory usage (Space Complexity) of an algorithm scales as the input size grows to infinity.</p>
                    <p class="ar-text">ترميز Big-O هو اللغة التي يستخدمها المهندسون لوصف كيف يتوسع وقت التشغيل (Time Complexity) أو استخدام الذاكرة (Space Complexity) لخوارزمية ما كلما اقترب حجم الإدخال إلى ما لا نهاية.</p>
                    
                    <h3>1. Constant Time: O(1)</h3>
                    <p class="en-text">The operation takes exactly the same amount of time regardless of how much data there is. Whether the array has 10 elements or 10 billion elements, accessing the first element takes 1 step.</p>
                    <p class="ar-text">تستغرق العملية نفس القدر من الوقت بغض النظر عن كمية البيانات. سواء كانت المصفوفة تحتوي على 10 عناصر أو 10 مليارات عنصر، فإن الوصول إلى العنصر الأول يستغرق خطوة واحدة.</p>
                    
                    <div class="code-block">
                        <pre><code class="language-cpp">
int getFirstElement(int arr[], int size) {
    if (size > 0) return arr[0]; // Always takes O(1) time
    return -1;
}
                        </code></pre>
                    </div>

                    <h3>2. Linear Time: O(N)</h3>
                    <p class="en-text">The time taken grows strictly proportionally with the number of elements. If you double the data, the process takes twice as long.</p>
                    <p class="ar-text">الوقت المستغرق ينمو بشكل متناسب تمامًا مع عدد العناصر. إذا قمت بمضاعفة البيانات، فستستغرق العملية ضعف الوقت.</p>
                    
                    <div class="code-block">
                        <pre><code class="language-cpp">
void printAllElements(int arr[], int size) {
    // If size is 1,000,000, this loop runs 1,000,000 times. O(N).
    for (int i = 0; i < size; i++) {
        std::cout << arr[i] << " ";
    }
}
                        </code></pre>
                    </div>

                    <h3>3. Quadratic Time: O(N²)</h3>
                    <p class="en-text">Commonly seen with nested loops. If you have 10 elements, it takes 100 steps. If you have 1000 elements, it takes 1,000,000 steps. Highly inefficient for large datasets.</p>
                    
                    <div class="code-block">
                        <pre><code class="language-cpp">
void bubbleSort(int arr[], int n) {
    // Runs N*N times in the worst case = O(N²)
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j+1])
                swap(arr[j], arr[j+1]);
        }
    }
}
                        </code></pre>
                    </div>

                    <h3>4. Logarithmic Time: O(log N)</h3>
                    <p class="en-text">The runtime grows very slowly — it roughly <strong>halves the search space</strong> on every single step. Binary Search is the classic example. Even if you have 1 billion elements, you only need about 30 comparisons to find any value.</p>
                    <p class="ar-text">وقت التشغيل ينمو ببطء شديد — إنه يُقلّص حيز البحث إلى النصف في كل خطوة. البحث الثنائي (Binary Search) هو المثال الكلاسيكي. حتى لو كان لديك مليار عنصر، تحتاج فقط نحو 30 مقارنة للعثور على أي قيمة.</p>

                    <div class="code-block">
                        <pre><code class="language-cpp">
int binarySearch(int arr[], int size, int target) {
    int left = 0, right = size - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid; // Found!
        if (arr[mid] < target) left = mid + 1;  // Discard left half
        else right = mid - 1;                   // Discard right half
    }
    return -1;
}
// 1 billion items → only ~30 iterations! That is O(log N) power.
                        </code></pre>
                    </div>

                    <h3>5. Linearithmic Time: O(N log N)</h3>
                    <p class="en-text">The best achievable complexity for comparison-based sorting. Merge Sort and Quick Sort both operate at O(N log N). It's "N passes, each of which costs log N work".</p>
                    <p class="ar-text">هذا أفضل تعقيد يمكن تحقيقه لخوارزميات الفرز القائمة على المقارنة. يعمل كلٌّ من Merge Sort و Quick Sort بـ O(N log N). هو "N تمريرة، كل منها تكلف log N عملاً".</p>

                    <h3>6. Exponential Time: O(2ᴺ)</h3>
                    <p class="en-text">The runtime <strong>doubles</strong> with every single additional element. A brute-force recursive Fibonacci without memoization is the infamous example. With N=50, this would require computing over 1 quadrillion operations!</p>

                    <div class="code-block">
                        <pre><code class="language-cpp">
// BAD: Naive Fibonacci — O(2^N) due to duplicate subproblems!
int fibBad(int n) {
    if (n <= 1) return n;
    return fibBad(n-1) + fibBad(n-2); // Two calls per call = exponential!
}

// GOOD: Fibonacci with Memoization — O(N)!
#include <unordered_map>
unordered_map<int,int> memo;
int fibGood(int n) {
    if (n <= 1) return n;
    if (memo.count(n)) return memo[n]; // Already solved!
    return memo[n] = fibGood(n-1) + fibGood(n-2);
}
                        </code></pre>
                    </div>

                    <h3>The Big-O Complexity Cheat Sheet</h3>
                    <table class="complexity-table">
                        <thead>
                            <tr><th>Name</th><th>Notation</th><th>Speed</th><th>Example</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Constant</td><td><span class="badge badge-green">O(1)</span></td><td>⚡ Fastest</td><td>Array index access</td></tr>
                            <tr><td>Logarithmic</td><td><span class="badge badge-green">O(log N)</span></td><td>🚀 Very Fast</td><td>Binary Search, BST search</td></tr>
                            <tr><td>Linear</td><td><span class="badge badge-blue">O(N)</span></td><td>✅ Acceptable</td><td>Loop over array once</td></tr>
                            <tr><td>Linearithmic</td><td><span class="badge badge-blue">O(N log N)</span></td><td>✅ Good</td><td>Merge Sort, Quick Sort</td></tr>
                            <tr><td>Quadratic</td><td><span class="badge badge-yellow">O(N²)</span></td><td>⚠️ Slow</td><td>Bubble Sort, nested loops</td></tr>
                            <tr><td>Exponential</td><td><span class="badge badge-red">O(2ᴺ)</span></td><td>🔥 Unusable at scale</td><td>Naive Fibonacci, brute-force</td></tr>
                        </tbody>
                    </table>

                    <div class="why-matters-box">
                        <h4>Think Like an Engineer 🛠️</h4>
                        <p>We drop constants in Big-O. An algorithm that takes <b>O(2N)</b> or <b>O(N + 500)</b> is just called <b>O(N)</b>. We only care about the dominant term as N approaches infinity! Also, when functions are nested (loops inside loops), we <em>multiply</em> their complexities. When they are sequential, we <em>add</em> and then simplify.</p>
                    </div>
                `,
                practice: {
                    questions: [
                        { q: "What does O(1) mean?", a: "Constant time", options: ["Linear time", "Constant time", "Infinite time", "Zero time"] },
                        { q: "What is the time complexity of scanning an entire array once using a single loop?", a: "O(N)", options: ["O(1)", "O(log N)", "O(N)", "O(N^2)"] },
                        { q: "If an algorithm takes exactly 500 steps regardless of input size, what is its Big-O?", a: "O(1)", options: ["O(500)", "O(N)", "O(1)", "O(N)"] },
                        { q: "A nested loop (a loop inside a loop) examining all pairs in an array usually has what time complexity?", a: "O(N²)", options: ["O(N)", "O(N²)", "O(log N)", "O(1)"] },
                        { q: "Which statement is true about Big-O constants?", a: "Constants are ignored (O(2N) becomes O(N))", options: ["Constants are the most important factor", "Constants are ignored (O(2N) becomes O(N))", "O(N) is faster than O(2N) in asymptotic analysis", "Big-O only applies to Space tracking"] }
                    ],
                    coding: [
                        {
                            q: "What is the simplified Big-O Time Complexity of an algorithm whose step function is represented mathematically as f(N) = 3N² + 5N + 1000?",
                            a: "O(N²)"
                        },
                        {
                            q: "Look at the following pseudo-code:\nfor(int i = 0; i < N; i++) print(i);\nfor(int j = 0; j < N; j++) print(j);\n\nWhat is the overall Big-O Time complexity?",
                            a: "O(N). The loops are sequential (O(N) + O(N) = O(2N) = O(N)), not nested."
                        }
                    ]
                }
            }
        ]
    },
    {
        id: "phase2",
        title: "PHASE 2 - Arrays",
        lessons: [
            {
                id: "l3",
                title: "Static vs Dynamic Arrays",
                content: `
                    <h2 class="lesson-title">Arrays Deep Dive</h2>
                    <p class="en-text">An array stores elements of the exact same type in contiguous (back-to-back) memory locations. This "contiguous" property is the superpower of arrays. It makes accessing elements extremely fast, O(1), by using basic pointer arithmetic and indexing under the hood.</p>
                    <p class="ar-text">تخزن المصفوفة عناصر من نفس النوع في مواقع ذاكرة متجاورة (متتالية). خاصية "التجاور" هذه هي القوة الخارقة للمصفوفات. تجعل الوصول إلى العناصر سريعًا للغاية، O(1)، باستخدام حساب المؤشرات الأساسي والفهرسة تحت الغطاء.</p>
                    
                    <h3>Memory Layout</h3>
                    <p class="en-text">If an integer array starts at memory address <code>1000</code>, and an integer takes 4 bytes of memory, the elements are perfectly aligned at <code>1000, 1004, 1008, 1012...</code> The computer doesn't need to search; it just calculates the exact address: <code>Start_Address + (Index * Size_of_Type)</code>.</p>
                    <p class="ar-text">إذا بدأت مصفوفة أعداد صحيحة عند العنوان <code>1000</code>، وكان العدد الصحيح يستهلك 4 بايت، فستكون العناصر مصطفة بدقة عند <code>1000، 1004، 1008، 1012...</code> الكمبيوتر لا يحتاج إلى البحث؛ هو فقط يحسب العنوان الدقيق.</p>

                    <div class="code-block">
                        <pre><code class="language-cpp">
// Static array: size must be strictly known at compile time
int staticArr[5] = {10, 20, 30, 40, 50};

// Accessing index 2 takes O(1) time
int value = staticArr[2]; // Extremely Fast!

// Searching for the value '30' takes O(N) time
// The computer must check index 0, then 1, then 2...
                        </code></pre>
                    </div>

                    <div class="why-matters-box">
                        <h4>Think Like an Engineer 🛠️</h4>
                        <p>Arrays provide incredible <b>Cache Locality</b>. The CPU fetches chunks of memory into its ultra-fast L1 cache. Because array elements are next to each other, loading one element often loads the next several elements into the cache automatically. This is why arrays consistently outperform Linked Lists for simple iteration, even if the theoretical Big-O complexity looks the same!</p>
                    </div>
                `,
                practice: {
                    questions: [
                        { q: "Are array elements stored contiguously in memory?", a: "Yes", options: ["Yes", "No", "Depends", "Only in Java"] },
                        { q: "What is the time complexity to access an array element by index?", a: "O(1)", options: ["O(N)", "O(log N)", "O(1)", "O(N^2)"] },
                        { q: "Why are arrays highly cache-friendly?", a: "Due to contiguous memory layout", options: ["Because they use Stack memory", "Due to contiguous memory layout", "Because they use pointers", "They are not cache friendly"] },
                        { q: "What is the time complexity to search for a specific value in an unsorted array?", a: "O(N)", options: ["O(1)", "O(log N)", "O(N)", "O(N^2)"] },
                        { q: "If an integer takes 4 bytes and an array starts at address 1000, what is the address of index 3?", a: "1012", options: ["1003", "1012", "1004", "1016"] }
                    ],
                    coding: [
                        {
                            q: "Write a short C++ function `int getElement(int arr[], int index)` that returns the element at the given index.",
                            a: "int getElement(int arr[], int index) {\n    return arr[index];\n}"
                        },
                        {
                            q: "Given `int arr[3] = {5, 10, 15};`, what is the mathematical formula the compiler uses to find `arr[2]` if `arr` starts at memory address `X`, and an int is `Y` bytes?",
                            a: "Address = X + (2 * Y)"
                        }
                    ]
                }
            },
            {
                id: "l4",
                title: "Building a Custom Dynamic Array",
                content: `
                    <h2 class="lesson-title">Custom Dynamic Array (Vector from Scratch)</h2>
                    <p class="en-text">Static arrays cannot grow. If we declare <code>int arr[5]</code>, we can never put 6 items in it. If we need a resizable array (like <code>std::vector</code> in C++), we must construct a <strong>Dynamic Array</strong> data structure.</p>
                    <p class="ar-text">المصفوفات الثابتة لا يمكن أن تنمو. إذا أعلنا عن <code>int arr[5]</code>، لا يمكننا أبدًا وضع 6 عناصر فيها. إذا احتجنا إلى مصفوفة قابلة لتغيير الحجم، يجب أن نبني هيكل <strong>مصفوفة ديناميكية</strong>.</p>
                    
                    <h3>How Resizing Works</h3>
                    <p class="en-text">We allocate an array on the Heap. When it fills up (size == capacity), we create a <i>new, larger</i> array (usually double the size), copy all the old elements over to the new array, and finally, delete the old array from memory.</p>

                    <div class="code-block">
                        <pre><code class="language-cpp">
#include &lt;iostream&gt;
using namespace std;

class DynamicArray {
private:
    int* arr;
    int capacity;
    int current_size;

    // The expensive operation
    void resize() {
        capacity *= 2; // Double the capacity
        int* temp = new int[capacity];
        
        // Copy old elements to new larger array (Costs O(N) time)
        for (int i = 0; i &lt; current_size; i++) {
            temp[i] = arr[i];
        }
        
        delete[] arr; // Free the old memory to prevent leaks
        arr = temp;   // Point our internal pointer to the new memory
    }

public:
    DynamicArray() {
        capacity = 2; // Start small
        current_size = 0;
        arr = new int[capacity]; // Allocate on Heap
    }
    
    ~DynamicArray() {
        delete[] arr; // Destructor cleans up when object dies
    }

    void push_back(int val) {
        if (current_size == capacity) {
            resize(); 
        }
        arr[current_size] = val;
        current_size++;
    }
    
    int get(int index) {
        if (index &lt; 0 || index &gt;= current_size) throw out_of_range("Index out of bounds");
        return arr[index];
    }
};
                        </code></pre>
                    </div>

                    <div class="why-matters-box">
                        <h4>Amortized Time Complexity 🕒</h4>
                        <p>Most <code>push_back</code> operations execute instantly in <b>O(1)</b> time. However, when the array gets full, a resize is triggered which takes <b>O(N)</b> time because we have to copy every single element. But because resizing happens progressively less often (we double the capacity each time), the mathematical average for a push is extremely fast. We call this <b>Amortized O(1)</b> time.</p>
                    </div>
                `,
                practice: {
                    questions: [
                        { q: "What triggers a dynamic array to resize?", a: "When current size equals capacity", options: ["When it reaches 100 elements", "When we call pop_back", "When current size equals capacity", "After 5 minutes of execution"] },
                        { q: "What is the amortized time complexity of `push_back` in a dynamic array?", a: "O(1)", options: ["O(N)", "O(1)", "O(log N)", "O(N^2)"] },
                        { q: "What is the worst-case time complexity of a single `push_back` when a resize is strictly required?", a: "O(N)", options: ["O(1)", "O(log N)", "O(N)", "O(N^2)"] },
                        { q: "Why do we typically double the capacity rather than just adding +1 to capacity?", a: "To achieve Amortized O(1) time", options: ["To use more RAM", "To achieve Amortized O(1) time", "Because C++ forces us to", "To make the CPU hotter"] },
                        { q: "What must you do to the old array inside the `resize()` function?", a: "delete[] it to prevent memory leaks", options: ["Keep it as a backup", "delete[] it to prevent memory leaks", "Return it to the user", "Nothing, it deletes itself"] }
                    ],
                    coding: [
                        {
                            q: "In the Custom Dynamic Array code, write a `void pop_back()` method that removes the last element. (Assume you do not shrink capacity).",
                            a: "void pop_back() {\n    if (current_size > 0) {\n        current_size--;\n    }\n}"
                        },
                        {
                            q: "If a dynamic array currently has `capacity = 8` and `current_size = 8`, how many elements will need to be copied during the next `push_back`?",
                            a: "8 elements will be copied into the new array of capacity 16."
                        }
                    ]
                }
            }
        ]
    },
    {
        id: "phase3",
        title: "PHASE 3 - Pointers & References",
        lessons: [
            {
                id: "l3a",
                title: "Mastering Pointers in C++",
                content: `
                    <h2 class="lesson-title">What Are Pointers?</h2>
                    <p class="en-text">A <strong>Pointer</strong> is a variable that stores a memory address rather than a data value directly. Understanding pointers is absolutely fundamental to mastering data structures in C++, as they enable dynamic memory allocation, efficient data manipulation, and complex data structure construction.</p>
                    <p class="ar-text">المؤشر (<strong>Pointer</strong>) هو متغير يخزن عنوان ذاكرة بدلاً من قيمة بيانات مباشرة. فهم المؤشرات أساسي تماماً لإتقان هياكل البيانات في C++، حيث إنها تمكن من تخصيص الذاكرة الديناميكي، ومعالجة البيانات بكفاءة، وبناء هياكل بيانات معقدة.</p>

                    <h3>Memory Addresses and Variables</h3>
                    <p class="en-text">Every variable in your program lives at a specific location in memory, identified by a unique hexadecimal address. When you declare <code>int x = 42;</code>, the computer allocates 4 bytes of memory somewhere (say, address 0x7fff5e), stores the value 42 there, and associates the name 'x' with that address.</p>
                    <p class="ar-text">كل متغير في برنامجك يعيش في موقع محدد في الذاكرة، محدد بواسطة عنوان سداسي عشري فريد. عندما تعلن <code>int x = 42;</code>، يخصص الكمبيوتر 4 بايت من الذاكرة في مكان ما (مثلاً، العنوان 0x7fff5e)، ويخزن القيمة 42 هناك، ويربط الاسم 'x' بهذا العنوان.</p>

                    <h3>The Address-of Operator (&)</h3>
                    <p class="en-text">The ampersand symbol <code>&</code> placed before a variable returns its memory address. This is how we obtain the address to store in a pointer variable.</p>
                    
                    <div class="code-block">
                        <pre><code class="language-cpp">
#include &lt;iostream&gt;
using namespace std;

int main() {
    int x = 42;
    
    // The & operator gets the memory address of x
    cout << "Value of x: " << x << endl;           // Outputs: 42
    cout << "Address of x: " << &x << endl;         // Outputs: 0x7fff5e... (hex address)
    
    // A pointer variable stores memory addresses
    int* ptr = &x;  // ptr now holds the address of x
    
    cout << "Pointer value (address): " << ptr << endl;  // Same as &x
    
    return 0;
}
                        </code></pre>
                    </div>

                    <h3>The Dereference Operator (*)</h3>
                    <p class="en-text">The asterisk <code>*</code> placed before a pointer variable <strong>dereferences</strong> it — meaning it accesses the actual value stored at that memory address. This is how we "follow" a pointer to read or modify data.</p>
                    <p class="ar-text">النجمة <code>*</code> الموضوعة قبل متغير مؤشر <strong>تفك إشارته</strong> — مما يعني أنها تصل إلى القيمة الفعلية المخزنة في عنوان الذاكرة. هذه هي الطريقة التي نتبع بها المؤشر لقراءة أو تعديل البيانات.</p>

                    <div class="code-block">
                        <pre><code class="language-cpp">
#include &lt;iostream&gt;
using namespace std;

int main() {
    int x = 42;
    int* ptr = &x;
    
    // Dereference operator * accesses the value at the stored address
    cout << "Value at address stored in ptr: " << *ptr << endl;  // Outputs: 42
    
    // Modifying through the pointer changes the original variable!
    *ptr = 100;  // Changes x to 100
    
    cout << "New value of x: " << x << endl;      // Outputs: 100
    cout << "Via pointer: " << *ptr << endl;        // Outputs: 100
    
    return 0;
}
                        </code></pre>
                    </div>

                    <h3>Pointer Declaration and Types</h3>
                    <p class="en-text">Pointers are <strong>typed</strong> based on what they point to. An <code>int*</code> points to integers, a <code>double*</code> points to doubles, and a <code>char*</code> points to characters. This type information tells the compiler how many bytes to read when dereferencing and how to interpret the binary data.</p>
                    
                    <div class="code-block">
                        <pre><code class="language-cpp">
// Different pointer types
int* intPtr;        // Points to integers (typically 4 bytes)
double* doublePtr;  // Points to doubles (typically 8 bytes)
char* charPtr;      // Points to characters (typically 1 byte)

// The pointer itself always takes the same memory (4 or 8 bytes depending on system)
// But what it POINTS TO varies in size based on the type
                        </code></pre>
                    </div>

                    <h3>Null Pointers</h3>
                    <p class="en-text">A null pointer (set to <code>nullptr</code> in modern C++) points to nothing. It's a special value indicating the pointer doesn't currently reference valid memory. <strong>Always</strong> check for null before dereferencing to prevent crashes!</p>
                    
                    <div class="code-block">
                        <pre><code class="language-cpp">
#include &lt;iostream&gt;
using namespace std;

int main() {
    int* ptr = nullptr;  // Modern C++ way (C++11 and later)
    // int* ptr = NULL;  // Old C-style (avoid in modern code)
    
    // ALWAYS check before dereferencing!
    if (ptr != nullptr) {
        cout << *ptr << endl;
    } else {
        cout << "Pointer is null! Cannot dereference safely." << endl;
    }
    
    return 0;
}
                        </code></pre>
                    </div>

                    <div class="common-mistake-box">
                        <h4>❌ Critical Pointer Mistakes</h4>
                        <p class="important-note"><strong>Uninitialized Pointers:</strong> Declaring <code>int* p;</code> without initialization creates a "dangling pointer" pointing to random memory. Dereferencing it causes undefined behavior or crashes.</p>
                        <p class="important-note"><strong>Dangling Pointers:</strong> After <code>delete ptr;</code>, the pointer still holds the old address but that memory is invalid. Accessing *ptr after delete is a serious bug.</p>
                        <p class="correct-note"><strong>✅ Best Practice:</strong> Always initialize pointers (to nullptr or a valid address), and set them to nullptr immediately after deleting.</p>
                    </div>

                    <h3>Pointer Arithmetic</h3>
                    <p class="en-text">When you add or subtract from a pointer, the operation scales by the size of the data type. <code>ptr + 1</code> doesn't add 1 byte — it adds <code>sizeof(int)</code> bytes (typically 4), moving to the next integer in memory. This is why pointer arithmetic works elegantly with arrays!</p>
                    
                    <div class="code-block">
                        <pre><code class="language-cpp">
#include &lt;iostream&gt;
using namespace std;

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int* ptr = arr;  // Points to arr[0]
    
    // Pointer arithmetic automatically scales by sizeof(int)
    cout << "*ptr = " << *ptr << endl;        // 10 (arr[0])
    cout << "*(ptr+1) = " << *(ptr+1) << endl; // 20 (arr[1])
    cout << "*(ptr+2) = " << *(ptr+2) << endl; // 30 (arr[2])
    
    // Alternative syntax (array indexing is pointer arithmetic in disguise!)
    cout << "ptr[0] = " << ptr[0] << endl;     // 10
    cout << "ptr[3] = " << ptr[3] << endl;     // 40
    
    // What's the address difference?
    cout << "ptr address: " << ptr << endl;
    cout << "ptr+1 address: " << (ptr+1) << endl;  // Exactly 4 bytes higher
    
    return 0;
}
                        </code></pre>
                    </div>

                    <h3>References vs Pointers</h3>
                    <p class="en-text">References are "alias" names for existing variables. Unlike pointers, references <strong>cannot be null</strong>, <strong>cannot be reassigned</strong> to refer to different variables, and automatically dereference. They're safer and cleaner for many use cases but less flexible than pointers.</p>
                    
                    <div class="code-block">
                        <pre><code class="language-cpp">
#include &lt;iostream&gt;
using namespace std;

int main() {
    int x = 10;
    
    // REFERENCE: An alias for x
    int& ref = x;  // ref IS x (different name, same memory)
    ref = 20;      // This changes x!
    cout << "x = " << x << endl;  // 20
    
    // POINTER: Stores address of x
    int* ptr = &x;   // ptr contains the address of x
    *ptr = 30;       // Dereference to change x
    cout << "x = " << x << endl;  // 30
    
    // Key Differences:
    // 1. Reference MUST be initialized immediately
    // 2. Reference cannot be "re-seated" to refer to another variable
    // 3. Reference automatically dereferences (no * needed)
    // 4. Pointer can be null, reference cannot
    // 5. Pointer can be reassigned, reference cannot
    
    int y = 100;
    ptr = &y;     // Valid: Pointer now points to y
    // ref = y;   // Invalid: This would assign y's VALUE to x, not rebind ref!
    
    return 0;
}
                        </code></pre>
                    </div>

                    <div class="why-matters-box">
                        <h4>Why Pointers Are Essential for Data Structures 🧠</h4>
                        <p>Every advanced data structure relies on pointers:</p>
                        <ul>
                            <li><strong>Linked Lists:</strong> Nodes use pointers to connect to the next node</li>
                            <li><strong>Trees:</strong> Parent nodes store pointers to left and right children</li>
                            <li><strong>Graphs:</strong> Vertices use pointers (or indices) to track neighbors</li>
                            <li><strong>Dynamic Arrays:</strong> The internal array is accessed via a pointer</li>
                            <li><strong>Heap Memory:</strong> All dynamic allocation returns pointers</li>
                        </ul>
                        <p>Without mastering pointers, you cannot implement these structures efficiently!</p>
                    </div>
                `,
                practice: {
                    questions: [
                        { q: "What does the & operator do when placed before a variable?", a: "Returns the memory address of the variable", options: ["Returns the value", "Returns the memory address of the variable", "Multiplies the variable", "Declares a reference"] },
                        { q: "What does the * operator do when placed before a pointer variable?", a: "Dereferences the pointer to access the value at that address", options: ["Multiplies the pointer", "Declares a pointer", "Dereferences the pointer to access the value at that address", "Returns the address"] },
                        { q: "What is nullptr in modern C++?", a: "A special pointer value indicating it points to nothing", options: ["A null character", "A special pointer value indicating it points to nothing", "A memory address", "A type of integer"] },
                        { q: "If ptr is an int* pointing to arr[0], what does ptr + 1 point to?", a: "arr[1] (automatically scales by sizeof(int))", options: ["The next byte in memory", "arr[1] (automatically scales by sizeof(int))", "The same location", "Null"] },
                        { q: "What is the key difference between a pointer and a reference?", a: "A reference cannot be null and cannot be reassigned to refer to a different variable", options: ["A pointer is faster", "A reference cannot be null and cannot be reassigned to refer to a different variable", "References use more memory", "There is no difference"] }
                    ],
                    coding: [
                        {
                            q: "Write a complete C++ program that declares an int x = 5, creates a pointer ptr that points to x, and uses the pointer to change x's value to 10. Then print both x and *ptr to verify.",
                            a: "#include <iostream>\nusing namespace std;\nint main() {\n    int x = 5;\n    int* ptr = &x;\n    *ptr = 10;\n    cout << \"x: \" << x << endl;\n    cout << \"*ptr: \" << *ptr << endl;\n    return 0;\n}"
                        },
                        {
                            q: "Given: int arr[5] = {10, 20, 30, 40, 50}; int* p = arr + 2; What is the value of *p?",
                            a: "30. arr + 2 points to the element at index 2, which is 30."
                        }
                    ]
                }
            },
            {
                id: "l3b",
                title: "Dynamic Memory with new and delete",
                content: `
                    <h2 class="lesson-title">Dynamic Memory Management</h2>
                    <p class="en-text">Dynamic memory allocation allows programs to request memory at runtime rather than compile time. This is essential for data structures whose size isn't known in advance. In C++, we use <code>new</code> to allocate memory and <code>delete</code> (or <code>delete[]</code>) to release it.</p>
                    <p class="ar-text">تخصيص الذاكرة الديناميكي يسمح للبرامج بطلب الذاكرة في وقت التشغيل بدلاً من وقت الترجمة. هذا أساسي لهياكل البيانات التي لا يُعرف حجمها مسبقاً. في C++، نستخدم <code>new</code> لتخصيص الذاكرة و <code>delete</code> (أو <code>delete[]</code>) لتحريرها.</p>

                    <h3>The new Operator</h3>
                    <p class="en-text">The <code>new</code> operator allocates memory on the heap and returns a pointer to that memory. For single objects, use <code>new Type</code>. For arrays, use <code>new Type[size]</code>.</p>
                    
                    <div class="code-block">
                        <pre><code class="language-cpp">
#include &lt;iostream&gt;
using namespace std;

int main() {
    // Allocate a single integer on the heap
    int* singleInt = new int;        // Allocates 4 bytes, returns address
    *singleInt = 42;                  // Store value at that address
    cout << "Value: " << *singleInt << endl;  // 42
    
    // Allocate with initialization
    int* initialized = new int(100);  // Allocates and sets to 100
    cout << "Initialized: " << *initialized << endl;  // 100
    
    // Allocate an array of 10 integers
    int* arr = new int[10];           // Allocates 40 bytes (10 * 4)
    
    // Initialize array elements
    for (int i = 0; i < 10; i++) {
        arr[i] = i * 10;              // arr[0]=0, arr[1]=10, arr[2]=20...
    }
    
    // Access like a regular array
    cout << "arr[5] = " << arr[5] << endl;  // 50
    
    // CRITICAL: Always free dynamically allocated memory!
    delete singleInt;      // For single objects
    delete initialized;    // For single objects
    delete[] arr;          // Use delete[] for arrays!
    
    // Set pointers to nullptr after deletion (good practice)
    singleInt = nullptr;
    initialized = nullptr;
    arr = nullptr;
    
    return 0;
}
                        </code></pre>
                    </div>

                    <h3>Memory Leaks: The Silent Killer</h3>
                    <p class="en-text">A <strong>memory leak</strong> occurs when you allocate memory with <code>new</code> but never free it with <code>delete</code>. This memory becomes unusable for the rest of the program's execution. In long-running programs or systems with limited memory, leaks cause crashes and performance degradation.</p>
                    
                    <div class="code-block">
                        <pre><code class="language-cpp">
// MEMORY LEAK EXAMPLE (DON'T DO THIS!)
void leakyFunction() {
    int* ptr = new int[1000];  // Allocate 4000 bytes
    // Do some work...
    // OOPS! Forgot delete[] ptr;
    // The 4000 bytes are lost forever when function returns!
}

// CORRECT VERSION
void properFunction() {
    int* ptr = new int[1000];  // Allocate
    // Do some work...
    delete[] ptr;              // Free the memory!
    ptr = nullptr;             // Prevent dangling pointer
}

// EVEN BETTER: Use RAII with smart pointers (modern C++)
#include &lt;memory&gt;
void modernFunction() {
    unique_ptr&lt;int[]&gt; ptr(new int[1000]);  // Automatically freed!
    // Do some work...
    // No manual delete needed - automatically freed when ptr goes out of scope
}
                        </code></pre>
                    </div>

                    <div class="common-mistake-box">
                        <h4>❌ Common new/delete Mistakes</h4>
                        <p class="important-note"><strong>Using delete instead of delete[]:</strong> Using <code>delete</code> on an array allocated with <code>new[]</code> only calls the destructor for the first element, leaking the rest.</p>
                        <p class="important-note"><strong>Using delete[] instead of delete:</strong> Using <code>delete[]</code> on a single object causes undefined behavior (likely crash).</p>
                        <p class="important-note"><strong>Double deletion:</strong> Calling <code>delete</code> twice on the same pointer causes undefined behavior. Set to nullptr after first delete.</p>
                        <p class="correct-note"><strong>✅ Rule:</strong> <code>new</code> matches <code>delete</code>. <code>new[]</code> matches <code>delete[]</code>. Always. No exceptions.</p>
                    </div>

                    <h3>RAII: Resource Acquisition Is Initialization</h3>
                    <p class="en-text">RAII is a C++ design principle where resource allocation happens in constructors and deallocation happens in destructors. This ensures resources are always released, even if exceptions occur. Custom data structures should always follow RAII!</p>
                    
                    <div class="code-block">
                        <pre><code class="language-cpp">
#include &lt;iostream&gt;
using namespace std;

// A simple RAII wrapper for a dynamic array
class SafeArray {
private:
    int* data;
    int size;

public:
    // Constructor allocates memory
    SafeArray(int s) {
        size = s;
        data = new int[size];
        cout << "Array of " << size << " integers allocated." << endl;
    }
    
    // Destructor automatically frees memory
    ~SafeArray() {
        delete[] data;
        cout << "Array memory safely freed." << endl;
    }
    
    // Accessor methods
    int& operator[](int index) { return data[index]; }
    int getSize() const { return size; }
};

int main() {
    // Memory allocated here
    SafeArray arr(100);
    
    // Use the array
    for (int i = 0; i < arr.getSize(); i++) {
        arr[i] = i;
    }
    
    // Memory automatically freed when arr goes out of scope!
    // Even if an exception occurred, destructor would still run
    
    return 0;
}
                        </code></pre>
                    </div>

                    <div class="why-matters-box">
                        <h4>Dynamic Memory in Data Structures 🛠️</h4>
                        <p>Every major data structure relies on dynamic memory:</p>
                        <ul>
                            <li><strong>Linked Lists:</strong> Each node is allocated with <code>new</code> when inserted</li>
                            <li><strong>Trees:</strong> Tree nodes are dynamically created during insertion</li>
                            <li><strong>Dynamic Arrays:</strong> Internal buffer is <code>new[]</code>, reallocated when full</li>
                            <li><strong>Graphs:</strong> Vertices and edges are dynamically allocated</li>
                        </ul>
                        <p>Understanding <code>new</code> and <code>delete</code> is non-negotiable for implementing these structures correctly!</p>
                    </div>
                `,
                practice: {
                    questions: [
                        { q: "What operator is used to allocate a single object on the heap in C++?", a: "new", options: ["malloc", "new", "allocate", "create"] },
                        { q: "What operator frees an array allocated with new[]?", a: "delete[]", options: ["delete", "free", "delete[]", "clear"] },
                        { q: "What is a memory leak?", a: "When allocated memory is never freed, making it unavailable", options: ["When a pointer points to null", "When allocated memory is never freed, making it unavailable", "When a program uses too much stack memory", "When a variable goes out of scope"] },
                        { q: "What does RAII stand for and mean?", a: "Resource Acquisition Is Initialization - acquire in constructor, release in destructor", options: ["Random Access Input Interface", "Resource Acquisition Is Initialization - acquire in constructor, release in destructor", "Runtime Automatic Input Integration", "Rapid Allocation and Instant Initialization"] },
                        { q: "Why should you set a pointer to nullptr after deleting it?", a: "To prevent a dangling pointer and allow safe checking before future dereferences", options: ["To save memory", "To prevent a dangling pointer and allow safe checking before future dereferences", "It's required by C++ syntax", "To make the program run faster"] }
                    ],
                    coding: [
                        {
                            q: "Write a complete C++ program that dynamically allocates an array of 5 integers, fills it with values 10, 20, 30, 40, 50, prints them, then properly frees the memory.",
                            a: "#include <iostream>\nusing namespace std;\nint main() {\n    int* arr = new int[5];\n    for (int i = 0; i < 5; i++) {\n        arr[i] = (i + 1) * 10;\n    }\n    for (int i = 0; i < 5; i++) {\n        cout << arr[i] << \" \";\n    }\n    cout << endl;\n    delete[] arr;\n    arr = nullptr;\n    return 0;\n}"
                        },
                        {
                            q: "What is wrong with this code? int* p = new int[10]; delete p;",
                            a: "It uses delete instead of delete[]. For arrays allocated with new[], we must use delete[] to properly free all elements."
                        }
                    ]
                }
            }
        ]
    },
    {
        id: "phase4",
        title: "PHASE 4 - Linked Lists",
        lessons: [
            {
                id: "l5",
                title: "Singly Linked List (From Scratch)",
                content: `
                    <h2 class="lesson-title">What is a Linked List?</h2>
                    <p class="en-text">A linked list is a linear collection of data elements where elements are <b>not</b> stored in contiguous memory locations. Instead, each element (called a <strong>Node</strong>) is an object allocated dynamically on the heap. Each Node contains two parts: the actual data, and a <b>pointer</b> holding the memory address of the next Node.</p>
                    <p class="ar-text">القائمة المرتبطة هي مجموعة خطية من عناصر البيانات حيث <b>لا</b> يتم تخزين العناصر في مواقع ذاكرة متجاورة. بدلاً من ذلك، كل عنصر (يسمى <strong>عقدة Node</strong>) هو كائن يتم تخصيصه ديناميكيًا على الكومة (Heap). تحتوي كل عقدة على جزأين: البيانات الفعلية، و<b>مؤشر</b> يحتوي على عنوان ذاكرة العقدة التالية.</p>

                    <div class="insight-box">
                        <h4>💡 Visual: How Memory Looks</h4>
                        <p>Array: [10|20|30|40|50] — all in one contiguous block at addresses 1000, 1004, 1008…</p>
                        <p>Linked List: Node(10)@0x2A → Node(20)@0xF3 → Node(30)@0x7B → NULL — scattered anywhere on the heap!</p>
                    </div>
                    
                    <h3>Array vs Linked List: The Ultimate Tradeoff</h3>
                    <ul>
                        <li class="en-text"><b>Array:</b> Fast reading <code>O(1)</code>, but Slow insertion/deletion <code>O(N)</code> because you have to shift elements physically. Memory is contiguous.</li>
                        <li class="en-text"><b>Linked List:</b> Slow reading <code>O(N)</code> because you must literally "walk" across pointers from the start. However, Fast insertion/deletion <code>O(1)</code> (if the pointer location is already known) because you only change where a pointer points! Memory is scattered.</li>
                    </ul>

                    <h3>Node Design & Implementation</h3>
                    <div class="code-block">
                        <pre><code class="language-cpp">
#include &lt;iostream&gt;
using namespace std;

// 1. Defining the Node Structure
struct Node {
    int data;
    Node* next; // Pointer to the next Node in memory
    
    // Constructor
    Node(int val) {
        data = val;
        next = nullptr; // Always initialize to null ptr
    }
};

// 2. The List Manager
class LinkedList {
private:
    Node* head; // The ONLY entry point to our list

public:
    LinkedList() { head = nullptr; }

    // Insertion at the beginning - O(1) Time!
    // No shifting required!
    void insertFront(int val) {
        Node* newNode = new Node(val); // Allocate on Heap
        newNode-&gt;next = head;          // Connect new node to current head
        head = newNode;                // Shift head pointer to new node
    }

    // Traversal - O(N) Time
    void printList() {
        Node* temp = head; // Create a temporary walker pointer
        while (temp != nullptr) {
            cout &lt;&lt; temp-&gt;data &lt;&lt; " -&gt; ";
            temp = temp-&gt;next; // Move walker to the next node
        }
        cout &lt;&lt; "NULL" &lt;&lt; endl;
    }
};
                        </code></pre>
                    </div>

                    <h3>insertBack() and deleteNode() — Full Implementation</h3>
                    <div class="code-block">
                        <pre><code class="language-cpp">
    // Insert at end — O(N) because we must walk to the tail
    void insertBack(int val) {
        Node* newNode = new Node(val);
        if (head == nullptr) { head = newNode; return; }
        Node* temp = head;
        while (temp->next != nullptr)
            temp = temp->next; // Walk to the last node
        temp->next = newNode;
    }

    // Delete first occurrence of 'target' — O(N)
    void deleteNode(int target) {
        if (head == nullptr) return;
        if (head->data == target) {    // Special case: deleting head
            Node* toDelete = head;
            head = head->next;
            delete toDelete;           // FREE the memory!
            return;
        }
        Node* temp = head;
        while (temp->next != nullptr && temp->next->data != target)
            temp = temp->next;
        if (temp->next != nullptr) {   // Found it
            Node* toDelete = temp->next;
            temp->next = toDelete->next; // Re-wire the chain
            delete toDelete;             // FREE the memory!
        }
    }

    // Destructor: Clean up ALL nodes to prevent memory leaks!
    ~LinkedList() {
        Node* curr = head;
        while (curr != nullptr) {
            Node* next = curr->next;
            delete curr;
            curr = next;
        }
    }
                        </code></pre>
                    </div>

                    <div class="common-mistake-box">
                        <h4>❌ Beginner Mistake</h4>
                        <p class="important-note">Losing the <code>head</code> pointer during traversal (e.g., <code>while(head != nullptr) { head = head-&gt;next; }</code>). If you move the head pointer, you permanently lose access to the beginning of your list, causing a massive memory leak!</p>
                        <h4>✅ Correct Approach</h4>
                        <p class="correct-note">Always create a temporary parsing pointer <code>Node* temp = head;</code> to traverse without losing the start of the list. And ALWAYS write a destructor to free all heap nodes when the list is destroyed.</p>
                    </div>
                `,
                practice: {
                    questions: [
                        { q: "What is the time complexity of inserting a node at the absolute front of a Singly Linked List?", a: "O(1)", options: ["O(1)", "O(N)", "O(log N)", "O(N^2)"] },
                        { q: "Does a Linked List offer contiguous memory allocation?", a: "No, memory is scattered on the heap", options: ["Yes, natively", "No, memory is scattered on the heap", "Always", "Depends on OS"] },
                        { q: "What does the last node of a Singly Linked List point to?", a: "nullptr", options: ["head", "Previous node", "nullptr", "Itself"] },
                        { q: "Why is searching a Linked List O(N) instead of O(1)?", a: "Because you must traverse nodes one-by-one following pointers", options: ["Because pointers are slow", "Because you must traverse nodes one-by-one following pointers", "Because they are stored on the Stack", "Searching is actually O(1)"] },
                        { q: "What is the very first pointer in a standard linked list usually called?", a: "head", options: ["tail", "root", "first", "head"] }
                    ],
                    coding: [
                        {
                            q: "Imagine you are at `temp` and want to skip the node directly in front of `temp` (removing it from the logical chain). Write the single line of C++ code to rewire `temp` to point to the node *after* the next node.",
                            a: "temp->next = temp->next->next;"
                        },
                        {
                            q: "Write a short method `bool search(int target)` for the LinkedList class that returns true if the target exists, and false otherwise.",
                            a: "bool search(int target) {\n    Node* temp = head;\n    while (temp != nullptr) {\n        if (temp->data == target) return true;\n        temp = temp->next;\n    }\n    return false;\n}"
                        }
                    ]
                }
            },
            {
                id: "l6",
                title: "Doubly Linked List",
                content: `
                    <h2 class="lesson-title">Doubly Linked List: Two-Way Traffic</h2>
                    <p class="en-text">A <strong>Doubly Linked List</strong> improves upon the Singly Linked List by adding a second pointer to every Node. While a Singly Linked List only points to the <i>next</i> node, a Doubly Linked List node points to both the <i>next</i> node AND the <i>previous</i> node.</p>
                    <p class="ar-text">تعمل <strong>القائمة المرتبطة المزدوجة</strong> على تحسين القائمة المرتبطة الأحادية عن طريق إضافة مؤشر ثانٍ إلى كل عقدة. بينما تشير القائمة الأحادية فقط إلى العقدة <i>التالية</i>، تشير عقدة القائمة المزدوجة إلى كل من العقدة <i>التالية</i> والعقدة <i>السابقة</i>.</p>

                    <h3>The Memory Trade-off</h3>
                    <p class="en-text">This bidirectional capability is powerful, but it comes at a cost: <strong>Memory</strong>. Every single node now requires extra bytes to store that <code>prev</code> pointer. In systems where memory is extremely tight, this overhead matters.</p>

                    <div class="code-block">
                        <pre><code class="language-cpp">
// The Doubly Linked Node Structure
struct DNode {
    int data;
    DNode* next; // Pointer forward
    DNode* prev; // The crucial addition: Pointer backward!

    DNode(int val) {
        data = val;
        next = nullptr;
        prev = nullptr;
    }
};

class DoublyLinkedList {
private:
    DNode* head;
    
public:
    DoublyLinkedList() { head = nullptr; }

    // Inserting at the front is slightly more complex now
    // because we must update TWO pointers (next AND prev)
    void insertFront(int val) {
        DNode* newNode = new DNode(val);
        
        if (head != nullptr) {
            head-&gt;prev = newNode; // Tell the old head what its new 'prev' is
        }
        
        newNode-&gt;next = head;
        head = newNode; // The new node is officially the new head
    }
};
                        </code></pre>
                    </div>
                    
                    <div class="why-matters-box">
                        <h4>Real-World Usage 🌍</h4>
                        <p>Any system requiring instant backwards navigation uses this. Examples: Browser history (Back and Forward buttons), Music Player playlists (Next and Previous Track), and undo/redo operations in text editors.</p>
                    </div>
                `,
                practice: {
                    questions: [
                        { q: "Why use a Doubly Linked List over a Singly Linked List?", a: "To allow bidirectional traversal (moving forwards and backwards)", options: ["To save memory", "To allow bidirectional traversal (moving forwards and backwards)", "To achieve O(1) Search time", "Sorting is impossible otherwise"] },
                        { q: "What is the primary trade-off when choosing a Doubly Linked List?", a: "It strictly consumes more memory per node", options: ["It is slower to read", "It strictly consumes more memory per node", "It cannot store integers", "It requires an array underneath it"] },
                        { q: "In a newly created `DNode(5)`, what do the `next` and `prev` pointers point to?", a: "nullptr", options: ["head and tail", "Each other", "nullptr", "Random memory"] },
                        { q: "If we delete a node `X` from the middle of a Doubly Linked List, the `next` pointer of the node before `X` must now point to what?", a: "The node after X", options: ["nullptr", "head", "The node after X", "X itself"] },
                        { q: "What pointer does the Head node's `prev` pointer hold?", a: "nullptr", options: ["The Tail node", "head", "nullptr", "The second node"] }
                    ],
                    coding: [
                        {
                            q: "Given a valid pointer `temp` pointing to a node in the middle of a Doubly Linked List, write a single line of C++ code to access the <i>data</i> of the node immediately BEFORE `temp`.",
                            a: "temp->prev->data;"
                        },
                        {
                            q: "Write a short method `void printReverse(DNode* tail)` that takes the tail (last) node of a doubly linked list, and prints the list backwards to the front.",
                            a: "void printReverse(DNode* tail) {\n    DNode* temp = tail;\n    while (temp != nullptr) {\n        std::cout << temp->data << \" \";\n        temp = temp->prev;\n    }\n}"
                        }
                    ]
                }
            }
        ]
    },
    {
        id: "phase5",
        title: "PHASE 5 - Stack",
        lessons: [
            {
                id: "l7",
                title: "Stack Concept & Array Implementation",
                content: `
                    <h2 class="lesson-title">What is a Stack?</h2>
                    <p class="en-text">A Stack is a linear data structure that strictly follows the <strong>LIFO (Last-In, First-Out)</strong> principle. To visualize this, imagine a physical stack of heavy plates in a cafeteria. You can only safely place a new plate right on top, and you can only remove the plate that is currently sitting on top.</p>
                    <p class="ar-text">المكدس هو هيكل بيانات يعتمد مبدأ <strong>"ما يدخل أخيرًا يخرج أولاً" (LIFO)</strong>. لتخيل ذلك، تخيل كومة من الأطباق الثقيلة في كافيتريا. يمكنك فقط وضع طبق جديد بأمان في الأعلى، ويمكنك إزالة الطبق الموجود حاليًا في الأعلى فقط.</p>
                    
                    <h3>Key Operations</h3>
                    <ul>
                        <li class="en-text"><strong>Push [O(1)]:</strong> Add an element to the top of the stack.</li>
                        <li class="en-text"><strong>Pop [O(1)]:</strong> Remove the top element from the stack.</li>
                        <li class="en-text"><strong>Top / Peek [O(1)]:</strong> Look at the top element without removing it.</li>
                        <li class="en-text"><strong>isEmpty [O(1)]:</strong> Check if the stack has any elements left.</li>
                    </ul>

                    <h3>Implementation from scratch (Array-Based)</h3>
                    <p class="en-text">We can easily implement a Stack using an array and a single integer variable called <code>topIndex</code>. <code>topIndex</code> starts at -1 (meaning empty) and points to the index of the highest item.</p>

                    <div class="code-block">
                        <pre><code class="language-cpp">
#include &lt;iostream&gt;
using namespace std;

class ArrayStack {
private:
    int* arr;       // Dynamic array to hold items
    int topIndex;   // Tracks the index of the top element
    int capacity;   // Maximum allowed size

public:
    ArrayStack(int size = 100) {
        capacity = size;
        arr = new int[capacity];
        topIndex = -1; // -1 means the Stack is empty!
    }
    
    ~ArrayStack() {
        delete[] arr; // Prevent memory leak when stack is destroyed
    }

    // PUSH: Add to top
    void push(int val) {
        if (topIndex == capacity - 1) { // Check if full
            cout &lt;&lt; "Stack Overflow! Cannot push." &lt;&lt; endl;
            return;
        }
        topIndex++; // Move the pointer UP
        arr[topIndex] = val; // Store the value
        // Note: Can be written concisely as: arr[++topIndex] = val;
    }

    // POP: Remove from top
    void pop() {
        if (topIndex == -1) { // Check if empty
            cout &lt;&lt; "Stack Underflow! Cannot pop." &lt;&lt; endl;
            return;
        }
        topIndex--; // We do NOT need to erase the data. Just move the pointer DOWN!
    }

    // TOP: View top element
    int top() {
        if (topIndex == -1) throw runtime_error("Stack is empty");
        return arr[topIndex];
    }
    
    bool isEmpty() {
        return topIndex == -1;
    }
};
                        </code></pre>
                    </div>

                    <div class="common-mistake-box">
                        <h4>🧠 Engineer's Insight on Pop()</h4>
                        <p class="important-note">Notice how <code>pop()</code> only does <code>topIndex--;</code>. It doesn't actually delete the number from the array! Why? Because the next time we push, we will simply overwrite that old garbage data. This makes <code>pop()</code> extremely fast.</p>
                    </div>

                    <div class="why-matters-box">
                        <h4>Real-World Usage 🌍</h4>
                        <p>Your browser's "Back" button, Text Editor Undo (Ctrl+Z) functionality, Function Call Stacks in recursion, and Compiler Syntax checking (matching parentheses) all rely heavily on Stacks!</p>
                    </div>
                `,
                practice: {
                    questions: [
                        { q: "What fundamental rule does a Stack strictly follow?", a: "LIFO (Last-In, First-Out)", options: ["FIFO", "LIFO (Last-In, First-Out)", "Random Access", "Sorted Order Only"] },
                        { q: "What is the Big-O time complexity of a valid PUSH operation?", a: "O(1)", options: ["O(N)", "O(log N)", "O(1)", "O(N^2)"] },
                        { q: "What error occurs if you try to POP from a totally empty stack?", a: "Stack Underflow", options: ["Stack Overflow", "Stack Underflow", "Memory leak", "Segmentation Fault"] },
                        { q: "In the Array-based Stack, why does `topIndex` usually start at -1 instead of 0?", a: "Because index 0 is a valid array slot for the first item", options: ["Because arrays start at 1 in C++", "Because index 0 is a valid array slot for the first item", "To save memory", "-1 is a magic number"] },
                        { q: "True or False: The `pop()` operation must manually erase the data in the array to free up memory.", a: "False. It just decrements the topIndex.", options: ["True. Otherwise it leaks.", "False. It just decrements the topIndex.", "True. C++ requires strict cleanup.", "False. The OS deletes it instantly."] }
                    ],
                    coding: [
                        {
                            q: "Imagine an empty `ArrayStack` with capacity 10. You run: `push(5); push(10); pop(); push(15);`. What is the value returned by `top()`?",
                            a: "15"
                        },
                        {
                            q: "Write a short method `int size()` for the `ArrayStack` class that returns the total count of elements currently sitting in the stack.",
                            a: "int size() {\n    return topIndex + 1;\n}"
                        }
                    ]
                }
            }
        ]
    },
    {
        id: "phase6",
        title: "PHASE 6 - Queue",
        lessons: [
            {
                id: "l8",
                title: "Queue Concept & Linear Queue",
                content: `
                    <h2 class="lesson-title">What is a Queue?</h2>
                    <p class="en-text">A Queue is a FIFO (First-In, First-Out) data structure. Imagine waiting in line at a cinema ticket counter. The first person to join the line is the first one served.</p>
                    <p class="ar-text">الطابور هو هيكل بيانات يعتمد مبدأ "ما يدخل أولاً يخرج أولاً" (FIFO). تخيل الانتظار في طابور عند شباك تذاكر السينما. أول شخص ينضم إلى الطابور هو أول شخص يتم خدمته.</p>
                    
                    <h3>Key Operations (All O(1))</h3>
                    <ul>
                        <li><strong>Enqueue / Push:</strong> Add to the back (rear).</li>
                        <li><strong>Dequeue / Pop:</strong> Remove from the front.</li>
                        <li><strong>Front:</strong> View the first element.</li>
                    </ul>

                    <h3>Linked List Implementation (Highly Recommended)</h3>
                    <p class="en-text">Implementing a queue with an array can be inefficient because dequeuing from the front requires shifting all elements (O(N)). A Linked List implementation guarantees O(1) for both enqueue and dequeue if we keep track of the tail!</p>
                    
                    <div class="code-block">
                        <pre><code class="language-cpp">
#include &lt;iostream&gt;
using namespace std;

struct Node {
    int data;
    Node* next;
    Node(int d) : data(d), next(nullptr) {}
};

class Queue {
private:
    Node* front; // Used for Dequeue
    Node* rear;  // Used for Enqueue

public:
    Queue() {
        front = rear = nullptr;
    }

    void enqueue(int val) {
        Node* newNode = new Node(val);
        // If queue is empty
        if (rear == nullptr) {
            front = rear = newNode;
            return;
        }
        // Add at end and change rear
        rear-&gt;next = newNode;
        rear = newNode;
    }

    void dequeue() {
        if (front == nullptr) return; // Underflow
        Node* temp = front;
        front = front-&gt;next;
        
        // If front becomes null, rear also must be null
        if (front == nullptr) rear = nullptr;
        
        delete temp; // Free memory!
    }

    int peek() {
        if (front == nullptr) throw runtime_error("Empty queue");
        return front-&gt;data;
    }
};
                        </code></pre>
                    </div>
                `,
                practice: {
                    questions: [
                        { q: "What principle does a Queue follow?", a: "FIFO", options: ["LIFO", "FILO", "FIFO", "LILO"] },
                        { q: "If we use a basic array for a queue, what is the time complexity of removing the front element (and shifting all others)?", a: "O(N)", options: ["O(1)", "O(log N)", "O(N)", "O(N^2)"] },
                        { q: "Why is a Linked List generally better for a basic Queue implementation than an un-optimized Array?", a: "O(1) enqueue and dequeue without shifting", options: ["Saves memory overall", "O(1) enqueue and dequeue without shifting", "It handles larger data types natively", "It provides O(1) random search"] },
                        { q: "Which real-world system natively operates exactly like a Queue?", a: "A printer job spooler", options: ["A browser's 'Back' button", "An Undo feature in Word", "A printer job spooler", "A file system hierarchy"] },
                        { q: "In our Linked List Queue implementation, what happens to the `rear` pointer when we dequeue the very last remaining element?", a: "It must be explicitly set to nullptr", options: ["It naturally points to nullptr", "It stays pointing to the deleted memory address", "It must be explicitly set to nullptr", "It points to the Head"] }
                    ],
                    coding: [
                        {
                            q: "Assume we have a linked list queue currently holding [10 -> 20 -> 30]. `front` points to 10, `rear` points to 30. Which specific pointer gets reassigned when we call `enqueue(40)`?",
                            a: "`rear->next` is pointed to the new node, and then `rear` itself is updated to point to the new node."
                        },
                        {
                            q: "Why did we add the protective line `if (front == nullptr) rear = nullptr;` inside our `dequeue` method?",
                            a: "Because without it, if we empty the queue, `rear` would remain dangling, pointing to the memory address we just deleted."
                        }
                    ]
                }
            }
        ]
    },
    {
        id: "phase7",
        title: "PHASE 7 - Recursion Mastery",
        lessons: [
            {
                id: "l9",
                title: "Thinking Recursively & Call Stack",
                content: `
                    <h2 class="lesson-title">What is Recursion?</h2>
                    <p class="en-text">Recursion is a problem-solving method where the solution depends on solutions to smaller instances of the exact same problem. In programming terms, it simply means <strong>a function that calls itself</strong>.</p>
                    <p class="ar-text">التكرار أو العودية (Recursion) هي طريقة لحل المشكلات يعتمد فيها الحل على حلول لحالات أصغر من نفس المشكلة بالضبط. من الناحية البرمجية، يعني ببساطة <strong>دالة تستدعي نفسها</strong>.</p>
                    
                    <h3>The Call Stack: The Invisible Engine</h3>
                    <p class="en-text">To understand recursion, you must understand the Memory Stack. Every time a function is called, the OS creates a new "frame" and pushes it onto the <strong>Call Stack</strong>. This frame holds the function's local variables, parameters, and its current line of execution. When a function finally finishes returning a value, its frame is "popped" off the stack, and the CPU resumes the function below it.</p>

                    <h3>The Two Pillars of a Recursive Function</h3>
                    <ul>
                        <li class="en-text"><strong>1. The Base Case (The Anchor):</strong> The strict condition under which the function <em>stops</em> calling itself and finally returns a concrete value. Without this, the function calls itself forever, causing a <code>Stack Overflow</code> crash.</li>
                        <li class="en-text"><strong>2. The Recursive Case (The Engine):</strong> The part where the function breaks the current problem down into a smaller piece, and calls itself to solve that smaller piece.</li>
                    </ul>

                    <div class="code-block">
                        <pre><code class="language-cpp">
#include &lt;iostream&gt;
using namespace std;

// Calculates N! (N Factorial) = N * (N-1) * (N-2) ... * 1
int factorial(int n) {
    // 1. The Base Case
    if (n &lt;= 1) {
        return 1; // Stop calculating and return 1
    }
    
    // 2. The Recursive Case
    // "I don't know the full answer yet, but I know it's N times whatever (N-1)! is."
    return n * factorial(n - 1);
}

int main() {
    cout &lt;&lt; factorial(4); // Outputs 24
    // Call Stack logic:
    // f(4) waits for f(3)
    // f(3) waits for f(2)
    // f(2) waits for f(1)
    // f(1) hits Base Case, returns 1. 
    // Now they resolve upwards! f(2) returns 2*1. f(3) returns 3*2. f(4) returns 4*6 = 24.
    return 0;
}
                        </code></pre>
                    </div>

                    <div class="common-mistake-box">
                        <h4>❌ Beginner Mistake</h4>
                        <p class="important-note">Forgetting to include the Base Case entirely, or writing a Base Case that the logic will accidentally jump over (e.g., waiting for <code>n == 0</code> but subtracting by 2 when <code>n</code> starts at 5).</p>
                        <h4>✅ Correct Approach</h4>
                        <p class="correct-note">Always physically write out your Base Case as the very first lines of code inside your recursive function. Guard your stack!</p>
                    </div>

                    <h3>Memoization: Caching Recursive Results</h3>
                    <p class="en-text">Naive recursion often re-computes the exact same sub-problem hundreds of thousands of times. <strong>Memoization</strong> is the technique of storing a sub-problem's answer in a hash table (or array) the first time we compute it, so all future calls for that same sub-problem return the cached answer instantly in O(1).</p>

                    <div class="code-block">
                        <pre><code class="language-cpp">
#include &lt;unordered_map&gt;
using namespace std;

// Naive Fibonacci: O(2^N) — Catastrophically slow for large N
int fibNaive(int n) {
    if (n <= 1) return n;
    return fibNaive(n-1) + fibNaive(n-2); // Same calls computed again and again!
}

// --- MEMOIZED Fibonacci: O(N) ---
unordered_map&lt;int, int&gt; cache;
int fib(int n) {
    if (n <= 1) return n;
    if (cache.count(n)) return cache[n]; // Already solved? Return instantly!
    return cache[n] = fib(n-1) + fib(n-2); // Store result before returning
}
// fib(50) now results in only 50 unique computations instead of 2^50!
                        </code></pre>
                    </div>

                    <div class="insight-box">
                        <h4>🔑 When to Use Memoization</h4>
                        <p>If a recursive function is ever called with the <em>same arguments more than once</em>, memoization will transform it from exponential to linear complexity. This is called <strong>Top-Down Dynamic Programming</strong> — one of the most critical interview skills.</p>
                    </div>

                    <div class="why-matters-box">
                        <h4>Why use Recursion? 🧠</h4>
                        <p>While loops are often faster (no Call Stack overhead), recursion is mathematically elegant for tasks that branch out naturally: exploring File Directories, Tree Traversal (Phase 8), Graph Search, and Divide-and-Conquer sorting algorithms like Merge Sort and Quick Sort.</p>
                    </div>
                `,
                practice: {
                    questions: [
                        { q: "What absolutely critical element prevents a recursive function from running infinitely?", a: "The Base Case", options: ["The Call Stack", "The Base Case", "A for-loop", "The Operating System limits"] },
                        { q: "Where does the computer store the active state of each recursive function call?", a: "The Call Stack", options: ["The DB", "The Call Stack", "The Heap memory", "The Global Scope"] },
                        { q: "What infamous error occurs when a recursive function lacks a valid base case?", a: "Stack Overflow", options: ["Heap Overflow", "Stack Overflow", "Syntax Error", "Null Pointer Exception"] },
                        { q: "If `factorial(3)` is called, how many frames (including the initial call) are pushed to the stack before the first one resolves?", a: "3 frames", options: ["1 frame", "2 frames", "3 frames", "4 frames"] },
                        { q: "For which of the following operations is recursion naturally best suited?", a: "Traversing Tree structures", options: ["Simple counting", "Traversing Tree structures", "Linear Array search", "Printing hello world"] }
                    ],
                    coding: [
                        {
                            q: "Write a recursive C++ function `int sum(int n)` that calculates the sum of all numbers from `1` to `n`. (Assume n > 0).",
                            a: "int sum(int n) {\n    if (n == 1) return 1;\n    return n + sum(n - 1);\n}"
                        },
                        {
                            q: "What mathematical sequence does this recursive function generate? `int f(int n) { if(n<=1) return n; return f(n-1) + f(n-2); }`",
                            a: "The Fibonacci Sequence."
                        }
                    ]
                }
            }
        ]
    },
    {
        id: "phase8",
        title: "PHASE 8 - Trees",
        lessons: [
            {
                id: "l10",
                title: "Binary Tree Terminology & BST",
                content: `
                    <h2 class="lesson-title">What is a Tree?</h2>
                    <p class="en-text">Unlike Arrays, Stacks, and Queues which are purely linear (one item comes strictly after another), a Tree is a <strong>hierarchical</strong> data structure. It consists of nodes connected by edges, resembling an inverted physical tree where the root is at the top and the leaves are at the bottom.</p>
                    <p class="ar-text">على عكس المصفوفات والمكدسات والطوابير التي تعتبر خطية بحتة (عنصر واحد يأتي بدقة بعد الآخر)، الشجرة هي بنية بيانات <strong>هرمية</strong>. تتكون من عقد متصلة بواسطة حواف، تشبه شجرة مادية مقلوبة حيث يكون الجذر في الأعلى والأوراق في الأسفل.</p>
                    
                    <h3>Essential Terminology</h3>
                    <ul>
                        <li class="en-text"><strong>Root:</strong> The topmost absolute starting node of the tree. A tree has exactly one root.</li>
                        <li class="en-text"><strong>Leaf:</strong> A node at the very bottom that has absolutely no children.</li>
                        <li class="en-text"><strong>Parent & Child:</strong> A node that points to another node is its Parent. The pointed node is the Child.</li>
                        <li class="en-text"><strong>Depth:</strong> The number of edges from the root down to a specific node.</li>
                        <li class="en-text"><strong>Height:</strong> The number of edges on the longest possible path from a specific node down to a leaf.</li>
                    </ul>

                    <h3>Binary Search Tree (BST)</h3>
                    <p class="en-text">A Binary Tree is a tree where every node has <em>at most two</em> children (Left and Right). A <strong>Binary Search Tree (BST)</strong> adds a strict mathematical rule on top of that:</p>
                    <ul>
                        <li class="en-text">Everything in a node's <strong>Left subtree</strong> must be strictly LESS than the node's value.</li>
                        <li class="en-text">Everything in a node's <strong>Right subtree</strong> must be strictly GREATER than the node's value.</li>
                    </ul>
                    <p class="en-text">This strict ordering guarantees that if the tree is balanced, every time we move down a level to search for a number, we cut the remaining search space in half! This gives us blazing fast <code>O(log N)</code> search times.</p>

                    <div class="insight-box">
                        <h4>⚠️ Balanced vs. Unbalanced BST</h4>
                        <p>If you insert sorted data (1, 2, 3, 4, 5, …) into a BST without balancing, it degrades into a <strong>linked list</strong> — all nodes going right — giving you O(N) search instead of O(log N). This is why production systems use <strong>Self-Balancing Trees</strong> like AVL Trees and Red-Black Trees (which is what <code>std::map</code> uses internally).</p>
                    </div>

                    <h3>Deleting from a BST — The Hardest Operation</h3>
                    <p class="en-text">Deletion has three cases depending on the node you want to remove:</p>
                    <ul>
                        <li class="en-text"><strong>Case 1 — Leaf Node (0 children):</strong> Simply delete it and set the parent's pointer to <code>nullptr</code>.</li>
                        <li class="en-text"><strong>Case 2 — One Child:</strong> Bypass the node by making the parent point directly to the node's only child.</li>
                        <li class="en-text"><strong>Case 3 — Two Children (hardest):</strong> Find the <em>In-Order Successor</em> (smallest value in the right subtree), copy its value into the current node, then delete the successor.</li>
                    </ul>

                    <div class="code-block">
                        <pre><code class="language-cpp">
#include &lt;iostream&gt;
using namespace std;

// The building block of a Binary Tree
struct TreeNode {
    int val;
    TreeNode* left;  // Pointer to the left child
    TreeNode* right; // Pointer to the right child
    
    TreeNode(int x) {
        val = x;
        left = nullptr;
        right = nullptr;
    }
};

// Recursive function to insert a new value into a BST
TreeNode* insertBST(TreeNode* root, int val) {
    // Base Case: We found an empty spot! Put the new node here.
    if (root == nullptr) {
        return new TreeNode(val);
    }
    
    // Recursive Cases: Navigate left or right
    if (val &lt; root-&gt;val) {
        // The value is smaller, it MUST go to the left
        root-&gt;left = insertBST(root-&gt;left, val);
    } else if (val &gt; root-&gt;val) {
        // The value is larger, it MUST go to the right
        root-&gt;right = insertBST(root-&gt;right, val);
    }
    
    // Return the unchanged root pointer
    return root;
}
                        </code></pre>
                    </div>
                `,
                practice: {
                    questions: [
                        { q: "Which definition correctly describes a 'Leaf' node in a tree?", a: "A node that has absolutely zero children", options: ["The very topmost node", "A node with only one child", "A node that has absolutely zero children", "The node with the largest value"] },
                        { q: "In a valid Binary Search Tree (BST), if a parent node holds the value 50, where MUST a new node with the value 25 be placed relative to it?", a: "Somewhere in its Left subtree", options: ["Somewhere in its Right subtree", "Somewhere in its Left subtree", "As a new Root", "Next to it in an array"] },
                        { q: "What is the average Time Complexity for searching for an element in a balanced Binary Search Tree?", a: "O(log N)", options: ["O(N)", "O(1)", "O(log N)", "O(N^2)"] },
                        { q: "What distinguishes a plain Binary Tree from a Binary Search Tree (BST)?", a: "A BST enforces a strict Left < Parent < Right ordering rule", options: ["A BST can only store strings", "A BST enforces a strict Left < Parent < Right ordering rule", "A BST can have up to 3 children per node", "There is no difference"] },
                        { q: "In the context of trees, what is 'Height'?", a: "The number of edges on the longest path from a node to a leaf", options: ["The total number of nodes", "The distance from the root to a node", "The number of edges on the longest path from a node to a leaf", "The number of children a node has"] }
                    ],
                    coding: [
                        {
                            q: "Given a pointer `TreeNode* root`, write a recursive C++ function `bool searchBST(TreeNode* root, int target)` that returns true if the target exists in the BST, and false otherwise.",
                            a: "bool searchBST(TreeNode* root, int target) {\n    if (root == nullptr) return false;\n    if (root->val == target) return true;\n    if (target < root->val) return searchBST(root->left, target);\n    return searchBST(root->right, target);\n}"
                        },
                        {
                            q: "You insert the following values into an empty BST in this exact order: 10, 5, 15, 2. What will be the `val` of the left child of the node containing 5?",
                            a: "2"
                        }
                    ]
                }
            },
            {
                id: "l11",
                title: "Tree Traversals",
                content: `
                    <h2 class="lesson-title">How Do We Visit Every Node?</h2>
                    <p class="en-text">Because a tree is not a flat line like an array, we can't just run a simple <code>for</code> loop from start to finish. We must decide the <strong>order</strong> in which we visit a Parent node and its Left and Right children. We use Recursion to implement Depth-First traversals elegantly.</p>
                    <p class="ar-text">نظراً لأن الشجرة ليست خطاً مستقيماً مثل المصفوفة، فلا يمكننا ببساطة تشغيل حلقة <code>for</code> بسيطة من البداية إلى النهاية. يجب أن نقرر <strong>الترتيب</strong> الذي نزور به العقدة الأب وأبنائها الأيمن والأيسر. نستخدم التكرار (Recursion) لتنفيذ جولات العمق أولاً (Depth-First) بشكل أنيق.</p>
                    
                    <h3>Depth-First Search (DFS) Traversals</h3>
                    <ul>
                        <li class="en-text"><strong>Inorder (Left, Root, Right):</strong> This is incredibly special for a BST. Because it visits the smaller Left side first, then the Root, then the larger Right side, <em>an Inorder traversal of a BST prints the values in perfectly sorted ascending order!</em></li>
                        <li class="en-text"><strong>Preorder (Root, Left, Right):</strong> Visits the parent immediately before exploring its children. Highly useful when you want to clone/copy an entire tree.</li>
                        <li class="en-text"><strong>Postorder (Left, Right, Root):</strong> Visits all children before finally touching the parent. Highly useful for deleting a tree, because you must delete the children before deleting the parent to avoid memory leaks!</li>
                    </ul>

                    <h3>Breadth-First Search (BFS) Traversal</h3>
                    <ul>
                        <li class="en-text"><strong>Level Order:</strong> Visits nodes completely level by level, from top to bottom, left to right. This cannot be done easily with simple recursion; it requires using a Queue!</li>
                    </ul>

                    <div class="code-block">
                        <pre><code class="language-cpp">
// INORDER Traversal (Left -> Root -> Right)
// Always prints a BST in sorted order!
void inorder(TreeNode* root) {
    if (root == nullptr) return; // Base Case
    
    inorder(root-&gt;left);        // 1. Fully explore Left Subtree
    cout &lt;&lt; root-&gt;val &lt;&lt; " ";   // 2. Visit (Print) the Root itself
    inorder(root-&gt;right);       // 3. Fully explore Right Subtree
}

// POSTORDER Traversal (Left -> Right -> Root)
// Safest way to delete a tree from memory in C++
void deleteTree(TreeNode* root) {
    if (root == nullptr) return;
    
    deleteTree(root-&gt;left);     // 1. Delete Left Subtree
    deleteTree(root-&gt;right);    // 2. Delete Right Subtree
    delete root;                // 3. Finally, delete the parent
}
                        </code></pre>
                    </div>
                `,
                practice: {
                    questions: [
                        { q: "Which specific recursive traversal will visit the nodes of a valid Binary Search Tree in perfectly sorted ascending order?", a: "Inorder Traversal", options: ["Preorder Traversal", "Inorder Traversal", "Postorder Traversal", "Level Order Traversal"] },
                        { q: "If you need to completely delete a tree from C++ heap memory without causing pointer errors, which traversal order is strictly required?", a: "Postorder (Delete children before parent)", options: ["Preorder", "Inorder", "Postorder (Delete children before parent)", "Randomized"] },
                        { q: "What is the visit sequence for a Preorder traversal?", a: "Root, Left, Right", options: ["Left, Root, Right", "Left, Right, Root", "Root, Left, Right", "Right, Root, Left"] },
                        { q: "What secondary Data Structure is fundamentally required to successfully implement a Level Order (BFS) traversal?", a: "A Queue", options: ["A Stack", "A Queue", "A Hash Map", "A Linked List"] },
                        { q: "If you run an Inorder traversal on a BST containing the numbers [10, 5, 15, 2, 7], what will be the exact output?", a: "2 5 7 10 15", options: ["10 5 2 7 15", "2 5 7 10 15", "15 10 7 5 2", "2 7 5 15 10"] }
                    ],
                    coding: [
                        {
                            q: "Write a recursive C++ function `void preorder(TreeNode* root)` that prints the values of a tree in Preorder.",
                            a: "void preorder(TreeNode* root) {\n    if (root == nullptr) return;\n    std::cout << root->val << \" \";\n    preorder(root->left);\n    preorder(root->right);\n}"
                        },
                        {
                            q: "A tree has root 50, left child 25, right child 75. If you perform a Postorder traversal and print the values, what is the exact string output?",
                            a: "\"25 75 50\""
                        }
                    ]
                }
            }
        ]
    },
    {
        id: "phase9",
        title: "PHASE 9 - Self-Balancing Trees",
        lessons: [
            {
                id: "l11a",
                title: "AVL Trees & Red-Black Trees",
                content: `
                    <h2 class="lesson-title">Why Balance Matters</h2>
                    <p class="en-text">In Phase 8, we learned about Binary Search Trees (BST). However, standard BSTs have a critical flaw: if elements are inserted in sorted order (1, 2, 3, 4, 5), the tree degenerates into a <strong>linked list</strong> with O(N) search time instead of O(log N). This defeats the entire purpose of using a tree!</p>
                    <p class="ar-text">في المرحلة 8، تعلمنا عن أشجار البحث الثنائية (BST). ومع ذلك، تمتلك أشجار BST القياسية عيباً حرجاً: إذا تم إدخال العناصر بترتيب مرتب (1، 2، 3، 4، 5)، تتدهور الشجرة إلى <strong>قائمة مرتبطة</strong> مع وقت بحث O(N) بدلاً من O(log N). هذا يهزم الغرض بالكامل من استخدام شجرة!</p>

                    <h3>The Balance Factor Concept</h3>
                    <p class="en-text">A tree's efficiency comes from its height being logarithmic relative to the number of nodes. For a BST with N nodes, the optimal height is log₂(N). When a tree becomes unbalanced (essentially a linked list), its height becomes N, destroying performance.</p>
                    <p class="ar-text">تأتي كفاءة الشجرة من ارتفاعها اللوغاريتمي بالنسبة لعدد العقد. لشجرة BST تحتوي على N عقدة، الارتفاع المثالي هو log₂(N). عندما تصبح الشجرة غير متوازنة (قائمة مرتبطة أساساً)، يصبح ارتفاعها N، مما يدمر الأداء.</p>

                    <h3>AVL Trees: Strictly Balanced</h3>
                    <p class="en-text">An <strong>AVL Tree</strong> (named after inventors Adelson-Velsky and Landis) is a self-balancing BST where for <em>every node</em>, the height difference between its left and right subtrees is at most 1. This strict rule guarantees O(log N) height at all times.</p>
                    
                    <div class="code-block">
                        <pre><code class="language-cpp">
// Balance Factor calculation for any node
int getBalanceFactor(Node* node) {
    if (node == nullptr) return 0;
    return height(node->left) - height(node->right);
}

// In AVL Tree, balance factor must be: -1, 0, or +1
// If |balance factor| > 1, we MUST perform rotations to restore balance
                        </code></pre>
                    </div>

                    <h3>Tree Rotations: The Rebalancing Tool</h3>
                    <p class="en-text">When insertion or deletion causes imbalance, we use <strong>rotations</strong> to restore balance while maintaining the BST property (left < parent < right). There are four rotation cases:</p>
                    <ul>
                        <li class="en-text"><strong>Left Rotation:</strong> Used when right subtree is too heavy</li>
                        <li class="en-text"><strong>Right Rotation:</strong> Used when left subtree is too heavy</li>
                        <li class="en-text"><strong>Left-Right Rotation:</strong> Double rotation for left-right case</li>
                        <li class="en-text"><strong>Right-Left Rotation:</strong> Double rotation for right-left case</li>
                    </ul>

                    <div class="code-block">
                        <pre><code class="language-cpp">
#include &lt;iostream&gt;
#include &lt;algorithm&gt;
using namespace std;

struct AVLNode {
    int key;
    AVLNode* left;
    AVLNode* right;
    int height;
    
    AVLNode(int k) : key(k), left(nullptr), right(nullptr), height(1) {}
};

// Get height safely
int height(AVLNode* node) {
    return node ? node->height : 0;
}

// Right Rotation (for Left-Left imbalance)
AVLNode* rightRotate(AVLNode* y) {
    AVLNode* x = y->left;
    AVLNode* T2 = x->right;
    
    // Perform rotation
    x->right = y;
    y->left = T2;
    
    // Update heights
    y->height = 1 + max(height(y->left), height(y->right));
    x->height = 1 + max(height(x->left), height(x->right));
    
    return x;  // New root of this subtree
}

// Left Rotation (for Right-Right imbalance)
AVLNode* leftRotate(AVLNode* x) {
    AVLNode* y = x->right;
    AVLNode* T2 = y->left;
    
    // Perform rotation
    y->left = x;
    x->right = T2;
    
    // Update heights
    x->height = 1 + max(height(x->left), height(x->right));
    y->height = 1 + max(height(y->left), height(y->right));
    
    return y;  // New root of this subtree
}
                        </code></pre>
                    </div>

                    <h3>AVL Insertion with Auto-Balancing</h3>
                    <p class="en-text">After standard BST insertion, we check balance factors and perform necessary rotations all the way up to the root. This ensures the tree remains balanced after every insertion.</p>

                    <div class="code-block">
                        <pre><code class="language-cpp">
// Insert with automatic rebalancing
AVLNode* insert(AVLNode* node, int key) {
    // 1. Standard BST insertion
    if (node == nullptr) return new AVLNode(key);
    
    if (key < node->key)
        node->left = insert(node->left, key);
    else if (key > node->key)
        node->right = insert(node->right, key);
    else
        return node;  // No duplicates allowed
    
    // 2. Update height
    node->height = 1 + max(height(node->left), height(node->right));
    
    // 3. Get balance factor
    int balance = getBalanceFactor(node);
    
    // 4. Rebalance if needed
    
    // Left-Left Case
    if (balance > 1 && key < node->left->key)
        return rightRotate(node);
    
    // Right-Right Case
    if (balance < -1 && key > node->right->key)
        return leftRotate(node);
    
    // Left-Right Case
    if (balance > 1 && key > node->left->key) {
        node->left = leftRotate(node->left);
        return rightRotate(node);
    }
    
    // Right-Left Case
    if (balance < -1 && key < node->right->key) {
        node->right = rightRotate(node->right);
        return leftRotate(node);
    }
    
    return node;  // No rotation needed
}
                        </code></pre>
                    </div>

                    <h3>Red-Black Trees: Relaxed Balancing</h3>
                    <p class="en-text"><strong>Red-Black Trees</strong> are another self-balancing BST with less strict balancing than AVL. Each node has a color (red or black) that must follow these rules:</p>
                    <ul>
                        <li class="en-text">Every node is either red or black</li>
                        <li class="en-text">The root is always black</li>
                        <li class="en-text">All leaves (NIL) are black</li>
                        <li class="en-text">If a node is red, both children must be black (no two reds in a row)</li>
                        <li class="en-text">Every path from a node to its descendant NIL nodes has the same number of black nodes</li>
                    </ul>
                    
                    <div class="insight-box">
                        <h4>🔑 AVL vs Red-Black Tree Comparison</h4>
                        <ul>
                            <li><strong>AVL Trees:</strong> Strictly balanced (height ≤ log₂(N) + 1). Faster lookups, slower insertions/deletions due to more rotations.</li>
                            <li><strong>Red-Black Trees:</strong> Relaxed balancing (height ≤ 2×log₂(N)). Faster insertions/deletions, slightly slower lookups. Used in std::map/set.</li>
                        </ul>
                        <p>Both guarantee O(log N) operations, but AVL is preferred for lookup-heavy workloads, while Red-Black is preferred for modification-heavy workloads.</p>
                    </div>

                    <h3>Real-World Usage</h3>
                    <p class="en-text">Self-balancing trees are everywhere:</p>
                    <ul>
                        <li class="en-text"><code>std::map</code> and <code>std::set</code> in C++ use Red-Black Trees</li>
                        <li class="en-text">Linux Kernel's Completely Fair Scheduler uses Red-Black Trees</li>
                        <li class="en-text">Database indexing often uses B-Trees (variant of balanced trees)</li>
                        <li class="en-text">Java's TreeMap uses Red-Black Trees</li>
                    </ul>

                    <div class="why-matters-box">
                        <h4>Think Like an Engineer 🛠️</h4>
                        <p>Always consider the trade-off: if your application does 90% lookups and 10% insertions, prefer AVL trees. If it's more balanced or write-heavy, Red-Black trees may be better. Understanding these nuances separates senior engineers from juniors!</p>
                    </div>
                `,
                practice: {
                    questions: [
                        { q: "What is the maximum allowed height difference between subtrees in an AVL tree?", a: "1 (balance factor must be -1, 0, or +1)", options: ["0", "1 (balance factor must be -1, 0, or +1)", "2", "Unlimited"] },
                        { q: "What happens to a standard BST if you insert elements in sorted ascending order?", a: "It degenerates into a linked list with O(N) search time", options: ["It becomes perfectly balanced", "It degenerates into a linked list with O(N) search time", "It automatically rebalances", "It crashes"] },
                        { q: "Which rotation is used to fix a 'Left-Left' imbalance in an AVL tree?", a: "Right Rotation", options: ["Left Rotation", "Right Rotation", "Left-Right Rotation", "Right-Left Rotation"] },
                        { q: "Which C++ STL containers use Red-Black Trees internally?", a: "std::map and std::set", options: ["std::vector and std::array", "std::map and std::set", "std::unordered_map and std::unordered_set", "std::stack and std::queue"] },
                        { q: "Why might Red-Black trees be preferred over AVL trees in some applications?", a: "They require fewer rotations during insertion/deletion, making modifications faster", options: ["They are always more memory efficient", "They require fewer rotations during insertion/deletion, making modifications faster", "They guarantee strictly O(1) lookups", "They use less memory per node"] }
                    ],
                    coding: [
                        {
                            q: "After inserting 30, 20, 40, 10 into an empty AVL tree (in that order), what is the balance factor of the root node (30)?",
                            a: "+1. The tree structure is: 30(root), left=20(with right child 10), right=40. Height(left subtree)=2, Height(right subtree)=1, so balance = 2-1 = +1."
                        },
                        {
                            q: "Write the formula to calculate the balance factor of a node given its left and right child heights.",
                            a: "balance_factor = height(left_child) - height(right_child)"
                        }
                    ]
                }
            }
        ]
    },
    {
        id: "phase10",
        title: "PHASE 10 - Heap & Priority Queue",
        lessons: [
            {
                id: "l12",
                title: "Heap Property and Implementations",
                content: `
                    <h2 class="lesson-title">What is a Heap?</h2>
                    <p class="en-text">A Heap is a highly specialized Tree-based data structure that satisfies strict rules known as the <strong>Heap Property</strong>. While it is conceptually a Binary Tree, it is almost always implemented practically using a flat <strong>Array</strong> to save memory and improve cache performance.</p>
                    <p class="ar-text">الكومة (Heap) هي بنية بيانات شجرية متخصصة للغاية تلبي قواعد صارمة تُعرف باسم <strong>خاصية الكومة</strong>. على الرغم من أنها من الناحية المفاهيمية شجرة ثنائية، إلا أنه يتم تنفيذها عمليًا في الغالب باستخدام <strong>مصفوفة</strong> مسطحة لتوفير الذاكرة وتحسين أداء ذاكرة التخزين المؤقت.</p>
                    <h3>The Rule of the Heap</h3>
                    <ul>
                        <li class="en-text"><strong>Max Heap:</strong> Every parent node must be <em>greater than or equal to</em> all of its children. Therefore, the absolute maximum value is mathematically guaranteed to be at the Root (index 0).</li>
                        <li class="en-text"><strong>Min Heap:</strong> Every parent node must be <em>less than or equal to</em> all of its children. Therefore, the absolute minimum value is mathematically guaranteed to be at the Root (index 0).</li>
                    </ul>

                    <h3>Under the Hood: Array Implementation</h3>
                    <p class="en-text">We don't actually use <code>TreeNode</code> pointers for a Heap. We use a simple Array. If a parent is at index <code>i</code>:</p>
                    <ul>
                        <li class="en-text">Its <strong>Left Child</strong> is always at index: <code>2 * i + 1</code></li>
                        <li class="en-text">Its <strong>Right Child</strong> is always at index: <code>2 * i + 2</code></li>
                        <li class="en-text">Its <strong>Parent</strong> is always at index: <code>(i - 1) / 2</code></li>
                    </ul>

                    <h3>Priority Queue</h3>
                    <p class="en-text">A Heap is the underlying engine used to build a <strong>Priority Queue</strong> algorithm. Unlike a normal Queue (FIFO), a Priority Queue serves the highest priority item first, regardless of when it arrived.</p>
                    
                    <div class="code-block">
                        <pre><code class="language-cpp">
#include &lt;iostream&gt;
#include &lt;vector&gt;
#include &lt;queue&gt;
using namespace std;

int main() {
    // 1. Max priority queue (Root is highest number) - Default in C++
    priority_queue&lt;int&gt; maxHeap;
    maxHeap.push(10);
    maxHeap.push(50);
    maxHeap.push(5);
    
    // Top is GUARANTEED to be 50. O(1) time!
    cout &lt;&lt; "Max: " &lt;&lt; maxHeap.top() &lt;&lt; endl; 
    
    // 2. Min priority queue (Root is lowest number)
    priority_queue&lt;int, vector&lt;int&gt;, greater&lt;int&gt;&gt; minHeap;
    minHeap.push(10);
    minHeap.push(50);
    minHeap.push(5);
    
    // Top is GUARANTEED to be 5. O(1) time!
    cout &lt;&lt; "Min: " &lt;&lt; minHeap.top() &lt;&lt; endl; 
    
    return 0;
}
                        </code></pre>
                    </div>

                    <div class="why-matters-box">
                        <h4>Real-World Usage 🌍</h4>
                        <p>Operating systems use Priority Queues to schedule tasks (CPU Scheduling). A critical system error will bypass the entire queue and be pushed to the top of the Min-Heap instantly! Also used heavily in Dijkstra's Shortest Path algorithm.</p>
                    </div>
                `,
                practice: {
                    questions: [
                        { q: "In a Max Heap, what element is mathematically guaranteed to be at the root?", a: "The absolute maximum element", options: ["The absolute minimum element", "The absolute maximum element", "The median element", "The last element inserted"] },
                        { q: "What is the Big-O Time Complexity to simply PEEK at the maximum element in a Max Heap?", a: "O(1)", options: ["O(log N)", "O(1)", "O(N)", "O(N log N)"] },
                        { q: "If a Parent node in an array-based Heap is at index `3`, at what index is its Left Child located?", a: "Index 7", options: ["Index 6", "Index 7", "Index 8", "Index 1"] },
                        { q: "What is the primary real-world application of a Heap data structure?", a: "Implementing Priority Queues", options: ["Sorting strings alphabetically", "Implementing Priority Queues", "Replacing Hash Tables", "Storing relational database records"] },
                        { q: "If you push the numbers [100, 20, 300, 10] into a C++ std::priority_queue (which is a Max Heap), what order will they pop out?", a: "300, 100, 20, 10", options: ["10, 20, 100, 300", "100, 20, 300, 10", "300, 100, 20, 10", "Random order"] }
                    ],
                    coding: [
                        {
                            q: "Given the array `[50, 30, 40, 10, 20, 35]`, does this represent a valid Max Heap? (Check visually: Root 50. Children 30, 40. Children of 30 are 10, 20. Child of 40 is 35).",
                            a: "Yes. Every parent (50 -> 30,40), (30 -> 10,20), (40 -> 35) is greater than its children."
                        },
                        {
                            q: "Write the C++ definition to create a Priority Queue of integers that acts as a Min-Heap (smallest numbers come out first).",
                            a: "std::priority_queue<int, std::vector<int>, std::greater<int>> pq;"
                        }
                    ]
                }
            }
        ]
    },
    {
        id: "phase11",
        title: "PHASE 11 - Hash Tables",
        lessons: [
            {
                id: "l13",
                title: "Hashing & Collision Handling",
                content: `
                    <h2 class="lesson-title">The Magic of O(1) Search</h2>
                    <p class="en-text">A Hash Table stores key-value pairs. It uses a <strong>Hash Function</strong> to convert a key (like a string) into an array index. This allows for near instant O(1) lookups, insertions, and deletions!</p>
                    <p class="ar-text">يخزن جدول التجزئة أزواج القيمة والمفتاح. يستخدم <strong>دالة التجزئة (Hash Function)</strong> لتحويل مفتاح (مثل سلسلة نصية) إلى فهرس مصفوفة. يتيح هذا عمليات بحث وإدراج وحذف شبه فورية O(1) !</p>
                    
                    <h3>Collisions</h3>
                    <p class="en-text">What happens if two keys produce the same index? This is a Collision. We handle it primarily using:</p>
                    <ul>
                        <li class="en-text"><strong>Chaining:</strong> Each array index points to a Linked List of entries. If many keys collide, the chain grows and lookup degrades to O(N) in the worst case.</li>
                        <li class="en-text"><strong>Open Addressing (Linear Probing):</strong> We probe for the next available empty slot: check index+1, index+2, etc. Better cache performance than chaining but requires careful management.</li>
                    </ul>

                    <h3>Load Factor — The Key to Performance</h3>
                    <p class="en-text">The <strong>Load Factor</strong> is defined as: <code>λ = (number of entries) / (table size)</code>. As this grows past ~0.7, collisions become common and performance degrades. Most implementations <strong>rehash</strong> — allocate a new, larger table and re-insert all elements — when the load factor is exceeded. This costs O(N) time but happens rarely, similar to dynamic array resizing.</p>

                    <div class="insight-box">
                        <h4>🔑 Hash Map Interview Reality</h4>
                        <p><code>std::unordered_map</code> has O(1) <em>average</em> but O(N) <em>worst-case</em> for all operations due to collisions. In contrast, <code>std::map</code> (Red-Black Tree) guarantees O(log N) worst-case. For interview problems, prefer <code>unordered_map</code> unless the key ordering matters.</p>
                    </div>

                    <div class="code-block">
<pre><code class="language-cpp">int simpleHash(string key, int arraySize) {
    int sum = 0;
    for (char c : key) {
        sum += c; // ASCII value
    }
    return sum % arraySize; // Ensure it fits the array
}</code></pre>
                    </div>
                `,
                practice: {
                    questions: [
                        { q: "What is the average time complexity for searching in a Hash Table?", a: "O(1)", options: ["O(N)", "O(log N)", "O(1)", "O(N^2)"] },
                        { q: "What is the technique called when hash table collisions are resolved using Linked Lists?", a: "Chaining", options: ["Open Addressing", "Rehashing", "Chaining", "Linear Probing"] },
                        { q: "What is the primary purpose of a Hash Function?", a: "To convert a key into an array index", options: ["To sort data", "To encrypt data", "To convert a key into an array index", "To compress strings"] },
                        { q: "What takes more memory: An Array of 10 elements or a Hash Table storing 10 elements?", a: "A Hash Table", options: ["An Array", "A Hash Table", "They take exactly the same memory", "It depends on the OS"] },
                        { q: "What is a 'Collision' in a Hash Map?", a: "When two different keys generate the same hash index", options: ["When memory is full", "When two different keys generate the same hash index", "When a pointer becomes null", "When the map deletes itself"] }
                    ],
                    coding: [
                        {
                            q: "What does our Hash Function `sum % arraySize` ensure?",
                            a: "It ensures the final index mathematically cannot exceed the bounds of the underlying array."
                        },
                        {
                            q: "In a 'Chaining' setup, what is actually stored at `hash_table[index]`?",
                            a: "A pointer to the Head of a Linked List (or a dynamic array of entries)."
                        }
                    ]
                }
            }
        ]
    },
    {
        id: "phase12",
        title: "PHASE 12 - Graphs",
        lessons: [
            {
                id: "l14",
                title: "Graph Representation & BFS/DFS",
                content: `
                    <h2 class="lesson-title">What is a Graph?</h2>
                    <p class="en-text">A Graph is an extremely versatile non-linear data structure. It consists of a finite set of <strong>Vertices (Nodes)</strong> and a set of <strong>Edges</strong> connecting these vertices. In fact, a Tree is just a specialized type of Graph that has strictly no cycles!</p>
                    <p class="ar-text">الرسم البياني (Graph) هو بنية بيانات غير خطية متعددة الاستخدامات للغاية. يتكون من مجموعة محدودة من <strong>الرؤوس (العقد - Nodes)</strong> ومجموعة من <strong>الحواف (Edges)</strong> التي تربط هذه الرؤوس. في الواقع، الشجرة هي مجرد نوع متخصص من الرسوم البيانية التي لا تحتوي على أي دورات (حلقات) بدقة!</p>
                    
                    <h3>Real World Examples</h3>
                    <ul>
                        <li class="en-text"><strong>Social Networks:</strong> Users are nodes, friendships are edges.</li>
                        <li class="en-text"><strong>Google Maps:</strong> Cities/Intersections are nodes, roads are edges (with weights representing distance/time).</li>
                        <li class="en-text"><strong>The Internet:</strong> Web pages are nodes, hyperlinks are directed edges!</li>
                    </ul>

                    <h3>How do we Represent a Graph in Code?</h3>
                    <p class="en-text">Unlike a Tree where nodes cleanly point to <code>left</code> and <code>right</code>, graph nodes can point to anywhere from zero to millions of other nodes. We usually use two memory representations:</p>
                    
                    <ul>
                        <li class="en-text"><strong>1. Adjacency Matrix:</strong> A massive 2D boolean array where <code>matrix[i][j] = true</code> if an edge exists between Node i and Node j. <em>Trade-off: Extremely fast O(1) edge lookup, but wastes massive amounts of memory O(V²) for sparse graphs.</em></li>
                        <li class="en-text"><strong>2. Adjacency List (Most Common):</strong> An Array (or Hash Map) of Linked Lists (or Vectors). Index <code>i</code> holds a list of all neighbors connected to Node i. <em>Trade-off: Highly memory efficient O(V + E), but checking if a specific edge exists takes slightly longer.</em></li>
                    </ul>

                    <h3>Graph Traversals</h3>
                    <ul>
                        <li class="en-text"><strong>Breadth-First Search (BFS):</strong> Ripples outward level-by-level like dropping a stone in a pond. Needs a Queue. <em>Superpower: Guarantees finding the strict Shortest Path in an unweighted graph!</em></li>
                        <li class="en-text"><strong>Depth-First Search (DFS):</strong> Plunges as deep as mathematically possible down one path before hitting a dead end and backtracking. Needs a Stack (or Recursion). <em>Superpower: Excellent for discovering cycles or solving maze-like puzzles.</em></li>
                    </ul>

                    <div class="code-block">
                        <pre><code class="language-cpp">
#include &lt;iostream&gt;
#include &lt;vector&gt;
#include &lt;queue&gt;
using namespace std;

// BFS Traversal Print
void BFS(int startNode, vector&lt;int&gt; adj[], int totalNodes) {
    vector&lt;bool&gt; visited(totalNodes, false); // Keep track to prevent infinite loops!
    queue&lt;int&gt; q;

    // Start
    visited[startNode] = true;
    q.push(startNode);

    while (!q.empty()) {
        int current = q.front();
        q.pop();
        cout &lt;&lt; current &lt;&lt; " ";

        // Check all neighbors
        for (int neighbor : adj[current]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                q.push(neighbor);
            }
        }
    }
}
                        </code></pre>
                    </div>

                    <div class="common-mistake-box">
                        <h4>❌ Beginner Mistake</h4>
                        <p class="important-note">Forgetting the <code>visited</code> array when traversing a graph.</p>
                        <h4>✅ Correct Approach</h4>
                        <p class="correct-note">Because Graphs can have cycles (A -> B -> C -> A), unlike Trees, you MUST track which nodes you have already visited. Failure to do so results in an Infinite Loop and a Stack/Memory Overflow crash.</p>
                    </div>
                `,
                practice: {
                    questions: [
                        { q: "What is the primary difference between a Tree and a general Graph?", a: "Graphs can contain cycles (loops), Trees cannot", options: ["Trees use Nodes, Graphs use Vertices", "Graphs can contain cycles (loops), Trees cannot", "Trees are faster", "Graphs can only store numbers"] },
                        { q: "Which Graph representation is the most memory efficient for a 'Sparse' graph (a graph with very few connecting edges compared to the number of nodes)?", a: "Adjacency List", options: ["Adjacency Matrix", "Adjacency List", "Edge List", "Pointer Array"] },
                        { q: "Which Graph Traversal algorithm is guaranteed to find the absolute shortest path between two nodes in an unweighted graph?", a: "Breadth-First Search (BFS)", options: ["Depth-First Search (DFS)", "Breadth-First Search (BFS)", "Inorder Traversal", "Binary Search"] },
                        { q: "What data structure is fundamentally required to successfully implement Depth-First Search (DFS) iteratively without recursion?", a: "A Stack", options: ["A Queue", "A Hash Table", "A Stack", "A Linked List"] },
                        { q: "Why is a `visited` array strictly necessary in Graph traversals but strictly optional in Tree traversals?", a: "Because Graphs can contain infinite cycles, which would cause an infinite loop", options: ["Because Tree nodes hold less memory", "Because Graphs can contain infinite cycles, which would cause an infinite loop", "It is just a stylistic convention", "To alphabetize the output"] }
                    ],
                    coding: [
                        {
                            q: "You have a Graph represented as an Adjacency Matrix: `int adj[4][4] = {{0,1,0,0}, {1,0,1,0}, {0,1,0,1}, {0,0,1,0}};`. Is there a direct connection between Node 1 and Node 3?",
                            a: "No. Look at `adj[1][3]`. The value is `0`."
                        },
                        {
                            q: "Consider a Social Network graph. To find 'Friends of Friends' (people exactly 2 hops away from you), which algorithm is more naturally suited: BFS or DFS?",
                            a: "BFS. It intrinsically explores level-by-level (1 hop away, then 2 hops away)."
                        }
                    ]
                }
            }
        ]
    },
    {
        id: "phase13",
        title: "PHASE 13 - Sorting & Searching",
        lessons: [
            {
                id: "l15",
                title: "Sorting & Searching Algorithms",
                content: `
                    <h2 class="lesson-title">Why Do We Sort?</h2>
                    <p class="en-text">Sorting is the process of arranging data into a meaningful order (e.g., ascending or descending). It is one of the most studied problems in Computer Science because <strong>efficient searching almost always requires sorted data</strong>. Think about it: how hard is it to find a word in a dictionary if the pages aren't alphabetized?</p>
                    <p class="ar-text">الفرز هو عملية ترتيب البيانات بترتيب ذي معنى (مثل تصاعدي أو تنازلي). إنها واحدة من أكثر المشاكل دراسة في علوم الكمبيوتر لأن <strong>البحث الفعال يتطلب دائمًا تقريبًا بيانات مرتبة</strong>. فكر في الأمر: ما مدى صعوبة العثور على كلمة في قاموس إذا لم تكن الصفحات مرتبة أبجديًا؟</p>
                    
                    <h3>The Inefficient Trio: O(N²)</h3>
                    <p class="en-text">These algorithms are easy to understand but terrible for large datasets because they use nested loops.</p>
                    <ul>
                        <li class="en-text"><strong>Bubble Sort:</strong> Repeatedly swaps adjacent elements if they are in the wrong order. Heaviest elements "bubble" to the top.</li>
                        <li class="en-text"><strong>Selection Sort:</strong> Scans the array to find the absolute smallest element, then aggressively swaps it into the first position. Repeats for the second smallest, etc.</li>
                        <li class="en-text"><strong>Insertion Sort:</strong> Builds the final sorted array one item at a time, exactly like sorting a hand of playing cards.</li>
                    </ul>

                    <h3>The Fast Champions: O(N log N)</h3>
                    <p class="en-text">These algorithms use <em>Recursion</em> and the <em>Divide &amp; Conquer</em> strategy to drastically reduce time.</p>
                    <ul>
                        <li class="en-text"><strong>Merge Sort:</strong> Splits the array in half recursively until sizes are 1, then merges them back in sorted order. Guaranteed O(N log N), stable, but requires O(N) extra memory.</li>
                        <li class="en-text"><strong>Quick Sort:</strong> Picks a "Pivot" element, partitions smaller numbers left and larger right, then recurses. Fastest in practice (in-place, great cache behavior), but worst-case O(N²) with bad pivots.</li>
                    </ul>

                    <div class="code-block">
                        <pre><code class="language-cpp">
// ─── MERGE SORT: O(N log N) time, O(N) extra space ───────────────────
void merge(int arr[], int left, int mid, int right) {
    int n1 = mid - left + 1, n2 = right - mid;
    int* L = new int[n1];  // Temporary left half
    int* R = new int[n2];  // Temporary right half

    for (int i = 0; i < n1; i++) L[i] = arr[left + i];
    for (int j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];

    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        // Pick the smaller of the two and place it in original array
        if (L[i] <= R[j]) arr[k++] = L[i++];
        else               arr[k++] = R[j++];
    }
    while (i < n1) arr[k++] = L[i++]; // Copy remaining
    while (j < n2) arr[k++] = R[j++];

    delete[] L; delete[] R; // Always free temp memory!
}

void mergeSort(int arr[], int left, int right) {
    if (left >= right) return; // Base case: 1 element is always sorted
    int mid = left + (right - left) / 2;
    mergeSort(arr, left, mid);       // Sort left half
    mergeSort(arr, mid + 1, right);  // Sort right half
    merge(arr, left, mid, right);    // Merge the two sorted halves
}

// ─── QUICK SORT: O(N log N) average, O(1) extra space ────────────────
int partition(int arr[], int low, int high) {
    int pivot = arr[high]; // Choose last element as pivot
    int i = low - 1;       // i marks the boundary of smaller elements

    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr[i], arr[j]); // Move smaller elements to the left
        }
    }
    swap(arr[i + 1], arr[high]); // Place pivot in its correct position
    return i + 1;                // Return pivot's final index
}

void quickSort(int arr[], int low, int high) {
    if (low >= high) return;                  // Base case
    int pi = partition(arr, low, high);       // Partition and get pivot index
    quickSort(arr, low, pi - 1);              // Sort elements left of pivot
    quickSort(arr, pi + 1, high);             // Sort elements right of pivot
}
                        </code></pre>
                    </div>

                    <table class="complexity-table">
                        <thead>
                            <tr><th>Algorithm</th><th>Best</th><th>Average</th><th>Worst</th><th>Space</th><th>Stable?</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Bubble Sort</td><td><span class="badge badge-blue">O(N)</span></td><td><span class="badge badge-red">O(N²)</span></td><td><span class="badge badge-red">O(N²)</span></td><td>O(1)</td><td>✅ Yes</td></tr>
                            <tr><td>Selection Sort</td><td><span class="badge badge-red">O(N²)</span></td><td><span class="badge badge-red">O(N²)</span></td><td><span class="badge badge-red">O(N²)</span></td><td>O(1)</td><td>❌ No</td></tr>
                            <tr><td>Insertion Sort</td><td><span class="badge badge-green">O(N)</span></td><td><span class="badge badge-red">O(N²)</span></td><td><span class="badge badge-red">O(N²)</span></td><td>O(1)</td><td>✅ Yes</td></tr>
                            <tr><td>Merge Sort</td><td><span class="badge badge-blue">O(N log N)</span></td><td><span class="badge badge-blue">O(N log N)</span></td><td><span class="badge badge-blue">O(N log N)</span></td><td>O(N)</td><td>✅ Yes</td></tr>
                            <tr><td>Quick Sort</td><td><span class="badge badge-green">O(N log N)</span></td><td><span class="badge badge-blue">O(N log N)</span></td><td><span class="badge badge-red">O(N²)</span></td><td>O(log N)</td><td>❌ No</td></tr>
                        </tbody>
                    </table>

                    <h2 class="lesson-title">Searching Algorithms</h2>
                    <p class="en-text">Once data is sorted, we unlock the power of Logarithmic Search.</p>

                    <ul>
                        <li class="en-text"><strong>Linear Search O(N):</strong> Brute force. Check every element index 0 to N. Works on completely unsorted data. <em>Worst case: checking 1 billion items takes 1 billion steps.</em></li>
                        <li class="en-text"><strong>Binary Search O(log N):</strong> The Ultimate optimization. The data <strong>MUST BE SORTED</strong>. Instead of checking one by one, we check the exact middle. If the target is smaller we throw away the right half! If larger, throw away the left half! <em>Worst case: checking 1 billion items takes only ~30 steps!</em></li>
                    </ul>

                    <div class="code-block">
                        <pre><code class="language-cpp">
// The Legendary Binary Search Algorithm (O(log N))
int binarySearch(int arr[], int size, int target) {
    int left = 0;
    int right = size - 1;
    
    while (left &lt;= right) {
        // Prevent integer overflow with this specific formula
        int mid = left + (right - left) / 2; 
        
        if (arr[mid] == target) 
            return mid; // Found it! Return the index.
            
        if (arr[mid] &lt; target) 
            left = mid + 1; // Target is larger, discard the left half
        else 
            right = mid - 1; // Target is smaller, discard the right half
    }
    
    return -1; // Target not found in the entire array
}
                        </code></pre>
                    </div>
                `,
                practice: {
                    questions: [
                        { q: "What is the absolute strict mathematical prerequisite for successfully executing a Binary Search on an array?", a: "The array must be completely sorted", options: ["The array must contain only positive integers", "The array must be completely sorted", "The array must be less than 1000 items long", "There is no prerequisite"] },
                        { q: "Which of the following sorting algorithms is known for utilizing a 'Divide & Conquer' strategy to achieve an average O(N log N) time complexity?", a: "Merge Sort", options: ["Bubble Sort", "Merge Sort", "Insertion Sort", "Selection Sort"] },
                        { q: "In the absolute worst-case scenario, how many comparisons might a Linear Search need to make to find an item in an array of size N?", a: "N comparisons", options: ["1 comparison", "log(N) comparisons", "N comparisons", "N² comparisons"] },
                        { q: "Why is Quick Sort often heavily preferred in practical software systems over Merge Sort, despite having a worse theoretical worst-case time?", a: "It does not require allocating massive amounts of extra O(N) memory", options: ["It is easier to type", "It works perfectly on unsorted data without sorting", "It does not require allocating massive amounts of extra O(N) memory", "It uses a Queue instead of a Stack"] },
                        { q: "If you want to sort a physical hand of playing cards by picking them up one by one and inserting them into their correct sorted position holding them, which algorithm are you physically performing?", a: "Insertion Sort", options: ["Merge Sort", "Insertion Sort", "Heap Sort", "Selection Sort"] }
                    ],
                    coding: [
                        {
                            q: "You are running a Binary Search for the number `7` on this sorted array: `[1, 3, 5, 7, 9, 11, 13]`. What is the value of the very first `mid` element checked?",
                            a: "`7`. Using `mid = (0 + 6) / 2 = 3`. The element at index 3 is `7`."
                        },
                        {
                            q: "True or False: A single 'pass' of Bubble Sort is mathematically guaranteed to put the largest unsorted element into its final correct sorted position.",
                            a: "True. The largest element will 'bubble' all the way to the right end."
                        }
                    ]
                }
            }
        ]
    },
    {
        id: "phase14",
        title: "PHASE 14 - Algorithm Patterns & Problem Solving",
        lessons: [
            {
                id: "l15a",
                title: "Common Problem-Solving Patterns",
                content: `
                    <h2 class="lesson-title">Mastering Algorithmic Patterns</h2>
                    <p class="en-text">Beyond individual data structures and algorithms, software engineering interviews and real-world problems require recognizing <strong>patterns</strong>. These recurring problem-solving templates appear across thousands of coding challenges. Learning to identify and apply them is what separates good engineers from great ones.</p>
                    <p class="ar-text">بعد هياكل البيانات والخوارزميات الفردية، تتطلب مقابلات هندسة البرمجيات والمشكلات الواقعية التعرف على <strong>الأنماط</strong>. تظهر قوالب حل المشكلات المتكررة هذه عبر آلاف التحديات البرمجية. تعلم تحديدها وتطبيقها هو ما يفصل المهندسين الجيدين عن العظماء.</p>

                    <h3>Pattern 1: Two Pointers</h3>
                    <p class="en-text">The <strong>Two Pointers</strong> technique uses two indices to traverse a data structure, often from opposite ends or at different speeds. It's incredibly efficient for sorted arrays and palindrome problems, typically reducing O(N²) brute force solutions to O(N).</p>
                    
                    <div class="code-block">
                        <pre><code class="language-cpp">
// Example: Find pair with target sum in SORTED array
// Brute force: O(N²) | Two Pointers: O(N)
bool hasPairSum(int arr[], int n, int target) {
    int left = 0;
    int right = n - 1;
    
    while (left < right) {
        int sum = arr[left] + arr[right];
        
        if (sum == target) return true;
        else if (sum < target) left++;   // Need larger sum
        else right--;                     // Need smaller sum
    }
    return false;
}

// Example: Check if string is palindrome
bool isPalindrome(const string& s) {
    int left = 0, right = s.length() - 1;
    while (left < right) {
        if (s[left] != s[right]) return false;
        left++;
        right--;
    }
    return true;
}
                        </code></pre>
                    </div>

                    <h3>Pattern 2: Sliding Window</h3>
                    <p class="en-text">The <strong>Sliding Window</strong> pattern is used for problems involving contiguous subarrays or substrings. Instead of recalculating from scratch for each window, we "slide" the window by removing the leftmost element and adding a new right element, achieving O(N) time for problems that seem like they need O(N²).</p>
                    
                    <div class="code-block">
                        <pre><code class="language-cpp">
// Example: Maximum sum of any contiguous subarray of size k
// Brute force: O(N×k) | Sliding Window: O(N)
int maxSubarraySum(int arr[], int n, int k) {
    int windowSum = 0;
    
    // Calculate sum of first window
    for (int i = 0; i < k; i++)
        windowSum += arr[i];
    
    int maxSum = windowSum;
    
    // Slide the window
    for (int i = k; i < n; i++) {
        windowSum += arr[i];        // Add new element (right side)
        windowSum -= arr[i - k];    // Remove old element (left side)
        maxSum = max(maxSum, windowSum);
    }
    
    return maxSum;
}

// Example: Longest substring without repeating characters
int longestUniqueSubsttr(const string& str) {
    int n = str.length();
    int maxLen = 0;
    bool visited[256] = {false};
    
    int left = 0;
    for (int right = 0; right < n; right++) {
        // If character seen, shrink window from left
        while (visited[str[right]]) {
            visited[str[left]] = false;
            left++;
        }
        
        visited[str[right]] = true;
        maxLen = max(maxLen, right - left + 1);
    }
    return maxLen;
}
                        </code></pre>
                    </div>

                    <h3>Pattern 3: Fast and Slow Pointers (Cycle Detection)</h3>
                    <p class="en-text">The <strong>Tortoise and Hare</strong> algorithm uses two pointers moving at different speeds. It's the elegant solution for detecting cycles in linked lists and finding middle elements without knowing the length.</p>
                    
                    <div class="code-block">
                        <pre><code class="language-cpp">
// Detect cycle in linked list (Floyd's Cycle-Finding Algorithm)
bool hasCycle(ListNode* head) {
    if (!head || !head->next) return false;
    
    ListNode* slow = head;  // Tortoise: moves 1 step
    ListNode* fast = head->next;  // Hare: moves 2 steps
    
    while (fast && fast->next) {
        if (slow == fast) return true;  // They met! Cycle exists
        slow = slow->next;
        fast = fast->next->next;
    }
    return false;  // Fast reached end: no cycle
}

// Find middle of linked list in ONE pass
ListNode* findMiddle(ListNode* head) {
    ListNode* slow = head;
    ListNode* fast = head;
    
    while (fast && fast->next) {
        slow = slow->next;        // Move 1 step
        fast = fast->next->next;  // Move 2 steps
    }
    // When fast reaches end, slow is at middle
    return slow;
}
                        </code></pre>
                    </div>

                    <h3>Pattern 4: Merge Intervals</h3>
                    <p class="en-text">The <strong>Merge Intervals</strong> pattern deals with overlapping ranges. The key insight is to sort by start time first, then iterate through, merging when current.start ≤ previous.end.</p>
                    
                    <div class="code-block">
                        <pre><code class="language-cpp">
// Merge overlapping intervals
// Input: [[1,3], [2,6], [8,10], [15,18]]
// Output: [[1,6], [8,10], [15,18]]

struct Interval {
    int start, end;
};

vector<Interval> merge(vector<Interval>& intervals) {
    if (intervals.empty()) return {};
    
    // Step 1: Sort by start time - CRITICAL!
    sort(intervals.begin(), intervals.end(), 
         [](const Interval& a, const Interval& b) {
             return a.start < b.start;
         });
    
    vector<Interval> merged;
    merged.push_back(intervals[0]);
    
    for (int i = 1; i < intervals.size(); i++) {
        Interval& last = merged.back();
        
        // Overlapping? Merge them
        if (intervals[i].start <= last.end) {
            last.end = max(last.end, intervals[i].end);
        } else {
            // No overlap, add as new interval
            merged.push_back(intervals[i]);
        }
    }
    return merged;
}
                        </code></pre>
                    </div>

                    <h3>Pattern 5: Topological Sort (Kahn's Algorithm)</h3>
                    <p class="en-text"><strong>Topological Sort</strong> orders nodes in a directed graph such that for every edge (u → v), u comes before v. It's essential for scheduling tasks with dependencies, course prerequisites, and build systems.</p>
                    
                    <div class="code-block">
                        <pre><code class="language-cpp">
#include &lt;queue&gt;
#include &lt;vector&gt;
using namespace std;

// Return a valid ordering of courses to finish all (or empty if impossible)
vector<int> topologicalSort(int numCourses, vector<vector<int>>& prerequisites) {
    vector<vector<int>> graph(numCourses);
    vector<int> inDegree(numCourses, 0);
    
    // Build graph and count in-degrees
    for (auto& pre : prerequisites) {
        graph[pre[1]].push_back(pre[0]);  // pre[1] must come before pre[0]
        inDegree[pre[0]]++;
    }
    
    // Start with nodes having no prerequisites
    queue<int> q;
    for (int i = 0; i < numCourses; i++)
        if (inDegree[i] == 0) q.push(i);
    
    vector<int> result;
    while (!q.empty()) {
        int course = q.front(); q.pop();
        result.push_back(course);
        
        // Remove this course as a prerequisite for others
        for (int next : graph[course]) {
            inDegree[next]--;
            if (inDegree[next] == 0) q.push(next);
        }
    }
    
    // If cycle exists, result size < numCourses
    return result.size() == numCourses ? result : vector<int>();
}
                        </code></pre>
                    </div>

                    <div class="why-matters-box">
                        <h4>Pattern Recognition in Interviews 🧠</h4>
                        <p>Top tech companies don't test memorization — they test pattern recognition. When you see:</p>
                        <ul>
                            <li>"Contiguous subarray" → Think Sliding Window</li>
                            <li>"Sorted array" + "find pair" → Think Two Pointers</li>
                            <li>"Cycle detection" → Think Fast & Slow Pointers</li>
                            <li>"Overlapping ranges" → Think Merge Intervals</li>
                            <li>"Task dependencies" → Think Topological Sort</li>
                        </ul>
                        <p>Explicitly stating the pattern you're using demonstrates senior-level thinking to interviewers!</p>
                    </div>
                `,
                practice: {
                    questions: [
                        { q: "What is the time complexity of finding a pair with target sum using Two Pointers on a sorted array?", a: "O(N)", options: ["O(N²)", "O(N log N)", "O(N)", "O(log N)"] },
                        { q: "Which pattern is best for finding the maximum sum of any contiguous subarray of size K?", a: "Sliding Window", options: ["Two Pointers", "Sliding Window", "Merge Intervals", "Binary Search"] },
                        { q: "What algorithm uses two pointers moving at different speeds (1 step vs 2 steps) to detect cycles?", a: "Floyd's Cycle-Finding Algorithm (Tortoise and Hare)", options: ["Dijkstra's Algorithm", "Floyd's Cycle-Finding Algorithm (Tortoise and Hare)", "Binary Search", "Merge Sort"] },
                        { q: "What is the first step in solving any Merge Intervals problem?", a: "Sort intervals by start time", options: ["Sort intervals by start time", "Find the longest interval", "Remove overlapping intervals", "Use a hash map"] },
                        { q: "Which pattern is used for scheduling tasks with prerequisites/dependencies?", a: "Topological Sort", options: ["Sliding Window", "Topological Sort", "Two Pointers", "Dynamic Programming"] }
                    ],
                    coding: [
                        {
                            q: "Given a sorted array [1, 2, 3, 4, 6, 8, 10] and target = 10, trace through the Two Pointers approach. What are the values of left and right pointers when the solution is found?",
                            a: "left points to 2 (value 3), right points to 6 (value 8). 3 + 8 = 11 > 10, so right moves left. Then left=2 (value 3), right=5 (value 6). 3 + 6 = 9 < 10, so left moves right. Then left=3 (value 4), right=5 (value 6). 4 + 6 = 10 = target! Found!"
                        },
                        {
                            q: "In a sliding window problem, if we move from window [i, i+k-1] to [i+1, i+k], how many new elements are added and how many are removed?",
                            a: "One element is added (at position i+k) and one element is removed (at position i). This is why sliding window achieves O(N) instead of O(N×k)."
                        }
                    ]
                }
            }
        ]
    },
    {
        id: "phase15",
        title: "PHASE 15 - Inside the C++ STL",
        lessons: [
            {
                id: "l16",
                title: "How STL Internally works",
                content: `
                    <h2 class="lesson-title">Standard Template Library (STL) Unveiled</h2>
                    <p class="en-text">Now that you've built the core data structures from scratch and understand their intricate memory mechanics, you are finally permitted by industry standards to use the C++ <strong>STL (Standard Template Library)</strong>! The STL provides highly optimized, generic, pre-built implementations of almost everything we've studied.</p>
                    <p class="ar-text">الآن بعد أن قمت ببناء هياكل البيانات الأساسية من الصفر وفهمت آليات ذاكرتها المعقدة، يُسمح لك أخيرًا وفقًا لمعايير الصناعة باستخدام <strong>STL (مكتبة القوالب القياسية)</strong> في لغة C++! توفر STL تطبيقات مُحسَّنة للغاية وعامة ومبنية مسبقًا تقريبًا لكل ما درسناه.</p>
                    
                    <div class="why-matters-box">
                        <h4>What's Under The Hood? 🛠️</h4>
                        <p>When you use an STL container, it's crucial to know what exact data structure it is secretly running so you know its Big-O performance:</p>
                        <ul>
                            <li class="en-text"><strong><code>std::vector</code></strong> : A beautiful Dynamic Array. Allocates contiguous memory on the heap, grows automatically by doubling its size, maintaining amortized O(1) push_back.</li>
                            <li class="en-text"><strong><code>std::list</code></strong> : A standard Doubly Linked List.</li>
                            <li class="en-text"><strong><code>std::stack</code> & <code>std::queue</code></strong> : These are called "Container Adapters". They don't manage memory themselves; instead, they wrap around a <code>deque</code> (Double Ended Queue) or <code>list</code> to restrict behavior to pure LIFO or FIFO.</li>
                            <li class="en-text"><strong><code>std::priority_queue</code></strong> : A highly optimized Max Heap (by default) that lives entirely inside an array representation (usually a vector).</li>
                            <li class="en-text"><strong><code>std::map</code> & <code>std::set</code></strong> : These are strictly ordered! They are implemented underneath as Self-Balancing Binary Search Trees (specifically, a Red-Black Tree). Because of this, insertion, deletion, and searching take a guaranteed worst-case O(log N) operations.</li>
                            <li class="en-text"><strong><code>std::unordered_map</code> & <code>std::unordered_set</code></strong> : These are strictly unordered! They are implemented underneath as classic Hash Tables. This gives them lightning-fast O(1) average time operations, but no sorting guarantees.</li>
                        </ul>
                    </div>

                    <div class="code-block">
                        <pre><code class="language-cpp">
#include &lt;vector&gt;
#include &lt;unordered_map&gt;
#include &lt;iostream&gt;
#include &lt;algorithm&gt; // For std::sort

using namespace std;

int main() {
    // 1. We no longer write manual Dynamic Arrays!
    vector&lt;int&gt; v = {30, 10, 20};
    v.push_back(40); // Amortized O(1)
    
    // The STL provides incredibly fast O(N log N) sorting!
    // IntroSort (QuickSort + HeapSort + InsertionSort hybrid)
    sort(v.begin(), v.end()); 

    // 2. We no longer write manual Hash Tables!
    unordered_map&lt;string, int&gt; hashT;
    
    // Inserting into a Hash Table in O(1) time
    hashT["Ahmed"] = 99; 
    
    // O(1) lookup
    cout &lt;&lt; "Ahmed's Score: " &lt;&lt; hashT["Ahmed"] &lt;&lt; endl;
    
    return 0;
}
                        </code></pre>
                    </div>
                `,
                practice: {
                    questions: [
                        { q: "What underlying algorithmic data structure heavily powers C++ `std::map` to ensure elements are strictly ordered?", a: "A Self-Balancing Binary Search Tree (Red-Black Tree)", options: ["A purely random Array", "A Self-Balancing Binary Search Tree (Red-Black Tree)", "An Adjacency Matrix", "A standard Hash Table"] },
                        { q: "If you want the absolute fastest pure key-value lookups in C++ and do NOT care at all about the order of keys, which container should you choose?", a: "std::unordered_map", options: ["std::map", "std::unordered_map", "std::vector", "std::queue"] },
                        { q: "What does `std::priority_queue` implement underneath by default in C++?", a: "A Max Heap", options: ["A Min Heap", "An unbalanced Binary Search Tree", "A Max Heap", "A pure Hash Function"] },
                        { q: "Which class acts as a 'Container Adapter' in C++, restricting access to only one specific end of its underlying storage mechanism?", a: "std::stack", options: ["std::vector", "std::list", "std::stack", "std::unordered_set"] },
                        { q: "Why is appending an element (push_back) to a `std::vector` considered 'Amortized O(1)' instead of purely strict O(1)?", a: "Because very occasionally the vector must run a massive O(N) reallocation to double its size", options: ["Because hardware gets slower over time", "Because it uses a Linked List", "Because very occasionally the vector must run a massive O(N) reallocation to double its size", "It is practically O(N) every time"] }
                    ],
                    coding: [
                        {
                            q: "You need a fast O(1) queue structure where you only ever add to the back and remove from the front. What header `#include <...>` and type `std::...<int> q;` do you use in modern C++?",
                            a: "`#include <queue>` and `std::queue<int> q;`"
                        },
                        {
                            q: "You want a highly optimized, dynamically resizing array that provides lightning-fast direct memory address index accesses (`arr[5]`). What STL class do you use?",
                            a: "`std::vector`"
                        }
                    ]
                }
            }
        ]
    },
    {
        id: "phase16",
        title: "FINAL - Preparation Module",
        lessons: [
            {
                id: "l17",
                title: "15 Progressive Projects",
                content: `
                    <h2 class="lesson-title">Final Challenge: Prove Your Mastery</h2>
                    <p class="en-text">Concepts are useless without practice. Test your engineering skills by building these 15 carefully curated mini-projects from scratch! <strong>Rule: NO STL allowed except for std::string!</strong> You must build the underlying structures yourself.</p>
                    <p class="ar-text">المفاهيم لا فائدة منها بدون ممارسة. اختبر مهاراتك الهندسية من خلال بناء هذه المشاريع المصغرة الـ 15 المنسقة بعناية من الصفر! <strong>القاعدة: لا يُسمح بـ STL باستثناء std::string!</strong> يجب عليك بناء الهياكل الأساسية بنفسك.</p>
                    
                    <h3>🟢 Beginner Focus: Core Structures</h3>
                    <ol style="margin-left: 20px; line-height: 1.8;">
                        <li class="en-text"><strong>Custom Vector:</strong> Build a generic, auto-resizing dynamic array class using templates and raw pointers.</li>
                        <li class="en-text"><strong>Text Editor Undo System:</strong> Use an array-based Stack to track string actions and pop them to "undo".</li>
                        <li class="en-text"><strong>Parenthesis Validator:</strong> Use a Stack to parse strings like "({[]})" and determine if brackets match perfectly in O(N) time.</li>
                        <li class="en-text"><strong>Customer Support Queue:</strong> Build a linear Queue using an array (with shifting) to process support tickets.</li>
                        <li class="en-text"><strong>Music Playlist Manager:</strong> Use a Doubly Linked List to play Next, Prev, and Loop music tracks efficiently.</li>
                    </ol>

                    <h3>🟡 Intermediate Focus: Complex Logic & Hash Maps</h3>
                    <ol start="6" style="margin-left: 20px; line-height: 1.8;">
                        <li class="en-text"><strong>Circular Ticket Queue:</strong> Upgrade Project 4 to a Circular Queue using modulo arithmetic so you never have to shift elements left.</li>
                        <li class="en-text"><strong>Browser History (Forward/Back):</strong> Use two separate Stacks to manage the exact behavior of Chrome's Forward and Back buttons.</li>
                        <li class="en-text"><strong>Contact Search Engine:</strong> A Hash Table mapping Names (Strings) to Phone Numbers (Integers) handling collisions gracefully via separate Chaining (Arrays of Linked Lists).</li>
                        <li class="en-text"><strong>LRU Cache Simulation:</strong> (Hard) Combine a Hash Map and a Doubly Linked List to create a Least Recently Used cache system that evicts old data in O(1) time.</li>
                        <li class="en-text"><strong>Sorting Visualizer App:</strong> Implement Quick Sort, Merge Sort, and Bubble Sort on arrays and mathematically count the exact number of swap operations each performs.</li>
                    </ol>

                    <h3>🔴 Advanced Focus: Trees & Graphs</h3>
                    <ol start="11" style="margin-left: 20px; line-height: 1.8;">
                        <li class="en-text"><strong>File System Tree:</strong> Create an N-ary tree mimicking a terminal folder structure where you can traverse down (<code>cd</code>) and create new folders (<code>mkdir</code>).</li>
                        <li class="en-text"><strong>Priority Job Scheduler:</strong> A Max Heap array implementation to instantly assign CPU resources to incoming high-priority tasks in O(log N) time.</li>
                        <li class="en-text"><strong>Auto-Complete Dictionary (Trie):</strong> Build a Prefix Tree (Trie) to store 10,000 words and instantly suggest endings based on user prefix typing.</li>
                        <li class="en-text"><strong>Graph Navigation System:</strong> Represent cities as a graph using an Adjacency List and use BFS to find the absolute shortest hop distance between two towns.</li>
                        <li class="en-text"><strong>Mini Search Engine Simulation:</strong> The ultimate test. Combine a Hash Table (for indexing text documents by words) and a Priority Queue (for ranking search results by keyword frequency).</li>
                    </ol>

                    <div class="common-mistake-box">
                        <h4>🏆 Think Like a Staff Engineer</h4>
                        <p class="en-text">When solving a systems design or interview problem, don't just write code blindly. Explicitly explain the Time and Space Complexity to your interviewer, and discuss your Trade-offs out loud. <em>"A Hash map takes O(1) time but uses more memory than an Array. Since memory isn't an issue here, I heavily prefer the Hash map."</em></p>
                    </div>
                `,
                practice: {
                    questions: [
                        { q: "If memory constraints are extremely tight but you need fast lookups, which approach requires more memory overhead?", a: "A Hash Table", options: ["A purely sorted Array with Binary Search", "A Hash Table", "A purely unsorted Array", "They use exactly the same memory"] },
                        { q: "Which Data Structure explicitly designed to be \"First-In, First-Out\" (FIFO) should you use to model people waiting in line at a bank?", a: "A Queue", options: ["A Stack", "A Priority Queue", "A Queue", "A Hash Table"] },
                        { q: "If you need a Data Structure to handle an \"Undo\" feature in a text editor (Last action performed is the first to be undone), what is the optimal choice?", a: "A Stack", options: ["A Stack", "A Queue", "A Linked List", "A Binary Tree"] },
                        { q: "What is the primary architectural advantage of a Doubly Linked List over a Singly Linked List?", a: "You can traverse backwards at any time without restarting O(1)", options: ["It uses significantly less memory", "You can traverse backwards at any time without restarting O(1)", "It guarantees O(1) searches for arbitrary values", "It prevents Memory Leaks automatically"] },
                        { q: "Are you ready for your next Software Engineering interview?", a: "Absolutely. I understand how things work under the hood now.", options: ["Yes", "Absolutely. I understand how things work under the hood now.", "I will keep practicing", "Definitely"] }
                    ]
                }
            }
        ]
    }
];
