import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import BasicHeader from '../../components/BasicHeader';
import MapView, { Marker, PROVIDER_GOOGLE, addressForCoordinate } from 'react-native-maps';
import { AccompanyIcon, DoneIcon } from '../../assets';
import CustomMarker from '../../components/CustomMarker';
import { dummy_meet } from '../../dummyData';
const LocationSetting = ({ navigation, route }) => {
  const safeArea = useSafeAreaInsets();
  const marker = dummy_meet[0];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BasicHeader
        text="번개/동행"
        RightIcon={DoneIcon}
        pressRightIcon={() => navigation.goBack()}
      />

      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChange={nativeEvent => route.params.setLocation(nativeEvent)}
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
  centeredMarker: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
