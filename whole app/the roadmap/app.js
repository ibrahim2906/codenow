const STORAGE_KEY = "roadmap-progress-v1";
const THEME_KEY = "roadmap-theme";

const PHASE_KEYS = {
  "phase-1": [
    "p1d1","p1d2","p1d3","p1d4","p1d5","p1d6","p1d7",
    "p1d8","p1d9","p1d10","p1d11","p1d12","p1d13","p1d14",
    "p1d15","p1d16","p1d17","p1d18","p1d19","p1d20","p1d21"
  ],
  "phase-2": [
    "p2d1","p2d2","p2d3","p2d4","p2d5","p2d6","p2d7",
    "p2d8","p2d9","p2d10","p2d11","p2d12","p2d13","p2d14",
    "p2d15","p2d16","p2d17","p2d18","p2d19","p2d20","p2d21"
  ],
  "phase-3": [
    "p3d1","p3d2","p3d3","p3d4","p3d5","p3d6","p3d7",
    "p3d8","p3d9","p3d10","p3d11","p3d12","p3d13","p3d14",
    "p3d15","p3d16","p3d17","p3d18","p3d19","p3d20","p3d21"
  ]
};

const ALL_KEYS = [
  ...PHASE_KEYS["phase-1"],
  ...PHASE_KEYS["phase-2"],
  ...PHASE_KEYS["phase-3"]
];

const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const resetBtn = document.getElementById("resetProgress");
const saveToast = document.getElementById("saveToast");
const overallCount = document.getElementById("overallCount");
const overallBar = document.getElementById("overallBar");
const overallPercent = document.getElementById("overallPercent");

const savedTheme = localStorage.getItem(THEME_KEY);
if (savedTheme) {
  body.setAttribute("data-theme", savedTheme);
}

function updateThemeLabel() {
  if (!themeToggle) return;
  const isDark = body.getAttribute("data-theme") === "dark";
  themeToggle.textContent = isDark ? "الوضع الفاتح" : "الوضع الداكن";
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = body.getAttribute("data-theme") === "dark" ? "light" : "dark";
    body.setAttribute("data-theme", nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
    updateThemeLabel();
  });
}

const checkboxes = Array.from(document.querySelectorAll("input[type='checkbox'][data-key]"));
const savedState = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
let toastTimer;

function showToast(message) {
  if (!saveToast) return;
  if (message) saveToast.textContent = message;
  clearTimeout(toastTimer);
  saveToast.classList.add("show");
  toastTimer = setTimeout(() => {
    saveToast.classList.remove("show");
  }, 1400);
}

function setDoneState(box) {
  const wrapper = box.closest(".day-card") || box.closest("li");
  if (!wrapper) return;
  wrapper.classList.toggle("is-done", box.checked);
}

checkboxes.forEach((box) => {
  box.checked = !!savedState[box.dataset.key];
  setDoneState(box);
  box.addEventListener("change", () => {
    savedState[box.dataset.key] = box.checked;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedState));
    setDoneState(box);
    updateProgress();
    showToast("تم حفظ التقدم");
  });
});

if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    if (!confirm("هل تريد تصفير كل التقدم؟")) return;
    ALL_KEYS.forEach((key) => {
      savedState[key] = false;
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedState));
    checkboxes.forEach((box) => {
      box.checked = false;
      setDoneState(box);
    });
    updateProgress();
    showToast("تم تصفير التقدم");
  });
}

function updatePhaseProgress(element) {
  const phase = element.dataset.phase;
  const keys = PHASE_KEYS[phase];
  if (!keys) return;
  const checked = keys.filter((key) => savedState[key]).length;
  const total = keys.length;
  const pct = total ? Math.round((checked / total) * 100) : 0;
  const bar = element.querySelector(".progress span");
  const label = element.querySelector(".progress-label");
  if (bar) bar.style.width = `${pct}%`;
  if (label) label.textContent = `${checked}/${total}`;
}

function updateProgress() {
  const total = ALL_KEYS.length;
  const checked = ALL_KEYS.filter((key) => savedState[key]).length;
  if (overallCount) overallCount.textContent = `${checked}/${total}`;
  const pct = total ? Math.round((checked / total) * 100) : 0;
  if (overallPercent) overallPercent.textContent = `${pct}%`;
  if (overallBar) overallBar.style.width = `${pct}%`;

  document.querySelectorAll("[data-phase]").forEach((phase) => {
    updatePhaseProgress(phase);
  });
}

updateThemeLabel();
updateProgress();

const reveals = document.querySelectorAll(".reveal");
if (reveals.length) {
  reveals.forEach((section) => {
    const items = section.querySelectorAll(".hero-card, .card, .day-card, .stat, .notice");
    items.forEach((item, index) => {
      item.style.setProperty("--stagger", `${index * 60}ms`);
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  reveals.forEach((section) => observer.observe(section));
}
