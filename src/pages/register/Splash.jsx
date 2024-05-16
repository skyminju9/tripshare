import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Airplane from '../../assets/icons/register/Airplane.svg';
import color from '../../styles/colorPalette';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('BottomTab');
    }, 2000);
  }, []);

  return (
    <View style={styles.wrapper}>
      <Airplane width={150} height={240} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: color.BLUE_30,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
  },
});

export default Splash;
