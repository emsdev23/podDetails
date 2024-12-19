import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";

const App = () => {
  // Track data
  const track1Points = {
    x: [-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10],
    y: [-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10],
    z: Array(11).fill(0), // Flat on Z-axis
  };

  const track2Points = {
    x: [-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10],
    y: [10, 8, 6, 4, 2, 0, -2, -4, -6, -8, -10],
    z: Array(11).fill(0), // Flat on Z-axis
  };

  // State for pod positions
  const [pod1Position, setPod1Position] = useState({ x: -10, y: -10, z: 0 });
  const [pod2Position, setPod2Position] = useState({ x: -10, y: 10, z: 0 });

  // Animation parameters
  const speed = 0.02; // Adjust this for faster or slower movement
  const frameRate = 16; // 16ms ~ 60 FPS

  useEffect(() => {
    let t1 = 0; // Time for pod 1
    let t2 = 0; // Time for pod 2

    const animate = () => {
      // Calculate next position for Pod 1
      const pod1Index = Math.floor(t1);
      const pod1NextIndex = (pod1Index + 1) % track1Points.x.length;
      const pod1Progress = t1 - pod1Index;

      const pod1NextPosition = {
        x: interpolate(track1Points.x[pod1Index], track1Points.x[pod1NextIndex], pod1Progress),
        y: interpolate(track1Points.y[pod1Index], track1Points.y[pod1NextIndex], pod1Progress),
        z: 0,
      };

      setPod1Position(pod1NextPosition);

      // Calculate next position for Pod 2
      const pod2Index = Math.floor(t2);
      const pod2NextIndex = (pod2Index + 1) % track2Points.x.length;
      const pod2Progress = t2 - pod2Index;

      const pod2NextPosition = {
        x: interpolate(track2Points.x[pod2Index], track2Points.x[pod2NextIndex], pod2Progress),
        y: interpolate(track2Points.y[pod2Index], track2Points.y[pod2NextIndex], pod2Progress),
        z: 0,
      };

      setPod2Position(pod2NextPosition);

      // Update times
      t1 += speed;
      t2 += speed * 0.8; // Adjust relative speed of Pod 2

      // Loop animation
      requestAnimationFrame(animate);
    };

    // Start animation
    animate();
  }, [speed]);

  // Interpolation function
  const interpolate = (start, end, progress) => start + (end - start) * progress;

  // Tracks
  const track1 = {
    x: track1Points.x,
    y: track1Points.y,
    z: track1Points.z,
    mode: "lines",
    name: "Track 1",
    line: { color: "blue", width: 10 },
    type: "scatter3d",
  };

  const track2 = {
    x: track2Points.x,
    y: track2Points.y,
    z: track2Points.z,
    mode: "lines",
    name: "Track 2",
    line: { color: "red", width: 5 },
    type: "scatter3d",
  };

  // Pods
  const pod1 = {
    x: [pod1Position.x],
    y: [pod1Position.y],
    z: [pod1Position.z],
    mode: "markers",
    name: "Pod 1",
    marker: { size: 10, color: "green", symbol: "circle" },
    type: "scatter3d",
  };

  const pod2 = {
    x: [pod2Position.x],
    y: [pod2Position.y],
    z: [pod2Position.z],
    mode: "markers",
    name: "Pod 2",
    marker: { size: 10, color: "purple", symbol: "circle" },
    type: "scatter3d",
  };

  const layout = {
    title: "3D Railway Track with Smooth Moving Pods",
    scene: {
      xaxis: { title: "X-axis" },
      yaxis: { title: "Y-axis" },
      zaxis: { title: "Z-axis" },
      dragmode: "orbit", // Allow free rotation of the graph
    },
    
    showlegend: true,
    width: 800,
    height: 600,
  };

  return (
    <div style={{ width: "100%" }}>
      <Plot data={[track1, track2, pod1, pod2]} layout={layout} />
    </div>
  );
};

export default App;
