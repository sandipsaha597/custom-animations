"use strict";

let nav = document.querySelector("nav"),
  navToggleIcon = document.querySelector(".nav-toggle-icon"),
  foreground = document.querySelector(".foreground");

let icon1 = document.querySelector(".animated-icon1");

navToggleIcon.onclick = function() {
  navToggleIcon.classList.toggle("active");
  nav.classList.toggle("active");
  foreground.classList.toggle("active");
  console.log("navToggleIcon clicked");
};
window.onclick = function(e) {
  if (e.target == foreground) {
    navToggleIcon.classList.remove("active");
    nav.classList.remove("active");
    foreground.classList.remove("active");
  }
};

//slider -start

let imgWrapper = document.querySelectorAll('.img-wrapper'),
    dots = document.querySelectorAll('.dots > div'),
    j = 0,
    k = 0

for(let j = 0, i = 0; i < imgWrapper.length; j = j + 100, i++) {
  imgWrapper[i].style.left = j + '%' // setting all the images in a row
}

for(let k = 0, i = 0; i < imgWrapper.length; k = k - 100, i++) {
  dots[i].onclick = function() {
    for(let j = k, i = 0; i < imgWrapper.length; j = j + 100, i++) {
      imgWrapper[i].style.left = j + '%' // switching the translate value of images
    }
    //dots active state switching
    for(let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active') // remove all active class
    }
    dots[i].classList.add('active') // than add active class on which is clicked
  }
}
//slider -end

// h2.style.display = 'none'

let dropdownIcon = document.querySelectorAll('ul.menu li i'),
    dropdownContent = document.querySelectorAll('ul.menu li .dd')

for(let i = 0; i < dropdownIcon.length; i++) {
  dropdownIcon[i].onclick = function() {

    if(dropdownContent[i].style.display == 'flex') {
      for(let i = 0; i < dropdownIcon.length; i++) {

        dropdownContent[i].style.display = 'none'
      }
    } else {
      for(let i = 0; i < dropdownIcon.length; i++) {
        dropdownContent[i].style.display = 'none'
      }
      dropdownContent[i].style.display = 'flex'
    }
  }
}

//parallax 

// let img1 = document.querySelector('section#one img:nth-child(1)')

// window.onscroll = function() {
//   img1.style.top = '0'
// }

$(document).ready(function() {
  $(window).scroll(function() {
    parallax()
  })
  function parallax() {
  
    var wScroll = $(window).scrollTop()
    
    $('section#one img:nth-child(1)').css('top', 150 -(wScroll*.2) + 'px')
  }
})
 

