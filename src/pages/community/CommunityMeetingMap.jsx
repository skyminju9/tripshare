import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { dummy_meet } from '../../dummyData';
import CustomMarker from '../../components/CustomMarker';
import BasicHeader from '../../components/BasicHeader';
import color from '../../styles/colorPalette';
import { AccompanyIcon, ImpromptuIcon } from '../../assets';
import fontStyles from '../../styles/fontStyles';

const CommunityMeetingMap = ({ navigation }) => {
  const [accompanyIsVisible, setAccompanyIsVisible] = useState(false);
  const [impromptuIsVisible, setImpromptuIsVisible] = useState(false);
  const safeArea = useSafeAreaInsets(); //getSafeArea height

  const accompanyVisibleHandler = () => {
    setAccompanyIsVisible(!accompanyIsVisible);
  };
  const impromptuVisibleHandler = () => {
    setImpromptuIsVisible(!impromptuIsVisible);
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader text="번개/동행" />
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {dummy_meet.map(marker => {
          if (marker.category === 'impromptu' && !impromptuIsVisible) {
            return;
          }

          if (marker.category === 'accompany' && !accompanyIsVisible) {
            return;
          }

          return (
            <Marker key={marker.id} coordinate={marker.location}>
              <CustomMarker marker={marker} />
            </Marker>
          );
        })}
      </MapView>
      <View style={[styles.topCheckWrapper, { top: safeArea.top + 60 + 20 }]}>
        <TouchableOpacity
          style={[
            styles.topCheckButtonWrapper,
            { backgroundColor: impromptuIsVisible ? color.BLUE_200 : '#FFF' },
          ]}
          onPress={impromptuVisibleHandler}
          activeOpacity={0.9}>
          <Image source={ImpromptuIcon} style={styles.topCheckButtonIcon} />
          <Text style={fontStyles.basicFont}>실시간 번개</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.topCheckButtonWrapper,
            { backgroundColor: accompanyIsVisible ? color.BLUE_200 : '#FFF' },
          ]}
          onPress={accompanyVisibleHandler}
          activeOpacity={0.9}>
          <Image source={AccompanyIcon} style={styles.topCheckButtonIcon} />
          <Text style={fontStyles.basicFont}>동행 구하기</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.writeButtonWrapper, { bottom: safeArea.bottom + 18 }]}>
        <TouchableOpacity activeOpacity={0.9} style={styles.writeAccompanyButtonWrapper}>
          <Image source={AccompanyIcon} style={styles.topCheckButtonIcon} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} style={styles.writeImpromptuButtonWrapper}>
          <Image source={ImpromptuIcon} style={styles.topCheckButtonIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CommunityMeetingMap;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  topCheckWrapper: {
    position: 'absolute',
    left: 20,
    flexDirection: 'row',
    gap: 13,
  },
  topCheckButtonWrapper: {
    flexDirection: 'row',
    gap: 4,
    padding: 9,
    borderRadius: 20,
    shadowColor: '#333',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  topCheckButtonIcon: {
    width: 20,
    height: 20,
  },
  writeButtonWrapper: {
    position: 'absolute',
    right: 20,
    gap: 18,
  },
  writeAccompanyButtonWrapper: {
    padding: 15,
    backgroundColor: color.BLUE_30,
    borderRadius: 200,
    shadowColor: color.BLUE_500,
    shadowOffset: { width: -3, height: -3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  writeImpromptuButtonWrapper: {
    padding: 15,
    backgroundColor: color.BLUE_30,
    borderRadius: 200,
    shadowColor: color.BLUE_500,
    shadowOffset: { width: -3, height: -3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});
