import React from 'react'
import CTA from './CTA'
import ME from '../../assets/Me2.jpeg'
import Socials from './Socials'
import './header.css'
import { useState } from 'react'
import Typewriter from 'typewriter-effect';


const Header = () => {

  const [state] = useState({
    titulo1: "Hola yo soy",
    nombre: "MykeDev",
    titulo2: "Front End Developer"
  })

  return (
    <header>
          <div className="container header__container">
            <h5><div className='titulo'>{state.titulo1}</div></h5>

            <h1><div className='nombre'>
            
            <Typewriter
  options={{
    strings: [state.nombre],
    autoStart: true,
    loop: true,
    deleteSpeed: 100000000,
  }}
/></div></h1>
            <h2 className="text-light"><div className='title'>{state.titulo2}</div></h2>
    
        <CTA/>
        <Socials/>


          <div className='card mx-auto  mt-10 '>
             <div className='face front'>
                <img src={ME} className='foto mx-auto ' alt="" />
             </div>
             <div className='face back'>
                <h1>Maikol Zapata</h1>
                
                <p >
                  Profesional amante del desarrollo y la tecnología, ya que esta nos permite encontrar soluciones a los problemas que diariamente nos surgen.</p>

</div>

          </div>


      </div>
    </header>
  )
}

export default Header

