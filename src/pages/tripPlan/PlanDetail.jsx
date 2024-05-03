import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import fontStyles from '../../styles/fontStyles';
import color from '../../styles/colorPalette';
import BasicHeader from '../../components/BasicHeader';
import ScheduleList from './ExploreComponents/ScheduleList';

const PlanDetail = () => {
  const [selectedDay, setSelectedDay] = useState(1); // 1일차를 기본 선택으로 초기화

  const handleDayClick = day => {
    setSelectedDay(day);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader />
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={fontStyles.title02}>뼈 J가 계획한 3박 4일 홍콩 여행</Text>
          </View>
          <View style={styles.byDateArea}>
            {[1, 2, 3, 4].map(day => (
              <TouchableOpacity
                key={day}
                style={[
                  styles.byDate,
                  { borderColor: selectedDay === day ? color.BLUE_500 : color.GRAY_200 }, // 선택된 원일 때 파란색, 그 외 회색
                ]}
                onPress={() => handleDayClick(day)}>
                <Text
                  style={[
                    fontStyles.boldFont01,
                    { color: selectedDay === day ? color.BLUE_500 : color.GRAY_200 }, // 선택된 원일 때 글자 파란색, 그 외 회색
                  ]}>
                  {day}일차
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <ScrollView style={styles.scheduleListArea}>
            <ScheduleList />
            <ScheduleList />
            <ScheduleList />
            <ScheduleList />
            <ScheduleList />
            <ScheduleList />
            <ScheduleList />
            <ScheduleList />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 30,
  },
  byDateArea: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 20,
  },
  byDate: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  scheduleListArea: {
    backgroundColor: '#FFFFFF',
    borderColor: color.BLUE_30,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 14,
    maxHeight: 450, // area의 최대 높이 설정
  },
});

export default PlanDetail;
