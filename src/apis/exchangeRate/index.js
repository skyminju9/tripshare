//src/apis/exchangeRate/index.js

import axios from 'axios';
import { API_BASE_URL, API_KEY } from './endpoints';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchExchangeData = async searchDate => {
  try {
    const response = await apiClient.get('/exchangeJSON', {
      params: {
        authkey: API_KEY,
        searchdate: searchDate,
        data: 'AP01',
      },
    });

    return response.data;
  } catch (error) {
    console.error('API 요청 실패:', error);
    throw error;
  }
};
