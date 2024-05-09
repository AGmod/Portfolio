import React from 'react' // Import React library
import './home.css' // Import CSS styling
import avatar from '../Assets/avatar.png' // Import avatar image from Assets folder

// Component to display the projects section
const Home = () => {
  return (

    // Section that contains all the home page information
    <section id='home'>

      {/* Container for the Homepage content */}
      <div className='homeContent'>

        {/* Introduction with my name */}
        <span className='homeDesc'>Hello! <br/> My name is <span className='devName'>Alejandro Guerrero</span> <br/> and I am a <span className='devName'>Software Developer</span></span>

        {/* Quick description */}
        <p className='description'>I am a senior at Cal State University Fullerton <br/> and I have worked on different projects throughout my years of learning</p>
      </div>
      <img src={avatar} alt='Avatar' className='avatar' />
    </section>
  )
}

// Export the home component to be used in other parts of the application
export default Home