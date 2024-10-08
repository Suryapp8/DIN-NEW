import React, { useState, useCallback } from "react";
import plantDetails from "../data/plantData";
import "../styles/plants.css";

const Plant = ({ cart, setCart }) => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term

  // Function to handle adding plants to the cart
  const addToCart = useCallback(
    (plant) => {
      setCart((prevCart) => [
        ...prevCart,
        { ...plant, price: parseFloat(plant.price.replace(/[₹\s]/g, "")) },
      ]);
    },
    [setCart]
  );

  // Function to filter plants based on the selected filter and search term
  const filteredPlants = plantDetails.filter((plant) => {
    const matchesFilter =
      filter === "all" || (Array.isArray(plant.usage)
        ? plant.usage.includes(filter)
        : plant.usage === filter);
    const matchesSearch = plant.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="plants-container">
      <h2>Plants Available for Waste Exchange and Purchase</h2>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search plants..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term
          className="search-input"
        />
        <button className="search-btn">Search</button>
      </div>

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

            {/* Description Container */}
            <div className="description-overlay">
              <p className="plant-description">{plant.description}</p>
            </div>

            {/* Sunlight Container */}
            <div className="sunlight-overlay">
              <p className="plant-sunlight">
                <strong>Sunlight:</strong> {plant.sunlight}
              </p>
            </div>

            {/* Features Container */}
            <div className="features-overlay">
              <p className="plant-features">
                <strong>Features:</strong> {plant.features}
              </p>
            </div>

            <p>
              <strong>Watering:</strong> {plant.watering}
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
