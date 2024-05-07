import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import BasicHeader from '../../../components/BasicHeader';
import fontStyles from '../../../styles/fontStyles';
import color from '../../../styles/colorPalette';
import { BlueButton, GrayButton } from '../../../components/BasicButtons';

const AddSchComplete = () => {
  const navigation = useNavigation(); // Initialize navigation

  const handlePreviousPress = () => {
    navigation.navigate('AddSchHash');
  };

  return (
    <View style={styles.wrapper}>
      <SafeAreaView />
      <BasicHeader text="나의 여행 일정 추가" />
      <View style={styles.container}>
        <View>
          <Text style={[fontStyles.title01, { marginVertical: 20 }]}>
            여행 일정 등록이 완료되었어요.
          </Text>
        </View>
        <View>
          <Text style={[fontStyles.basicFont02, { color: color.TEXT_SECONDARY }]}>
            여행 일정 페이지로 이동해 더 자세한 계획을 세워보세요.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <GrayButton title="이전" onPress={handlePreviousPress} />
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
    width: '50%',
    paddingLeft: 20,
    position: 'absolute', // 절대적 배치
    bottom: 20, // 바닥에 고정
    Left: 20,
  },
});

export default AddSchComplete;
