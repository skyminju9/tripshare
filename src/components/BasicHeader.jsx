import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import fontStyles from '../styles/fontStyles';
import BackIcon from '../assets/icons/header/back_arrow.svg';

const BasicHeader = ({ text, RightIcon, pressRightIcon }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackIcon width={36} height={36} />
      </TouchableOpacity>
      <Text style={fontStyles.title03}>{text}</Text>
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
    borderBottomWidth: 1,
    borderBottomColor: '#CBDCFF',
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  blankArea: {
    width: 36,
    height: 36,
  },
});

export default BasicHeader;
