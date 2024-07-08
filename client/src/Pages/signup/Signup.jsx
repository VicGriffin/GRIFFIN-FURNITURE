import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const validationSchema = Yup.object({
    FirstName: Yup.string().required('Required'),
    SecondName: Yup.string().required('Required'),
    Email: Yup.string().email('Invalid email format').required('Required'),
    PhoneNumber: Yup.string()
      .matches(/^[0-9]+$/, 'Phone number must be digits')
      .min(10, 'Phone number must be at least 10 digits')
      .required('Required'),
    Password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('Password'), null], 'Passwords must match')
      .required('Required'),
  })

  const handleSubmit = async (values) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:3001/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (data.message === "signup success") {
        alert("Signed up successfully");
        navigate('/Login');
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      FirstName: '',
      SecondName: '',
      Email: '',
      PhoneNumber: '',
      Password: '',
      confirmPassword: '',
    },
    
    validationSchema :validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <section className="sign-up">
      <div className="signup-container">
        <h2>Signup</h2>
        <form className="signup-form" onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="FirstName"
              value={formik.values.FirstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="First Name"
              className="signup-input"
            />
            {formik.touched.FirstName && formik.errors.FirstName && (
              <p className="error">{formik.errors.FirstName}</p>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="SecondName"
              value={formik.values.SecondName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Second Name"
              className="signup-input"
            />
            {formik.touched.SecondName && formik.errors.SecondName && (
              <p className="error">{formik.errors.SecondName}</p>
            )}
          </div>
          <div className="form-group">
            <input
              type="email"
              name="Email"
              value={formik.values.Email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Email"
              className="signup-input"
            />
            {formik.touched.Email && formik.errors.Email && (
              <p className="error">{formik.errors.Email}</p>
            )}
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="PhoneNumber"
              value={formik.values.PhoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Phone Number"
              className="signup-input"
            />
            {formik.touched.PhoneNumber && formik.errors.PhoneNumber && (
              <p className="error">{formik.errors.PhoneNumber}</p>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              name="Password"
              value={formik.values.Password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Password"
              className="signup-input"
            />
            {formik.touched.Password && formik.errors.Password && (
              <p className="error">{formik.errors.Password}</p>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Confirm Password"
              className="signup-input"
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <p className="error">{formik.errors.confirmPassword}</p>
            )}
          </div>
          <button type="submit" className="signup-button" disabled={loading}>
            {loading ? 'Loading...' : 'Create Account'}
          </button>
          {error && (
            <div className="error">
              <p>{error}</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Signup;
