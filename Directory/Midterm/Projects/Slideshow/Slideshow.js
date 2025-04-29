function getQueryParam(param) {
  let urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

let slideIndex = parseInt(getQueryParam('img')) || 1;
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
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  let typewriterSpan = slides[slideIndex - 1].querySelector(".typewriter");
if (typewriterSpan) {
  let originalText = typewriterSpan.getAttribute("data-original");
  if (!originalText) {
    originalText = typewriterSpan.textContent;
    typewriterSpan.setAttribute("data-original", originalText);
  }
  typewriterEffect(typewriterSpan, originalText);
}

}

function typewriterEffect(el, text, speed = 50) {
  el.innerHTML = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}