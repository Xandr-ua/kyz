$(function() {
  $('.footer__title-directory').on('click', function () {
    $('.footer__box-directory').toggleClass('footer__box-show');
  })

  $('.footer__title-menu').on('click', function () {
    $('.footer__list-menu').toggleClass('footer__box-show');
  })

  $('.footer__title-contacts').on('click', function () {
    $('.footer__list-contacts').toggleClass('footer__box-show');
  })
})