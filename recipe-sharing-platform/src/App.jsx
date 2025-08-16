import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Layout wraps all pages that need navbar/hero/footer */}
        <Route path="/" element={<Layout />}>
          {/* This renders under the Hero on "/" */}
          <Route index element={<HomePage />} />

          {/* Other pages render without the Hero because of showHero check */}
          <Route path="recipe/:id" element={<RecipeDetail />} />
          <Route path="add-recipe" element={<AddRecipeForm />} />
        </Route>
      </Routes>
    </Router>
  );
}
