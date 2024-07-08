import React, { useRef } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Hlogo from '../../assets/header-icon-img/GF-icon.png';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { CiLogin } from "react-icons/ci";

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
          <li><Link to="/Login"><CiLogin/></Link></li>
          <li><Link to="/cart"><FaShoppingCart/></Link></li>
          <button onClick={showNavbar} className='nav-btn nav-close-btn'>
            <FaTimes />
          </button>
        </ul>
      </nav>
      <button onClick={showNavbar} className='nav-btn'>
        <FaBars />
      </button>
    </div>
  );
}

export default Header;
