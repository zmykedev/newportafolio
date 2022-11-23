import React from 'react'
import CV from '../../assets/cv.pdf'
import { Button } from 'rsuite'
import 'rsuite/styles/index.less'

const CTA = () => {
  return (
    <div className='cta'>
        <Button href={CV} download className='btn'>Descargar CV</Button>
        <a href="#contact" className='btn btn-primary' >Contactame</a>
    </div>
  )
}

export default CTA