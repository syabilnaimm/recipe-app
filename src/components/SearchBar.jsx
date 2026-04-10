import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
      <input
        type="text"
        placeholder="Enter ingredients (e.g. chicken, rice)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 border border-slate-300 rounded w-64 bg-white text-slate-900 placeholder-slate-400"
      />

      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Search
      </button>
    </form>
  );
}
