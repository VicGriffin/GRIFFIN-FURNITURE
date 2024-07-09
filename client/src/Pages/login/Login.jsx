import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './login.css';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const notifySuccess = () => toast.success('🦄 signin successful!', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    });
  const notifyError = (message) => toast.error('🦄 invalid email or password!', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    });

  const validationSchema = Yup.object({
    Email: Yup.string().email('Invalid email format').required('Required'),
    Password: Yup.string().required('Required'),
  });

  const handleSubmit = async (values) => {
    setError('');
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      setLoading(false);
      if (response.ok) {
        notifySuccess();
        navigate('/');
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.message || 'Login failed';
        setError(errorMessage);
        notifyError(errorMessage);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
      notifyError(error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      Email: '',
      Password: ''
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit
  });

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
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? 'Loading...' : 'Login'}
          </button>
          {error && <div className="error"><p>{error}</p></div>}
          <p>Don't have an account? <Link to="/Signup">Signup</Link></p>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Login;
