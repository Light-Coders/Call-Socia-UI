import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <navbar> 
      <div style={{display : 'inline-block'}}>Hello 1</div>
      <div style={{display : 'inline-block'}}>Hello 2</div>
      <div style={{display : 'inline-block'}}>Hello 3</div>
      <div style={{display : 'inline-block'}}>Hello 4</div>
      <div style={{display : 'inline-block'}}>Hello 5</div>
      <div style={{display : 'inline-block'}}>Hello 5</div>
      <div style={{display : 'inline-block'}}>Hello 5</div>
      <div style={{display : 'inline-block'}}>Hello 5</div>
      <div style={{display : 'inline-block'}}>Hello 5</div>

    </navbar>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
