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

//SWIPPER

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-next-mobile",
    prevEl: ".swiper-prev-mobile",
  },
  breakpoints: {
    922: {
      slidesPerView: 3,
      loop: true,
      navigation: {
        nextEl: ".swiper-next-desktop",
        prevEl: ".swiper-prev-desktop",
      },
    }
  }
});

var slider = new Swiper(".mySlider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-slider-next-mobile",
    prevEl: ".swiper-slider-prev-mobile",
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  effect: 'creative',
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  }
});