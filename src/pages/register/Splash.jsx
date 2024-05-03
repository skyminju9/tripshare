import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Airplane from '../../assets/icons/register/Airplane.svg';
import color from '../../styles/colorPalette';

const Splash = ({ navigation }) => {
<<<<<<< HEAD
  const [loginUser, setLoginUser] = useState(true);
=======
  const [loginUser, setLoginUser] = useState(false);
>>>>>>> c0fa720 (design : 스플래시 / 로그인 / 회원가입 화면 퍼블리싱 + 라우터 수정)
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
