//constantes para el uso de ham_menu
const hamMenu = document.querySelector(".ham_menu");

const offScreenMenu = document.querySelector(".slide");

const Navbar = document.querySelector(".navbar");
//Activacion del ham_manu con el click
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  Navbar.classList.toggle("active");
});