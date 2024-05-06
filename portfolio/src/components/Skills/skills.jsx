import React from 'react'
import './skills.css';

const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>My list of skills</span>
      <div className='skillList'>
        <div className='skillItem'>
          <div className='skillItemText'>
            <h2>C++</h2>
            <p> I have worked on various projects or assignments using C++ as the language. It was also my first starting language.</p>
          </div>
        </div>
        <div className='skillItem'>
          <div className='skillItemText'>
            <h2>Python</h2>
            <p> I have worked on some assignments for Python in previus classes. Some of the assignments involved were in cyber security. </p>
          </div>
        </div>
        <div className='skillItem'>
          <div className='skillItemText'>
            <h2>Swift</h2>
            <p> Used swift to creat mobile iOS apps for some projects.</p>
          </div>
        </div>
        <div className='skillItem'>
          <div className='skillItemText'>
            <h2>ReactJS</h2>
            <p> Have used ReactJS for a project in software engineering and my Capstone project.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills