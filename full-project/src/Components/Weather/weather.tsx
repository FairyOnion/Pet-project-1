import './weather-style.css'
import { useState, useEffect } from "react";

export default function WeatherApp () {

    //const userCity = null;
    const [weather, setWeather] = useState<Record<string, any> | null>(null);
    const [err, setErr] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect (() => {
        async function fetchWeather() {
            try {
                const res = await fetch('https://api.weatherapi.com/v1/current.json?key=288872c36c404365b0084021262610&q=moscow');
                const data = await res.json();
                setWeather(data);
            } catch (error) {
                console.error('There was a problem fetching weather: ' + error);
                setErr('There was an error fetching the weather')
            } finally {
                setIsLoading(false);
            }
        }

        fetchWeather();
    }, [])

    return (
        <div id='weather-container' className='grid-tile-first-row'>
            <h1>Weather Forecast</h1>
            {isLoading && (
                <h3>Loading Weather...</h3>
            )}
            {err && (
                <h3>{err}</h3>
            )}
            {weather && (
                <div id='weather-result-container'>
                    <h3>{weather.location.name}</h3>
                    <p>{weather.current.condition.text}</p>
                    <img src={weather.current.condition.icon} id='weather-image' alt='weather-condition-image'/>
                    <div id='t-h-container'>
                        <div className='weather-num-container'>
                            <p>Temperature:</p>
                            <p>{weather.current.temp_c} &deg;C</p>
                        </div>
                        <div className='weather-num-container'>
                            <p>Humidity:</p>
                            <p>{weather.current.humidity}%</p>
                        </div>
                        <div className='weather-num-container'>
                            <p>Wind Speed:</p>
                            <p>{weather.current.wind_kph} km/h</p>
                        </div>
                    </div>
                </div>
            )} 
        </div>
    )
}