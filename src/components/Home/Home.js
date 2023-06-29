import React from 'react'
import './Home.css'
import * as Scroll from 'react-scroll';

import Button from '../Button/Button'
import NewRelease from './NewRelease/NewRelease'
import MusicPlayer from './MusicPlayer/MusicPlayer'
import ContactForm from '../ContactForm/ContactForm'

import heroImage from '../../images/textures/RA/Red-Alliance-Header.4.png'
import wffCover from '../../images/artwork/wffArtwork.jpg'
import tylCover from '../../images/artwork/3YLArtwork.jpg'
import wfAtBrewhouse from '../../images/photos/wfAtBrewhouse.jpg'
import redTransition from '../../images/textures/redTransition.1.png'
import blackRip from '../../images/textures/blackRipTransition.1.png'
import fdArtwork from '../../images/artwork/FeverDreamArtwork.png'
import wfLogo from '../../images/IWF-Green/IMG_1314.PNG'

import redAllianceVideo from '../../images/video/redAllianceVideo.mp4'
import { useState } from 'react';
import { useEffect } from 'react';

const Home = ({ name }) => {

  const Element = Scroll.Element;

  const [redTear, setRedTear] = useState(redTransition)
  const [blackTear, setBlackTear] = useState(blackRip)
  const [wfGroupShot, setWfGroupShot] = useState(heroImage)
  const [raVideo, setRaVideo] = useState(redAllianceVideo)

  useEffect(() => {
    const redTearLocalStorage = localStorage.getItem('redTear')
    const heroImageFromLocalStorage = localStorage.getItem('hero-image')
    const raVideoFromLocalStorage = localStorage.getItem('ra-video')
    const blackRipFromLocalStorage = localStorage.getItem('black-rip')

    if (redTearLocalStorage) {
      //setredtear
      setRedTear(redTearLocalStorage)
      console.log('receive red tear from local storage')
    } else {
      //localstorage.setitem redtear
      localStorage.setItem('redTear', redTransition)
      console.log('set red transition in local storage')
    }

  
    if (heroImageFromLocalStorage) {
      setWfGroupShot(heroImageFromLocalStorage)
      console.log('got hero-image from local storage')
    } else {
      localStorage.setItem('hero-image', heroImage)
      console.log('set hero-image in local storage')
    }

    if(raVideoFromLocalStorage) {
      setRaVideo(raVideoFromLocalStorage)
      console.log('got ra-video from local storage')
    } else {
      localStorage.setItem('ra-video', redAllianceVideo)
      console.log('set ra-video in local storage')
    }

    if (blackRipFromLocalStorage) {
      setBlackTear(blackRipFromLocalStorage)
      console.log('got black-rip from local storage')
    } else {
      localStorage.setItem('black-rip', blackRip)
      console.log('set black-rip to local storage')
    }
  },[])

  return (
    <Element className='home' name={name}>
      <div className='hero-banner'>
            <img src={fdArtwork} alt=''/>
            <h1 className='hero-title'>FEVER DREAM<br/>OUT NOW!</h1>
            <Button 
              className='hero-button' 
              text='LISTEN'
              href='https://open.spotify.com/album/1Cncn9Rs5CGvAPGDkn0fgr?si=DmwqpfH_SleDqB76FPGDzg'  
            />
          </div>
          
      <ContactForm />
    </Element>
  )
}

export default Home