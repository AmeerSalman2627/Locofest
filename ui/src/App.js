import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Account/Login';
import Destination from './Components/Destination/Destination';
import CommonDashboard from './Components/Dashboard/CommonDashboard';
import AuthLayout from './AuthLayout';
import UserRegistration from './Components/Account/UserRegister';
import Home from './Components/Booking/Home';

function App() {
  return (
    <div className='app'>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/userRegistration" element={<UserRegistration />}></Route>
        <Route path="/destination" element={<Destination />}></Route>
        <Route element={<AuthLayout/>}>
          <Route path="/" element={<CommonDashboard />}></Route>
          <Route path="/selectContinent" element={<Destination />}></Route>
          <Route path="/travelBooking" element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
      
  );
}

export default App;
