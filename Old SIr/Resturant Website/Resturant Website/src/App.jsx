import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Background from './components/Background.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Lunch from './components/Lunch.jsx'
import BookRoom from './components/BookRoom.jsx'
import Menu from './components/Menu.jsx'
import Timing from './components/Timing.jsx'
import './App.css'
import Layout from './components/Layout.jsx'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "menu",
          element: <Menu />
        },
        {
          path: "lunch",
          element: <Lunch />
        },
        {
          path: "bookroom",
          element: <BookRoom />
        },
        {
          path: "timing",
          element: <Timing />
        }
      ]
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App