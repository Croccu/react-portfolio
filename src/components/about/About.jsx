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
      <br/>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Pic" />
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
          <p>
            I am a full stack web developer with a background in KYC & AML and Verifications. Additionally I've done some business development and sales work. I am an avid learner and a strong team player with a great work ethic. I take pride in what I do and am constantly looking to improve myself and my skills.
          </p>
          <p>
            In my free time I try to do outdoor activities as much as possible and I'm a big fan of sci-fi and fantasy movies. And I do game a bit also.
          </p>
          <a href="#contact" className='btn btn-primary'> Contact me</a>
        </div>
      </div>
    </section>
  )
}

export default About
