import React from 'react'
import './article.css'
import ins from '../assets/ins.png'
import Lin from '../assets/LIN.png'
import Red from '../assets/red.png'
import twitter from '../assets/twi.png'

function Article() {
  return (
    <div>
      <div>
      <h2>MANGO</h2>
      <h3>Copyright © 2018 </h3>
      <h3>All rights reserved</h3>
    </div>
    <div className='footer-img'>
      <img src={ins}  style={{ width: '12px', height: 'auto' }}/>
      <img src={Lin}/>
      <img src={twitter}/>
      <img src={Red} />
    </div>

    </div>
    
  )
}

export default Article
