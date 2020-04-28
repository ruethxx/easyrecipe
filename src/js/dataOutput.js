const divAllRecipes = document.querySelector(".white_container");
const blancTeaser = document.querySelector(".div_all_recipes");
const recipeDataOutput = []; // this variable is defined as an array outside the for loops so that it has global scope and it can be used in both for loops.

function fillRecipeClones() {
  // clone empty recipe teaser: Make a clone for each stored recipe. The number of stored recipes we get via: localStorage.length
  for (let i = 0; i < localStorage.length; i += 1) {
    const clone = blancTeaser.cloneNode(true); // The div container blancTeaser is cloned including all its children.
    divAllRecipes.appendChild(clone); // The clones append to the div container behind divAllRecipes.
  }

  // read local storage
  for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i); // for each recipe that we store a key is set with which we can recognize the recipe. The keys are listed in an array and they can be called by their index number.
    recipeDataOutput[i] = JSON.parse(localStorage.getItem(key)); // getItem() returns the object we have stored with all the input data when submitting the form. JSON.parse() is needed to convert the stored data so that we can read it.
  }

  // fill each clone with content

  for (let i = 0; i < localStorage.length; i += 1) {
    const allTeaser = document.querySelectorAll(".box_all_recipes"); // select all new containers which we have just cloned
    const outputTags = allTeaser[i].children; // select the children of the cloned div containers. Children are here: img, h3, p, p
    outputTags[1].innerHTML = recipeDataOutput[i].recipeName;
    outputTags[2].innerHTML = `Cooking time: ${recipeDataOutput[i].cookTime} min`;
    outputTags[3].innerHTML = `Preparation time: ${recipeDataOutput[i].prepTime} min`;
    outputTags[4].innerHTML = `View more details`;

    // select the source of the image depending on the category. Add an alt category for accessability reasons.
    if (recipeDataOutput[i].category === "fish") {
      outputTags[0].src = "../img/fish.png";
      outputTags[0].alt = "fish";
    }
    if (recipeDataOutput[i].category === "meat") {
      outputTags[0].src = "../img/pork.png";
      outputTags[0].alt = "meat";
    }
    if (recipeDataOutput[i].category === "veggie") {
      outputTags[0].src = "../img/tomatoe.png";
      outputTags[0].alt = "veggie";
    }
    if (recipeDataOutput[i].category === "desert") {
      outputTags[0].src = "../img/desert.png";
      outputTags[0].alt = "desert";
    }
  }
}

export default fillRecipeClones;
