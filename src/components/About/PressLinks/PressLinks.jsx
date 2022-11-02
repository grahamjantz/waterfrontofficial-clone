import React from 'react'
import './PressLinks.css'
import Press from '../Press/Press'


import {ranNum} from '../../../App'
import raGroup from '../../../images/photos/RA.jpg'
import groupShot1 from '../../../images/photos/groupShot.1.jpg'
import groupShot5 from '../../../images/photos/groupShot5.JPG'
import devinShadow from '../../../images/photos/devinShadow.JPG'
import wamf from '../../../images/photos/wamf.JPG'
import threeYearsLaterPressPhoto from '../../../images/photos/3YL.JPG'

const pressArray = [
    {
        title: 'VIDEO PREMIERE: WATERFRONT - \'RED ALLIANCE\'',
        imageSrc: raGroup,
        source: 'New Noise Magazine',
        href: 'https://newnoisemagazine.com/premieres/video-premiere-waterfront-red-alliance/',
    },
    {
        title: 'VIDEO PREMIERE: WATERFRONT - \'THREE YEARS LATER\'',
        imageSrc: threeYearsLaterPressPhoto,
        source: 'New Noise Magazine',
        href: 'https://newnoisemagazine.com/video-premiere-waterfront-three-years-later/',
    },
    {
        title: 'Waterfront Haunts Our Days With Their Heated Music Video, "Wedding At My Funeral"',
        imageSrc: wamf,
        source: 'BuzzMusic',
        href: 'https://www.buzz-music.com/post/waterfront-haunts-our-days-with-their-heated-music-video-wedding-at-my-funeral',
    },
    // {
    //     title: 'Video Premiere: Waterfront - "Wedding at My Funeral"',
    //     imageSrc: '',
    //     source: 'New Noise Magazine',
    //     href: 'https://newnoisemagazine.com/video-premiere-waterfront-wedding-at-my-funeral/',
    // },
    {
        title: 'Conquer "New Heights" With Waterfront\'s Charismatic New Release',
        imageSrc: groupShot5,
        source: 'BuzzMusic',
        href: 'https://www.buzz-music.com/post/conquer-new-heights-with-waterfront-s-charismatic-new-release',
    },
    {
        title: 'Waterfront Shakes Your Core With "Backbreaker"',
        imageSrc: devinShadow,
        source: 'BuzzMusic',
        href: 'https://www.buzz-music.com/post/waterfront-shakes-your-core-with-backbreaker',
    },
    {
        title: 'Waterfront Drops a Heartfelt Single, "I Don\'t Want to Do This Anymore"',
        imageSrc: groupShot1,
        source: 'BuzzMusic',
        href: 'https://www.buzz-music.com/post/waterfront-drops-a-heartfelt-single-i-don-t-want-to-do-this-anymore',
    },
    // {
    //     title: 'New Heights',
    //     imageSrc: '',
    //     source: 'Ghost Killer Entertainment',
    //     href: 'https://www.youtube.com/watch?v=cPxfyBfm0xI',
    // },
];

const PressLinks = () => {
  return (
    <div className='press-links-container'>
        <div className='press-links'>
            {pressArray.map((press) => {
                return (
                    <Press 
                        key={ranNum()}
                        title={press.title}
                        imageSrc={press.imageSrc}
                        source={press.source}
                        href={press.href}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default PressLinks