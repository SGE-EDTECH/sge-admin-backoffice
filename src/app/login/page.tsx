"use client";
import useIntegration from '@/hooks/useIntegration/useIntegration';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation'; // Usando next/navigation para useRouter

const MyLoginPage = () => {
  const { post, data } = useIntegration();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter(); // Inicializa o useRouter

  const handleLogin = () => {
    if (username === 'admin@teste.com.br' && password === '12345689') {
      router.push('/admin'); // Use router.push para redirecionar
    } else {
      toast.error('Credenciais inválidas');
    }
  };

  return (
    <div className="background">
      <ToastContainer />
      <div className="container">
        <img src="/Logo_64.png" alt="Logo" className="logo" />
        <div className="input-group">
          <input 
            type="text" 
            placeholder="E-mail" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            className="input"
          />
        </div>
        <div className="input-group">
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="Senha" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="input"
          />
          <button 
            type="button" 
            className="toggle-password" 
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        </div>
        <div className="forgot-password">
          <a href="#">Esqueci minha senha</a>
        </div>
        <button 
          onClick={handleLogin}
          className="button"
        >
          Entrar
        </button>
        <pre>{data && JSON.stringify(data, null, 2)}</pre>
      </div>
      <style jsx>{`
        .background {
          background-image: url('/background.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100vw;
        }
        .container {
          background-color: white;
          padding: 3rem;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
          max-width: 400px;
          width: 100%;
        }
        
        .input-group {
          position: relative;
          margin-bottom: 1rem;
        }
        .input {
          width: 100%;
          padding: 0.75rem;
          border-radius: 4px;
          border: 1px solid #ccc;
        }
        .toggle-password {
          position: absolute;
          top: 50%;
          right: 1rem;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
        }
        .forgot-password {
          margin-bottom: 1rem;
        }
        .forgot-password a {
          color: #0000FF;
          text-decoration: none;
        }
        .button {
          background-color: #0000FF;
          color: white;
          padding: 0.75rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default MyLoginPage;
