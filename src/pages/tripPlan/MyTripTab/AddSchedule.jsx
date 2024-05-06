import React, { useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import BasicHeader from '../../../components/BasicHeader';
import fontStyles from '../../../styles/fontStyles';
import color from '../../../styles/colorPalette';

const AddSchedule = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader text="나의 여행 일정 추가" />
      <View style={styles.container}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: color.BLUE_30,
  },
});

export default AddSchedule;
