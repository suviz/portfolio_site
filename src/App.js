import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';
import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';

function App() {
  return (
    <div className="App background">

      <header>
        <NavBar/>
      </header>

      <main>
        <div className='main-content'>
          <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/about" element={ <AboutPage /> } />
          </Routes>
        </div>
        
      </main>
      

    
    </div>
  );
}

export default App;
