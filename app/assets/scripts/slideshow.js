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
    s.style.display = "none";
  }
  for (let d of dots) {
    d.className = d.className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}