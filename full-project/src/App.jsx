import { useState, useEffect } from 'react'
import { Button, Gav, ThickDivider, ThinDivider }  from './Components/Small-Components/Small-Components.jsx'
import MainNavbar from './Components/Navigation/Navigation.jsx'
import ButtonsSet from './Components/Buttons/buttons.jsx'
import WeatherApp from './Components/Weather/weather.jsx'
import LoremIpsum from './Components/Lorem Ipsum/lorem-ipsum.jsx'
import './App.css'

function App() {

  return (
    <main>
      <MainNavbar />
      <div id='main-area'>
        <div id='test-zone'>
          <h2>Test Zone</h2>
          <ThickDivider />
          <Button name='first' />
          <Button name='second' />
          <Gav />
        </div>
        <ButtonsSet />
        <WeatherApp />
        <LoremIpsum />
        <div id='zone3'>
          <h2>Zone 3</h2>
        </div>
      </div>
    </main>
  )
}

export default App

