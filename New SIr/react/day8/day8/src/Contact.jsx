import React from 'react'
import { Outlet } from 'react-router-dom'
import { useType } from './Type'

const Contact = () => {
    const x = useType("Contact")
    return (
        <>
            <h1>{x}</h1>
            <Outlet></Outlet>
        </>
    )
}

export default Contact