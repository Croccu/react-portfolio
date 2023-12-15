import React from 'react'
import { useState } from "react";
import './nav.css'
import { GoHome } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { PiLaptop } from "react-icons/pi";
import { TiMessages } from "react-icons/ti";


const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><GoHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><PiLaptop/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TiMessages/></a>
    </nav>
  )
}

export default Nav
