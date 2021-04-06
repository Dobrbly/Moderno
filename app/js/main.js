$(function () {
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 200,
    to: 600,
    grid: false,
    prefix: "$"
  });

  $(".rate__star").rateYo({
    rating: 5,
    readOnly: true,
    starWidth: "11px",
  });


  $('.products__slider-inner').slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true
  });

  var mixer = mixitup('.products__inner-box');
});