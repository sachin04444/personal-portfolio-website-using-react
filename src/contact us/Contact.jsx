import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="continer contact__container">
        <div className="contact_options">
          <article className="contact_option">
            <h4>Email</h4>
            <h5>sachintrivedi221@gmail.com</h5>
            <a href="mailto:sachintrivedi2212gmail.com">send a massage</a>
          </article>
          <article className="contact_option">
            <h4>Massanger</h4>
            <h5>TEXT msg</h5>
            <a href="mailto:sachintrivedi2212gmail.com">send a massage</a>
          </article>
          <article className="contact_option">
            <h4>Whats up</h4>
            <h5>9974416299</h5>
            <a href="https://api.whatsapp.com/send?phone+919974416299">send a massage</a>
          </article>
        </div>
        <form action="" >
          <input type="text"  name='name' placeholder='your Full Name' required/>
          <input type="email"  name='email' placeholder='your Email' required/>
          <textarea name="message" rows="7" placeholder='Your message'required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
