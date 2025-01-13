import React from 'react'
import './news.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div className='letter'>
        <input type="email" placeholder='Email id'></input>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
