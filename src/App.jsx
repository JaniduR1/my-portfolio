import './App.css';
import './index.css'
import { useState } from 'react';

import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';

function App() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}

      <div className={`min-h-screen transition-opacity duration-700 ease-in-out ${isLoaded ? "opacity-100" : "opacity-0"} bg-white text-blue-900`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Home />
        <About />
      </div>
    </>
  )
}

export default App
