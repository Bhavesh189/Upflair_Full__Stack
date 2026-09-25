import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>Home</div>
            <Link to="contact"><button>Contact</button></Link>

            <br />
            <br />

            <button onClick={()=> {
                navigate('/test')
            }}>Test</button>

            
        </>
    )
}

export default Home