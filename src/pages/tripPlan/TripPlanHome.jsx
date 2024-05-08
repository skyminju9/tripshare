import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Explore from './ExploreTab/Explore';
import MyTrip from './MyTripTab/MyTrip';

const Tab = createMaterialTopTabNavigator();

const TripPlanHome = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            borderColor: '#3370F0',
            borderWidth: 2,
          },
          tabBarStyle: {
            height: 60,
          },
          tabBarActiveTintColor: '#3370F0',
          tabBarInactiveTintColor: '#777',
          tabBarLabelStyle: {
            fontFamily: 'Pretendard-SemiBold',
            fontSize: 20,
            letterSpacing: -0.4,
          },
        }}>
        <Tab.Screen name="나의 여행" component={MyTrip} />
        <Tab.Screen name="탐색" component={Explore} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default TripPlanHome;
