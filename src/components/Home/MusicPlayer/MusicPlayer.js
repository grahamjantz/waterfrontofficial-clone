import React from 'react'
import Song from '../Song/Song'
import './MusicPlayer.css'
import redAllianceCover from '../../../images/artwork/redAllianceArtwork.jpg'
import threeYLArtwork from '../../../images/artwork/3YLArtwork.jpg'
import wffArtwork from '../../../images/artwork/wffArtwork.jpg'


const MusicPlayer = ({ redAlliance, threeYearsLater, worthFightingFor}) => {
  return (
    <div className='music-player'>
        <Song 
          src={redAlliance} 
          title='Red Alliance'
          imgSrc={redAllianceCover}
          releaseDate='07/22/2022'
        />
        <Song 
          src={threeYearsLater} 
          title='Three Years Later'
          imgSrc={threeYLArtwork}
          releaseDate='07/22/2022'
        />
        <Song 
          src={worthFightingFor} 
          title='Worth Fighting For' 
          imgSrc={wffArtwork}
          releaseDate='07/22/2022'
        />
    </div>
  )
}

export default MusicPlayer