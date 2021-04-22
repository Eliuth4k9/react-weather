import React from 'react';
import Particles from 'react-particles-js';
import './Particles.css';

function Bg(){
    return (
      <Particles className='particlesStyle' 
      params={{
        particles: {
          color: {
            value: "#FF69B4"
          },
          line_linked: {
            color: {
              value: "#FF69B4"
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

export default Bg;