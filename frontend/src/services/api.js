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

export const getEmpresas = async () => {
  try {
    const response = await api.get('/empresas/');
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar empresas:", error);
    throw error;
  }
};

/**
 * Cria uma nova empresa.
 * @param {object} empresaData - { nome_razao_social, cpf_cnpj }
 */
export const createEmpresa = async (empresaData) => {
  try {
    const response = await api.post('/empresas/', empresaData);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar empresa:", error);
    throw error;
  }
};

/**
 * Deleta uma empresa.
 * @param {number} id - O ID da empresa a ser deletada
 */
export const deleteEmpresa = async (id) => {
  try {
    await api.delete(`/empresas/${id}/`);
  } catch (error) {
    console.error("Erro ao deletar empresa:", error);
    throw error;
  }
};

export default api;