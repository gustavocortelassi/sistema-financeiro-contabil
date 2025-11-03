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