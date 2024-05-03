import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

const LoginPage = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>Login Page</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default LoginPage;
