$(function() {

  $('.produkt-card__moreproduct-small-list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.produkt-card__moreproduct-big-list',
    focusOnSelect: true,
    draggable: false,
    variableWidth: true,
  });
  $('.produkt-card__moreproduct-big-list').slick({
    asNavFor: '.produkt-card__moreproduct-small-list',
    draggable: true,
    arrows: false,
    fade: true,
    responsive: [

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      },
    ]
  });

 

  $('.produkt-card__moreproduct-size-list').slick({
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 9,
    variableWidth: false,
    swipe: false,
    prevArrow: '<button type="button" class="slick-prev"><svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="51.5" y="51.5" width="51" height="51" rx="3.5" transform="rotate(180 51.5 51.5)" fill="white"/><g clip-path="url(#clip0_1092_14605)"><path d="M29 22.1792L25.29 26L29 29.8208L27.855 31L23 26L27.855 21L29 22.1792Z" fill="#898989"/></g><rect x="51.5" y="51.5" width="51" height="51" rx="3.5" transform="rotate(180 51.5 51.5)" stroke="#E1E1E1"/><defs><clipPath id="clip0_1092_14605"><rect width="24" height="24" fill="white" transform="translate(38 14) rotate(90)"/></clipPath></defs></svg></button>',

    nextArrow: '<button type="button" class="slick-next"><svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="51" height="51" rx="3.5" fill="white"/><g clip-path="url(#clip0_762_8537)"><path d="M23 29.8208L26.71 26L23 22.1792L24.145 21L29 26L24.145 31L23 29.8208Z" fill="#898989"/></g><rect x="0.5" y="0.5" width="51" height="51" rx="3.5" stroke="#E1E1E1"/><defs><clipPath id="clip0_762_8537"><rect width="24" height="24" fill="white" transform="translate(14 38) rotate(-90)"/></clipPath></defs></svg></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          arrows: true,
        }
      },

      {
        breakpoint: 993,
        settings: {
          slidesToShow: 9,
          slidesToScroll: 2,
          arrows: true,
        }
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          arrows: true,
        }
      },

      {
        breakpoint: 370,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: true,
        }
      },
    ]
  });
  
  let sizeList = Array.from(document.querySelectorAll('.produkt-card__moreproduct-size-inner'));

  sizeList.forEach(sizeInner => {
    sizeInner.addEventListener('click', function (e) {
    e.preventDefault();
    $('.produkt-card__moreproduct-size-inner').removeClass('produkt-card__moreproduct-size-inner-active');
    let courentSize = e.target.closest('.produkt-card__moreproduct-size-inner');

    courentSize.classList.toggle('produkt-card__moreproduct-size-inner-active');
    })
  });



  $('.produkt-card__aboutproduct-categories-list').slick({
    dots: false,
    arrows: false,
    slidesToShow: 3,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          draggable: true,
          infinite: false,
        }
      },
    ]
  });


  $('.produkt-card__moreproduct-want').on('click', function() {
    $('.produkt-card__moreproduct-want').toggleClass('produkt-card__moreproduct-want-active')
  })


  let subtitle = Array.from(
    document.querySelectorAll(".produkt-card__aboutproduct-categories-subtitle")
  );
  let productdescription = Array.from(
    document.querySelectorAll(".produkt-card__aboutproduct-productdescription-item")
  );
  
  subtitle.forEach((subCategory) => {
    subCategory.addEventListener("click", function (e) {
      e.preventDefault();
      $(".produkt-card__aboutproduct-categories-subtitle").removeClass(
        "produkt-card__aboutproduct-categories-subtitle-active"
      );
      $(".produkt-card__aboutproduct-productdescription-item").hide();
      let courentSubtitle = e.target.closest(".produkt-card__aboutproduct-categories-subtitle");
      let numberpPoductDescription = courentSubtitle
        .closest("div.slick-slide")
        .getAttribute("data-slick-index");
  
      if (productdescription[numberpPoductDescription]) {
        productdescription[numberpPoductDescription].style.display = "block";
      }
  
      courentSubtitle.classList.toggle("produkt-card__aboutproduct-categories-subtitle-active");
    });
  });

  function slickSlideRevised() {
    if ($(window).width() >= '1000') {
      $('.revised .trend-products__list').slick({
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        swipe: false,
        prevArrow: document.querySelector('.revised .trend-products__btnprew'),
        nextArrow: document.querySelector('.revised .trend-products__btnnext'),
      });
    }
    else if ($(window).width() >= '520') {
      $('.revised .trend-products__list').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        swipe: true,
        prevArrow: document.querySelector('.revised .trend-products__btnprew'),
        nextArrow: document.querySelector('.revised .trend-products__btnnext'),
      });
    }
    else {
      $('.revised .trend-products__list').slick({
        dots: true,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        swipe: true,
        prevArrow: document.querySelector('.revised .trend-products__btnprew'),
        nextArrow: document.querySelector('.revised .trend-products__btnnext'),
      });
    } 
  }

  slickSlideRevised();

  function clickPrew(clickBtnPrew, pageOne, pageTwo, dotsOne, dotsTwo) {
    $(clickBtnPrew).on('click', function () {
      $(pageOne).removeClass('page__hide');
      $(pageTwo).addClass('page__hide'); 
      $(dotsOne).addClass('active__dots');  
      $(dotsTwo).removeClass('active__dots');    
    });
   }
  
   clickPrew('.revised .trend-products__btnprew', '.revised .trend-products__pageone', '.revised .trend-products__pagetwo');
  
    function clickNext(clickBtnPrew, pageOne, pageTwo, dotsOne, dotsTwo) {
      $(clickBtnPrew).on('click', function () {
        $(pageOne).addClass('page__hide');
        $(pageTwo).removeClass('page__hide'); 
        $(dotsOne).removeClass('active__dots');  
        $(dotsTwo).addClass('active__dots');    
      });
     }
     
    clickNext('.revised .trend-products__btnnext', '.revised .trend-products__pageone', '.revised .trend-products__pagetwo');


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
  
});

const video = document.querySelector('.video-test');
let width = window.innerWidth;
console.log(width);

window.addEventListener('resize', () => {
  width = window.innerWidth;
  video.style.height = `${width}px`;
});