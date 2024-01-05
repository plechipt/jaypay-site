const sideBarItems = document.querySelectorAll("#mySidebar a");
const openBtn = document.querySelector(".openbtn");
const closeButton = document.querySelector(".closeButton");

document.cookie = "myCookie=myValue; samesite=strict"; // Specify the SameSite attribute as "strict"

const apiURL = "https://jaypay-server.vercel.app/api";
let fetchExecuted = false;

// AOS
AOS.init({
  once: true,
});

// Glide.js
new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 3,
  animationDuration: 500,
  //autoplay: 5000,
  hoverpause: true,
  gap: 10,
  peek: 30,
  breakpoints: {
    1700: {
      perView: 3,
    },
    950: {
      perView: 3,
    },
    600: {
      perView: 3,
    },
  },
}).mount();

// Hide id after link redirect
window.addEventListener(
  "hashchange",
  () => window.history.pushState({}, "", "/"),
  {}
);

// Sidebar
const openNav = () => {
  document.body.classList.add("stop-scrolling");
  document.getElementById("mySidebar").style.left = "0px";
};

const closeNav = () => {
  document.body.classList.remove("stop-scrolling");

  document.getElementById("mySidebar").style.left = "-100vw";
  document.getElementById("sidebar_container_blur_bg").style.right = "-105vw";
};
/*

const handleMousePos = (event) => {
  const isNotOpenButton = !event.target.classList.contains("openbtn");
  const mouseClickWidth = event.clientX;

  if (mouseClickWidth >= 280 && isNotOpenButton) {
    closeNav();
  }
};

document.addEventListener("click", handleMousePos);
*/

openBtn.addEventListener("click", openNav);
closeButton.addEventListener("click", closeNav);
sideBarItems.forEach((item) => {
  item.addEventListener("click", closeNav);
});

const removeShadow = () => {
  const element = document.getElementById("box_sh");
  element.classList.remove("box_s");
};

// Navbar toggle between fixed and sticky
document.addEventListener("scroll", () => {
  const allHeaders = document.querySelectorAll("header");

  allHeaders.forEach((header) => {
    header.classList.toggle("sticky", window.scrollY > 0);
  });
});

// Clear form after submit
const submitForm = document.getElementById("submit-form");

submitForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nameInput = document.getElementById("name-input");
  const emailInput = document.getElementById("email-input");
  const messageInput = document.getElementById("message-input");
  const submitButton = document.getElementById("submit-button");

  submitButton.disabled = true;

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";

  const response = await fetch(`${apiURL}/submit-website-form`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });

  window.location.href = "https://web3forms.com/success";

  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
});
