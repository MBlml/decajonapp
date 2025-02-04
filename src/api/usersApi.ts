import axios from 'axios';

const API_URL = 'https://10.0.2.2:8080/api/users'; 

export const registerUser = async (userData: {
  name: string;
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
