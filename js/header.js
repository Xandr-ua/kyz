$(function() {

  function openTelAndLang(clickBlock, openBlock, parentsClass) {
    $(clickBlock).on('click', function() {
      $(openBlock).fadeIn(300);
      $(clickBlock).addClass('arrow-top');
    });
    $(document).on('click', function(e) {
      if (!$(e.target).closest(parentsClass).length) {
        $(openBlock).fadeOut(300);
        $(clickBlock).removeClass('arrow-top');
      }
      e.stopPropagation();
    });
  }

  openTelAndLang('.header__topinner-telephone', '.header__topinner-sublist-telephonebox', '.header__topinner-item');

  openTelAndLang('.header__bottominner-tongue-text', '.header__bottominner-tongue-box', '.header__bottominner-tongue');

  function fromDesktopToMobile() {
    if ($(window).width() <= '992') {
      $('.header__shopping-cart').appendTo('.header__mobile-basket-inner');

      $('.header__mobile-basket').on('click', function () {
        $('.header__shopping-cart').fadeIn(300);
        $('body').addClass('body-notscroll'); 
      })
    }
  }

  fromDesktopToMobile();

  function openBasket(clickBtn, openBlokBasket) {
    $(clickBtn).on('click', function (e) {
      e.preventDefault;
      $(openBlokBasket).fadeIn(300);
      $('body').addClass('body-notscroll'); 
    })
  }

  openBasket('#basket', '.header__shopping-cart');

  function closeBasket(clickBtn, closeBlokBasket) {
    $(clickBtn).on('click', function () {
      $(closeBlokBasket).fadeOut(300);
      $('body').removeClass('body-notscroll');
    })
  }

  closeBasket('.header__shopping-cart-closebtn', '.header__shopping-cart');
  closeBasket('.header__shopping-cart-continue', '.header__shopping-cart');
  closeBasket('.header__bottominner-personalaccount-close', '.header__bottominner-personalaccount-wrap');

  function clickCloseBody() {
    if ($(window).width() >= '992') {
      $("#basket").on('click', function() {
        $('.header__shopping-cart').fadeIn(300);
        $('body').addClass('body-notscroll');
      });
      $(document).on('click', function(e) {
        if (!$(e.target).closest(".header__bottominner-item").length) {
          $('.header__shopping-cart').fadeOut(300);
          $('body').removeClass('body-notscroll');
        }
        e.stopPropagation();
      });

      $("#personalaccount").on('click', function() {
        $('.header__bottominner-personalaccount-wrap').fadeIn(300);
        $('body').addClass('body-notscroll');
      });
      $(document).on('click', function(e) {
        if (!$(e.target).closest(".header__bottominner-item").length) {
          $('.header__bottominner-personalaccount-wrap').fadeOut(300);
          $('body').removeClass('body-notscroll');
        }
        e.stopPropagation();
      });

    }
  }

  clickCloseBody()

  // $('.header__mobile-basket')

  // $('.header__bottominner-tongue-text').on('click', function () {
  //   $('.header__bottominner-tongue-box').toggleClass('telephonebox-show');
  //   $('.header__bottominner-tongue-text').toggleClass('arrow-top');
  // })

  $('.header__bottominner-input').on('click', function () {
    $('.header__bottominner-label').toggleClass('addarrow');
    $('.header__bottominner-search').toggleClass('input-borderbottom');
  })

  $('.header__nav-directory-text').on('click', function () {
    $('.header__nav-directory-text').toggleClass('directory-shadow');
    $('.header__nav-directory-sublist').toggleClass('directory-show');
  })

  $('.header__nav-directory-text-notebook').on('click', function () {
    $('.header__nav-directory-text-notebook').toggleClass('directory-shadow');
    $('.header__nav-directory-sublist').toggleClass('directory-show');
  })

  $('.header__mobile-burger').on('click', function () {
    $('.header__mobile-nav').addClass('header__mobile-nav-show');
    $('body').addClass('body-notscroll');
  })

  $('.header__mobile-nav-btnclose').on('click', function () {
    $('.header__mobile-nav').removeClass('header__mobile-nav-show');
    $('.header__mobile-nav-directory-inner').removeClass('header__mobile-nav-show');
    $('.header__mobile-nav-input').blur();
    $('body').removeClass('body-notscroll');
  })

  $('.header__mobile-nav-btn').on('click', function () {
    $('.header__mobile-nav-directory-inner').addClass('header__mobile-nav-show');
  })

  $('.header__mobile-nav-directory-subtitle').on('click', function () {
    $('.header__mobile-nav-directory-inner').removeClass('header__mobile-nav-show');
  })

  $('.header__bottominner-search-result-btn').on('click', () => $('.header__bottominner-search-result').css('display', 'none'));

  $('.header__mobile-search').on('click', function () {
    $('.header__mobile-nav').addClass('header__mobile-nav-show');
    $('.header__mobile-nav-input').focus();
    $('body').addClass('body-notscroll');
  })

})