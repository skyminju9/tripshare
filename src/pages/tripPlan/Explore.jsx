import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

const Explore = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>탐색</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default Explore;
