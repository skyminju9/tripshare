import { Platform, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const os = Platform.OS;

export const checkPermission = async () => {
  if (os === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (granted !== PermissionsAndroid.RESULTS.GRANTED) throw new Error('Android Permission Error');
  } else {
    const ios_granted = await Geolocation.requestAuthorization('always');
    if (ios_granted !== 'granted') throw new Error('IOS Permision Error');
  }

  return true;
};

export const getMyGeolocation = async ({ setGeolocation }) => {
  try {
    await checkPermission();

    Geolocation.getCurrentPosition(
      position => {
        setGeolocation(position.coords);
      },
      error => {
        if (error.code === 1) {
          alert('설정에서 위치를 허용해주세요.', DURATION.LENGTH_SHORT);
        } else if (error.code === 5) {
          alert('다시 시도하여 확인을 눌러주세요.', DURATION.LENGTH_SHORT);
        } else {
          alert('다시 시도하여 확인을 눌러주세요.', DURATION.LENGTH_SHORT);
        }
      },
      { enableHighAccuracy: false, timeout: 2000 },
    );
  } catch (e) {
    alert(e);
  }
};
