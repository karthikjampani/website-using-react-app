import {Brand, Article, Info } from '../../Components';
import '../info/home.css'

import React from 'react'

function Home() {
  return (
    <div>
      <Brand />
    <div className='twow'>
     <Info />
    </div>
    <div>
    <Article />
    </div>
      
    </div>
  )
}

export default Home
