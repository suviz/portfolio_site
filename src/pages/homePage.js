import { Link } from "react-router-dom";
import { useRef } from 'react';

import './homePage.css';

function HomePage() {

    const projectRef = useRef();
    const contactRef = useRef();

    return (
  
        <div>
            
            <section id="hero">
                <div className='hero'>

                    <h1 className="hero-h1">Hi! I'm Suvi,</h1>
                    <h2 className="hero-h2">an aspiring software developer.</h2>
                    <p className='hero-desc'>I am currently pursuing a degree in Computer Science at the Aalto University. Take a look at my projects!</p>
        
                    <div className='buttons'>
                        <Link to="/about" className='button'>About me</Link> 
                        <Link to="#projects" className='button' onClick={() => projectRef.current?.scrollIntoView({behavior: 'smooth'})}>Projects</Link>
                        <Link to="#contact" className='button' onClick={() => contactRef.current?.scrollIntoView({behavior: 'smooth'})}>Contact</Link>
                        <Link to="/capybara" className='button'>🦫</Link>
                    </div>
                    
                </div>
            </section>
            
            <section ref={projectRef} id="projects">
                <div className='projects' >
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </section>
            
            <section ref={contactRef} id="contact">
                <div className='contact'>
                    <h2>Contact me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </section>
          
        </div>
  
    );
  }
  
  export default HomePage;
  