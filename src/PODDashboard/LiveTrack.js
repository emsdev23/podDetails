import React, { useState, useEffect, useRef } from 'react';
import Papa from "papaparse";
import { Canvas } from "@react-three/fiber";



const XShapePlot = ({ coordinates }) => {
  return (
    <Canvas
    style={{width:"100vw",height:"100vh",marginTop:"0px"}}
      
      camera={{ position: [100, 100, 400], fov: 75 }}
    >
      <ambientLight intensity={0.5} />
      <axesHelper args={[0]} />
      <group>
        {coordinates.map(([x, y, z], index) => (
          <mesh key={index} position={[x / 20, y / 50, z ]}>
            <sphereGeometry args={[2, 16, 16]} />
            <meshStandardMaterial color="red" />
          </mesh>
        ))}
      </group>
    </Canvas>
  );
};

function LiveTrack() {

    const [coordinates, setCoordinates] = useState([]);

    // Function to handle file upload
    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        Papa.parse(file, {
          header: false, // If your CSV doesn't have headers
          complete: (result) => {
            // Extract coordinates (assuming X, Y, Z are in the first 3 columns)
            const parsedData = result.data.map((row) =>
              row.slice(0, 3).map(Number)
            );
            setCoordinates(parsedData);
          },
        });
      }
    };
  return (
    <div>

<div >
      {/* <h1>X-Shape Visualization</h1> */}
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        style={{ marginBottom: "20px" }}
      />
      {coordinates.length > 0 && <XShapePlot coordinates={coordinates} />}
    </div>
      
    </div>
  )
}

export default LiveTrack
