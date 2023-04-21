// optimize js to https://closure-compiler.appspot.com/home


// search-box open close js code
// let navbar = document.querySelector(".navbar");
// let searchBox = document.querySelector(".search-box .search-solid");
// let searchBoxCancel = document.querySelector(".search-box .times-solid");

// searchBox.addEventListener("click", ()=>{
//   navbar.classList.toggle("showInput");
//   if(navbar.classList.contains("showInput")){
//     searchBox.classList.replace("search-solid" ,"times-solid");
//   }else {
//     searchBox.classList.replace("times-solid" ,"search-solid");
//   }
// });

// // sidebar open close js code
// let navLinks = document.querySelector(".nav-links");
// let menuOpenBtn = document.querySelector(".navbar .bars-solid");
// let menuCloseBtn = document.querySelector(".nav-links .times-solid");
// menuOpenBtn.onclick = ()=> {
// navLinks.style.left = "0";
// }
// menuCloseBtn.onclick = ()=> {
// navLinks.style.left = "-100%";
// }

// // Megamenu

// let classes = [".htmlcss-arrow-automation", ".more-arrow-automation", ".htmlcss-arrow-shop", ".more-arrow-brand", ".more-arrow-protocol", ".js-arrow"];

// for (let i = 0; i < classes.length; i++) {
//   let automationArrows = document.querySelectorAll(classes[i]);

//   for (let j = 0; j < automationArrows.length; j++) {
//     automationArrows[j].onclick = () => {
//       navLinks.classList.toggle("show" + (i + 1));
//     };
//   }
// }


// // flags bar open/close
// let navFlags = document.querySelector(".sl-nav");
// // sidebar submenu open close js code
// let slnav = document.querySelector(".triangle-arrow");
// slnav.onclick = function() {
// navFlags.classList.toggle("show1");
// }


// Navbar
const navbar = document.querySelector(".navbar");
const searchBox = navbar.querySelector(".search-box .search-solid");
const searchBoxCancel = navbar.querySelector(".search-box .times-solid");

searchBox.addEventListener("click", () => {
  navbar.classList.toggle("showInput");
  searchBox.classList.toggle("search-solid");
  searchBox.classList.toggle("times-solid");
});

// Sidebar open/close
const navLinks = document.querySelector(".nav-links");
const menuOpenBtn = navbar.querySelector(".bars-solid");
const menuCloseBtn = navLinks.querySelector(".times-solid");

menuOpenBtn.addEventListener("click", () => {
  navLinks.style.left = "0";
});

menuCloseBtn.addEventListener("click", () => {
  navLinks.style.left = "-100%";
});

// Megamenu
const automationArrows = document.querySelectorAll(".htmlcss-arrow-automation, .more-arrow-automation, .htmlcss-arrow-shop, .more-arrow-brand, .more-arrow-protocol, .js-arrow");

for (let i = 0; i < automationArrows.length; i++) {
  automationArrows[i].addEventListener("click", () => {
    navLinks.classList.toggle("show" + (i + 1));
  });
}

// Flags bar open/close
const navFlags = document.querySelector(".sl-nav");
const slnav = navFlags.querySelector(".triangle-arrow");

slnav.addEventListener("click", () => {
  navFlags.classList.toggle("show1");
});
