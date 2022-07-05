import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'
import {AiOutlineArrowRight} from 'react-icons/ai'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Tristan MICHEL</h1>
        <h5 className="text-light">Fullstack Developer & Pentester</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <div className="scroll__down">
         <a href="#contact" className='scroll__down'>Down<AiOutlineArrowRight /> </a>
        </div>
      </div>
    </header>
  )
}

export default Header