import React, { useState, useEffect } from "react";
import "./Appsearch.css";
import Navbar from "../../../features/Navbar/Navbar";

const SearchForm = ({ onSearch }) => {
  const [searchData, setSearchData] = useState({
    destination: "",
    pickupLocation: "",
    date: "",
  });

  const handleChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="destination"
        value={searchData.destination}
        onChange={handleChange}
        placeholder="Destination"
      />
      <input
        type="text"
        name="pickupLocation"
        value={searchData.pickupLocation}
        onChange={handleChange}
        placeholder="Pickup Location"
      />
      <input
        type="date"
        name="date"
        value={searchData.date}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

const RideList = ({ rides, onViewProfile }) => {
  return (
    <div>
      {rides.map((ride) => (
        <div key={ride.id} className="ride">
          <p>{ride.driverName}</p>
          <p>{ride.carDetails}</p>
          <button
            className="view-profile-btn"
            onClick={() => onViewProfile(ride.driverId)}
          >
            View Profile
          </button>
        </div>
      ))}
    </div>
  );
};

const Profile = ({ driver }) => {
  return (
    <div className="profile">
      <img src={driver.profilePicture} alt={driver.name} />
      <h2>{driver.name}</h2>
      <p>Contact: {driver.contact}</p>
      <p>Car Details: {driver.carDetails}</p>
      <p>Rating: {driver.rating}</p>
    </div>
  );
};

const Appsearch = () => {
  const [rides, setRides] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState(null);

  useEffect(() => {
  }, []);

  const handleSearch = async (searchData) => {
    try {
    } catch (error) {
      console.error("Error searching for rides:", error);
    }
  };

  const handleViewProfile = async (driverId) => {
    try {
    } catch (error) {
      console.error("Error fetching driver profile:", error);
    }
  };

  return (
    <div>
    <Navbar/>
   

      <div className="container">
        <h1>Search Ride</h1>
        <SearchForm onSearch={handleSearch} />
        <RideList rides={rides} onViewProfile={handleViewProfile} />
        {selectedDriver && <Profile driver={selectedDriver} />}
      </div>
    </div>
  );
};

export default Appsearch;
