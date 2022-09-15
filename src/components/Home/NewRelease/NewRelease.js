import React from 'react'
import Button from '../../Button/Button'
import './NewRelease.css'

const NewRelease = ({ title, imgSrc, subtitle, description}) => {
  return (
    <div className='new-release-card'>
        <img src={imgSrc} alt={title} className='new-release-cover'/>
        <h2 className='new-release-title'>{title}</h2>
        <h3 className='new-release-subtitle'>{subtitle}</h3>
        <p className='new-release-description'>{description}</p>
        <Button text='MUSIC VIDEO'/>
    </div>
  )
}

export default NewRelease