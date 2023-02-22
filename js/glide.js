new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 3,
  animationDuration: 1500,
  autoplay: 5000,
  hoverpause: true,
  gap: 10,
  peek: 30,
  breakpoints: {
    1700: {
      perView: 3,
    },
    950: {
      perView: 2,
    },
    550: {
      perView: 1,
    },
  },
}).mount();
