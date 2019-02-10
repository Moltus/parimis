'use strict';

$(function() {

  //configuration

  let width = 720;
  let animationSpeed = 1000;
  let pause = 4000;
  let currentSlide = 1;

  //cache DOM
  let $slider = $('#slider');
  let $slideContainer = $('#slides');
  let $slides = $slideContainer.find('.slider__slide');

  //setInterval > animate margin-left every 3sec
  //if it's last slide, go to position 1 (0px)

  let interval;

  function startSlider() {
    interval = setInterval(function () {
      $slideContainer.animate({ 'margin-left': '-=' + width }, animationSpeed, function () {
        currentSlide++;
        if (currentSlide === $slides.length) {
          currentSlide = 1;
          $slideContainer.css('margin-left', 0);
        }
      });
    }, pause);
  };

  function stopSlider() {
    clearInterval(interval);
  }
  
  //listen to mousenter and pause
  //resume on mouseleave

  $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
  



  
});