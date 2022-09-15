import React from 'react'
import './MerchHighlight.css'

const MerchHighlight = ({ imgSrc, href}) => {
  return (
    <div className='merch-item'>
        <a href={href} alt=''>
            <img className='merch-img' src={imgSrc} alt='merch item'/>
        </a>
    </div>
  )
}

export default MerchHighlight