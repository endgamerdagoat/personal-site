// Intersection Observer for section animations
const animatedElements = document.querySelectorAll("[data-animate]");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.1 },
);

animatedElements.forEach((el) => observer.observe(el));

// Theme toggle
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Subtle navbar shadow on scroll
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        navbar.style.boxShadow = "0 4px 30px rgba(0,0,0,0.3)";
    } else {
        navbar.style.boxShadow = "none";
    }
});
