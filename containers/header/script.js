// Header con efecto de scroll
window.addEventListener("scroll", () => {
  const header = document.getElementById("main-header");
  if (window.scrollY > 80) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});

// Menú hamburguesa
const toggleBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

// Cerrar menú móvil al hacer clic en un enlace
document.querySelectorAll("#mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

console.log("Header responsive con redes y menú móvil activo.");
