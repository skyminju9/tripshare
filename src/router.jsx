import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import HomePage from './pages/home/HomePage';
import TripPlanHome from './pages/tripPlan/TripPlanHome';
import CommunityHome from './pages/community/CommunityHome';
import ChattingHome from './pages/chat/ChattingPage';
import MyPageHome from './pages/myPage/MyPageHome';
import CommunityMeetingMap from './pages/community/CommunityMeetingMap';
import TripShareBottomTab from './components/TripShareBottomTab';
import LoginPage from './pages/LoginPage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const renderTabBar = props => <TripShareBottomTab {...props} />;

const TripPlanStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TripPlanHome" component={TripPlanHome} />
    </Stack.Navigator>
  );
};

const CommunityStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CommunityHome" component={CommunityHome} />
    </Stack.Navigator>
  );
};

const ChatStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ChattingHome" component={ChattingHome} />
    </Stack.Navigator>
  );
};

const MyPageStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyPageHome" component={MyPageHome} />
    </Stack.Navigator>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="TripPlan" component={TripPlanStack} />
      <Tab.Screen name="Community" component={CommunityStack} />
      <Tab.Screen name="Chat" component={ChatStack} />
      <Tab.Screen name="MyPage" component={MyPageStack} />
    </Tab.Navigator>
  );
};

// 로그인, 회원가입 페이지
export const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginPage" component={LoginPage} />
    </Stack.Navigator>
  );
};

// 홈
export const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
      {/* HOME */}
      {/* COMMUNITY */}
      <Stack.Screen name="CommunityMeetingMap" component={CommunityMeetingMap} />
      {/* TRIP PLAN */}
      {/* CHATTING */}
      {/* MY PAGE */}
    </Stack.Navigator>
  );
};
