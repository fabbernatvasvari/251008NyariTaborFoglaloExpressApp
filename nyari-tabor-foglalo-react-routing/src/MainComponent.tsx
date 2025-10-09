import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div><a href="/home">Nyári Tábor Foglaló</a></div>
      <nav>
        <ul>
          <li><a href="/home">Főoldal</a></li>
          <li><a href="/camps">Táborok böngészése</a></li>
          <li><a href="/addcamp">Új tábor</a></li>
          <li><a href="/addlocation">Új táborhelyszín</a></li>
          <li><a href="/completed">Jelentkezéseim</a></li>
        </ul>
      </nav>
    </>
  )
}

export default App
