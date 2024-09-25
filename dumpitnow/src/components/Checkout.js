import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { firestore } from "../firebase/firebase.js";
import "../styles/checkout.css";

const Checkout = ({ cart = [] }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

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

  const totalAmount = groupedCart.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleProceedToPayment = async () => {
    console.log("Proceed to Payment clicked");
    console.log("Form Data:", formData);
    console.log("Total Amount:", totalAmount);

    try {
      await firestore.collection("orders").add({
        ...formData,
        cart: groupedCart,
        totalAmount,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
      console.log("Document successfully written!");
      navigate("/payment", { state: { totalAmount } });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
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
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            State:
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Zip Code:
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Country:
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
            />
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
