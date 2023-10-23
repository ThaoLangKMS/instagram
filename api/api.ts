import axios from 'axios';

const API_BASE_URL = "http://10.0.2.2:3000"; 

export const signup = async (email: string, password:string) => {
  try {
    
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, {
      email,
      password,
    });
    console.log("HELLO",response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signin = async (email: string, password:string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
