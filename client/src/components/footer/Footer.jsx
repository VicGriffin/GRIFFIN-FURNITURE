import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
    <footer>
        <div className="footer-left">
            <h3>Contact Us</h3>
            <Link to="/Contact">Contact Us</Link>
            <a href="">feedback</a>

        </div>
        <div className="footer-middle">
            <h3>More About Us</h3>
            <a href="">company magazine</a>
            <a href="">careers</a>
            <Link to="/Store">find a store</Link>
            <a href="">how we work</a>
        </div>
        <div className="footer-right">
            <p>please subcribe to our <br /> Newsletter to get exclusive offers</p>
            <input type="text" placeholder="Enter your email" />
            <button>Subscribe</button>             
        </div>
        
    </footer>
    </>
  )
}

export default Footer