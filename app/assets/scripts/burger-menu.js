$(document).ready(function () {
  let burgerIcon = $(".site-header__burger-icon");
  let menuContent = $(".site-header__menu-content");

  burgerIcon.click(function(){
    menuContent.toggleClass("site-header__menu-content--is-visible")
  });
});