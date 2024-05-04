import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

const CommunityBoard = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>Community Board Page</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default CommunityBoard;
