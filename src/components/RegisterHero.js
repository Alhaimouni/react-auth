import React, { useContext } from 'react';
import '../styles/Register.css';
import { authContext } from '../contexts/AuthProvider';


function RegisterHero() {
  const { goToSignUp } = useContext(authContext);
  return (
    <div className='registerHero'>
      <div className='heroTop'>
        <p id='logo'>M&W</p>
      </div>
      <div className='heroMid'>
        <h3>Welcome To Our  <span id='siteName'>  White-Board</span> </h3>
        <p>Don't have an account <a href onClick={goToSignUp}>SignUp</a></p>
      </div>
      <div className='heroBot'>
      </div>
    </div>
  )
}

export default RegisterHero
