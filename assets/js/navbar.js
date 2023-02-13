// optimize js to https://closure-compiler.appspot.com/home


// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .fa-search");
let searchBoxCancel = document.querySelector(".search-box .fa-times");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("fa-search" ,"fa-times");
  }else {
    searchBox.classList.replace("fa-times" ,"fa-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .fa-bars");
let menuCloseBtn = document.querySelector(".nav-links .fa-times");
menuOpenBtn.onclick = ()=> {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = ()=> {
navLinks.style.left = "-100%";
}

// Megamenu

let classes = [".htmlcss-arrow-automation", ".more-arrow-automation", ".htmlcss-arrow-shop", ".more-arrow-brand", ".more-arrow-protocol", ".js-arrow"];

for (let i = 0; i < classes.length; i++) {
  let automationArrows = document.querySelectorAll(classes[i]);

  for (let j = 0; j < automationArrows.length; j++) {
    automationArrows[j].onclick = () => {
      navLinks.classList.toggle("show" + (i + 1));
    };
  }
}


// flags bar open/close
let navFlags = document.querySelector(".sl-nav");
// sidebar submenu open close js code
let slnav = document.querySelector(".triangle-arrow");
slnav.onclick = function() {
navFlags.classList.toggle("show1");
}
