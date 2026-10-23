import { useState, useEffect, Fragment } from 'react';
import './Navigation-Style.css'
import { ThinDivider } from '../Small-Components/Small-Components.jsx'

export default function MainNavbar () {

    const themes = ['Dark', 'Light', 'Winter', 'Spring', 'Summer', 'Autumn'];
    const navigationLinks = ['test link 1', 'test link 2', 'test link 3', 'test link 4']
    const [currentTheme, setCurrentTheme] = useState('Dark');
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
            {navigationLinks.map((link) => {
              return (
                <Fragment key={link}>
                  <li className='navigation-li'>{link}</li>
                  <ThinDivider />
                </Fragment>
              )
            })}
          </ul>
        )}
        <button className='nav-button'>Function 2</button>
        <button className='nav-button'>Function 3</button>
        <button className='nav-button' id='themes-list-btn' onClick={handleThemesButton}>Themes</button>
        {isThemesListVisible && (
          <ul aria-label='Themes select' id='themes-ul'>
            <button className='close-popup-btn' onClick={handleClosePopup}>&#10006;</button>
            {themes.map((theme) => {
              return (
                <Fragment key={theme}>
                  <li className='theme-li' id={theme.toLowerCase()} onClick={() => {setCurrentTheme(theme)}}>{theme}</li>
                  <ThinDivider />
                </Fragment>
              )
            })}
          </ul>
        )}
    </nav>
    )
}