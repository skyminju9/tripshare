import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import {
  HomeIcon,
  PlanIcon,
  ChatIcon,
  MyPageIcon,
  CommunityIcon,
  HomeIconOn,
  PlanIconOn,
  ChatIconOn,
  MyPageIconOn,
} from '../assets/index';

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
    <View style={[styles.bottomTabWrapper, { paddingBottom: insets.bottom + 10 }]}>
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

// TODO: svg color 변경 방법
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
    padding: 12,
    position: 'absolute',
    bottom: -18,
    shadowColor: '#A5C2FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 10,
  },
});

export default TripShareBottomTab;
