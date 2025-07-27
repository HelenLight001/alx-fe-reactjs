import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
// other imports...

function App() {
  return (
    <Router>
      <div className="App p-4">
        <h1 className="text-2xl font-bold mb-4">Recipe Sharing App</h1>
        <SearchBar /> {/* 👈 Add this here */}
        <Routes>
          <Route path="/" element={<RecipeList />} />
          {/* your other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
