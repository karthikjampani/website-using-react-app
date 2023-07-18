import React from 'react'
import './brand.css'
import Pic from '../assets/mm.png'


function Brand() {
  return (
    <div> 
      <div className='img-cc'>
      <img src = {Pic} className='pic-moun' style={{ width: '1200px', height: 'auto' }}></img>
      <h2>Welcome 
      to our
      platform</h2>
    </div>
   
    </div>
    
  )
}

export default Brand
