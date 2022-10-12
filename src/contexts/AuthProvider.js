import axios from 'axios';
import React, { useReducer, useState } from 'react';
import base64 from 'base-64';
import cookies from 'react-cookies';
import { authReducer, initState } from '../reducers/authReducer';
import { actions } from '../reducers/actionTypes';


export const authContext = React.createContext();



function AuthProvider(props) {


  const [authStates, dispatch] = useReducer(authReducer, initState);





  function goToSignUp() {
    dispatch({ type: actions.SHOW_SIGNUP });
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
          dispatch({ type: actions.SIGNUP_SUCCESS });
        })
        .catch(reject => {
          dispatch({ type: actions.SIGNUP_FAIL, payload: reject.response.data });
        })
    } else {
      dispatch({ type: actions.SIGNUP_FAIL, payload: `Password Must Match` });
    }
  }

  const [isAuth, setIsAuth] = useState(() => false);
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
        cookies.save('role', resolve.data.user.role);
        setIsAuth(true);
      })
      .catch(reject => {
        console.log(reject, 'inside signin reject');
        dispatch({ type: actions.SIGNUP_FAIL, payload: reject.response.data });
      })
  }

  function logOut() {
    cookies.remove('token');
    cookies.remove('username');
    cookies.remove('capabilities');
    cookies.remove('_id');
    setIsAuth(false);
  }

  function canDo() {
    let userCapabilites = cookies.load('capabilities');
    if (userCapabilites.includes('read')) {
      return true;
    } else if (userCapabilites.includes('add')) {
      return true;
    } else if (userCapabilites.includes('delete')) {
      return true;
    } else if (userCapabilites.includes('update')) {
      return true;
    } else {
      return false;
    }
  }





  const value = { isAuth, setIsAuth, signUp, signIn, logOut, goToSignUp, canDo, authStates };
  return (
    <authContext.Provider value={value}>
      {props.children}
    </authContext.Provider>
  )
}

export default AuthProvider
