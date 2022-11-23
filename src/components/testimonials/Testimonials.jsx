import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/one.jpg'
import AVTR2 from '../../assets/two.jpg'
import AVTR3 from '../../assets/three.jpg'
import AVTR4 from '../../assets/fourt.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import SwiperCore, {EffectCoverflow, Pagination, Navigation }from 'swiper/core';

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);



const data = [
  
  { id: 1,
    avatar: AVTR1,
    name: 'Marcelo Gonzalez',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ducimus et nemo explicabo, ipsum quibusdam porro illum officia, consectetur voluptatum necessitatibus ea animi fugiat aut eaque tempore quo soluta cumque.' 
    

},
{ id: 2,
  avatar: AVTR2,
  name: 'Jesus Ramirez',
  review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ducimus et nemo explicabo, ipsum quibusdam porro illum officia, consectetur voluptatum necessitatibus ea animi fugiat aut eaque tempore quo soluta cumque.' 
  

},
{ id: 3,
  avatar: AVTR3,
  name: 'Pedro Picasa',
  review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ducimus et nemo explicabo, ipsum quibusdam porro illum officia, consectetur voluptatum necessitatibus ea animi fugiat aut eaque tempore quo soluta cumque.' 
  

},
{ id: 4,
  avatar: AVTR4,
  name: 'Seba Alibaud',
  review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum ducimus et nemo explicabo, ipsum quibusdam porro illum officia, consectetur voluptatum necessitatibus ea animi fugiat aut eaque tempore quo soluta cumque.' 
  

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

          data.map(({avatar, name, review}, index)=>{
            return (
              <SwiperSlide key={index} className='testimonial '>
              <div className='client__avatar md:h-max'>
    
                <img src={avatar} alt="Avatar One" />
              </div>
                <h5>{name} </h5>
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



