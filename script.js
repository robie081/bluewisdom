
// JQuery Toggle

// $(document).ready(function(){
//   $(".nav-button").click(function () {
//   $(".nav-button,.primary-nav").toggleClass("open");
//   });    
// });

// bttn.addEventListener('click', () => {
//   document.getElementById("myNav").classList.toggle('overlay');
// });


// document.addEventListener("DOMContentLoaded", function() {
  // console.log('loaded');
  // toggler.style.display = 'none';

  // bttn.onclick = () => {
  //   document.getElementById('toggler').classList.toggle('open');
  // }

bttn.addEventListener('click', () => {
  document.getElementById('toggler').classList.toggle('open');  
});

  // Font Awesome

// const hamNavBttnContainer = document.querySelector('.nav-button');
// const hamNavBttn = document.querySelector('.nav-button i');

// hamNavBttnContainer.addEventListener('click', () => {
//   hamNavBttn.classList.toggle('fa-xmark');
//   hamNavBttn.classList.toggle('fa-bars');
// });


// Google Fonts


// const hamNavBttnContainerG = document.querySelector('.nav-button');
// const hamNavBttnG = document.querySelector('.nav-button span');


// bttn.addEventListener('click', () => {
document.querySelector('.nav-button').addEventListener('click', () => {
  const toggleElement = document.getElementById('toggleId');
  if(toggleElement.innerHTML === "menu") {
    toggleElement.innerHTML = "close";
  } else {
    toggleElement.innerHTML = "menu";
  }
});


let index = 1;
myShow(index);

function currentSlide(n) {
  myShow(index = n);
}

function myShow(n) {
  console.log(`n ${n}`);
  console.log(`index ${index}`);
  let slides = document.getElementsByClassName("mySlides");

  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[index - 1].style.display = "block";
}

// }
