import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
import {GrReactjs} from 'react-icons/gr'


const Footer = () => {
  return (
    <footer>
      <a href="#react" className='footer__logo '>PORTAFOLIO REACT <div className='ml-3 mt-2.5'><GrReactjs/></div></a>
      
      <ul className='permalinks'>
      <li>     <a href="#about">Sobre mi </a></li>
      
      <li> <a href="#contact">Contacto</a></li>
      <li> <a href="#experience">Experiencia</a></li>
      <li> <a href="#services">Servicios</a></li>
      <li> <a href="#portfolio">Portafolio</a></li>
      <li> <a href="#testimonials">Testimonios</a></li>
      </ul>


          <div className="footer__socials">
            <a href="https://facebook.com"><FaFacebookF/></a>
            <a href="https://instagram.com"><FiInstagram/></a>
            <a href="https://twitter.com/"><IoLogoTwitter/></a>
          </div>


      <div className="footer__copyright">
        <small>&copy; MykeDev Portfolio. Todos los derechos reservados. </small>
      </div>


    </footer>
  )
}

export default Footer