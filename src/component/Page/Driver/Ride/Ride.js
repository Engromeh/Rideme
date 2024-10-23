import React, { useState } from "react";
import "./Ride.css";

const rides = [
  { id: 1, date: "2024-04-01", fare: 20 },
  { id: 2, date: "2024-04-01", fare: 25 },
  { id: 3, date: "2024-04-02", fare: 15 },
  { id: 4, date: "2024-04-02", fare: 30 },
  { id: 5, date: "2024-04-02", fare: 30 },
  { id: 6, date: "2024-04-02", fare: 30 },
];

const App = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [dailyIncome, setDailyIncome] = useState(0);
  const [monthlyIncome, setMonthlyIncome] = useState(0);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const calculateDailyIncome = () => {
    const income = rides.reduce((total, ride) => {
      if (ride.date === selectedDate) {
        return total + ride.fare;
      }
      return total;
    }, 0);

    setDailyIncome(income);
  };

  const calculateMonthlyIncome = () => {
    const [year, month] = selectedDate.split("-");
    const income = rides.reduce((total, ride) => {
      const rideMonth = ride.date.split("-")[1];
      const rideYear = ride.date.split("-")[0];
      if (rideMonth === month && rideYear === year) {
        return total + ride.fare;
      }
      return total;
    }, 0);

    setMonthlyIncome(income);
  };

  return (
    <div className="App">
      <h1>Get Total Income for Rides</h1>
      <label htmlFor="date">Select Date:</label>
      <input
        type="date"
        id="date"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <button onClick={calculateDailyIncome}>Calculate Daily Income</button>
      <button onClick={calculateMonthlyIncome}>Calculate Monthly Income</button>
      {dailyIncome > 0 && (
        <div>
          <p>Total Income for {selectedDate}:</p>
          <p>${dailyIncome}</p>
        </div>
      )}
      {monthlyIncome > 0 && (
        <div>
          <p>
            Total Income for {selectedDate.split("-")[1]}/
            {selectedDate.split("-")[0]}:
          </p>
          <p>${monthlyIncome}</p>
        </div>
      )}
    </div>
  );
};

export default App;
