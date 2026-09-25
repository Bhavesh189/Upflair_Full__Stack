import React from 'react'
import { Outlet } from 'react-router-dom'
import { useType } from './Type'


const Login = () => {
    const x = useType("Login")
  return (
    <>
        <h1>{x}</h1>
        <Outlet></Outlet>
    </>
  )
}

export default Login