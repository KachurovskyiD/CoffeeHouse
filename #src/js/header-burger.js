// Header-burger

let headerBurgerMenu = document.querySelector('.header-burger__navbar');
document.addEventListener('click', (e) => {
  if (e.target.classList.contains("ham") || e.target.classList.contains("line")) {
    headerBurgerMenu.classList.toggle('hide');
  }
});