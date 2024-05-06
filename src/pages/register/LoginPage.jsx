import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import color from '../../styles/colorPalette';
import fontStyles from '../../styles/fontStyles';
import { PersonIcon, LockIcon, Google } from '../../assets/index';

const appLogo = require('../../assets/icons/register/logo_text.png');
const appleIcon = require('../../assets/icons/register/apple.png');
const talkIcon = require('../../assets/icons/register/talk.png');

const LoginPage = ({ navigation }) => {
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleShowButton = () => {
    setShow(!show);
  };
  const handleLogin = () => {
    navigation.navigate('BottomTab');
  };
  const handleSignUp = () => {
    navigation.navigate('SignUpPage');
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Image source={appLogo} style={styles.appLogoStyle} />
        <View style={styles.inputsContainer}>
          <View style={styles.inputWrapper}>
            <View style={styles.inputIcon}>
              <PersonIcon width={24} height={24} />
            </View>
            <View style={styles.inputContent}>
              <TextInput
                placeholder="example@example.com"
                placeholderTextColor={color.GRAY_200}
                keyboardType="email-address"
                inputMode="email"
                autoCapitalize="none"
                autoComplete="none"
                autoCorrect={false}
                style={fontStyles.basicFont}
                onChangeText={text => setEmail(text)}
              />
            </View>
          </View>
          <View style={styles.inputWrapper}>
            <View style={styles.inputIcon}>
              <LockIcon width={24} height={24} />
            </View>
            <View style={styles.inputContent}>
              <TextInput
                placeholder="비밀번호를 입력하세요"
                placeholderTextColor={color.GRAY_200}
                secureTextEntry={show}
                autoCapitalize="none"
                autoComplete="none"
                autoCorrect={false}
                style={fontStyles.basicFont}
                onChangeText={text => setPassword(text)}
              />
            </View>
            <TouchableOpacity onPress={handleShowButton}>
              <Text style={styles.showText}>Show</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginText}>로그인</Text>
          </TouchableOpacity>
          <View style={styles.signupTexts}>
            <Text style={fontStyles.basicFont02}>아직 회원이 아니신가요? </Text>
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={styles.signupText}>회원가입</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.loginButtonsWrapper}>
          <Text style={styles.seperateText}>OR</Text>
          <View style={styles.loginButtons}>
            <TouchableOpacity>
              <Google width={60} height={60} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={appleIcon} style={styles.loginButtonIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={talkIcon} style={styles.loginButtonIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: color.WHITE,
    alignItems: 'center',
  },
  container: { marginTop: 80, alignItems: 'center' },
  appLogoStyle: { width: 120, height: 138 },
  inputsContainer: { marginTop: 50, marginBottom: 60, alignItems: 'center', gap: 8 },
  inputWrapper: {
    width: 330,
    height: 60,
    backgroundColor: color.BLUE_30,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 16,
    overflow: 'hidden',
    paddingRight: 12,
  },
  inputIcon: {
    paddingVertical: 18,
    paddingHorizontal: 12,
    borderRightWidth: 1,
    borderRightColor: color.WHITE,
  },
  inputContent: {
    flex: 1,
    paddingHorizontal: 12,
  },
  showText: [fontStyles.basicFont02, { color: '#0041CB' }],
  buttonsContainer: { gap: 16, alignItems: 'center', marginBottom: 70 },
  loginButton: {
    width: 300,
    height: 60,
    backgroundColor: color.BLUE_500,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  loginText: [fontStyles.title03, { color: color.WHITE }],
  signupTexts: { alignItems: 'center', flexDirection: 'row' },
  signupText: [fontStyles.basicFont02, { fontFamily: 'Pretendard-Semibold' }],
  loginButtonsWrapper: { alignItems: 'center', gap: 30 },
  seperateText: [fontStyles.title03, { fontFamily: 'Pretendard-Regular' }],
  loginButtons: { flexDirection: 'row', gap: 8 },
  loginButtonIcon: { width: 60, height: 60 },
});

export default LoginPage;
