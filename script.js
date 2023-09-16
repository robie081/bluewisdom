
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

// My Working Way -- Before Integration

// const acc = document.getElementsByClassName("accordion");
// console.log(acc);

// // let spanmore = document.getElementsByClassName('span')[0];
// // spanmore.style.border = '2px solid plum';
// // let spanless = document.getElementsByClassName('span')[1];
// // spanless.style.border = '2px solid green';

// for (let i = 0; i < acc.length; i++) {

//   acc[i].addEventListener("click", function() {
//     // this.classList.toggle("activation");
//     console.log(acc[i]);
//     acc[i].classList.toggle('activation');

//     // let panel = this.nextElementSibling;
//     let panel = acc[i].nextElementSibling;

//     // console.log(panel);

//     // let span = acc[i].children;
//     // let span = acc[i].children[0];
//     // console.log(span);

//     let spanmore = acc[i].children[0];
//     let spanless = acc[i].children[1];
//     console.log(spanmore);
//     console.log(spanless);
  
//     // spanmore.style.border = '2px solid plum';
//     // spanless.style.border = '2px solid green';


//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//       spanless.classList.add('display');
//       spanmore.classList.remove('display');

//     } else {
//       panel.style.display = "block";
//       spanless.classList.remove('display');
//       spanmore.classList.add('display');
//     }
//   });
// }


// Official W3Schools

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

// After Integration

const accordion = document.querySelector('.accordion');
const items = accordion.querySelectorAll('.accordion__item');

const toggle_item = (item) => {
  const body = item.querySelector('.accordion__body');

  // activation
  const title = item.querySelector('.accordion__title');
  // // console.log(title);
  title.classList.toggle('activation');
  // console.log(item.classList.contains('is-open'));
  if (item.classList.contains('is-open')) {
      body.removeAttribute('style');
      item.classList.remove('is-open');
  } else {
      body.style.height = body.scrollHeight + 'px';
      item.classList.add('is-open');
  }
}

const toggle_arrow = (item) => {
  const title = item.querySelector('.accordion__title');
  // console.log(title);
  // console.log(title.children[0]);
  // console.log(title.children[1]);
  let spanmore = title.children[0];
  let spanless = title.children[1];

  if (spanless.classList.contains('display')) {
      spanless.classList.remove('display');
      spanmore.classList.add('display');
  } else {
      spanless.classList.add('display');
      spanmore.classList.remove('display');
  }
}

items.forEach((item, index) => {
  // console.log(item);
  const title = item.querySelector('.accordion__title');
  // console.log(title);

  if (index === 0) {
      toggle_item(item);
  }

  title.addEventListener('click', (e) => {
      toggle_item(item);
      toggle_arrow(item);
  });
});



