$(".genre-image").owlCarousel({
  nav: true,
  loop: false,
  margin: 40,
  dots: false,
  navContainer: "#customNavGenre",
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

$(".track-carousel").owlCarousel({
  nav: true,
  loop: false,
  margin: 20,
  dots: false,
  navContainer: "#customNavTrack",
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
