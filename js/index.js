// navigation
const navigation = document.querySelector(".navigation");

document.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    navigation.classList.add("navOnScroll", "container");
  } else if (window.scrollY < 500) {
    navigation.classList.remove("navOnScroll", "container");
  }
});

// sliders
document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".courses", {
    slidesPerView: 3,
    direction: "horizontal",
    loop: true,
    spaceBetween: 10,
    autoplay: {
      delay: 2000,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      760: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  new Swiper(".workSwiper", {
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 10,
    autoplay: {
      delay: 3000,
    },
    loop: true,
  });
});
