import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/BatC_no_bg.png'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            
          </div>
          <h3>Title</h3>
          <a href="https://github.com" className='btn btn-primary' target='_blank' rel='noreferrer'>Github</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
