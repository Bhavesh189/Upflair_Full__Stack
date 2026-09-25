import React from 'react'
import './card.css'


const Card = ({img, name}) => {
  return (
    <>
    
    <div className="card">
        <img src={img} alt="Image" />
        <h1>{name}</h1>
    </div>
    
    </>
  )
}

export default Card