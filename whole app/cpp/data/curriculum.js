/**
 * C++ Educational App - Curriculum Data
 * Contains all sections and 30 final projects
 */

const CURRICULUM = {
    sections: [
        { id: 'section1', title: 'Introduction to Programming & C++', titleAr: 'مقدمة في البرمجة ولغة C++', icon: 'rocket' },
        { id: 'section2', title: 'Variables and Data Types', titleAr: 'المتغيرات وأنواع البيانات', icon: 'box' },
        { id: 'section3', title: 'Operators and Expressions', titleAr: 'العوامل والتعبيرات', icon: 'plus' },
        { id: 'section4', title: 'Input and Output', titleAr: 'الإدخال والإخراج', icon: 'terminal' },
        { id: 'section5', title: 'Conditional Statements', titleAr: 'الجمل الشرطية', icon: 'git-branch' },
        { id: 'section6', title: 'Loops', titleAr: 'الحلقات', icon: 'refresh' },
        { id: 'section7', title: 'Functions', titleAr: 'الدوال', icon: 'settings' },
        { id: 'section8', title: 'Arrays', titleAr: 'المصفوفات', icon: 'grid' },
        { id: 'section9', title: 'Strings', titleAr: 'النصوص', icon: 'type' },
        { id: 'section10', title: 'Pointers Basics', titleAr: 'أساسيات المؤشرات', icon: 'arrow-right' },
        { id: 'section11', title: 'Structures', titleAr: 'الهياكل', icon: 'layers' },
        { id: 'section12', title: 'File Handling', titleAr: 'التعامل مع الملفات', icon: 'file' }
    ],

    projects: [
        { id: 1, title: 'Hello World Customizer', titleAr: 'مخصص مرحباً بالعالم', difficulty: 1, tags: ['basics', 'output'], description: 'Create a program that displays a personalized greeting message.', descriptionAr: 'أنشئ برنامجاً يعرض رسالة ترحيب شخصية.' },
        { id: 2, title: 'Simple Calculator', titleAr: 'آلة حاسبة بسيطة', difficulty: 1, tags: ['operators', 'input'], description: 'Build a calculator that performs basic arithmetic operations.', descriptionAr: 'ابنِ آلة حاسبة تقوم بالعمليات الحسابية الأساسية.' },
        { id: 3, title: 'Temperature Converter', titleAr: 'محول درجات الحرارة', difficulty: 1, tags: ['variables', 'math'], description: 'Convert between Celsius and Fahrenheit.', descriptionAr: 'تحويل بين سلسيوس وفهرنهايت.' },
        { id: 4, title: 'Age Calculator', titleAr: 'حاسب العمر', difficulty: 1, tags: ['input', 'math'], description: 'Calculate age from birth year.', descriptionAr: 'احسب العمر من سنة الميلاد.' },
        { id: 5, title: 'Even/Odd Checker', titleAr: 'فاحص زوجي/فردي', difficulty: 1, tags: ['conditions'], description: 'Check if a number is even or odd.', descriptionAr: 'تحقق إذا كان الرقم زوجياً أو فردياً.' },
        { id: 6, title: 'Grade Calculator', titleAr: 'حاسب الدرجات', difficulty: 2, tags: ['conditions', 'input'], description: 'Convert numeric scores to letter grades.', descriptionAr: 'حول الدرجات الرقمية إلى حروف.' },
        { id: 7, title: 'Leap Year Checker', titleAr: 'فاحص السنة الكبيسة', difficulty: 2, tags: ['conditions', 'logic'], description: 'Determine if a year is a leap year.', descriptionAr: 'حدد إذا كانت السنة كبيسة.' },
        { id: 8, title: 'Number Guessing Game', titleAr: 'لعبة تخمين الأرقام', difficulty: 2, tags: ['loops', 'conditions'], description: 'Create a game where player guesses a random number.', descriptionAr: 'أنشئ لعبة يخمن فيها اللاعب رقماً عشوائياً.' },
        { id: 9, title: 'Multiplication Table', titleAr: 'جدول الضرب', difficulty: 2, tags: ['loops'], description: 'Print multiplication table for any number.', descriptionAr: 'اطبع جدول الضرب لأي رقم.' },
        { id: 10, title: 'Factorial Calculator', titleAr: 'حاسب المضروب', difficulty: 2, tags: ['loops', 'math'], description: 'Calculate factorial of a number.', descriptionAr: 'احسب مضروب رقم.' },
        { id: 11, title: 'Prime Number Checker', titleAr: 'فاحص الأعداد الأولية', difficulty: 2, tags: ['loops', 'conditions'], description: 'Check if a number is prime.', descriptionAr: 'تحقق إذا كان الرقم أولياً.' },
        { id: 12, title: 'Fibonacci Sequence', titleAr: 'متتالية فيبوناتشي', difficulty: 2, tags: ['loops', 'arrays'], description: 'Generate Fibonacci numbers.', descriptionAr: 'ولّد أرقام فيبوناتشي.' },
        { id: 13, title: 'Simple ATM', titleAr: 'صراف آلي بسيط', difficulty: 3, tags: ['loops', 'conditions', 'variables'], description: 'Simulate ATM deposit and withdraw operations.', descriptionAr: 'حاكِ عمليات الإيداع والسحب.' },
        { id: 14, title: 'Rock Paper Scissors', titleAr: 'حجر ورقة مقص', difficulty: 3, tags: ['random', 'conditions'], description: 'Play rock-paper-scissors against computer.', descriptionAr: 'العب حجر-ورقة-مقص ضد الكمبيوتر.' },
        { id: 15, title: 'Password Generator', titleAr: 'مولد كلمات المرور', difficulty: 3, tags: ['strings', 'random'], description: 'Generate random secure passwords.', descriptionAr: 'ولّد كلمات مرور عشوائية آمنة.' },
        { id: 16, title: 'Array Statistics', titleAr: 'إحصائيات المصفوفة', difficulty: 3, tags: ['arrays', 'loops'], description: 'Calculate min, max, average of array.', descriptionAr: 'احسب الحد الأدنى والأقصى والمتوسط.' },
        { id: 17, title: 'Bubble Sort', titleAr: 'ترتيب الفقاعات', difficulty: 3, tags: ['arrays', 'algorithms'], description: 'Implement bubble sort algorithm.', descriptionAr: 'نفذ خوارزمية ترتيب الفقاعات.' },
        { id: 18, title: 'Linear Search', titleAr: 'البحث الخطي', difficulty: 3, tags: ['arrays', 'search'], description: 'Search for element in array.', descriptionAr: 'ابحث عن عنصر في المصفوفة.' },
        { id: 19, title: 'Palindrome Checker', titleAr: 'فاحص التناظر', difficulty: 3, tags: ['strings'], description: 'Check if string is palindrome.', descriptionAr: 'تحقق إذا كان النص متناظراً.' },
        { id: 20, title: 'Word Counter', titleAr: 'عدّاد الكلمات', difficulty: 3, tags: ['strings', 'loops'], description: 'Count words in a sentence.', descriptionAr: 'عد الكلمات في جملة.' },
        { id: 21, title: 'Student Records', titleAr: 'سجلات الطلاب', difficulty: 4, tags: ['structures', 'arrays'], description: 'Manage student data with structures.', descriptionAr: 'أدِر بيانات الطلاب بالهياكل.' },
        { id: 22, title: 'Binary Search', titleAr: 'البحث الثنائي', difficulty: 4, tags: ['arrays', 'algorithms'], description: 'Implement binary search algorithm.', descriptionAr: 'نفذ خوارزمية البحث الثنائي.' },
        { id: 23, title: 'Matrix Operations', titleAr: 'عمليات المصفوفات', difficulty: 4, tags: ['2d-arrays', 'math'], description: 'Add and multiply matrices.', descriptionAr: 'اجمع واضرب المصفوفات.' },
        { id: 24, title: 'Tic Tac Toe', titleAr: 'إكس أو', difficulty: 4, tags: ['2d-arrays', 'functions'], description: 'Build tic-tac-toe game.', descriptionAr: 'ابنِ لعبة إكس أو.' },
        { id: 25, title: 'File Logger', titleAr: 'مسجل الملفات', difficulty: 4, tags: ['files', 'input'], description: 'Log messages to a file.', descriptionAr: 'سجل الرسائل في ملف.' },
        { id: 26, title: 'Contact Book', titleAr: 'دفتر جهات الاتصال', difficulty: 4, tags: ['files', 'structures'], description: 'Store and retrieve contacts from file.', descriptionAr: 'خزّن واسترجع جهات الاتصال من ملف.' },
        { id: 27, title: 'Quiz Application', titleAr: 'تطبيق اختبار', difficulty: 5, tags: ['functions', 'arrays', 'files'], description: 'Create an interactive quiz app.', descriptionAr: 'أنشئ تطبيق اختبار تفاعلي.' },
        { id: 28, title: 'Bank Management', titleAr: 'إدارة البنك', difficulty: 5, tags: ['structures', 'files', 'functions'], description: 'Complete bank account management.', descriptionAr: 'إدارة حسابات بنكية كاملة.' },
        { id: 29, title: 'Library System', titleAr: 'نظام المكتبة', difficulty: 5, tags: ['structures', 'files', 'pointers'], description: 'Manage library books and members.', descriptionAr: 'أدِر كتب المكتبة والأعضاء.' },
        { id: 30, title: 'Mini Text Editor', titleAr: 'محرر نصوص مصغر', difficulty: 5, tags: ['strings', 'files', 'functions'], description: 'Build a basic text editor.', descriptionAr: 'ابنِ محرر نصوص أساسي.' }
    ]
};

