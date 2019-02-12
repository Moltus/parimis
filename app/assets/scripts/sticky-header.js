$(document).ready(function () {
  $(window).scroll(function (event) {
    let scroll = $(this).scrollTop();
    let opacity = .5 + (scroll / 1000);
    if (opacity >= 0) {
      $('#site-header').css('background-color', 'rgba(255, 255, 255,' + opacity + ')')
    }
  });
});