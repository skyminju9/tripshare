import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import fontStyles from './styles/fontStyles';
import color from './styles/colorPalette';
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
import { BlueButton, GrayButton } from './components/BasicButtons';

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

export const AddScheduleStack = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pages = [
    'AddSchNaming',
    'AddSchWhen',
    'AddSchWhere',
    'AddSchWith',
    'AddSchImage',
    'AddSchHash',
    'AddSchComplete',
  ];

  // 페이지 컴포넌트를 맵 객체로 관리
  const pageComponents = {
    AddSchNaming,
    AddSchWhen,
    AddSchWhere,
    AddSchWith,
    AddSchImage,
    AddSchHash,
    AddSchComplete,
  };

  const handleNextPress = () => {
    if (currentIndex < pages.length - 1) {
      const nextIndex = currentIndex + 1;
      navigation.navigate(pages[nextIndex]);
      setCurrentIndex(nextIndex);
    }
  };

  const handlePreviousPress = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      navigation.navigate(pages[prevIndex]);
      setCurrentIndex(prevIndex);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#ECF2FF' }}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {pages.map(page => (
          <Stack.Screen key={page} name={page} component={pageComponents[page]} />
        ))}
      </Stack.Navigator>
      {currentIndex === pages.length - 1 ? (
        <TouchableOpacity
          style={styles.completeButton}
          onPress={() => navigation.navigate('TripPlan')}>
          <Text style={[fontStyles.title03, { color: color.WHITE }]}>
            마이 트립 메인으로 돌아가기
          </Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.buttonContainer}>
          {currentIndex > 0 && <GrayButton title="이전" onPress={handlePreviousPress} />}
          {currentIndex < pages.length - 1 && <BlueButton title="다음" onPress={handleNextPress} />}
        </View>
      )}
    </View>
  );
};

export const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="AddSchedule" component={AddScheduleStack} />

      <Stack.Screen name="HotPlan" component={HotPlan} />
      <Stack.Screen name="PlanDetail" component={PlanDetail} />
      <Stack.Screen name="HotDiary" component={HotDiary} />
      <Stack.Screen name="DiaryDetail" component={DiaryDetail} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingLeft: 60,
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
  },
  completeButton: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    height: 54,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3370F0',
  },
});
