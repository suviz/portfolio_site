import './App.css';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App background">

      <header>
        <NavBar/>
      </header>

      <main>

        <div className='hero'>
          <h1> 
            Moikkuli!
          </h1>

          <p className='hero-desc'>Description</p>

          <div className='buttons'>
            <a href="/about" className='button'>About me</a>
            <a href="#projects" className='button'>Projects</a>
            <a href="#contact" className='button'>Contact</a>
            
          </div>
        </div>

  
        <div className='projects' id="projects">
          <h2>Projects</h2>
        </div>

        <div className='contact' id="contact">
          <h2>Contact me</h2>
        </div>

      </main>

    
    </div>
  );
}

export default App;
