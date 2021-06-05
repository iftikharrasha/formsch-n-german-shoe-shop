const nav = document.querySelector("nav");
const burgerSvg = document.querySelectorAll("rect");
const menu = document.querySelector("ul");
const navLink = document.getElementsByClassName("navLink");

window.onresize = function (event) {
  if (window.innerWidth >= 600 && nav.className == "menuToggle") {
    nav.classList.remove("menuToggle");
    menu.classList.remove("show");
    hamburger.classList.remove("backgroundColorToggle");
    burgerSvg[0].classList.remove("top");
    burgerSvg[1].classList.remove("middle");
    burgerSvg[2].classList.remove("bottom");
  }
};

hamburger.onclick = function () {
  for (i = 0; i < navLink.length; i++) {
    navLink[i].setAttribute("tabindex", 0);
    if (nav.classList != "menuToggle") {
      navLink[i].setAttribute("tabindex", -1);
    }
  }
  nav.classList.toggle("menuToggle");
  menu.classList.toggle("show");
  hamburger.classList.toggle("backgrounColorToggle");

  burgerSvg[0].classList.toggle("top");
  burgerSvg[1].classList.toggle("middle");
  burgerSvg[2].classList.toggle("bottom");
};
