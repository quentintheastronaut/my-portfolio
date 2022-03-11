import React from 'react'
import './index.css'
import ME from '../../assets/about-me.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'

function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h1>About me</h1>

      <div className="container about__container">
        <div className="about__me">
          <img className='about__me--image' src={ME} alt="about-me.jpg" />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>+1 year studying</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Teamwork</h5>
              <small>+10 Teams</small>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Projects</h5>
              <small>+10 Projects</small>
            </article>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio culpa assumenda quis quibusdam consectetur quisquam, magnam quo quia laborum totam blanditiis deserunt exercitationem velit perferendis quod quaerat labore, nulla unde.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About