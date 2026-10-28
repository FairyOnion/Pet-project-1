import './weather-style.css'
//import { useState, useEffect } from "react";

export default function WeatherApp () {

    //const [data, setData] = useState(null);
    //const [errorMsg, setErrorMsg] = useState(null);

    return (
        <div id='weather-container'>
            <h1>Weather Forecast</h1>
            <h3 id='weather-city'>Empty City</h3>
            <h3 id='weather-main-condition'>The weather will be here</h3>
        </div>
    )
}