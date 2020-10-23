let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("model-name");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}
// ------------------------------------------------

let amenitieIndex = 1;
showAmenities(amenitieIndex);

function plusAmenities(n) {
  showAmenities(amenitieIndex += n);
}

function currentAmenitie(n) {
  showAmenities(amenitieIndex = n);
}

function showAmenities(n) {
  let i;
  let amenitiesSlides = document.getElementsByClassName("amenitie-slide");
  if (n > amenitiesSlides.length) {amenitieIndex = 1}
  if (n < 1) {amenitieIndex = amenitiesSlides.length}
  for (i = 0; i < amenitiesSlides.length; i++) {
    amenitiesSlides[i].style.display = "none";
  }
  amenitiesSlides[amenitieIndex-1].style.display = "flex";
}