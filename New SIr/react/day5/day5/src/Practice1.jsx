import React from 'react'
import { useState } from 'react';

const Practice1 = () => {
    const [x, setX] = useState(1);
    //console.log(x)
  return (
    <>
        <p>{x}</p>
        <button onClick={()=> {
          console.log(x)
          setX(x=>x+1)
          console.log(x)
          setX(x=>x+1)
          console.log(x)
        }}>Hello</button>
    </>
  )
}

export default Practice1