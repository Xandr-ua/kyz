$(function() {
  $('.about__btn-expand').on('click', function () {
    $('.about__btn-expand').addClass('about__btn-hide');
    $('.about__wrap').addClass('about__wrap-show')

    $('.about__btn-collapse').removeClass('about__btn-hide');
  })

  $('.about__btn-collapse').on('click', function () {
    $('.about__btn-collapse').addClass('about__btn-hide');
    $('.about__wrap').removeClass('about__wrap-show')

    $('.about__btn-expand').removeClass('about__btn-hide');
  })
})