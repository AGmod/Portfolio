import React from 'react'
import './home.css'
import avatar from '../Assets/avatar.png'

const Home = () => {
  return (
    <section id='home'>
        <div className='homeContent'>
            <span className='homeDesc'>Hello! <br/> My name is <span className='devName'>Alejandro Guerrero</span> <br/> and I am a <span className='devName'>Software Developer</span></span>
            <p className='description'>I am a senior at Cal State University Fullerton <br/> and I have worked on different projects throughout my years of learning</p>
        </div>
        <img src={avatar} alt='Avatar' className='avatar' />
    </section>
  )
}

export default Home