import React from "react";
import icon from "../../public/Task.png";

function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center w-full">
      <div className="flex items-center text-lg font-semibold">
        <img src={icon} alt="Logo Icon" className="h-6 w-6 mr-2" />
        <span>Abstract</span>
        <span className="mx-2 text-gray-400">|</span>
        <span className="text-gray-400">Help Center</span>
      </div>
      <button className="bg-gray-800 border border-white hover:bg-gray-700 text-white py-2 px-4 rounded">
        Submit a request
      </button>
    </nav>
  );
}

export default Navbar;
