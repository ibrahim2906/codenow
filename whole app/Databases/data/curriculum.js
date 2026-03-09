/**
 * Database Educational App - Curriculum Data
 * Contains all lesson definitions and final projects
 */

const CURRICULUM = {
    sections: [
        // Phase 1 — Introduction to Databases
        { id: 'section1', title: 'What is a Database', titleAr: 'ما هي قاعدة البيانات', icon: 'database', phase: 1 },
        { id: 'section2', title: 'Types of Databases', titleAr: 'أنواع قواعد البيانات', icon: 'layers', phase: 1 },
        { id: 'section3', title: 'DBMS vs Database', titleAr: 'نظام إدارة قواعد البيانات مقابل قاعدة البيانات', icon: 'settings', phase: 1 },
        { id: 'section4', title: 'Client-Server vs Embedded DB', titleAr: 'خادم-عميل مقابل قواعد بيانات مدمجة', icon: 'server', phase: 1 },
        { id: 'section5', title: 'Why Databases over Flat Files', titleAr: 'لماذا قواعد البيانات بدل الملفات المسطحة', icon: 'file-text', phase: 1 },

        // Phase 2 — Relational Database Concepts
        { id: 'section6', title: 'Tables, Rows, and Columns', titleAr: 'الجداول والصفوف والأعمدة', icon: 'grid', phase: 2 },
        { id: 'section7', title: 'Primary Keys & Foreign Keys', titleAr: 'المفاتيح الأساسية والخارجية', icon: 'key', phase: 2 },
        { id: 'section8', title: 'Relationships (1:1, 1:N, M:N)', titleAr: 'العلاقات بين الجداول', icon: 'link', phase: 2 },
        { id: 'section9', title: 'Normalization (1NF, 2NF, 3NF)', titleAr: 'التطبيع', icon: 'filter', phase: 2 },
        { id: 'section10', title: 'ER Diagrams', titleAr: 'مخططات الكيان-العلاقة', icon: 'share', phase: 2 },

        // Phase 3 — SQL Basics
        { id: 'section11', title: 'SELECT & INSERT', titleAr: 'الاستعلام والإدراج', icon: 'search', phase: 3 },
        { id: 'section12', title: 'UPDATE & DELETE', titleAr: 'التحديث والحذف', icon: 'edit', phase: 3 },
        { id: 'section13', title: 'WHERE, AND, OR Filtering', titleAr: 'التصفية بـ WHERE', icon: 'filter', phase: 3 },
        { id: 'section14', title: 'ORDER BY & Aggregation', titleAr: 'الترتيب والتجميع', icon: 'bar-chart', phase: 3 },
        { id: 'section15', title: 'Joining Tables', titleAr: 'ربط الجداول', icon: 'link', phase: 3 },

        // Phase 4 — Advanced SQL
        { id: 'section16', title: 'GROUP BY & HAVING', titleAr: 'التجميع والتصفية المتقدمة', icon: 'layers', phase: 4 },
        { id: 'section17', title: 'Subqueries & Nested Queries', titleAr: 'الاستعلامات الفرعية', icon: 'code', phase: 4 },
        { id: 'section18', title: 'Views & Indexes', titleAr: 'العروض والفهارس', icon: 'eye', phase: 4 },
        { id: 'section19', title: 'Transactions (BEGIN, COMMIT, ROLLBACK)', titleAr: 'المعاملات', icon: 'refresh', phase: 4 },

        // Phase 5 — Database Design & ER Modeling
        { id: 'section20', title: 'Entity-Relationship Modeling', titleAr: 'نمذجة الكيان-العلاقة', icon: 'share', phase: 5 },
        { id: 'section21', title: 'Converting ERD to Tables', titleAr: 'تحويل ERD إلى جداول', icon: 'grid', phase: 5 },
        { id: 'section22', title: 'Constraints & Integrity', titleAr: 'القيود والسلامة', icon: 'shield', phase: 5 },

        // Phase 6 — Data Structures for DB
        { id: 'section23', title: 'Arrays & Linked Lists for Tables', titleAr: 'المصفوفات والقوائم المترابطة للجداول', icon: 'list', phase: 6 },
        { id: 'section24', title: 'Hash Maps for Indexes', titleAr: 'خرائط التجزئة للفهارس', icon: 'hash', phase: 6 },
        { id: 'section25', title: 'Trees for Indexing (BST)', titleAr: 'الأشجار للفهرسة', icon: 'git-branch', phase: 6 },

        // Phase 7 — File Handling & Persistence
        { id: 'section26', title: 'File-Based CRUD in C++', titleAr: 'عمليات CRUD على الملفات بـ C++', icon: 'file', phase: 7 },
        { id: 'section27', title: 'Binary Files & Serialization', titleAr: 'الملفات الثنائية والتسلسل', icon: 'hard-drive', phase: 7 },

        // Phase 8 — Mini Database Engine
        { id: 'section28', title: 'Building a Mini DB Engine', titleAr: 'بناء محرك قاعدة بيانات مصغر', icon: 'cpu', phase: 8 },
        { id: 'section29', title: 'Simple Query Parser', titleAr: 'محلل استعلامات بسيط', icon: 'terminal', phase: 8 },

        // Phase 9 — NoSQL Overview
        { id: 'section30', title: 'NoSQL Concepts & Types', titleAr: 'مفاهيم وأنواع NoSQL', icon: 'box', phase: 9 },

        // Phase 10 — Indexing & Optimization
        { id: 'section31', title: 'B-Tree & B+Tree Basics', titleAr: 'أساسيات شجرة B وB+', icon: 'git-branch', phase: 10 },
        { id: 'section32', title: 'Query Optimization', titleAr: 'تحسين الاستعلامات', icon: 'zap', phase: 10 },
    ],

    phases: [
        { id: 1, title: 'Introduction to Databases', titleAr: 'مقدمة في قواعد البيانات' },
        { id: 2, title: 'Relational Database Concepts', titleAr: 'مفاهيم قواعد البيانات العلائقية' },
        { id: 3, title: 'SQL Basics', titleAr: 'أساسيات SQL' },
        { id: 4, title: 'Advanced SQL', titleAr: 'SQL المتقدم' },
        { id: 5, title: 'Database Design & ER Modeling', titleAr: 'تصميم قواعد البيانات' },
        { id: 6, title: 'Data Structures for DB', titleAr: 'هياكل البيانات لقواعد البيانات' },
        { id: 7, title: 'File Handling & Persistence', titleAr: 'التعامل مع الملفات' },
        { id: 8, title: 'Mini Database Engine', titleAr: 'محرك قاعدة بيانات مصغر' },
        { id: 9, title: 'NoSQL Overview', titleAr: 'نظرة عامة على NoSQL' },
        { id: 10, title: 'Indexing & Optimization', titleAr: 'الفهرسة والتحسين' },
    ],

    projects: [
        { id: 1, title: 'Personal Address Book', titleAr: 'دفتر العناوين الشخصي', difficulty: 1, tags: ['CRUD', 'structs', 'files'], description: 'Build a C++ address book with file persistence.', descriptionAr: 'أنشئ دفتر عناوين بلغة C++ مع تخزين على الملفات.' },
        { id: 2, title: 'Student Management System', titleAr: 'نظام إدارة الطلاب', difficulty: 2, tags: ['tables', 'CRUD', 'search'], description: 'Manage student records with search and sort.', descriptionAr: 'إدارة سجلات الطلاب مع البحث والترتيب.' },
        { id: 3, title: 'Library Database', titleAr: 'قاعدة بيانات المكتبة', difficulty: 2, tags: ['relationships', 'joins', 'files'], description: 'Library system with books, members, and borrowing.', descriptionAr: 'نظام مكتبة مع كتب وأعضاء واستعارة.' },
        { id: 4, title: 'Inventory System', titleAr: 'نظام المخزون', difficulty: 3, tags: ['CRUD', 'aggregation', 'reports'], description: 'Track inventory with reports and alerts.', descriptionAr: 'تتبع المخزون مع التقارير والتنبيهات.' },
        { id: 5, title: 'Mini Banking System', titleAr: 'نظام بنكي مصغر', difficulty: 3, tags: ['transactions', 'CRUD', 'files'], description: 'Bank accounts with transactions and balance.', descriptionAr: 'حسابات بنكية مع معاملات ورصيد.' },
        { id: 6, title: 'Todo List with Persistence', titleAr: 'قائمة مهام مع حفظ', difficulty: 2, tags: ['CRUD', 'files', 'filtering'], description: 'Todo app that saves tasks to files.', descriptionAr: 'تطبيق مهام يحفظ المهام على الملفات.' },
        { id: 7, title: 'Simple E-Commerce Catalog', titleAr: 'كتالوج تجارة إلكترونية', difficulty: 3, tags: ['tables', 'search', 'relationships'], description: 'Product catalog with categories and search.', descriptionAr: 'كتالوج منتجات مع فئات وبحث.' },
        { id: 8, title: 'Social Network Simulation', titleAr: 'محاكاة شبكة اجتماعية', difficulty: 4, tags: ['graphs', 'relationships', 'CRUD'], description: 'Simulate users, friendships, and posts.', descriptionAr: 'محاكاة المستخدمين والصداقات والمنشورات.' },
        { id: 9, title: 'Log Analytics Tool', titleAr: 'أداة تحليل السجلات', difficulty: 4, tags: ['aggregation', 'files', 'parsing'], description: 'Parse and analyze log files with queries.', descriptionAr: 'تحليل ملفات السجلات بالاستعلامات.' },
        { id: 10, title: 'Mini Relational DB Engine', titleAr: 'محرك قاعدة بيانات علائقية مصغر', difficulty: 5, tags: ['engine', 'parser', 'indexes', 'B-tree'], description: 'Full mini database with query parser and indexes.', descriptionAr: 'قاعدة بيانات مصغرة كاملة مع محلل استعلامات وفهارس.' },
    ]
};

// SVG Icons Map
const ICONS = {
    database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
    layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
    settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    server: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>',
    'file-text': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
    key: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
    filter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
    share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
    'bar-chart': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
    list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
    hash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>',
    'git-branch': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>',
    file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>',
    'hard-drive': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="12" x2="2" y2="12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" y1="16" x2="6.01" y2="16"/><line x1="10" y1="16" x2="10.01" y2="16"/></svg>',
    cpu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>',
    terminal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>',
    box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
    zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
    rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>',
    target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    lightbulb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>',
    alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    clipboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>',
};

function getIcon(name) {
    return ICONS[name] || ICONS.database;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CURRICULUM, ICONS, getIcon };
}
