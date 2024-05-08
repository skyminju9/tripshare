import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import PlusIcon from '../../../assets/icons/myTrip/add.svg';
import RightArrow from '../../../assets/icons/myTrip/arrow_right.svg';
import PeopleIcon from '../../../assets/icons/myTrip/people.svg';
import { useNavigation } from '@react-navigation/native';

const dummyCoverImage = require('../../../assets/images/myTrip/singapore.jpeg');

const dummyPlans = [
  {
    id: 1,
    title: '싱가포르 여행',
    dates: ['24.05.03', '24.05.08'],
    friendList: [
      {
        friendId: 1,
        name: '오정혁',
      },
      {
        friendId: 2,
        name: '우예인',
      },
      {
        friendId: 3,
        name: '한서흔',
      },
    ],
    coverImage: require('../../../assets/images/myTrip/singapore.jpeg'),
    dDay: 2,
  },
  {
    id: 2,
    title: '싱가포르 여행',
    dates: ['24.05.01', '24.05.08'],
    friendList: [
      {
        friendId: 1,
        name: '오정혁',
      },
      {
        friendId: 2,
        name: '우예인',
      },
      {
        friendId: 3,
        name: '한서흔',
      },
    ],
    coverImage: require('../../../assets/images/myTrip/singapore.jpeg'),
    dDay: 0,
  },
  {
    id: 3,
    title: '싱가포르 여행',
    dates: ['24.05.01', '24.05.08'],
    friendList: [
      {
        friendId: 1,
        name: '오정혁',
      },
      {
        friendId: 2,
        name: '우예인',
      },
      {
        friendId: 3,
        name: '한서흔',
      },
    ],
    coverImage: require('../../../assets/images/myTrip/singapore.jpeg'),
    dDay: -1,
  },
];

const MyTrip = () => {
  const navigation = useNavigation();
  const handleMorePress = () => {
    navigation.navigate('AddScheduleMain');
  };

  const renderPlan = ({ item }) => {
    return (
      <TouchableOpacity style={styles.tripPlanCard}>
        <View style={styles.planCoverImageWrapper}>
          <Image source={dummyCoverImage} resizeMode="cover" style={styles.planCoverImage} />
        </View>
        <View style={styles.planDescriptWrapper}>
          <Text style={styles.planTitle}>{item.title}</Text>
          <View style={styles.planDatesWrapper}>
            <Text style={styles.planDate}>
              {item.dates[0]} ~ {item.dates[1]}
            </Text>
            <View style={styles.planFriendsWrapper}>
              <PeopleIcon width={24} height={24} />
              {/* {item.friendList.map((friend, friendId) => (
                <Text style={{ color: '#494949', letterSpacing: -0.2 }}>{friend.name}</Text>
              ))} */}
            </View>
          </View>
          <View style={styles.planDdayWrapper}>
            {item.dDay > 0 ? (
              <Text style={styles.planDday}>D - {item.dDay}</Text>
            ) : item.dDay == 0 ? (
              <Text style={styles.planDday}>D - day</Text>
            ) : (
              <Text style={styles.planDday}>D + {item.dDay * -1}</Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.myTripPlanContainer}>
        <View style={styles.myTripTitleWrapper}>
          <View style={styles.myTripTitles}>
            <Text style={styles.myTripTitle}>나의 여행 일정</Text>
            <TouchableOpacity style={styles.myTripMore} onPress={handleMorePress}>
              <PlusIcon width={24} height={24} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.myTripMore}>
              <Text>더보기</Text>
              <RightArrow width={24} height={24} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.tripPlanCardsContainer}>
          <FlatList
            data={dummyPlans}
            renderItem={renderPlan}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  myTripPlanContainer: { marginTop: 40, marginHorizontal: 24 },
  myTripTitleWrapper: { flexDirection: 'row', justifyContent: 'space-between' },
  myTripTitles: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  myTripTitle: { fontSize: 18, fontWeight: '500', letterSpacing: -0.5 },
  myTripMore: { flexDirection: 'row', alignItems: 'center', marginRight: 12 },
  tripPlanCardsContainer: { marginTop: 16 },
  tripPlanCard: {
    width: 200,
    height: 300,
    marginRight: 8,
    backgroundColor: '#EEE',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EEE',
    shadowColor: '#333',
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  planCoverImageWrapper: {
    flex: 0.5,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: 'hidden',
  },
  planCoverImage: { width: 200, height: 150 },
  planDescriptWrapper: {
    flex: 0.5,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#FFF',
    paddingVertical: 12,
    paddingLeft: 16,
    paddingRight: 8,
    gap: 12,
  },
  planTitle: { fontSize: 18, fontWeight: '700', color: '#222', letterSpacing: -0.2 },
  planDatesWrapper: { gap: 6 },
  planDate: { color: '#222', letterSpacing: -0.2 },
  planFriendsWrapper: { flexDirection: 'row', gap: 2, alignItems: 'center' },
  planDdayWrapper: { alignItems: 'flex-end' },
  planDday: { fontSize: 24, fontWeight: 'bold', color: '#494949', letterSpacing: -0.2 },
});

export default MyTrip;
