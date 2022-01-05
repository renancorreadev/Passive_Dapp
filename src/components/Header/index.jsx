import style from './styles.module.scss'
import logo from '../../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export function Header() {

  const [isMenuVisible, setMenuVisible] = useState(false)

  function toggleMenuVisibility(event){
    event.preventDefault()
    setMenuVisible(!isMenuVisible)
  }

  return (
    <div className={style['custom-navbar']}>
        <nav>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>

          <ul>
            <span className={isMenuVisible ? style.visible : "hidden"}>
              <a href="./" onClick={() => setMenuVisible()}>
                Home
              </a>
              <a href="#cardsSection" onClick={() => setMenuVisible(false)}>
                Features
              </a>
              <a href="#roadmapSection" onClick={() => setMenuVisible(false)}>
                Road Map
              </a>
              <a href="#howToBuySection" onClick={() => setMenuVisible(false)}>
                How to Buy
              </a>
              <a href="./whitePaper" onClick={() => setMenuVisible(false)}>
                White Paper
              </a>
              <a href="/vesting" onClick={() => setMenuVisible(false)}>
                Vesting
              </a>

              {
                isMenuVisible &&
                <FontAwesomeIcon 
                icon={faTimes} 
                className={style.close}
                onClick={toggleMenuVisibility}
                />
              }
            </span>

            <a 
            href="/"
            onClick={toggleMenuVisibility}
            >
              <FontAwesomeIcon 
              icon={faBars} 
              className={style.hamburguer}
              />
            </a>
          </ul>
        </nav>
    </div>
  )
}
