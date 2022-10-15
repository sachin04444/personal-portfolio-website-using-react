import React from 'react'
import { FiInstagram } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import {BsLinkedin} from  "react-icons/bs"

const Headersocials = () => {
  return (
    <div  className='Header__socials' >
      <a href="https://Linkedin" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/sachin04444" target="_blank"><FaGithub/></a>
      <a href="https://www.instagram.com/sachin_trivedi_04/" target="_blank"><FiInstagram/></a>
    </div>
  )
}

export default Headersocials
