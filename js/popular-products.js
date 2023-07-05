$(function() {
  $('.popular-products__list').slick({
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipe: false,
    prevArrow: document.querySelector('.popular-products__btnprew'),
    nextArrow: document.querySelector('.popular-products__btnnext'),
  });

  $('.popular-products__btnprew').on('click', function () {
    $('.popular-products__pageone').removeClass('page__hide');
    $('.popular-products__pagetwo').addClass('page__hide'); 
    $('.popular-products__dots-itemsone').addClass('active__dots');  
    $('.popular-products__dots-itemstwo').removeClass('active__dots');    
  });

  $('.popular-products__btnnext').on('click', function () {
    $('.popular-products__pageone').addClass('page__hide');
    $('.popular-products__pagetwo').removeClass('page__hide');
    $('.popular-products__dots-itemsone').removeClass('active__dots');  
    $('.popular-products__dots-itemstwo').addClass('active__dots');      
  });
})