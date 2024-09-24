import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/checkout.css"; // Assuming you add some styles for the checkout page

const Checkout = ({ cart = [] }) => {
  const navigate = useNavigate();

  // Group the cart items by name and calculate their quantities
  const groupedCart = cart.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.name === item.name);
    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.totalPrice += item.price;
    } else {
      acc.push({ ...item, quantity: 1, totalPrice: item.price });
    }
    return acc;
  }, []);

  // Calculate the total amount
  const totalAmount = groupedCart.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  const handleProceedToPayment = () => {
    navigate("/payment", { state: { totalAmount } });
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <div className="cart-summary">
        <h3>Cart Summary</h3>
        <ul className="cart-items">
          {groupedCart.map((item, index) => (
            <li key={index} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>
                  <strong>Price:</strong> ₹{item.price} x {item.quantity} = ₹
                  {item.totalPrice}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="cart-total">
          <h3>Total Amount: ₹{totalAmount}</h3>
        </div>
      </div>

      <div className="address-form">
        <h3>Shipping Address</h3>
        <form>
          <label>
            Full Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Address:
            <input type="text" name="address" required />
          </label>
          <label>
            City:
            <input type="text" name="city" required />
          </label>
          <label>
            State:
            <input type="text" name="state" required />
          </label>
          <label>
            Zip Code:
            <input type="text" name="zip" required />
          </label>
          <label>
            Country:
            <input type="text" name="country" required />
          </label>
          <button
            type="button"
            className="proceed-payment-btn"
            onClick={handleProceedToPayment}
          >
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
