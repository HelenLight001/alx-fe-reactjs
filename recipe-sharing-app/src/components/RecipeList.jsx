// src/components/RecipeList.jsx
import React from "react";
import {Link} from "react-router-dom";
import {useRecipeStore} from "../components/recipeStore";

// import {useRecipeStore} from "../recipeStore";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {filteredRecipes.map((recipe) => (
        <div
          key={recipe.id}
          className="border rounded p-4 shadow hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
          <p>{recipe.description?.slice(0, 80)}...</p>

          {/* ✅ ADD LINK TO RECIPE DETAILS OR EDIT PAGE */}
          <Link
            to={`/recipes/${recipe.id}`}
            className="text-blue-600 underline mt-2 inline-block"
          >
            View Recipe
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
