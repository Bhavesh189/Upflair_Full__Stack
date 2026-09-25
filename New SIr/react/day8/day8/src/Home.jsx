import React from 'react'
import { Outlet } from 'react-router-dom'
import { useType } from './Type'

const Home = () => {
    const x = useType("Home")
    return (
        <>
            <h1>{x}</h1>
            <Outlet></Outlet>
        </>
    )
}

export default Home