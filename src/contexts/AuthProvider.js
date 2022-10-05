import axios from 'axios';
import React, { useState } from 'react';
import base64 from 'base-64';
import cookies from 'react-cookies';


export const authContext = React.createContext();



function AuthProvider(props) {

  const [showSignIn, setShowSignIn] = useState(() => true);
  const [isAuth, setIsAuth] = useState(() => false);
  const [err, setErr] = useState(() => '');

  function goToSignUp() {
    setErr('');
    setShowSignIn(false);
  }

  function signIn(e) {
    e.preventDefault();
    const encodedUserData = base64.encode(`${e.target.username.value}:${e.target.password.value}`);
    const url = `${process.env.REACT_APP_SERVER}/signin`;
    const basicAuth = { headers: { authorization: `Basic ${encodedUserData}` } };
    axios.post(url, {}, basicAuth)
      .then(resolve => {
        cookies.save('token', resolve.data.token);
        cookies.save('username', resolve.data.user.username);
        cookies.save('capabilities', resolve.data.user.capabilities);
        cookies.save('_id', resolve.data.user._id);
        setIsAuth(true);
      })
      .catch(reject => {
        console.log(reject, 'inside signin reject');
        setErr(reject.response.data);
      })
  }

  function signUp(e) {
    e.preventDefault();
    const userData = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.confirmPassword.value,
    }
    if (e.target.confirmPassword.value === e.target.password.value) {
      const url = `${process.env.REACT_APP_SERVER}/signup`
      axios.post(url, userData)
        .then(resolve => {
          setShowSignIn(true);
          setErr('');
        })
        .catch(reject => {
          setErr(reject.response.data);
        })
    } else {
      setErr(`Password Must Match`);
    }
  }

  function logOut() {
    cookies.remove('token');
    cookies.remove('username');
    cookies.remove('capabilities');
    cookies.remove('_id');
    setIsAuth(false);
  }

  function checkToken() {
    const token = cookies.load('token');
    if (token) {
      setIsAuth(true);
    }
  }



  const value = { showSignIn, setShowSignIn, isAuth, setIsAuth, err, setErr, signUp, signIn, logOut, goToSignUp, checkToken };
  return (
    <authContext.Provider value={value}>
      {props.children}
    </authContext.Provider>
  )
}

export default AuthProvider
