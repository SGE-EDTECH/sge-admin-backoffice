"use client";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const PasswordResetPage = () => {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/password-reset', { email });

      toast.success('Um email foi enviado para redefinir sua senha.');
      router.push('/login');
    } catch (error) {
      console.error('Password reset failed:', error);
      toast.error('Erro ao enviar email de redefinição de senha');
    }
  };

  return (
    <div className="background">
      <ToastContainer />
      <div className="container">
        <img src="/Logo_64.png" alt="Logo" className="logo" />
        <form onSubmit={handlePasswordReset}>
          <div className="input-group">
            <input 
              type="email" 
              placeholder="E-mail" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="input"
              required
            />
          </div>
          <button 
            type="submit"
            className="button"
          >
            Enviar Email de Redefinição
          </button>
        </form>
        <div className="login-link">
          <a href="/login">Voltar para o login</a>
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

export default PasswordResetPage;
