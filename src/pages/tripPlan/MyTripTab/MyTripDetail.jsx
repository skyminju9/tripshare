import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

const MyTripDetail = ({ route }) => {
  const planId = route.params.params;
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>{planId}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default MyTripDetail;
