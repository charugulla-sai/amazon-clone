"strict use";

const searchEl = document.querySelector(".search");
searchEl.addEventListener("click", function () {
  searchEl.style.boxShadow = "0px 0px 2px 2px orange";
});

document.addEventListener("click", function (event) {
  if (!searchEl.contains(event.target)) {
    searchEl.style.boxShadow = "none";
  }
});

// let slider = document.querySelector(".hero-container");

// function slide() {
//   let firstSlide = slider.firstElementChild;
//   slider.appendChild(firstSlide);
//   // firstSlide.classList.remove('active');
// }

// setInterval(slide, 5000);

let slider = document.querySelectorAll(".hero-image");
let slideCount = 0;
let forward = true;

let nextSlide = () => {
  slider[slideCount].style.transform = `translateX(-${slideCount * 100}%)`;
  if (slideCount == slider.length - 1) {
    forward = false;
    slideCount -= 1;
  }
  slideCount++;
};
let prevSlide = () => {
  if (slideCount == 1) {
    forward = true;
  }
  slider[slideCount].style.transform = `translateX(${slideCount * 100}%)`;
  slideCount--;
};

setInterval(() => {
  if (forward == true) {
    nextSlide();
  } else {
    prevSlide();
  }
}, 5000);
