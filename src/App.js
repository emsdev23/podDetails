  
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
  import Ceetlogo from "./Images/Ceet.png"
  
  import DatePickers from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { RiArrowDropDownLine } from "react-icons/ri";
  import ThreeSecen from './ThreeSecen';
  
  
  
  
  
  function App() {
    const [SensorDetails,setSensorDetails]=useState(null)
    const [SensorDetailsDateFilter,setSensorDetailsDateFilter]=useState(null)
    const SensorDetails_API="http://121.242.232.220:5010/getpodDetails"
    const SensorDetailsAPI_DataFilter="http://121.242.232.220:5010/getpodDetailsFiltered"
    const TRUE=True
    const FALSE=False
    const count=8


    const [clickedValue, setClickedValue] = useState(null);

    const [selectedDate, setSelectedDate] = useState(null);
  
    useEffect(()=>{
      const fetchData = async () => {
        try {
          const res = await axios.get(SensorDetails_API);
          const dataResponse = res.data;
          setSensorDetails((dataResponse));
        } catch (err) {
          console.error(err);
        }
      };
      fetchData();
    },[])
  
  

    

    const PodDataDateFilter = async () => {
       
      try {
        const formattedDate = selectedDate ? new Date(selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60000).toISOString().substring(0, 10) : ''
        console.log(formattedDate)
        const response = await axios.post(SensorDetailsAPI_DataFilter, { date: formattedDate });
        setSensorDetailsDateFilter(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    //--------------------------end of function------------//
     //-------calling the post request function inside the useEffect----------//
     useEffect(()=>{
      PodDataDateFilter()
    },[selectedDate])


    const handleButtonClick = (value) => {
      setClickedValue(value);
    };


    const handleDateChange = (date) => {
      setSelectedDate(date);
      // You can perform additional actions when the date changes
      // For example, fetch data for the selected date
    };

    

     //console.log(SensorDetails)
//  const startTimestamp = 1735543106;

//  const updatedData = Poddata.map((record, index) => ({
//   ...record,
//   timestamp: startTimestamp + index * 10 / 1000, // Increment timestamp by 10ms
// }));
    
// console.log(updatedData)
      const podID1=[]
      const podID2=[]
      const podID3=[]
      const podID4=[]
      const podID5=[]
      const podID6=[]
      const podID7=[]
      const podID8=[]
      const podID9=[]
      const podID10=[]
      const TimeStamp=[]
      
      // for(let i=0;i<SensorDetails.length;i++){}

       // Process data only if SensorDetails is available

console.log(SensorDetailsDateFilter)
       if(selectedDate==null){
        if (SensorDetails) {
          if (SensorDetails.E1) {
            podID1.push(...SensorDetails.E1); // Use spread operator to push all elements
          }
          if (SensorDetails.E2) {
            podID2.push(...SensorDetails.E2); // Use spread operator to push all elements
          }
          if (SensorDetails.E3) {
            podID3.push(...SensorDetails.E3); // Use spread operator to push all elements
          }
          if (SensorDetails.E4) {
            podID4.push(...SensorDetails.E4); // Use spread operator to push all elements
          }
          if (SensorDetails.E5) {
            podID5.push(...SensorDetails.E5);
          }
        }

       }
       else{
        if (SensorDetailsDateFilter) {
          if (SensorDetailsDateFilter.E1) {
            podID1.push(...SensorDetailsDateFilter.E1); // Use spread operator to push all elements
          }
          if (SensorDetailsDateFilter.E2) {
            podID2.push(...SensorDetailsDateFilter.E2); // Use spread operator to push all elements
          }
          if (SensorDetailsDateFilter.E3) {
            podID3.push(...SensorDetailsDateFilter.E3); // Use spread operator to push all elements
          }
          if (SensorDetailsDateFilter.E4) {
            podID4.push(...SensorDetailsDateFilter.E4); // Use spread operator to push all elements
          }
          if (SensorDetailsDateFilter.E5) {
            podID5.push(...SensorDetailsDateFilter.E5);
          }
        }
       }

   


  
        // const date = new Date(Poddata[i].timestamp * 1000);
    
        // // Format the date and time
        // const formattedDate = date.toLocaleString();
        // TimeStamp.push(formattedDate.split(",")[1])
        

 
  

    
      
    
      console.log(podID2)
      console.log(podID4)
      console.log(podID5)
  
  


      const pod1= {
        // Highcharts configuration options
        chart: {
          zoomType: 'x',
          height: '400px', 
          title:"pod Energy"
      },
        series: [   
      
          {
            name: "pod 1 Energy ",
            // data:  podID4.map((val)=>((val.energy==null?0:val.energy))),
            data: podID1.map((val) => ({
              y: (val.energy==null?0:val.energy),
              position_status: val.positionStatus,
            })),
            yAxis: 0,
            type: "line",
            color:"red",
            marker: {
              enabled: false, // Disable markers for the series
            },
          },
      
          {
            name: "pod 1 Target (m/s)",
            // data: podID4.map((val)=>((val.targetSpeed==null?0:val.targetSpeed))),
            data: podID1.map((val) => ({
              y: (val.targetSpeed==null?0:val.targetSpeed),
              position_status: val.positionStatus,
            })),
            yAxis: 1,
            type: "line",
            color:"blue",
            marker: {
              enabled: false, // Disable markers for the series
            },
          },
      
          {
            name: "pod 1 Actual (m/s)",
            // data:  podID4.map((val)=>((val.actualSpeed==null?0:val.actualSpeed))),
            data: podID1.map((val) => ({
              y: (val.actualSpeed==null?0:val.actualSpeed),
              position_status: val.positionStatus,
            })),
            yAxis: 0,
            type: "line",
            color:"brown",
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
                text: "Pod Energy (mWh) / Actual (m/s)",
                style:{
                  fontSize:"15px"
                }
              },
            },
            {
              title: {
                text: "Target (m/s)",
              },
              opposite: true, // Display the secondary y-axis on the opposite side of the chart
            },
          ],
          tooltip: {
            enabled: true,
            useHTML: true,
            formatter: function () {
              const point = this.point;
              return `
                <b>${this.series.name}</b><br/>
                <b>Time:</b> ${this.key}<br/>
                <b>Value:</b> ${this.y}<br/>
                <b>Position Status:</b> ${point.position_status || 'N/A'}
              `;
            },
            style: {
              fontSize: '12px',
            },
          },
        xAxis: {
            type: "category",
            categories:podID1.map((val)=>((val.timestamp).split(" ").splice(4, 1))),
          },
          plotOptions: {
            line: {
              lineWidth: 2, // Increase the line thickness
            },
          },
    
        
        
         
        // ...
      };


      const pod2= {
        // Highcharts configuration options
        chart: {
          zoomType: 'x',
          height: '400px', 
          title:"pod Energy"
      },
        series: [   
      
          {
            name: "pod 2 Energy ",
            // data:  podID4.map((val)=>((val.energy==null?0:val.energy))),
            data: podID2.map((val) => ({
              y: (val.energy==null?0:val.energy),
              position_status: val.positionStatus,
            })),
            yAxis: 0,
            type: "line",
            color:"red",
            marker: {
              enabled: false, // Disable markers for the series
            },
          },
      
          {
            name: "pod 2 Target (m/s)",
            // data: podID4.map((val)=>((val.targetSpeed==null?0:val.targetSpeed))),
            data: podID2.map((val) => ({
              y: (val.targetSpeed==null?0:val.targetSpeed),
              position_status: val.positionStatus,
            })),
            yAxis: 1,
            type: "line",
            color:"blue",
            marker: {
              enabled: false, // Disable markers for the series
            },
          },
      
          {
            name: "pod_2 Actual (m/s)",
            // data:  podID4.map((val)=>((val.actualSpeed==null?0:val.actualSpeed))),
            data: podID2.map((val) => ({
              y: (val.actualSpeed==null?0:val.actualSpeed),
              position_status: val.positionStatus,
            })),
            yAxis: 0,
            type: "line",
            color:"brown",
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
                text: "Pod Energy (mWh) / Actual (m/s)",
                style:{
                  fontSize:"15px"
                }
              },
            },
            {
              title: {
                text: "Target (m/s)",
              },
              opposite: true, // Display the secondary y-axis on the opposite side of the chart
            },
          ],
          tooltip: {
            enabled: true,
            useHTML: true,
            formatter: function () {
              const point = this.point;
              return `
                <b>${this.series.name}</b><br/>
                <b>Time:</b> ${this.key}<br/>
                <b>Value:</b> ${this.y}<br/>
                <b>Position Status:</b> ${point.position_status || 'N/A'}
              `;
            },
            style: {
              fontSize: '12px',
            },
          },
        xAxis: {
            type: "category",
            categories:podID2.map((val)=>((val.timestamp).split(" ").splice(4, 1))),
          },
          plotOptions: {
            line: {
              lineWidth: 2, // Increase the line thickness
            },
          },
    
        
        
         
        // ...
      };





      const pod3= {
        // Highcharts configuration options
        chart: {
          zoomType: 'x',
          height: '400px', 
          title:"pod Energy"
      },
        series: [   
      
          {
            name: "pod 3 Energy ",
            // data:  podID4.map((val)=>((val.energy==null?0:val.energy))),
            data: podID3.map((val) => ({
              y: (val.energy==null?0:val.energy),
              position_status: val.positionStatus,
            })),
            yAxis: 0,
            type: "line",
            color:"red",
            marker: {
              enabled: false, // Disable markers for the series
            },
          },
      
          {
            name: "pod 3 Target (m/s)",
            // data: podID4.map((val)=>((val.targetSpeed==null?0:val.targetSpeed))),
            data: podID3.map((val) => ({
              y: (val.targetSpeed==null?0:val.targetSpeed),
              position_status: val.positionStatus,
            })),
            yAxis: 1,
            type: "line",
            color:"blue",
            marker: {
              enabled: false, // Disable markers for the series
            },
          },
      
          {
            name: "pod 3 Actual (m/s)",
            // data:  podID4.map((val)=>((val.actualSpeed==null?0:val.actualSpeed))),
            data: podID3.map((val) => ({
              y: (val.actualSpeed==null?0:val.actualSpeed),
              position_status: val.positionStatus,
            })),
            yAxis: 0,
            type: "line",
            color:"brown",
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
                text: "Pod Energy (mWh) / Actual (m/s)",
                style:{
                  fontSize:"15px"
                }
              },
            },
            {
              title: {
                text: "Target (m/s)",
              },
              opposite: true, // Display the secondary y-axis on the opposite side of the chart
            },
          ],
          tooltip: {
            enabled: true,
            useHTML: true,
            formatter: function () {
              const point = this.point;
              return `
                <b>${this.series.name}</b><br/>
                <b>Time:</b> ${this.key}<br/>
                <b>Value:</b> ${this.y}<br/>
                <b>Position Status:</b> ${point.position_status || 'N/A'}
              `;
            },
            style: {
              fontSize: '12px',
            },
          },
        xAxis: {
            type: "category",
            categories:podID3.map((val)=>((val.timestamp).split(" ").splice(4, 1))),
          },
          plotOptions: {
            line: {
              lineWidth: 2, // Increase the line thickness
            },
          },
    
        
        
         
        // ...
      };
  

      const pod4= {
        // Highcharts configuration options
        chart: {
          zoomType: 'x',
          height: '400px', 
          title:"pod Energy"
      },
        series: [   
      
          {
            name: "pod 4 Energy ",
            // data:  podID4.map((val)=>((val.energy==null?0:val.energy))),
            data: podID4.map((val) => ({
              y: (val.energy==null?0:val.energy),
              position_status: val.positionStatus,
            })),
            yAxis: 0,
            type: "line",
            color:"red",
            marker: {
              enabled: false, // Disable markers for the series
            },
          },
      
          {
            name: "pod 4 Target (m/s)",
            // data: podID4.map((val)=>((val.targetSpeed==null?0:val.targetSpeed))),
            data: podID4.map((val) => ({
              y: (val.targetSpeed==null?0:val.targetSpeed),
              position_status: val.positionStatus,
            })),
            yAxis: 1,
            type: "line",
            color:"blue",
            marker: {
              enabled: false, // Disable markers for the series
            },
          },
      
          {
            name: "pod 4 Actual (m/s)",
            // data:  podID4.map((val)=>((val.actualSpeed==null?0:val.actualSpeed))),
            data: podID4.map((val) => ({
              y: (val.actualSpeed==null?0:val.actualSpeed),
              position_status: val.positionStatus,
            })),
            yAxis: 0,
            type: "line",
            color:"brown",
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
                text: "Pod Energy (mWh) / Actual (m/s)",
                style:{
                  fontSize:"15px"
                }
              },
            },
            {
              title: {
                text: "Target (m/s)",
              },
              opposite: true, // Display the secondary y-axis on the opposite side of the chart
            },
          ],
          tooltip: {
            enabled: true,
            useHTML: true,
            formatter: function () {
              const point = this.point;
              return `
                <b>${this.series.name}</b><br/>
                <b>Time:</b> ${this.key}<br/>
                <b>Value:</b> ${this.y}<br/>
                <b>Position Status:</b> ${point.position_status || 'N/A'}
              `;
            },
            style: {
              fontSize: '12px',
            },
          },
        xAxis: {
            type: "category",
            categories:podID4.map((val)=>((val.podTimestamp).split(" ").splice(4, 1))),
          },
          plotOptions: {
            line: {
              lineWidth: 2, // Increase the line thickness
            },
          },
    
        
        
         
        // ...
      };



      const pod5= {
        // Highcharts configuration options
        chart: {
          zoomType: 'x',
          height: '400px', 
          title:"pod Energy"
      },
        series: [   
      
          {
            name: "pod  5 Energy ",
            // data:  podID4.map((val)=>((val.energy==null?0:val.energy))),
            data: podID5.map((val) => ({
              y: (val.energy==null?0:val.energy),
              position_status: val.positionStatus,
            })),
            yAxis: 0,
            type: "line",
            color:"red",
            marker: {
              enabled: false, // Disable markers for the series
            },
          },
      
          {
            name: "pod 5 Target (m/s)",
            // data: podID4.map((val)=>((val.targetSpeed==null?0:val.targetSpeed))),
            data: podID5.map((val) => ({
              y: (val.targetSpeed==null?0:val.targetSpeed),
              position_status: val.positionStatus,
            })),
            yAxis: 1,
            type: "line",
            color:"blue",
            marker: {
              enabled: false, // Disable markers for the series
            },
          },
      
          {
            name: "pod 5 Actual (m/s)",
            // data:  podID4.map((val)=>((val.actualSpeed==null?0:val.actualSpeed))),
            data: podID5.map((val) => ({
              y: (val.actualSpeed==null?0:val.actualSpeed),
              position_status: val.positionStatus,
            })),
            yAxis: 0,
            type: "line",
            color:"brown",
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
                text: "Pod Energy (mWh) / Actual (m/s)",
                style:{
                  fontSize:"15px"
                }
              },
            },
            {
              title: {
                text: "Target (m/s)",
              },
              opposite: true, // Display the secondary y-axis on the opposite side of the chart
            },
          ],
          tooltip: {
            enabled: true,
            useHTML: true,
            formatter: function () {
              const point = this.point;
              return `
                <b>${this.series.name}</b><br/>
                <b>Time:</b> ${this.key}<br/>
                <b>Value:</b> ${this.y}<br/>
                <b>Position Status:</b> ${point.position_status || 'N/A'}
              `;
            },
            style: {
              fontSize: '12px',
            },
          },
        xAxis: {
            type: "category",
            categories:podID5.map((val)=>((val.podTimestamp))),
          },
          plotOptions: {
            line: {
              lineWidth: 2, // Increase the line thickness
            },
          },
    
        
        
         
        // ...
      };
  
      const now = new Date();
