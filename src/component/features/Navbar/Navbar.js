import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    const navgite =useNavigate()
  return (
   
         
    <nav className="navbar">
    <div className="nav-left">
    <ul className="nav-list">
  <button className='nav-item1' onClick={()=>navgite("/Appsearch")}>Search</button>
  <button className='nav-item2' onClick={()=>navgite("/Payment")}>Payment</button>
  <button className='nav-item3' onClick={()=>navgite("/Booking")}>Booking</button>
  <button className='nav-item4' onClick={()=>navgite("/RideHistory")}>History</button>
  <button className='nav-item4' onClick={()=>navgite("/")}>Logout</button>

  </ul>
    </div>
    </nav>

   
  )
}

export default Navbar
