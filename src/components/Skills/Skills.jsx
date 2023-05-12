import React from 'react'
import style from './Skills.module.scss'
import Skillsicon from '../Skillsicon/Skillsicon'
import iconAe from './src/ae.png';
import iconPs from './src/ps.png';
import iconFigma from './src/figma.png'
import iconAi from './src/ai.png'

export const Skills = () => {
  return (
    <section id="skills" className={style.skills}>
      <h2>Skills</h2>
      <p>I work in such programs as</p>
      <div className={style.icons}>
      <Skillsicon
        src={iconPs}
        altText='Adobe Photoshop icon'
        figcaption='Adobe Photoshop'
        stars="★★★★☆"
      />
      <Skillsicon
        src={iconAi}
        altText='Adobe Illustrator icon'
        figcaption='Adobe Illustrator'
        stars="★★★☆☆"
      />
      <Skillsicon
        src={iconAe}
        altText='Adobe After Effects icon'
        figcaption='Adobe After Effects'
        stars="★★★☆☆"
      />
      <Skillsicon
        src={iconFigma}
        altText='Figma icon'
        figcaption='Figma'
        stars="★★★★☆"
      />
      </div>
    </section>
  )
}
