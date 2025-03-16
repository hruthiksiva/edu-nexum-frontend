import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) onSearch(query);
  };

  return (
    <div className="flex items-center w-full max-w-lg mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search tutors by name, domain, or language..."
      />
      <button
        onClick={handleSearch}
        className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;