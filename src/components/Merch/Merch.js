import React from 'react'
import * as Scroll from 'react-scroll'
import './Merch.css'

import redTransition from '../../images/textures/redTransition.1.png'

import merchItems from './merchObject.js'


const Merch = ({ name }) => {

  const Element = Scroll.Element;
  
  const mapItemImages = (imageArr) => {
    imageArr.map((image) => {
      if (image.is_default === true) {
        console.log(image.src)
        return (
          <img alt='' className='merch-preview-image' src={image.src}/>
        )
      } else {
        return ''
      }
    })
  }

  return (
    <Element name={name}>
      <div className='red-transition'>
          <h3 className='home-about-us-title'>MERCH</h3>
          <img src={redTransition} alt='' />
      </div>
      {
        merchItems.map((item) => {
          return (
            <div key={item.id}>
              {/* <img src={item.images.map((img) => {
                if (img.is_default === true) {
                  return img.src
                }
              })} alt=''/> */}
              {/* <img src='https://res.cloudinary.com/grahamjantzcloudinary/image/upload/v1669246001/3YLExclusiveSpacemanTee_ljwuz0.png' alt=''/> */}
              {mapItemImages(item.images)}
              <h4>{item.title}</h4>
            </div>
          )
        })
      }
    </Element>
  )
}

export default Merch