// src/components/DeleteRecipeButton.jsx
import React from "react";
import {useRecipeStore} from "../components/recipeStore";
import {useNavigate} from "react-router-dom";

const DeleteRecipeButton = ({recipeId}) => {
  const useRecipeStoreState = useRecipeStore((state) => state); //  contains "useRecipeStore"
  const navigate = useNavigate();

  const handleDelete = () => {
    useRecipeStoreState.deleteRecipe(recipeId);
    navigate("/");
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
