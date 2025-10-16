const hamMenu = document.querySelector(".ham_menu");

const offScreenMenu = document.querySelector(".slide");

const background = document.querySelector(".background_slide");
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  background.classList.toggle("active");
});