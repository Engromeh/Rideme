import React, { useState } from "react";
import "./Riderequest.css";

const RideRequest = ({ request, onAccept, onDecline }) => {
  return (
    <div className="ride-request">
      <p>{request.passengerName} wants a ride.</p>
      <button className="Accept" onClick={() => onAccept(request.id)}>
        Accept
      </button>
      <button className="Decline" onClick={() => onDecline(request.id)}>
        Decline
      </button>
    </div>
  );
};

const RideRequests = ({ requests, onAccept, onDecline }) => {
  return (
    <div className="ride-requests">
      {requests.map((request) => (
        <RideRequest
          key={request.id}
          request={request}
          onAccept={onAccept}
          onDecline={onDecline}
        />
      ))}
    </div>
  );
};

const App = () => {
  const [rideRequests, setRideRequests] = useState([
    { id: 1, passengerName: "John Doe" },
    { id: 2, passengerName: "Jane Smith" },
  ]);

  const acceptRequest = (requestId) => {
    setRideRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === requestId ? { ...request, status: "accepted" } : request
      )
    );
  };

  const declineRequest = (requestId) => {
    setRideRequests((prevRequests) =>
      prevRequests.filter((request) => request.id !== requestId)
    );
  };

  return (
    <div className="App">
      <h1>Ride Requests</h1>
      <RideRequests
        requests={rideRequests}
        onAccept={acceptRequest}
        onDecline={declineRequest}
      />
    </div>
  );
};

export default App;
