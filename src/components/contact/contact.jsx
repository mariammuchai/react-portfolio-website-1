import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
              <AiOutlineMail/>
              <h4>Email</h4>
              <h5>mariemuchai569@gmail.com</h5>
              <a href="mailto:mariemuchai569@gmail.com" target="_blank">Send a message</a>
            </article>
            <article className="contact__option">
              <BsMessenger/>
              <h4>Messenger</h4>
              <h5>mariammuchai</h5>
              <a href="https://m.me/mariee.muchai.52" target="_blank">Send a message</a>
            </article>
            <article className="contact__option">
              <BsWhatsapp/>
              <h4>WhatsApp</h4>
              <h5>+11111111111</h5>
              <a href="https://api.whatsapp.com/send?phone=+11111111111" target="_blank">Send a message</a>
            </article>
        </div>
          {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact