import React from 'react' // Import React library
import './navbar.css'; // Import the css styling
import {Link} from 'react-scroll'; // Import Link from react-scroll library

// Component to display the navbar
const Navbar = () => {
  return (
    // The navbar container
    <nav className='navbar'>
        <div className='menu'>

          {/* Link to the home section */}
          <Link activeClass='active' to='home' smooth={true} spy={true} offset={-100} className='menuItem'>Home</Link>
          
          {/* Link to the about section */}
          <Link activeClass='active' to='about' smooth={true} spy={true} offset={-80} className='menuItem'>About</Link>
          
          {/* Link to the skills section */}
          <Link activeClass='active' to='skills' smooth={true} spy={true} offset={-100} className='menuItem'>Skills</Link>
          
          {/* Link to the projects section */}
          <Link activeClass='active' to='projects' smooth={true} spy={true} offset={-80} className='menuItem'>Projects</Link>
          
          {/* Link to the contact section */}
          <Link activeClass='active' to='contact' smooth={true} spy={true} offset={-5} className='menuItem'>Contact</Link>
        </div>
    </nav>
  )
}

// Exports the navbar component to be used in other parts of the application
export default Navbar