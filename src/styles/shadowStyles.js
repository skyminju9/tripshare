import { StyleSheet } from 'react-native';
import color from './colorPalette';

const shadowStyles = StyleSheet.create({
  smallShadow: {
    shadowColor: color.SHADOW,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 3, // Android 그림자 효과
  },
  largeShadow: {
    shadowColor: color.SHADOW,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 5, // Android 그림자 효과
  },
});

export default shadowStyles;
