$(document).ready(function(){
  $siteHeader = $('#site-header');
  $primaryNav = $('#primary-nav');
  $menuToggle = $('#menu-toggle');
  $menuItems = $('.primary-nav ul li');

  $menuToggle.click(function () {
    $primaryNav.toggleClass('active');
    $siteHeader.toggleClass('active');
  })

  $menuItems.click(function(){
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
  })

  $(window).scroll(function (event) {
    let scroll = $(this).scrollTop();
    if (scroll >= 10) {
      
      $siteHeader.css("position", "fixed");
    }
  });
})