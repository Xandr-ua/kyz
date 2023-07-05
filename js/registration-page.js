$(function() {

  for (let i = 1; i <= 31; i++) {
    let day = $('<option/>').val(i).html(i);
    $('#day').append(day);
  }


  let months = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];

    let select = $('#months');
    $.each(months, function(index, value) {
      select.append('<option>' + value + '</option>');
    });

  let currentYear = new Date().getFullYear();
  for (let i = currentYear; i >= currentYear - 100; i--) {
    let year = $('<option/>').val(i).html(i);
    $('#year').append(year);
  }

  $(".registration__date-select").select2({
    minimumResultsForSearch: Infinity,
    dropdownCssClass: 'date-select',
  });
  
})
