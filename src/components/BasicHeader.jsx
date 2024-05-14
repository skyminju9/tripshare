import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import color from '../styles/colorPalette';
import fontStyles from '../styles/fontStyles';
import BackIcon from '../assets/icons/header/back_arrow.svg';

const BasicHeader = ({ title, leftComponent, rightComponent, headerColor }) => {
  const navigation = useNavigation();

  return (
    <View
      style={
        headerColor
          ? [styles.headerWrapper, { backgroundColor: headerColor }]
          : styles.headerWrapper
      }>
      {leftComponent ? (
        <View>{leftComponent}</View>
      ) : (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon width={36} height={36} />
        </TouchableOpacity>
      )}
      <View style={styles.titleArea}>
        <Text style={fontStyles.title03}>{title}</Text>
      </View>
      {rightComponent ? (
        <View style={styles.rightArea}>{rightComponent}</View>
      ) : (
        <View style={styles.rightArea}>
          <TouchableOpacity style={styles.blankArea} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: color.BLUE_30,
    paddingVertical: 12,
    paddingHorizontal: 8,
    backgroundColor: color.WHITE,
  },
  titleArea: { flex: 1, alignItems: 'center' },
  blankArea: {
    width: 36,
    height: 36,
  },
  rightArea: { alignItems: 'flex-end' },
});

export default BasicHeader;
