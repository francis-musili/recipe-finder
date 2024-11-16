document.addEventListener("DOMContentLoaded", () => {
    const recipesSection = document.querySelector(".recipes-section");

    recipesSection.addEventListener("click", (e) => {
        if (e.target.classList.contains("preview-button")) {
            const recipeName = e.target.previousElementSibling.previousElementSibling.textContent;
            const recipe = recipes.find(r => r.name === recipeName);

            if (recipe) {
                console.log(recipe);
                alert(`
                    Recipe: ${recipe.name}\n
                    Description: ${recipe.description}\n
                    Ingredients: ${recipe.ingredients.join(", ")}\n
                    Steps: ${recipe.steps.join("\n")}
                `);
            }
        }
    });
});


const searchButton = document.querySelector(".search-button");
const searchBar = document.querySelector(".search-bar");

searchButton.addEventListener("click", () => {
    const searchTerm = searchBar.value.toLowerCase();  
    const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm));

    updateRecipeSection(filteredRecipes);
});

function updateRecipeSection(filteredRecipes) {
    const recipesSection = document.querySelector(".recipes-section");
    recipesSection.innerHTML = "";  

    filteredRecipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
        
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
            <button class="preview-button">Preview</button>
            <button class="save-button">Save</button>
        `;
        recipesSection.appendChild(recipeCard);
    });
}
