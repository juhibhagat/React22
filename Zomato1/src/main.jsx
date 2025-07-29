import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Header from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
  </StrictMode>,
)
