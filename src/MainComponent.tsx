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
    <>
      <main>
        <div><Link to="/home">Nyári Tábor Foglaló</Link></div>

        <nav>
          <ul>
            {isLoggedIn && (
              <li><Link to="/profile">Profil</Link></li>
            )}

            {!isLoggedIn && (
              <>
                <li><Link to="/signup">Regisztráció</Link></li>
                <li><Link to="/login">Bejelentkezés</Link></li>
              </>
            )}

            {isLoggedIn && (
              <>
                <li>
                  <Link to="/logout">Kijelentkezés</Link>
                </li>
                <li><Link to="/addcamp">Új tábor</Link></li>
                <li><Link to="/addlocation">Új táborhelyszín</Link></li>
                <li><Link to="/applications">Jelentkezéseim</Link></li>
              </>
            )}
          </ul>
        </nav>
        <h1>Üdvözlünk a Nyári Tábor Foglaló honlapján!</h1>

        <h2>Itt böngészhetsz táborokat, vagy regisztrálhatsz, bejelentkezhetsz, hogy kezelhesd a profilod.</h2>
      </main>
    </>
  )
}

export default MainComponent
