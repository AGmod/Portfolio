import React from 'react' // Import React library
import './about.css'; // Import CSS styling

// Component to display the about section
const About = () => {
  return (

    // Section that contains all the about information
    <section id='about'>
      <span className='aboutTitle'>A brief description about me</span>
      <div className='aboutList'>

        {/* About item for my Education */}
        <div className='aboutItem'>
          <div className='aboutItemText'>
            <h2>Education</h2>
            <p>I went to Santiago Canyon College for 3 years and got an associate in liberal arts with an emphasis in Math and Science.
              I then transferred to Cal State University Fullerton to pursue my bachelors in Computer Science. 
              I am expected graduate this Spring of 2024.</p>
          </div>
        </div>

        {/* About item for my Hobbies */}
        <div className='aboutItem'>
          <div className='aboutItemText'>
            <h2>Hobbies</h2>
            <p>In my spare time, I like to repair old tech items like consoles and phones. I also like to play the piano and mix music on my free time.</p>
          </div>
        </div>

        {/* About item for my Strengths */}
        <div className='aboutItem'>
          <div className='aboutItemText'>
            <h2>Strengths</h2>
            <p>Some of my strengths include orginization, communication, and adaptability. 
              I will be organized with my work and stay on top of it to finish tasks by the deadline. 
              I am also good with communicating with my peers making sure my peers and I are on the same page. </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Exports about component to be used in other parts of the application
export default About