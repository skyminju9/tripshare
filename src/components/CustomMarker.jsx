import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import color from '../styles/colorPalette';
import Svg, { Polygon } from 'react-native-svg';
const CustomMarker = ({ marker }) => {
  const markerColor = marker.category === 'impromptu' ? color.BLUE_500 : '#FFD83B';
  return (
    <View style={{ flex: 1, height: 80 }}>
      <View style={[styles.markerImageWrapper, { backgroundColor: markerColor }]}>
        <Image
          source={{ uri: 'https://xsgames.co/randomusers/avatar.php?g=male' }}
          style={styles.markerImage}
        />
      </View>
      <Svg height="100%" width="100%" style={styles.markerPolygon}>
        <Polygon points="0,0 13,25 26,0" fill={markerColor} />
      </Svg>
    </View>
  );
};

export default CustomMarker;

const styles = StyleSheet.create({
  markerImageWrapper: {
    padding: 4,
    backgroundColor: color.BLUE_500,
    borderRadius: 200,
  },
  markerImage: { width: 25, height: 25, borderRadius: 200 },
  markerPolygon: { position: 'absolute', top: 27, left: 4 },
});
