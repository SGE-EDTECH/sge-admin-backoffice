import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, 
});

export const login = async (email, password) => {
  try {
    console.log('API URL:', process.env.NEXT_PUBLIC_API_URL);
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
};
