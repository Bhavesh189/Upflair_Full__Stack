import React from 'react'
import Nav from './Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Contact from './Contact.jsx'
import Signup from './Signup.jsx'
import Login from './Login.jsx'
import Id from './Id.jsx'
import { useState } from 'react'

const App = () => {
  
    const [x, setX] = useState('')
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav val={x}/>}>
            <Route path="home" element={<Home />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="sign" element={<Signup />}></Route>
            <Route path="id/:x" element={<Id />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>


      <input type="text" name="" id="" placeholder='Enter Id' onChange={(e)=> {
        setX(e.target.value)
      }}/>
    </>
  )
}

export default App