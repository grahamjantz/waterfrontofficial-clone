import React from 'react'
import * as Scroll from 'react-scroll';
import './PressPage.css'

import PressLinks from '../About/PressLinks/PressLinks'

import redTransition from '../../images/textures/redTransition.1.png'


const Press = ({ name }) => {

  const Element = Scroll.Element;

  return (
    <Element className='press-page' name={name}>
      <div className='red-transition'>
          <h3 className='press-links-title'>PRESS</h3>
          <img src={redTransition} alt='' />
        </div>
        <PressLinks />
    </Element>
  )
}

export default Press