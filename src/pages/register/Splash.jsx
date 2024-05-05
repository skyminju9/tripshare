import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Airplane from '../../assets/icons/register/Airplane.svg';
import color from '../../styles/colorPalette';

const Splash = ({ navigation }) => {
  const [loginUser, setLoginUser] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      loginUser ? navigation.navigate('BottomTab') : navigation.navigate('LoginStack');
    }, 2000);
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color.BLUE_30,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Airplane width={150} height={240} />
    </View>
  );
};

export default Splash;
