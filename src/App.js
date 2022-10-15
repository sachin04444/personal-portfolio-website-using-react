import React from 'react'
import About from './Aboutme/About'
import "./index.css"
import Header from "./Header/Header"
import Nav from './Nav/Nav'
import Experiance from './experiance/Experiance'
import Portfolio from './protfoliyo/Portfolio'
import Contact from './contact us/Contact'
import Footer from './Footer/Footer'



const App = () => {
  return (
    <>
     
     <Header/>
     <Nav/>
     <About/>
     <Experiance/>
     <Portfolio/>
     <Contact/>
    <Footer/>

    </>
  )
}

export default App
