import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0);
  function Button() {
      function handleClick () {
        setCount(count + 1);
      }

    return ( 
    <button className='nav-button' onClick={handleClick}>Test Button</button>
    )
  }

  return (
    <>
      <div id='test-zone'>
        <p>The first P element</p>
        <p>Button have been clicked {count} times.</p>
        < Button/>
      </div>
    </>
  )
}

export default App
