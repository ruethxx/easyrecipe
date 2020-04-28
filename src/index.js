import navBar from "./js/nav_bar";
import store from "./js/dataStorage";
import fillRecipeClones from "./js/dataOutput";

// prettier-ignore
const showAllPage = "http://localhost:1234/html/show_all_recipes.html";
const addPage = "http://localhost:1234/html/add_index.html";

navBar();
if (window.location.href === showAllPage) {
  fillRecipeClones();
}
if (window.location.href === addPage) {
  store();
}
