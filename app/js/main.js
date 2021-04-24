
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


  $('.products-slider__inner').slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true
  });

  $('.icon-th-list').on('click', function(){
    $('.products-item').addClass('list'),
    $('.icon-th-large').removeClass('active'),
    $('.icon-th-list').addClass('active')
  });

  $('.icon-th-large').on('click', function(){
    $('.products-item').removeClass('list'),
    $('.icon-th-list').removeClass('active'),
    $('.icon-th-large').addClass('active')
  });

  $('.tab-item').not(':first').hide();
  $('.details-page__tabs .tab').on('click', function(event) {
  var id = $(this).attr('data-id');
	  $('.details-page__tabs').find('.tab-item').removeClass('active-tab').hide();
  	$('.details-page__tabs .tabs').find('.tab').removeClass('active');
  	$(this).addClass('active');
  	$('#'+id).addClass('active-tab').fadeIn();
  	return false;
  });


  var mixer = mixitup('.products__box');
  
});