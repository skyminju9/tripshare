import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { BlueHeartIcon, PlusIcon } from '../../../assets/index';
import color from '../../../styles/colorPalette';
import fontStyles from '../../../styles/fontStyles';
import { useNavigation } from '@react-navigation/native';
const mapImage = require('../../../assets/images/myTrip/map.png');

export const LocationTab = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <View style={styles.savedLocationWrapper}>
        <Text style={fontStyles.title03}>저장된 장소</Text>
        <View>
          <Image source={mapImage} style={styles.mapImage} />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('FavoriteLocationList')}
          style={styles.savedLocationListButton}>
          <BlueHeartIcon width={30} height={30} />
          <Text style={styles.goText}>저장한 장소 리스트 보러가기</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('SearchLocationList')}
        style={styles.addButton}>
        <PlusIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: '#FFF' },
  savedLocationWrapper: { margin: 20, gap: 14 },
  mapImage: { width: '100%', paddingHorizontal: 10, height: 270, borderRadius: 12 },
  savedLocationListButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: color.WHITE,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: color.BLUE_30,
    paddingVertical: 15,
    paddingLeft: 12,
    paddingRight: 126,
  },
  addButton: { position: 'absolute', bottom: 24, right: 16 },
  goText: [fontStyles.basicFont01, { color: color.BLUE_500 }],
});
