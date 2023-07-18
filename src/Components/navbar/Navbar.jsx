import React from 'react'
import './navbar.css'
import { BrowserRouter, Routes, NavLink, Route} from 'react-router-dom';
import About from '../about/about';
import Service from '../about/Services'
import Contact from '../about/Contact'
import Home from '../info/Home'

function Navbar() {
  return (
    <BrowserRouter>
    
    <div className='logo'>
      <ul>
        <h1>MANGO</h1>
        <li><NavLink to="home">Home</NavLink></li>
        <li><NavLink to="about">About</NavLink></li>
        <li><NavLink to="service">Services</NavLink></li>
        <li><NavLink to="Contact">Contact</NavLink></li>
      </ul>
    </div>
    <Routes>
    <Route path='about' element = {<About/>} />
    <Route path='service' element = {<Service/>} />
    <Route path='Contact' element = {<Contact/>} />
    <Route path='home' element={<Home/>}  />

    </Routes>
    </BrowserRouter>
      
  )
}

export default Navbar
