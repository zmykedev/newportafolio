import React from 'react'
import './nav.css'
import {MdOutlineRecordVoiceOver} from 'react-icons/md'
import {SiWindowsterminal} from 'react-icons/si'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      
      <a href="#about" onClick={ () => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={ () => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#serv" onClick={ () => setActiveNav('#serv')} className={activeNav === '#serv' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#portfolio" onClick={ () => setActiveNav('#portfolio')} className={activeNav === 'testimonials' ? 'active' : ''}><SiWindowsterminal/></a>
      <a href="#testimonials" onClick={ () => setActiveNav('#testimonials')} className={activeNav === 'portfolio' ? 'active' : ''}><MdOutlineRecordVoiceOver/></a>
      <a href="#contact" onClick={ () => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
  

    </nav>
  )
}

export default Nav