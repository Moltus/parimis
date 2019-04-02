let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideshow__slide");
  let dots = document.getElementsByClassName("slideshow__dot");
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;
  for (let s of slides) {
    s.style.animation = "fade-out 1.5s";
  }
  for (let d of dots) {
    d.className = d.className.replace(" active", "");
  }

  slides[slideIndex-1].style.animation = "fade-in 1.5s backwards";
  dots[slideIndex-1].className += " active";
}

function autoSlides() {
  let i;
  let slides = document.getElementsByClassName("slideshow__slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.animation = "fade-out 1.5s 1.5s forwards"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.animation = "fade-in 1.5s forwards";
  setTimeout(autoSlides, 5000); // Change image every 2 seconds
}

autoSlides();