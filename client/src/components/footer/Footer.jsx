import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const validationSchema = Yup.object({
    Email: Yup.string().email('Invalid email format').required('Required'),
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:3001/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (data.success) {
        alert("Email sent successfully");
      } else {
        setError(data.message || 'Submission failed');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      Email: '',
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <footer>
        <div className="footer-left">
          <h3>Contact Us</h3>
          <Link to="/Contact">Contact Us</Link>
        </div>
        <div className="footer-middle">
          <h3>More About Us</h3>
          <a href="https://www.flipsnack.com/CA78AADD75E/griffins-furniture-magazine/full-view.html" target='_blank' rel="noopener noreferrer">Company Magazine</a>
          <Link to="/Careers">Careers</Link>
          <Link to="/Store">Find a Store</Link>
        </div>
        <div className="footer-right">
          <p>Please subscribe to our <br /> Newsletter to get exclusive offers</p>
          <form onSubmit={formik.handleSubmit}>
            <input
              type="text"
              name="Email"
              value={formik.values.Email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your email"
            />
            {formik.touched.Email && formik.errors.Email ? (
              <div className="error">{formik.errors.Email}</div>
            ) : null}
            <button type="submit" disabled={loading}>
              {loading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          {error && <div className="error">{error}</div>}
        </div>
      </footer>
    </>
  );
}

export default Footer;
