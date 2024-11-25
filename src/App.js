
import './App.css';
import ProximitSensor from "./Images/proximiterSeonsolr.png";
import Swal from "sweetalert2"
import UltraSonicSensor from "./Images/ultrasonic-sensor.png"
import True from "./Images/checked.png";
import False from "./Images/delete.png";
import OFFLine from "./Images/offline.png"
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import PosotionSensor from "./Images/posotionSensor.png"
import LimitSwitchImage from "./Images/limitSwitch.png";
import MagneticEncoder from "./Images/MagneticEncoder.png";
import CurrentSensor from "./Images/currentsensor.png"


import ThreeSecen from './ThreeSecen';





function App() {
  const [SensorDetails,setSensorDetails]=useState([])
  const SensorDetails_API="http://121.242.232.220:5008/parse_logs"
  const TRUE=True
  const FALSE=False
  const count=8


  useEffect(()=>{
    const fetchData = async () => {
      try {
        const res = await axios.get(SensorDetails_API);
        const dataResponse = res.data;
        setSensorDetails(dataResponse.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();

    //fetchData(); // Initial call

    //const intervalId = setInterval(fetchData, 1000); // Repeat every 10ms
// setInterval(()=>{
//   console.log("This message appears every 1 second");
// },1000)
    // Clean up the interval when the component unmounts
    // return () => clearInterval(intervalId);

  },[])



  let  SensorData=SensorDetails
  let Ultrasonic_Distance=""
  let Inductive_Count=""
  let LimitSwitch=""
  let Encoder_Angle=""
  let Faults=""
  let OverallStatus=""
  let Power=""
  let Energy=""

 
    if(SensorDetails.UltrasonicDistance){
      Ultrasonic_Distance=SensorDetails.UltrasonicDistance
    }
    if (SensorDetails.InductiveCount){
      Inductive_Count=SensorDetails.InductiveCount
    }
    if(SensorDetails.LimitSwitch){
      LimitSwitch=SensorDetails.LimitSwitch
    }

    if(SensorDetails.EncoderAngle){
      LimitSwitch=SensorDetails.EncoderAngle
    }
    if(SensorDetails.Faults){
      Faults=SensorDetails.Faults
    }
    if(SensorDetails.OverallStatus){
      OverallStatus=SensorDetails.OverallStatus
    }

    if(SensorDetails.Power){
      Power=SensorDetails.Power
    }
    if(SensorDetails.Energy){
      Energy=SensorDetails.Energy
    }
    
    
    
    
  
  // console.log(Ultrasonic_Distance)

  console.log(SensorData)




let Ultrasonic_Sensor=[]
let Posotion_Sensor=[]
let Limit_Switch=[]
let Magnetic_Encoder=[]
let Current_Sensor=[]

  for(let i=0;i<SensorDetails.length;i++){
    if (SensorDetails[i].Ultrasonic_Sensor) {
     
      Ultrasonic_Sensor.push(SensorDetails[i].Ultrasonic_Sensor);
    }

    if (SensorDetails[i].Posotion_Sensor) {
      Posotion_Sensor.push(SensorDetails[i].Posotion_Sensor);
    }

    if (SensorDetails[i].Limit_Switch) {
      console.log(SensorDetails[i].Limit_Switch)
      Limit_Switch.push(SensorDetails[i].Limit_Switch);
    }
    if (SensorDetails[i].Magnetic_Encoder) {
      Magnetic_Encoder.push(SensorDetails[i].Magnetic_Encoder);
    }
    if (SensorDetails[i].Current_Sensor) {
      Current_Sensor.push(SensorDetails[i].Current_Sensor);
    }
  }
  // let Ultrasonic_Sensor_POD1=Ultrasonic_Sensor.Pod_1==="True"?TRUE:FALSE
 
  
console.log(Ultrasonic_Sensor)


//console.log(Proximity, Position, catcherPosition, CatcherAngle, Faults, OverallStatus)
  return (
    <div className='maincontainer'>
   <p style={{color:"#ffec99"}} className='heading'>  POD DETAILS</p>
   {/* 🚄 */}
    <div className="App">
 
      {[...Array(count)].map((_, index) => (
        <div key={index} className="pod_details" >
          <div style={{marginBottom:"20px"}}>
          <div style={{border:"1px solid #ffd8a8",width:"110px",backgroundColor:"#ffd8a8",textAlign:"center",borderRadius:"5px",fontWeight:"600",boxShadow:"10px 10px 10px rgba(0,0,0,0.5)" }}>
            POD ID : 211
          </div>
          <br />

          <div className="btn">
            <div className="type">Pod Status</div>
            <div className="value">{OverallStatus}</div>
          </div>

          <div className="btn">
            <div className="type">Pod Position</div>
            <div className="value">{Inductive_Count}</div>
          </div>

          <div className="btn">
            <div className="type">Pod Speed</div>
            <div className="value">{0} m/s</div>
          </div>

          <div className="btn">
            <div className="type">Platoon Speed</div>
            <div className="value">{0} m/s</div>
          </div>


          <div className="btn">
            <div className="type">Power</div>
            <div className="value">{Power}</div>
          </div>

          <div className="btn">
            <div className="type">Energy</div>
            <div className="value">{Energy}</div>
          </div>


          <div className="btn">
            <div className="type">Faults Staus</div>
            <div className="value">{Faults}</div>
          </div>


          {/* <div className="btn">
            <div className="type">Proximity Sensor </div>
            <div className="value">{Ultrasonic_Distance}</div>
          </div> */}

          

          {/* <div className="btn">
            <div className="type">Catcher Position </div> 
            <div className="value">{LimitSwitch}</div>
          </div> */}

          {/* <div className="btn">
            <div className="type">Catcher Angle</div>
            <div className="value">{Encoder_Angle}</div>
          </div> */}

          
          

         
          
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default App;
// 10.9.252.199