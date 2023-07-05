$(function() {
  $('.all-categories__list').slick({
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipe: false,
    prevArrow: document.querySelector('.all-categories__btnprew'),
    nextArrow: document.querySelector('.all-categories__btnnext'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          swipe: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          swipe: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          dots: true,
          swipe: true,
        }
      }
    ]
  });

  let curentSlide = 1;

  $('.all-categories__btnprew').on('click', function () {
    if(curentSlide > 1) {
      $(`#page-${curentSlide - 1}`).removeClass('page__hide');
      $(`#page-${curentSlide}`).addClass('page__hide');   
      
      curentSlide--
    }     
  });

  $('.all-categories__btnnext').on('click', function () {
    if(curentSlide < 4) {
      $(`#page-${curentSlide}`).addClass('page__hide');
      $(`#page-${curentSlide + 1}`).removeClass('page__hide');   

      curentSlide++
    }
    
  });
})