let header = document.querySelector('.header')
      headerHeight = document.querySelector('.header').clientHeight
let main = document.querySelector('main')
console.log(headerHeight);
document.onscroll = function() {
    let scrollY = window.scrollY 
       if (scrollY > headerHeight) {
        header.classList.add('scroll_header')
        main.style.marginTop = `${headerHeight}px`
    } else{
        header.classList.remove('scroll_header')
        main.style.marginTop = `0px`
    }
}

let burger = document.querySelector('.burger_btn')
let menu = document.querySelector('.dropdown_menu')
burger.onclick = function(){
    burger.classList.toggle('toggle')
    menu.classList.toggle('open')
}

const swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    }
  });

const mobileSwiper = new Swiper('.mobile_swiper', {
    breakpoints: {
        310: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 2.5,
        },
        1024: {
            slidesPerView: 4,
        }
    },
    spaceBetween: 20,
  });

