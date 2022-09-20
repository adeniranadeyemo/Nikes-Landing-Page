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
