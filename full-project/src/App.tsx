import { Button, Gav, ThickDivider, ThinDivider}  from './Components/Small-Components/Small-Components.tsx'
import MainNavbar from './Components/Navigation/Navigation.tsx'
import WeatherApp from './Components/Weather/weather.tsx'
import TimeCurrent from './Components/Time/time.tsx'
import RandomNumGenerator from './Components/Random Number/random-number.tsx'
import ButtonsSet from './Components/Buttons/buttons.tsx'
import EventOrder from './Components/Event Order/event-order.tsx'
import LoremIpsum from './Components/Lorem Ipsum/lorem-ipsum.tsx'
import './App.css'

function App() {

  return (
    <main>
      <MainNavbar />
      <div id='main-area'>
        <WeatherApp />
        <TimeCurrent />
        <RandomNumGenerator />
        <div id='test-zone' className="grid-tile-second-row">
          <h2>Test Zone</h2>
          <ThickDivider />
          <Button name="First" sec={45}/>
          <Button name='Second' />
          <p>Clicking the button will cause an alert to pop up soon</p>
          <ThinDivider />
          <Gav />
        </div>
        <ButtonsSet />
        <EventOrder />
        <div id='unknown-zone' className='grid-tile-third-row'>
          <h2>Empty for now</h2>
        </div>
        <LoremIpsum />
      </div>
    </main>
  )
}

export default App

