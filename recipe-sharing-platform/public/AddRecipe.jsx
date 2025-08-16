import React, {useState} from "react";
import AddRecipeForm from "../components/AddRecipeForm";

const AddRecipePage = () => {
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
    console.log("Recipe added:", recipe);
  };

  return (
    <div className="p-4">
      <AddRecipeForm onAddRecipe={handleAddRecipe} />
    </div>
  );
};

export default AddRecipePage;
