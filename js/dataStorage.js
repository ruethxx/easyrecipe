const inputField = document.querySelectorAll(".recipe_input input");
const selectField = document.querySelectorAll(".recipe_input select");
const textAreaField = document.querySelectorAll(".recipe_input textarea");
const submitButton = document.querySelector(".submit_button");

submitButton.addEventListener("click", storeInput);

// This function sets one item to the local storage whenever the submit button is clicked.
//Becasue we have several inputs we need to store everything as an object which I named recipeData.
//We need JSON.stringify to convert the object into a string so that it can be stored.
//event.preventDefault prevents default behviour. In the case of submit buttons it prevens scrolling to the top.
function storeInput() {
  event.preventDefault();
  var recipeData = {
    recipeName: inputField[0].value,
    ingredients: inputField[1].value,
    category: selectField[0].value,
    cookTime: selectField[1].value,
    prepTime: selectField[2].value,
    instructions: textAreaField[0].value,
    addNotes: textAreaField[1].value,
  };
  localStorage.setItem(inputField[0].value, JSON.stringify(recipeData));
  cloneRecipe();
}
