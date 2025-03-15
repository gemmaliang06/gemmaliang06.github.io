const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);

const nextButton =  document.querySelector('.carousel__button--right');
const prevButton =  document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect().width;

// Arrange the slides next to one another
// slides[0].style.left = 0;
// slides[1].style.left = slideWidth + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';
// slides[3].style.left = slideWidth * 3 + 'px';
// slides[4].style.left = slideWidth * 4 + 'px';
// slides[5].style.left = slideWidth * 5 + 'px';

const setSlidePosition = (slide, index) => {
    slide.style.left = slideSize * index + 'px';
}
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}
// where I click left, move sliders to the left
// where I click right, move sliders to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.currentSlide');
    const nextSlide = currentSlide.nextElementSibling;
    
    moveToSlide(track, currentSlide, nextSlide);
});
// where I click the nav indicators, move to that slide
