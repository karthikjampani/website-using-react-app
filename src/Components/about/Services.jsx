import React from 'react'
import Ele from '../assets/Elephant.png'
import '../about/service.css'
import {Info } from '../../Components';

function Services() {
  return (
    <div>
      <hr></hr>
      <h1>Our services</h1>
      <hr></hr>
     
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget orci eu velit fermentum elementum et sit amet mauris.</p>
      <div className='ele'>
        <img className='ele1' src={Ele} ></img>
      </div>
      <Info />
      
    </div>
  )
}

export default Services
