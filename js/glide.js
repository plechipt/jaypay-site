new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 3,
  autoplay: 4000,
  hoverpause: true,
  gap: 30,
  peek: 50,
  breakpoints: {
    800: {
      perView: 1,
    },
    1200: {
      perView: 2,
    },
  },
}).mount();
