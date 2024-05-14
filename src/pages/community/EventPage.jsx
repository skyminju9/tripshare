import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import color from '../../styles/colorPalette';
import fontStyles from '../../styles/fontStyles';
import BasicHeader from '../../components/BasicHeader';

const EventPage = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.WHITE }}>
      <BasicHeader title={'이벤트 일정'} />
    </SafeAreaView>
  );
};

export default EventPage;
