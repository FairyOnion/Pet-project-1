import { useState, useEffect, Fragment } from 'react';
import './Navigation-Style.css'
import { ThinDivider } from '../Small-Components/Small-Components.tsx'

interface NavigationLink {
  name: string,
  link: string
}

export default function MainNavbar () {

    const themes: string[] = ['Dark', 'Light', 'Winter', 'Spring', 'Summer', 'Autumn'];
    const navigationLinks: NavigationLink[] = [
      {name: 'Home', link: '#weather-container'},
      {name: 'Second Row', link: '#test-zone'},
      {name: 'Third Row', link: '#event-zone'},
      {name: 'Fourth Row', link: '#lorem-zone'}
    ]
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
      setIsThemesListVisible(false);
    }

    function handleThemesButton () {
      setIsThemesListVisible(!isThemesListVisible);
      setIsNavigationListVisible(false);
    }

    return (
    <nav aria-label='Functions' id='main-nav'>
        <button className='nav-button' id='navigation-links-btn' onClick={handleNavigationButton}>Navigation</button>
        {isNavigationListVisible && (
          <ul aria-label='Navigation links' id='navigation-ul'>
            <button className='close-popup-btn' onClick={handleClosePopup}>&#10006;</button>
            {navigationLinks.map((el) => {
              return (
                <Fragment key={el.name}>
                  <li className='navigation-li'><a href={el.link}>{el.name}</a></li>
                  <ThinDivider />
                </Fragment>
              )
            })}
          </ul>
        )}
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
        <button className='nav-button'>Function 3</button>
        <button className='nav-button'>Function 4</button>
    </nav>
    )
}