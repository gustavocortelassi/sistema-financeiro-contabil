import axios from 'axios';

// define a url base em todas as requisicoes
const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
})

api.interceptors.request.use(
    (config) => {

        // pega token de acesso do localstorage
        const token = localStorage.getItem('acess_token');

        // se o token existir, adiciona ao header
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },

    (error) => {
        return Promise.reject(error);
    }
)

export const fetchCurrentUser = async () => {
  try {
    // O interceptor (PROJ-06) vai adicionar o token automaticamente!
    const response = await api.get('/users/me/'); 
    console.log('Dados do Usuário (PROJ-08):', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados do usuário:', error);
  }
};