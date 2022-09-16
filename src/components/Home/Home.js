import React from 'react'
import './Home.css'
import Button from '../Button/Button'
import NewRelease from './NewRelease/NewRelease'
import MerchHighlight from './MerchHighlight/MerchHighlight'
import wffCover from '../../images/artwork/wffArtwork.png'
import tylCover from '../../images/artwork/3YLArtwork.png'
import yellowTee from '../../images/merch/3YLExclusiveSpacemanTee.png'
import blueCrewneck from '../../images/merch/3YLBlueCrewneck.png'
import beanie from '../../images/merch/WaterfrontBeanie.png'
import liveAtTheOwl from '../../images/photos/liveAtTheOwl.jpg'
import redAlliance from '../../audio/Red-Alliance-Master.wav'
import threeYearsLater from '../../audio/Three-Years-Later-Master.wav'
import worthFightingFor from '../../audio/Worth-Fighting-For-Master.wav'
import MusicPlayer from './MusicPlayer/MusicPlayer'

const Home = () => {
  return (
    <div className='home'>
      <div className='hero-banner'>
        <h1 className='hero-title'>RED ALLIANCE<br/>OUT NOW!</h1>
        <Button 
          className='hero-button' 
          text='LISTEN'
          href='https://open.spotify.com/track/4jU3FJ7OQdNTR8VQ8j3TKW'  
        />
        
      </div>
      <div className='hero-image'></div>
      <div className='new-releases'>
        <NewRelease
          title='WORTH FIGHTING FOR'
          imgSrc={wffCover}
          subtitle='OUT NOW!'
          description='OFFICIAL MUSIC VIDEO PREMIERING VIA NEW NOISE MAGAZINE STREAM IT NOW!'
        />
        <NewRelease 
          title='THREE YEARS LATER'
          imgSrc={tylCover}
          subtitle='OUT NOW!'
          description='OFFICIAL MUSIC VIDEO PREMIERING VIA NEW NOISE MAGAZINE STREAM IT NOW!'
        />
        <div className='merch-highlights'>
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
      />
      </div>
      <div className='about-us'>
        <h3 className='about-us-title'>ABOUT US</h3>
        <div className='about-us-img-p'>
          <img className='live-at-owl'src={liveAtTheOwl} alt='waterfront live at the owl'/>
          <div className='about-us-paragraph'>
            <p>
              {'Coming together in 2019, Waterfront, consisting of Dan Sequeira (vocals), Ryan Ross (guitar), Devin Taylor (guitar), Tanner Cyr (bass/vocals), and Graham Jantz (drums), have come into their own with their 2021 debut EP ‘New Heights’.'}
            </p>
            <p>
              {'‘New Heights’ assembles themes of self- improvement and self-reflection that blends pop sensibilities with rock and punk elements for a defining sound rooted in energetic instrumentation and performance. The project’s debut EP ‘New Heights’ with the songs New Heights, Wedding at My Funeral, Backbreaker, and I Don\'t Want to Do This Anymore can be heard now.'}
            </p>
            <p>
              {'A line up of brand new singles are set to begin releasing at the start of 2022. Waterfront is eager to bring their high energy songs and heartfelt lyrics to audiences in 2022 and onward.'}
            </p>
          </div>
        </div>
      </div>
      <div className='listen-section'>
        <h3 className='listen-title'>LISTEN</h3>
        <MusicPlayer 
          redAlliance={redAlliance}
          threeYearsLater={threeYearsLater}
          worthFightingFor={worthFightingFor}
        />
      </div>
      <div className='contact'>
        <h3 className='contact-title'>CONTACT US</h3>
        <form className='contact-form'>
          <label htmlFor='name'>Name *</label>
          <input id='name' name='name' type='text' placeholder='Enter Your Name' required></input>
          <label htmlFor='email'>Email *</label>
          <input id='email' name='email' type='email' placeholder='Enter Your Email' required></input>
          <label htmlFor='subject'>Subject</label>
          <input id='subject' name='subject' type='text' placeholder='Enter Your Subject' required></input>
          <label htmlFor='message'>Message *</label>
          <textarea id='message' name='message' placeholder='Enter Your Message' rows='10'></textarea>
          <button type='submit' className='contact-submit'>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default Home