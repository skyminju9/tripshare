//src/apis/countryFlags/index.js

import axios from 'axios';
import { API_BASE_URL, API_KEY } from './endpoints';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchFlags = async () => {
  try {
    const response = await apiClient.get('/CountryFlagService2/getCountryFlagList2', {
      params: {
        serviceKey: API_KEY,
        returnType: 'JSON',
        numOfRows: 220,
        pageNo: 1,
      },
    });
    return response.data.data || [];
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};