const local = now.toLocaleDateString(); // Use toLocaleDateString() instead of toLocaleString()
const [month, day, year] = local.split("/"); // Split the date by "/"
const currentdate = `${day}/${month}/${year}`; // Rearrange the day and month
const currentYearMont=`${month}/${year}`

    return (
      <div className=''  >
        
        <div style={{display:"flex",justifyContent:"space-between",margin:"0px 30px",color:"#495057"}}> 
        <h1 style={{textAlign:"center",fontSize:"38px",fontWeight:700,marginTop:'20px'}}>Hashtic</h1>
        <h1 style={{textAlign:"center",fontSize:"38px",fontWeight:700,marginTop:'20px'}}>Pod Analytics</h1>
        <img src={Ceetlogo} width="130px"/>
        </div>



<div style={{ position: "relative", width: "200px",paddingLeft:"40px",marginTop:"30px" }}>
    <DatePickers
      id="date"
      className="form-control"
      selected={selectedDate}
      onChange={handleDateChange}
      placeholderText={currentdate}
    />
    <div style={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)" }}>
    <RiArrowDropDownLine  size="40px" color='gray' />
      {/* <svg width="15" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.10938 3.10938L6 7.99999L10.8906 3.10938L12 4.21875L6 10.219L0 4.21875L1.10938 3.10938Z" fill="black"/>
      </svg> */}
    </div>
  </div>

<div style={{display:"flex",flexGrow:1,gap:"30px",marginTop:"60px",padding:"0px 30px",textAlign:"center"}}> 
        <button type="button" class="btn btn-outline-secondary" style={{width:"120%",height:"100%",marginLeft: "0%"}} onClick={() => handleButtonClick(1)}>pod 1</button>
        <button type="button" class="btn btn-outline-secondary" style={{width:"120%",height:"100%",marginLeft: "0%"}} onClick={() => handleButtonClick(2)}>pod 2</button>
        <button type="button" class="btn btn-outline-secondary" style={{width:"120%",height:"100%",marginLeft: "0%"}} onClick={() => handleButtonClick(3)}>pod 3</button>
        <button type="button" class="btn btn-outline-secondary" style={{width:"120%",height:"100%",marginLeft: "0%"}} onClick={() => handleButtonClick(4)}>pod 4</button>
        <button type="button" class="btn btn-outline-secondary" style={{width:"120%",height:"100%",marginLeft: "0%"}} onClick={() => handleButtonClick(5)}>pod 5</button>
        <button type="button" class="btn btn-outline-secondary" style={{width:"120%",height:"100%",marginLeft: "0%"}} onClick={() => handleButtonClick(6)}>pod 6</button>
        <button type="button" class="btn btn-outline-secondary" style={{width:"120%",height:"100%",marginLeft: "0%"}} onClick={() => handleButtonClick(7)}>pod 7</button>
        <button type="button" class="btn btn-outline-secondary" style={{width:"120%",height:"100%",marginLeft: "0%"}} onClick={() => handleButtonClick(8)}>pod 8</button>
        <button type="button" class="btn btn-outline-secondary" style={{width:"120%",height:"100%",marginLeft: "0%"}} onClick={() => handleButtonClick(9)}>pod 9</button>
        <button type="button" class="btn btn-outline-secondary" style={{width:"120%",height:"100%",marginLeft: "0%"}} onClick={() => handleButtonClick(10)}>pod 10</button>
        </div>


{
  clickedValue===1?
  <div>
  <p style={{textAlign:"center",fontSize:"25px",marginTop:"20px",marginBottom:"20px",fontWeight:"700"}}>Pod1 Details</p>
  <div style={{marginTop:"40px",marginBottom:"40px"}}>
  <HighchartsReact highcharts={Highcharts} options={pod1} />
  </div> </div>:''
}

  

{
  clickedValue===2?
  <div>
  <p style={{textAlign:"center",fontSize:"25px",marginTop:"20px",marginBottom:"20px",fontWeight:"700"}}>Pod2 Details</p>
  <div style={{marginTop:"40px",marginBottom:"40px"}}>
  <HighchartsReact highcharts={Highcharts} options={pod2} />
  </div></div>:""

}

{
  clickedValue===3?
  <div>
  <p style={{textAlign:"center",fontSize:"25px",marginTop:"20px",marginBottom:"20px",fontWeight:"700"}}>Pod3 Details</p>
  <div style={{marginTop:"40px",marginBottom:"40px"}}>
 <HighchartsReact highcharts={Highcharts} options={pod3} /> 
  </div></div>:""

}
{
  clickedValue===4?
<div>
  <p style={{textAlign:"center",fontSize:"25px",marginTop:"20px",marginBottom:"20px",fontWeight:"700"}}> Pod4 Details</p>
  <div style={{marginTop:"40px",marginBottom:"40px"}}>
  <HighchartsReact highcharts={Highcharts} options={pod4} />
  </div>
  </div>:""

}


{
  clickedValue===5?
<div>
  <p style={{textAlign:"center",fontSize:"25px",marginTop:"20px",marginBottom:"20px",fontWeight:"700"}}> Pod5 Details</p>
  <div style={{marginTop:"40px",marginBottom:"40px"}}>
  <HighchartsReact highcharts={Highcharts} options={pod5} />
  </div>
  </div>:""

}
  
  
  
  
     {/* <p style={{color:"#ffec99"}} className='heading'>  POD DETAILS</p> */}
  
     
     {/* 🚄 */}
      {/* <div className="App">
     
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
            </div>
          </div>
        ))}
      </div> */}
      </div>
    );
  }
  
  export default App;
  // 10.9.252.199