import React, { useState } from "react";
import User_icon from "../person.png";
import email_icon from "../email.png";
import password_icon from "../password.png";
import './Singuppassenger.css';
const Singuppassenger = () => {
  const [action, setAction] = useState();

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <img src={User_icon} alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>

      {action === "Login" && (
        <div className="forget password">
          Lost password ?{" "}
          <span onClick={() => setAction("ResetPassword")}>Click Here </span>
        </div>
      )}

      {action === "ResetPassword" && (
        <div className="forgot-password-container">
          <input type="email" placeholder="Enter your email" />
          <button onClick={() => alert("Reset password email sent")}>
            Reset Password
          </button>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submite gray" : "submite"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
        <div
          className={action === "Signup" ? "submite gray" : "submite"}
          onClick={() => {
            setAction("Signup");
          }}
        >
          Signup
        </div>
      </div>
    </div>
  );
};

export default Singuppassenger;



const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
document.head.appendChild(styleSheet);
