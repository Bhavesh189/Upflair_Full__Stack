import React from 'react'
import '../css/Background.css'
import vdo from '../assets/hero.mp4'

const Background = ({ children }) => {
    return (
        <>
            <div className="background">
                <video src={vdo} autoPlay muted loop playsInline></video>

                <div className="x">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Background