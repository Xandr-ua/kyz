$(function() {
  $('.popular-product-categories__list').slick({
    dots: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    swipe: false,
    prevArrow: '<button type="button" class="slick-prev"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 12.5L18.1351 19.5L18.995 18.6568L13.327 13.0966L21 13.0966L21 11.9034L13.327 11.9034L18.9966 6.34159L18.1351 5.5L11 12.5Z" fill="#091278"/></svg></button>',

    nextArrow: '<button type="button" class="slick-next"><svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 7L2.86486 14L2.005 13.1568L7.67297 7.59659L-3.32058e-07 7.59659L-2.79902e-07 6.40341L7.67297 6.40341L2.00338 0.841591L2.86487 -3.11887e-07L10 7Z" fill="#091278"/></svg></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 3,
          swipe: true,
          arrows: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3,
          swipe: true,
          arrows: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          swipe: true,
          arrows: false,
        }
      }
    ]
  });
})