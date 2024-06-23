"use client"
import React, { useState, useEffect } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('https://fb-gg.adsdeps.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    setMessage(data.message);
    if (response.ok) {
        localStorage.setItem('user', 'admin')

    }
  };

useEffect(() => {
  const users = localStorage.getItem('user')
  
  if(users === 'admin') {
    window.location.href="/"
  }
})




  
  return (
    <div className='login'>
      
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className='form-control mt-3'
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className='form-control mt-3'
        />
        <button type="submit" className='btn btn-success mt-3'>Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
