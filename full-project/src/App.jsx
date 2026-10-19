import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { Button, Nav }  from './Components.jsx'
import './App.css'


function App() {
  const [btnCount, setBtnCount] = useState(0);

  function handleClick(){
    setBtnCount(btnCount + 1)
  }

  return (
    <>
      <nav aria-label='Functions'>
        <button className='nav-button'>Function 1</button>
        <ul aria-label='Navigation links'>
          <li>A 1</li>
          <li>A 2</li>
          <li>A 3</li>
          <li>A 4</li>
        </ul>
        <button className='nav-button'>Function 2</button>
        <button className='nav-button'>Function 3</button>
        <button className='nav-button'>Function 4</button>
      </nav>
      <div id='test-zone'>
        <h1>Test Zone</h1>
        <p>Set of buttons using UseState</p>
        <p>Buttons have been clicked {btnCount} times.</p>
        <button className='test-button' onClick={handleClick}>Test Button</button>
        <button className='test-button' onClick={handleClick}>Test Button</button>
        <Button name='first' />
        <Button name='second' />
      </div>
    </>
  )
}

export default App
