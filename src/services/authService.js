import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/auth';

const authService = {
  createAccount: async (data) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/signup`, data);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },

  login: async (data) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, data);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },

  getCurrentUser: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/me`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return null;
    }
  },

  logout: async () => {
    try {
      await axios.post(`${API_BASE_URL}/logout`, {}, {
        withCredentials: true,
      });
    } catch (error) {
      console.error('Logout failed', error);
    }
  }
};

export default authService;
