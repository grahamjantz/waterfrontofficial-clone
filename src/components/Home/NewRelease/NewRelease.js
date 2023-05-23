import React from 'react'
import Button from '../../Button/Button'
import './NewRelease.css'

const NewRelease = ({ title, imgSrc, subtitle, description, href, buttonText}) => {
  return (
    <div className='new-release-card'>
        <img className='new-release-cover' src={imgSrc} alt={title} />
        <h2 className='new-release-title'>{title}</h2>
        <h3 className='new-release-subtitle'>{subtitle}</h3>
        <p className='new-release-description'>{description}</p>
        <Button text={buttonText} href={href} />
    </div>
  )
}

export default NewRelease