import React from 'react'
import './navbar.css';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='menu'>
            <Link activeClass='active' to='home' smooth={true} spy={true} offset={-100} className='menuItem'>Home</Link>
            <Link activeClass='active' to='about' smooth={true} spy={true} offset={-80} className='menuItem'>About</Link>
            <Link activeClass='active' to='skills' smooth={true} spy={true} offset={-100} className='menuItem'>Skills</Link>
            <Link activeClass='active' to='projects' smooth={true} spy={true} offset={-80} className='menuItem'>Projects</Link>
            <Link activeClass='active' to='contact' smooth={true} spy={true} offset={-5} className='menuItem'>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar