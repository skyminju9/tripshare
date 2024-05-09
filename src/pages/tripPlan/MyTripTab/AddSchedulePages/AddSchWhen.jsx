import React, { useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import BasicHeader from '../../../../components/BasicHeader';
import fontStyles from '../../../../styles/fontStyles';
import color from '../../../../styles/colorPalette';
import DateRangePicker from './CustomCalendar';

const AddSchWhen = () => {
  const [selectedDates, setSelectedDates] = useState('');

  const handleDateChange = dates => {
    setSelectedDates(dates);
  };

  const startDate = selectedDates.start ? new Date(selectedDates.start) : null;
  const endDate = selectedDates.end ? new Date(selectedDates.end) : null;

  return (
    <View>
      <SafeAreaView style={styles.wrapper} />

      <SafeAreaView>
        <BasicHeader title="나의 여행 일정 추가" />

        <View style={styles.container}>
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
                {' 부터 '}
                {startDate.getFullYear() !== endDate.getFullYear() && (
                  <Text style={{ color: color.BLUE_500 }}>{endDate.getFullYear()}년 </Text>
                )}
                <Text style={{ color: color.BLUE_500 }}>
                  {endDate.getMonth() + 1}월 {endDate.getDate()}일
                </Text>
                {' 까지를'}
              </Text>
            )}

            {startDate && endDate && (
              <View style={{ marginVertical: 4 }}>
                <Text style={{ ...fontStyles.title02 }}>선택하셨네요!</Text>
              </View>
            )}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFF',
  },
  container: {
    height: '100%',
    padding: 20,
    backgroundColor: color.BLUE_30,
  },
  titleContainer: {
    marginVertical: 20,
  },
});

export default AddSchWhen;
