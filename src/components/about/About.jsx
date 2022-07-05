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
          Je m'appelle Tristan, j'ai 24 ans et je suis un passionné d'informatique. J'ai commencé en autodidacte, dans le développement web et la cybersécurité, j'ai voulu ensuite faire des études liées à ce domaine, j'ai commencé en réseau et en télécommunication, pour revenir au monde du développement web, je souhaiterais à terme de mes études être pentester en cybersécurité. 
          </p> 
          <p>
          My name is Tristan, I'm 24 years old and I'm passionate about computers. I started as a self-taught person, in web development and cybersecurity, then I wanted to study related to this field, I started in network and telecommunication, to come back to the world of web development, I would like to be a cybersecurity pentester at the end of my studies. 
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk !</a>
        </div>
      </div>
    </section>
  )
}

export default About