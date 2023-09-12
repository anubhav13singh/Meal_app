import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-heading' onClick={() => window.scroll(0,0)}>
            <h1>Meals <span>App</span></h1>
        </div>
        <div className='navbar-link'>
            <ul>
               <NavLink to ='/'> <li>Home</li> </NavLink>
               <NavLink to = '/Category'> <li>Categories</li></NavLink>
               <NavLink to = "/RandomMeal"> <li>Random</li></NavLink>
                
            </ul>
        </div>
    </div>
  )
}

export default Navbar
