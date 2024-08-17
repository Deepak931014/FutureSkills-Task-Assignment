import React from "react";

function Card({ title, description }) {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-300 w-full h-full">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>
      <hr className="border-gray-300 mb-4" />
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Card;
