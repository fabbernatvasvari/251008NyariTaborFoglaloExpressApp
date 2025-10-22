import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MainComponent } from './MainComponent'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    {/* Navigation */}
    <nav>
      <ul>
        <li>  <Link to="/">Főoldal</Link></li>
        <li>  <Link to="/home">Home</Link> |{" "}</li>
        <li> <Link to="/about">About</Link> |{" "}</li>
        <li> <Link to="/contact">Contact</Link></li>
        <li><Link to="/camps">Táborok böngészése</Link></li>
      </ul>
    </nav>

    {/* Routes */}
    <Routes>
      <Route path="/" element={<MainComponent />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
)
