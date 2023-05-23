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

  useEffect(() => {
  },[])


  return (
    <Element className='home' name={name}>
      <div className='home-landing-page'>

        <div className='banner'>
          <div className='ra-video-container'>
            <video src={raVideo} muted autoPlay controls={false} className='ra-video' playsInline loop></video>
            <img src={blackTear} alt=''/>
          </div>
          <div className='hero-banner'>
            <img src={fdArtwork} alt=''/>
            <h1 className='hero-title'>FEVER DREAM<br/>OUT NOW!</h1>
            <Button 
              className='hero-button' 
              text='LISTEN'
              href='https://open.spotify.com/album/1Cncn9Rs5CGvAPGDkn0fgr?si=DmwqpfH_SleDqB76FPGDzg'  
            />
          </div>
        </div>

        <div className='hero-image'>
          <img src={wfGroupShot} alt='' />
        </div>

        <div className='ra-video-container-mobile'>
          <video src={raVideo} muted autoPlay controls={false} className='ra-video-mobile' playsInline loop loading='lazy'></video>
          <img src={blackTear} alt=''/>
        </div>

      </div>
      <div className='red-transition new-releases-heading'>
        <h3 className='home-about-us-title'>NEW RELEASES</h3>
        <img src={redTear} alt='' />
      </div>
          {/* <h1 className='hero-title' style={{color: 'white', paddingTop: '2em'}}>NEW RELEASES</h1> */}
      <div className='new-releases'>
        <NewRelease
          title='WORTH FIGHTING FOR'
          imgSrc={wffCover}
          subtitle='OUT NOW!'
          description='OFFICIAL MUSIC VIDEO PREMIERING VIA NEW NOISE MAGAZINE!'
        />
        <NewRelease 
          title='THREE YEARS LATER'
          imgSrc={tylCover}
          subtitle='OUT NOW!'
          description='OFFICIAL MUSIC VIDEO PREMIERING VIA NEW NOISE MAGAZINE!'
        />
        {/* <div className='merch-highlights'>
        <MerchHighlight
        imgSrc={yellowTee}
        href='#'
        />
        <MerchHighlight
        imgSrc={blueCrewneck}
        href='#'
        />
        <MerchHighlight
        imgSrc={beanie}
        href='#'
        />
        </div>
        <Button 
        text='FULL MERCH STORE'
      /> */}
      </div>

      <div className='red-transition'>
        <h3 className='home-about-us-title'>ABOUT US</h3>
        <img src={redTear} alt='' />
      </div>

      <div className='home-about-us'>
        <div className='home-about-us-img-p'>
          <img className='live-at-owl'src={wfAtBrewhouse} alt='waterfront live at the owl'/>
          <img src={blackTear} alt='' className='black-rip'/>
        </div>
        <div className='home-about-us-paragraph'>
          <p>
            Waterfront came together as music students from the University of Lethbridge in 2019. After developing local roots in Rock throughout their initial years, Waterfront expanded their Canadian footprint with the 2021 release of their debut EP, <em>'New Heights'</em>, where they partnered with Vancouver based producing team, THE RENAISSANCE.
          </p>
          <p>
            The same collaboration will see Waterfront release their sophomore EP entitled <em>'Fever Dream'</em> in this Winter.  The latest singles <em>Red Alliance</em>, <em>Three Years Later</em>, and <em>Worth Fighting For</em>, and their debut EP <em>New Heights</em> can be heard now.
          </p>
        </div> 
      </div>

      <div className='red-transition'>
        <h3 className='home-about-us-title'>LISTEN</h3>
        <img src={redTear} alt='' />
      </div>

      <div className='listen-section'>
        <MusicPlayer/>
      </div>

      <div className='red-transition'>
        <h3 className='home-about-us-title'>CONTACT</h3>
        <img src={redTear} alt='' />
      </div>

      <ContactForm />
    </Element>
  )
}

export default Home