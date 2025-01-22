


import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';


import Highcharts from 'highcharts';
import exportingInit from 'highcharts/modules/exporting';
import exportDataInit from 'highcharts/modules/export-data';
import HighchartsReact from 'highcharts-react-official';


import DatePickers from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { RiArrowDropDownLine } from "react-icons/ri";





function PODAnalytics() {
const [SensorDetails,setSensorDetails]=useState(null)
const [SensorDetailsDateFilter,setSensorDetailsDateFilter]=useState(null)
const SensorDetails_API="http://121.242.232.220:5010/getpodDetails"
const SensorDetailsAPI_DataFilter="http://121.242.232.220:5010/getpodDetailsFiltered"

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
// const startTimestamp = 1735543106;

// const updatedData = Poddata.map((record, index) => ({
// ...record,
// timestamp: startTimestamp + index * 10 / 1000, // Increment timestamp by 10ms
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
const podID11=[]
const TimeStamp=[]
// for(let i=0;i<SensorDetails.length;i++){}

// Process data only if SensorDetails is available

console.log(SensorDetailsDateFilter)
console.log(SensorDetails)
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
if (SensorDetails.E7) {
podID5.push(...SensorDetails.E7);
}
if (SensorDetails.E11) {
podID11.push(...SensorDetails.E11);
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
if (SensorDetailsDateFilter.E7) {
podID5.push(...SensorDetailsDateFilter.E5);
}
if (SensorDetailsDateFilter.E11) {
podID11.push(...SensorDetailsDateFilter.E11);
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
console.log(podID7)
console.log(podID11)
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

// pod 1 graph
const pod1= {
// Highcharts configuration options
chart: {
zoomType: 'x',
height: '400px',
title:"pod Energy"
},
series: [
{
name: " Energy (mWh) ",
// data: podID4.map((val)=>((val.energy==null?0:val.energy))),
data: podID1.map((val) => ({
y: (val.energy),
position_status: val.positionStatus,
WheelCount: val.wheelCount,
})),
yAxis: 0,
type: "line",
color:"green",
marker: {
enabled: false, // Disable markers for the series
},
},
{
name: " Target (rpm)",
// data: podID4.map((val)=>((val.targetSpeed==null?0:val.targetSpeed))),
data: podID1.map((val) => ({
y: (val.targetSpeed),
position_status: val.positionStatus,
WheelCount: val.wheelCount,
})),
yAxis: 1,
type: "line",
color:"blue",
marker: {
enabled: false, // Disable markers for the series
},
},
{
name: " Actual (rpm)",
// data: podID4.map((val)=>((val.actualSpeed==null?0:val.actualSpeed))),
data: podID1.map((val) => ({
y: (val.actualSpeed),
position_status: val.positionStatus,
WheelCount: val.wheelCount,
})),
yAxis: 1,
type: "line",
color:"brown",
marker: {
enabled: false, // Disable markers for the series
},
},

{
name: " Power (mW)",
// data: podID4.map((val)=>((val.actualSpeed==null?0:val.actualSpeed))),
data: podID1.map((val) => ({
y: (val.power),
position_status: val.positionStatus,
WheelCount: val.wheelCount,
})),
yAxis: 0,
type: "line",
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
{
title: {
text: " Actual (mrpm)/Target (mrpm)",
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
<b>${this.series.name}:</b> ${this.y}<br/>
<b>Position (m):</b> ${point.position_status || 'N/A'}
<br/>
<b>Time:</b> ${this.key}<br/>
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

// pod 2 graph
const pod2= {
// Highcharts configuration options
chart: {
zoomType: 'x',
height: '400px',
title:"pod Energy"
},
series: [
{
name: "Energy (mWh)",
// data: podID4.map((val)=>((val.energy==null?0:val.energy))),
data: podID2.map((val) => ({
y: (val.energy),
position_status: val.positionStatus,
WheelCount: val.wheelCount,
})),
yAxis: 0,
type: "line",
color:"green",
marker: {
enabled: false, // Disable markers for the series
},
},
{
name: "Target (rpm)",
// data: podID4.map((val)=>((val.targetSpeed==null?0:val.targetSpeed))),
data: podID2.map((val) => ({
y: (val.targetSpeed),
position_status: val.positionStatus,
WheelCount: val.wheelCount,
})),
yAxis: 1,
type: "line",
color:"blue",
marker: {
enabled: false, // Disable markers for the series
},
},
{
name: "Actual (rpm)",
// data: podID4.map((val)=>((val.actualSpeed==null?0:val.actualSpeed))),
data: podID2.map((val) => ({
y: (val.actualSpeed),
position_status: val.positionStatus,
WheelCount: val.wheelCount,
})),
yAxis: 1,
type: "line",
color:"brown",
marker: {
enabled: false, // Disable markers for the series
},
},
{
name: "Power (mW)",
// data: podID4.map((val)=>((val.actualSpeed==null?0:val.actualSpeed))),
data: podID2.map((val) => ({
y: (val.power),
position_status: val.positionStatus,
WheelCount: val.wheelCount,
})),
yAxis: 0,
type: "line",
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
text: "Pod Energy (mWh)/Power (mW)",
style:{
fontSize:"15px"
}
},
},
{
title: {
text: "Target (rpm)/Actual (rpm)",
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
<b>${this.series.name}:</b> ${this.y}<br/>
<b>Position (m):</b> ${point.position_status || 'N/A'}<br/>
<b>Time:</b> ${this.key}<br/>
`;
},
style: {
fontSize: '12px',
},
},
xAxis: {
type: "category",
categories:podID2.map((val)=>((val.timestamp).split(" ").splice(4, 1)))
},
plotOptions: {
line: {
lineWidth: 2, // Increase the line thickness
},
},
// ...
};

// pod 3 graph
const pod3= {
// Highcharts configuration options
chart: {
zoomType: 'x',
height: '400px',
title:"pod Energy"
},
series: [
{
name: "Energy (mWh) ",
// data: podID4.map((val)=>((val.energy==null?0:val.energy))),
data: podID3.map((val) => ({
y: (val.energy),
position_status: val.positionStatus,
WheelCount: val.wheelCount,
})),
yAxis: 0,
type: "line",
color:"green",
marker: {
enabled: false, // Disable markers for the series
},
},
{
name: "Target (rpm)",
// data: podID4.map((val)=>((val.targetSpeed==null?0:val.targetSpeed))),
data: podID3.map((val) => ({
y: (val.targetSpeed),
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
name: "Actual (rpm)",
// data: podID4.map((val)=>((val.actualSpeed==null?0:val.actualSpeed))),
data: podID3.map((val) => ({
y: (val.actualSpeed),
position_status: val.positionStatus,
WheelCount: val.wheelCount,
})),
yAxis: 1,
type: "line",
color:"brown",
marker: {
enabled: false, // Disable markers for the series
},
},
{
name: "Power (mW)",
// data: podID4.map((val)=>((val.actualSpeed==null?0:val.actualSpeed))),
data: podID3.map((val) => ({
y: (val.power),
position_status: val.positionStatus,
WheelCount: val.wheelCount,
})),
yAxis: 0,
type: "line",
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
text: "Pod Energy (mWh)/Power (mW)",
style:{
fontSize:"15px"
}
},
},
{
title: {
text: "Target (rpm)/Actual (rpm)",
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
<b>${this.series.name}:</b> ${this.y}<br/>
<b>Position (m):</b> ${point.position_status || 'N/A'}<br/>
<b>Time:</b> ${this.key}<br/>
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
name: "Energy (mWh)",
// data: podID4.map((val)=>((val.energy==null?0:val.energy))),
data: podID4.map((val) => ({
y: (val.energy),
position_status: val.positionStatus,
WheelCount: val.wheelCount,
})),
yAxis: 0,

type: "line",
color:"green",
marker: {
enabled: false, // Disable markers for the series
},
},
{
name: "Target (rpm)",
// data: podID4.map((val)=>((val.targetSpeed==null?0:val.targetSpeed))),
data: podID4.map((val) => ({
y: (val.targetSpeed),
position_status: val.positionStatus,
WheelCount: val.wheelCount,
})),
yAxis: 1,
type: "line",
color:"blue",
marker: {
enabled: false, // Disable markers for the series
},
},
{
name: "Actual (rpm)",
// data: podID4.map((val)=>((val.actualSpeed==null?0:val.actualSpeed))),
data: podID4.map((val) => ({
y: (val.actualSpeed),
position_status: val.positionStatus,
WheelCount: val.wheelCount,
})),
yAxis: 1,
type: "line",
color:"brown",
marker: {
enabled: false, // Disable markers for the series
},
},
{
name: "Power (mW)",
// data: podID4.map((val)=>((val.actualSpeed==null?0:val.actualSpeed))),
data: podID4.map((val) => ({
y: (val.power),
position_status: val.positionStatus,
WheelCount: val.wheelCount,
})),
yAxis: 0,
type: "line",
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
text: "Pod Energy (mWh)/Power (mW)",
style:{
fontSize:"15px"
}
},
},
{
title: {
text: "Target (rpm)/Actual (rpm)",
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
<b>${this.series.name}:</b> ${this.y}<br/>
<b>Position (m):</b> ${point.position_status || 'N/A'}<br/>
<b>Time:</b> ${this.key}<br/>
`;
},
style: {
fontSize: '12px',
},
},
xAxis: {
type: "category",
categories:podID4.map((val)=>((val.timestamp).split(" ").splice(4, 1))),
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
name: "Energy (mWh) ",
// data: podID4.map((val)=>((val.energy==null?0:val.energy))),
data: podID5.map((val) => ({
y: (val.energy),
position_status: val.positionStatus,
WheelCount: val.wheelCount,
})),
yAxis: 0,
type: "line",
color:"green",
marker: {
enabled: false, // Disable markers for the series
},
},
{
name: "Target (rpm)",
// data: podID4.map((val)=>((val.targetSpeed==null?0:val.targetSpeed))),
data: podID5.map((val) => ({
y: (val.targetSpeed),
position_status: val.positionStatus,
WheelCount: val.wheelCount,
})),
yAxis: 1,
type: "line",
color:"blue",
marker: {
enabled: false, // Disable markers for the series
},
},
{
name: "Actual (rpm)",
// data: podID4.map((val)=>((val.actualSpeed==null?0:val.actualSpeed))),
data: podID5.map((val) => ({
y: (val.actualSpeed),
position_status: val.positionStatus,
WheelCount: val.wheelCount,
})),
yAxis: 1,
type: "line",
color:"brown",
marker: {
enabled: false, // Disable markers for the series
},
},
{
name: "Power (mW)",
// data: podID4.map((val)=>((val.actualSpeed==null?0:val.actualSpeed))),
data: podID5.map((val) => ({
y: (val.power),
position_status: val.positionStatus,
WheelCount: val.wheelCount,
})),
yAxis: 0,
type: "line",
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
text: "Pod Energy (mWh)/Power (mW)",
style:{
fontSize:"15px"
}
},
},
{
title: {
text: "Target (rpm) / Actual (rpm)",
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
<b>${this.series.name}:</b> ${this.y}<br/>
<b>Position (m):</b> ${point.position_status || 'N/A'}<br/>
<b>Time:</b> ${this.key}<br/>
`;
},
style: {
fontSize: '12px',
},
},
xAxis: {
type: "category",
categories:podID5.map((val)=>((val.timestamp).split(" ").splice(4, 1))),
},
plotOptions: {
line: {
lineWidth: 2, // Increase the line thickness
},
},
};

const pod7= {
// Highcharts configuration options
chart: {
zoomType: 'x',
height: '400px',
title:"pod Energy"
},
series: [
{
name: " Energy (mWh) ",
// data: podID4.map((val)=>((val.energy==null?0:val.energy))),
data: podID7.map((val) => ({
y: (val.energy),
position_status: val.positionStatus,
})),
yAxis: 0,
type: "line",
color:"green",
marker: {
enabled: false, // Disable markers for the series
},
},
{
name: "Target (rpm)",
// data: podID4.map((val)=>((val.targetSpeed==null?0:val.targetSpeed))),
data: podID7.map((val) => ({
y: (val.targetSpeed),
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
name: "Actual (rpm)",
// data: podID4.map((val)=>((val.actualSpeed==null?0:val.actualSpeed))),
data: podID7.map((val) => ({
y: (val.actualSpeed),
position_status: val.positionStatus,
})),
yAxis: 1,
type: "line",
color:"brown",
marker: {
enabled: false, // Disable markers for the series
},
},

{
name: "Power (mW)",
// data: podID4.map((val)=>((val.actualSpeed==null?0:val.actualSpeed))),
data: podID7.map((val) => ({
y: (val.power),
position_status: val.positionStatus,
WheelCount: val.wheelCount,
})),
yAxis: 0,
type: "line",
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
text: "Pod Energy (mWh)/Power (mW)",
style:{
fontSize:"15px"
}
},
},
{
title: {
text: "Target (rpm) / Actual (rpm)",
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
<b>${this.series.name}:</b> ${this.y}<br/>
<b>Position (m):</b> ${point.position_status || 'N/A'}<br/>
<b>Time:</b> ${this.key}<br/>
`;
},
style: {
fontSize: '12px',
},
},
xAxis: {
type: "category",
categories:podID7.map((val)=>((val.timestamp).split(" ").splice(4, 1))),
},
plotOptions: {
line: {
lineWidth: 2, // Increase the line thickness
},
},
};

const pod11= {
// Highcharts configuration options
chart: {
zoomType: 'x',
height: '400px',
title:"pod Energy"
},
series: [
{
name: "pod 11 Energy (mWh) ",
// data: podID4.map((val)=>((val.energy==null?0:val.energy))),
data: podID11.map((val) => ({
y: (val.energy),
position_status: val.positionStatus,
})),
yAxis: 0,
type: "line",
color:"green",
marker: {
enabled: false, // Disable markers for the series
},
},
{
name: "pod 11 Target (rpm)",
// data: podID4.map((val)=>((val.targetSpeed==null?0:val.targetSpeed))),
data: podID11.map((val) => ({
y: (val.targetSpeed),
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
name: "pod 11 Actual (rpm)",
// data: podID4.map((val)=>((val.actualSpeed==null?0:val.actualSpeed))),
data: podID11.map((val) => ({
y: (val.actualSpeed),
position_status: val.positionStatus,
})),
yAxis: 1,
type: "line",
color:"brown",
marker: {
enabled: false, // Disable markers for the series
},
},

{
name: "pod 11 Power (mWh)",
// data: podID4.map((val)=>((val.actualSpeed==null?0:val.actualSpeed))),
data: podID11.map((val) => ({
y: (val.power),
position_status: val.positionStatus,
WheelCount: val.wheelCount,
})),
yAxis: 0,
type: "line",
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
text: "Pod Energy (mWh)/Power(mW)",
style:{
fontSize:"15px"
}
},
},
{
title: {
text: "Target (rpm) / Actual (rpm)",
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
categories:podID11.map((val)=>((val.timestamp).split(" ").splice(4, 1))),
},
plotOptions: {
line: {
lineWidth: 2, // Increase the line thickness
},
},
};

const now = new Date();
const local = now.toLocaleDateString(); // Use toLocaleDateString() instead of toLocaleString()
const [month, day, year] = local.split("/"); // Split the date by "/"
const currentdate = `${day}/${month}/${year}`; // Rearrange the day and month
const currentYearMont=`${month}/${year}`

return (
<div className='' >
<style>
    {`
      html {
        font-size: 100%;
      }
    `}
  </style>




<div style={{ position: "relative", width:"200px",paddingLeft:"40px",marginTop:"30px" }}>
<DatePickers
id="date"
className="form-control"
selected={selectedDate}
onChange={handleDateChange}
placeholderText={currentdate}
/>

</div>

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
</div></div>:""

}

{
clickedValue===3?
<div>
<p style={{textAlign:"center",fontSize:"25px",marginTop:"20px",marginBottom:"20px",fontWeight:"700"}}>Pod3 Data</p>
<div style={{marginTop:"40px",marginBottom:"40px"}}>
{
podID3.length>0?<HighchartsReact highcharts={Highcharts} options={pod3} />:<p style={{fontSize:"20px",fontWeight:"600",textAlign:"center",color:"gray"}}>Data Not Found</p>
}
</div></div>:""

}
{
clickedValue===4?
<div>
<p style={{textAlign:"center",fontSize:"25px",marginTop:"20px",marginBottom:"20px",fontWeight:"700"}}> Pod4 Data</p>
<div style={{marginTop:"40px",marginBottom:"40px"}}>
{
podID4.length>0?<HighchartsReact highcharts={Highcharts} options={pod4} />:<p style={{fontSize:"20px",fontWeight:"600",textAlign:"center",color:"gray"}}>Data Not Found</p>
}
</div>
</div>:""

}


{
clickedValue===5?
<div>
<p style={{textAlign:"center",fontSize:"25px",marginTop:"20px",marginBottom:"20px",fontWeight:"700"}}> Pod5 Data</p>
<div style={{marginTop:"40px",marginBottom:"40px"}}>
{
podID5.length>0?<HighchartsReact highcharts={Highcharts} options={pod5} />:<p style={{fontSize:"20px",fontWeight:"600",textAlign:"center",color:"gray"}}>Data Not Found</p>
}
</div>
</div>:""

}

{
clickedValue===7?
<div>
<p style={{textAlign:"center",fontSize:"25px",marginTop:"20px",marginBottom:"20px",fontWeight:"700"}}> Pod7 Data</p>
<div style={{marginTop:"40px",marginBottom:"40px"}}>
{
podID7.length>0?<HighchartsReact highcharts={Highcharts} options={pod7} />:<p style={{fontSize:"20px",fontWeight:"600",textAlign:"center",color:"gray"}}>Data Not Found</p>
}
</div>
</div>:""

}

{
clickedValue===11?
<div>
<p style={{textAlign:"center",fontSize:"25px",marginTop:"20px",marginBottom:"20px",fontWeight:"700"}}> Pod6 Details</p>
<div style={{marginTop:"40px",marginBottom:"40px"}}>
{
podID11.length>0?<HighchartsReact highcharts={Highcharts} options={pod11} />:<p style={{fontSize:"20px",fontWeight:"600",textAlign:"center",color:"gray"}}>Data Not Found</p>
}
</div>
</div>:""

}



{/* <p style={{color:"#ffec99"}} className='heading'> POD DETAILS</p> */}

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
<div className="value">{0} rpm</div>
</div>

<div className="btn">
<div className="type">Platoon Speed</div>
<div className="value">{0} rpm</div>
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

export default PODAnalytics;
// 10.9.252.199
