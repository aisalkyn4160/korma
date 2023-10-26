let header = document.querySelector('.header')
      headerHeight = document.querySelector('.header').clientHeight
let dropdownDiv = document.querySelector('.dropdown_bg')
document.onscroll = function() {
    let scrollY = window.scrollY

    if (scrollY > headerHeight) {
        header.classList.add('scroll_header')
        // document.body.style.paddingTop = headerHeight + 'px'
    } else{
        header.classList.remove('scroll_header')
        // document.body.removeAttribute('style')
    }
}

let burger = document.querySelector('.burger_btn')
let menu = document.querySelector('.nav_menu')
burger.onclick = function(){
    burger.classList.toggle('toggle')
    menu.classList.toggle('open')
    dropdownDiv.classList.toggle('bg_open')
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
            slidesPerView: 4.2,
        }
    },
    slidesPerGroup: 2,
  });

