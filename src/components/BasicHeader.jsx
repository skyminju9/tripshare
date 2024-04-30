import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import BackIcon from '../assets/icons/header/back_arrow.svg';

const BasicHeader = ({ text, RightIcon, pressRightIcon }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackIcon width={36} height={36} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{text}</Text>
      {RightIcon ? (
        <TouchableOpacity onPress={pressRightIcon}>
          <RightIcon width={36} height={36} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.blankArea}></TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 600,
    letterSpacing: -0.5,
    color: '#000',
  },
  blankArea: {
    width: 36,
    height: 36,
  },
});

export default BasicHeader;
