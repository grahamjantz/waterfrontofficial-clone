import React from 'react'
import * as Scroll from 'react-scroll';

import './ComingSoon.css'

const ComingSoon = ({ name }) => {

  const Element = Scroll.Element;

  return (
    <Element className='coming-soon' name={name}>
      <h1>Section Coming Soon!</h1>
      <h2>Check back later!</h2>
    </Element>
  )
}

export default ComingSoon