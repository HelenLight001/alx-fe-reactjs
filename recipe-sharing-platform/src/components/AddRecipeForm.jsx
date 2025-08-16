import React, {useState} from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  // validation function
  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!steps.trim()) newErrors.steps = "Preparation steps are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", {title, ingredients, steps});
      // clear form
      setTitle("");
      setIngredients("");
      setSteps("");
      setErrors({});
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
    >
      <h2 className="text-xl font-bold mb-4">Add New Recipe</h2>

      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border rounded p-2 mb-2"
      />
      {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

      <textarea
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="w-full border rounded p-2 mb-2"
      ></textarea>
      {errors.ingredients && (
        <p className="text-red-500 text-sm">{errors.ingredients}</p>
      )}

      <textarea
        placeholder="Preparation Steps"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        className="w-full border rounded p-2 mb-2"
      ></textarea>
      {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
