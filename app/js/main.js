$(function () {
  var mixer = mixitup('.products__inner-box');

  $(".rate__star").rateYo({
    rating: 5,
    readOnly: true,
    starWidth: "11px"
  });

  $('.products__slider-inner').slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true
  });
});