import { useState, useEffect, useLayoutEffect, Fragment } from 'react';
import './Navigation-Style.css'
import { ThinDivider } from '../Small-Components/Small-Components.tsx'

interface NavigationLink {
  name: string,
  link: string
}

export default function MainNavbar () {

    const themes: string[] = ['Dark', 'Light', 'Winter', 'Spring', 'Summer', 'Autumn'];
    const [navigationLinks, setNavigationLinks] = useState<NavigationLink[]>([
      {name: 'Home', link: '#weather-container'},
      {name: 'Second Row', link: '#test-zone'},
      {name: 'Third Row', link: '#event-zone'},
      {name: 'Fourth Row', link: '#lorem-zone'}
    ])

    useLayoutEffect(() => {
      if (window.innerWidth < 768) {
        setNavigationLinks([
      {name: 'Home', link: '#weather-container'},
      {name: 'Time', link: '#time-zone'},
      {name: 'Random Number', link: '#random-num-zone'},
      {name: 'Test Zone', link: '#test-zone'},
      {name: 'Buttons', link: '#buttons-zone'},
      {name: 'Events', link: '#event-zone'},
      {name: 'In Development.1', link: '#unknown-zone'},
      {name: 'Lorem Ipsum', link: '#lorem-zone'},
    ])
      } else {
        setNavigationLinks([
      {name: 'Home', link: '#weather-container'},
      {name: 'Second Row', link: '#test-zone'},
      {name: 'Third Row', link: '#event-zone'},
      {name: 'Fourth Row', link: '#lorem-zone'}
    ])
      }
    },[])

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

    function handleLinkClick () {
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
                  <li className='navigation-li'><a onClick={handleLinkClick} href={el.link}>{el.name}</a></li>
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
                  <li className='theme-li' id={theme.toLowerCase()} onClick={() => {setCurrentTheme(theme); setIsThemesListVisible(false)}}>{theme}</li>
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