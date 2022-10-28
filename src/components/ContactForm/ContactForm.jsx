import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className='contact'>
        <form className='contact-form'>
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor='name'>Name *</label>
          <input id='name' name='name' type='text' placeholder='Enter Your Name' required></input>
          <label htmlFor='email'>Email *</label>
          <input id='email' name='email' type='email' placeholder='Enter Your Email' required></input>
          <label htmlFor='subject'>Subject</label>
          <input id='subject' name='subject' type='text' placeholder='Enter Your Subject' required></input>
          <label htmlFor='message'>Message *</label>
          <textarea id='message' name='message' placeholder='Enter Your Message' rows='10'></textarea>
          <button type='submit' className='contact-submit'>SUBMIT</button>
        </form>
      </div>
  )
}

export default ContactForm