import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

const TripPlanHome = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>Trip Plan Page</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default TripPlanHome;
