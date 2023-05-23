import React from 'react'
import * as Scroll from 'react-scroll';

import MusicPlayer from '../Home/MusicPlayer/MusicPlayer'

import redTransition from '../../images/textures/redTransition.1.png'

const Listen = ({ name }) => {

  const Element = Scroll.Element;

  return (
    <Element name={name}>
      <div className='red-transition'>
          <h3 className='home-about-us-title'>LISTEN</h3>
          <img src={redTransition} alt='' />
      </div>
      <div className='listen-section'>
          <MusicPlayer />
      </div>
    </Element>
  )
}

export default Listen