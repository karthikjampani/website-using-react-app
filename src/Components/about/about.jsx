import React from 'react'
import './about.css'
import Happy from '../assets/HappyDog.png'
import {Info } from '../../Components';

function about() {
  return (
    <div className='a11'>
     
      <div className='Image'>
        <img src={Happy} className = "about-img" style={{width: '800px', height: 'auto'}}></img>
      </div>

      <div>
        <Info />
      </div>
      <div>
        <hr></hr>
        <h1>This is a demo website</h1>
        <p>Career Objective:

As a skilled web developer with expertise in React.js, my objective is to secure a challenging position in a reputable organization where I can leverage my technical skills and experience to contribute to the development of innovative and high-quality web applications. With a strong passion for front-end development and a dedication to staying updated with the latest industry trends and best practices, I aim to create user-friendly and visually appealing web solutions that meet clients' needs and exceed their expectations. I am seeking an environment that fosters growth, encourages creativity, and provides opportunities for continuous learning and professional development in the field of web development.
</p>
      </div>
     
    </div>
  )
}

export default about
