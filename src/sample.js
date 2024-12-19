
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
import LimitSwitch from "./Images/limitSwitch.png";
import MagneticEncoder from "./Images/MagneticEncoder.png";
import CurrentSensor from "./Images/currentsensor.png"


import ThreeSecen from './ThreeSecen';


function App() {
  const [SensorDetails,setSensorDetails]=useState([])
  const SensorDetails_API="http://121.242.232.220:5008/get_sensor_data"
  const TRUE=True
  const FALSE=False


  useEffect(()=>{
    const fetchData = async () => {
      try {
        const res = await axios.get(SensorDetails_API);
        const dataResponse = res.data;
        setSensorDetails(dataResponse);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  },[])

  console.log(SensorDetails)


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


let Ultrasonic_Sensor_Pod_1=""
let Ultrasonic_Sensor_Pod_2=""
let Ultrasonic_Sensor_Pod_3=""
for(let i=0;i<Ultrasonic_Sensor.length;i++){
  Ultrasonic_Sensor_Pod_1=Ultrasonic_Sensor[i].Pod_1==="True"?TRUE:Ultrasonic_Sensor[i].Pod_1==="offline"?OFFLine:FALSE
  Ultrasonic_Sensor_Pod_2=Ultrasonic_Sensor[i].Pod_2==="True"?TRUE:Ultrasonic_Sensor[i].Pod_2==="offline"?OFFLine:FALSE
  Ultrasonic_Sensor_Pod_3=Ultrasonic_Sensor[i].Pod_3==="True"?TRUE:Ultrasonic_Sensor[i].Pod_3==="offline"?OFFLine:FALSE
}


let Position_Sensor_Pod_1=""
let Position_Sensor_Pod_2=""
let Position_Sensor_Pod_3=""
for(let i=0;i<Posotion_Sensor.length;i++){
  Position_Sensor_Pod_1=Posotion_Sensor[i].Pod_1==="True"?TRUE:Posotion_Sensor[i].Pod_1==="offline"?OFFLine:FALSE
  Position_Sensor_Pod_2=Posotion_Sensor[i].Pod_2==="True"?TRUE:Posotion_Sensor[i].Pod_2==="offline"?OFFLine:FALSE
  Position_Sensor_Pod_3=Posotion_Sensor[i].Pod_3==="True"?TRUE:Posotion_Sensor[i].Pod_3==="offline"?OFFLine:FALSE
}



let Limit_Switch_Pod_1=""
let Limit_Switch_Pod_2=""
let Limit_Switch_Pod_3=""
for(let i=0;i<Limit_Switch.length;i++){
  Limit_Switch_Pod_1=Limit_Switch[i].Pod_1==="True"?TRUE:Limit_Switch[i].Pod_1==="offline"?OFFLine:FALSE
  Limit_Switch_Pod_2=Limit_Switch[i].Pod_2==="True"?TRUE:Limit_Switch[i].Pod_2==="offline"?OFFLine:FALSE
  Limit_Switch_Pod_3=Limit_Switch[i].Pod_3==="True"?TRUE:Limit_Switch[i].Pod_3==="offline"?OFFLine:FALSE
}


let Magnetic_Encoder_Pod_1=""
let Magnetic_Encoder_Pod_2=""
let Magnetic_Encoder_Pod_3=""
for(let i=0;i<Magnetic_Encoder.length;i++){
  Magnetic_Encoder_Pod_1=Magnetic_Encoder[i].Pod_1==="True"?TRUE:Magnetic_Encoder[i].Pod_1==="offline"?OFFLine:FALSE
  Magnetic_Encoder_Pod_2=Magnetic_Encoder[i].Pod_2==="True"?TRUE:Magnetic_Encoder[i].Pod_2==="offline"?OFFLine:FALSE
  Magnetic_Encoder_Pod_3=Magnetic_Encoder[i].Pod_3==="True"?TRUE:Magnetic_Encoder[i].Pod_3==="offline"?OFFLine:FALSE
}






let Current_Sensor_Pod_1=""
let Current_Sensor_Pod_2=""
let Current_Sensor_Pod_3=""
for(let i=0;i<Current_Sensor.length;i++){
  Current_Sensor_Pod_1=Current_Sensor[i].Pod_1==="True"?TRUE:Current_Sensor[i].Pod_1==="offline"?OFFLine:FALSE
  Current_Sensor_Pod_2=Current_Sensor[i].Pod_2==="True"?TRUE:Current_Sensor[i].Pod_2==="offline"?OFFLine:FALSE
  Current_Sensor_Pod_3=Current_Sensor[i].Pod_3==="True"?TRUE:Current_Sensor[i].Pod_3==="offline"?OFFLine:FALSE
}




  const ProxitySensor = (pod1,pod2,pod3) => {
    // Use backticks for multi-line template strings
    Swal.fire(`
      
        Pod 1 : ${`<img src="${pod1}" width="50px" height="50px" alt="False Image"/>`}</p>
        Pod 2 : ${`<img src="${pod2}" width="50px" height="50px" alt="False Image"/>`}</p>
        Pod 3 : ${`<img src="${pod3}" width="50px" height="50px" alt="False Image"/>`}</p>
      
    `);
  };



  fetch('data.txt')
  .then(function(response){
    return response.text();
  }).then(function (data) {
    console.log(data);
  })

  fetch('*test3.txt')
  return (
    <div className="App">
       {/* <h1>Pod Details</h1> */}
       <div className='mainSection'> 
       {/* <div className='Maincontant'>
        <div className='btn-info'> 
        
        <div className="btn btn-Ultrasonic Sensor" onClick={ProxitySensor} > 
         <img src={UltraSonicSensor} width="50px" height="50px" />
         <p>Proximity Sensor</p>
        </div>

        <div className="btn btn-Ultrasonic Sensor"> 
         <img src={ProximitSensor} width="50px" height="50px"/>
         <p>Proximity Sensor</p>
        </div>
        <div className="btn btn-Ultrasonic Sensor"> 
         <img src={ProximitSensor} width="50px" height="50px"/>
         <p>Proximity Sensor</p>
        </div>

        <div className="btn btn-Ultrasonic Sensor"> 
         <img src={ProximitSensor} width="50px" height="50px"/>
         <p>Proximity Sensor</p>
        </div>
       </div>
       </div> */}
<div className='Maincontant'>
<div class="row">
  <div class="col-12 col-md-6">
  <div className="btn btn-Ultrasonic Sensor" onClick={() => ProxitySensor(Ultrasonic_Sensor_Pod_1, Ultrasonic_Sensor_Pod_2, Ultrasonic_Sensor_Pod_3)}  style={{marginTop:"50px"}} > 
         <img src={UltraSonicSensor} width="50px" height="50px" />
         <p>Ultrasonic Sensor</p>
        </div>
  </div>
  <div class="col-12 col-md-6"> <div className="btn btn-Ultrasonic Sensor" onClick={()=>ProxitySensor(Position_Sensor_Pod_1,Position_Sensor_Pod_2,Position_Sensor_Pod_3)} style={{marginTop:"50px"}} > 

         <img src={PosotionSensor} width="50px" height="50px" />
         <p>Posotion Sensor</p>
        </div></div>
  <div class="col-12 col-md-6" style={{marginTop:"50px"}}>

  <div className="btn btn-Ultrasonic Sensor" onClick={()=>ProxitySensor(Limit_Switch_Pod_1,Limit_Switch_Pod_2,Limit_Switch_Pod_3)} > 
         <img src={LimitSwitch } width="50px" height="50px" />
         <p>Limit Switch</p>
        </div>
  </div>


  <div class="col-12 col-md-6" style={{marginTop:"50px"}}>
  <div className="btn btn-Ultrasonic Sensor" onClick={()=>ProxitySensor(Magnetic_Encoder_Pod_1,Magnetic_Encoder_Pod_2,Magnetic_Encoder_Pod_3)} > 
         <img src={ MagneticEncoder} width="50px" height="50px" />
         <p>Magnetic Encoder</p>
        </div>
  </div>


  <div class="col-12 col-md-6" style={{marginTop:"50px"}}>
  <div className="btn btn-Ultrasonic Sensor" onClick={()=>ProxitySensor(Current_Sensor_Pod_1,Current_Sensor_Pod_2,Current_Sensor_Pod_3)} > 
         <img src={CurrentSensor} width="50px" height="50px" />
         <p>Current Sensor</p>
        </div>
  </div>


  <div class="col-12 col-md-6" style={{marginTop:"50px"}}>
  <div className="btn btn-Ultrasonic Sensor" onClick={ProxitySensor} > 
         <img src={UltraSonicSensor} width="50px" height="50px" />
         <p>Proximity Sensor</p>
        </div>
  </div>
</div>
</div>
       </div> 
       


        <br/>
        <br/>
       {/* <ThreeSecen/> */}
      
    </div>
  );
}

export default App;








