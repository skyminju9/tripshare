import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>home Page</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default HomePage;
