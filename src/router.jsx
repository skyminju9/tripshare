import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from './pages/home/HomePage';
import TripPlanHome from './pages/tripPlan/TripPlanHome';
import CommunityHome from './pages/community/CommunityHome';
import ChattingHome from './pages/chat/ChattingPage';
import MyPageHome from './pages/myPage/MyPageHome';
import TripShareBottomTab from './components/TripShareBottomTab';
import LoginPage from './pages/LoginPage';
import CommunityFreeBoard from './pages/community/CommunityFreeBoard';
import CommunityHotBoard from './pages/community/CommunityHotBoard';
import CommunityPostPage from './pages/community/CommunityPostPage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const renderTabBar = props => <TripShareBottomTab {...props} />;

const BottomTab = () => {
  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="TripPlan" component={TripPlanHome} />
      <Tab.Screen name="Community" component={CommunityHome} />
      <Tab.Screen name="Chat" component={ChattingHome} />
      <Tab.Screen name="MyPage" component={MyPageHome} />
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
      <Stack.Screen name="CommunityFreeBoard" component={CommunityFreeBoard} />
      <Stack.Screen name="CommunityHotBoard" component={CommunityHotBoard} />
      <Stack.Screen name="CommunityPostPage" component={CommunityPostPage} />
      {/* TRIP PLAN */}
      {/* CHATTING */}
      {/* MY PAGE */}
    </Stack.Navigator>
  );
};
