import React from 'react'
import { Outlet } from 'react-router-dom'

const Test = () => {
  return (
    <>
    <div>Test</div>
    <Outlet></Outlet>
    </>
  )
}

export default Test