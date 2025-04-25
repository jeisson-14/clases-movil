// api/config.js
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RootNavigation from '../helpers/RootNavigation'; // asegúrate de tener esto (lo explico abajo)

// Cambia esta URL por la de tu API
const API_URL = 'https://ea850373-2826-4baf-9b8e-cdfea809902a-00-brfit0bk59uu.riker.replit.dev/api';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Interceptor para añadir token de autenticación
apiClient.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para manejar errores 401
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      await AsyncStorage.removeItem('token');
      RootNavigation.navigate('Login'); // Redirige automáticamente
    }
    return Promise.reject(error);
  }
);

export default apiClient;