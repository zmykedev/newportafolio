import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'



const Experience = () => {
  return (
    <section id='experience'> 
    <h5>Cuales son mis habilidades</h5>
    <h2>Mi Experiencia</h2>

    <div className="container experience__container">
          <div className="experience__frontend">
                <div className="experience__content">
                      <article className="experience__details">
                      <BsPatchCheckFill className='experience__details-icon'/> 
                      <div>
                            <h4>HTML</h4>
                            <small>Experimentado</small>
                      </div>
                      </article>
                     <article className="experience__details">
                     <BsPatchCheckFill className='experience__details-icon'/> 
                      <div>
                      <h4>CSS</h4>
                      <small>Experimentado</small>
                      </div>
                     </article>
                     <article className="experience__details">
                     <BsPatchCheckFill className='experience__details-icon'/> 
                      <div>
                      <h4>Javascript</h4>
                      <small>Experimentado</small>
                      </div>
                     </article>
                     <article className="experience__details">
                     <BsPatchCheckFill className='experience__details-icon'/> 
                      <div>
                      <h4>Reactjs</h4>
                      <small>Experimentado</small>
                      </div>
                     </article>
                </div>
          </div>
      <div className="experience__backend">

      <div className="experience__content">
                     <article className="experience__details">
                     <BsPatchCheckFill className='experience__details-icon'/> 
                      <div>
                      <h4>Python</h4>
                      <small>Experimentado</small>
                      </div>
                     </article>
                     <article className="experience__details">
                     <BsPatchCheckFill className='experience__details-icon'/> 
                      <div>
                      <h4>Flask</h4>
                      <small>Experimentado</small>
                      </div>
                     </article>
                     <article className="experience__details">
                     
                     <BsPatchCheckFill className='experience__details-icon'/> 
                     <div>
                     <h4>Django</h4>
                      <small>Experimentado</small>
                     </div>
                     </article>
                     <article className="experience__details">
                     <BsPatchCheckFill className='experience__details-icon'/> 
                     <div>
                     <h4>MySQL</h4>
                      <small>Experimentado</small>
                     </div>
                     </article>
                </div>
                </div>
      </div>
    </section>
  )
}

export default Experience