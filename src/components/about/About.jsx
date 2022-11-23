import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {IoLibraryOutline} from 'react-icons/io5'
import {MdContacts} from 'react-icons/md'
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
                  
                  <small> <li>Frontend</li></small>
                  <small> <li> Backend</li></small>
                  
                  
                  </article>
                  
                  <article className='about__card'>
                  <FaAward className='about__icon'/>
                  <h5>Proyectos</h5>
                  <small>Bidder</small>
                  </article>

            </div>
            <p>Hola, soy Maikol Zapata, un desarrollador web capaz de crear desde 0 tanto en backend como en frontend. En estos años me he dedicado a la programación (Full Stack Developer) pasando por diferentes lenguajes, metodologías,  tipos de diseños web como también el manejo de base de datos de Usuarios en las aplicaciones.</p>
      <a href="#contact" className='btn btn-primary'>Contáctame <MdContacts
/></a>
      </div>
    </div>
    </section>
  )
}

export default About