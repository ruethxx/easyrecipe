const navigationButton = document.querySelector(".nav_button");
const navMenuContainer = document.querySelector(".nav_menu_container");
const navMenuRecipes = document.querySelector(".nav_menu_recipes");

let open = false;

function navBar() {
  navigationButton.addEventListener("click", toggleNavBar);
}

function toggleNavBar() {
  event.preventDefault();
  open = !open;
  if (open) {
    navMenuContainer.style.display = "block";
    navMenuRecipes.style.display = "flex";
  } else {
    navMenuContainer.style.display = "none";
    navMenuRecipes.style.display = "none";
  }
}

export default navBar;
