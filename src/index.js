import "normalize.css";
import "./styles/main.scss";
// burger
const mobileNav = document.querySelector(".mobile-nav");
const burger = document.querySelector(".header__burger");
burger.addEventListener("click", () => {
  if (!mobileNav.classList.contains("mobile-nav-active")) {
    mobileNav.classList.add("mobile-nav-active");
    burger.innerHTML = `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.979126" y1="23.9808" x2="23.9601" y2="0.999874" stroke="#142B35" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="2.03966" y1="1.021" x2="25.0206" y2="24.002" stroke="#142B35" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        `;
  } else {
    mobileNav.classList.remove("mobile-nav-active");
    burger.innerHTML = `<svg width="30" height="17" viewBox="0 0 30 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.75" y1="1.25" x2="29.25" y2="1.25" stroke="#142B35" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="0.75" y1="8.30859" x2="29.25" y2="8.30859" stroke="#142B35" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="0.75" y1="16.25" x2="29.25" y2="16.25" stroke="#142B35" stroke-width="1.5" stroke-linecap="round"/>
      </svg>`;
  }
});
// sliders
const sliderItems = document.querySelectorAll('.section__card-item');
const dots = document.querySelectorAll('.dots-wrapper span');
const sliderItems2 = document.querySelectorAll('.slider__body-2 > div');
const dots2 = document.querySelectorAll('.dots-wrapper-slider span');

let currentIndex = 0;

function showSlide(index) {
  sliderItems.forEach((slide) => slide.classList.remove('active'));
  dots.forEach((dot) => dot.classList.remove('active'));

  if (sliderItems2.length > 0) {
    sliderItems2.forEach((slide) => slide.classList.remove('active'));
  }
  if (dots2.length > 0) {
    dots2.forEach((dot) => dot.classList.remove('active'));
  }

  const adjustedIndex = index % 3;

  sliderItems[adjustedIndex].classList.add('active');
  dots[adjustedIndex].classList.add('active');

  if (sliderItems2.length > 0) {
    sliderItems2[adjustedIndex].classList.add('active');
  }
  if (dots2.length > 0) {
    dots2[adjustedIndex].classList.add('active');
  }
}

function showNextSlide() {
  currentIndex++;
  showSlide(currentIndex);
}

setInterval(showNextSlide, 5000); // Автоматическое переключение слайдов каждые 5 секунд

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

dots2.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

showSlide(currentIndex);

//masc
const element = document.getElementById('phone');
const maskOptions = {
  mask: '000_000_0000'
};
const mask = IMask(element, maskOptions);