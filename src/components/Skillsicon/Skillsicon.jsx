import React from 'react'
import style from './Skillsicon.module.scss'

function Skillsicon(props) {
  return (
    <div className={style.Skillsicon}>
      <figure>
        <img src={props.src} alt={props.altText} />
        <figcaption>{props.figcaption}</figcaption>
        {props.stars}
      </figure>
    </div>
  );
}

export default Skillsicon;
