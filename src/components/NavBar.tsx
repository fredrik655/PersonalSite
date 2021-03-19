/* eslint-disable react/prop-types */
import React from 'react';


interface PropsInterface {
  onClick?: () => void;
}

const NavBar: React.FC<PropsInterface> = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark sticky-top navbar-expand-md">
      <div className="container-fluid">
        <ul className="navbar-nav navbar-collapse col">
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={props.onClick}>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Github</a>
          </li>
        </ul>
        <ul className=" navbar-nav navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <button className="btn btn-outline-light btn-sm nav-item">Dark Theme</button>
            </li>
          </ul>
          
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;