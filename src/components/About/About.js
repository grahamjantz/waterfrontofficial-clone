import React from 'react'
import ContactForm from '../ContactForm/ContactForm'
import './About.css'
import PressLinks from './PressLinks/PressLinks'
import VideoPlayer from './VideoPlayer/VideoPlayer'

const About = () => {
  return (
    <div className='about'>
      <div className='about-us'>
        <h3 className='about-us-title'>ABOUT US</h3>
        <p className='about-us-paragraph'>Waterfront is a alternative rock band based in southern Alberta. The Canadian group travelled to Vancouver in the summer of 2020 to transform themselves in collaboration with The Renaissance Music. Their forthcoming debut EP, New Heights, will be the first of two projects throughout 2021 and 2022.</p>
        <p className='about-us-paragraph'>Playing together since 2019, Waterfront’s lineup consists of Dan Sequeira on vocals, Ryan Ross and Devin Taylor on guitars, Tanner Cyr on bass, and Graham Jantz on drums. All members are current students/alumni of the University of Lethbridge music department. Waterfront is eager to bring their high energy songs and heartfelt lyrics back to their communities as performance opportunities return. </p>
        <p className='about-us-paragraph-subheading'>'New Heights' EP</p>
        <p className='about-us-paragraph'>Summer 2020 saw Waterfront take the global pandemic as an opportunity to reinvent themselves by travelling to Vancouver, BC to create their debut EP, New Heights. The group rose to the occasion delivering four singles described as: "in your face, unapologetic, and rich in sonic turbulence” by BuzzMusic. This project was in collaboration with The Renaissance Music; the creative minds behind Vancouver’s rock outfit The Faceplants. The EP is out now on all major streaming services!  </p>
        <p className='about-us-paragraph-subheading'>Beyond New Heights</p>
        <p className='about-us-paragraph'>
        Waterfront has already returned to Vancouver collaborating with The Renaissance productions once more since unveiling their new image and announcing the New Heights EP. This endeavour resulted in another a sophisticated step forward for the group which will bring an onslaught of new original material to their audience following New Heights in 2022. Follow Waterfront’s social media to stay updated with their future releases.
        </p>
      </div>
      <div className='press-links-section'>
        <h3 className='press-links-title'>PRESS LINKS</h3>
        <PressLinks />
      </div>
      <div className='video-section'>
        <h3 className='video-title'>VIDEO</h3>
        <VideoPlayer />
      </div>
      <ContactForm />
    </div>
  )
}

export default About