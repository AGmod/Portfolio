import React from 'react'
import './navbar.css';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='menu'>
            <Link className='menuItem'>Home</Link>
            <Link className='menuItem'>About</Link>
            <Link className='menuItem'>Skills</Link>
            <Link className='menuItem'>Projects</Link>
            <Link className='menuItem'>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar