import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import BasicHeader from '../../../../components/BasicHeader';
import fontStyles from '../../../../styles/fontStyles';
import color from '../../../../styles/colorPalette';
import { BlueButton, GrayButton } from '../../../../components/BasicButtons';

const AddSchWith2 = () => {
  const navigation = useNavigation(); // Initialize navigation

  const handleNextPress = () => {
    navigation.navigate('AddSchImage');
  };

  const handlePreviousPress = () => {
    navigation.navigate('AddSchWhere');
  };

  return (
    <View style={styles.wrapper}>
      <SafeAreaView />
      <BasicHeader text="나의 여행 일정 추가" backToScreen="TripPlan" />
      <View style={styles.container}>
        <View>
          <Text style={[fontStyles.title02, { marginVertical: 20 }]}>
            함께하는 친구들이 있나요?
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder="제목을 입력하세요." />
        </View>
        <View>
          <Text style={[fontStyles.basicFont02]}>친구 0</Text>
        </View>
        <View style={styles.addInfo}>
          <Text style={[fontStyles.basicFont02]}>함께 여행 갈 친구를 등록하고</Text>
          <Text style={[fontStyles.basicFont02]}>일정을 공유해 보세요!</Text>
        </View>
        <View></View>
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
  addInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 250,
  },
});

export default AddSchWith2;
