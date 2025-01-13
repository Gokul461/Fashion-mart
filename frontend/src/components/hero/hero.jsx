import React from 'react'
import './hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import hero_img from '../Assets/pic.png'
const hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>New Arraivals Only</h2>
        <div>
            <div className='hero-hand-icon'>
                <p>new</p>
                <img src={hand_icon} alt="hand-icon"></img>
            </div>
            <p>Collections</p>
            <p>for everyone</p>
        </div>
        <div className='hero-latest-btn'>
            <div>Latest Arrivals</div>
            <img src={arrow} alt="arrow"></img>
        </div>
      </div>
      <div className='hero-right'>
        <img src={hero_img} alt="heroimg"></img>
        
      </div>
    </div>
  )
}

export default hero
