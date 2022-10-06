import React, { useContext } from 'react'
import { authContext } from '../contexts/AuthProvider'
import { When } from 'react-if';
import cookies from 'react-cookies'

function Header() {

  const { logOut, isAuth } = useContext(authContext);

  return (
    <header>
      <nav className="bp4-navbar bp4-light">
        <div className="bp4-navbar-group bp4-align-left">
          <div className="bp4-navbar-heading">M&W White-Board</div>
        </div>
        <div className="bp4-navbar-group bp4-align-right">
          <When condition={isAuth}>
            <button className="bp4-button bp4-minimal bp4-icon-home">Home</button>
            <button className="bp4-button bp4-minimal bp4-icon-user">{cookies.load('username')}</button>
            <button className="bp4-button bp4-minimal" onClick={logOut}>Log Out</button>
            <span className="bp4-navbar-divider"></span>
          </When>
          <button className="bp4-button bp4-minimal">Mode</button>
        </div>
      </nav>
    </header>
  )
}

export default Header
