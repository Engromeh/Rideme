import React, { useState } from "react";
import'./RideHistory.css'
import Navbar from "../../../features/Navbar/Navbar";
const RideHistory = ({ rides }) => {
  const [selectedRide, setSelectedRide] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleViewDetails = () => {
    const ride = rides.find((ride) => ride.date === selectedDate);
    if (ride) {
      setSelectedRide(ride);
    } else {
      alert("No ride found for the selected date.");
    }
  };

  return (
  <>
<Navbar/>
      <div className="container">
        <h2 className="title">Ride History</h2>
        <div className="dateSelector">
          <label htmlFor="dateInput" className="label">
            Select Date:
          </label>
          <input
            type="date"
            id="dateInput"
            value={selectedDate}
            onChange={handleDateChange}
            className="input"
          />
          <button onClick={handleViewDetails} className="button">
            View Details
          </button>
        </div>
        {selectedRide && (
          <div className="rideDetails">
            <h3 className="subtitle">Ride Details</h3>
            <p>Date: {selectedRide.date}</p>
            <p>From: {selectedRide.from}</p>
            <p>To: {selectedRide.to}</p>
            <p>Distance: {selectedRide.distance} miles</p>
            <p>Duration: {selectedRide.duration} minutes</p>
          </div>
        )}
      </div>
    </>
  );
};

const App = () => {
  const pastRides = [
    {
      date: "2024-04-20",
      from: "Home",
      to: "Work",
      distance: 10,
      duration: 30,
    },
    {
      date: "2024-04-19",
      from: "Work",
      to: "Gym",
      distance: 5,
      duration: 20,
    },
  ];

  return (
    <div>
      <RideHistory rides={pastRides} />
    </div>
  );
};

export default App;
