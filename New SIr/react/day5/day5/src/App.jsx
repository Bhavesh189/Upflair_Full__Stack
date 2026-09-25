import React from 'react'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react'

const App = () => {

  const [name, setName] = useState("Bhavesh")
  const [d, setD] = useState("Owner")
  const [s, setS] = useState(100000000)
  const style = {
    style: 'currency',
    currency: 'USD'
  }

  const ss = {
    border: "2px solid black",
    padding: "14px",
    borderRadius : "19px"
  }

  useEffect(()=> {
    setName("Bhavesh Sharma")
  }, [name])

  return (
    <>
      <h1>Full Name : {name}</h1>
      <h1>Designation : {d}</h1>
      <h1>Salary : {s.toLocaleString('en-in', style)}</h1>

      <input type="text" name="name" id="name" placeholder='Enter Your Name' onChange={(e) => {
        setName(e.target.value)
      }} style={ss} /> <br /> <br />
      <input type="text" name="name" id="name" placeholder='Enter Your Designation' onChange={(e) => {
        SetD(e.target.value)
      }} style={ss} /> <br /> <br />
      <input type="text" name="name" id="name" placeholder='Enter Your Salary' onChange={(e) => {
        setS(e.target.value)
      }} style={ss} />

      <button className="btn btn-primary">Hello World</button>
    </>
  )
}

export default App