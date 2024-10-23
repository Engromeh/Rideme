
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './component/features/login/Login';
import Ride from './component/Page/Driver/Ride/Ride' ;
import Riderequest from './component/Page/Driver/Riderequest/Riderequest';
import Singuppassenger from './component/Page/passenger/Singuppassenger/Singuppassenger'
import HomePage from './component/features/Home page/Home page';
import Appsearch from './component/Page/passenger/Appsearch/Appsearch';
import  Booking from './component/Page/passenger/Booking/Booking';
import DriverRating from './component/Page/passenger/DriverRating/DriverRating';
import Payment from './component/Page/passenger/Payment/Payment';
import RideHistory from './component/Page/passenger/RideHistory/RideHistory';
import Customers from './component/Page/Admin/Customers/Customers';
import Dashboard from './component/Page/Admin/Dashboard/Dashboard';
import Inventory from './component/Page/Admin/Inventory/Inventory';
import Orders from './component/Page/Admin/Orders/Orders';
import Register from './component/features/Register/Register';
const router = createBrowserRouter([
  {
    path: '/',
     element: <Login/>,
  },
  {
    path: '/HomePage',
    element: <HomePage />,
  },
  {
    path: '/Dashboard',
    element: <Dashboard />,
  },
  {
    path: '/Inventory',
    element: <Inventory />,
  },
  {
    path: '/Orders',
    element: <Orders/>,
  },
  {
    path: '/Customers',
    element: <Customers />,
   
  },
  {
    path: '/RideHistory',
    element: <RideHistory />,
    
  },

  {
    path: '/Ride',
    element: <Ride />,
  },
  {
    path: '/DriverRating',
    element: <DriverRating />,
  
  },
  {
    path: '/Payment',
    element: <Payment />,
 
  },
  {
    path: '/Appsearch',
    element: <Appsearch />,
  },
  {
    path:'/Booking',
    element: <Booking />,
  },

  
  {
    path:'/Singuppassenger',
    element: <Singuppassenger />,
  },
  {
    path:'/ Riderequest',
    element: <Riderequest />,
  },
  {
    path:'/Register',
    element: <Register/>,
  },
]);

function App() {
  return (
    <div>

        <RouterProvider router={router} />

    </div>
  );
}

export default App;
