document.addEventListener("DOMContentLoaded", function () {
  var swiperTIhomepgae = new Swiper(".mySwiperTI_homepage", {

    breakpoints: {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 10,
        pagination: {
            el: ".paginationSLideTImb",
            type: "progressbar",
          },
      },
      768: {
        slidesPerView: 1.6,
        spaceBetween: 20,
        pagination: {
          el: ".paginationSLideTI",
          type: "fraction",
        },
      },
    },
    navigation: {
      nextEl: ".arrowSLideRightTI",
      prevEl: ".arrowSLideLeftTI",
    },
  });
});
