import React from 'react'
import './Press.css'
import Button from '../../Button/Button'

const Press = ({ title, imageSrc, source, href }) => {
  return (
    <div className='press' >
      <img src={imageSrc} alt={title} className='press-image'/>
      <h4 className='press-title'>{title}</h4>
      <h5 className='press-source'>{source}</h5>
      <Button text='Learn More' href={href} className='press-button'/>
    </div>
  )
}

export default Press