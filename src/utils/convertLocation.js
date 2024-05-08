import Geocoder from 'react-native-geocoding';
import Config from 'react-native-config';

Geocoder.init(Config.GEOCODING_API_KEY);

export const convertLocationToAddress = async ({ latitude, longitude }) => {
  const regionData = await Geocoder.from({ latitude, longitude }).then(res => {
    return res.results[0].address_components;
  });
  const initialAddress = regionData[1].short_name + ' ' + regionData[0].short_name;
  return initialAddress;
};

const d = {
  plus_code: { compound_code: '9P3V+FGV 대한민국 경기도 시흥시', global_code: '8Q989P3V+FGV' },
  results: [
    {
      address_components: [Array],
      formatted_address: '대한민국 경기도 시흥시 정왕동 806-19',
      geometry: [Object],
      place_id: 'ChIJ4d-DNldwezURqnt7nTbRRIE',
      plus_code: [Object],
      types: [Array],
    },
    {
      address_components: [Array],
      formatted_address: '대한민국 경기도 시흥시 정왕동 2308-2번지',
      geometry: [Object],
      place_id: 'ChIJZyBgMFdwezURecSbfFE90D8',
      plus_code: [Object],
      types: [Array],
    },
    {
      address_components: [Array],
      formatted_address: '9P3V+FG 대한민국 경기도 시흥시',
      geometry: [Object],
      place_id: 'GhIJ7cypCUetQkAR2pyUk5qvX0A',
      plus_code: [Object],
      types: [Array],
    },
    {
      address_components: [Array],
      formatted_address: '대한민국 경기도 시흥시 마유로446번길',
      geometry: [Object],
      place_id: 'ChIJS4u4x1BwezURiJVxT1k84OA',
      types: [Array],
    },
    {
      address_components: [Array],
      formatted_address: '대한민국 경기도 시흥시',
      geometry: [Object],
      place_id: 'ChIJLc8aK1FwezUR6g1o4sI7CAw',
      types: [Array],
    },
    {
      address_components: [Array],
      formatted_address: '대한민국 경기도 시흥시 정왕본동',
      geometry: [Object],
      place_id: 'ChIJV8wJb0RwezURbk-Pcxl1ZkA',
      types: [Array],
    },
    {
      address_components: [Array],
      formatted_address: '대한민국 경기도 시흥시',
      geometry: [Object],
      place_id: 'ChIJDb8DNzNlezURe1yrv81ckKo',
      types: [Array],
    },
    {
      address_components: [Array],
      formatted_address: '대한민국 경기도',
      geometry: [Object],
      place_id: 'ChIJjbZ-5eR5fDURwrX21pgfDAE',
      types: [Array],
    },
    {
      address_components: [Array],
      formatted_address: '대한민국',
      geometry: [Object],
      place_id: 'ChIJm7oRy-tVZDURS9uIugCbJJE',
      types: [Array],
    },
  ],
  status: 'OK',
};
