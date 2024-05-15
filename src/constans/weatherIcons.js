import cloudy from '../assets/images/Home/Weather/cloudy.png';
import cloudyPartly from '../assets/images/Home/Weather/cloudyPartly.png';
import rainy from '../assets/images/Home/Weather/rainy.png';
import snowy from '../assets/images/Home/Weather/snowy.png';
import thunderstorm from '../assets/images/Home/Weather/thunderstorm.png';
import rainyThunderstorm from '../assets/images/Home/Weather/rainyThunderstorm.png';
import clear from '../assets/images/Home/Weather/sunny.png';

const iconMapping = {
  '01d': clear,
  '01n': clear,
  '02d': cloudyPartly,
  '02n': cloudyPartly,
  '03d': cloudyPartly,
  '03n': cloudyPartly,
  '04d': cloudy,
  '04n': cloudy,
  '09d': rainy,
  '09n': rainy,
  '10d': rainy,
  '10n': rainy,
  '11d': thunderstorm,
  '11n': thunderstorm,
  '13d': snowy,
  '13n': snowy,
  '50d': cloudy,
  '50n': cloudy,
  rainyThunderstorm: rainyThunderstorm,
};

export default iconMapping;
