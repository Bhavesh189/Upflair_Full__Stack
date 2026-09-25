import React from 'react'
import Home from './Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './Contact.jsx'
import Test from './Test.jsx'
import Not from './Not.jsx'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="*" element={<Not />} />
          <Route path="/contact" element={<Contact />} >

            <Route path="tests" element={<Test />} />

          </Route>
          <Route path="/test" element={<Test />} />
          <Route path="/test:id" element={<Test />}></Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App