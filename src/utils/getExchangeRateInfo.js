import data from '../PrimaryRegions.json';

export const getExchangeRateInfo = (selectedCountry, exchangeData) => {
  const countryCurrency = data[selectedCountry]?.통화;
  const match = exchangeData.find(item => item.cur_unit === countryCurrency);

  if (match) {
    return `${match.deal_bas_r} / ${match.cur_unit}`;
  } else {
    return '정보없음';
  }
};
