const nikeShoes = document.querySelector('.nshoesrow');
const nikeShoe = document.querySelector('.nshoe');
const prevButton = document.querySelector('.lbutton');
const nextButton = document.querySelector('.rbutton');

const nShoes = document.querySelector('.nssr');
const nShoe = document.querySelector('.ns');
const prvButton = document.querySelector('.lbtn');
const nxtButton = document.querySelector('.rbtn');

const menu = document.querySelector('.bx-menu');
const close = document.querySelector('.close');
const nav = document.querySelector('.nav2');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');

nextButton.addEventListener('click', event => {
  const nikeShoeWidth = nikeShoe.clientWidth;
  nikeShoes.scrollLeft += nikeShoeWidth;
});

prevButton.addEventListener('click', () => {
  const nikeShoeWidth = nikeShoe.clientWidth;
  nikeShoes.scrollLeft -= nikeShoeWidth;
});

nxtButton.addEventListener('click', event => {
  const nShoeWidth = nShoe.clientWidth;
  nShoes.scrollLeft += nShoeWidth;
});

prvButton.addEventListener('click', () => {
  const nShoeWidth = nShoe.clientWidth;
  nShoes.scrollLeft -= nShoeWidth;
});

menu.addEventListener('click', () => {
  nav.classList.add('open-nav');
  overlay.classList.add('open-overlay');
});

close.addEventListener('click', () => {
  nav.classList.remove('open-nav');
  overlay.classList.remove('open-overlay');
});

overlay.addEventListener('click', () => {
  nav.classList.remove('open-nav');
  overlay.classList.remove('open-overlay');
});
