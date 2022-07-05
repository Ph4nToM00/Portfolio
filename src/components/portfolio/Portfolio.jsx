import React from 'react'
import './portfolio.css'
import {RiGitRepositoryPrivateLine} from 'react-icons/ri'
import {MdOutlinePublic} from 'react-icons/md'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="first" />
          </div>
          <h3>Peek-A-Who <RiGitRepositoryPrivateLine /></h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/c0dejump/Peek-A-Who" className='btn' target='_blank' rel='noreferrer'>Github</a>
            <a href="https://github.com/" className='btn btn-primary' target='_blank' rel='noreferrer'>live demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="first" />
          </div>
          <h3>Hawkscan <MdOutlinePublic /></h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/c0dejump/HawkScan" className='btn' target='_blank' rel='noreferrer'>Github</a>
            <a href="https://github.com/" className='btn btn-primary' target='_blank' rel='noreferrer'>live demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="first" />
          </div>
          <h3>My Cinema <MdOutlinePublic /></h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Ph4nToM00/my_cinema" className='btn' target='_blank' rel='noreferrer'>Github</a>
            <a href="https://github.com/" className='btn btn-primary' target='_blank' rel='noreferrer'>live demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="first" />
          </div>
          <h3>PiePHP <MdOutlinePublic /></h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Ph4nToM00/PiePHP" className='btn' target='_blank' rel='noreferrer'>Github</a>
            <a href="https://github.com/" className='btn btn-primary' target='_blank' rel='noreferrer'>live demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="first" />
          </div>
          <h3>My IRC <MdOutlinePublic /></h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Ph4nToM00/MyIRC" className='btn' target='_blank' rel='noreferrer'>Github</a>
            <a href="https://github.com/" className='btn btn-primary' target='_blank' rel='noreferrer'>live demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="first" />
          </div>
          <h3>Portfolio <MdOutlinePublic /></h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Ph4nToM00/Portfolio" className='btn' target='_blank' rel='noreferrer'>Github</a>
            <a href="https://github.com/" className='btn btn-primary' target='_blank' rel='noreferrer'>live demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio