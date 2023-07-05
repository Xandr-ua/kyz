$(function() {


  function slickSlideTrend() {
    if ($(window).width() >= '1000') {
      $('.trend .trend-products__list').slick({
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        swipe: false,
        prevArrow: document.querySelector('.trend .trend-products__btnprew'),
        nextArrow: document.querySelector('.trend .trend-products__btnnext'),
      });
    }
    else if ($(window).width() >= '520') {
      $('.trend .trend-products__list').slick({
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 2,
        swipe: true,
        prevArrow: document.querySelector('.trend .trend-products__btnprew'),
        nextArrow: document.querySelector('.trend .trend-products__btnnext'),
      });
    }
    else {
      $('.trend .trend-products__list').slick({
        dots: true,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        swipe: true,
        prevArrow: document.querySelector('.trend .trend-products__btnprew'),
        nextArrow: document.querySelector('.trend .trend-products__btnnext'),
      });
    } 

  }

  slickSlideTrend();

  function slickSlidePopular() {
    if ($(window).width() >= '1000') {
      $('.popular .trend-products__list').slick({
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        swipe: false,
        prevArrow: document.querySelector('.popular .trend-products__btnprew'),
        nextArrow: document.querySelector('.popular .trend-products__btnnext'),
      });
    }
    else if ($(window).width() >= '520') {
      $('.popular .trend-products__list').slick({
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 2,
        swipe: true,
        prevArrow: document.querySelector('.popular .trend-products__btnprew'),
        nextArrow: document.querySelector('.popular .trend-products__btnnext'),
      });
    }
    else {
      $('.popular .trend-products__list').slick({
        dots: true,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        swipe: true,
        prevArrow: document.querySelector('.popular .trend-products__btnprew'),
        nextArrow: document.querySelector('.popular .trend-products__btnnext'),
      });
    } 
  }

  slickSlidePopular();

  function clickPrew(clickBtnPrew, pageOne, pageTwo, dotsOne, dotsTwo) {
    $(clickBtnPrew).on('click', function () {
      $(pageOne).removeClass('page__hide');
      $(pageTwo).addClass('page__hide'); 
      $(dotsOne).addClass('active__dots');  
      $(dotsTwo).removeClass('active__dots');    
    });
   }
  
   clickPrew('.trend .trend-products__btnprew', '.trend .trend-products__pageone', '.trend .trend-products__pagetwo');
  
   clickPrew('.popular .trend-products__btnprew', '.popular .trend-products__pageone', '.popular .trend-products__pagetwo');
  
    function clickNext(clickBtnPrew, pageOne, pageTwo, dotsOne, dotsTwo) {
      $(clickBtnPrew).on('click', function () {
        $(pageOne).addClass('page__hide');
        $(pageTwo).removeClass('page__hide'); 
        $(dotsOne).removeClass('active__dots');  
        $(dotsTwo).addClass('active__dots');    
      });
     }
    
    clickNext('.trend .trend-products__btnnext', '.trend .trend-products__pageone', '.trend .trend-products__pagetwo');
     
    clickNext('.popular .trend-products__btnnext', '.popular .trend-products__pageone', '.popular .trend-products__pagetwo');

    
})