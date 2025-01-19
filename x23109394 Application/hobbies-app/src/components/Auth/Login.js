import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import '../../App.css';
import { useAuth } from './AuthContext';

function Login() {
  const { login, isAuthenticated } = useAuth();
  const apiURL = process.env.REACT_APP_API_URL || "http://localhost:3000/";
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(''); // State to manage success or general error messages

  const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
    setMessage(''); // Clear message on input change
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Validate form
      await loginSchema.validate(formState, { abortEarly: false });
      setErrors({}); // Clear previous errors

      // API call
      const response = await fetch(`${apiURL}api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        // Assuming the API response includes a token on successful login
        const data = await response.json();
        localStorage.setItem('token', data.token); 
        login(data.token);
        setMessage('Login successful! Redirecting...'); // Success message
        setTimeout(() => navigate('/home'), 2000); // Redirect after 2 seconds
      } else {
        // Handle HTTP errors (e.g., 400 or 401 from the server)
        const errorData = await response.json();
        setErrors({ form: errorData.message || 'Login failed' });
      }
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        // Extract and set validation errors
        const formErrors = err.inner.reduce((acc, current) => {
          acc[current.path] = current.message;
          return acc;
        }, {});
        setErrors(formErrors);
      } else {
        // Generic error handling
        console.error('An error occurred:', err);
        setMessage('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>LOGIN TO THE HOBBY EXPLORER</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formState.email}
          autoComplete="off"
        />
        {errors.email && <p className="form-error">{errors.email}</p>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={formState.password}
          autoComplete="off"
        />
        {errors.password && <p className="form-error">{errors.password}</p>}
        {errors.form && <p className="form-error">{errors.form}</p>}
        {message && <p className="form-success">{message}</p>}
        <button type="submit">Login</button>
        <p>Don't have an account? <a href="/signup">Sign up here</a></p>
      </form>
    </div>
  );
}

export default Login;
