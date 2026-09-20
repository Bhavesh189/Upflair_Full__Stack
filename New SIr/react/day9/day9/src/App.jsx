import React from 'react'
import { useState } from 'react'

const App = () => {
  const [name, setName] = useState("First")
  return (
    <>
      <h1>{name}</h1>
      
      <input type="text" placeholder='Enter Name' onChange={(e)=> {
        setName(e.target.value)
      }}/>
    </>
  )
}

export default App



