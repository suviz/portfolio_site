import * as React from 'react';
import './navbar.css';
import github from '../../pictures/github.png';
import linkedin from '../../pictures/linkedin.png';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='navbar'>
      
      <div className='nav-logo-div'>
        <Link to="/" className='nav-logo'>Suvi Zitting </Link>
      </div>

      <div className='nav-text-links'>

        <div className='nav-textlinks'>
          <Link to="/" className='nav-textlink'>Home </Link>
          <Link to="/about" className='nav-textlink'>About</Link>
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