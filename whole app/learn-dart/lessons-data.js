// lessons-data.js - Aggregates all phase content
const COURSE_DATA = [];

// Helper to push phases into COURSE_DATA
function loadCourseData() {
    // Merge all PHASES variables defined in separate files
    const bundles = [
        typeof PHASES_1_4 !== 'undefined' ? PHASES_1_4 : [],
        typeof PHASES_2B_6 !== 'undefined' ? PHASES_2B_6 : [],
        typeof PHASES_3 !== 'undefined' ? PHASES_3 : [],
        typeof PHASES_4 !== 'undefined' ? PHASES_4 : [],
        typeof PHASES_5 !== 'undefined' ? PHASES_5 : [],
        typeof PHASES_6 !== 'undefined' ? PHASES_6 : [],
        typeof PHASES_7 !== 'undefined' ? PHASES_7 : [],
        typeof PHASES_8 !== 'undefined' ? PHASES_8 : [],
        typeof PHASES_9 !== 'undefined' ? PHASES_9 : [],
        typeof PHASES_9B !== 'undefined' ? PHASES_9B : [],
        typeof PHASES_10 !== 'undefined' ? PHASES_10 : [],
        typeof PHASES_11 !== 'undefined' ? PHASES_11 : [],
        typeof PHASES_11B !== 'undefined' ? PHASES_11B : [],
        typeof PHASES_12 !== 'undefined' ? PHASES_12 : [],
        typeof PHASES_13 !== 'undefined' ? PHASES_13 : [],
        typeof PHASES_14 !== 'undefined' ? PHASES_14 : [],
        typeof PROJECTS_PHASE !== 'undefined' ? PROJECTS_PHASE : []
    ];

    bundles.forEach(bundle => {
        bundle.forEach(phase => {
            const existingPhase = COURSE_DATA.find(p => p.id === phase.id);
            if (existingPhase) {
                // Append lessons if it's a continuation
                existingPhase.lessons = [...existingPhase.lessons, ...phase.lessons];
            } else {
                COURSE_DATA.push(phase);
            }
        });
    });
}

loadCourseData();
console.log("Course data loaded:", COURSE_DATA.length, "phases");
