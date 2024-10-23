import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enterBirthday, setEnterBirthday] = useState('');

  
  const handleRegister = (e) => {
    e.preventDefault(); 

    if (firstName && lastName && email && password && enterBirthday) {
      navigate('/');
    } else {
      alert('Please fill in all fields'); 
    }
  };

  return (



    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h1>Register Form</h1>
        
        <label> Name</label>
        <input
          type="text"
          placeholder='First Name'
          className="input-field"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        
        
        
        <label>Email</label>
        <input
          type="text"
          placeholder='Email'
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <label>EnterBirthday</label>
        <input
          type="date"
          className="input-field"
          value={enterBirthday}
          onChange={(e) => setEnterBirthday(e.target.value)}
        />
        
        <button type="submit" className="register-btn">Register</button>
        <button   className="register-btn" onClick={()=>navigate("/")}>Back</button>
      </form>
    </div>
  );
};

export default Register;
