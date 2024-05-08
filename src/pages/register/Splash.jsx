import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Airplane from '../../assets/icons/register/Airplane.svg';
import color from '../../styles/colorPalette';
import { useAutuUserDispatch } from '../../contexts/AuthUserContext';

import { dummy_user } from '../../dummyData';

const Splash = ({ navigation }) => {
  const [isLoginUser, setIsLoginUser] = useState(false);
  const { login } = useAutuUserDispatch();

  useEffect(() => {
    setTimeout(() => {
      if (isLoginUser) {
        login(dummy_user[4]);
        navigation.navigate('BottomTab');
        setIsLoginUser(true);
      } else navigation.navigate('LoginStack');
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
  },
});

export default Splash;
