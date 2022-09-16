import React from 'react'
import './Footer.css'
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const size = 35;

const Footer = () => {
  return (
    <div className='footer'>
        <h4 className='footer-title'>Subscribe Form</h4>
        <form className='subscribe-form'>
          <label htmlFor='email'>Email *</label>
          <input id='email' name='email' type='email' placeholder='Enter Your Email' required></input>
          <button type='submit' className='subscribe-submit'>SUBMIT</button>
        </form>
        <div className='footer-socials'>
        <a href='https://www.instagram.com/waterfrontofficial/' target='_blank' rel="noreferrer" >
                    <FaInstagram size={size}/>
                </a>
                <a href='https://www.facebook.com/waterfrontbandofficial' target='_blank' rel="noreferrer" >
                    <FaFacebook size={size} />
                </a>
                <a href='https://twitter.com/WFofficialband' target='_blank' rel="noreferrer" >
                    <FaTwitter size={size} />
                </a>
                <a href='https://www.youtube.com/channel/UCPLUW_woeKR81y2ORqJIcXg' target='_blank' rel="noreferrer" >
                    <FaYoutube size={size} />
                </a>
        </div>
      </div>
  )
}

export default Footer