import axios from 'axios';

const API_URL = 'https://tu-backend.com/api/users'; 

export const registerUser = async (userData: {
  firstName: string;
  lastName1: string;
  lastName2: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data; 
  } catch (error) {
    throw error; 
  }
};
