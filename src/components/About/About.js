import React from 'react'
import * as Scroll from 'react-scroll';

import ContactForm from '../ContactForm/ContactForm'
import './About.css'
import PressLinks from './PressLinks/PressLinks'
// import VideoPlayer from './VideoPlayer/VideoPlayer'

import blackTransitionUp from '../../images/textures/blackRipTransition.1.png'
import blackTransitionDown from '../../images/textures/blackRipTransitionDown.2.png'
import redTransition from '../../images/textures/redTransition.1.png'
import liveAtOwl from '../../images/photos/liveAtTheOwl_Resize.jpg'

const About = ({ name }) => {

  const Element = Scroll.Element;

  return (
    <Element className='about' name={name}>
      <div className='about-us'>
        <div className='about-us-title-container'>
          <h3 className='about-us-title'>ABOUT US</h3>
        </div>
        <div className='about-us-images'>
          <img src={blackTransitionDown} alt='' className='black-rip-transition-down'/>
          <img src={liveAtOwl} alt='' className='about-us-hero-image'/>
          <img src={blackTransitionUp} alt='' className='black-rip-tranisition-up'/>
        </div>
        <div className='about-us-bio'>
          <p className='about-us-paragraph'>
            Calgary based rock band Waterfront came together as music students from the University of Lethbridge in 2019. After developing local roots throughout their initial years, Waterfront expanded their Canadian footprint with the 2021 release of their debut EP, <em>"New Heights"</em>, where they partnered with Vancouver based artists of <strong>The Faceplants</strong>. The same collaboration produced the groups sophomore EP entitled <em>"Fever Dream</em> which released in 2022.
          </p>
          <br/>
          <p className='about-us-paragraph'>
            Waterfront aims to keep rock alive and well with high octance energy. The quintuplet are positioned to dig deeper into a harder sound for 2023.
          </p>
        </div>
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
    </Element>
  )
}

export default About