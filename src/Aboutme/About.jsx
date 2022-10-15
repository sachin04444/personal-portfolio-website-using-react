import React from 'react'

// import Me  from './../../assent/sachin.jpg'
import Me from '../../src/assent/sachin.jpg'
// import { FiAward } from 'react-icons/fa'
// import { AiOutlineUser } from './react-icon/Ai'
import {AiOutlineHome} from 'react-icons/ai'
import './about.css'

const About = () => {

  return (
    <section id='about'>
      <h5> get to know </h5>
      <h2> About Me </h2>

      <div className='continer about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Me} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card' >
              <AiOutlineHome  className="about__icon" />
              <h5>matangi indane</h5>
              <small>3+ year working</small>
            </article>
            <article className='about__card' >
              <AiOutlineHome  className="about__icon" />
              <h5>Felix It </h5>
              <small>3+month Internship</small>
            </article>
            {/* <article className='about__card' >
              <AiOutlineHome  className="about__icon" />
              <h5>Experiance</h5>
              <small>3+ year working</small>
            </article> */}
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, magni. Vero dolores explicabo, itaque aut,
          </p>
          <a href="#contact" className='btn btn-primary'>lets go</a>
        </div>
      </div>
    </section>
  )
}

export default About
