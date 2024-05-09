import React, { useEffect, useState } from 'react';
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
import { PersonIcon, FaceIcon, LockIcon, CheckIcon, Google } from '../../assets/index';

const appLogo = require('../../assets/icons/register/logo_blue.png');
const appleIcon = require('../../assets/icons/register/apple.png');
const talkIcon = require('../../assets/icons/register/talk.png');

const SignUpPage = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const handleSignUp = () => {
    navigation.navigate('BottomTab');
  };

  const handleLogin = () => {
    navigation.navigate('LoginPage');
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.titleWrapper}>
        <Image source={appLogo} style={{ width: 100, height: 100 }} />
        <Text style={styles.titleText}>계정을 만들고{'\n'}다양한 기능을 즐겨보세요!</Text>
      </View>
      <View style={styles.inputsContainer}>
        <View style={styles.inputWrapper}>
          <View style={styles.inputIcon}>
            <FaceIcon width={24} height={24} />
          </View>
          <View style={styles.inputContent}>
            <TextInput
              placeholder="닉네임"
              placeholderTextColor={color.GRAY_200}
              inputMode="text"
              autoCapitalize="none"
              autoComplete="none"
              autoCorrect={false}
              style={fontStyles.basicFont01}
              onChangeText={text => setName(text)}
            />
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <View style={styles.inputIcon}>
            <PersonIcon width={24} height={24} />
          </View>
          <View style={styles.inputContent}>
            <TextInput
              placeholder="example@example.com"
              placeholderTextColor={color.GRAY_200}
              inputMode="email"
              autoCapitalize="none"
              autoComplete="none"
              autoCorrect={false}
              style={fontStyles.basicFont01}
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
              placeholder="비밀번호 (10자 이상, 특수문자 포함)"
              placeholderTextColor={color.GRAY_200}
              secureTextEntry={true}
              autoCapitalize="none"
              autoComplete="none"
              autoCorrect={false}
              style={fontStyles.basicFont01}
              onChangeText={text => setPassword(text)}
            />
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <View style={styles.inputIcon}>
            <CheckIcon width={24} height={24} />
          </View>
          <View style={styles.inputContent}>
            <TextInput
              placeholder="비밀번호를 확인해 주세요"
              placeholderTextColor={color.GRAY_200}
              secureTextEntry={true}
              autoCapitalize="none"
              autoComplete="none"
              autoCorrect={false}
              style={fontStyles.basicFont01}
              onChangeText={text => setPasswordCheck(text)}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpText}>회원가입</Text>
        </TouchableOpacity>
        <View style={styles.loginTexts}>
          <Text style={fontStyles.basicFont02}>이미 계정이 있으신가요? </Text>
          <TouchableOpacity>
            <Text style={styles.loginText} onPress={handleLogin}>
              로그인
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.signUpButtonsWrapper}>
        <Text style={styles.seperateText}>OR</Text>
        <View style={styles.signUpButtons}>
          <TouchableOpacity>
            <Google width={60} height={60} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={appleIcon} style={{ width: 60, height: 60 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={talkIcon} style={{ width: 60, height: 60 }} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: color.WHITE,
  },
  titleWrapper: {
    marginTop: 60,
    marginBottom: 26,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  titleText: [fontStyles.title03, { color: color.BLUE_500 }],
  inputsContainer: { marginBottom: 50, alignItems: 'center', gap: 8 },
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
  buttonsContainer: { gap: 16, alignItems: 'center', marginBottom: 28 },
  signUpButton: {
    width: 300,
    height: 60,
    backgroundColor: color.BLUE_500,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  signUpText: [fontStyles.title03, { color: color.WHITE }],
  loginTexts: { alignItems: 'center', flexDirection: 'row' },
  loginText: [fontStyles.basicFont02, { fontFamily: 'Pretendard-Semibold' }],
  signUpButtonsWrapper: { alignItems: 'center', gap: 30 },
  seperateText: [fontStyles.title03, { fontFamily: 'Pretendard-Regular' }],
  signUpButtons: { flexDirection: 'row', gap: 8 },
});

export default SignUpPage;
