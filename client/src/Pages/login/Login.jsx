import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleSubmit = async (values) => {
    setError('');
    try {
      const response = await fetch('http://localhost:3001/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        navigate('/');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className='log-in'>
      <div className="login-container">
        <h2>Login</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="login-form">
              <div className="form-group">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="login-input"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div className="form-group">
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="login-input"
                />
                <ErrorMessage name="password" component="div" className="error" />
              </div>
              <button type="submit" className="login-button" disabled={isSubmitting}>
                Login
              </button>
              {error && <div className="error">{error}</div>}
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Login;
