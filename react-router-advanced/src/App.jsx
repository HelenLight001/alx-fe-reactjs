// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./components/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="p-4 bg-gray-200 flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/*" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
