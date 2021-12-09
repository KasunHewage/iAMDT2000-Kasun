// navigation
const navigation = document.querySelector(".navigation");
const navbtn = document.querySelector(".navbtn");
const first = document.querySelector(".first");
const middle = document.querySelector(".middle");
const last = document.querySelector(".last");
const collapse = document.querySelector(".navbar-collapse");

document.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    navigation.classList.add("navOnScroll", "container");
  } else if (window.scrollY < 500) {
    navigation.classList.remove("navOnScroll", "container");
  }
});

// burger icon
navbtn.addEventListener("click", (e) => {
  first.classList.toggle("first-animate");
  middle.classList.toggle("middle-animate");
  last.classList.toggle("last-animate");
  navigation.classList.toggle("navigationbg")

  if (!collapse.classList.contains("collapse")) {
    collapse.classList.add("collapse");
  } else {
    collapse.classList.remove("collapse");
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
      delay: 1500,
    },
    loop: true,
  });
});
