import React, { useState } from 'react';
import './contact.css';
import { IoMdMail } from "react-icons/io";
import { FaPhoneVolume, FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RiNewsLine } from "react-icons/ri";
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Contact() {
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string("this field should contain string characters only")
      .required("this field is required"),
    email: Yup.string()
      .email("invalid email format")
      .required("This field is required"),
    phone: Yup.number("invalid phone format")
      .required("This field is required")
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    },
    onSubmit: async (formSubmission) => {
      setLoading(true);
      console.log("here is what the user has submitted");
      console.log(formSubmission);
      // Simulate an API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    },
    validationSchema: validationSchema
  });

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
                <button className='social-icon'><a href="https://www.facebook.com/victor.kamau.188/" target="_blank" ><FaFacebook /></a></button>
                <button className='social-icon'><a href="https://x.com/victorkama83492" target='_blank'><FaXTwitter /></a></button>
                <button className='social-icon'><a href="https://www.instagram.com/vic_griffin254/" target='_blank'><FaInstagram /></a></button>
                <button className='social-icon'><a href="https://www.linkedin.com/in/victor-kamau-30b23720b/" target='_blank'><FaLinkedin /></a></button>
                <button className='social-icon'>
                <a href="https://www.flipsnack.com/CA78AADD75E/griffins-furniture-magazine/full-view.html" target='_blank'><RiNewsLine/></a></button>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <span className='circle one'></span>
            <span className='circle two'></span>
            <form onSubmit={formik.handleSubmit}>
              <h3 className="titl">Contact us</h3>
              <div className="input-container">
                <input type="text" name="name" className='input' onChange={formik.handleChange} value={formik.values.name}  />
                <label htmlFor="name">Your Name</label>
                {formik.touched.name && formik.errors.name && <p>{formik.errors.name}</p>}
              </div>
              <div className="input-container">
                <input type="email" name="email" className='input' onChange={formik.handleChange} value={formik.values.email}  />
                <label htmlFor="email">Your Email</label>
                {formik.errors.email && <p>{formik.errors.email}</p>}
              </div>
              <div className="input-container">
                <input type="phone" name="phone" className='input' onChange={formik.handleChange} value={formik.values.phone}  />
                <label htmlFor="phone">Your Phone</label>
                {formik.errors.phone && <p>{formik.errors.phone}</p>}
              </div>
              <div className="input-container text-area">
                <textarea name="message" className='input' onChange={formik.handleChange} value={formik.values.message} ></textarea>
                <label htmlFor="message">Message</label>
              </div>
              <button type="submit" className="btn" disabled={loading}>
                {loading ? <i className='fa fa-refresh fa-spin'></i> : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
