import React from 'react'
import './projects.css';
import AstroDex from '../Assets/AstroDex.png';
import reft from '../Assets/reft.png';
import secure from '../Assets/secure.png';

const Projects = () => {
  return (
    <section id='projects'>
        <span className='projectsTitle'>Here is my list of projects</span>
        <div className='projectsList'>
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

export default Projects