// src/utils/getEnglishName.js

import data from '../PrimaryRegions.json';

/**
 * 국가와 도시의 영어 이름, 위도, 경도를 반환합니다.
 * @param {string} country - 국가명
 * @param {string} city - 도시명
 * @returns {Object} - 영어 이름, 위도, 경도
 */
export const getEnglishName = (country, city) => {
  const countryData = data[country];
  if (countryData) {
    const cityData = countryData.도시들[city];
    return cityData
      ? {
          country: countryData.국가명.영어,
          city: cityData.영어,
          lat: cityData.위도,
          lon: cityData.경도,
        }
      : null;
  }
  return null;
};
