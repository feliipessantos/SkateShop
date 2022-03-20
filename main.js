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

//SLIDER
// let count = 1
// document.querySelector('#radio1').checked = true

// function nextImage(){
//   count++
//   if(count>3){
//     count = 1
//   }

//   document.querySelector('#radio' + count).checked = true
// }

// setInterval(function(){
//   nextImage();
// }, 10000)

//SCROLL PRODUCT
const left = document.querySelectorAll(".scroll-left")
const right = document.querySelectorAll(".scroll-right")
const container = document.querySelector(".product")
const content = document.querySelector(".content")


for (const e of left){
  e.addEventListener("mousemove", function(){
    if (window.innerWidth >= 922){
      content.style.left = "5vw"
    } else {
      content.style.left = "13vw"
    }
  })
}

for (const e of right){
  e.addEventListener("mousemove", function(){
    if (window.innerWidth >= 922){
      content.style.left = "-35vw"
    } else {
      content.style.left = "-270vw"
    }
  })
}

// back to top button

const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

backToTopButton.addEventListener('click', function () {
  topFunction()
})

window.addEventListener('scroll', function () {
  backToTop()
})