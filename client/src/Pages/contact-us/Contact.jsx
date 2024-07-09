import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { IoMdMail } from "react-icons/io";
import { FaPhoneVolume, FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RiNewsLine } from "react-icons/ri";
import './contact.css';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:3001/users/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Message sent successfully");
      } else {
        setError(data.error || 'Failed to send message');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="cont">
      <div className="cont-form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
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
            <p>Connect with us:</p>
            <div className="btn-icon-section">
              <button className='social-icon'><a href="https://www.facebook.com/victor.kamau.188/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></button>
              <button className='social-icon'><a href="https://x.com/victorkama83492" target='_blank' rel="noopener noreferrer"><FaXTwitter /></a></button>
              <button className='social-icon'><a href="https://www.instagram.com/vic_griffin254/" target='_blank' rel="noopener noreferrer"><FaInstagram /></a></button>
              <button className='social-icon'><a href="https://www.linkedin.com/in/victor-kamau-30b23720b/" target='_blank' rel="noopener noreferrer"><FaLinkedin /></a></button>
              <button className='social-icon'>
                <a href="https://www.flipsnack.com/CA78AADD75E/griffins-furniture-magazine/full-view.html" target='_blank' rel="noopener noreferrer"><RiNewsLine/></a>
              </button>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <span className='circle one'></span>
          <span className='circle two'></span>
          <form onSubmit={formik.handleSubmit}>
            <h3 className="titl">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className='input' onChange={formik.handleChange} value={formik.values.name} />
              <label htmlFor="name">Your Name</label>
              {formik.touched.name && formik.errors.name && <p>{formik.errors.name}</p>}
            </div>
            <div className="input-container">
              <input type="email" name="email" className='input' onChange={formik.handleChange} value={formik.values.email} />
              <label htmlFor="email">Your Email</label>
              {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}
            </div>
            <div className="input-container">
              <input type="phone" name="phone" className='input' onChange={formik.handleChange} value={formik.values.phone} />
              <label htmlFor="phone">Your Phone</label>
              {formik.touched.phone && formik.errors.phone && <p>{formik.errors.phone}</p>}
            </div>
            <div className="input-container text-area">
              <textarea name="message" className='input' onChange={formik.handleChange} value={formik.values.message}></textarea>
              <label htmlFor="message">Message</label>
              {formik.touched.message && formik.errors.message && <p>{formik.errors.message}</p>}
            </div>
            <button type="submit" className="btn" disabled={loading}>
              {loading ? 'Loading...' : 'Send'}
            </button>
            {error && (
              <div className="error">
                <p>{error}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
