import React, { useContext, useEffect } from 'react';
import { When } from 'react-if';
import { Navigate } from 'react-router-dom';
import { authContext } from '../contexts/AuthProvider';
import cookies from 'react-cookies';

function Main() {
  const { isAuth, setIsAuth } = useContext(authContext);

  useEffect(() => {
    const token = cookies.load('token');
    if (token) {
      setIsAuth(true);
    }

  }, []);

  return (
    <>
      <When condition={isAuth}>
        <main>
          <h1>main page</h1>
        </main>
      </When>
      <When condition={!isAuth}>
        <Navigate to='/login' />
      </When>
    </>
  )
}

export default Main
