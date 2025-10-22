import './MainComponent.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import chatbotIcon from '/chatbot-icon.jpg' 
import cserkesztabor from '/cserkesztabor.jpg'
import drcode from '/drcode.jpg'
import forestSummerCamp from '/forest-summer-camp.jpg'
import childrenLyingInGrass from '/group_of_children_lying_in_the_grass_in_a_circle.jpg'

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
        <div>

          <h1>Üdvözlünk a Nyári Tábor Foglaló honlapján!</h1>

          <h2>Itt böngészhetsz táborokat, vagy regisztrálhatsz, bejelentkezhetsz, hogy kezelhesd a profilod.</h2>
          <div className='images'>
            <h2>Képek👇</h2>
            <div>
              <a href="https://vite.dev" target="_blank">
                <img src={chatbotIcon} className="logo" alt="Vite logo" />
              </a>
              <a href="https://vite.dev" target="_blank">
                <img src={chatbotIcon} className="logo" alt="Vite logo" />
              </a>
              <a href="https://vite.dev" target="_blank">
                <img src={chatbotIcon} className="logo" alt="Vite logo" />
              </a>
              <br/>
              <img src={cserkesztabor} className="logo" alt="Cserkésztábor" />
              <img src={drcode} className="logo" alt="Dr. Code Tábor" />
              <img src={forestSummerCamp} className="logo" alt="Forest Summer Camp" />
              <img src={childrenLyingInGrass} className="logo" alt="Gyerekek a fűben" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default MainComponent
