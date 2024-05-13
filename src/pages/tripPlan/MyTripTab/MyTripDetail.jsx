import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BasicHeader from '../../../components/BasicHeader';
import { dummyPlans } from '../../../dummyData';
import color from '../../../styles/colorPalette';
import fontStyles from '../../../styles/fontStyles';
import { MoreIcon, PeopleIcon } from '../../../assets/index';
import { LocationTab } from './LocationTab';
import { ScheduleTab } from './ScheduleTab';
import { ChecklistTab } from './ChecklistTab';
const Tab = createMaterialTopTabNavigator();

const MyTripDetail = ({ route }) => {
  const planId = route.params.params;
  const item = dummyPlans[planId - 1];
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
        <Text style={fontStyles.title03}>
          여행까지 <Text style={styles.dDayText}>{item.dDay}</Text>일 남았어요!
        </Text>
        <Text style={fontStyles.basicFont02}>
          {item.dates[0]} ~ {item.dates[1]}
        </Text>
        <View style={styles.friendsListWrapper}>
          <PeopleIcon />
          <View style={styles.friendsList}>
            {item.friendList.map((friend, frinedId) => (
              <Text key={frinedId}>{friend.name}</Text>
            ))}
          </View>
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
  friendsListWrapper: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 4 },
  friendsList: { flexDirection: 'row', gap: 2 },
});

export default MyTripDetail;
