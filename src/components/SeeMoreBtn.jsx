import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import fontStyles from '../styles/fontStyles';
import ArrowRight from '../assets/icons/arrow_right.svg';

const SeeMoreBtn = () => {
  return (
    <View style={styles.buttonWrapper}>
      <Text style={fontStyles.basicFont02}>더보기</Text>
      <ArrowRight />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});

export default SeeMoreBtn;
