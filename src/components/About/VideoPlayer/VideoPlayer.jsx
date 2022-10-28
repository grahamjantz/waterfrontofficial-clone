import React from 'react'
import ImageGallery from 'react-image-video-gallery'
import './VideoPlayer.css'
// import ReactPlayer from 'react-player/lazy'
// import ranNum from '../../../App'

const videoArray = [
    {
        title: 'Three Years Later',
        src:'https://www.youtube.com/embed/VYkZ10ZP1po',
        embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VYkZ10ZP1po" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'  
    },
    {
        title: 'Red Alliance',
        src: 'https://www.youtube.com/embed/VxiWp55nPug',
        embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VxiWp55nPug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        title: 'Worth Fighting For',
        src: 'https://www.youtube.com/embed/gxckdsWirGM',
        embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/gxckdsWirGM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        title: 'Wedding At My Funeral',
        src: 'https://www.youtube.com/embed/kfeRaE_j7lc',
        embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/kfeRaE_j7lc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
]

const items =[
    {
        original: 'https://www.youtube.com/embed/VYkZ10ZP1po'
    },
    {
        original: 'https://www.youtube.com/embed/VxiWp55nPug'
    },
    {
        original: 'https://www.youtube.com/embed/gxckdsWirGM'
    },
    {
        original: 'https://www.youtube.com/embed/kfeRaE_j7lc'
    },
]

const VideoPlayer = () => {
    return (
        <div className='video-player'>
            <ImageGallery items={items} />
            {/* {
                videoArray.map((video) => {
                    return (
                        <p key={video.src} style={{color: 'white'}}>
                            {video.title}
                        </p>
                    )
                    return (
                        <iframe width="560" height="200" src={video.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen key={video.src}></iframe>
                    )
                    return (
                        <ReactPlayer key={ranNum()}url={video.src}/>
                    )
                })
            } */}
        </div>
    )
}

export default VideoPlayer