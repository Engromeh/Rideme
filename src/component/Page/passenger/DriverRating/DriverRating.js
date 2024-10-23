import React, { useState } from "react";
import "./DriverRating.css";
import Navbar from "../../../features/Navbar/Navbar";
function DriverRating() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Rating:", rating);
    console.log("Feedback:", feedback);

    setRating(0);
    setFeedback("");
  };

  return (
    <div className="div1">
    <Navbar/>
      <h1>Rate the Driver</h1>

      <div className="div2">
        <label>Rating:</label>
        <select value={rating} onChange={handleRatingChange} className="select">
          <option value={0}>Select a rating</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>

      <div className="div3">
        <label>Feedback:</label>
        <textarea
          value={feedback}
          onChange={handleFeedbackChange}
          className="textarea"
        ></textarea>
      </div>

      <button onClick={handleSubmit} className="btn">
        Submit
      </button>
    </div>
  );
}

export default DriverRating;
