//src/apis/timeDifference/endpoints.js

import { TIMEZONE_API_KEY } from '@env';

export const API_KEY = TIMEZONE_API_KEY;
export const TIMEZONE_API_URL = `http://api.timezonedb.com/v2.1/get-time-zone`;

/**
 * @param {number} lat - 위도
 * @param {number} lon - 경도
 * @returns {string} - 시차 데이터를 반환하는 URL
 */
export const getTimezoneUrl = (lat, lon) =>
  `${TIMEZONE_API_URL}?key=${API_KEY}&format=json&by=position&lat=${lat}&lng=${lon}`;
