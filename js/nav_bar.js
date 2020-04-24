const navigationButton = document.querySelector(".nav_button");
const navMenuContainer = document.querySelector(".nav_menu_container");
const navMenuRecipes = document.querySelector(".nav_menu_recipes");

const recipesLink = document.querySelector(".recipes_link");

let openMenu = false;
let openRecipesList = false;

navigationButton.addEventListener("click", toggleNavBar);

function toggleNavBar() {
  event.preventDefault();
  openMenu = !openMenu;
  if (openMenu) {
    navMenuContainer.style.display = "block";
    openRecipesList = false;
  } else {
    navMenuContainer.style.display = "none";
  }

  recipesLink.addEventListener("click", toggleRecipes);

  function toggleRecipes() {
    openRecipesList = !openRecipesList;
    if (openRecipesList) {
      navMenuRecipes.style.display = "flex";
    } else {
      navMenuRecipes.style.display = "none";
    }
  }
}
