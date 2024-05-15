import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import color from '../../styles/colorPalette';
import fontStyles from '../../styles/fontStyles';
import BasicHeader from '../../components/BasicHeader';
import { Calendar } from 'react-native-calendars';
import { toISODate } from '../../utils/date';
import { MoreInfoIcon } from '../../assets';
import { CalendarIcon } from '../../assets';
import { dummy_event } from '../../dummyData';

const EventPage = () => {
  const [selectedDate, setSelectedDate] = useState(toISODate(new Date()));
  const [showEvent, setShowEvent] = useState();
  const [showDetail, setShowDetail] = useState(false);
  const [showItem, setShowItem] = useState();

  const list = dummy_event;

  const markedDates = list.reduce((acc, current) => {
    const date = current.date;
    acc[date] = { marked: true };
    return acc;
  }, {});

  const markedSelectedDates = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };

  const daySchedule = day => {
    const dayEvent = list.filter(item => item.date === day);
    if (!dayEvent.length) {
      setShowEvent(null);
      return;
    }
    setShowEvent(...dayEvent);
  };

  const handlePressItem = item => {
    if (showItem === item) {
      setShowDetail(!showDetail);
      return;
    }
    setShowDetail(true);
    setShowItem(item);
  };

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => handlePressItem(item)}
        style={[
          styles.eventWrapper,
          {
            backgroundColor:
              showDetail && item.eventId === showItem.eventId ? color.BLUE_30 : color.WHITE,
          },
        ]}>
        <View style={styles.eventNameWrapper}>
          <Text style={fontStyles.title03}>{item.eventName}</Text>
          <MoreInfoIcon />
        </View>
        {showDetail && item.eventId == showItem.eventId && (
          <View style={styles.eventInfos}>
            <View style={styles.eventDuration}>
              <CalendarIcon />
              <Text style={fontStyles.grayFont02}>{item.eventDuration}</Text>
            </View>
            <Text style={fontStyles.basicFont02}>{item.detail}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader title={'이벤트 일정'} />
      <View style={styles.eventsContainer}>
        <View style={styles.calendarWrapper}>
          <Calendar
            style={styles.calendarSize}
            markedDates={markedSelectedDates}
            theme={{
              selectedDayBackgroundColor: color.BLUE_500,
              arrowColor: color.BLUE_600,
              dotColor: color.BLUE_600,
              todayTextColor: color.BLUE_500,
            }}
            onDayPress={day => {
              setSelectedDate(day.dateString);
              daySchedule(day.dateString);
            }}
          />
        </View>
        <View style={styles.eventInfoArea}>
          {showEvent ? (
            <FlatList
              data={showEvent.events}
              keyExtractor={item => item.eventId}
              renderItem={renderItem}
            />
          ) : (
            <Text style={fontStyles.grayFont01}>이벤트가 없습니다</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: color.WHITE },
  eventsContainer: { alignItems: 'center', paddingTop: 36, marginBottom: 36 },
  calendarWrapper: {
    borderRadius: 24,
    borderWidth: 1,
    borderColor: color.BLUE_500,
    overflow: 'hidden',
  },
  calendarSize: {
    width: 330,
  },
  eventInfoArea: { marginTop: 30 },
  eventWrapper: {
    width: 330,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 16,
    borderColor: color.BLUE_30,
    borderWidth: 2,
    marginBottom: 16,
    gap: 8,
  },
  eventNameWrapper: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  eventInfos: { gap: 8 },
  eventDuration: { flexDirection: 'row', gap: 4 },
});

export default EventPage;
