import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import { RecepiProvider } from '../context/RecepiContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <RecepiProvider>
    <App />
    </RecepiProvider>
  </BrowserRouter>,
)
