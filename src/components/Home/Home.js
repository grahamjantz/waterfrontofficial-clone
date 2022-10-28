import React from 'react'
import './Home.css'
import Button from '../Button/Button'
import NewRelease from './NewRelease/NewRelease'
import heroImage from '../../images/textures/RA/Red-Alliance-Header.4.png'
import wffCover from '../../images/artwork/wffArtwork.jpg'
import tylCover from '../../images/artwork/3YLArtwork.jpg'
import wfAtBrewhouse from '../../images/photos/wfAtBrewhouse.jpg'
import redTransition from '../../images/textures/redTransition.1.png'
import blackRip from '../../images/textures/blackRipTransition.1.png'
import redAlliance from '../../audio/Red-Alliance-Master.wav'
import threeYearsLater from '../../audio/Three-Years-Later-Master.wav'
import worthFightingFor from '../../audio/Worth-Fighting-For-Master.wav'
import MusicPlayer from './MusicPlayer/MusicPlayer'
import ContactForm from '../ContactForm/ContactForm'
import redAllianceVideo from '../../images/video/redAllianceVideo.mp4'

const Home = () => {
  return (
    <div className='home'>
      <div className='home-landing-page'>
        {/* <div className='landing-image'>
          <img src={redAllianceArtwork} alt=''/>
        </div> */}
        <div className='banner'>
            <video src={redAllianceVideo} muted autoPlay controls={false} className='ra-video' playsInline loop></video>
          <div className='hero-banner'>
            <h1 className='hero-title'>RED ALLIANCE<br/>OUT NOW!</h1>
            <Button 
              className='hero-button' 
              text='LISTEN'
              href='https://open.spotify.com/track/4jU3FJ7OQdNTR8VQ8j3TKW'  
            />
          </div>
        </div>
        {/* <img src={drumsBrewhouse} alt='' className='drums-brewhouse'/> */}
        <div className='hero-image'>
          <img src={heroImage} alt=''/>
        </div>
        <video src={redAllianceVideo} muted autoPlay controls={false} className='ra-video-mobile' playsInline loop></video>
      </div>
      <div className='red-transition new-releases-heading'>
        <h3 className='home-about-us-title'>NEW RELEASES</h3>
        <img src={redTransition} alt='' />
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
        <img src={redTransition} alt='' />
      </div>
      <div className='home-about-us'>
        <div className='home-about-us-img-p'>
          <img className='live-at-owl'src={wfAtBrewhouse} alt='waterfront live at the owl'/>
          <img src={blackRip} alt='' className='black-rip'/>
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
        <img src={redTransition} alt='' />
      </div>
      <div className='listen-section'>
        <MusicPlayer 
          redAlliance={redAlliance}
          threeYearsLater={threeYearsLater}
          worthFightingFor={worthFightingFor}
        />
      </div>
      <div className='red-transition'>
        <h3 className='home-about-us-title'>CONTACT</h3>
        <img src={redTransition} alt='' />
      </div>
      <ContactForm />
    </div>
  )
}

export default Home