const section = document.querySelector(".first-section");
const nav = document.querySelector(".nav");
const ul = document.querySelector(".nav-ul");
const hamburger = document.querySelector(".header-label div");
const menu = document.querySelector(".header-label");

nav.classList.toggle("hide-menu");
section.classList.toggle("section-close");

menu.addEventListener("click", function() {
  
  nav.classList.toggle("hide-menu");
  menu.classList.toggle("label-rotate");
  hamburger.classList.toggle("hamburger-open");
  hamburger.classList.toggle("hamburger-close");
  
})


ul.addEventListener("click", function() {

  nav.classList.toggle("hide-menu");

})