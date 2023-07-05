$(function() {
  
  $( ".checkout__input-checkbox:checkbox" ).on("change", function() {
    $('.checkout__otherhuman').slideToggle();
  });

  $('.checkout__input-city').on('focus', function () {
   $('.checkout__city-result-list').slideDown(300);
   $('.checkout__city-big-inner').slideUp(300);
  });

  $('.checkout__input-city').on('blur', function () {
    $('.checkout__city-result-list').slideUp(300);
    $('.checkout__city-big-inner').slideDown(400);
   });

})

