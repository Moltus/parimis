$(document).ready(function(){

  $('.site-header__menu-toggle').click(function () {
    $('.primary-nav').toggleClass('active');
    $('.site-header').toggleClass('active');
  })

  $('.primary-nav ul li').click(function(){
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
  })

})