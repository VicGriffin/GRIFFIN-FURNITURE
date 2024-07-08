import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (values) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:3001/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        navigate('/Login');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Registration failed');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const initialValues = {
    firstname: '',
    secondname: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required('Required'),
    secondname: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    phone: Yup.string()
      .matches(/^[0-9]+$/, 'Phone number must be digits')
      .min(10, 'Phone number must be at least 10 digits')
      .required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  return (
    <section className="sign-up">
      <div className="signup-container">
        <h2>Signup</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="signup-form">
              <div className="form-group">
                <Field
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  className="signup-input"
                />
                <ErrorMessage name="firstname" component="div" className="error" />
              </div>
              <div className="form-group">
                <Field
                  type="text"
                  name="secondname"
                  placeholder="Second Name"
                  className="signup-input"
                />
                <ErrorMessage name="secondname" component="div" className="error" />
              </div>
              <div className="form-group">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="signup-input"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div className="form-group">
                <Field
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="signup-input"
                />
                <ErrorMessage name="phone" component="div" className="error" />
              </div>
              <div className="form-group">
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="signup-input"
                />
                <ErrorMessage name="password" component="div" className="error" />
              </div>
              <div className="form-group">
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="signup-input"
                />
                <ErrorMessage name="confirmPassword" component="div" className="error" />
              </div>
              <button type="submit" className="signup-button" disabled={loading}>
                {loading ? 'Loading...' : 'Create Account'}
              </button>
              {error && <div className="error">
                <p>failed to sign in</p></div>}
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Signup;
