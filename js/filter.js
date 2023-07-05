$(function() {

  function accordion(parentSelector, itemSelector, itemActiveClass, headSelector, contentSelector, duration) { 

    let locked = false 

    $(parentSelector).on('click', function(e){ 

      const target = $(e.target) 
      const item = target.closest(itemSelector) 
      const itemHead = item.find(headSelector) 
      const itemContent = item.find(contentSelector) 

      const siblings = item.siblings() 
      const siblingsContent = siblings.find(contentSelector) 

      if (!target.closest(headSelector).length) return 

      if (locked) return 

      if (!item.hasClass(itemActiveClass)) { 
        locked = true 
        siblings.removeClass(itemActiveClass) 
        siblingsContent.slideUp(duration) 
        item.addClass(itemActiveClass) 
        itemContent.slideDown(duration, function(){ 
          locked = false
        })
      } else { 
        locked = true 
        item.removeClass(itemActiveClass) 
        itemContent.slideUp(duration, function(){
          locked = false
        })
      }
    })
  }

  accordion('.filter__list', '.filter__item', 'active__filter', '.filter__category', '.filter__subbox', 300);

  accordion('.filter__mobile-list', '.filter__mobile-item', 'active__filter', '.filter__mobile-category', '.filter__mobile-form', 300);


  let allFilter = $('.filter__allfilter-category-list').slick( {
    dots: false,
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    variableWidth: true,
    swipe: false,
    prevArrow: '<button type="button" class="slick-prev"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 12.5L18.1351 19.5L18.995 18.6568L13.327 13.0966L21 13.0966L21 11.9034L13.327 11.9034L18.9966 6.34159L18.1351 5.5L11 12.5Z" fill="#363636"/></svg></button>',

    nextArrow: '<button type="button" class="slick-next"><svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 7L2.86486 14L2.005 13.1568L7.67297 7.59659L-3.32058e-07 7.59659L-2.79902e-07 6.40341L7.67297 6.40341L2.00338 0.841591L2.86487 -3.11887e-07L10 7Z" fill="#363636"/></svg></button>',
  });

  $('#all-filter').on('click', function () {
    allFilter.slick('refresh');
  })

  $('.filter__mobile-allfilter-btn').on('click', function () {
    $('.filter__mobile-sidebar').addClass('filter__mobile-sidebar-show');
    $('body').addClass('body-notscroll');
  })

  $('.filter__mobile-btnclose').on('click', function () {
    $('.filter__mobile-sidebar').removeClass('filter__mobile-sidebar-show');
    $('body').removeClass('body-notscroll');
  })

  let subFilterCategory = Array.from(
    document.querySelectorAll(".filter__allfilter-category")
  );
  let subFilterCategoryContent = Array.from(
    document.querySelectorAll(".sub-filter-category-content")
  );
  
  $("#all-filter").on("click", function () {
    subFilterCategory[0].click();
  });
  
  subFilterCategory.forEach((subCategory) => {
    subCategory.addEventListener("click", function (e) {
      e.preventDefault();
      $(".filter__allfilter-category").removeClass(
        "filter__allfilter-category-expand"
      );
      $(".sub-filter-category-content").hide();
      let courentCategory = e.target.closest(".filter__allfilter-category");
      let numberOfSubCategory = courentCategory
        .closest("div.slick-slide")
        .getAttribute("data-slick-index");
  
      if (subFilterCategoryContent[numberOfSubCategory]) {
        subFilterCategoryContent[numberOfSubCategory].style.display = "block";
      }
  
      courentCategory.classList.toggle("filter__allfilter-category-expand");
    });
  });

  $(".filter__recommendations").select2({
    minimumResultsForSearch: Infinity,
    dropdownCssClass: 'recommendations-select',
  });

})