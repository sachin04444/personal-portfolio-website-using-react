import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import './experiancs.css'

const Experiance = () => {
  return (
    <section id='Experiance'>
      <h5>whats skill you Have </h5>
      <h2>my Experiance </h2>
      <div className="continer experiance__container">
        <div className="experience__frontend">
          <h3>FrontEnd Devlopent </h3>
          <div className="experiace__content">
            <article className='experience__details'>
              <AiOutlineHome className='experience__details-icon' />
              <h4>HTML</h4>
              <small className='text-light' > Experiance</small>
            </article>
            <article className='experience__details'>
              <AiOutlineHome />
              <h4>css</h4>
              <small className='text-light' > Experiance</small>
            </article>
            <article className='experience__details'>
              <AiOutlineHome />
              <h4>javascript</h4>
              <small className='text-light' > intermediate</small>
            </article>
            <article className='experience__details'>
              <AiOutlineHome />
              <h4>React</h4>
              <small className='text-light' > Experiance</small>
            </article>
          </div>
        </div>



        <div className="experience__frontend">
          <h3>Backend Devlopent</h3>
          <div className="experiace__content">
            <article className='experience__details'>
              <AiOutlineHome className='experience__details-icon' />
              <h4>python</h4>
              <small className='text-light' > intermediate </small>
            </article>
            <article className='experience__details'>
              <AiOutlineHome />
              <h4>Django</h4>
              <small className='text-light' > Experiance</small>
            </article>
            {/* <article className='experience__details'>
              <AiOutlineHome />
              <h4></h4>
              <small className='text-light' > intermediate</small>
            </article> */}
            <article className='experience__details'>
              <AiOutlineHome />
              <h4>javascript</h4>
              <small className='text-light' > Experiance</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiance
