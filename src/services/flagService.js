import { fetchFlags } from '../apis/countryFlags';

export const loadFlagData = async () => {
  try {
    const data = await fetchFlags();
    return data;
  } catch (error) {
    throw new Error(`Error fetching flag data: ${error.message}`);
  }
};
