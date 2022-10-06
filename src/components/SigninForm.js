import React, { useContext } from 'react';
import '../styles/SigninForm.css';
import { authContext } from '../contexts/AuthProvider';

function SigninForm() {
  const { signIn, err } = useContext(authContext);
  return (
    <div className='Signin'>
      <p >Sign In</p>
      <form className='SigninForm' onSubmit={signIn}>
        <input type='text' name='username' placeholder='Username' className='formInput' required ></input>
        <input type='password' name='password' placeholder='Password' className='formInput' required ></input>
        <input type='submit' name='submit' value='CONTINUE' className='formSubmit' ></input>
      </form>
      <p id='errMsg'>{err}</p>
    </div>
  )
}

export default SigninForm
