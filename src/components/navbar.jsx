import * as React from 'react';
import './navbar.css';
import github from '../pictures/github.png';
import linkedin from '../pictures/linkedin.png';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='navbar'>

      <div className='icons'>

        <Link to="//www.github.com/suviz" className='icon-link'> 
          <img src={github} alt="github" className='icon'></img>
        </Link>

        <Link to="//www.linkedin.com/in/suvi-zitting-84719723a" className='icon-link'>
          <img src={linkedin} alt="linkedin" className='icon'></img>
        </Link>

      </div>

      <div className='links'>
        <Link to="/" className='nav-link'>Home </Link>
        <Link to="/about" className='nav-link'>About me</Link>
      </div>

      
    </div>
  );
}