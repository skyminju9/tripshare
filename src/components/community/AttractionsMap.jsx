import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import BasicHeader from '../BasicHeader';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useGeolocation } from '../../contexts/GeolocationContext';
import { APP_WIDTH } from '../../constants';
import { BlueWriteIcon, LocationIcon, PhoneIcon, PlaceIcon } from '../../assets';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import color from '../../styles/colorPalette';
import { Shadow } from 'react-native-shadow-2';
import fontStyles from '../../styles/fontStyles';
import shadowStyles from '../../styles/shadowStyles';
import { convertLocationToAddress } from '../../utils/convertLocation';

const AttractionsMap = ({ attractionList }) => {
  const geolocation = useGeolocation();
  const [markerData, setMarkerData] = useState('');
  console.log(attractionList);

  const safeAreaInset = useSafeAreaInsets();

  const mapPressHandler = async (event, marker) => {
    event.persist();
    if (!event.nativeEvent.action) {
      setMarkerData('');
    } else if (event.nativeEvent.action === 'marker-press') {
      marker.address = await convertLocationToAddress(marker.location).catch(e => console.log(e));
      setMarkerData(marker);
      event.stopPropagation();
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        onPoiClick={() => setMarkerData('')}
        initialRegion={{
          latitude: geolocation.latitude,
          longitude: geolocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={event => mapPressHandler(event, '')}>
        {attractionList?.map(item => {
          return (
            <Marker
              key={item.id}
              coordinate={item.location}
              onPress={event => mapPressHandler(event, item)}
            />
          );
        })}
      </MapView>
      <View style={[styles.bottomWrapper, { bottom: safeAreaInset.bottom + 18 }]}>
        <Shadow
          distance={10}
          startColor={'#4F85F64D'}
          endColor={'#4F85F600'}
          offset={[-2, -2]}
          stretch>
          <TouchableOpacity style={styles.writeButtonWrapper}>
            <BlueWriteIcon width={24} height={24} />
          </TouchableOpacity>
        </Shadow>
        {markerData && (
          <TouchableOpacity style={styles.cardWrapper}>
            <View style={styles.cardHeaderWrapper}>
              <Image source={markerData.coverImage} style={styles.cardImage} />
              <View style={styles.cardHeaderRightWrapper}>
                <Text style={fontStyles.boldFont01}>{markerData.placeName}</Text>
                <Text style={fontStyles.basicFont02} numberOfLines={2} ellipsizeMode="tail">
                  {markerData.detail}
                </Text>
              </View>
            </View>
            <View style={styles.cardBottomWrapper}>
              <View style={styles.locationWrapper}>
                <LocationIcon />
                <Text style={fontStyles.boldFont01}>{markerData.address}</Text>
              </View>
              <View style={styles.phoneNumerWrapper}>
                <PhoneIcon />
                <Text>{markerData.tel}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AttractionsMap;

const styles = StyleSheet.create({
  bottomWrapper: {
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: APP_WIDTH,
    paddingHorizontal: 20,
    gap: 18,
  },
  writeButtonWrapper: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.BLUE_30,
    borderRadius: 200,
  },
  cardWrapper: { backgroundColor: '#FFF', width: '100%', padding: 20, borderRadius: 20 },
  cardHeaderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 16,
  },
  cardHeaderRightWrapper: {
    flex: 1,
    gap: 8,
  },
  cardBottomWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  phoneNumerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
