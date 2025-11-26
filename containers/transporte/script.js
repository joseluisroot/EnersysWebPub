var swiper = new Swiper(".camiones-swiper", {
  loop: true,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 40,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 3 }
  },

  on: {
    slideChange: function () {
      document.querySelectorAll(".swiper-slide").forEach(slide => {
        slide.querySelector(".truck-wrapper")?.classList.remove("highlight");
        slide.querySelector(".truck-title")?.classList.remove("highlight-title");
        slide.querySelector(".truck-desc")?.classList.remove("highlight-desc");
      });

      let centerSlide = swiper.slides[swiper.activeIndex];
      centerSlide.querySelector(".truck-wrapper")?.classList.add("highlight");
      centerSlide.querySelector(".truck-title")?.classList.add("highlight-title");
      centerSlide.querySelector(".truck-desc")?.classList.add("highlight-desc");
    }
  }
});
