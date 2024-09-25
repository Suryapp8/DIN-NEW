import React, { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/supplyData"; // Import the products data
import "../styles/supply.css"; // Create a CSS file for styling

const SupplyPage = ({ cart, setCart }) => {
  const [addedProducts, setAddedProducts] = useState([]);

  // Function to add product to cart
  const addToCart = (product) => {
    const existingProduct = addedProducts.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      // If the product already exists in the addedProducts, increase the quantity
      setAddedProducts(
        addedProducts.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } // Increment quantity
            : item
        )
      );
    } else {
      // If it's a new product, add it with quantity set to 1
      setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);
    }

    // Add the product to the main cart with default quantity of 1 kg
    setCart((prevCart) => {
      const existingCartProduct = prevCart.find(
        (item) => item.id === product.id
      );
      if (existingCartProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }]; // Add new product with default quantity
    });
  };

  return (
    <div className="supply-page">
      <h2>Order Supplies</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-img"
            />
            <h3>{product.name}</h3>
            <p>Size: {product.Size}</p> {/* Display the size of the product */}
            <p>{product.description}</p>
            <p>Price: ₹{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Your Cart</h3>
        <ul>
          {addedProducts.map((item) => (
            <li key={item.id}>
              {item.name} x {item.quantity} kg {/* Show quantity in kg */}
            </li>
          ))}
        </ul>
        <Link to="/cart">
          <button className="checkout-btn">Proceed to Cart</button>
        </Link>
      </div>
    </div>
  );
};

export default SupplyPage;
