const sideBarItems = document.querySelectorAll("#mySidebar a");

// Hide id after link redirect
window.addEventListener(
  "hashchange",
  () => window.history.pushState({}, "", "/"),
  {}
);

// Passive event listeners
jQuery.event.special.touchstart = {
  setup: function (_, ns, handle) {
    this.addEventListener("touchstart", handle, {
      passive: !ns.includes("noPreventDefault"),
    });
  },
};
jQuery.event.special.touchmove = {
  setup: function (_, ns, handle) {
    this.addEventListener("touchmove", handle, {
      passive: !ns.includes("noPreventDefault"),
    });
  },
};
jQuery.event.special.wheel = {
  setup: function (_, ns, handle) {
    this.addEventListener("wheel", handle, { passive: true });
  },
};
jQuery.event.special.mousewheel = {
  setup: function (_, ns, handle) {
    this.addEventListener("mousewheel", handle, { passive: true });
  },
};

// Sidebar
const openNav = () => {
  document.getElementById("mySidebar").style.left = "0px";
  document.getElementById("sidebar_container_blur_bg").style.right = "-5vw";
};

const closeNav = () => {
  document.getElementById("mySidebar").style.left = "-100vw";
  document.getElementById("sidebar_container_blur_bg").style.right = "-105vw";
};

const handleMousePos = (event, target) => {
  const mouseClickWidth = event.clientX;
  if (mouseClickWidth >= 280) {
    closeNav();
  }
};

document.addEventListener("click", handleMousePos);
sideBarItems.forEach((item) => {
  item.addEventListener("click", closeNav);
});

const removeShadow = () => {
  const element = document.getElementById("box_sh");
  element.classList.remove("box_s");
};

// Slide
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
