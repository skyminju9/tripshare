import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from './pages/home/HomePage';
import TripPlanHome from './pages/tripPlan/TripPlanHome';
import CommunityHome from './pages/community/CommunityHome';
import ChattingHome from './pages/chat/ChattingPage';
import MyPageHome from './pages/myPage/MyPageHome';
import TripShareBottomTab from './components/TripShareBottomTab';

import HotPlan from './pages/tripPlan/ExploreTab/HotPlan';
import PlanDetail from './pages/tripPlan/ExploreTab/PlanDetail';
import HotDiary from './pages/tripPlan/ExploreTab/HotDiary';
import DiaryDetail from './pages/tripPlan/ExploreTab/DiaryDetail';
import LoginPage from './pages/register/LoginPage';
import SignUpPage from './pages/register/SignUpPage';
import Splash from './pages/register/Splash';
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

export const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="SignUpPage" component={SignUpPage} />
      <Stack.Screen name="MainStack" component={MainStack} />
    </Stack.Navigator>
  );
};

// 홈
export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="LoginStack" component={LoginStack} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
      {/* TRIP PLAN */}
      <Stack.Screen name="HotPlan" component={HotPlan} />
      <Stack.Screen name="PlanDetail" component={PlanDetail} />
      <Stack.Screen name="HotDiary" component={HotDiary} />
      <Stack.Screen name="DiaryDetail" component={DiaryDetail} />
      {/* COMMUNITY */}
      <Stack.Screen name="CommunityFreeBoard" component={CommunityFreeBoard} />
      <Stack.Screen name="CommunityHotBoard" component={CommunityHotBoard} />
      <Stack.Screen name="CommunityPostPage" component={CommunityPostPage} />
      {/* CHATTING */}
      {/* MY PAGE */}
      {/* CHATTING */}
      {/* MYPAGE */}
    </Stack.Navigator>
  );
};
