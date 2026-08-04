import React from 'react'
import '../css/Hero.css'

const Hero = ({whatt}) => {
  return (
    <>
        <div className="xyzz">
            <u> <h1>Book a {whatt}</h1></u>

            <form action="" className='zzz'>
                <input type="text" placeholder="Enter your name" />
                <input type="email" placeholder="Enter your email" />
                <input type="text" placeholder="Enter your phone number" />
                <input type="text" name="x" id="x" placeholder="Anything else" />
                <button type="submit">Book Now</button>
            </form>
        </div>
    </>
  )
}

export default Hero