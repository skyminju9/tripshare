import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import HomeIcon from '../assets/icons/bottomIcons/homeIcon.svg';
import PlanIcon from '../assets/icons/bottomIcons/planIcon.svg';
import ChatIcon from '../assets/icons/bottomIcons/chatIcon.svg';
import MyPageIcon from '../assets/icons/bottomIcons/myPageIcon.svg';
import CommunityIcon from '../assets/logo/bottomLogo.svg';

// TODO: svg color 변경 방법
import HomeIconOn from '../assets/icons/bottomIcons/homeIconOn.svg';
import PlanIconOn from '../assets/icons/bottomIcons/planIconOn.svg';
import ChatIconOn from '../assets/icons/bottomIcons/chatIconOn.svg';
import MyPageIconOn from '../assets/icons/bottomIcons/myPageIconOn.svg';

const tabs = {
  Home: <HomeIcon />,
  TripPlan: <PlanIcon />,
  Chat: <ChatIcon />,
  MyPage: <MyPageIcon />,
  Community: <CommunityIcon />,
  HomeOn: <HomeIconOn />,
  TripPlanOn: <PlanIconOn />,
  CommunityOn: <CommunityIcon />,
  ChatOn: <ChatIconOn />,
  MyPageOn: <MyPageIconOn />,
};

const TripShareBottomTab = ({ state, navigation, insets }) => {
  const { routes, index: focusedIndex } = state;

  const handleIconPress = (route, index) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    const isFocused = routes[focusedIndex].name === route.name;
    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  return (
    <View style={[styles.bottomTabWrapper, { paddingBottom: insets.bottom }]}>
      <View style={styles.bottomTabBar}>
        {routes.map((route, index) => {
          const isFocused = routes[focusedIndex].name === route.name;

          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => handleIconPress(route, index)}
              style={styles.bottomTabIcon}>
              {route.name === 'Community' ? (
                <View style={styles.communityIcon}>
                  <CommunityIcon />
                </View>
              ) : isFocused ? (
                <View>{tabs[`${route.name}On`]}</View>
              ) : (
                <View>{tabs[route.name]}</View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTabWrapper: {
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 0,
    zIndex: 10,
    width: '100%',
  },
  bottomTabBar: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 22,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#EEE',
    backgroundColor: '#FFF',
    borderRadius: 36,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  bottomTabIcon: {
    flex: 1,
    alignItems: 'center',
  },
  communityIcon: {
    backgroundColor: '#4F85F6',
    borderRadius: 50,
    padding: 16,
    position: 'absolute',
    bottom: -18,
    shadowColor: '#2170F0',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
  },
});

export default TripShareBottomTab;
