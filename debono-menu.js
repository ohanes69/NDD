const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const menuClose = document.getElementById("menu-close");

// Ouvrir le menu
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.remove("-translate-x-full");
});

// Fermer le menu
menuClose.addEventListener("click", () => {
  mobileMenu.classList.add("-translate-x-full");
});

