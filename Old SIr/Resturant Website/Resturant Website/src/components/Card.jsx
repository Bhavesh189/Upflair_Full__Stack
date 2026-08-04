import React from 'react'
import '../css/Card.css'

const Card = ({imagee, name}) => {
  return (
    <>
        <div className="cardd">
            <img src={imagee} alt={name} />

            <h1>{name}</h1>

            <button>Order</button>
        </div>
    </>
  )
}

export default Card