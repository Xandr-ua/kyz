$(function() {

  const dotsList = $('#dots-list').children('.baner__top-dots').children();

  $('.baner__top-list').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/previous-arrow.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/next-arrow.svg" alt=""></button>',
    customPaging: function (slider, i) {
      
			return  dotsList[i];
		},
		dotsClass: 'baner__top-dots-list',
  });

})