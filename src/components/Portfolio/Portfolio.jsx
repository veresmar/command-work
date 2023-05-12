import React from 'react'
import s from "./Portolio.module.sass"
import Woman from "./PorfolioImg/Слой_8.jpg"
import Levi from "./PorfolioImg/reebok_web.png"
import Camera from "./PorfolioImg/reebok_web.jpg"
export const Portfolio = () => {
    return (
      <section className={s.select}>
           <div className={s.container}>
    <h2>Portfolio</h2>
    <img className={s.main_portfolio_levi} src={Woman} alt="Portfolio"/>
    <a href="https://www.levi.com/US/en_US/"><p>Online fashion store - Homepage</p></a>
    <img className={s.main_portfolio_pos} src={Levi} alt="Reebok"/>
    <a href="https://www.reebok.com/us"><p>Reebok Store - Concept</p></a>
    <img className={s.main_portfolio_pos} src={Camera} alt="Braun"/>
    <a href="https://www.braunhousehold.com/en"><p>Braun Landing Page - Concept</p></a>
  </div>
    </section>
  )
}
