import React from 'react'
import './Button.css'

const Button = ({ href, text}) => {
  return (
    <a href={href} className='button'>{text}</a>
  )
}

export default Button