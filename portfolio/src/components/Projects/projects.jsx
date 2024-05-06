import React from 'react'
import './projects.css';
import AstroDex from '../Assets/AstroDex.png';
import Isabel from '../Assets/Isabel.png';

const Projects = () => {
  return (
    <section id='projects'>
        <span className='projectsTitle'>Here is my list of projects</span>
        <div className='projectsList'>
            <div className='projectsItem'>
                <img src={AstroDex} alt='AstroDex' className='projectsItemImg' />
                    <div className='projectsDesc'>
                        <h2>Astro Dex</h2>
                        <p>This is a project I made with a group in React for our computer software class.</p>
                    </div>
            </div>
            <div className='projectsItem'>
                <img src={Isabel} alt='Isabel' className='projectsItemImg' />
                    <div className='projectsDesc'>
                        <h2>rEFT</h2>
                        <p>This is a project I worked on as my capstone project. My group made a site called rEFT which stands for Real Estate Fungible Token.</p>
                    </div>
            </div>
            <div className='projectsItem'>
                <img src='' alt='' className='projectsItemImg' />
                    <div className='projectsDesc'>
                        <h2>Secure Chat</h2>
                        <p>This is a secure chat program made completely in python for my cryptography class. We are supposed make a chat service that allows users to sign in and message each other without any worries of their data being leaked.</p>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Projects