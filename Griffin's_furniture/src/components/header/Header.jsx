import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import Hlogo from '../../assets/header-icon-img/GF-icon.png'
import Cart from '../../assets/header-icon-img/cart-icon.png'
import Night from '../../assets/header-icon-img/night-icon.png'
function Header() {
  return (
    <>
    <div className="header">
        <div className="header__logo">
            <img src={Hlogo} alt="LOGO" />
        </div>
        <div className="navigation">
            <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/Products">products</Link></li>
            <li><Link to="/Store">store</Link></li>
            <li><Link to="/Contact">contact us</Link></li>
            </ul>
        </div>
        <div className="header-icon">
            <a href=""><img src={Cart} alt="cart" /></a>
            <a href=""><img src={Night} alt="" /></a>
        </div>

    </div>
    </>
  )
}

export default Header