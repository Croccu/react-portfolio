import React from 'react'
import './portfolio.css'
// import IMG1 from '../../assets/BatC_no_bg.png'
// import IMG2 from '../../assets/AdoptMwa_no_bg.png'
import BatcCarousel from '../carousel/BatcCarousel.jsx'
import AdoptMwaCarousel from '../carousel/AdoptMwaCarousel.jsx'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>
      <br/>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image' id="carousel-container-batc">
            {/* <img src={IMG1} alt="" /> */}
            <BatcCarousel />
          </div>
          <br />
          <h3><strong>BatC</strong> - A boat rental platform where it's possible to rent boats or other crafts for a day or more.</h3>
          <br />
          <div className='portfolio__item-cta'>
            <a href="https://github.com/Croccu/batc" className='btn btn-primary' target='_blank' rel='noreferrer'>Github</a>
          </div>
        </article>
        <br/>
        <article className='portfolio__item'>
          <div className='portfolio__item-image' id='carousel-container-adoptmwa'>
            {/* <img src={IMG2} alt="" /> */}
            <AdoptMwaCarousel />
          </div>
          <br />
          <h3><strong>AdoptMwa</strong> - A mobile platform for adopting street dogs and cats in Mauritius.</h3>
          <br />
          <div className='portfolio__item-cta'>
            <a href="https://github.com/GeraldineFrancois/rails-adopt-mwa" className='btn btn-primary' target='_blank' rel='noreferrer'>Github</a>
          </div>        </article>
      </div>
    </section>
  )
}

export default Portfolio
