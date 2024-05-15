import { fetchTimeDifference } from '../apis/timeDifference';
import { getEnglishName } from '../utils/getEnglishName';

export const loadTimeDifference = async (selectedCountry, selectedCity) => {
  try {
    const { lat, lon } = getEnglishName(selectedCountry, selectedCity) || {};
    if (lat === undefined || lon === undefined) {
      throw new Error('Invalid location data');
    }
    const difference = await fetchTimeDifference(lat, lon);
    return difference;
  } catch (error) {
    throw new Error(`Error fetching time difference: ${error.message}`);
  }
};
