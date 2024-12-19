
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
import CurrentSensor from "./Images/currentsensor.png";

import Highcharts from 'highcharts';
import exportingInit from 'highcharts/modules/exporting';
import exportDataInit from 'highcharts/modules/export-data';
import HighchartsReact from 'highcharts-react-official';


import ThreeSecen from './ThreeSecen';





function App() {
  const [SensorDetails,setSensorDetails]=useState(null)
  const SensorDetails_API="http://121.242.232.220:5008/logs"
  const TRUE=True
  const FALSE=False
  const count=8


  useEffect(()=>{
    const fetchData = async () => {
      try {
        const res = await axios.get(SensorDetails_API);
        const dataResponse = res.data.Energy;
        setSensorDetails((dataResponse));
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  },[])


  if (!SensorDetails) {
    // Show a loading message or return null while data is being fetched
    return <div>Loading...</div>;
  }

  let pod1dataPoints = [];
  let pod2dataPoints = [];
  let pod1 = SensorDetails.esp32_1 || []; // Provide a fallback to an empty array
  let pod2 = SensorDetails.esp32_2 || [];

  console.log(pod1,pod2)
  if (pod1.length > 0) {
    for (let i = 0; i < pod1.length; i++) {
      pod1dataPoints.push(pod1[i]);
    }
  } else {
    return 0
  }

  if (pod2.length > 0) {
    for (let i = 0; i < pod2.length; i++) {
      pod2dataPoints.push(pod2[i]);
    }
  } else {
    return 0
  }



  // for(let i=0;i<pod1.length;i++){
  //   let numberpoints=SensorDetails[i].split(" ")[0]
  //   dataPoints.push(parseInt(numberpoints))
  
  //  }
 



// console.log(dataPoints)



const podEnergy= {
  // Highcharts configuration options
  chart: {
    zoomType: 'x',
    height: '400px', 
    title:"pod Energy"
},
  series: [   {
      name: "esp32_1",
      data:  pod1dataPoints.map((val)=>(val)),
      //yAxis: 1,
      type: "line",
      color:"#7A6464",
      marker: {
        enabled: false, // Disable markers for the series
      },
    },

    {
      name: "esp32_2",
      data:  pod2dataPoints.map((val)=>(val)),
      //yAxis: 1,
      type: "line",
      color:"red",
      marker: {
        enabled: false, // Disable markers for the series
      },
    },
  
  
  ],

  title: {
      text: null, // Set title text to null
    },
    yAxis: [
      {
        title: {
          text: "Pod Energy (mWh)",
          style:{
            fontSize:"15px"
          }
        },
      },
      // {
      //   title: {
      //     text: "Energy (kWh)",
      //   },
      //   opposite: true, // Display the secondary y-axis on the opposite side of the chart
      // },
    ],
    tooltip: {
      enabled: true,
      theme: 'dark',
      style: {
        background: '#222',
        color: 'black'
      },
    },
  xAxis: {
      type: "category",
      categories:null
    },
    plotOptions: {
      line: {
        lineWidth: 2, // Increase the line thickness
      },
    },
    exporting: {
      enabled: true, // Enable exporting
      buttons: {
        contextButton: {
          menuItems: [
            {
              text: 'View Data Table', // Set the text for the custom menu item
              onclick: function () {
                const chart = this;
                const data = chart.getDataRows(); // Get the data rows from the chart
                const table = document.createElement('table'); // Create a table element
                const thead = table.createTHead(); // Create the table header
                const tbody = table.createTBody(); // Create the table body
  
                // Create and append the table header row
                const headerRow = thead.insertRow();
                data[0].forEach((header) => {
                  const th = document.createElement('th');
                  th.textContent = header;
                  headerRow.appendChild(th);
                });
  
                // Create and append the table body rows
                for (let i = 1; i < data.length; i++) {
                  const bodyRow = tbody.insertRow();
                  data[i].forEach((cell) => {
                    const td = document.createElement('td');
                    td.textContent = cell;
                    bodyRow.appendChild(td);
                  });
                }
  
                // Open a new window and append the table
                const win = window.open();
                win.document.body.appendChild(table);
              },
            },
            'toggleDataLabels', // Add option for toggling data labels
            'viewFullscreen', // Add option for full-screen mode
            'separator', // Add a separator line
            'downloadPNG', // Enable PNG download option
            'downloadSVG', // Enable SVG download option
            'downloadPDF', // Enable PDF download option
          ],
        },
      },
    },
  
  
   
  // ...
};

//   let  SensorData=SensorDetails
//   let Ultrasonic_Distance=""
//   let Inductive_Count=""
//   let LimitSwitch=""
//   let Encoder_Angle=""
//   let Faults=""
//   let OverallStatus=""
//   let Power=""
//   let Energy=""
//   let podid=""

 

//   // data: {"podid": "esp32_1", "Power": null, "Energy": null, "Limitswitch": "Triggered", "InductiveCount": "3", "EncoderAngle": "141.4027", "UltrasonicDistance": "65.77319", "Faults": "Not Triggered", "OverallStatus": "Forward"}
//     if(SensorDetails.UltrasonicDistance){
//       Ultrasonic_Distance=SensorDetails.UltrasonicDistance
//     }

//     if(SensorDetails.podid){
//       podid=SensorDetails.podid
//     }
//     if (SensorDetails.InductiveCount){
//       Inductive_Count=SensorDetails.InductiveCount
//     }
//     if(SensorDetails.LimitSwitch){
//       LimitSwitch=SensorDetails.LimitSwitch
//     }

//     if(SensorDetails.EncoderAngle){
//       LimitSwitch=SensorDetails.EncoderAngle
//     }
//     if(SensorDetails.Faults){
//       Faults=SensorDetails.Faults
//     }
//     if(SensorDetails.OverallStatus){
//       OverallStatus=SensorDetails.OverallStatus
//     }

//     if(SensorDetails.Power){
//       Power=SensorDetails.Power
//     }
//     if(SensorDetails.Energy){
//       Energy=SensorDetails.Energy
//     }
    
    
    
    
  
//   // console.log(Ultrasonic_Distance)

//   console.log(SensorDetails)




// let Ultrasonic_Sensor=[]
// let Posotion_Sensor=[]
// let Limit_Switch=[]
// let Magnetic_Encoder=[]
// let Current_Sensor=[]

//   for(let i=0;i<SensorDetails.length;i++){
//     if (SensorDetails[i].Ultrasonic_Sensor) {
     
//       Ultrasonic_Sensor.push(SensorDetails[i].Ultrasonic_Sensor);
//     }

//     if (SensorDetails[i].Posotion_Sensor) {
//       Posotion_Sensor.push(SensorDetails[i].Posotion_Sensor);
//     }

//     if (SensorDetails[i].Limit_Switch) {
//       console.log(SensorDetails[i].Limit_Switch)
//       Limit_Switch.push(SensorDetails[i].Limit_Switch);
//     }
//     if (SensorDetails[i].Magnetic_Encoder) {
//       Magnetic_Encoder.push(SensorDetails[i].Magnetic_Encoder);
//     }
//     if (SensorDetails[i].Current_Sensor) {
//       Current_Sensor.push(SensorDetails[i].Current_Sensor);
//     }
//   }
//   // let Ultrasonic_Sensor_POD1=Ultrasonic_Sensor.Pod_1==="True"?TRUE:FALSE
 
  



//console.log(Proximity, Position, catcherPosition, CatcherAngle, Faults, OverallStatus)
  return (
    <div className='maincontainer' >
      <p style={{textAlign:"center",fontSize:"25px",marginTop:"20px",marginBottom:"20px",fontWeight:"700"}}>Pod Energy</p>
<div style={{marginTop:"40px",marginBottom:"40px"}}>
<HighchartsReact highcharts={Highcharts} options={podEnergy} />
</div>

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
            <div className="value">0</div>
          </div>

          <div className="btn">
            <div className="type">Pod Position</div>
            <div className="value">0</div>
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
            <div className="value">{0}</div>
          </div>

          <div className="btn">
            <div className="type">Energy</div>
            <div className="value">{0}</div>
          </div>


          <div className="btn">
            <div className="type">Faults Staus</div>
            <div className="value">{0}</div>
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