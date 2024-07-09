import React, { useRef } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Hlogo from '../../assets/header-icon-img/GF-icon.png';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { CiLogin } from "react-icons/ci";
import { useAuth } from '../../authContext.jsx'; 

function Header() {
  const navRef = useRef();
  const { user, logout } = useAuth(); 

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive-nav');
  };

  const handleLogout = () => {
    logout(); 
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
          {user ? (
            <>
              <li>Welcome, {user.FirstName}</li> 
              <li><button onClick={handleLogout}>Logout</button></li> 
              <li><Link to="/Cart"><FaShoppingCart/></Link></li>
            </>
          ) : (
            <>
              <li><Link to="/Login"><CiLogin/></Link></li>
            </>
          )}
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
