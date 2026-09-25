import React from 'react'
import { useState } from 'react'

const App = () => {
  const [s, setS] = useState({
    color : "red",
    fontFamily : "poppins",
    backgroundColor : "Yellow"
  })
  return (
    <>
      <h1 style={s}>Hello World</h1>
    </>
  )
}

export default App