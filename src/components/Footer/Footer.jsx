import React from 'react'
import s from "./Footer.module.sass"
import In from "./FooterImg/Group2.png"
import Inst from "./FooterImg/inst.png"
import Be from "./FooterImg/Group9.png"
import Ball from "./FooterImg/Vector.png"
export const Footer = () => {
  return (
      <footer className="container" id="contacts">
          <div className={s.footer_pad}>
    <div className={s.footer_info}>
      <h2>Contacts</h2>
      <p>Want to know more or just chat?<br/>
        You are welcome!</p>
    <button>Send message</button>
    <div className={s.cotacts_icons}>
      <a href="https://ge.linkedin.com/"><img src={In} alt="Linkedin" /> </a>
      <a href="https://www.instagram.com/"><img src={Inst} alt="Instagram"/></a>
      <a href="https://www.behance.net/"><img src={Be} alt="Behance"/></a>
      <a href="https://dribbble.com/"><img src={Ball} alt="Dribbble"/> </a>
    </div>
  </div>
  <p className={s.footer_info_p}>Like me on<br/>
    LinkedIn, Instagram, Behance, Dribble</p>
  </div>
 </footer>
  )
}
