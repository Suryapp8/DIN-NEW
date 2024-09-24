import React, { useState } from "react";
import plantDetails from "../data/plantData";
import "../styles/plants.css";

const Plant = ({ cart, setCart }) => {
  const [filter, setFilter] = useState("all");

  // Function to handle adding plants to the cart
  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  // Function to filter plants based on the selected filter
  const filteredPlants = plantDetails.filter((plant) => {
    if (filter === "all") return true;
    return plant.usage === filter;
  });

  return (
    <div className="plants-container">
      <h2>Plants Available for Waste Exchange</h2>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("indoor")}>Indoor</button>
        <button onClick={() => setFilter("outdoor")}>Outdoor</button>
      </div>

      <div className="plants-grid">
        {filteredPlants.map((plant, index) => (
          <div key={index} className="plant-card">
            <img src={plant.image} alt={plant.name} className="plant-image" />
            <h3>{plant.name}</h3>
            <p>{plant.description}</p>
            <p>
              <strong>Sunlight:</strong> {plant.sunlight}
            </p>
            {plant.plantHeight && (
              <p>
                <strong>Plant Height:</strong> {plant.plantHeight}
              </p>
            )}
            <p>
              <strong>Price:</strong> ₹{plant.price}
            </p>

            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart(plant)}
              className="add-to-cart-btn"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plant;
