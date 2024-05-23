import React, { useState } from "react";
import "../styles/ratelist.css";

const Ratelist = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const scrapRates = {
    Paper: {
      "Newspaper & books": 10,
      Carton: 8,
      "White papers , Magazines , Copy": 7,
      Tetrapack: 5,
      "Plain paper": 2,
      "Rough paper": 0,
    },
    Plastic: {
      "Soft plastic": 6,
      "Hard plastic": 1,
      Polythene: 8,
      "Mix Polythene": 5,
      "Plastic jar (15l)": 10,
      "Plastic jar (5l)": 5,
      "HPP, Water/Oil Cover": 0,
      Fiber: 4.5,
    },
    Metal: {
      Iron: 25,
      Tin: 12,
      Aluminium: 70,
      Steel: 22,
      Brass: 250,
      Copper: 240,
      "Oil Tin": 8,
      "Casin Aluminium": 35,
      "Beverages can (Aluminium)": 80,
    },
    "E-waste": {
      Fridge: 500,
      "Mix E-waste": 9,
    },
    Others: {
      "Beer Bottles": 0.5,
      "Mix waste": 3,
      Battery: 70,
      Tyre: 3,
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
            className={`category ${
              selectedCategory === category ? "open" : ""
            }`}
            key={category}
            onClick={() => handleCategoryClick(category)}
          >
            <h3>{category}</h3>
            <ul className="subcategory-list">
              {Object.entries(scrapRates[category]).map(
                ([subcategory, rate]) => (
                  <li className="subcategory-item" key={subcategory}>
                    - {subcategory}:{" "}
                    <span className="price-highlight">₹ {rate.toFixed(2)}</span>{" "}
                    per Kg
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
