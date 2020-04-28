const inputField = document.querySelectorAll(".recipe_input input");
const selectField = document.querySelectorAll(".recipe_input select");
const textAreaField = document.querySelectorAll(".recipe_input textarea");
const submitButton = document.querySelector(".submit_button");

function storeInput() {
  event.preventDefault();
  const recipeData = {
    recipeName: inputField[0].value,
    ingredients: inputField[1].value,
    category: selectField[0].value,
    cookTime: selectField[1].value,
    prepTime: selectField[2].value,
    instructions: textAreaField[0].value,
    addNotes: textAreaField[1].value,
  };
  localStorage.setItem(inputField[0].value, JSON.stringify(recipeData));
}

function store() {
  submitButton.addEventListener("click", storeInput);
}

export default store;
