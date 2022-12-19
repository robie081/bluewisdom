// function openNav() {
//     document.getElementById("mySidenav").style.width = "100%";
//   }
// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//   }

// window.onresize = function() { 
//   location.reload(); 
// }

  function openNav() {
    // document.getElementById("myNav").style.height = "100%";
    document.getElementById("myNav").style.width = "100%";
  }
  function closeNav() {
    // document.getElementById("myNav").style.height = "0%";
    document.getElementById("myNav").style.width = "0%";
  }

  // window.onresize = function() { 
  //   location.reload(); 
  // }

  // let mql = window.matchMedia('(min-width: 768px)');
  // console.log(mql);
  // console.log(mql.matches);

  // if(mql.matches) {
  //   window.onresize = function() { 
  //     location.reload(); 
  //   }
  //   document.querySelector(".open-svg").style.display = "none";
  //   // document.getElementsByClassName("head").style.display = "none";
  //   // document.querySelectorAll(".head").style.display = "none";
  //   // document.getElementById("test").innerHTML = "mere";
  //   // let test = document.getElementById("test");
  //   // test.style.display = "none";
  // } else {
  //   window.onresize = function() { 
  //     location.reload(); 
  //   }
  //   // document.getElementsByClassName("head").style.display = "none";
  //   // document.getElementById("test").style.display = "none";
  //   document.querySelector(".head").style.display = "none";
  // }




let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}