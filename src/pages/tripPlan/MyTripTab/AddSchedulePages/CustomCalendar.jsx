import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import color from '../../../../styles/colorPalette';
import { LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['kr'] = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: '오늘',
};
LocaleConfig.defaultLocale = 'kr';

const DateRangePicker = ({ onDateChange }) => {
  const [selectedDates, setSelectedDates] = useState({});

  const handleDayPress = day => {
    const today = new Date().toISOString().split('T')[0];

    if (!selectedDates.start || (selectedDates.start && selectedDates.end)) {
      setSelectedDates({ start: day.dateString, end: null });
    } else if (selectedDates.start && !selectedDates.end) {
      if (day.dateString < selectedDates.start) {
        setSelectedDates({ start: day.dateString, end: null });
      } else if (day.dateString > selectedDates.start) {
        setSelectedDates({ start: selectedDates.start, end: day.dateString });
      } else {
        setSelectedDates({});
      }
    }
  };

  const generateMarkedDates = () => {
    const { start, end } = selectedDates;
    const marks = {};
    let currentDate = start;

    if (start && end) {
      while (currentDate <= end) {
        if (currentDate === start) {
          marks[currentDate] = { startingDay: true, color: color.BLUE_500, textColor: 'white' };
        } else if (currentDate === end) {
          marks[currentDate] = { endingDay: true, color: color.BLUE_500, textColor: 'white' };
        } else {
          marks[currentDate] = {
            color: color.BLUE_500,
            textColor: 'white',
          };
        }

        const date = new Date(currentDate);
        date.setDate(date.getDate() + 1);
        currentDate = date.toISOString().split('T')[0];
      }
    } else if (start) {
      marks[start] = {
        startingDay: true,
        color: color.BLUE_500,
        endingDay: true,
        textColor: 'white',
      };
    }
    return marks;
  };

  React.useEffect(() => {
    onDateChange(selectedDates);
  }, [selectedDates, onDateChange]);

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={generateMarkedDates()}
        markingType={'period'}
        theme={{
          calendarBackground: color.BLUE_30,
          todayTextColor: 'red',
          dayTextColor: 'black',
          arrowColor: '#0041CB',
          textDayHeaderFontSize: 16,
          textDayHeaderFontWeight: 'bold',
          textSectionTitleColor: '#3370F0',
          monthTextColor: '#0041CB',
          textMonthFontSize: 20,
          textMonthFontWeight: 'bold',
        }}
        firstDay={1}
        monthFormat={'yyyy년 MM월'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default DateRangePicker;
