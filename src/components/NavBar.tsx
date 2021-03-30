/* eslint-disable react/prop-types */
import React, {Dispatch} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToggleAction } from './redux-actions/themeActions';


const NavBar: React.FC = () => {
  const toggle = useSelector(state => state);
  const dispatch = useDispatch<Dispatch<ToggleAction>>();

  const handleToggleTheme = () => {
    dispatch({type: 'theme/toggle'});
  }

  return (
    <nav className={`navbar ${(toggle ? 'navbar-dark bg-dark' : 'navbar-light bg-light')} sticky-top navbar-expand-md`}>
      <div className="container-fluid">
        <ul className="navbar-nav navbar-collapse col">
          <li className="nav-item">
            <a className="nav-link" href="#" >Home</a>
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
        <ul className="navbar-nav navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <button className={`btn ${(toggle ? 'btn-outline-light' : 'btn-outline-dark')} btn-sm nav-item`} onClick={handleToggleTheme} >
                {toggle ? 'Dark Theme' : 'Light Theme'}
              </button>
            </li>
          </ul>
          
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;