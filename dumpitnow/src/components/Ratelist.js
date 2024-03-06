import React, { useState } from "react";
import "../styles/ratelist.css";

const Ratelist = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const scrapRates = {
    Paper: {
      Newspaper: 0.1,
      Carton: 0.2,
      books: 0.3,
      Magazines: 0.15,
      "White papers": 0.25,
      "Plain paper": 0.3,
      "Used beverage carton": 0.35,
    },
    Plastic: {
      "Soft plastic": 0.2,
      "Hard plastic": 0.3,
      Polythene: 0.25,
      "Plastic jar": 0.4,
    },
    Metal: {
      Iron: 0.5,
      Tin: 0.6,
      Aluminium: 0.7,
      Steel: 0.8,
      Brass: 0.9,
      Copper: 1.0,
    },
    "E-waste": {
      Fridge: 5.0,
      "Washing machine": 3.0,
    },
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory === category ? "" : category);
  };

  return (
    <div className="container">
      <h2>Scrap Rate List : </h2>
      <div>
        {Object.keys(scrapRates).map((category) => (
          <div
            className={`category ${selectedCategory === category ? "open" : ""}`}
            key={category}
            onClick={() => handleCategoryClick(category)}
          >
            <h3>{category}</h3>
            <ul className="subcategory-list">
              {Object.entries(scrapRates[category]).map(
                ([subcategory, rate]) => (
                  <li
                    className="subcategory-item"
                    key={subcategory}
                  >
                    - {subcategory}: ₹ {rate.toFixed(2)} per Kg
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ratelist;
