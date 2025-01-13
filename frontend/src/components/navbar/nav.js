import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom';
import Logo from '../Assets/logo.png'
import Cart_icon from '../Assets/cart_icon.png'
import { useState } from 'react'
const Nav = () => {
  const [menu,setMenu] = useState("shop");
  return(
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={Logo} alt="logo"></img>
        <p>Fashion-Mart</p>
        </div>
          <ul className='navmenu'>
          <li onClick={() => {setMenu("shop")}}><Link to='/'>Shop</Link>{menu === "shop"?<hr/>:<></>}</li>
          <li onClick={() => {setMenu("Mens")}}><Link to='/mens'>Mens</Link>{menu === "Mens"?<hr/>:<></>}</li>
          <li onClick={() => {setMenu("Womens")}}><Link to='/womens'>Womens</Link>{menu === "Womens"?<hr/>:<></>}</li>
          <li onClick={() => {setMenu("Kids")}}><Link to='/kids'>Kids</Link>{menu === "Kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
          <Link to='/login'><button onClick={()=><></>}>Login</button></Link>
          <Link to='/cart'><img src={Cart_icon} alt="cart-icon"></img></Link>
        <div className='nav-cart-count'>0</div>
        </div>
      </div>
    
  )
}

export default Nav
