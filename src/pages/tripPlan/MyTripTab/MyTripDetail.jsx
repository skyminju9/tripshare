import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BasicHeader from '../../../components/BasicHeader';
import color from '../../../styles/colorPalette';
import fontStyles from '../../../styles/fontStyles';
import { MoreIcon, PeopleIcon, MapIcon } from '../../../assets/index';
import { LocationTab } from './LocationTab';
import { ScheduleTab } from './ScheduleTab';
import { ChecklistTab } from './ChecklistTab';
import TripTag from '../../../components/myTrip/TripTag';
import { dummyPlans } from '../../../dummyData';

const Tab = createMaterialTopTabNavigator();

const MyTripDetail = ({ route }) => {
  const { tripId, dDay } = route.params;
  const combinedData = [...dummyPlans, ...route.params.combinedData];
  const item = combinedData.find(plan => plan.id === tripId);

  if (!item) {
    return (
      <SafeAreaView style={styles.wrapper}>
        <Text style={fontStyles.title03}>일정을 찾을 수 없습니다.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader
        title={item.title}
        rightComponent={
          <TouchableOpacity>
            <MoreIcon />
          </TouchableOpacity>
        }
      />
      <View style={styles.tripInfoWrapper}>
        {dDay >= 0 ? (
          dDay !== 0 ? (
            <Text style={fontStyles.title03}>
              여행까지 <Text style={styles.dDayText}>{dDay}</Text>일 남았어요!
            </Text>
          ) : (
            <Text style={fontStyles.title03}>여행 당일이에요!</Text>
          )
        ) : (
          <Text style={fontStyles.title03}>
            여행이 끝난 지 <Text style={styles.dDayText}>{Math.abs(dDay)}</Text>일 되었어요!
          </Text>
        )}
        <Text style={fontStyles.basicFont02}>
          {item.dates[0]} ~ {item.dates[1]}
        </Text>
        <View style={styles.listWrapper}>
          <PeopleIcon />
          <View style={styles.friendsList}>
            {(item.friendList || []).map((friend, index) => (
              <Text style={fontStyles.basicFont02} key={index}>
                {friend.name}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.listWrapper}>
          <MapIcon />
          <Text style={fontStyles.basicFont02}>{item.location}</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 4 }}>
          {(item.tags || []).map((tag, index) => (
            <TripTag key={index} text={tag} />
          ))}
        </View>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarInactiveTintColor: '#333',
          tabBarActiveTintColor: '#4F85F6',
          tabBarIndicatorStyle: {
            borderColor: '#4F85F6',
            borderWidth: 2,
          },
          tabBarLabelStyle: {
            fontSize: 14,
          },
        }}>
        <Tab.Screen name="가고싶은 장소" component={LocationTab} />
        <Tab.Screen name="계획" component={ScheduleTab} />
        <Tab.Screen name="체크리스트" component={ChecklistTab} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: color.WHITE,
  },
  tripInfoWrapper: { marginTop: 24, marginHorizontal: 20, gap: 8 },
  dDayText: { color: color.BLUE_500 },
  listWrapper: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 2 },
  friendsList: { flexDirection: 'row', gap: 2 },
});

export default MyTripDetail;
