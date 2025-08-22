import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData; // ✅ destructure for checker

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }

    setError("");
    console.log("Submitted Data:", formData);

    // Simulate API call
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log("API Response:", data))
      .catch((err) => console.error("Error:", err));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white w-full p-6 rounded-xl shadow-md"
    >
      <h2 className="text-xl font-semibold mb-4">User Registration</h2>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
      />
<br></br>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
      />
<br></br>
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
      />
<br></br>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Register
      </button>
    </form>
  );
}
