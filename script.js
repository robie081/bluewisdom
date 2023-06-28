
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

  // document.getElementById('bttn').onclick = () => {
  //   document.getElementById('toggler').classList.toggle('open');
  // }

document.getElementById('bttn').addEventListener('click', () => {
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


// Toggle

// document.getElementById('bttn').addEventListener('click', () => {
document.querySelector('.nav-button').addEventListener('click', () => {
  const toggleElement = document.getElementById('toggleId');
  if(toggleElement.innerHTML === "menu") {
    toggleElement.innerHTML = "close";
  } else {
    toggleElement.innerHTML = "menu";
  }
});



// Accordion
// Arrow Functions and 'this' in ES6

const acc = document.getElementsByClassName("accordion");
console.log(acc);

// let spanmore = document.getElementsByClassName('span')[0];
// spanmore.style.border = '2px solid plum';
// let spanless = document.getElementsByClassName('span')[1];
// spanless.style.border = '2px solid green';

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // this.classList.toggle("activation");
    console.log(acc[i]);
    acc[i].classList.toggle('activation');

    // let panel = this.nextElementSibling;
    let panel = acc[i].nextElementSibling;

    // console.log(panel);

    // let span = acc[i].children;
    // let span = acc[i].children[0];
    // console.log(span);

    let spanmore = acc[i].children[0];
    let spanless = acc[i].children[1];
    console.log(spanmore);
    console.log(spanless);
  
    // spanmore.style.border = '2px solid plum';
    // spanless.style.border = '2px solid green';


    if (panel.style.display === "block") {
      panel.style.display = "none";
      spanless.classList.add('display');
      spanmore.classList.remove('display');

    } else {
      panel.style.display = "block";
      spanless.classList.remove('display');
      spanmore.classList.add('display');
    }
  });
}


// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("active");

//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }




// Pagination

// let index = 1;
// myShow(index);

// function currentSlide(n) {
//   myShow(index = n);
// }

// function myShow(n) {
//   console.log(`n ${n}`);
//   console.log(`index ${index}`);
//   let slides = document.getElementsByClassName("mySlides");

//   for (let i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   slides[index - 1].style.display = "block";
// }

// }
