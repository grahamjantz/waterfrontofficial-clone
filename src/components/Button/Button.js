import React from 'react'
import './Button.css'

const Button = ({ href, text, className}) => {
  return (
    <a href={href} className={`button ${className}`}>{text}</a>
  )
}

export default Button