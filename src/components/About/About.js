import React from 'react'
import ContactForm from '../ContactForm/ContactForm'
import './About.css'
import PressLinks from './PressLinks/PressLinks'
// import VideoPlayer from './VideoPlayer/VideoPlayer'

import blackTransitionUp from '../../images/textures/blackRipTransition.1.png'
import blackTransitionDown from '../../images/textures/blackRipTransitionDown.2.png'
import redTransition from '../../images/textures/redTransition.1.png'
import liveAtOwl from '../../images/photos/liveAtTheOwl_Resize.jpg'

const About = () => {
  return (
    <div className='about'>
      <div className='about-us'>
      <div className='about-us-title-container'>
        <h3 className='about-us-title'>ABOUT US</h3>
        <img src={blackTransitionDown} alt='' className='black-rip-transition-down'/>
      </div>
      <img src={liveAtOwl} alt='' className='about-us-hero-image'/>
      <img src={blackTransitionUp} alt='' className='black-rip-tranisition-up'/>
      <p className='about-us-paragraph'>
        Waterfront came together as music students from the University of Lethbridge in 2019. After developing local roots in Rock throughout their initial years, Waterfront expanded their Canadian footprint with the 2021 release of their debut EP, <em>'New Heights'</em>, where they partnered with Vancouver based producing team, THE RENAISSANCE.
      </p>
      <p className='about-us-paragraph'>
        The same collaboration will see Waterfront release their sophomore EP entitled <em>'Fever Dream'</em> in this Winter. The latest singles <em>Red Alliance</em>, <em>Three Years Later</em>, and <em>Worth Fighting For</em>, and their debut EP <em>New Heights</em> can be heard now.
      </p>
      </div>
      <div className='press-links-section'>
        <div className='red-transition'>
          <h3 className='press-links-title'>PRESS LINKS</h3>
          <img src={redTransition} alt='' />
        </div>
        <PressLinks />
      </div>
      {/* <div className='video-section'>
        <div className='red-transition'>
          <h3 className='video-title'>VIDEO</h3>
          <img src={redTransition} alt='' />
        </div>
        <VideoPlayer />
      </div> */}
      <div className='red-transition'>
        <h3 className='about-contact-title'>CONTACT</h3>
        <img src={redTransition} alt='' />
      </div>
      <ContactForm />
    </div>
  )
}

export default About