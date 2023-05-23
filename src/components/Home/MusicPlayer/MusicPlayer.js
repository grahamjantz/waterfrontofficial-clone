import React from 'react'
import Song from '../Song/Song'
import './MusicPlayer.css'
import redAllianceCover from '../../../images/artwork/redAllianceArtwork.jpg'
import threeYLArtwork from '../../../images/artwork/3YLArtwork.jpg'
import wffArtwork from '../../../images/artwork/wffArtwork.jpg'


const MusicPlayer = () => {
  return (
    <div className='music-player'>
        <Song 
          title='Red Alliance'
          imgSrc={redAllianceCover}
          releaseDate='07/22/2022'
          spotLink='https://open.spotify.com/track/4jU3FJ7OQdNTR8VQ8j3TKW?si=5769163ed566478c '
          appleLink='https://music.apple.com/ca/album/red-alliance/1631696796?i=1631696797'
        />
        <Song 
          title='Three Years Later'
          imgSrc={threeYLArtwork}
          releaseDate='01/21/2022'
          spotLink='https://open.spotify.com/track/537yjwHbpzyzvIO4sinndL?si=32e48f28865b4c80'
          appleLink='https://music.apple.com/ca/album/three-years-later/1596162412?i=1596162413'
        />
        <Song 
          title='Worth Fighting For' 
          imgSrc={wffArtwork}
          releaseDate='03/25/2022'
          spotLink='https://open.spotify.com/track/0bAhIyVQJRGSHG2Syni7Qk?si=77dec522e90649ee'
          appleLink='https://music.apple.com/ca/album/worth-fighting-for/1608757261?i=1608757262'
        />
    </div>
  )
}

export default MusicPlayer