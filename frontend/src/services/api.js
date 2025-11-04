import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const fetchCurrentUser = async () => {
  try {

    const response = await api.get('/users/me/');
    console.log('Dados do Usuário (PROJ-08):', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados do usuário:', error);
  }
};

export default api;