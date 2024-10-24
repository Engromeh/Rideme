import React, { useState } from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();    

  const handlelogin = () => {
    if(email.endsWith("@user.com") && password){
    
    navigate('/HomePage');
    }
    else if(email.endsWith("@admin.com")&& password){
    navigate('/Dashboard');
    }else if(email.endsWith("@driver.com") && password){
  
      navigate('/HomePage');
    }else{
      alert('email in valid state');
     
    }
    }
  

  return (
    <>
      <div className="login-container">
        <div className='from-box login'>
          <form className="login-form" onSubmit={handlelogin}>
            <h1>Login</h1>
            
            <div className='input-box'>
              <input 
                type="text" 
                placeholder='ROMeh@gmail.com' 
                required 
                className="input-field"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            
            <div className='input-box'>
              <input 
                type="password" 
                placeholder='pass' 
                required 
                value={password}
                className="input-field"
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>

            <div className='forget'>
              <a href='#'>Forget password?</a>
            </div>

            <button type='submit' className="login-btn" >Login</button>

            <div className='register'>
              <p>Don't have an account? <a href='/Register'>Register</a></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
