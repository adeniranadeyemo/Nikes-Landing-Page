const nikeShoes = document.querySelector('.nshoesrow')
const nikeShoe = document.querySelector('.nshoe')
const prevButton = document.querySelector('.lbutton')
const nextButton = document.querySelector('.rbutton')

nextButton.addEventListener("click", (event) => {
  const nikeShoeWidth = nikeShoe.clientWidth;
    nikeShoes.scrollLeft += nikeShoeWidth;
});

prevButton.addEventListener("click", () => {
  const nikeShoeWidth = nikeShoe.clientWidth;
  nikeShoes.scrollLeft -= nikeShoeWidth;
});

const nShoes = document.querySelector('.nssr')
const nShoe = document.querySelector('.ns')
const prvButton = document.querySelector('.lbtn')
const nxtButton = document.querySelector('.rbtn')

nxtButton.addEventListener("click", (event) => {
  const nShoeWidth = nShoe.clientWidth;
    nShoes.scrollLeft += nShoeWidth;
});

prvButton.addEventListener("click", () => {
  const nShoeWidth = nShoe.clientWidth;
  nShoes.scrollLeft -= nShoeWidth;
});

const menu = document.querySelector('.bx-menu')
const close = document.querySelector('.close')
const nav = document.querySelector('.nav2')
const body = document.querySelector('body')

menu.addEventListener('click', () => {
  nav.classList.add('open-nav')
  body.classList.add('blur')
})

close.addEventListener('click', () => {
  nav.classList.remove('open-nav')
  body.classList.remove('blur')
})
