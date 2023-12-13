import React from 'react';
import "./about.css";
import ME from '../../assets/profile_square.png';
import { BsAward } from "react-icons/bs";
import { LiaLaptopCodeSolid } from "react-icons/lia";



const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <BsAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>
            <article className='about__card'>
              <LiaLaptopCodeSolid className='about__icon'/>
              <h5>Projects</h5>
              <small>2</small>
            </article>
          </div>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam necessitatibus ducimus veritatis error eligendi, aliquam, soluta odit laborum blanditiis accusantium repellendus architecto ex asperiores voluptates obcaecati magni labore corporis repudiandae?</p>
          <a href="#contact" className='btn btn-primary'> Contact me</a>
        </div>
      </div>
    </section>
  )
}

export default About
