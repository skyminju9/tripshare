import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Explore from './Explore';
import MyTrip from './MyTrip';

const Tab = createMaterialTopTabNavigator();

const MyTripTab = () => {
  return <MyTrip />;
};

const ExploreTab = () => {
  return <Explore />;
};

const TripPlanHome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Tab.Navigator
        screenOptions={{
          tabBarInactiveTintColor: '#333',
          tabBarActiveTintColor: '#4F85F6',
          tabBarIndicatorStyle: {
            borderColor: '#4F85F6',
            borderWidth: 2,
          },
        }}>
        <Tab.Screen name="나의 여행" component={MyTripTab} />
        <Tab.Screen name="탐색" component={ExploreTab} />
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
