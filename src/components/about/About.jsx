import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {MdSchool} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <MdSchool className='about__icons'/>
              <h5>Epitech</h5>
              <small>2 years</small>
            </article>
            <article className='about__card'>
              <MdSchool className='about__icons'/>
              <h5>Campus Academy</h5>
              <small>2 years</small>
            </article>
            <article className='about__card'>
              <MdSchool className='about__icons'/>
              <h5>42</h5>
              <small>2017</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, aut. Impedit error repellendus debitis, ratione amet beatae a. Molestias debitis incidunt quia itaque, obcaecati a tempora natus nihil minus qui.
          </p> 
          <a href="#contact" className='btn btn-primary'>Let's Talk !</a>
        </div>
      </div>
    </section>
  )
}

export default About