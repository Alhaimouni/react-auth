import React, { useContext, useEffect, useState } from 'react';
import '../styles/Register.css';
import SigninForm from './SigninForm';
import SignUpForm from './SignUpForm';
import RegisterHero from './RegisterHero';
import { authContext } from '../contexts/AuthProvider';
import { When } from 'react-if';
import { Navigate } from 'react-router-dom';
import cookies from 'react-cookies'

function Register() {

  const { showSignIn, isAuth, setIsAuth } = useContext(authContext);

  useEffect(() => {
    const token = cookies.load('token');
    if (token) {
      setIsAuth(true);
    }
  }, [])

  return (
    <>
      <When condition={isAuth}>
        <Navigate to='/' />
      </When>
      <When condition={!isAuth}>
        <div className='register'>
          <div className='registerCard'>
            <RegisterHero />
            <div className='registerForm'>
              <When condition={showSignIn}>
                <SigninForm />
              </When>
              <When condition={!showSignIn}>
                <SignUpForm />
              </When>
            </div>
          </div>
        </div >
      </When>
    </>

  )
}

export default Register
