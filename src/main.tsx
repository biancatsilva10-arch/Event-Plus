import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import "@fontsource/poppins/latin400.css"
import "@fontsource/poppins/latin500.css"
import "@fontsource/poppins/latin600.css"
import "@fontsource/poppins/latin700.css"


import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
