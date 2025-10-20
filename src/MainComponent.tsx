import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

export function MainComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <BrowserRouter>
    <main>
      <div><Link to="/home">Nyári Tábor Foglaló</Link></div>

      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="/about">About</Link> | {" "}
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      
      <nav>
        <ul>
          <li><Link to="/home">Főoldal</Link></li>
          <li><Link to="/camps">Táborok böngészése</Link></li>
          <li><Link to="/addcamp">Új tábor</Link></li>
          <li><Link to="/addlocation">Új táborhelyszín</Link></li>
          <li><Link to="/applications">Jelentkezéseim</Link></li>

          {isLoggedIn && (
            <li><Link to="/profile">Profil</Link></li>
          )}

          {!isLoggedIn && (
            <li><Link to="/login">Bejelentkezés</Link></li>
          )}

          {isLoggedIn && (
            <li>
              <button onClick={() => setIsLoggedIn(false)}>Kijelentkezés</button>
            </li>
          )}
        </ul>
      </nav>        
    </main>
    </BrowserRouter>
  )
}

export default MainComponent
