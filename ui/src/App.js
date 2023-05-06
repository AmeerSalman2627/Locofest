import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Account/Login';
import Destination from './Components/Destination/Destination';
// import CommonDashboard from './Components/Dashboard/CommonDashboard';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/destination" element={<Destination />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
