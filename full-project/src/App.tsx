//import { useState, useEffect } from 'react'
import { Button, Gav, ThickDivider, ThinDivider}  from './Components/Small-Components/Small-Components.tsx'
import MainNavbar from './Components/Navigation/Navigation.tsx'
import ButtonsSet from './Components/Buttons/buttons.tsx'
import WeatherApp from './Components/Weather/weather.tsx'
import LoremIpsum from './Components/Lorem Ipsum/lorem-ipsum.tsx'
import EventOrder from './Components/Event Order/event-order.tsx'
import './App.css'

function App() {

  return (
    <main>
      <MainNavbar />
      <div id='main-area'>
        <div id='test-zone'>
          <h2>Test Zone</h2>
          <ThickDivider />
          <Button name="First" sec={45}/>
          <Button name='Second' />
          <p>Clicking the button will cause an alert to pop up soon</p>
          <ThinDivider />
          <Gav />
        </div>
        <ButtonsSet />
        <WeatherApp />
        <LoremIpsum />
        <EventOrder />
      </div>
    </main>
  )
}

export default App

