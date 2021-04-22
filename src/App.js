import React from "react";
import "./App.css";
import Weather from "./components/Weather";
import Particles from './components/Particles/Particle.js';



function App() {
  return (
    <div className="App">
      <Particles/>
      <Weather/>
      
    </div>
  );
}

export default App;
