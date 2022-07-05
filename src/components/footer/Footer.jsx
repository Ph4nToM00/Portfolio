import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {SiHackerone} from 'react-icons/si'

const Footer = () => {
  return (
    <div>
      <footer>
        <a href="" className='footer__logo'> Tristan MICHEL</a>

        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experiences">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://facebook.com"><FaFacebookF /></a>
          <a href="https://instagram.com"><FiInstagram /></a>
          <a href="https://twitter.com"><IoLogoTwitter /></a>
          <a href="https://hackerone.com"><SiHackerone /></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Tristan MICHEL. All rights reserved.</small>
        </div>
      </footer>
    </div>
  )
}

export default Footer