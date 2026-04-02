// Мобильное меню
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Плавный скролл
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    // Закрываем меню на мобильных
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// Появление тени у шапки при скролле
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    document.getElementById("header").classList.add("scrolled");
  } else {
    document.getElementById("header").classList.remove("scrolled");
  }
});
