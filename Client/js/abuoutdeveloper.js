const sectionThree = document.querySelector(".section3");
const work = document.querySelector(".work");
const btns = document.querySelector(".buttons");

const images = ["75.png", "76.png", "77.png", "78.png", "79.png", "80.png"];
const workImages = [
  {
    image: "airbnb.png",
    category: "react",
    name: "Airbnb Clone",
    link: "https://kasun-airbnb-clone.vercel.app/",
  },
  {
    image: "crud.png",
    category: "node",
    name: "CRUD Application",
    link: "https://kasun-employeeinfo.herokuapp.com/",
  },
  {
    image: "hulu.png",
    category: "react",
    name: "Hulu Clone",
    link: "https://kasun-hulu-clone.vercel.app/",
  },
  {
    image: "musicapp.png",
    category: "react",
    name: "Music Application",
    link: "https://kasun-music.netlify.app/",
  },
  {
    image: "urapp.png",
    category: "html",
    name: "urApp",
    link: "http://kasun-urapp.rf.gd/",
  },
  {
    image: "portfolio.png",
    category: "react",
    name: "Portfolio",
    link: "https://kasunhewage.netlify.app/",
  },
];
let setWorkImages = workImages;
const imagePath = "../images/";

// images of technologies
sectionThree.innerHTML = `
    ${images
      .map(
        (img) => `
    <div class="technologies">
        <img src="${imagePath}${img}">
    </div>
    `,
      )
      .join("")}
`;
// join("") to avoid the comma

// images of work
const workImageFunc = () => {
  work.innerHTML = `
        ${setWorkImages
          .map(
            (imgObj) => `
        <div class="workContainer">
            <div class="work-text">
                <p>${imgObj.name}</p>
                <a href="${imgObj.link}" target="_blank">
                    See
                </a>
            </div>
            <img src="${imagePath}${imgObj.image}" >
        </div>
        `,
          )
          .join("")}
`;
};

workImageFunc();

btns.addEventListener("click", (e) => {
  const clicked = e.target.closest(".theBtn").className.split(" ");

  if (!clicked) {
    return;
  }

  if (clicked[0] == "all") {
    setWorkImages = workImages;
    workImageFunc();
  } else {
    setWorkImages = workImages.filter(
      (imgObj) => imgObj.category == clicked[0],
    );
    workImageFunc();
  }
});
