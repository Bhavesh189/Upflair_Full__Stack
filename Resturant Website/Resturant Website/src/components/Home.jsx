import React from 'react'
import '../css/Home.css'
import Background from './Background.jsx'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  return (
    <>
      <Background>
        <div className="r">
          <h3>Welcome To Infinity</h3>
          <h1>Good Food</h1>
          <h1>Good Mood</h1>
          <hr />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, dignissimos consequatur earum explicabo tempora possimus assumenda cupiditate saepe aliquam natus?</p>

          <div className="b">
            <button className='s' onClick={() => { navigate('/menu') }}>Order Now</button><button className='v' onClick={() => { navigate('/menu') }}>View Menu</button>
          </div>
        </div>
      </Background>
    </>
  )
}

export default Home