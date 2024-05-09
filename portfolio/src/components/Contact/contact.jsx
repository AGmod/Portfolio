import React from 'react' // Import React library
import './contact.css'; // Import CSS styling

// Component to display the Contact section
const Contact = () => {
  return (

    // Section that contains all the contact information
    <section id='contact'>

      {/* Container for the contact information */}
      <div className='contact'>
        <h1 className='contactTitle'>Contact Me</h1>
        <span className='contactDesc'> This is my contact info where you can reach out to me!</span>
        <div className='contactList'>

          {/* Contact email information */}
          <div className='contactEmail'>
            <h2>Email</h2>
            <p>Gu.alejandro007@gmail.com</p>
          </div>

          {/* Contact phone number information */}
          <div className='contactPhone'>
            <h2>Phone number</h2>
            <p>(714)597-0633</p>
          </div>
        </div>
       
      </div>
    </section>
  )
}

// Exports the contact component to be used in other parts of the application
export default Contact