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
import campLogo from '/app-logo-icons/favicon-96.png'

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
              <img src={chatbotIcon} className="forog logo" alt="AI tábor foglaló Chatbot asszisztens" />
              <img src={chatbotIcon} className="forog logo" alt="AI tábor foglaló Chatbot asszisztens" />
              <img src={chatbotIcon} className="forog logo" alt="AI tábor foglaló Chatbot asszisztens" />
              <div className="scroll-arrow">
                <span className="arrow-text">Görgess Lejjebb a Galériához</span>
                <div className="arrow">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div className='gallery'>
              <h2>Tábori galéria🖼🎨👇</h2>
              <div>
                <div>

                  <img src={cserkesztabor} className="logo" alt="Cserkésztábor" style={{ width: '50%', height: '50%' }} />
                  <h3>Cserkésztábor</h3>
                  <p>Kalandok és természetfelfedezés kerületi cserkésztáborainkban!</p>
                </div>
                <div>
                  <img src={tabortuzJatekok} className="logo" alt="Tábortűz játékok" style={{ width: '50%', height: '50%' }} />

                  <h3>Tábor Erdély egzotikus hegyeiben</h3>
                  <p>Meghitt esték közös énekléssel és tábortűzzel a csillagos ég alatt.</p>
                </div>
                <div>

                  <img src={drcode} className="logo" alt="Dr. Code Tábor" style={{ width: '50%', height: '50%' }} />

                  <h3>Programozás és robotika táborok</h3>
                  <p>Modern technológiai kalandok a Dr. Code szervezésével! - Tanulás játékosan.</p>
                </div>
                <div>

                  <img src={forestSummerCamp} className="logo" alt="Forest Summer Camp" style={{ width: '50%', height: '50%' }} />

                  <h3>Erdei vándortábor</h3>
                  <p>A múlt évi nyári erdei vándortáborok legjobb pillanatai :D . Hátizsákkal, barátokkal lenyűgöző természeti
                    tájakon át vezetett az út! :O</p>
                </div>
                <div>
                  <img src={childrenLyingInGrass} className="logo" alt="Gyerekek a fűben" style={{ width: '50%', height: '50%' }} />
                  <h3>Közösségi programok</h3>
                  <p>Kreatív és közösségépítő foglalkozások, ahol mindenki megtalálja a helyét.</p>
                </div>
                <div>

                  <img src={islandCamp} className="logo" alt="Szigeti tábor" style={{ width: '50%', height: '50%' }} />
                  <h3>Cserkésztábor Izlandon</h3>
                  <p>Ez egy egyedülálló kép az izlandi cserkésztáborokról! Gejzírek, lenyűgöző tájak és különleges programok
                    izland szigetén.</p>
                </div>
                <div>
                  <img src={nyariTabor} className="logo" alt="Nyári tábor" style={{ width: '50%', height: '50%' }} />

                  <h3>Fonyódligeti Erzsébet-táborok</h3>
                  <p>Minden évben egész nyáron várjuk a gyermekeket, most már 3 helyszínen!</p>
                </div>
                <div>
                  <img src={szentMargit} className="logo" alt="Szent Margit Tábor" style={{ width: '50%', height: '50%' }} />

                  <h3>Szent Margit cserkésztábor</h3>
                  <p>Egy cserkészcsapat, ahol a hagyományok, tanulás, közösség és a játék kéz a kézben járnak.</p>
                </div>
                <div>
                  <img src={szinjatszotabor} className="logo" alt="Színjátszó tábor" style={{ width: '50%', height: '50%' }} />

                  <h3>Színjátszótábor</h3>
                  <p>Fedezd fel a benned rejlő színészt! Előadások, szerepjátékok, improvizációk.</p>
                </div>
                <div>

                  <img src={zankaiElmenytabor} className="logo" alt="Zánkai Élménytábor" style={{ width: '50%', height: '50%' }} />
                  <h3>Zánkai élménytábor</h3>
                  <p>Vidám és változatos programok Magyarország legnagyobb táborában, a Balaton partján &#45; számíthahsz ránk,
                    számítunk rád!</p></div>
              </div>
            </div>
          </div>
        </div>
      </main >
    </>
  )
}

export default MainComponent
