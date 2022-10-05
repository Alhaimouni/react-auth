import React, { useContext, useEffect, useState } from 'react';
import '../styles/Register.css';
import SigninForm from './SigninForm';
import SignUpForm from './SignUpForm';
import RegisterHero from './RegisterHero';
import { authContext } from '../contexts/AuthProvider';
import { When } from 'react-if';
import { Navigate } from 'react-router-dom';


function Register() {

  const { showSignIn, isAuth, checkToken } = useContext(authContext);

  checkToken();  //function to check the token to deni self /login router use 


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
