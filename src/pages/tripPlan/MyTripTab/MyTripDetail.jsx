import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BasicHeader from '../../../components/BasicHeader';
import { dummy_plans } from '../../../dummyData';
import color from '../../../styles/colorPalette';
import fontStyles from '../../../styles/fontStyles';
import { MoreIcon, PeopleIcon } from '../../../assets/index';
import { LocationTab } from './LocationTab';
import { ScheduleTab } from './ScheduleTab';
import { ChecklistTab } from './ChecklistTab';
import TripTag from '../../../components/myTrip/TripTag';
import { MapIcon } from '../../../assets/index';

const Tab = createMaterialTopTabNavigator();

const MyTripDetail = ({ route }) => {
  const planId = route.params.params;
  const item = dummy_plans[planId - 1];
  console.log(item);

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
        {item.dDay >= 0 ? (
          <Text style={fontStyles.title03}>
            여행까지 <Text style={styles.dDayText}>{item.dDay}</Text>일 남았어요!
          </Text>
        ) : (
          <Text style={fontStyles.title03}>
            여행이 끝난 지 <Text style={styles.dDayText}>{item.dDay * -1}</Text>일 되었어요!
          </Text>
        )}
        <Text style={fontStyles.basicFont02}>
          {item.dates[0]} ~ {item.dates[1]}
        </Text>
        <View style={styles.listWrapper}>
          <PeopleIcon />
          <View style={styles.friendsList}>
            {item.friendList.map((friend, frinedId) => (
              <Text style={fontStyles.basicFont02} key={frinedId}>
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
          {item.tags.map((item, index) => (
            <TripTag key={index} text={item} />
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
