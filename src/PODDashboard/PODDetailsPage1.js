import React from 'react';
import "./PODDetailsPage1.css";
import { HiMiniArrowRightEndOnRectangle } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
import { Link,useLocation  } from "react-router-dom";
import { IoAnalyticsOutline } from "react-icons/io5";
import { GrNetwork } from "react-icons/gr";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { TbStatusChange } from "react-icons/tb";
function PODDetailsPage1() {
    // const navigate = useNavigate();

    // const handleRoute = (route) => {
    //   navigate(route);
    // };
    let pod1=[]
    let pod2=[1,2,3,45,1]
    let pod3=[10,23,3,5,1]
    let pod4=[]
    let pod5=[11,40,30,45,1]
    let color=pod1.length>0?"#51cf66":""
  return (
    <div>
          <div className="podBox" >
          <Link to='/pod/analytics' className='Link'>
         
            <div className='pods' style={{background:`${color}`}} >
              <p >
              <IoAnalyticsOutline  className='icon'/>
              </p>
          
           
         
            Pod Analytics
                
           
                
                

                
                {/* <div className="dropdown">
              <div ></div>
              <div >Power/Energy Analysis</div>
              <div >Live Network </div>
              <div >Journey Statistics</div>
            </div> */}
            </div>
            </Link>

            <div className='pods' style={{background:`${color}`}} >
            <p >
              <TbBrandGoogleAnalytics className='icon'/>
              </p> 
            Power/Energy Analysis
                
                
            </div>


            <div className='pods' style={{background:`${color}`}} > 
            <p >
              <GrNetwork  className='icon'/>
              </p>

            Live Network 
                
              
            </div>


            <div className='pods' style={{background:`${color}`}} > 
            <p >
              <TbStatusChange   className='icon'/>
              </p>
            Journey Statistics
                
               
            </div>


            {/* <div className='pods' style={{background:`${color}`}} > 
                pod5
                <HiMiniArrowRightEndOnRectangle color="#e8590c" />
              
            </div> */}
        {/* {Array.from({ length: 5 }).map((_, index) => (
          <div className="pods" key={index}>
            pod{index + 1}
            <HiMiniArrowRightEndOnRectangle color="#e8590c" />
            <div className="dropdown">
              <div >Option 1</div>
              <div >Option 2</div>
              <div >Option 1</div>
              <div >Option 2</div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default PODDetailsPage1
