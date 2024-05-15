import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import fontStyles from '../../../../styles/fontStyles';
import color from '../../../../styles/colorPalette';
import { BlueButton } from '../../../../components/BasicButtons';
import { useTravelSchedule } from '../../../../contexts/TravelScheduleContext'; // 변경된 import 경로

const AddSchNaming = () => {
  const navigation = useNavigation();
  const { currentSchedule, setCurrentSchedule } = useTravelSchedule(); // 변경된 훅 사용
  const [name, setName] = useState(currentSchedule.name);

  useEffect(() => {
    setName(currentSchedule.name);
  }, [currentSchedule.name]);

  const handleNextPress = () => {
    if (name.trim()) {
      setCurrentSchedule(prev => ({ ...prev, name }));
      navigation.navigate('AddSchWhen');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.titleContainer}>
          <Text style={fontStyles.title02}>여행의 이름을 지어주세요</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="제목을 입력하세요."
            placeholderTextColor={color.GRAY_300}
            style={[fontStyles.basicFont02, styles.textInput]}
            value={name}
            onChangeText={setName}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          <BlueButton title="다음" onPress={handleNextPress} disabled={!name.trim()} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.BLUE_30,
    padding: 20,
    justifyContent: 'space-between',
    height: '100%',
  },
  main: {
    flex: 1,
  },
  titleContainer: {
    marginVertical: 20,
  },
  inputContainer: {
    height: 50,
    backgroundColor: color.WHITE,
    borderRadius: 12,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: color.GRAY_50,
    paddingHorizontal: 16,
    marginBottom: 20,
    justifyContent: 'center',
  },
  footer: {},
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 5,
    gap: 0,
  },
});

export default AddSchNaming;
