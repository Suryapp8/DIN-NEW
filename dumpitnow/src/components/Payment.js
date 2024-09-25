import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/payment.css"; // Assuming you add some styles for the payment page

const Payment = () => {
  const location = useLocation();
  const { totalAmount } = location.state || { totalAmount: 0 };
  const [upiId, setUpiId] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();

    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
      amount: totalAmount * 100, // Amount is in currency subunits (1 INR = 100 paise)
      currency: "INR",
      name: "Dump It Now",
      description: "Payment for order",
      image: "/path/to/logo.png", // Optional: Add your logo here
      handler: function (response) {
        console.log("Payment successful:", response);
        // Optionally handle payment success (e.g., redirect or show success message)
        // You can send the response to your server for verification if needed
      },
      prefill: {
        name: "Customer Name", // Replace with actual customer name
        email: "customer@example.com", // Replace with actual customer email
        contact: "9999999999", // Replace with actual customer contact
        // You can also set the user's UPI ID here if needed
      },
      theme: {
        color: "#528FF0", // Customize the theme color
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
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
