const button = document.querySelector('.bars__menu')
const nav    = document.querySelector('.nav')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})
document.querySelector(".bars__menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
}

var header = document.getElementById("parallax-header");

var bg = header.querySelector(".bg");

var content = header.querySelector(".content");

function parallax() {
  var scroll = window.pageYOffset;


  bg.style.transform = "translateY(" + scroll * 0.5 + "px)";


  content.style.transform = "translateY(" + scroll * 0.5 + "px)";
}

window.addEventListener("scroll", parallax);

const navigation = document.querySelector(".navigation")
document.querySelector(".toggle").onclick=function(){
    this.classList.toggle("active")
    navigation.classList.toggle("active")
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var header = document.querySelector(".header");
  var boton = document.querySelector(".navigation");
  if (window.pageYOffset > 1000) {
    header.classList.add("slideUphead");
    boton.classList.add("slideUpnavigation");
  } else {
    header.classList.remove("slideUphead");
    boton.classList.remove("slideUpnavigation");
  }
}
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
  

  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  function scrollAnimation(selector) {
    let el = document.querySelector(selector);
  
    let observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting) {
          el.classList.add("scale-up-horizontal-left-animation");
          observer.disconnect();
        }
      },
      {
        threshold: 0.01, 
      }
    );
  
    observer.observe(el);
  }
  
  scrollAnimation("#empieza");
  function playVideo() {
    var video = document.getElementById("video");
    video.autoplay = true;
    video.play();
  }
  
  function scrollAnimation(selector) {
    let el = document.querySelector(selector);
  
    let observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting) {
          el.classList.add("slide-in-animation");
          observer.disconnect();
        }
      },
      {

        threshold: 0.001, 
      }
    );
  
    observer.observe(el);
  }
  
  scrollAnimation("#cajagrande2");
  
var cards = document.querySelectorAll(".carta");

for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseover", function () {
    this.classList.add("card-hover");
  });

  cards[i].addEventListener("mouseout", function () {
    this.classList.remove("card-hover");
  });
}
