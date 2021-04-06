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
    <nav className={`navbar navbar-dark ${(toggle ? 'bg-dark' : 'bg-dark-mode-white')} sticky-top navbar-expand-md`}>
        <ul className="navbar-nav navbar-collapse">
          <li className="nav-item">
            <a className="nav-link"  href="#" >Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills-target">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects-target">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#git-target">Github</a>
          </li>
          <li className="nav-item mx-2">
            <button className={`btn btn-outline-light btn-sm nav-item`} onClick={handleToggleTheme} >
              {toggle ? 'Dark Theme' : 'Light Theme'}
            </button>
          </li>
        </ul>
    </nav>
  )
}

export default NavBar;