import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainComponent from './MainComponent'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>
  </StrictMode>,
)
