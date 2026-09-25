import React from 'react'
import { Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useType } from './Type'

const Id = () => {
    const { x } = useParams();
    console.log(x)
    let xy = useType(x)
    console.log(xy)
    return (
        <>
            <h1>here is id : {useType(x)}</h1>
            {/* <h1>here is id : {x}</h1> */}
        </>
    )
}

export default Id