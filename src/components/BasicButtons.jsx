// BasicButtons.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import color from '../styles/colorPalette';

const BlueButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color.BLUE_500 }]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const GrayButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color.GRAY_200 }]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '50%',
    height: 54,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  buttonText: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 20,
    color: color.WHITE,
  },
});

export { BlueButton, GrayButton };
