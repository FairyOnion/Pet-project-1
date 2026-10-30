import './time-styles.css'
import {useState, useEffect} from 'react'

export default function TimeCurrent() {

    const [time, setTime] = useState(new Date());
    const [hours, setHours] = useState(new Date().getHours());
    const [minutes, setMinutes] = useState(new Date().getMinutes());
    const [weekday, setWeekday] = useState(new Date().toLocaleString([], {weekday: 'long'}));
    const [year, setYear] = useState(new Date().toLocaleString([], {year: 'numeric'}));
    const [month, setMonth] = useState(new Date().toLocaleString([], {month: 'long'}));
    const [day, setDay] = useState(new Date().toLocaleString([], {day: '2-digit'}));

    function formatTime (date: Date) {
        setHours(date.getHours());
        setMinutes(date.getMinutes());
        setWeekday(date.toLocaleString([], {weekday:'long'}));
        setYear(date.toLocaleString([], {year: 'numeric'}));
        setMonth(date.toLocaleString([], {month: 'long'}));
        setDay(date.toLocaleString([], {day: '2-digit'}));

        return time
    }

    useEffect (() => {
        const now = new Date();
        const delay = 60000 - (now.getSeconds() * 1000 + now.getMilliseconds());

        let intervalId : ReturnType<typeof setInterval>;
        const timeoutId = setTimeout(() => {
            setTime(formatTime(new Date()))
            intervalId = setInterval(() => {
                setTime(formatTime(new Date()));
            }, 60000);
        }, delay)

        return () => {
            clearTimeout(timeoutId);
            clearInterval(intervalId);
        }
    },[])

    return (
        <div id='time-zone' className='grid-tile-first-row'>
          <h2 id='time-zone-header'>Time zone</h2>
          <h3 id='local-time-header'>Local time:</h3>
          <div id='clock-container'>
            <span className='time-span'>{hours < 10 ? '0' : ''}{hours}</span>
            <span className='time-span'> : </span>
            <span className='time-span'>{minutes < 10 ? '0' : ''}{minutes}</span>
          </div>
          <p style={{fontSize: '2rem'}}>{weekday}</p>
          <p style={{fontSize: '1.75rem'}}>{day} / {month} / {year}</p>
        </div>
    )
}