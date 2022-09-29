import { useState } from 'react'
import krisConDevLogo from './assets/kriscondev.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="http://react-kriscondev.s3-website-us-east-1.amazonaws.com/" target="_blank">
          <img src={krisConDevLogo} className="logo kriscondevlogo" alt="React kriscondevlogo" />
        </a>
      </div>     
      <h1>Welcome, humans!</h1>
     
      <ol className='tech-stack'>
        <li>PHP</li>
        <li>Laravel</li>
        <li>Node.js</li>
        <li>React</li>
        <li>REST</li>
        <li>AWS</li>
      </ol>
    </div>
  )
}

export default App
