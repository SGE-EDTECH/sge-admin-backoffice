"use client";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { register } from '../../hooks/api';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('As senhas não coincidem');
      return;
    }

    try {
      const roles = [{ name: 'ADMIN', description: 'Administrator role' }];
      const response = await register({ name, email, password, roles });
      console.log('Registration successful:', response);
      router.push('/login?registered=true');
    } catch (error) {
      console.error('Registration failed:', error);
      toast.error('Erro ao efetuar cadastro');
    }
  };

  return (
    <div className="background">
      <ToastContainer />
      <div className="container">
        <img src="/Logo_64.png" alt="Logo" className="logo" />
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <input 
              type="text" 
              placeholder="Nome" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="input"
            />
          </div>
          <div className="input-group">
            <input 
              type="email" 
              placeholder="E-mail" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
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
          <div className="input-group">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Confirme a Senha" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
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
          <button 
            type="submit"
            className="button"
          >
            Registrar
          </button>
        </form>
        <div className="login-link">
          <a href="/login">Já possui uma conta? Faça login</a>
        </div>
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
        .button {
          background-color: #0000FF;
          color: white;
          padding: 0.75rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          width: 100%;
        }
        .login-link {
          margin-top: 1rem;
        }
        .login-link a {
          color: #0000FF;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default RegisterPage;
