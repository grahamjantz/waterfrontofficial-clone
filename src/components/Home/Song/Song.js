import React from 'react'
import './Song.css'

import Button from '../../Button/Button'

const Song = ({ title, imgSrc, releaseDate, spotLink, appleLink }) => {
  return (
    <div className='song'>
      <img src={imgSrc} alt={`${title} cover`} className='song-artwork'/>
      <div className='song-text'>
        <h4>{title}</h4>
        <h5>{releaseDate}</h5>
      </div>
      <div className='streaming-links'>
        <Button href={appleLink} className='' text='Apple Music' />
        <Button href={spotLink} className='' text='Spotify' />
      </div>
    </div>
  )
}

export default Song