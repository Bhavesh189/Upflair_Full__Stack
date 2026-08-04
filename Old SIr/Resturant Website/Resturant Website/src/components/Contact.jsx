import React from 'react'
import '../css/Contact.css'
import Background from './Background.jsx'

const Contact = () => {
  return (
    <>
      <Background>
        <div className="contact">
          <h1 className='xxxx'>Contact US</h1>
          <form action="" className='zzz'>
            <input type="text" placeholder="Enter your name" />
            <input type="email" placeholder="Enter your email" />
            <input type="text" placeholder="Enter your phone number" />
            <input type="text" name="x" id="x" placeholder="Anything else" />
            <button type="submit">Message Us !!!</button>
          </form>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14147.4661143551!2d76.62971834999999!3d27.566652499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1785001849295!5m2!1sen!2sin"></iframe>
      </Background>
    </>
  )
}

export default Contact