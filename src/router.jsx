import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './pages/home/HomePage';
import TripPlanHome from './pages/tripPlan/TripPlanHome';
import CommunityHome from './pages/community/CommunityHome';
import ChattingHome from './pages/chat/ChattingHome';
import MyPageHome from './pages/myPage/MyPageHome';
import CommunityMeetingMap from './pages/community/CommunityMeetingMap';
import TripShareBottomTab from './components/TripShareBottomTab';
import LocationSetting from './pages/community/LocationSetting';
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
import AddScheduleMain from './pages/tripPlan/MyTripTab/AddScheduleMain';
import MyPageArticle from './pages/myPage/MyPageArticle';
import MyPageBookmark from './pages/myPage/MyPageBookmark';
import MyPageComment from './pages/myPage/MyPageComment';
import CommunityArticleDetail from './pages/community/CommunityArticleDetail';
import MyTrip from './pages/tripPlan/MyTripTab/MyTrip';
import MyTripDetail from './pages/tripPlan/MyTripTab/MyTripDetail';
import AddSchedule from './pages/tripPlan/MyTripTab/AddSchedule';
import FavoriteLocation from './pages/tripPlan/MyTripTab/FavoriteLocation';
import SearchLocations from './pages/tripPlan/MyTripTab/SearchLocations';
import AddMyRecord from './pages/tripPlan/MyTripTab/AddMyRecord';
import MyTripMore from './pages/tripPlan/MyTripTab/MyTripMore';
import FavoriteLocationList from './pages/tripPlan/MyTripTab/FavoriteLocationList';
import SearchLocationList from './pages/tripPlan/MyTripTab/SearchLocationList';
import CommmunitySearchResultPage from './pages/community/CommunitySearchResultPage';
import CommunitySearchPage from './pages/community/CommunitySearchPage';
import ChattingDetail from './pages/chat/ChattingDetail';
import MyRecordMore from './pages/tripPlan/MyTripTab/MyRecordMore';
import Attractions from './pages/community/Attractions';
import AttractionDetail from './pages/community/AttractionDetail';
import EventPage from './pages/community/EventPage';
import AttractionsMap from './components/community/AttractionsMap';

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

export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="LoginStack" component={LoginStack} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="HotPlan" component={HotPlan} />
      <Stack.Screen name="PlanDetail" component={PlanDetail} />
      <Stack.Screen name="HotDiary" component={HotDiary} />
      <Stack.Screen name="DiaryDetail" component={DiaryDetail} />
      <Stack.Screen name="AddScheduleMain" component={AddScheduleMain} />
      {/* COMMUNITY */}
      <Stack.Screen name="CommunityFreeBoard" component={CommunityFreeBoard} />
      <Stack.Screen name="CommunityHotBoard" component={CommunityHotBoard} />
      <Stack.Screen name="CommunityPostPage" component={CommunityPostPage} />
      <Stack.Screen name="CommunityMeetingMap" component={CommunityMeetingMap} />
      <Stack.Screen name="LocationSetting" component={LocationSetting} />
      <Stack.Screen name="CommunityArticleDetail" component={CommunityArticleDetail} />
      <Stack.Screen name="CommunitySearchPage" component={CommunitySearchPage} />
      <Stack.Screen name="Attractions" component={Attractions} />
      <Stack.Screen name="AttractionDetail" component={AttractionDetail} />
      <Stack.Screen name="EventPage" component={EventPage} />
      <Stack.Screen
        name="CommunitySearchResultPage"
        component={CommmunitySearchResultPage}
        options={{ animation: 'none' }}
      />
      {/* CHATTING */}
      <Stack.Screen name="ChattingDetail" component={ChattingDetail} />
      {/* MY TRIP */}
      <Stack.Screen name="MyTrip" component={MyTrip} />
      <Stack.Screen name="MyTripDetail" component={MyTripDetail} />
      <Stack.Screen name="AddSchedule" component={AddSchedule} />
      <Stack.Screen name="FavoriteLocation" component={FavoriteLocation} />
      <Stack.Screen name="SearchLocations" component={SearchLocations} />
      <Stack.Screen name="AddMyRecord" component={AddMyRecord} />
      <Stack.Screen name="MyTripMore" component={MyTripMore} />
      <Stack.Screen name="FavoriteLocationList" component={FavoriteLocationList} />
      <Stack.Screen name="SearchLocationList" component={SearchLocationList} />
      <Stack.Screen name="MyRecordMore" component={MyRecordMore} />

      {/* MY PAGE */}
      <Stack.Screen name="MyPageArticle" component={MyPageArticle} />
      <Stack.Screen name="MyPageBookmark" component={MyPageBookmark} />
      <Stack.Screen name="MyPageComment" component={MyPageComment} />
    </Stack.Navigator>
  );
};
