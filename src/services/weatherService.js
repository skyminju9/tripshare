import { fetchForecastData } from '../apis/weather';
import { getEnglishName } from '../utils/getEnglishName';
import iconMapping from '../constans/weatherIcons';

export const loadForecastData = async (selectedCountry, selectedCity) => {
  try {
    const { country: englishCountry, city: englishCity } =
      getEnglishName(selectedCountry, selectedCity) || {};

    if (!englishCity) {
      throw new Error('Invalid city selection');
    }

    const data = await fetchForecastData(englishCity, englishCountry);

    const today = new Date().getDate();
    const todayData = data.list.filter(item => new Date(item.dt_txt).getDate() === today);

    const temps = todayData.map(item => item.main.temp);
    const minTemp = Math.round(Math.min(...temps));
    const maxTemp = Math.round(Math.max(...temps));

    let rainDetected = false;
    let thunderstormDetected = false;
    let iconFrequency = {};

    todayData.forEach(item => {
      const weatherMain = item.weather[0].main.toLowerCase();
      const icon = item.weather[0].icon;

      if (weatherMain.includes('rain')) {
        rainDetected = true;
      }
      if (weatherMain.includes('thunderstorm')) {
        thunderstormDetected = true;
      }

      iconFrequency[icon] = (iconFrequency[icon] || 0) + 1;
    });

    let summaryIcon;
    if (rainDetected && thunderstormDetected) {
      summaryIcon = iconMapping['rainyThunderstorm'];
    } else if (thunderstormDetected) {
      summaryIcon = iconMapping['11d'];
    } else if (rainDetected) {
      summaryIcon = iconMapping['10d'];
    } else {
      let mostFrequentIcon = Object.keys(iconFrequency).reduce((a, b) =>
        iconFrequency[a] > iconFrequency[b] ? a : b,
      );
      summaryIcon = iconMapping[mostFrequentIcon];
    }

    return { minTemp, maxTemp, summaryIcon };
  } catch (error) {
    throw new Error(`Error fetching forecast data: ${error.message}`);
  }
};
