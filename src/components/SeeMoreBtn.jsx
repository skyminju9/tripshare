import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import fontStyles from '../styles/fontStyles';
import ArrowRight from '../assets/icons/arrow_right.svg';

const SeeMoreBtn = ({ address }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.seeMoreBtn} onPress={() => navigation.navigate(address)}>
      <View style={styles.buttonWrapper}>
        <Text style={fontStyles.basicFont02}>더보기</Text>
        <ArrowRight />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  seeMoreBtn: {
    paddingVertical: 4,
    paddingLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});

export default SeeMoreBtn;
