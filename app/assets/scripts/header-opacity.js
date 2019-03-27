$(document).ready(function () {
  $(window).scroll(function (event) {
    let scroll = $(this).scrollTop();
    let opacity = .5 + (scroll / 1000);
    if (opacity >= 0) {
      
      $("body").get(0).style.setProperty("--headerOpacity", opacity);
    }
  });
  
});

