import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import color from '../../../styles/colorPalette';
import fontStyles from '../../../styles/fontStyles';
import { PlusIcon } from '../../../assets';
import { useSchedule } from '../../../contexts/AddScheduleContext';

export const ScheduleTab = () => {
  const navigation = useNavigation();
  const [pressedItem, setPressedItem] = useState();

  const { schedules } = useSchedule();

  const renderItem = ({ item }) => {
    const onPressed = () => {
      setPressedItem(item);
    };
    return (
      <View>
        {pressedItem && item.id === pressedItem.id ? (
          <TouchableOpacity onPress={onPressed} style={styles.pressedCircle}>
            <Text>{item.id}일차</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onPressed} style={styles.unPressedCircle}>
            <Text>{item.id}일차</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const renderSchedule = ({ item }) => {
    return (
      <View style={styles.schedule}>
        <View style={styles.timeWrapper}>
          <View style={styles.timeCircle} />
          <Text style={styles.timeText}>{item.time}</Text>
        </View>
        <View style={styles.locationWrapper}>
          <Text style={styles.locationText}>{item.location}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.scheduleWrapper}>
        <FlatList
          data={schedules}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.flex}>
        {(pressedItem ? pressedItem : setPressedItem(schedules[0])) && (
          <View style={styles.pressedItem}>
            <Text style={fontStyles.basicFont01}>{pressedItem.date}</Text>
            <View style={styles.scheduleContainer}>
              <FlatList
                data={pressedItem.schedule}
                renderItem={renderSchedule}
                key={item => item.scheduleId}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        )}
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddSchedule', { params: pressedItem.date })}
        style={styles.plusButton}>
        <PlusIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: color.WHITE },
  flex: { flex: 1 },
  scheduleWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: color.GRAY_50,
  },
  pressedItem: { marginVertical: 12, marginHorizontal: 20, gap: 16 },
  scheduleContainer: { marginBottom: 50 },
  plusButton: { position: 'absolute', bottom: 24, right: 16 },
  schedule: { gap: 4, marginBottom: 16 },
  timeWrapper: { flexDirection: 'row', gap: 8, alignItems: 'center' },
  timeCircle: { backgroundColor: color.BLUE_500, width: 10, height: 10, borderRadius: 100 },
  timeText: [fontStyles.basicFont02, { color: color.TEXT_SECONDARY }],
  locationWrapper: {
    backgroundColor: color.BLUE_30,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  locationText: [fontStyles.basicFont02, { color: color.BLUE_600 }],
  pressedCircle: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: color.BLUE_500,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  unPressedCircle: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: color.GRAY_200,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
});
