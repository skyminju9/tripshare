import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

const MyPageHome = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>my Page</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default MyPageHome;
