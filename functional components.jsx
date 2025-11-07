import React, { useState } from "react";

const TextInput = ({ label, type = "text", value, onChange, placeholder }) => (
  <div className="mb-3">
    <label className="block font-semibold mb-1">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border border-gray-400 rounded p-2 w-full"
      required
    />
  </div>
);

const App = () => {
  // 1. Live text preview
  const [text, setText] = useState("");

  // 2. Dark/Light mode toggle
  const [darkMode, setDarkMode] = useState(false);

  // 3. Product list
  const [products] = useState([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" },
    { id: 3, name: "Headphones" },
    { id: 4, name: "Keyboard" },
  ]);

  // 5. Filter input
  const [filter, setFilter] = useState("");

  // 4. Layout toggle (grid/list)
  const [gridView, setGridView] = useState(true);

  // 7. Signup form fields
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  // 8. Validation
  const isEmailValid = /\S+@\S+\.\S+/.test(form.email);
  const isFormValid =
    form.name.trim() !== "" && isEmailValid && form.password.trim() !== "";

  // 9. Submit preview
  const [submittedData, setSubmittedData] = useState(null);

  // 10. Clear button
  const clearForm = () =>
    setForm({ name: "", email: "", password: "" });

  // Filtered products
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Dark/Light mode styles
  const themeClass = darkMode ? "bg-gray-900 text-white" : "bg-white text-black";

  return (
    <div className={`min-h-screen p-5 transition-all ${themeClass}`}>
      {/* 1. Live Preview Input */}
      <h2 className="text-xl font-bold mb-2">Live Text Preview</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        className="border p-2 rounded w-full mb-2"
      />
      <p>Preview: <strong>{text}</strong></p>

      {/* 2. Dark/Light Mode Toggle */}
      <div className="mt-4 mb-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </label>
      </div>

      {/* 5. Filter Input */}
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter products..."
        className="border p-2 rounded w-full mb-4"
      />

      {/* 4. Layout Toggle */}
      <button
        onClick={() => setGridView(!gridView)}
        className="bg-blue-600 text-white px-3 py-1 rounded mb-3"
      >
        Switch to {gridView ? "List" : "Grid"} View
      </button>

      {/* 3 & 6. Product List + Hover Highlight */}
      <div className={gridView ? "grid grid-cols-2 gap-3" : "flex flex-col gap-2"}>
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            className="border rounded p-3 hover:bg-blue-200 transition-all"
          >
            {p.name}
          </div>
        ))}
      </div>

      {/* 7–11. Signup Form */}
      <div className="mt-10 border-t pt-5">
        <h2 className="text-xl font-bold mb-3">Signup Form</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmittedData(form);
          }}
          className="max-w-sm"
        >
          <TextInput
            label="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Enter your name"
          />
          <TextInput
            label="Email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Enter your email"
          />
          <TextInput
            label="Password"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            placeholder="Enter your password"
          />

          <div className="flex gap-2 mt-3">
            <button
              type="submit"
              disabled={!isFormValid}
              className={`px-3 py-1 rounded ${
                isFormValid ? "bg-green-600 text-white" : "bg-gray-400 text-gray-700"
              }`}
            >
              Submit
            </button>
            <button
              type="button"
              onClick={clearForm}
              className="px-3 py-1 rounded bg-red-500 text-white"
            >
              Clear
            </button>
          </div>
        </form>

        {/* 9. Preview Panel */}
        {submittedData && (
          <div className="mt-4 p-3 border rounded bg-green-50">
            <h3 className="font-bold mb-2">Form Data Preview:</h3>
            <p>Name: {submittedData.name}</p>
            <p>Email: {submittedData.email}</p>
            <p>Password: {submittedData.password}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
