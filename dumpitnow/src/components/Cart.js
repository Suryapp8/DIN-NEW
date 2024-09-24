import React from "react";
import { Link } from "react-router-dom";
import "../styles/cart.css"; // Assuming you add some styles for the cart page

const Cart = ({ cart, setCart }) => {
  // Function to handle item removal from cart
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart); // Update the cart after removing the item
  };

  // Calculate the total amount
  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>
                    <strong>Price:</strong> ₹{item.price}
                  </p>
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>

          {/* Display the total amount */}
          <div className="cart-total">
            <h3>Total Amount: ₹{totalAmount}</h3>
          </div>
        </>
      )}

      {/* Button to continue shopping */}
      <Link to="/plant">
        <button className="continue-shopping-btn">Continue Shopping</button>
      </Link>

      {/* Proceed to Checkout button */}
      {cart.length > 0 && (
        <Link to="/checkout">
          <button className="proceed-checkout-btn">Proceed to Checkout</button>
        </Link>
      )}
    </div>
  );
};

export default Cart;
