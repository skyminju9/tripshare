import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BasicHeader from '../../../components/BasicHeader';
import fontStyles from '../../../styles/fontStyles';
import color from '../../../styles/colorPalette';
import { BlueButton } from '../../../components/BasicButtons'; // 변경된 부분

const AddSchNaming = () => {
  const navigation = useNavigation();

  const handleNextPress = () => {
    navigation.navigate('AddSchWhen');
  };

  return (
    <View style={styles.wrapper}>
      <SafeAreaView />
      <BasicHeader text="나의 여행 일정 추가" backToScreen="TripPlan" />
      <View style={styles.container}>
        <View>
          <Text style={[fontStyles.title02, { marginVertical: 20 }]}>여행의 이름을 지어주세요</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder="제목을 입력하세요." />
        </View>
        {/* <View style={styles.buttonContainer}>
          <BlueButton title="다음" onPress={handleNextPress} />
        </View> */}
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
    paddingLeft: 10,
    position: 'absolute', // 절대적 배치
    bottom: 20, // 바닥에 고정
    right: 20,
  },
});

export default AddSchNaming;
