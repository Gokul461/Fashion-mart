import React from 'react'
import './footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram from '../Assets/instagram_icon.png'
import whats from '../Assets/whatsapp_icon.png'
import pinterest from '../Assets/pintester_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt='foot_logo'></img>
        <p>FASHION-MART</p>

     </div>
     <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
     </ul>
     <div className="footer-social-media">
        <div className="footer-items-conatiner">
            <img src={instagram} alt='insta_icon'></img>
        </div>
        <div className="footer-items-conatiner">
            <img src={pinterest} alt='pin_incon'></img>
        </div>
        <div className="footer-items-conatiner">
            <img src={whats} alt='whatsapp_icon'></img>
        </div>
     </div>
     <div className='footer-copyright'>
        <hr/>
        <p>Copyright @ 2024 - All Rights Reserved</p>
     </div>
    </div>
  )
}

export default Footer
