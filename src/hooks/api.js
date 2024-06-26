import axios from 'axios';
import { useRouter } from 'next/router';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        console.log('Adding token to header:', token); 
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        useRouter().push('/login');
      }
    }
    return Promise.reject(error);
  }
);

export const login = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    const { token } = response.data;
    console.log('Token received:', token);
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', token);
    }
    return response.data;
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
};

export const register = async (userData) => {
  try {
    const response = await api.post('/user/create', userData);
    return response.data;
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
};

export const fetchFranchises = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await api.get('/frank/list', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
};

export const createFranchise = async (franchiseData) => {
  try {
    const token = localStorage.getItem('token');
    const response = await api.post('/frank/create', franchiseData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
};

export default api;
