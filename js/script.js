const openNav = () => {
  document.getElementById("mySidebar").style.left = "0px";
  document.getElementById("sidebar_container_blur_bg").style.right = "-5vw";
};

const closeNav = () => {
  document.getElementById("mySidebar").style.left = "-100vw";
  document.getElementById("sidebar_container_blur_bg").style.right = "-105vw";
};

const handleMousePos = (event) => {
  const mouseClickWidth = event.clientX;
  if (mouseClickWidth >= 280) {
    document.getElementById("mySidebar").style.left = "-100vw";
    document.getElementById("sidebar_container_blur_bg").style.right = "-105vw";
  }
};

document.addEventListener("click", handleMousePos);

const removeShadow = () => {
  const element = document.getElementById("box_sh");
  element.classList.remove("box_s");
};
