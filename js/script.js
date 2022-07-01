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

$(".sec2_home_slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 750,
  prevArrow: '<i class="fa-solid fa-chevron-left"></i>',
  nextArrow: '<i class="fa-solid fa-chevron-right"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
