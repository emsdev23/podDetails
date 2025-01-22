import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';



import Highcharts from 'highcharts';
import exportingInit from 'highcharts/modules/exporting';
import exportDataInit from 'highcharts/modules/export-data';
import HighchartsReact from 'highcharts-react-official';


import DatePickers from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { RiArrowDropDownLine } from "react-icons/ri";
import { type } from '@testing-library/user-event/dist/type';

export default function PODPowerEnergy() {
  const [podPowerEnergy,setPodPowerEnergy]=useState(null)
  const podPowerEnergy_API="http://121.242.232.220:5010/dailypoddata"

  const [clickedValue, setClickedValue] = useState(null);
  
  const [selectedDate, setSelectedDate] = useState(null);
  

  useEffect(()=>{
    const fetchData = async () => {
    try {
    const res = await axios.get(podPowerEnergy_API);
    const dataResponse = res.data;
    setPodPowerEnergy((dataResponse));
    } catch (err) {
    console.error(err);
    }
    };
    fetchData();
    },[])

    const handleButtonClick = (value) => {
      setClickedValue(value);
      };
    console.log(podPowerEnergy)


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
const podID11=[]
const TimeStamp=[]

if (podPowerEnergy) {
  if (podPowerEnergy.E1) {
  podID1.push(...podPowerEnergy.E1); // Use spread operator to push all elements
  }
  if (podPowerEnergy.E2) {
  podID2.push(...podPowerEnergy.E2); // Use spread operator to push all elements
  }
  if (podPowerEnergy.E3) {
  podID3.push(...podPowerEnergy.E3); // Use spread operator to push all elements
  }
  if (podPowerEnergy.E4) {
  podID4.push(...podPowerEnergy.E4); // Use spread operator to push all elements
  }
  if (podPowerEnergy.E5) {
  podID5.push(...podPowerEnergy.E5);
  }
  if (podPowerEnergy.E6) {
    podID6.push(...podPowerEnergy.E6);
    }
  if (podPowerEnergy.E7) {
  podID7.push(...podPowerEnergy.E7);
  }
  if (podPowerEnergy.E11) {
  podID11.push(...podPowerEnergy.E11);
  }
  }


  let bg1 = "gray"
let bg2 = "gray"
let bg3 = "gray"
let bg4 = "gray"
let bg5 = "gray"
let bg6 = "gray"
let bg7 = "gray"
let bg8 = "gray"
let bg9 = "gray"
let bg10 = "gray"
let bg11 = "gray"
if (podID1.length > 0){
bg1 = "green"
}
if (podID2.length > 0){
bg2 = "green"
}
if (podID3.length > 0){
bg3 = "green"
}
if (podID4.length > 0){
bg4 = "green"
}
if (podID5.length > 0){
bg5 = "green"
}
if (podID6.length > 0){
bg6 = "green"
}
if (podID7.length > 0){
bg7 = "green"
}
if (podID8.length > 0){
bg8 = "green"
}
if (podID9.length > 0){
bg9 = "green"
}
if (podID10.length > 0){
bg10 = "green"
}
if (podID11.length > 0){
bg11 = "green"
}









const pod1= {
  // Highcharts configuration options
  chart: {
  zoomType: 'x',
  height: '400px',
  title:"pod Energy",
  type: 'column'
  },
  series: [
  {
  name: " Energy (mWh) ",
 
  // data: podID4.map((val)=>((val.energy==null?0:val.energy))),
  data: podID1.map((val) => ({
  y: (val.totalEnergy),
  //position_status: val.positionStatus,
  WheelCount: val.wheelCount,
  })),
  yAxis: 0,
 type: 'column',
  color:"green",
  marker: {
  enabled: false, // Disable markers for the series
  },
  },
 
  
  {
  name: " Power (mW)",
  // data: podID4.map((val)=>((val.actualSpeed==null?0:val.actualSpeed))),
  data: podID1.map((val) => ({
  y: (val.avgPower),
  position_status: val.positionStatus,
  WheelCount: val.wheelCount,
  })),
  yAxis: 0,
  type: 'column',
  color:"black",
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
  text: "Pod Energy (mWh)/Power (mW) ",
  style:{
  fontSize:"15px"
  }
  },
  },
  // {
  // title: {
  // text: " Actual (mrpm)/Target (mrpm)",
  // },
  // opposite: false, // Display the secondary y-axis on the opposite side of the chart
  // },
  ],
  tooltip: {
  enabled: true,
  useHTML: true,
  formatter: function () {
  const point = this.point;
  return `
  <b>${this.series.name}:</b> ${this.y}<br/>
  <b>Date:</b> ${this.key}<br/>
  `;
  },
  style: {
  fontSize: '12px',
  },
  },
  xAxis: {
  type: "category",
  categories:podID1.map((val)=>((val.date).split(" ").splice(1, 2))),
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
    title:"pod Energy",
    type: 'column'
    },
    series: [
    {
    name: " Energy (mWh) ",
   
    // data: podID4.map((val)=>((val.energy==null?0:val.energy))),
    data: podID2.map((val) => ({
    y: (val.totalEnergy),
    //position_status: val.positionStatus,
    WheelCount: val.wheelCount,
    })),
    yAxis: 0,
   type: 'column',
    color:"green",
    marker: {
    enabled: false, // Disable markers for the series
    },
    },
   
    
    {
    name: " Power (mW)",
    // data: podID4.map((val)=>((val.actualSpeed==null?0:val.actualSpeed))),
    data: podID2.map((val) => ({
    y: (val.avgPower),
    position_status: val.positionStatus,
    WheelCount: val.wheelCount,
    })),
    yAxis: 0,
    type: 'column',
    color:"black",
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
    text: "Pod Energy (mWh)/Power (mW) ",
    style:{
    fontSize:"15px"
    }
    },
    },
    // {
    // title: {
    // text: " Actual (mrpm)/Target (mrpm)",
    // },
    // opposite: false, // Display the secondary y-axis on the opposite side of the chart
    // },
    ],
    tooltip: {
    enabled: true,
    useHTML: true,
    formatter: function () {
    const point = this.point;
    return `
    <b>${this.series.name}:</b> ${this.y}<br/>
    <b>Date:</b> ${this.key}<br/>
    `;
    },
    style: {
    fontSize: '12px',
    },
    },
    xAxis: {
    type: "category",
    categories:podID2.map((val)=>((val.date).split(" ").splice(1, 2))),
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
      title:"pod Energy",
      type: 'column'
      },
      series: [
      {
      name: " Energy (mWh) ",
     
      // data: podID4.map((val)=>((val.energy==null?0:val.energy))),
      data: podID3.map((val) => ({
      y: (val.totalEnergy),
      //position_status: val.positionStatus,
      WheelCount: val.wheelCount,
      })),
      yAxis: 0,
     type: 'column',
      color:"green",
      marker: {
      enabled: false, // Disable markers for the series
      },
      },
     
      
      {
      name: " Power (mW)",
      // data: podID4.map((val)=>((val.actualSpeed==null?0:val.actualSpeed))),
      data: podID3.map((val) => ({
      y: (val.avgPower),
      position_status: val.positionStatus,
      WheelCount: val.wheelCount,
      })),
      yAxis: 0,
      type: 'column',
      color:"black",
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
      text: "Pod Energy (mWh)/Power (mW) ",
      style:{
      fontSize:"15px"
      }
      },
      },
      // {
      // title: {
      // text: " Actual (mrpm)/Target (mrpm)",
      // },
      // opposite: false, // Display the secondary y-axis on the opposite side of the chart
      // },
      ],
      tooltip: {
      enabled: true,
      useHTML: true,
      formatter: function () {
      const point = this.point;
      return `
      <b>${this.series.name}:</b> ${this.y}<br/>
      <b>Date:</b> ${this.key}<br/>
      `;
      },
      style: {
      fontSize: '12px',
      },
      },
      xAxis: {
      type: "category",
      categories:podID3.map((val)=>((val.date).split(" ").splice(1, 2))),
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
        title:"pod Energy",
        type: 'column'
        },
        series: [
        {
        name: " Energy (mWh) ",
       
        // data: podID4.map((val)=>((val.energy==null?0:val.energy))),
        data: podID4.map((val) => ({
        y: (val.totalEnergy),
        //position_status: val.positionStatus,
        WheelCount: val.wheelCount,
        })),
        yAxis: 0,
       type: 'column',
        color:"green",
        marker: {
        enabled: false, // Disable markers for the series
        },
        },
       
        
        {
        name: " Power (mW)",
        // data: podID4.map((val)=>((val.actualSpeed==null?0:val.actualSpeed))),
        data: podID4.map((val) => ({
        y: (val.avgPower),
        position_status: val.positionStatus,
        WheelCount: val.wheelCount,
        })),
        yAxis: 0,
        type: 'column',
        color:"black",
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
        text: "Pod Energy (mWh)/Power (mW) ",
        style:{
        fontSize:"15px"
        }
        },
        },
        // {
        // title: {
        // text: " Actual (mrpm)/Target (mrpm)",
        // },
        // opposite: false, // Display the secondary y-axis on the opposite side of the chart
        // },
        ],
        tooltip: {
        enabled: true,
        useHTML: true,
        formatter: function () {
        const point = this.point;
        return `
        <b>${this.series.name}:</b> ${this.y}<br/>
        <b>Date:</b> ${this.key}<br/>
        `;
        },
        style: {
        fontSize: '12px',
        },
        },
        xAxis: {
        type: "category",
        categories:podID4.map((val)=>((val.date).split(" ").splice(1, 2))),
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
          title:"pod Energy",
          type: 'column'
          },
          series: [
          {
          name: " Energy (mWh) ",
         
          // data: podID4.map((val)=>((val.energy==null?0:val.energy))),
          data: podID5.map((val) => ({
          y: (val.totalEnergy),
          //position_status: val.positionStatus,
          WheelCount: val.wheelCount,
          })),
          yAxis: 0,
         type: 'column',
          color:"green",
          marker: {
          enabled: false, // Disable markers for the series
          },
          },
         
          
          {
          name: " Power (mW)",
          // data: podID4.map((val)=>((val.actualSpeed==null?0:val.actualSpeed))),
          data: podID5.map((val) => ({
          y: (val.avgPower),
          // position_status: val.positionStatus,
          WheelCount: val.wheelCount,
          })),
          yAxis: 0,
          type: 'column',
          color:"black",
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
          text: "Pod Energy (mWh)/Power (mW) ",
          style:{
          fontSize:"15px"
          }
          },
          },
          // {
          // title: {
          // text: " Actual (mrpm)/Target (mrpm)",
          // },
          // opposite: false, // Display the secondary y-axis on the opposite side of the chart
          // },
          ],
          tooltip: {
          enabled: true,
          useHTML: true,
          formatter: function () {
          const point = this.point;
          return `
          <b>${this.series.name}:</b> ${this.y}<br/>
          <b>Date:</b> ${this.key}<br/>
          `;
          },
          style: {
          fontSize: '12px',
          },
          },
          xAxis: {
          type: "category",
          categories:podID5.map((val)=>((val.date).split(" ").splice(1, 2))),
          },
          plotOptions: {
          line: {
          lineWidth: 2, // Increase the line thickness
          },
          },
          // ...
          };


          const pod11= {
            // Highcharts configuration options
            chart: {
            zoomType: 'x',
            height: '400px',
            title:"pod Energy",
            type: 'column'
            },
            series: [
            {
            name: " Energy (mWh) ",
           
            // data: podID4.map((val)=>((val.energy==null?0:val.energy))),
            data: podID11.map((val) => ({
            y: (val.totalEnergy),
            //position_status: val.positionStatus,
            WheelCount: val.wheelCount,
            })),
            yAxis: 0,
           type: 'column',
            color:"green",
            marker: {
            enabled: false, // Disable markers for the series
            },
            },
           
            
            {
            name: " Power (mW)",
            // data: podID4.map((val)=>((val.actualSpeed==null?0:val.actualSpeed))),
            data: podID11.map((val) => ({
            y: (val.avgPower),
            // position_status: val.positionStatus,
            WheelCount: val.wheelCount,
            })),
            yAxis: 0,
            type: 'column',
            color:"black",
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
            text: "Pod Energy (mWh)/Power (mW) ",
            style:{
            fontSize:"15px"
            }
            },
            },
            // {
            // title: {
            // text: " Actual (mrpm)/Target (mrpm)",
            // },
            // opposite: false, // Display the secondary y-axis on the opposite side of the chart
            // },
            ],
            tooltip: {
            enabled: true,
            useHTML: true,
            formatter: function () {
            const point = this.point;
            return `
            <b>${this.series.name}:</b> ${this.y}<br/>
            <b>Date:</b> ${this.key}<br/>
            `;
            },
            style: {
            fontSize: '12px',
            },
            },
            xAxis: {
            type: "category",
            categories:podID11.map((val)=>((val.date).split(" ").splice(1, 2))),
            },
            plotOptions: {
            line: {
            lineWidth: 2, // Increase the line thickness
            },
            },
            // ...
            };
  
  return (
    <div>
      <style>
    {`
      html {
        font-size: 100%;
      }
    `}
  </style>
      <div style={{display:"flex",flexGrow:1,gap:"30px",marginTop:"60px",padding:"0px 30px",textAlign:"center"}}>
<button type="button" class="btn btn-outline-secondary" style={{width:"120%",height:"100%",marginLeft: "0%", color:"white",backgroundColor: bg1, fontWeight: "bold"}} onClick={() => handleButtonClick(1)}>pod 1</button>
{/*<button type="button" class="btn btn-outline-secondary" style={{width:"120%",height:"100%",marginLeft: "0%",color:"white", backgroundColor: bg1, fontWeight: "bold"}} disabled>Pod 1</button>*/}
<button type="button" class="btn btn-outline-secondary" style={{width:"120%",height:"100%",marginLeft: "0%",color:"white", backgroundColor: bg2, fontWeight: "bold"}} onClick={() => handleButtonClick(2)}>Pod 2</button>
<button type="button" class="btn btn-outline-secondary" style={{width:"120%",height:"100%",marginLeft: "0%",color:"white", backgroundColor: bg3, fontWeight: "bold"}} onClick={() => handleButtonClick(3)}>Pod 3</button>
<button type="button" class="btn btn-outline-secondary" style={{width:"120%",height:"100%",marginLeft: "0%",color:"white", backgroundColor: bg4, fontWeight: "bold"}} onClick={() => handleButtonClick(4)}>Pod 4</button>
<button type="button" class="btn btn-outline-secondary" style={{width:"120%",height:"100%",marginLeft: "0%",color:"white", backgroundColor: bg5, fontWeight: "bold"}} onClick={() => handleButtonClick(5)}>Pod 5</button>
{/* <button type="button" class="btn btn-outline-secondary" style={{width:"120%",height:"100%",marginLeft: "0%"}} onClick={() => handleButtonClick(6)}>pod 6</button>*/}
{/*<button type="button" class="btn btn-outline-secondary" style={{width:"120%",height:"100%",marginLeft: "0%",color:"white", backgroundColor: bg6, fontWeight: "bold"}} onClick={() => handleButtonClick(6)}>pod 6</button>
<button type="button" class="btn btn-outline-secondary" style={{width:"120%",height:"100%",marginLeft: "0%", backgroundColor: bg7,color:"white", fontWeight: "bold"}} onClick={() => handleButtonClick(7)}>Pod 7</button>
<button type="button" class="btn btn-outline-secondary" style={{width:"120%",height:"100%",marginLeft: "0%",backgroundColor: bg8,color:"white", fontWeight: "bold"}} onClick={() => handleButtonClick(8)}>pod 8</button>
<button type="button" class="btn btn-outline-secondary" style={{width:"120%",height:"100%",marginLeft: "0%",backgroundColor: bg9,color:"white", fontWeight: "bold"}} onClick={() => handleButtonClick(9)}>pod 9</button>
<button type="button" class="btn btn-outline-secondary" style={{width:"120%",height:"100%",marginLeft: "0%",backgroundColor: bg10,color:"white", fontWeight: "bold"}} onClick={() => handleButtonClick(10)}>pod 10</button>
<button type="button" class="btn btn-outline-secondary" style={{width:"120%",height:"100%",marginLeft: "0%", backgroundColor: bg8,color:"white", fontWeight: "bold"}} disabled>Pod 8</button>
<button type="button" class="btn btn-outline-secondary" style={{width:"120%",height:"100%",marginLeft: "0%", backgroundColor: bg9,color:"white", fontWeight: "bold"}} disabled>Pod 10</button>
<button type="button" class="btn btn-outline-secondary" style={{width:"120%",height:"100%",marginLeft: "0%", backgroundColor: bg10,color:"white", fontWeight: "bold"}} disabled>Pod 9</button>*/}
<button type="button" class="btn btn-outline-secondary" style={{width:"120%",height:"100%",marginLeft: "0%",color:"white", backgroundColor: bg11, fontWeight: "bold"}} onClick={() => handleButtonClick(11)}>Pod 6</button>
</div>

{
clickedValue===1?
<div>
<p style={{textAlign:"center",fontSize:"25px",marginTop:"20px",marginBottom:"20px",fontWeight:"700"}}>Pod1 Data</p>
<div style={{marginTop:"40px",marginBottom:"40px"}}>
{
podID1.length>0?<HighchartsReact highcharts={Highcharts} options={pod1} />:<p style={{fontSize:"20px",fontWeight:"600",textAlign:"center",color:"gray"}}>Data Not Found</p>
}

</div> </div>:''
}


{
clickedValue===2?
<div>
<p style={{textAlign:"center",fontSize:"25px",marginTop:"20px",marginBottom:"20px",fontWeight:"700"}}>Pod2 Data</p>
<div style={{marginTop:"40px",marginBottom:"40px"}}>
{
podID2.length>0?<HighchartsReact highcharts={Highcharts} options={pod2} />:<p style={{fontSize:"20px",fontWeight:"600",textAlign:"center",color:"gray"}}>Data Not Found</p>
}

</div> </div>:''
}


{
clickedValue===3?
<div>
<p style={{textAlign:"center",fontSize:"25px",marginTop:"20px",marginBottom:"20px",fontWeight:"700"}}>Pod3 Data</p>
<div style={{marginTop:"40px",marginBottom:"40px"}}>
{
podID3.length>0?<HighchartsReact highcharts={Highcharts} options={pod3} />:<p style={{fontSize:"20px",fontWeight:"600",textAlign:"center",color:"gray"}}>Data Not Found</p>
}

</div> </div>:''
}


{
clickedValue===4?
<div>
<p style={{textAlign:"center",fontSize:"25px",marginTop:"20px",marginBottom:"20px",fontWeight:"700"}}>Pod4 Data</p>
<div style={{marginTop:"40px",marginBottom:"40px"}}>
{
podID4.length>0?<HighchartsReact highcharts={Highcharts} options={pod4} />:<p style={{fontSize:"20px",fontWeight:"600",textAlign:"center",color:"gray"}}>Data Not Found</p>
}

</div> </div>:''
}


{
clickedValue===5?
<div>
<p style={{textAlign:"center",fontSize:"25px",marginTop:"20px",marginBottom:"20px",fontWeight:"700"}}>Pod5 Data</p>
<div style={{marginTop:"40px",marginBottom:"40px"}}>
{
podID5.length>0?<HighchartsReact highcharts={Highcharts} options={pod5} />:<p style={{fontSize:"20px",fontWeight:"600",textAlign:"center",color:"gray"}}>Data Not Found</p>
}

</div> </div>:''
}


{
clickedValue===11?
<div>
<p style={{textAlign:"center",fontSize:"25px",marginTop:"20px",marginBottom:"20px",fontWeight:"700"}}>Pod6 Data</p>
<div style={{marginTop:"40px",marginBottom:"40px"}}>
{
podID11.length>0?<HighchartsReact highcharts={Highcharts} options={pod11} />:<p style={{fontSize:"20px",fontWeight:"600",textAlign:"center",color:"gray"}}>Data Not Found</p>
}

</div> </div>:''
}
    </div>
  )
}

