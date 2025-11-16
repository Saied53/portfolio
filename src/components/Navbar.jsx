import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32'>
        <h1>Saydur Rahman</h1>
        <div className='space-x-5'>
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Contact</NavLink>
        </div>

        <button>hi</button>
    </nav>
  )
}

export default NavBar
