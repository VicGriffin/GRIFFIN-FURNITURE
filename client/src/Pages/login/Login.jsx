import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

 const validationSchema = Yup.object({
    Email: Yup.string().email('Invalid email format').required('Required'),
    Password: Yup.string().required('Required'),
  });

  const handleSubmit = async (values) => {
    setError('');
    try {
      const response = await fetch('http://localhost:3001/users/login', {
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
  
  const formik =useFormik({
    initialValues :{
    Email: '',
    Password: ''

  },
  validationSchema : validationSchema,
  onSubmit : handleSubmit
}) 
  

  return (
    <section className='log-in'>
      <div className="login-container">
        <h2>Login</h2>
            <form className="login-form" onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  name="Email"
                  value={formik.values.Email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Email"
                  className="login-input"
                />
                {formik.touched.Email && formik.errors.Email && (
                  <p className="error">{formik.errors.Email}</p>
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
                  className="login-input"
                />
                {formik.touched.Password && formik.errors.Password && (
              <p className="error">{formik.errors.Password}</p>
            )}
              </div>
              <button type="submit" className="login-button" >
                Login
              </button>
              {error && <div className="error"><p>failed to login</p></div>}
             <p>Dont have an account<Link to="/Signup" >Signup</Link></p> 
              
            </form>
      </div>
    </section>
  );
};

export default Login;
