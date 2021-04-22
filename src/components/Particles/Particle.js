import React from 'react';
import Particles from 'react-particles-js';
import './Particles.css';

function Bg(){
    return (
      <Particles className='particlesStyle' 
      params={{
        particles: {
          color: {
            value: "#89c5e7"
          },
          line_linked: {
            color: {
              value: "#89c5e7"
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