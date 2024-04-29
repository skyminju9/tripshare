import { SafeAreaView, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from './pages/home/HomePage';
import TripPlanHome from './pages/tripPlan/TripPlanHome';
import CommunityHome from './pages/community/CommunityHome';
import ChattingHome from './pages/chat/ChattingPage';
import MyPageHome from './pages/myPage/MyPageHome';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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

const Router = () => {
  return <BottomTab />;
};

export default Router;
