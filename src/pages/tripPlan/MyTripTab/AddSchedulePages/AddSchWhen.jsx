import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import fontStyles from '../../../../styles/fontStyles';
import color from '../../../../styles/colorPalette';
import DateRangePicker from './CustomCalendar';
import { BlueButton, GrayButton } from '../../../../components/BasicButtons';
import { useSchedule } from '../../../../contexts/ScheduleContext';

const AddSchWhen = () => {
  const navigation = useNavigation();
  const { currentSchedule, setCurrentSchedule } = useSchedule();
  const [selectedDates, setSelectedDates] = useState(
    currentSchedule.date || { start: '', end: '' },
  );

  useEffect(() => {
    if (currentSchedule.date) {
      setSelectedDates(currentSchedule.date);
    }
  }, [currentSchedule.date]);

  const handleDateChange = dates => {
    setSelectedDates(dates);
  };

  const handleNextPress = () => {
    if (selectedDates.start && selectedDates.end) {
      setCurrentSchedule(prev => ({ ...prev, date: selectedDates }));
      navigation.navigate('AddSchWhere');
    }
  };

  const handlePreviousPress = () => {
    navigation.goBack();
  };

  const startDate = selectedDates.start ? new Date(selectedDates.start) : null;
  const endDate = selectedDates.end ? new Date(selectedDates.end) : null;

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.titleContainer}>
          <Text style={fontStyles.title02}>얼마나 오래 떠나시나요?</Text>
        </View>
        <DateRangePicker onDateChange={handleDateChange} />
        <View style={{ marginVertical: 30 }}>
          {startDate && endDate && (
            <Text style={fontStyles.title02}>
              <Text style={{ color: color.BLUE_500 }}>
                {startDate.getFullYear()}년 {startDate.getMonth() + 1}월 {startDate.getDate()}일
              </Text>
              {'부터 '}
              {startDate.getFullYear() !== endDate.getFullYear() && (
                <Text style={{ color: color.BLUE_500 }}>{endDate.getFullYear()}년 </Text>
              )}
              <Text style={{ color: color.BLUE_500 }}>
                {endDate.getMonth() + 1}월 {endDate.getDate()}일
              </Text>
              {'까지를'}
            </Text>
          )}
          {startDate && endDate && (
            <View style={{ marginVertical: 4 }}>
              <Text style={{ ...fontStyles.title02 }}>선택하셨네요!</Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          <GrayButton title="이전" onPress={handlePreviousPress} />
          <BlueButton
            title="다음"
            onPress={handleNextPress}
            disabled={!selectedDates.start || !selectedDates.end}
          />
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

export default AddSchWhen;
