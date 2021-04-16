import React from "react";
import "./App.css";
import Weather from "./components/Weather";
import Particles from 'react-particles-js';



function App() {
  return (
    <div className="App">
      <Weather/>
      <Test/>
    </div>
  );
}


function Test(){
      return (
        <Particles
        params={{
          particles: {
            color: {
              value: "#87CEEB"
            },
            line_linked: {
              color: {
                value: "#87CEEB"
              }
            },
            number: {
              value: 70
            },
            size: {
              value: 8
            }
          }
        }}
      />
      );

}

export default App;
