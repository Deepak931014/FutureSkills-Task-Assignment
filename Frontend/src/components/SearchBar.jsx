import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai"; // Import the arrow icon

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="flex justify-center mt-6">
      <div className="relative w-full max-w-lg">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 pr-10 bg-white border border-gray-300 rounded-lg w-full focus:outline-none focus:border-gray-500 shadow-lg"
        />
        <AiOutlineArrowRight className="absolute right-3 top-3 text-gray-500 text-xl" />
      </div>
    </div>
  );
}

export default SearchBar;
