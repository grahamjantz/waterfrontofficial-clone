import React from 'react'
import './Home.css'
import Button from '../Button/Button'
import NewRelease from './NewRelease/NewRelease'
import wffCover from '../../images/artwork/wffcover.jfif'
import tylCover from '../../images/artwork/3ylCover.jfif'

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
      </div>
    </div>
  )
}

export default Home