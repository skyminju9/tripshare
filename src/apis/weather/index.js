//src/apis/weather/index.js

import axios from 'axios';
import { API_BASE_URL, API_KEY } from './endpoints';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchForecastData = async (city, country) => {
  try {
    const response = await apiClient.get('/forecast', {
      params: {
        q: `${city},${country}`,
        appid: API_KEY,
        units: 'metric',
        lang: 'kr',
      },
    });
    return response.data;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};
