import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {SiHackerone} from 'react-icons/si'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/tristan-m-671094171/" target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/Ph4nToM00" target='_blank' rel="noreferrer"><BsGithub /></a>
        <a href="https://twitter.com/__PH4NTOM__" target='_blank' rel="noreferrer"><BsTwitter /></a>
        <a href="https://hackerone.com/cyber_ph4ntom" target='_blank' rel='noreferrer'><SiHackerone /></a>
    </div>
  )
}

export default HeaderSocial