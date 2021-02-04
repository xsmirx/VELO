let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header__menu");
let body = document.querySelector("body");

burger.onclick = function () {
  burger.classList.toggle("header__burger_active");
  menu.classList.toggle("header__menu_active");
  body.classList.toggle("lock");
};
