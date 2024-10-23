import React, { useState } from "react";
import "./Booking.css";
import Navbar from "../../../features/Navbar/Navbar";

const BookingForm = ({ onBook }) => {
  const [bookingData, setBookingData] = useState({
    destination: "",
    pickupLocation: "",
    date: "",
  });

  const handleChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBook(bookingData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="destination"
        value={bookingData.destination}
        onChange={handleChange}
        placeholder="Destination"
      />
      <input
        type="text"
        name="pickupLocation"
        value={bookingData.pickupLocation}
        onChange={handleChange}
        placeholder="Pickup Location"
      />
      <input
        type="date"
        name="date"
        value={bookingData.date}
        onChange={handleChange}
      />
      <button type="submit">Book Ride</button>
    </form>
  );
};

const RideList = ({ rides, onConfirmBooking }) => {
  const [selectedRide, setSelectedRide] = useState(null);

  const handleSelectRide = (ride) => {
    setSelectedRide(ride);
  };

  const handleConfirmBooking = () => {
    onConfirmBooking(selectedRide);
  };

  return (
    <div>
      {rides.map((ride) => (
        <div key={ride.id} className="ride">
          <p>{ride.driverName}</p>
          <p>{ride.carDetails}</p>
          <p>Availability: {ride.available ? "Available" : "Not Available"}</p>
          {ride.available && (
            <div>
              <button
                className="view-profile-btn"
                onClick={() => handleSelectRide(ride)}
              >
                Book Now
              </button>
            </div>
          )}
        </div>
      ))}
      {selectedRide && (
        <div className="payment-section">
          <h2>Payment Section</h2>
          <p>Selected Ride: {selectedRide.driverName}</p>
          <button onClick={handleConfirmBooking}>Pay Now</button>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [rides, setRides] = useState([]);
  const [bookingConfirmation, setBookingConfirmation] = useState(null);

  const handleBook = (bookingData) => {};

  const handleConfirmBooking = (selectedRide) => {};

  return (
    <div>
      
      <Navbar/>

      <div className="container">
        <h1> Booking Ride</h1>
        <BookingForm onBook={handleBook} />
        <RideList rides={rides} onConfirmBooking={handleConfirmBooking} />
        {bookingConfirmation && (
          <div>
            <h2>Booking Confirmation</h2>
            <p>{bookingConfirmation.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
