import React from 'react';
import hjj from './images.jpeg' 
import './Home page.css'
import Navbar from '../Navbar/Navbar';
import AboutUs from '../AboutUs/AboutUs';


const HomePage = () => {
  return (
    <div>
    <Navbar/>
      <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', minHeight: 'calc(100vh - 60px)' , marginLeft :'100px' }}>
        <div style={{ width: '100%', padding: '10 20px'  , fontSize:'50px' ,  verticalAlign:"Top" , marginLeft :'350px' }}>
          <h1> Hello In RidMe </h1>
    
        </div>
        <div style={{ width: '400%', padding: '100 120px' , marginLeft :'70px'}}>
  <img src={hjj} alt="صورة تعبر عن حجز الرحلات" style={{ maxWidth: '200%', height: 'auto' }} />
</div>

      </div>
      <AboutUs />
    </div>
  );
};

export default HomePage;