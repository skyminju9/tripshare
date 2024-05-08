import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

const ChattingHome = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>Chatting Page</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default ChattingHome;
