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
    if (error.response && error.response.status === 404) {
      // Try one more day before if no data is available
      const newDate = new Date(
        searchDate.substring(0, 4) +
          '-' +
          searchDate.substring(4, 6) +
          '-' +
          searchDate.substring(6, 8),
      );
      newDate.setDate(newDate.getDate() - 1);
      const previousDate = newDate.toISOString().split('T')[0].replace(/-/g, '');
      return await fetchExchangeData(previousDate);
    } else {
      console.error('API 요청 실패:', error);
      throw error;
    }
  }
};
