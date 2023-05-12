import React from 'react'
import { MainScreen } from '../MainScreen/MainScreen'
import s from './Header.module.css'
import mainImg from './assets/main.jpg'
import close from './assets/close.svg'

export const Header = () => {
  return (
    
    <header>
        <nav className={s.navigation}>
            <ul>
                <li><a href="#home" className="active">Home</a></li>
                <button className={s.close}>
                    <img src={close} alt="close-icon"/>
                </button>
                <li><a href="#aboutMe">About me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contacts">Contacts</a></li>
            </ul>
            <hr/>
        </nav>
        <MainScreen/>
        <img className={s.mainphoto} src={mainImg} alt="Мое фото"/>
    </header>
  )
}
