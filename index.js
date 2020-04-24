import { divAllRecipes } from "./js/dataOutput.js";
console.log(divAllRecipes);

const allRecipes = document.querySelectorAll(".div_all_recipes");
console.log(allRecipes);

function showFish() {
  allRecipes.style.display = "none";
}
