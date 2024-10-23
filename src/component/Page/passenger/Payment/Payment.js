import React, { useState } from "react";

import './Payment.css'
import Navbar from "../../../features/Navbar/Navbar";

const PaymentForm = ({ onSubmit }) => {
  const [paymentData, setPaymentData] = useState({
    paymentMethod: "cash",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  });

  const handleChange = (e) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
    if (e.target.name === "paymentMethod") {
      toggleCardDetails();
      toggleCashDetails();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(paymentData);
  };

  const toggleCardDetails = () => {
    const cardDetails = document.querySelector(".card-details");
    if (paymentData.paymentMethod === "card") {
      cardDetails.style.display = "block";
    } else {
      cardDetails.style.display = "none";
    }
  };

  const toggleCashDetails = () => {
    const cashDetails = document.querySelector(".cash-details");
    if (paymentData.paymentMethod === "cash") {
      cashDetails.style.display = "block";
    } else {
      cashDetails.style.display = "none";
    }
  };

  return (
    <>
   

      <form onSubmit={handleSubmit}>
        <div className="payment-method">
          <input
            type="radio"
            id="cash"
            name="paymentMethod"
            value="cash"
            checked={paymentData.paymentMethod === "cash"}
            onChange={handleChange}
          />
          <label htmlFor="cash">Cash</label>
          <input
            type="radio"
            id="card"
            name="paymentMethod"
            value="card"
            checked={paymentData.paymentMethod === "card"}
            onChange={handleChange}
          />
          <label htmlFor="card">Card</label>
        </div>
        <div
          className="card-details"
          style={{
            display: paymentData.paymentMethod === "card" ? "block" : "none",
          }}
        >
          <input
            type="text"
            name="cardNumber"
            value={paymentData.cardNumber}
            onChange={handleChange}
            placeholder="Card Number"
          />
          <input
            type="text"
            name="expiryDate"
            value={paymentData.expiryDate}
            onChange={handleChange}
            placeholder="Expiry Date"
          />
          <input
            type="text"
            name="cvv"
            value={paymentData.cvv}
            onChange={handleChange}
            placeholder="CVV"
          />
          <input
            type="text"
            name="nameOnCard"
            value={paymentData.nameOnCard}
            onChange={handleChange}
            placeholder="Name on Card"
          />
        </div>
        <div
          className="cash-details"
          style={{
            display: paymentData.paymentMethod === "cash" ? "block" : "none",
          }}
        >
          <p>Please pay cash to the driver upon arrival.</p>
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </>

  );
};

const App = () => {
  const [paymentConfirmation, setPaymentConfirmation] = useState(null);

  const handlePayment = (paymentData) => {
   
  };

  return (
    <>
    <Navbar/>
    <div className="container">
      <h1>Ride Me App</h1>
      <PaymentForm onSubmit={handlePayment} />
      {paymentConfirmation && (
        <div>
          <h2>Payment Confirmation</h2>
          <p>{paymentConfirmation.message}</p>
        </div>
      )}
    </div>
    </>
  );
};

export default App;
