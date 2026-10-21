import { useState, useEffect } from 'react';
import './Navigation-Style.css'
import { ThinDivider } from '../Small-Components/Small-Components.jsx'

export default function MainNavbar () {

    const [currentTheme, setCurrentTheme] = useState('dark');
    const [isNavigationListVisible, setIsNavigationListVisible] = useState(false);
    const [isThemesListVisible, setIsThemesListVisible] = useState(false);

    useEffect (() => {
      document.documentElement.setAttribute('data-theme', currentTheme);
    }, [currentTheme])

    function handleClosePopup () {
      setIsNavigationListVisible(false);
      setIsThemesListVisible(false);
    }
    
    function handleNavigationButton () {
      setIsNavigationListVisible(!isNavigationListVisible);
    }

    function handleThemesButton () {
      setIsThemesListVisible(!isThemesListVisible);
    }

    return (
    <nav aria-label='Functions' id='main-nav'>
        <button className='nav-button' id='navigation-links-btn' onClick={handleNavigationButton}>Navigation</button>
        {isNavigationListVisible && (
          <ul aria-label='Navigation links' id='navigation-ul'>
            <button className='close-popup-btn' onClick={handleClosePopup}>&#10006;</button>
            <li className='navigation-li'>Test Link 1</li>
            <ThinDivider />
            <li className='navigation-li'>Test Link 2</li>
            <ThinDivider />
            <li className='navigation-li'>Test Link 3</li>
            <ThinDivider />
            <li className='navigation-li'>Test Link 4</li>
          </ul>
        )}
        <button className='nav-button'>Function 2</button>
        <button className='nav-button'>Function 3</button>
        <button className='nav-button' id='themes-list-btn' onClick={handleThemesButton}>Themes</button>
        {isThemesListVisible && (
          <ul aria-label='Themes select' id='themes-ul'>
            <button className='close-popup-btn' onClick={handleClosePopup}>&#10006;</button>
            <li className='theme-li' id='dark' key='dark' onClick={(e) => setCurrentTheme('dark')}>Dark</li>
            <ThinDivider />
            <li className='theme-li' id='light' key='light' onClick={(e) => setCurrentTheme('light')}>Light</li>
            <ThinDivider />
            <li className='theme-li' id='autumn' key='autumn' onClick={(e) => setCurrentTheme('autumn')}>Autumn</li>
          </ul>
        )}
    </nav>
    )
}