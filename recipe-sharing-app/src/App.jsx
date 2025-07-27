// src/App.jsx
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm"; // ✅ Required Import
import RecipeDetails from "./components/RecipeDetails"; // ✅ Required Import
import EditRecipeForm from "./components/EditRecipeForm";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import FavoriteToggle from "./components/FavoriteToggle";

function App() {
  return (
    <Router>
      <div className="p-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Recipe Sharing App
        </h1>

        <SearchBar />

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
          <Route path="/favoritetoggle" element={<FavoriteToggle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
