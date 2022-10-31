import React from 'react'
import PressLinks from '../About/PressLinks/PressLinks'
import './PressPage.css'

import redTransition from '../../images/textures/redTransition.1.png'


const Press = () => {
  return (
    <div className='press-page'>
      <div className='red-transition'>
          <h3 className='press-links-title'>PRESS</h3>
          <img src={redTransition} alt='' />
        </div>
        <PressLinks />
    </div>
  )
}

export default Press