import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useGeolocation } from '../../contexts/GeolocationContext';
import { APP_WIDTH } from '../../constants';
import { convertMyCityToAddress } from '../../utils/convertLocation';
import color from '../../styles/colorPalette';
import fontStyles from '../../styles/fontStyles';
import { BlueButton } from '../../components/BasicButtons';
import Toast from 'react-native-toast-message';
import { updateUser } from '../../auth/auth';
import { useAuthUser, useAuthUserDispatch } from '../../contexts/AuthUserContext';
import { useLocation } from '../../contexts/LocationContext';

const appLogo = require('../../assets/icons/register/logo_blue.png');

const SetMyLocationPage = ({ navigation }) => {
  const user = useAuthUser();
  const { updateUserInfo } = useAuthUserDispatch();
  const geolocation = useGeolocation();
  const [address, setAddress] = useState('');
  const { setSelectedCountry, setSelectedCity } = useLocation();

  useEffect(() => {
    if (geolocation) {
      const getCurrentAddress = async () => {
        const { latitude, longitude } = geolocation;
        const currentAddress = await convertMyCityToAddress({ latitude, longitude });
        const [country, city1, city2] = currentAddress.split(' ');

        setSelectedCountry(country);
        setSelectedCity(city2);
        setAddress(currentAddress);
      };

      getCurrentAddress();
    }
  }, []);

  const setUserCurrentLocation = async () => {
    try {
      await updateUser({ email: user.email, updateData: { currentCity: address } });
      await updateUserInfo({ currentCity: address });
      navigation.navigate('BottomTab');
    } catch (e) {
      console.log(e);
      showToast('error', e.message);
    }
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.titleWrapper}>
        <Image source={appLogo} style={{ width: 80, height: 80 }} />
        <Text style={styles.titleText}>
          같은 도시를 여행 중인 사람들과{'\n'}다양한 정보와 이야기를 나누어요
        </Text>
      </View>
      <MapView
        style={{ width: APP_WIDTH, height: APP_WIDTH }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: geolocation.latitude,
          longitude: geolocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <View style={styles.addressInfo}>
        <Text style={fontStyles.title03}>현재 위치: {address}</Text>
      </View>
      <BlueButton title="인증하기" onPress={setUserCurrentLocation} />
      <Toast />
    </SafeAreaView>
  );
};

const showToast = (type, message) => {
  Toast.show({
    type,
    text1: message,
  });
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
    gap: 20,
    alignItems: 'center',
  },
  titleWrapper: {
    marginTop: 60,
    marginBottom: 26,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  titleText: [fontStyles.title03, { color: color.BLUE_500 }],
  addressInfo: {
    width: '100%',
    paddingHorizontal: 20,
  },
});

export default SetMyLocationPage;
