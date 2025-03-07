import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <div className="mb-6">
    <input
      type="text"
      placeholder="Search recipes..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded-lg"
    />
  </div>
);

export default SearchBar;
