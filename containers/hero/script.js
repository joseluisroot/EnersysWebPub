// Inicializar Swiper para el slider principal
const heroSwiper = new Swiper(".hero-swiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "fade",
  speed: 1000,
});

console.log("Hero slider inicializado correctamente.");
