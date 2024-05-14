import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Airplane from '../../assets/icons/register/Airplane.svg';
import color from '../../styles/colorPalette';
import { useAuthUser } from '../../contexts/AuthUserContext';
import fontStyles from '../../styles/fontStyles';

const Splash = ({ navigation }) => {
  const user = useAuthUser();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('BottomTab');
    }, 2000);
  }, []);

  return (
    <View style={styles.wrapper}>
      <Text style={fontStyles.blueFont01}>{user.name}님 환영합니다.</Text>
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
