import { fetchExchangeData } from '../apis/exchangeRate';
import { getLastWeekday } from '../utils/getLastWeekday';

export const loadExchangeData = async () => {
  try {
    const dateToFetch = getLastWeekday();
    const data = await fetchExchangeData(dateToFetch);
    if (!data || data.length === 0) {
      throw new Error('No exchange rate data available for the requested date');
    }
    return data;
  } catch (error) {
    throw new Error(`Error fetching exchange rate data: ${error.message}`);
  }
};
