import React, {useState} from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !ingredients || !steps) {
      setError("Please fill in all fields");
      return;
    }
    setError("");
    console.log({title, ingredients, steps});
    // You can hook this to your recipes state or API call
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white shadow rounded-md space-y-4"
    >
      <h2 className="text-xl font-bold">Add New Recipe</h2>
      {error && <p className="text-red-500 text-sm">{error}</p>}

      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <textarea
        placeholder="Ingredients (separate with commas)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <textarea
        placeholder="Preparation Steps"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}
