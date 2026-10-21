import { useState } from 'react'
import { Button, Gav, ThickDivider, ThinDivider }  from './Components/Small-Components/Small-Components.jsx'
import MainNavbar from './Components/Navigation/Navigation.jsx'
import './App.css'

function App() {
  const [btnCount, setBtnCount] = useState(0);

  function handleCountClick(){
    setBtnCount(btnCount + 1)
  }

  return (
    <>
      <MainNavbar />
      <div id='test-zone'>
        <h1>Test Zone</h1>
        <p>Set of buttons using UseState</p>
        <p>Buttons have been clicked <u>{btnCount}</u> times.</p>
        <button className='count-button' onClick={handleCountClick}>Test Button</button>
        <button className='count-button' onClick={handleCountClick}>Test Button</button>
        <ThickDivider />
        <Button name='first' />
        <Button name='second' />
        <Gav />
      </div>
    </>
  )
}

export default App

