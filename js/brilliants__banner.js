$(function() {
  $('.brilliants__banner-expand').on('click', function () {
    $('.brilliants__banner-expand').addClass('brilliants__banner-hide');
    $('.brilliants__banner-text').addClass('brilliants__banner-show')

    $('.brilliants__banner-collapse').removeClass('brilliants__banner-hide');
  })

  $('.brilliants__banner-collapse').on('click', function () {
    $('.brilliants__banner-collapse').addClass('brilliants__banner-hide');
    $('.brilliants__banner-text').removeClass('brilliants__banner-show')

    $('.brilliants__banner-expand').removeClass('brilliants__banner-hide');
  })
})