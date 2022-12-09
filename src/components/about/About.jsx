import React from 'react'
import './About.css'
import ME from '../../assets/IMG-7751.jpg'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFolderOpen}  from 'react-icons/ai'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
              <img src={ME} alt="about image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>

            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>

            </article>
            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ completed</small>

            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptas veritatis facere expedita natus, pariatur harum eius aperiam.
             Qui reprehenderit exercitationem quaerat? 
             Consequatur omnis alias dignissimos quas perspiciatis est. Ipsa, nihil.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>

    </section>
  )
}

export default About