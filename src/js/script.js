$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="img/chevron-left.png"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="img/chevron-right.png"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false,
          infinite: true,
        },
      },
    ],
  });
});
