import React, { useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import fontStyles from '../../../../styles/fontStyles';
import color from '../../../../styles/colorPalette';
import { useNavigation } from '@react-navigation/native';
import { useSchedule } from '../../../../contexts/ScheduleContext';

const AddSchComplete = () => {
  const navigation = useNavigation();
  const { addSchedule, currentSchedule, resetCurrentSchedule } = useSchedule();

  useEffect(() => {
    addSchedule(currentSchedule);
    resetCurrentSchedule();
  }, []);

  const handleNextPress = () => {
    navigation.navigate('TripPlan');
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.titleContainer}>
          <Text style={fontStyles.title01}>여행 일정 등록이 완료되었어요.</Text>
        </View>
        <Text style={[fontStyles.basicFont02, { color: color.TEXT_SECONDARY }]}>
          여행 일정 페이지로 이동해 더 자세한 계획을 세워보세요.
        </Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.completeButton} onPress={handleNextPress}>
            <Text style={[fontStyles.title03, { color: color.WHITE }]}>나의 여행으로 돌아가기</Text>
          </TouchableOpacity>
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
  completeButton: {
    width: '100%',
    height: 54,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.BLUE_500,
  },
});

export default AddSchComplete;
