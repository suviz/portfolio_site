import * as React from 'react';
import { Link, useLocation } from 'react-router-dom'
import github from '../../pictures/github.png';
import linkedin from '../../pictures/linkedin.png';
import './navbar.css';

export default function NavBar() {
  const url = useLocation().pathname;
  
  return (
    <div className='navbar'>
      
      <div className='nav-logo-div'>
        <Link to="/" className='nav-logo'>Suvi Zitting </Link>
      </div>

      <div className='nav-text-links'>

        <div className='nav-textlinks'>
          <Link to="/" className={`nav-textlink ${(url === '/') ? "active" : ""}`} >Home </Link>
          <Link to="/about" className={`nav-textlink ${(url === '/about') ? "active" : ""}`}>About</Link>
        </div>

        <span className='nav-separator'></span>

        <div className='nav-image-links'>

          <Link to="//www.github.com/suviz" className='nav-image-link'> 
            <img src={github} alt="github" className='nav-image'></img>
          </Link>

          <Link to="//www.linkedin.com/in/suvi-zitting-84719723a" className='nav-image-link'>
            <img src={linkedin} alt="linkedin" className='nav-image'></img>
          </Link>

        </div>
        

      </div>

      

    </div>
  );
}