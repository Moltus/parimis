$(document).ready(function () {
  let burgerIcon = $(".site-header__burger-icon");
  let menuContent = $(".site-header__menu-content");
  let classMenuVisible = "site-header__menu-content--is-visible";
  let dropDown = $(".site-header__menu-content__dropdown");
  let secondaryMenu = $(".site-header__secondary-menu");
  let classDropdownVisible = "site-header__secondary-menu--is-visible";
  let windowWidth = $(window).width();
  

  function toggleOrange() {
    if (menuContent.hasClass(classMenuVisible)) {
      $("#site-header").css("background-color",
        "rgba(229, 182, 124)")
    } else if (!menuContent.hasClass(classMenuVisible)) {
      $("#site-header").css("background-color", "rgba(255, 255, 255, var(--headerOpacity))")
    }
  }

  burgerIcon.click(function(){
    if (secondaryMenu.hasClass(classDropdownVisible)){
      secondaryMenu.toggleClass(classDropdownVisible);
      menuContent.toggleClass(classMenuVisible);
      toggleOrange();
    } else {
      menuContent.toggleClass(classMenuVisible);
      toggleOrange();
      
    }
    
  });
  dropDown.click(function(){
    if (windowWidth < 600) {
    console.log("clicked on dropdown");
    secondaryMenu.toggleClass(classDropdownVisible)
    }
  });

});

