import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import "../styles/payment.css"; // Assuming you add some styles for the payment page

const Payment = () => {
  const location = useLocation();
  const { totalAmount } = location.state || { totalAmount: 0 };

  const [upiId, setUpiId] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();
    // Here you would call your payment gateway API
    console.log("Payment initiated with UPI ID:", upiId);
    // Add your payment gateway integration logic here
  };

  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <div className="payment-summary">
        <h3>Total Amount: ₹{totalAmount}</h3>
      </div>
      <form onSubmit={handlePayment} className="payment-form">
        <label>
          UPI ID:
          <input
            type="text"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="pay-button">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;
