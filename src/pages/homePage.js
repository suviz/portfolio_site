import { Link } from "react-router-dom";
import { useRef } from 'react';

function HomePage() {

    const projectRef = useRef();
    const contactRef = useRef();

    return (
  
        <main>
            
            <section id="hero">
                <div className='hero'>

                    <h1>Moikkuli!</h1>
                    <p className='hero-desc'>Description</p>
        
                    <div className='buttons'>
                        <Link to="/about" className='button'>About me</Link>
                        <Link to="#projects" className='button' onClick={() => projectRef.current?.scrollIntoView({behavior: 'smooth'})}>Projects</Link>
                        <Link to="#contact" className='button' onClick={() => contactRef.current?.scrollIntoView({behavior: 'smooth'})}>Contact</Link>
                    </div>
                    
                </div>
            </section>
            
            <section ref={projectRef} id="projects">
                <div className='projects' >
                    <h2>Projects</h2>
                </div>
            </section>
            
            <section ref={contactRef} id="contact">
                <div className='contact'>
                    <h2>Contact me</h2>
                </div>
            </section>
          
        </main>
  
    );
  }
  
  export default HomePage;
  