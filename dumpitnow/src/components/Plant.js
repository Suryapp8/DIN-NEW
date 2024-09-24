import React from "react";
import plantDetails from "../data/plantData";
import "../styles/plants.css";

const Plant = ({ cart, setCart }) => {
  // Function to handle adding plants to the cart
  const addToCart = (plant) => {
    // Add the selected plant to the cart
    setCart([...cart, plant]);
  };

  return (
    <div className="plants-container">
      <h2>Plants Available for Waste Exchange</h2>
      <div className="plants-grid">
        {plantDetails.map((plant, index) => (
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
