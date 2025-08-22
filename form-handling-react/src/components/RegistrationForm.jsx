import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;

  // store errors in an object
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!username) {
      newErrors.username = "Username is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    // stop submission if there are validation errors
    if (Object.keys(newErrors).length > 0) {
      return;
    }

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

      {/* Username */}
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
      /><br></br>
      {errors.username && (
        <p className="text-red-500 text-sm mb-2">{errors.username}</p>
      )}

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
      /><br></br>
      {errors.email && (
        <p className="text-red-500 text-sm mb-2">{errors.email}</p>
      )}

      {/* Password */}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-2"
      /> <br></br>
      {errors.password && (
        <p className="text-red-500 text-sm mb-2">{errors.password}</p>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Register
      </button>
    </form>
  );
}
