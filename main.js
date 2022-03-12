// HEADER NAV + SHOP CART 

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const cart = document.querySelectorAll('.shop-cart-mobile')
for(const i of cart){
  i.addEventListener('click', function(){
    nav.classList.toggle('show-cart')
  })
}

const cartDesktop = document.querySelectorAll('.shop-cart-desktop')
for(const o of cartDesktop){
  o.addEventListener('click', function(){
    nav.classList.toggle('show-cart')
  })
}

const links = document.querySelectorAll('.nav-item')
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
    nav.classList.remove('show-cart')
  })
}

const buttonBuy = document.querySelectorAll(' .modal-button')
for (const e of buttonBuy) {
  e.addEventListener('click', function () {
    nav.classList.remove('show-cart')
  })
}

// SLIDER
let count = 1
document.querySelector('#radio1').checked = true

function nextImage(){
  count++
  if(count>3){
    count = 1
  }

  document.querySelector('#radio' + count).checked = true
}

setInterval(function(){
  nextImage();
}, 5000)
