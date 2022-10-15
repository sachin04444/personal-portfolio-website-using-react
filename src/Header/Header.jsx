import React from 'react'
import CTA from "./CTA"
import Mee from '../../src/assent/sachin.jpg'
import Headersocials from './Headersocials'
import "./Header.css"


const Header = () => {
  return (
    <>
      <header>
        <div className="continer header__container">
          <h5>hello I'm</h5>
          <h1>sachin trivedi</h1>
          <h5 className="text-light">fullstack devloper</h5>
          <CTA />
          <Headersocials/>
          <div className="me">
            <img src={Mee} alt="my phots" />
          </div>
          <a href="#contact" className="scroll__down">Scroll Down</a>
        </div>
      </header>
    </>
  )
}

export default Header