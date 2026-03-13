import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Hapus import App yang lama, ganti dengan ApiTest
import App from './ApiTest' 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)