import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import fontStyles from '../../styles/fontStyles';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={fontStyles.basicFont}>home Page</Text>
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
