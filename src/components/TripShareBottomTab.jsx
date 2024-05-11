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
import { Shadow } from 'react-native-shadow-2';
import shadowStyles from '../styles/shadowStyles';

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
      <Shadow {...shadowStyles.largeShadow} stretch>
        <View style={styles.bottomTabBar}>
          {routes.map((route, index) => {
            const isFocused = routes[focusedIndex].name === route.name;
            return (
              <TouchableOpacity
                key={route.key}
                onPress={() => handleIconPress(route, index)}
                style={styles.bottomTabIcon}>
                {route.name === 'Community' ? (
                  <View style={styles.communityIconWrapper}>
                    <Shadow
                      distance={5}
                      startColor={'#4F85F64D'}
                      endColor={'#4F85F600'}
                      offset={[0, 2]}
                      stretch>
                      <View style={styles.communityIconShadow}>
                        <CommunityIcon style={styles.communityIcon} />
                      </View>
                    </Shadow>
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
      </Shadow>
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
  },
  bottomTabIcon: {
    flex: 1,
    alignItems: 'center',
  },
  communityIconWrapper: {
    backgroundColor: '#4F85F6',
    width: 70,
    height: 70,
    borderRadius: 50,
    padding: 12,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -18,
  },
  communityIcon: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  communityIconShadow: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});

export default TripShareBottomTab;
