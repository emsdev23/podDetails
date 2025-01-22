import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Ceetlogo from "./Images/Ceet.png";
import PODDetailsPage1 from './PODDashboard/PODDetailsPage1';
import PODAnalytics from './PODDashboard/PODAnalytics';
import PODPowerEnergy from './PODDashboard/PODPowerEnergy';
import LiveTrack from './PODDashboard/LiveTrack';




function App() {

 


  return (
    <Router>
      <div className="App">
        {/* Header Section */}
        <div style={{ display: "flex", justifyContent: "space-between", margin: "0px 30px", color: "#495057" }}>
          <Link to="/" style={{textDecoration:"none"}}>
            <div>
              <h1 className="heading" style={{ textAlign: "center", fontSize: "38px", fontWeight: 800, marginTop: '20px', color: "#e8590c" }}>
                <span style={{ color: "#343a40" }}>HASH</span>TIC
              </h1>
            </div>
          </Link>
          <img src={Ceetlogo} width="160px" alt="Logo" />
        </div>

        <br />

        {/* Routes Section */}
        <Routes>
          <Route path="/" element={<PODDetailsPage1 />} />
          <Route path="/pod/analytics" element={<PODAnalytics />} />
          <Route path="/pod/powerEnergy" element={<PODPowerEnergy />} />
          <Route path="/pod/LiveTrack" element={<LiveTrack />} />
          
          
        </Routes>


       
      </div>
    </Router>
  );
}

export default App;
