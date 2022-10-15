import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
import './footer.css'


const Footer = () => {
    return (
        <footer>
            <a href="#Home" className='footer__logo'>HEY</a>
            <ul className="permalinks">
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com"><FaFacebookF /></a>
                <a href="https://www.instagram.com/sachin_trivedi_04/"><FiInstagram /></a>
                <a href="https://www.twitter.com"><IoLogoTwitter /></a>
            </div>
            <div className="footer_copyright">
                <small> &copy; HEY  </small>
            </div>

        </footer>
    )
}

export default Footer