import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

const MyTrip = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>MyTrip Page</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default MyTrip;
