const hamburger = document.querySelector(".hamburgerBar");
const navMenuAtivo = document.querySelector(".navMenu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenuAtivo.classList.toggle("active");
}

const navLinkAtivo = document.querySelectorAll(".navLink");

navLinkAtivo.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenuAtivo.classList.remove("active");
}