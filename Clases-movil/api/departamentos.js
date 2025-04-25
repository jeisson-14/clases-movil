// api/departamentos.js
import apiClient from './config';

export const getAllDepartamentos = async () => {
  try {
    const response = await apiClient.get('https://ea850373-2826-4baf-9b8e-cdfea809902a-00-brfit0bk59uu.riker.replit.dev/api/departamentos');
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error; 
  }
};

export const getDepartamento = async (id) => {
  try {
    const response = await apiClient.get(`https://ea850373-2826-4baf-9b8e-cdfea809902a-00-brfit0bk59uu.riker.replit.dev/api/departamentos/${id}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const createDepartamento = async (data) => {
  try {
    const response = await apiClient.post('https://ea850373-2826-4baf-9b8e-cdfea809902a-00-brfit0bk59uu.riker.replit.dev/api/departamentos', data);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const updateDepartamento = async (id, data) => {
  try {
    const response = await apiClient.put(`https://ea850373-2826-4baf-9b8e-cdfea809902a-00-brfit0bk59uu.riker.replit.dev/api/departamentos/${id}`, data);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const deleteDepartamento = async (id) => {
  try {
    const response = await apiClient.delete(`https://ea850373-2826-4baf-9b8e-cdfea809902a-00-brfit0bk59uu.riker.replit.dev/api/departamentos/${id}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};