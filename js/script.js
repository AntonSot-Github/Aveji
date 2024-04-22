"use strict";

const btnMobileMenu = document.querySelector(".navigation-mobile__button");
btnMobileMenu.addEventListener("click", function () {
    document
        .querySelector(".navigation-mobile")
        .classList.toggle("margin-bottom-130px");
});
