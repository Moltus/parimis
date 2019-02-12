const dropDown = $(".site-header__menu-content__dropdown");
const secondaryMenu = $(".site-header__secondary-menu");
const classDropdownVisible = "site-header__secondary-menu--is-visible";
let windowWidth = $(window).width();

dropDown.hover(function () {
  if (windowWidth > 600) {
  console.log("secondary menu activate!");
  secondaryMenu.toggleClass(classDropdownVisible);
  }
});