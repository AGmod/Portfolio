import React from 'react' // Import React library
import './projects.css'; // Import the CSS styling
import AstroDex from '../Assets/AstroDex.png'; // Import AstroDex from assets folder
import reft from '../Assets/reft.png'; // Import reft from assets folder
import secure from '../Assets/secure.png'; // Import secure from assets folder

// Component to display the projects section
const Projects = () => {
  return (

    // Section that contains all the projects information
    <section id='projects'>
        <span className='projectsTitle'>Here is my list of projects</span>
        <div className='projectsList'>

            {/* Project item for AstroDex */}
            <div className='projectsItem'>
                <img src={AstroDex} alt='AstroDex' className='projectsItemImg' />
                    <div className='projectsDesc'>
                        <h2>Astro Dex</h2>
                        <p>A webapp that shows the solar system planets in 3d models and also gives a brief description for each planet.
                            The user is able to also take quizes and is given a score at the end for the questions answered correctly.
                            I was the project owner who handled what features we kept and removed while checking in on my team to make sure we were on track for the development of this project for our Software Engineer Course. <br/>
                            <a href='https://github.com/Michael-Scrumlord/Astro-Dex' className='hyperLink'>Astro Dex Github Link</a> 
                        </p>
                    </div>
            </div>

            {/* Project item for reft */}
            <div className='projectsItem'>
                <img src={reft} alt='reft' className='projectsItemImg' />
                    <div className='projectsDesc'>
                        <h2>rEFT</h2>
                        <p>A webapp that converts real estate properties into fungible tokens using a blockchain. 
                            Users would be able to log in and tokenize their properties to sell/purchase property tokens.
                            The intention was to make real estate more available to the average person while also being transparent/secure for transactions since our platform used a blockchain.
                            I was a frontend developer/tester to make sure everything from the frontend was functioning.
                             <br/>
                            <a href='https://github.com/reft-natan-m/reft' className='hyperLink'>rEFT Github Link</a>
                        </p>
                    </div>
            </div>

            {/* Project item for Secure Chat */}
            <div className='projectsItem'>
                <img src={secure} alt='secure' className='projectsItemImg' />
                    <div className='projectsDesc'>
                        <h2>Secure Chat</h2>
                        <p>This is a secure chat program where users can communicate without worry of their chat data being leaked.
                            Its a simple terminal-based program that was created entirely in python.
                             <br/>
                            <a href='https://github.com/kolemor/CPSC352-Secure_Chat' className='hyperLink'>Secure Chat Github Link</a>
                        </p>
                    </div>
            </div>
        </div>
    </section>
  )
}

// Exports the project component to be used in other parts of the application
export default Projects