import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/BatC_no_bg.png'
import IMG2 from '../../assets/AdoptMwa_no_bg.png'
import PortfolioCarousel from './PortfolioCarousel.jsx'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>BatC</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn btn-primary' target='_blank' rel='noreferrer'>Github</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>AdoptMwa</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com" className='btn btn-primary' target='_blank' rel='noreferrer'>Github</a>
          </div>        </article>
      </div>
    </section>
  )
}

export default Portfolio
