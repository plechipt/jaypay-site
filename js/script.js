  function openNav() {
      document.getElementById("mySidebar").style.left = "0px";
      document.getElementById("sidebar_container_blur_bg").style.right = "-5vw";
  }

  function closeNav() {
      document.getElementById("mySidebar").style.left = "-100vw";
      document.getElementById("sidebar_container_blur_bg").style.right = "-105vw";
  }

  function handleMousePos(event) {
      var mouseClickWidth = event.clientX;
      if (mouseClickWidth >= 280) {
          document.getElementById("mySidebar").style.left = "-100vw";
          document.getElementById("sidebar_container_blur_bg").style.right = "-105vw";
      }
  }

  document.addEventListener("click", handleMousePos);






  $('.sec2_home_slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1000,
      prevArrow: '<i class="far fa-chevron-left"></i>',
      nextArrow: '<i class="far fa-chevron-right"></i>',
      responsive: [{
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
              }
          },
          {
              breakpoint: 900,
              settings: {
                  slidesToShow: 2,
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
              }
          }
      ]
  });

  function removeShadow() {
      var element = document.getElementById("box_sh");
      element.classList.remove("box_s");
  }