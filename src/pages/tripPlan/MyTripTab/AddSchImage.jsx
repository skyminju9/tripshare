import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import BasicHeader from '../../../components/BasicHeader';
import fontStyles from '../../../styles/fontStyles';
import color from '../../../styles/colorPalette';
import { BlueButton, GrayButton } from '../../../components/BasicButtons';

const AddSchImage = () => {
  const navigation = useNavigation(); // Initialize navigation

  const handleNextPress = () => {
    navigation.navigate('AddSchHash');
  };

  const handlePreviousPress = () => {
    navigation.navigate('AddSchWhere');
  };

  return (
    <View style={styles.wrapper}>
      <SafeAreaView />
      <BasicHeader text="나의 여행 일정 추가" />
      <View style={styles.container}>
        <View>
          <Text style={[fontStyles.title02, { marginVertical: 20 }]}>
            여행을 대표하는 이미지를 골라보세요.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <GrayButton title="이전" onPress={handlePreviousPress} />
          <BlueButton title="다음" onPress={handleNextPress} />
        </View>
      </View>
      <View style={{ backgroundColor: color.BLUE_30 }}>
        <SafeAreaView />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: color.BLUE_30,
  },
  inputContainer: {
    width: '100%',
    height: 50,
    backgroundColor: color.WHITE,
    borderRadius: 12,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: color.GRAY_50,
    padding: 15,
    marginBottom: 20, // 입력 필드와 버튼 사이 간격
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '50%',
    position: 'absolute', // 절대적 배치
    bottom: 20, // 바닥에 고정
    left: 20,
    gap: 20,
    paddingRight: 10,
  },
});

export default AddSchImage;
