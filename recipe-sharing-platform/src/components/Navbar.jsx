import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <Link to="/" className="text-2xl font-bold">
          🍴 DishCircle
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-yellow-300">
            Home
          </Link>
          <Link to="/add-recipe" className="hover:text-yellow-300">
            Add Recipe
          </Link>
        </div>
      </div>
    </nav>
  );
}
