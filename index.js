var input = document.querySelectorAll(".add_new_recipe input, select");
const newRecipeform = document.getElementById("add_new_recipe");
var recipeData;

newRecipeForm.onsubmit = function () {
  var recipeData = {
    recipeName: input[0].value,
    ingredients: input[1].value,
    category: input[2].value,
    prepTime: input[3].value,
    cookTime: input[4].value,
  };
  localStorage.setItem(input[0].value, JSON.stringify(recipeData));
  dataOutput();
};

function dataOutput() {
  // clone the node of the div .box_all_recipes and append each child
  const divAllRecipes = document.querySelector(".div_all_recipes");
  var teaserAllRecipes = document.querySelectorAll(".box_all_recipes");
  for (let i = 0; i < teaserAllRecipes.length; i++) {
    var clone = teaserAllRecipes[i].cloneNode(true);
    divAllRecipes.appendChild(clone);
  }
  // fill the children with content
  const imgAllRecipes = document.querySelectorAll(".img_all_recipes");
  const h3AllRecipes = document.querySelectorAll(".h3_all_recipes");
  const prepTimeAllRecipes = document.querySelectorAll(".preparation_time");
  const cookTimeAllRecipes = document.querySelectorAll(".cooking_time");
  let valueRecipeName = JSON.parse(localStorage.getItem(input[0].value));
  let lastIndexTAR = teaserAllRecipes.length;
}
