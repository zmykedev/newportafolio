import React from 'react'
import CTA from './CTA'
import ME from '../../assets/Me2.jpeg'
import Socials from './Socials'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola yo soy</h5>
        <h1>MykeDev</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA/>
        <Socials/>
        {/* <a href="blank" className='scroll__down'>Scroll Down</a> */}
        <div className='me'>
          <img src={ME} alt="me" className='comic' />
        </div>
        
        
      </div>
    </header>
  )
}

export default Header

