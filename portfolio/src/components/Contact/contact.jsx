import React from 'react'
import './contact.css';

const Contact = () => {
  return (
    <section id='contact'>
      <div className='contact'>
        <h1 className='contactTitle'>Contact Me</h1>
        <span className='contactDesc'> Please fill out the form to contact me</span>
        <form className='contactForm'>
          <input type='text' className='name' placeholder='Enter your name' />
          <input type='email' className='email' placeholder='Enter your email' />
          <input type='tel' className='number' placeholder='Enter your telephone number'/>
          <textarea className='message' name='message' rows='4' placeholder='Enter a message' />
          <button type='submit' value='Send' className='submitButton'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact