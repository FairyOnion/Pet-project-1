import './weather-style.css'
//import { useState, useEffect } from "react";

export default function WeatherApp () {

    //const [data, setData] = useState(null);
    //const [errorMsg, setErrorMsg] = useState(null);

    return (
        <div id='weather-container' className='grid-tile-first-row'>
            <h1>Weather Forecast</h1>
            <p id='weather-city'>Empty City</p>
            <p id='weather-main-condition'>The weather will be here</p>
        </div>
    )
}