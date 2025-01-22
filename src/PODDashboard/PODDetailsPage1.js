import React from 'react';
import "./PODDetailsPage1.css";
import { HiMiniArrowRightEndOnRectangle } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
import { Link,useLocation  } from "react-router-dom";
import { IoAnalyticsOutline } from "react-icons/io5";
import { GrNetwork } from "react-icons/gr";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { TbStatusChange } from "react-icons/tb";
import { Canvas } from "@react-three/fiber";
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

    // const coordinates = [
    //   [-8452.918503,	-2661.374002,	0],
    //   [-8586.142834,	-2794.598332,	0],
    //   [4758.369321	,10550.62562	,0],
    //   [-8319.694173	,-2528.149672	,0],
    //   [-8186.469843 ,	-2394.925341 ,0],
    //   [-8053.245513	,-2261.701011,	0],
    //   [-7920.021183	,-2128.476681	,0],
    //   [-7786.796853	,-1995.252351,	0],
    //   [-7653.572523	,-1862.028021,	0],
    //   [-7520.348193	,-1728.803691,	0],
    //   [-7387.123862	,-1595.579361	,0],
    //   [-7253.899532	,-1462.355031,	0],
    //   [-7120.675202	,-1329.1307,	0],
    //   [-6987.450872	,-1195.90637,	0],
    //   [-6854.226542	,-1062.68204	,0],
    //   [-6721.002212	,-929.4577101,	0],
    //   [-6587.777882	,-796.23338	,0],
    //   [-6454.553552,	-663.0090499,	0],
    //   [-6321.329221	,-529.7847197	,0],
    //   [-6188.104891,	-396.5603896,	0],
    //   [-6054.880561	,-263.3360595 ,0],
    //   [-5921.656231	,-130.1117294,	0],
    //   [-5788.431901	,3.112600749	,0],
    //   [-5655.207571,	136.3369309	,0],
    //   [-5521.983241,	269.561261	,0],
    //   [-5388.758911	,402.7855911	,0],
    //   [-5255.53458,	536.0099212,	0],
    //   [-5122.31025	,669.2342514	,0],
    //   [-4989.08592,	802.4585815,	0],
    //   [-4855.86159	,935.6829116	,0],
    //   [-4722.63726,	1068.907242,	0],
    //   [-4589.41293	,1202.131572	,0],
    //   [-4456.1886	,1335.355902	,0],
    //   [-4322.96427	,1468.580232	,0],
    //   [-4189.739939,	1601.804562,	0],
    //   [-4056.515609	,1735.028892	,0],
    //   [-3923.291279	,1868.253222	,0],
    //   [-3790.066949	,2001.477553	,0],
    //   [-3656.842619,	2134.701883,	0],
    //   [-3523.618289	,2267.926213	,0],
    //   [-3390.393959	,2401.150543	,0],
    //   [-3257.169629	,2534.374873	,0],
    //   [-3123.945298	,2667.599203,	0],
    //   [4779.714238	,10574.1056	,0],
    //   [4800.303438,	10598.251,	0]
    
    // ];
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
            <Link to='/pod/powerEnergy' className='Link'>
            <div className='pods' style={{background:`${color}`}} >
            <p >
              <TbBrandGoogleAnalytics className='icon'/>
              </p> 
            Power/Energy Analysis
                
                
            </div>
            </Link>

            <Link to='/pod/LiveTrack' className='Link'>

            <div className='pods' style={{background:`${color}`}} > 
            <p >
              <GrNetwork  className='icon'/>
              </p>

            Live Network 
                
              
            </div>
            </Link>


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



      {/* <Canvas
      style={{ width: "100vw", height: "100vh" }}
      camera={{ position: [0, 0, 500], fov: 75 }}
    >
      <ambientLight intensity={0.5} />
      <axesHelper args={[500]} />
      <group>
        {coordinates.map(([x, y, z], index) => (
          <mesh key={index} position={[x / 10, y / 10, z / 10]}>
            <sphereGeometry args={[2, 16, 16]} />
            <meshStandardMaterial color="red" />
          </mesh>
        ))}
      </group>
    </Canvas> */}
     
    </div>
  )
}

export default PODDetailsPage1