// SVG Icons Map
const ICONS = {
    rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
    box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>',
    terminal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>',
    'git-branch': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>',
    refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
    settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
    type: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>',
    'arrow-right': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
    file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    puzzle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.452-.802-.926V13.5c0-.552-.448-1-1-1s-1 .448-1 1v1.266c0 .474.332.856.802.926.181.027.345.036.49-.007.242-.071.393.09.393.334v3.481c0 .552-.448 1-1 1h-3.5c-.552 0-1-.448-1-1s.448-1 1-1h1.266c.474 0 .856-.332.926-.802.027-.181.036-.345-.007-.49-.071-.242-.09-.393-.334-.393H11.5c-.617 0-1.234-.235-1.704-.706l-1.568-1.568c-.23-.23-.556-.338-.878-.289-.799.121-1.438.76-1.559 1.559-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704v.5c0 .552-.448 1-1 1h-3c-.552 0-1-.448-1-1v-3.5c0-.552.448-1 1-1s1 .448 1 1v1.266c0 .474.332.856.802.926a.98.98 0 0 0 .837-.276l1.611-1.611c.47-.47.706-1.087.706-1.704s-.235-1.233-.706-1.704l-1.568-1.568a.98.98 0 0 1-.289-.878c.121-.799.76-1.438 1.559-1.559.322-.049.648.059.878.289l1.568 1.568c.47.47 1.087.706 1.704.706h.5c.552 0 1-.448 1-1v-3c0-.552.448-1 1-1h3.5c.552 0 1 .448 1 1s-.448 1-1 1h-1.266c-.474 0-.856.332-.926.802a.98.98 0 0 0 .276.837l1.611 1.611c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.568 1.568a.98.98 0 0 1-.878.289c-.799-.121-1.438-.76-1.559-1.559z"/></svg>',
    clipboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>',
    lightbulb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>',
    target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>'
};

/**
 * Get SVG icon by name
 */
function getIcon(name) {
    return ICONS[name] || ICONS.code;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CURRICULUM, ICONS, getIcon };
}
