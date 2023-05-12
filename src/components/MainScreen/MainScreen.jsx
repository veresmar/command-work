import React from 'react'
import s from './MainScreen.module.css'
import burger from './assets/burger.svg'

export const MainScreen = () => {
  return (
    <div className={s.topContent}>
        <div className={s.maininfo}>
            <h1 id="home">Denis<br/>Novik</h1>
            <p>UX | UI designer 24 years old, Minsk</p>
        </div>
        <button className={s.burger}>
            <img src={burger} alt="burger-btn"/>
        </button>
    </div>
  )
}
