import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ApiTest from './ApiTest' // <--- Import komponen API kamu

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        {/* Ini komponen ApiTest kamu */}
        <div style={{ padding: '20px', border: '1px solid #ccc' }}>
            <ApiTest />
        </div>

        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        
        {/* ... sisa kode lainnya biarkan saja ... */}
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
      
      {/* ... sisa kode lainnya (documentation, social, dll) ... */}
    </>
  )
}

export default App