import {useState} from 'react';
import './Navigation-Style.css'

export default function MainNavbar () {

    const va = 1

    function handleClosePopup () {
      console.log('The popup should be closed')
    }

    return (
    <nav aria-label='Functions' id='main-nav'>
        <button className='nav-button' id='navigation-links-btn'>Function 1</button>
        <ul aria-label='Navigation links' id='navigation-ul'>
          <button className='close-popup-btn' onClick={handleClosePopup}>&#10006;</button>
          <li className='navigation-li'>Test Link 1</li>
          <li className='navigation-li'>Test Link 2</li>
          <li className='navigation-li'>Test Link 3</li>
          <li className='navigation-li'>Test Link 4</li>
        </ul>
        <button className='nav-button'>Function 2</button>
        <button className='nav-button'>Function 3</button>
        <button className='nav-button'>Function 4</button>
        <ul aria-label='Theme switching list' id='themes-ul' hidden>
          <li>Theme 1</li>
          <li>Theme 1</li>
          <li>Theme 1</li>
          <li>Theme 1</li>
        </ul>
    </nav>
    )
}