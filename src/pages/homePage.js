import { Link } from "react-router-dom";

function HomePage() {
    return (
  
        <main>
  
          <div className='hero'>
            <h1> 
              Moikkuli!
            </h1>
  
            <p className='hero-desc'>Description</p>
  
            <div className='buttons'>
                <Link to="/about" className='button'>About me</Link>
                <Link to="#projects" className='button'>Projects</Link>
                <Link to="#contact" className='button'>Contact</Link>
            </div>
          </div>
  
    
          <div className='projects' id="projects">
            <h2>Projects</h2>
          </div>
  
          <div className='contact' id="contact">
            <h2>Contact me</h2>
          </div>
  
        </main>
  
    );
  }
  
  export default HomePage;
  