var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
const videos = document.querySelectorAll('.video video');
function showSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(showSlide, 3000);




videos.forEach(video => {
  video.addEventListener('play', () => {
    video.controls = true;
  });

  video.addEventListener('pause', () => {
    setTimeout(() => {
      video.controls = false;
    }, 2000);
  });

  video.addEventListener('ended', () => {
    video.controls = false;
  });
});
