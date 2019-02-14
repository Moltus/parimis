(function(){
  $("#site-header").load("/pages/header.html");
  $("#site-footer").load("/pages/footer.html");
  $("#modals").load("/pages/modals.html");

  $.getScript("/assets/scripts/jquery-3.3.1.min.js");
  $.getScript("/assets/scripts/menus.js");
  $.getScript("/assets/scripts/header-opacity.js");
  $.getScript("/assets/scripts/slider.js");
  $.getScript("/assets/scripts/modal.js");
  $.getScript("/assets/scripts/print.js");
  
})()

