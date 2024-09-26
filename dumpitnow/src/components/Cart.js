import React from "react";
import { Link } from "react-router-dom";
import "../styles/cart.css"; // Assuming you have some styles for the cart page

const Cart = ({ cart, setCart }) => {
  // Group the cart items by name and calculate their quantities
  const groupedCart = cart.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.name === item.name);
    const itemPrice =
      typeof item.price === "string"
        ? parseFloat(item.price.replace(/[₹\s]/g, ""))
        : item.price;
    if (existingItem) {
      existingItem.quantity += 1; // Increment quantity
      existingItem.totalPrice += itemPrice; // Update totalPrice
    } else {
      acc.push({ ...item, quantity: 1, totalPrice: itemPrice }); // Initialize totalPrice
    }
    return acc;
  }, []);

  // Function to increase the quantity of an item
  const increaseQuantity = (name) => {
    const updatedCart = cart.map((item) => {
      if (item.name === name) {
        return { ...item }; // Add it again to update quantity
      }
      return item;
    });
    setCart([...updatedCart, { ...cart.find((item) => item.name === name) }]); // Push a new instance to cart
  };

  // Function to decrease the quantity of an item
  const decreaseQuantity = (name) => {
    const updatedCart = cart.filter((item, index) => {
      return (
        item.name !== name || index !== cart.findIndex((i) => i.name === name)
      );
    });
    setCart(updatedCart); // Remove one instance of the item
  };

  // Function to handle item removal from cart
  const removeFromCart = (name) => {
    const updatedCart = cart.filter((item) => item.name !== name);
    setCart(updatedCart);
  };

  // Calculate the total amount
  const totalAmount = groupedCart.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {groupedCart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {groupedCart.map((item, index) => (
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
                    <strong>Price:</strong> ₹{item.price} x {item.quantity} = ₹
                    {item.totalPrice.toFixed(2)} {/* Display totalPrice */}
                  </p>

                  {/* Quantity controls */}
                  <div className="quantity-controls">
                    <button
                      onClick={() => decreaseQuantity(item.name)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.name)}>
                      +
                    </button>
                  </div>

                  <button onClick={() => removeFromCart(item.name)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Display the total amount */}
          <div className="cart-total">
            <h3>Total Amount: ₹{totalAmount.toFixed(2)}</h3>
          </div>
        </>
      )}

      {groupedCart.length > 0 && (
        <Link to="/checkout">
          <button className="proceed-checkout-btn">Proceed to Checkout</button>
        </Link>
      )}

      {/* Button to continue shopping */}
      <Link to="/plant">
        <button className="continue-shopping-btn">Continue Shopping</button>
      </Link>

      {/* Proceed to Checkout button */}
    </div>
  );
};

export default Cart;
