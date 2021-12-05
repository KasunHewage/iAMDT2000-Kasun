const requiredFields = document.querySelectorAll(".select-field");
const isEmplyedSection = document.querySelector(".isEmplyedSection");
const btn = document.querySelector(".send-btn");
const isSubscribedSection = document.querySelector(".isSubscribed");
const notification = document.querySelector(".notification");
const notificationContainer = document.querySelector(".notification-container");
const closebtn = document.querySelector(".close-btn");

const emailValidate =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const contactDB = [];

let isEmployed;
let userName;

// radio buttom
isEmplyedSection.addEventListener("click", (e) => {
  isEmployed = e.target.closest(".form-check-input");
  if (!isEmployed) {
    return;
  }
});

// checkbox
isSubscribedSection.addEventListener("click", (e) => {
  if (isSubscribedSection.value === "false") {
    isSubscribedSection.value = "true";
  } else {
    isSubscribedSection.value = "false";
  }
});

btn.addEventListener("click", (e) => {
  e.preventDefault();

  // check input fields
  Array.from(requiredFields).map((el) => {
    if (el.value == "") {
      el.classList.add("red-border");
      throw "Empty fields";
    }
  });

  // check select field
  if (requiredFields[3].value == "--- Select Your District ---*") {
    requiredFields[3].classList.add("red-border");
    throw "No district provided";
  }

  // validate email
  if (!requiredFields[1].value.match(emailValidate)) {
    requiredFields[1].classList.add("red-border");
    throw "Invalid email";
  }

  // validate mobile number
  if (
    requiredFields[2].value.length > 10 ||
    requiredFields[2].value.length < 10
  ) {
    requiredFields[2].classList.add("red-border");
    throw "Invalid phone numver";
  }

  // saving the informaton to database (just a manipulation)
  const id = Math.floor(Math.random() * 20000 + 10000);

  // name first later to upper case
  userName = requiredFields[0].value
    .split("")[0]
    .toUpperCase()
    .concat(requiredFields[0].value.slice(1));

  contactDB.push({
    id,
    name: userName,
    email: requiredFields[1].value,
    phone: requiredFields[2].value,
    district: requiredFields[3].value,
    message: requiredFields[4].value,
    isEmployed:
      isEmployed == undefined ? "Not provided" : JSON.parse(isEmployed.value),
    subscribed: JSON.parse(isSubscribedSection.value),
  });

  console.log(contactDB);

  // set notification text
  notification.innerHTML = `<h6>Dear ${userName}, your email is ${requiredFields[1].value}. We are glad that you reached us from ${requiredFields[3].value}. We will get back to you soon!</h6>`;

  //enable the notification
  notificationContainer.classList.add("enablenotification");

  // clear fields
  Array.from(requiredFields).map((el) => {
    el.value = "";
    el.classList.remove("red-border");
  });

  requiredFields[3].value = "--- Select Your District ---*";
  requiredFields[3].classList.remove("red-border");
});

//close the notification
closebtn.addEventListener("click", (e) => {
  notificationContainer.classList.remove("enablenotification");
  notificationContainer.classList.add("disablenotification");
});
