import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {IoLibraryOutline} from 'react-icons/io5'

import ME from '../../assets/Me.png'

const About = () => {
  return (
    <section id='about'> 
    <h5>Conoce</h5>
    <h2>Sobre mi </h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
            <img src={ME} alt="me"/>
        </div>
      </div>

      <div className="about__content">
            <div className="about__cards">

                  <article className='about__card'>
                  <FaAward className='about__icon'/>
                  <h5>Experiencia</h5>
                  <small>+2 años</small>
                  </article>

                  <article className='about__card'>
                  <IoLibraryOutline className='about__icon'/>
                  <h5>Skills</h5>
                  
                  <small> <li>Front End</li></small>
                  <small> <li> Back End</li></small>
                  
                  
                  </article>
                  
                  <article className='about__card'>
                  <FaAward className='about__icon'/>
                  <h5>Proyectos</h5>
                  <small><li>Live Demo Modals</li>
                    </small>
                  <small>
                    <li>Urbano Store</li>
                    </small>
                  </article>

            </div>
            <p>Hola, soy Maikol Zapata, desarrollador Front End capaz de crear contenido según requerimientos solicitados diseñando modelos acordes a las tecnologias de vanguardia actuales.</p>
      <a href="#contact" className='btn btn-primary mx-auto'>Contáctame </a>
      </div>
    </div>
    </section>
  )
}

export default About