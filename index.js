const body = document.querySelector('body');
//
const nikeShoesCon = document.querySelector('.nshoesrow');
const carouselInner = document.querySelector('.carousel-inner');
const nikeShoes = document.querySelectorAll('.nshoe');
const prevButtons = document.querySelectorAll('.lbutton');
const nextButtons = document.querySelectorAll('.rbutton');
const carousels = document.querySelectorAll('.carousel-inner');
//
const nikeShoesArray = Array.from(nikeShoes);
const prevButtonsArray = Array.from(prevButtons);
const nextButtonsArray = Array.from(nextButtons);
const carouselsArray = Array.from(carousels);
//
const nShoes = document.querySelector('.nssr');
const nShoe = document.querySelector('.ns');
//
const menu = document.querySelector('.bx-menu');
const close = document.querySelector('.close');
const nav = document.querySelector('.nav2');
const overlay = document.querySelector('.overlay');
//

nextButtonsArray.forEach((nextButton, index) => {
  nextButton.addEventListener('click', function () {
    const carousel = carouselsArray[index];
    const shoe = nikeShoesArray[0];

    const nikeShoeWidth = shoe.clientWidth;
    carousel.scrollLeft += nikeShoeWidth;
  });
});

prevButtonsArray.forEach((prevButton, index) => {
  prevButton.addEventListener('click', function () {
    const carousel = carouselsArray[index];
    const shoe = nikeShoesArray[0];

    const nikeShoeWidth = shoe.clientWidth;
    carousel.scrollLeft -= nikeShoeWidth;
  });
});

const openNav = function () {
  nav.classList.add('open-nav');
  overlay.classList.add('open-overlay');
};

const closeNav = function () {
  nav.classList.remove('open-nav');
  overlay.classList.remove('open-overlay');
};

menu.addEventListener('click', openNav);
close.addEventListener('click', closeNav);
overlay.addEventListener('click', closeNav);
