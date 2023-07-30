const nikeShoes = document.querySelector('.nshoesrow');
const nikeShoe = document.querySelector('.nshoe');
const prevButton = document.querySelector('.lbutton');
const nextButton = document.querySelector('.rbutton');

// const nBtnArray = Array.from(nextButton);

// nBtnArray.forEach(nbtn =>
//   nbtn.addEventListener('click', () => {
//     const nikeShoeWidth = nikeShoe.clientWidth;
//     nikeShoes.scrollLeft += nikeShoeWidth;
//   })
// );

nextButton.addEventListener('click', () => {
  const nikeShoeWidth = nikeShoe.clientWidth;
  nikeShoes.scrollLeft += nikeShoeWidth;
});

prevButton.addEventListener('click', () => {
  const nikeShoeWidth = nikeShoe.clientWidth;
  nikeShoes.scrollLeft -= nikeShoeWidth;
});

const nShoes = document.querySelector('.nssr');
const nShoe = document.querySelector('.ns');
const prvButton = document.querySelector('.lbtn');
const nxtButton = document.querySelector('.rbtn');

nxtButton.addEventListener('click', () => {
  const nShoeWidth = nShoe.clientWidth;
  nShoes.scrollLeft += nShoeWidth;
});

prvButton.addEventListener('click', () => {
  const nShoeWidth = nShoe.clientWidth;
  nShoes.scrollLeft -= nShoeWidth;
});

const menu = document.querySelector('.bx-menu');
const close = document.querySelector('.close');
const nav = document.querySelector('.nav2');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');

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
