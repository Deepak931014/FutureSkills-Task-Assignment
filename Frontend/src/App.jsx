import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

function App() {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/cards")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching cards:", error));
  }, []);

  const filteredCards = cards.filter(card =>
    card.title && card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Separate div for SearchBar with grey background */}
      <div className="bg-gray-200 py-12">
        <div className="container mx-auto p-6">
          <h1 className="text-5xl font-bold text-center mb-12">How can we help?</h1>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </div>
      
      {/* Content Section */}
      <div className="container mx-auto p-6 flex-grow mt-12 mb-24"> {/* Added margin-bottom here */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCards.map((card) => (
            <Card key={card.id} title={card.title} description={card.description} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
