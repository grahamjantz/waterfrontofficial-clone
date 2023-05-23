import React from 'react'
import * as Scroll from 'react-scroll';

import MusicPlayer from '../Home/MusicPlayer/MusicPlayer'

import redTransition from '../../images/textures/redTransition.1.png'

// import redAlliance from '../../audio/Red-Alliance-Master.wav'
// import threeYearsLater from '../../audio/Three-Years-Later-Master.wav'
// import worthFightingFor from '../../audio/Worth-Fighting-For-Master.wav'

const Listen = ({ name }) => {

  const Element = Scroll.Element;

  return (
    <Element name={name}>
      <div className='red-transition'>
          <h3 className='home-about-us-title'>LISTEN</h3>
          <img src={redTransition} alt='' />
      </div>
      <div className='listen-section'>
          <MusicPlayer 
            // redAlliance={redAlliance}
            // threeYearsLater={threeYearsLater}
            // worthFightingFor={worthFightingFor}
          />
      </div>
    </Element>
  )
}

export default Listen