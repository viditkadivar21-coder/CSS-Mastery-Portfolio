// ==========================
// 1. THEME TOGGLE + LOCAL STORAGE
// ==========================
const toggleBtn = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
  if (toggleBtn) toggleBtn.textContent = "Light Mode";
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    const isDark = document.body.classList.contains("dark-theme");
    toggleBtn.textContent = isDark ? "Light Mode" : "Dark Mode";

    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

// ==========================
// 2. ACTIVE NAV LINK
// ==========================
const links = document.querySelectorAll(".nav__link");

links.forEach(link => {
  link.addEventListener("click", function () {
    links.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// ==========================
// 3. SCROLL REVEAL ANIMATION
// ==========================
const cards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));

// ==========================
// 4. PROJECT SEARCH FILTER
// ==========================
const searchInput = document.getElementById("search");

if (searchInput) {
  searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();

    cards.forEach(card => {
      card.style.display = card.textContent.toLowerCase().includes(value)
        ? "block"
        : "none";
    });
  });
}

// ==========================
// 5. SMOOTH SCROLL FOR NAV LINKS (same-page)
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
