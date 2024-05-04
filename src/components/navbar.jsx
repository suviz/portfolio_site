import * as React from 'react';
import './navbar.css';
import github from '../pictures/github.png';
import linkedin from '../pictures/linkedin.png';
import email from '../pictures/email.png';

export default function NavBar() {
  return (
    <div className='navbar'>

      <div className='icons'>
        <a href="//www.github.com/suviz" className='icon-a'>
          <img src={github} alt="github" className='icon'></img>
        </a>
        <a href="//www.linkedin.com/in/suvi-zitting-84719723a" className='icon-a'>
          <img src={linkedin} alt="linkedin" className='icon'></img>
        </a>
        <a href="/" className='icon-a'>
          <img src={email} alt="email" className='icon'></img>
        </a>
      </div>

      <div className='links'>
        <a href="/" className='nav-link'>Home</a>
        <a href="/about" className='nav-link'>About Me</a>
      </div>

      
    </div>
  );
}