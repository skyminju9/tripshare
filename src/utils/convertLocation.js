import Geocoder from 'react-native-geocoding';
import Config from 'react-native-config';

Geocoder.init(Config.GEOCODING_API_KEY);

export const convertLocationToAddress = async ({ latitude, longitude }) => {
  const regionData = await Geocoder.from({ latitude, longitude })
    .then(res => {
      return res.results[0].address_components;
    })
    .catch(err => {
      console.log(err);
    });
  const initialAddress = regionData[1].short_name + ' ' + regionData[0].short_name;
  return initialAddress;
};

export const convertMyCityToAddress = async ({ latitude, longitude }) => {
  const regionData = await Geocoder.from({ latitude, longitude })
    .then(res => {
      return res.results[0].address_components;
    })
    .catch(err => {
      console.log(err);
    });
  const cityAddress = regionData[4].short_name + ' ' + regionData[3].short_name;
  return cityAddress;
};
