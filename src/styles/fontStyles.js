import { StyleSheet } from 'react-native';
import color from './colorPalette';

const fontStyles = StyleSheet.create({
  basicFont: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 16,
    color: color.TEXT_PRIMARY,
    letterSpacing: -0.32,
  },
  basicFont02: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 14,
    color: color.TEXT_PRIMARY,
    letterSpacing: -0.28,
  },
  title01: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 28,
    color: color.TEXT_PRIMARY,
    letterSpacing: -0.56,
  },
  title02: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 20,
    color: color.TEXT_PRIMARY,
    letterSpacing: -0.4,
  },
  title03: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 18,
    color: color.TEXT_PRIMARY,
    letterSpacing: -0.36,
  },
});

export default fontStyles;
