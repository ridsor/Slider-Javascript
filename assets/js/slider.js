let slideIndex = 0;
let dotOld = 0;
const slides = document.querySelectorAll('.img-slide');
const dot = document.querySelectorAll('.dot');
let slideOldIndex = slides[slideIndex];
let oldDot = dot[slideIndex];
slideOldIndex.style.display = 'block';
slideOldIndex.classList.add('fadeIn');
dot[slideIndex].classList.add('active');

const showSlide = (n) => {
  if (n > slides.length - 1) {
    slideIndex = 0;
  }

  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  // slideOldIndex.classList.remove('fadeIn');
  // slideOldIndex.classList.add('fadeOut');
  // dot[dotOld].innerHTML = '';

  // setTimeout(() => {
  //   dot[slideIndex].innerHTML = `<div class="active"></div>`;
  //   dotOld = slideIndex;
  //   slideOldIndex.style.display = 'none';
  //   slideOldIndex.classList.remove('fadeOut');
  //   slideOldIndex = slides[slideIndex];
  //   slides[slideIndex].classList.add('fadeIn');
  //   slides[slideIndex].style.display = 'block';
  // }, 250);

  slideOldIndex.style.display = 'none';
  oldDot.classList.remove('active');
  slideOldIndex.classList.remove('fadeIn');
  slideOldIndex = slides[slideIndex];
  oldDot = dot[slideIndex];
  dot[slideIndex].classList.add('active');
  slides[slideIndex].style.display = 'block';
  slides[slideIndex].classList.add('fadeIn');
};

const nextSlide = (n) => {
  showSlide((slideIndex += n));
};

let interval = setInterval(() => {
  nextSlide(1);
}, 5000);
let timeout;

const contentSlide = document.querySelector('.content-slide');

contentSlide.addEventListener('click', function (e) {
  clearInterval(interval);
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    interval = setInterval(() => {
      nextSlide(1);
    }, 5000);
  }, 5000);
});

const dotSlide = (n) => {
  showSlide((slideIndex = n));

  // slideIndex = n;
  // slideOldIndex.classList.remove('fadeIn');
  // slideOldIndex.classList.add('fadeOut');
  // dot[dotOld].innerHTML = '';
  // setTimeout(() => {
  //   dot[n].innerHTML = `<div class="active"></div>`;
  //   slideOldIndex.style.display = 'none';
  //   slideOldIndex.classList.remove('fadeOut');
  //   slideOldIndex = slides[n];
  //   dotOld = n;
  //   slides[n].classList.add('fadeIn');
  //   slides[n].style.display = 'block';
  // }, 250);
};
