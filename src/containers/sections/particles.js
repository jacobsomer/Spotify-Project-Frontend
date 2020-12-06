import React, { Component } from 'react';
import Particles from 'react-particles-js';

class ParticleAnimation extends React.Component {
  render() {
    return (
      <Particles

         params={{
           particles: {
             number: {
               value: 500,
               density: {
                 enable: true,
                 value_area: 2000,
               }
             },
          "color": {
            "value": "white"
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": {
              "value": "#ffffff"
            },
            "opacity": 0.4,
            "width": 1
          },
           },
         }}
       />

    );
  }
}
export default ParticleAnimation;