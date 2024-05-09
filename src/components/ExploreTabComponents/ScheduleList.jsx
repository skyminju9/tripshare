import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import fontStyles from '../../styles/fontStyles';
import color from '../../styles/colorPalette';

const ScheduleList = () => {
  return (
    <View style={styles.scheduleList}>
      <View style={styles.topArea}>
        <View style={styles.circle}></View>
        <Text style={[fontStyles.basicFont02, { color: color.TEXT_SECONDARY }]}>오전 09:00</Text>
      </View>
      <View style={styles.shceduleName}>
        <Text style={[fontStyles.basicFont02, { color: color.BLUE_600 }]}>비행기 출발</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scheduleList: {
    marginBottom: 8,
  },
  shceduleName: {
    borderRadius: 8,
    backgroundColor: color.BLUE_30,
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 12,
    marginTop: 6,
    marginLeft: 16,
  },
  topArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: color.BLUE_500,
    marginRight: 8,
  },
});

export default ScheduleList;
