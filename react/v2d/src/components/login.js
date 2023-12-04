import React, { useState } from 'react';
import axios from 'axios';
import Nav from './Nav';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleLogin = () => {
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    axios.post('http://192.168.208.61:5000/login', { username, password })
      .then(response => {
        setLoading(false);
        setSuccessMessage(response.data.message);
      })
      .catch(error => {
        setLoading(false);
        setErrorMessage('Invalid credentials. Please try again.');
      });
  };

  return (
    <div >
      <Nav/>
      <div className="login-container">
      <label htmlFor="username">Username:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <br/><br/>
      <label htmlFor="password">Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br/><br/>
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      {loading && <p>Logging...</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Login;
