import React from 'react'
import s from "./Portolio.sass"
export const Portfolio = () => {
    return (
      <section className={s.select}>
            <h2>Portfolio</h2>
            <div className={s.container}>
    <h2>Portfolio</h2>
    <img className={s.main_portfolio_levi} src={"./PorfolioImg/Слой_8.jpg"} alt="Portfolio"/>
    <a href="https://www.levi.com/US/en_US/"><p>Online fashion store - Homepage</p></a>
    <img className={s.main_portfolio_pos} src={"./PorfolioImg/reebok_web.png"} alt="Reebok"/>
    <a href="https://www.reebok.com/us"><p>Reebok Store - Concept</p></a>
    <img className={s.main_portfolio_pos} src={"./PorfolioImg/reebok_web.jpg"} alt="Braun"/>
    <a href="https://www.braunhousehold.com/en"><p>Braun Landing Page - Concept</p></a>
  </div>
    </section>
  )
}
