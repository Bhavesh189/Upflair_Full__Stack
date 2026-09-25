import React from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

const Nav = ({ val }) => {
    const navigate = useNavigate()
    return (
        <>
            <ul>
                <li onClick={() => {
                    navigate('/home')
                }}>Home</li>
                <li onClick={() => {
                    navigate('/contact')
                }}>Contact</li>
                <li onClick={() => {
                    navigate('/sign')
                }}>Signup</li>
                <li onClick={() => {
                    navigate('/login')
                }}>Login</li>
                <li onClick={() => {
                    navigate(`/id/${val}`)
                }}>Id</li>
            </ul>

            <Outlet></Outlet>
        </>
    )
}

export default Nav