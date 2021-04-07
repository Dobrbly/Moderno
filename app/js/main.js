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

$('.icon-th-list').on('click', function(){
  $('.products__item').addClass('list'),
  $('.icon-th-large').removeClass('active'),
  $('.icon-th-list').addClass('active')
});

$('.icon-th-large').on('click', function(){
  $('.products__item').removeClass('list'),
  $('.icon-th-list').removeClass('active'),
  $('.icon-th-large').addClass('active')
});

  var mixer = mixitup('.products__inner-box');
});

icon-th-large