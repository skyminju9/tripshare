import React from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

const CommunityHome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>Community Page</Text>
      <TouchableOpacity onPress={() => navigation.navigate('CommunityMeetingMap')}>
        <Text>지도로이동</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default CommunityHome;
