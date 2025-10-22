import './MainComponent.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import chatbotIcon from '/chatbot-icon.jpg'
import cserkesztabor from '/cserkesztabor.jpg'
import drcode from '/drcode.jpg'
import forestSummerCamp from '/forest-summer-camp.jpg'
import childrenLyingInGrass from '/group_of_children_lying_in_the_grass_in_a_circle.jpg'
import islandCamp from '/island_camp.jpg'
import nyariTabor from '/nyari_tabor.jpg'
import szentMargit from '/szent_margit.jpg'
import szinjatszotabor from '/szinjatszotabor.jpg'
import tabortuzJatekok from '/tabortuz-jatekok.jpg'
import zankaiElmenytabor from '/Zankai_Elmenytabor.jpg'


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

            <div>
              <h2>Beszélgess AI Tábor Foglalóval👇</h2>
              <a href="https://vite.dev" target="_blank">
                <img src={chatbotIcon} className="logo" alt="Vite logo" />
              </a>
              <a href="https://vite.dev" target="_blank">
                <img src={chatbotIcon} className="logo" alt="Vite logo" />
              </a>
              <a href="https://vite.dev" target="_blank">
                <img src={chatbotIcon} className="logo" alt="Vite logo" />
              </a>
              <div className="scroll-arrow">
                <span className="arrow-text">Görgess Lejjebb a Galériához</span>
                <div className="arrow">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div>
              <h2>Tábori galéria🖼🎨👇</h2>
              <div>
                <img src={cserkesztabor} className="logo" alt="Cserkésztábor" style={{ width: '50%', height: '50%' }} />
                <img src={drcode} className="logo" alt="Dr. Code Tábor" style={{ width: '50%', height: '50%' }} />
                <img src={forestSummerCamp} className="logo" alt="Forest Summer Camp" style={{ width: '50%', height: '50%' }} />
                <img src={childrenLyingInGrass} className="logo" alt="Gyerekek a fűben" style={{ width: '50%', height: '50%' }} />
                <img src={islandCamp} className="logo" alt="Szigeti tábor" style={{ width: '50%', height: '50%' }} />
                <img src={nyariTabor} className="logo" alt="Nyári tábor" style={{ width: '50%', height: '50%' }} />
                <img src={szentMargit} className="logo" alt="Szent Margit Tábor" style={{ width: '50%', height: '50%' }} />
                <img src={szinjatszotabor} className="logo" alt="Színjátszó tábor" style={{ width: '50%', height: '50%' }} />
                <img src={tabortuzJatekok} className="logo" alt="Tábortűz játékok" style={{ width: '50%', height: '50%' }} />
                <img src={zankaiElmenytabor} className="logo" alt="Zánkai Élménytábor" style={{ width: '50%', height: '50%' }} />
              </div>
            </div>
          </div>
        </div>
    </main >
    </>
  )
}

export default MainComponent
