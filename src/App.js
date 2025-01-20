import './App.css';

import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Ceetlogo from "./Images/Ceet.png"



import PODDetailsPage1 from './PODDashboard/PODDetailsPage1';
import PODAnalytics from './PODDashboard/PODAnalytics';


function App() {

  return (
    <div className='App'  >
      
      <div style={{display:"flex",justifyContent:"space-between",margin:"0px 30px",color:"#495057"}}> 
    <div>
    <h1 className ="heading" style={{textAlign:"center",fontSize:"38px",fontWeight:800,marginTop:'20px',color:"#e8590c"}}><span style={{color:"#343a40"}}>HASH</span>TIC</h1>
    {/* <div className='wheels'>
    <div className='wheel1'></div>
    <div className='wheel2'></div>
    </div> */}
    
    </div>
      
      {/* <h1 style={{textAlign:"center",fontSize:"38px",fontWeight:700,marginTop:'20px'}}>Pod Analytics</h1> */}
      <img src={Ceetlogo} width="160px"/>
      </div>
      <br/>


      <Router>
      <Routes>
        <Route path="/" element={<PODDetailsPage1 />} />
        <Route path="/pod/analytics" element={<PODAnalytics />} />
        {/* <Route path="/page1/option2" element={<Page1Option2 />} />  */}
        
      </Routes>
    </Router>
     
    </div>
  );
}

export default App;
// 10.9.252.199