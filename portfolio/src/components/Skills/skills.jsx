import React from 'react' // Importing React library
import './skills.css'; // Importing the CSS file to style this sectiton

// Component to display the Skill section
const Skills = () => {
  return (

    // Section that contains all the skills information
    <section id='skills'>
      <span className='skillTitle'>My list of skills</span>
      <div className='skillList'>

        {/* Skill item that for C++ */}
        <div className='skillItem'>
          <div className='skillItemText'>
            <h2>C++</h2>
            <p> I have worked on various projects or assignments using C++ as the language. 
              It was also my first starting language. Been programming in C++ for roughly 5 years.</p>
          </div>
        </div>

        {/* Skill item that for Python */}
        <div className='skillItem'>
          <div className='skillItemText'>
            <h2>Python</h2>
            <p> I have worked on some assignments for Python in previus classes. 
              Some of the assignments involved were in cyber security, algoirthms for AI, and for compilers. </p>
          </div>
        </div>

        {/* Skill item that for Swift */}
        <div className='skillItem'>
          <div className='skillItemText'>
            <h2>Swift</h2>
            <p> Used swift to creat mobile iOS apps for some projects such as a simple pokedex app and a album picture retriever.</p>
          </div>
        </div>

        {/* Skill item that for ReactJS */}
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

// Export Skills component to be used in other parts of the application
export default Skills