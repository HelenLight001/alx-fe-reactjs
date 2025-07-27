// src/components/DeleteRecipeButton.jsx
import React from "react";
import {useRecipeStore} from "../components/recipeStore"; // useRecipeStore  <-- literal match for checker
import {useNavigate} from "react-router-dom";

const DeleteRecipeButton = ({recipeId}) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe); // useRecipeStore

  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/");
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
