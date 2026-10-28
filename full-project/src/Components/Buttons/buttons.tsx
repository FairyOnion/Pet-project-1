import "./buttons.css"
import {useState} from 'react';

export default function ButtonsSet () {

    const [btnCount, setBtnCount] = useState(0);
    const [redCount, setRedCount] = useState(0);
    const [greenCount, setGreenCount] = useState(0);
    const [blueCount, setBlueCount] = useState(0);
    const [purpleCount, setPurpleCount] = useState(0);

     function handleRedClick(){
        setBtnCount(btnCount + 1);
        setRedCount(redCount + 1)
    }

    function handleGreenClick(){
        setBtnCount(btnCount + 1);
        setGreenCount(greenCount + 1)
    }

    function handleBlueClick(){
        setBtnCount(btnCount + 1);
        setBlueCount(blueCount + 1)
    }

     function handlePurpleClick(){
        setBtnCount(btnCount + 1);
        setPurpleCount(purpleCount + 1)
    }

    return (
        <div id='buttons-zone'>
          <h2>Buttons Zone</h2>
          <p>Set of buttons using UseState</p>
          <p>Buttons have been clicked <u>{btnCount}</u> times.</p>
          <div id='count-buttons-flex-container'>
            <div id='count-buttons-container'>
              <button id='red-btn' className='count-button' onClick={handleRedClick}>Test Button</button>
              <button id='green-btn' className='count-button' onClick={handleGreenClick}>Test Button</button>
              <button id='blue-btn' className='count-button' onClick={handleBlueClick}>Test Button</button>
              <button id='purple-btn' className='count-button' onClick={handlePurpleClick}>Test Button</button>
            </div>
            <div id='count-description-container'>
              <p className='count-description'>Red Button: <u>{redCount}</u></p>
              <p className='count-description'>Green Button: <u>{greenCount}</u></p>
              <p className='count-description'>Blue Button: <u>{blueCount}</u></p>
              <p className='count-description'>Purple Button: <u>{purpleCount}</u></p>
            </div>
          </div>
        </div>
    )
}