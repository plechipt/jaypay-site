new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 3,
  animationDuration: 1500,
  autoplay: 5000,
  hoverpause: true,
  gap: 20,
  peek: 50,
  breakpoints: {
    1700: {
      perView: 3,
    },
  },
}).mount();
