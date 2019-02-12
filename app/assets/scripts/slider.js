'use strict';

$(function() {

  //configuration

  let width = window.innerWidth;
  // let width = 1630
  let animationSpeed = 700;
  let pause = 4000;
  let currentSlide = 1;

  //cache DOM
  let slider = $('#slider');
  let slideContainer = $('#slides');
  let slides = slideContainer.find('.slider__slide');
  let $prev = $('#prev-btn');
  let $next = $('#next-btn');

  //setInterval > animate margin-left every 3sec
  //if it's last slide, go to position 1 (0px)

  let interval;
  let timer_active = false;
  
  function feedNext() {
    currentSlide++;
    if (currentSlide === slides.length) {
      currentSlide = 1;
      slideContainer.css('margin-left', 0);
    }
    slideContainer.animate({ 'margin-left': '-=' + width }, animationSpeed, "swing");
    slider.fadeTo(350, 0.5).fadeTo(350, 1);
  }
  
  function feedPrevious() {
    if (currentSlide !== 1) {
      currentSlide--;
      slideContainer.animate({ 'margin-left': '+=' + width }, animationSpeed, );
      slider.fadeTo(350, 0.5).fadeTo(350, 1);
    }
  }
 
  function startSlider() {
    interval = setInterval(function () {
      slider.fadeTo(500, 0.5).fadeTo(500, 1);
      slideContainer.animate({ 'margin-left': '-=' + width }, 1000, function() {
        currentSlide++;
        if (currentSlide === slides.length) {
          currentSlide = 1;
          slideContainer.css('margin-left', 0);
          
        }
      });
    }, pause);
  };

  function stopSlider() {
    clearInterval(interval);
  };

  function goNext() {
    stopSlider();
    feedNext();
  };

  function goPrevious() {
    stopSlider();
    feedPrevious();
  };
  
  //listen to mousenter and pause
  //resume on mouseleave

  // slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

  //on click for previous and next arrow buttons
  //slide left or right

  $prev.click(goPrevious);
  
  $next.click(goNext);

  startSlider();
});