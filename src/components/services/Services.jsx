import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Website design Illustrator, Figma.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Logo, Banner creation, Photoshop.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Visual and video editing for ads or stories on social networks, Final Cut Pro</p>
            </li>
          </ul>
        </article>
        {/* END OF UI DESIGN */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Website creation, Wordpress, HTML CSS.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>E-commerce website creation, PHP, ReactJS, Symphonie ...</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creation of dropshipping website, shopify.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Application creation, React Native.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Database management, MongoDB, MySQL.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>API creation.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Cyber Security</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Vulnerability scanning, bugbounty.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Site scan, Hawkscan.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Cybersecurity solution creation, Python.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Open Source Information Retrieval (OSINT), Peek-A-Who.</p>
            </li>
          </ul>
        </article>
        {/* END OF CYBERSECURITY */}
      </div>
    </section>
  )
}

export default Services