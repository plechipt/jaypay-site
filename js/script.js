const sideBarItems = document.querySelectorAll("#mySidebar a");
const openBtn = document.querySelector(".openbtn");

// Hide id after link redirect
window.addEventListener(
  "hashchange",
  () => window.history.pushState({}, "", "/"),
  {}
);

// Sidebar
const openNav = () => {
  document.getElementById("mySidebar").style.left = "0px";
  document.getElementById("sidebar_container_blur_bg").style.right = "-5vw";
};

const closeNav = () => {
  document.getElementById("mySidebar").style.left = "-100vw";
  document.getElementById("sidebar_container_blur_bg").style.right = "-105vw";
};

const handleMousePos = (event) => {
  const isNotOpenButton = !event.target.classList.contains("openbtn");
  const mouseClickWidth = event.clientX;

  if (mouseClickWidth >= 280 && isNotOpenButton) {
    closeNav();
  }
};

document.addEventListener("click", handleMousePos);
openBtn.addEventListener("click", openNav);
sideBarItems.forEach((item) => {
  item.addEventListener("click", closeNav);
});

const removeShadow = () => {
  const element = document.getElementById("box_sh");
  element.classList.remove("box_s");
};
