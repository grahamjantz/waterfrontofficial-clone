import React from 'react'
import './Song.css'


const Song = ({ src, title, imgSrc, releaseDate }) => {
  return (
    <div className='song'>
    <img src={imgSrc} alt={`${title} cover`} className='song-artwork'/>
    <h4 className='song-name'>{title}</h4>
    <h5 className='release-date'>{releaseDate}</h5>
    <audio
        controls
        controlsList='nodownload'
        src={src}
        className='player'
    ></audio>
    </div>
  )
}

export default Song