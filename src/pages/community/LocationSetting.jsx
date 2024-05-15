import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import BasicHeader from '../../components/BasicHeader';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { DoneIcon } from '../../assets';
import CustomMarker from '../../components/CustomMarker';
import { dummy_meet } from '../../dummyData';
import { convertLocationToAddress } from '../../utils/convertLocation';
import { useAuthUser } from '../../contexts/AuthUserContext';
import { useGeolocation } from '../../contexts/GeolocationContext';
import color from '../../styles/colorPalette';

const LocationSetting = ({ navigation, route }) => {
  const [locationData, setLocationData] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  const safeArea = useSafeAreaInsets();
  const user = useAuthUser();
  const geolocation = useGeolocation();
  const marker = dummy_meet[0];
  marker.category = 'accompany';
  marker.profileImage = user.profileImage;

  const doneLocationSettingHandler = async () => {
    const returnData = await convertLocationToAddress(locationData);
    route.params.setAddress(returnData);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader
        title="번개/동행"
        rightComponent={
          <TouchableOpacity onPress={() => doneLocationSettingHandler()}>
            <DoneIcon />
          </TouchableOpacity>
        }
      />

      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: geolocation.latitude,
          longitude: geolocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChange={nativeEvent =>
          setLocationData({ latitude: nativeEvent.latitude, longitude: nativeEvent.longitude })
        }
        style={{ flex: 1 }}></MapView>
      <View
        style={[styles.centeredMarker, { top: safeArea.top + 60, bottom: safeArea.bottom }]}
        pointerEvents="none">
        <CustomMarker marker={marker} />
      </View>
    </SafeAreaView>
  );
};

export default LocationSetting;

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: color.WHITE },
  centeredMarker: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
