
$(function() {

  $('.product-slider').slick({
    dots: true,
    infinite: false,
    swipe: false,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2.63178L3.81659 8.99984L10 15.3679L8.09171 17.3332L-3.57519e-07 8.99984L8.09171 0.666504L10 2.63178Z" fill="#363636"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5905e-08 2.63178L6.18341 8.99984L6.42618e-07 15.3679L1.90829 17.3332L10 8.99984L1.90829 0.666504L8.5905e-08 2.63178Z" fill="#363636"/></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
          
        }
      },
    ]
  });


  function accordion(parentSelector, itemSelector, itemActiveClass) {
    $(parentSelector).on('click', function(e){

      const target = $(e.target)
      const item = target.closest(itemSelector)
      const siblings = item.siblings()

      if (!item.hasClass(itemActiveClass)) {
        siblings.removeClass(itemActiveClass) 
        item.addClass(itemActiveClass) 
      } else { 
        item.removeClass(itemActiveClass) 
      }
    })
  }

  accordion('.product-page__inner', '.product-page__content-like', 'product-page__content-like-active');

  accordion('.product-page__mobile', '.product-page__content-like', 'product-page__content-like-active');
  
})



