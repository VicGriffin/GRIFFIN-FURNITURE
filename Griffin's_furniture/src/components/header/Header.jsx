import React, { useRef } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Hlogo from '../../assets/header-icon-img/GF-icon.png';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { MdDarkMode } from "react-icons/md";

function Header() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive-nav');
  };

  return (
    <div className="header">
      <div className="header__logo">
        <img src={Hlogo} alt="GRIFFINS Logo" />
      </div>
      <nav ref={navRef}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Products">Products</Link></li>
          <li><Link to="/Store">Store</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
          <button onClick={showNavbar} className='nav-btn nav-close-btn'>
            <FaTimes />
          </button>
        </ul>
      </nav>
      <button onClick={showNavbar} className='nav-btn'>
        <FaBars />
      </button>
      <div className="header-icon">
        <button className='shift-button'>
          <FaShoppingCart />
        </button>
        <button className='shift-button'>
          <MdDarkMode />
        </button>
      </div>
    </div>
  );
}

export default Header;
