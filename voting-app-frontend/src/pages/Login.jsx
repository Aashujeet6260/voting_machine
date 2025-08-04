import React, { useState } from 'react';
import API from '../api/axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [aadharCardNumber, setAadhar] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginHandler = async () => {
    try {
      const res = await API.post('/login', { aadharCardNumber, password });
      localStorage.setItem('token', res.data.token);
      navigate('/home');
    } catch (err) {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Aadhar Number" onChange={(e) => setAadhar(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={loginHandler}>Login</button>
    </div>
  );
}