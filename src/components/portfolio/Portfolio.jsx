import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/react_hooks.jpg'
import IMG4 from '../../assets/css.png'
import IMG5 from '../../assets/python.webp'
import IMG6 from '../../assets/js.jpg'
import {useState} from 'react';
import Wrapper from '../Helpers/Wrapper';
import CD from '../../assets/code.png'

const data = [
  { id: 1,
    image: IMG1,
    title: 'React Hooks: useState',
    github: 'http://github.com/zmykedev',
    demo: ''
},
{ id: 2,
  image: IMG1,
  title: 'React Hooks: useEffect',
  github: 'http://github.com/zmykedev',
  demo: 'https://dribbble.com/'
},
{ id: 3,
  image: IMG1,
  title: 'React Hooks: useContext',
  github: 'http://github.com/zmykedev',
  demo: 'https://dribbble.com/'
},
{ id: 4,
  image: IMG4,
  title: 'Aprende CSS',
  github: 'http://github.com/zmykedev',
  demo: 'https://dribbble.com/'
},
{ id: 5,
  image: IMG5,
  title: 'Aprende Python',
  github: 'http://github.com/zmykedev',
  demo: 'https://dribbble.com/'
},
{ id: 6,
  image: IMG6,
  title: 'Aprende Javascript',
  github: 'http://github.com/zmykedev',
  demo: 'https://dribbble.com/'
}

]




const Portfolio = () => {
  const [isVisible, setRHooks] = useState(false)
  const [isVisible2, setRHooks2] = useState(false)

  const [count, setCount] = useState(0);

  const toggleVisibility = () => setRHooks(x => !x)
  const toggleVisibility2 = () => setRHooks2(x => !x)

  return (
    <Wrapper>
    <section id="portfolio">
      <h5>Skills importantes</h5>
      <h2>Portfolio</h2>

      
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) =>
          { if (id === 1) {

            return  <div key={id} className='portfolio__item'>
            <div className="portfolio__item-image ">
              <img className='h-44 w-96' src={image} alt={title}  />
            </div>
                        <h3>{title}</h3>
                        <div className="portfolio__item-cta">
                                <a href={github} target='_blank' rel='noreferrer' className='btn text-center text-xl'>Github</a>
                                
                                <button className='btn btn-primary' onClick={toggleVisibility}  target='_blank'>Live demo</button>
                        </div>
    </div>
          }

          if (id === 2) {

            return  <div key={id} className='portfolio__item'>
            <div className="portfolio__item-image ">
              <img className='h-44 w-96' src={image} alt={title}  />
            </div>
                        <h3>{title}</h3>
                        <div className="portfolio__item-cta">
                                <a href={github} target='_blank' rel='noreferrer' className='btn text-center text-xl'>Github</a>
                                
                                <button className='btn btn-primary' onClick={toggleVisibility2}  target='_blank'>Live demo</button>
                        </div>
    </div>
              }
            return (
              <div key={id} className='portfolio__item'>
                      <div className="portfolio__item-image ">
                        <img className='h-44 w-96' src={image} alt={title}  />
                      </div>
                                  <h3>{title}</h3>
                                  <div className="portfolio__item-cta">
                                          <a href={github} target='_blank' rel='noreferrer' className='btn text-center text-xl'>Github</a>
                                          
                                          <button className='btn btn-primary'  target='_blank'>Live demo</button>
                                  </div>
              </div>
            )
          })
        }

         {isVisible &&  (
        <div className="container portfolio__detail absolute rounded-2xl  w-75% h-5/6 bg-white p-4 text-black ">
          
              <button  onClick={toggleVisibility} className='float-right m-auto mr-2 mt-1'  >Cerrar</button>
            <h1 className='text-center mt-16'>¿ Que es un Hook de Reactjs?</h1>
            <div className="container hooks_cont">
                    <p className='mt-8' >Un hook es una función que nos permite conectarnos a la herramientas y caracteristicas de React.
                      El hook mas basico es useState que permite agregar un estado de reacción a los componentes de la función, lo que le agrega dinamismo y fluidez a nuestra aplicación ya que no renderea y su tiempo de carga es rapido.
                    </p>
                    <h3 className='mt-6'>El siguiente codigo genera la siguiente funcionalidad:</h3>
                    <img  className='mt-3' src={CD} alt="code" />
                    <p className='mt-6 text-center'>Las veces que clickes se veran reflejadas aqui  {count} veces.</p>

                    <div className='flex justify-center'><button className=' mt-3 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'onClick={() => setCount(count + 1)}>
                      Click aquí
                    </button></div>
                    
            </div>
          
            </div>
                          )
              }
              {isVisible2 &&  (
        <div className="container portfolio__detail absolute rounded-2xl md:h-max w-75% h-5/6 bg-white p-4 text-black ">
          
              <button  onClick={toggleVisibility2} className='float-right m-auto mr-2 mt-1'  >Cerrar</button>
            <h1 className='text-center mt-16'>useEffect</h1>
            <div className="container hooks_cont">
                    <p className='mt-8' >Un hook es una función que nos permite conectarnos a la herramientas y caracteristicas de React.
                      El hook mas basico es useState que permite agregar un estado de reacción a los componentes de la función, lo que le agrega dinamismo y fluidez a nuestra aplicación ya que no renderea y su tiempo de carga es rapido.
                    </p>
                    <h3 className='mt-6'>El siguiente codigo genera la siguiente funcionalidad:</h3>
                    <img  className='mt-3' src={CD} alt="code" />
                    <p className='mt-6 text-center'>Las veces que clickes se veran reflejadas aqui  {count} veces.</p>

                    <div className='flex justify-center'><button className=' mt-3 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'onClick={() => setCount(count + 1)}>
                      Click aquí
                    </button></div>
                    
            </div>
          
            </div>
                          )
              }
      </div>

    </section>
    </Wrapper>)
}

export default Portfolio