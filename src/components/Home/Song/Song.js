import React from 'react'

const Song = ({ src }) => {
  return (
    <audio
        controls
        src={src}
    >

    </audio>
  )
}

export default Song