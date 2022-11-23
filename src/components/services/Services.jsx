import React from 'react'
import {BiCheck} from 'react-icons/bi'
import './services.css'

const Services = () => {
  return (
    <section id="serv">
    <h5>Que ofrezco</h5>
    <h2>Servicios</h2>  
    <div className="container services__container">

        <article className="service">
            <div className="service__head">
              <h3>Diseño UI/UX</h3>
            </div>

            <ul className="service__list">
            <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Diseño de figma.</p>
              </li>
            <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Diseño de pagina web.</p>
              </li>
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Diseño de pagina web responsive.</p>
              </li>
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Actualización y rediseño web.</p>
              </li>
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Integración de elementos de diseño.</p>
              </li>
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Mejorar el proceso de usuario.</p>
              </li>
             
           
            </ul>
        </article>

        <article className="service">
            <div className="service__head">
              <h3>Desarrollo Web Backend</h3>
            </div>

            <ul className="service__list">
            <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Uso de código limpio y mantenible.</p>
              </li>
            <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Administración de la pagina web.</p>
              </li>

              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Sistema de autenticación.</p>
              </li>
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Uso de servicios AWS.</p>
              </li>
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Integración de base de datos en AWS.</p>
              </li>
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Sistemas solicitudes API.</p>
              </li>
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Integraciones.</p>
              </li>
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Mantenimiento web.</p>
              </li>
            
            </ul>
        </article>

        <article className="service">
            <div className="service__head">
              <h3>Desarrollo Web Frontend</h3>
            </div>

            <ul className="service__list">
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Uso de código limpio y mantenible.</p>
              </li>
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Creaciónes visuales propias.</p>
              </li>
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Uso de Canvas</p>
              </li>
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>HTML con estilos Bootstrap</p>
              </li>
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>HTML con estilos Tailwind</p>
              </li>
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Aplicaciones dinamicas.</p>
              </li>
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>HTML con funciones Javascript.</p>
              </li>
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Aplicaciones Reactjs</p>
              </li>
              <li>
                  <BiCheck  className='service__list-icon'/>
                  <p>Aplicaciones Nextjs</p>
              </li>
              
            </ul>
        </article>

    </div>
      
    </section>
  )
}

export default Services