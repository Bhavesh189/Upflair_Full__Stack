import React from 'react'
import { Outlet } from 'react-router-dom'
import { useType } from './Type'

const Signup = () => {
    const x = useType("Sign up")
    return (
        <>
            <h1>{x}</h1>
            <Outlet></Outlet>
        </>
    )
}

export default Signup