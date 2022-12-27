import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/one.jpg'
import AVTR2 from '../../assets/two.jpg'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import {BsLinkedin} from 'react-icons/bs'
import SwiperCore, {EffectCoverflow, Pagination, Navigation }from 'swiper/core';

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);



const data = [
  
  { id: 1,
    avatar: AVTR1,
    name: 'Marcelo Gonzalez',
    review: 'Como mentor de Maikol fui testigo de su rápida adaptación a las diferentes tecnologías. Su habilidad de investigación se desarrolló fuertemente, siendo capaz de buscar y ofrecer soluciones con cada herramienta tecnológica que le toco aprender. Hoy miro este portafolio React y es increíble lo mucho que ha avanzado en tan poco tiempo.',
    linkedin: 'https://www.linkedin.com/in/mjgq7/'
    

},
{ id: 2,
  avatar: AVTR2,
  name: 'Sebastian Alibaud',
  review: 'Maikol es una persona pro-activa con muchas ganas de seguir aprendiendo y aportando conocimiento.',
  linkedin: 'https://www.linkedin.com/in/sebastianalibaud/' 
  

}


]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Opiniones sobre clientes</h5>
      <h2>Testimonios</h2>

      <Swiper className='container testimonials__container w-max' modules={[]}
      
      effect={'coverflow'}
      speed={1500}
      navigation
      grabCursor= {true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{rotate: 60, strech: 0, depth: 120, modifier:6, slideShadows:true, }}
      
      >
        {

          data.map(({avatar, name, review, linkedin}, index)=>{
            return (
              <SwiperSlide key={index} className='testimonial '>
              <div className='client__avatar md:h-max'>
    
                <img src={avatar} alt="Avatar One" />
              </div>
              
                <h5>{name} </h5>
                <div className='mx-auto mt-2'>
        <a href={linkedin}><BsLinkedin/></a>
     
    </div> 
                <small className='client__review'>
                  {review}
                </small>
                
            </SwiperSlide>
            )
          })
        }
       
      
      </Swiper>
    </section>
  )
}

export default Testimonials



