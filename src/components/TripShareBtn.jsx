import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import fontStyles from '../styles/fontStyles';
import color from '../styles/colorPalette';

const TripShareBtn = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonWrapper} onPress={onPress}>
      <Text style={[fontStyles.title03, styles.btnText]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  buttonWrapper: {
    backgroundColor: color.BLUE_500,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 24,
  },
  btnText: { color: color.WHITE },
});

export default TripShareBtn;
