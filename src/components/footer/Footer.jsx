/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Rico Paum</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href="https://facebook.com"><FaSquareFacebook/></a>
        <a href="https://instagram.com"><FaInstagramSquare/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Rico Paum. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
