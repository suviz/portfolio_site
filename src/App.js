import './App.css';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App background">

      <header className="" >
        <NavBar/>
      </header>

      <main>

        <div className='hero'>
          <h1> 
            Moikkuli!
          </h1>

          <p>Description</p>

          <div className='buttons'>
            <p>Buttons</p>
          </div>
        </div>

  
        <div className='projects'>
          <h2>Projects</h2>
        </div>

        <div className='contact'>
          <h2>Contact me</h2>
        </div>

      </main>

    
    </div>
  );
}

export default App;
