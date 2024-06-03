"use client";
import useIntegration from '@/hooks/useIntegration/useIntegration';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';


const MyLoginPage = () => {
  const { post, data } = useIntegration();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    post('http://localhost:3000/auth/login', { username, password });
  };

  return (
    <div>
      <ToastContainer />
      <div>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
      </div>
      <div>
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      <pre>{data && JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default MyLoginPage;
