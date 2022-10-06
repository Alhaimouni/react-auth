import React from 'react'
import '../styles/Footer.css'
import { FaInstagram, FaLinkedin, FaFacebookSquare, FaSteam } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='footer'>
      <section className='top'>
        <div className='t1'>
          <div className='logo'>
            <h3>M&W</h3>
            <p>CONTACT US:</p>
          </div>
          <div className='contactUs'>
            <a href='https://facebook.com' rel='external'><FaInstagram /></a>
            <a href='https://facebook.com' rel='external'><FaFacebookSquare /></a>
            <a href='https://facebook.com' rel='external'><FaSteam /></a>
            <a href='https://facebook.com' rel='external'><FaLinkedin /></a>
          </div>
        </div>
        <div className='t2'>
          <p className='topP'>Place</p>
          <a href='https://facebook.com' rel='external' className='topA'>Fake Data</a>
          <a href='https://facebook.com' rel='external' className='topA'>Fake Data</a>
          <a href='https://facebook.com' rel='external' className='topA'>Fake Data</a>
        </div>
        <div className='t3'>
          <p className='topP'>Place</p>
          <a href='https://facebook.com' rel='external' className='topA'>Fake Data</a>
          <a href='https://facebook.com' rel='external' className='topA'>Fake Data</a>
          <a href='https://facebook.com' rel='external' className='topA'>Fake Data</a>
        </div>
      </section>
      <section className='bot'>
        <p>
          Prepared by Moe & Wlla as LTUC students
        </p>
        <p>
          Copyright © 2021-2022, The Next Web B.V. Made with ❤️ in Jordan
        </p>
      </section>
    </footer>
  )
}

export default Footer
