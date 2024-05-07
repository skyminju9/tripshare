import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TripShareBottomTab from './components/TripShareBottomTab';
import HomePage from './pages/home/HomePage';
import TripPlanHome from './pages/tripPlan/TripPlanHome';
import CommunityHome from './pages/community/CommunityHome';
import ChattingHome from './pages/chat/ChattingPage';
import MyPageHome from './pages/myPage/MyPageHome';
import LoginPage from './pages/LoginPage';
import HotPlan from './pages/tripPlan/ExploreTab/HotPlan';
import PlanDetail from './pages/tripPlan/ExploreTab/PlanDetail';
import HotDiary from './pages/tripPlan/ExploreTab/HotDiary';
import DiaryDetail from './pages/tripPlan/ExploreTab/DiaryDetail';
import AddSchNaming from './pages/tripPlan/MyTripTab/AddSchNaming';
import AddSchWhen from './pages/tripPlan/MyTripTab/AddSchWhen';
import AddSchWhere from './pages/tripPlan/MyTripTab/AddSchWhere';
import AddSchWith from './pages/tripPlan/MyTripTab/AddSchWith';
import AddSchImage from './pages/tripPlan/MyTripTab/AddSchImage';
import AddSchHash from './pages/tripPlan/MyTripTab/AddSchHash';
import AddSchComplete from './pages/tripPlan/MyTripTab/AddSchComplete';

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
      <Stack.Screen name="AddSchNaming" component={AddSchNaming} />
      <Stack.Screen name="AddSchWhen" component={AddSchWhen} />
      <Stack.Screen name="AddSchWhere" component={AddSchWhere} />
      <Stack.Screen name="AddSchWith" component={AddSchWith} />
      <Stack.Screen name="AddSchImage" component={AddSchImage} />
      <Stack.Screen name="AddSchHash" component={AddSchHash} />
      <Stack.Screen name="AddSchComplete" component={AddSchComplete} />

      <Stack.Screen name="HotPlan" component={HotPlan} />
      <Stack.Screen name="PlanDetail" component={PlanDetail} />
      <Stack.Screen name="HotDiary" component={HotDiary} />
      <Stack.Screen name="DiaryDetail" component={DiaryDetail} />
    </Stack.Navigator>
  );
};
