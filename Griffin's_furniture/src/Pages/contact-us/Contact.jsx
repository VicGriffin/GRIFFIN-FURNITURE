import React from 'react'
import './contact.css'
import { IoMdMail } from "react-icons/io";
import { FaPhoneVolume, FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <>
      <div className="cont">
        <div className="cont-form">
          <div className="contact-info">
            <h3 className="title">let's get in touch</h3>
            <p className="text">
              Reach out to us for any inquiries about our furniture collections. We're here to help you find your perfect piece.
            </p>
            <div className="info-cont">
              <button className='icon-con'><IoMdMail /></button>
              <p>Nairobi, Kenya</p>
            </div>
            <div className="info-cont">
              <button className='icon-con'><FaLocationDot /></button>
              <p>griffinfurniture@gmail.com</p>
            </div>
            <div className="info-cont">
              <button className='icon-con'><FaPhoneVolume /></button>
              <p>+25411278791</p>
            </div>
            <div className="social-media">
              <p>connect with us:</p>
              <div className="btn-icon-section">
                <button className='social-icon'><FaFacebook /></button>
                <button className='social-icon'><FaXTwitter /></button>
                <button className='social-icon'><FaInstagram /></button>
                <button className='social-icon'><FaLinkedin /></button>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <span className='circle one'></span>
            <span className='circle two'></span>
            <form action="">
              <h3 className="titl">Contact us</h3>
              <div className="input-container">
                <input type="text" name="name" className='input' placeholder=' ' />
                <label htmlFor="name">Your Name</label>
              </div>
              <div className="input-container">
                <input type="email" name="email" className='input' placeholder=' ' />
                <label htmlFor="email">Your Email</label>
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className='input' placeholder=' ' />
                <label htmlFor="phone">Your Phone</label>
              </div>
              <div className="input-container text-area">
                <textarea name="message" className='input' placeholder=' ' ></textarea>
                <label htmlFor="message">Message</label>
              </div>
              <button type="submit" className="btn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
