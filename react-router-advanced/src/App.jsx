// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import BlogPost from "./pages/BlogPost";   // 👈 import BlogPost

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="p-4 bg-gray-200 flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/blog/1">Blog 1</Link>
          <Link to="/blog/2">Blog 2</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/blog/:id" element={<BlogPost />} /> {/* ✅ dynamic route */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
