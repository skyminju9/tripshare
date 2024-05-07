import React, { useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BasicHeader from '../../../components/BasicHeader';
import fontStyles from '../../../styles/fontStyles';
import color from '../../../styles/colorPalette';
import { BlueButton, GrayButton } from '../../../components/BasicButtons';
import FriendsList from './MyTripTabComponents/FriendsList';
import PeopleIcon from '../../../assets/icons/myTrip/people.svg';

const dummyData = [
  { id: 1, name: '한서흔' },
  { id: 2, name: '우예인' },
  { id: 3, name: '오정혁' },
  { id: 4, name: '이가연' },
  { id: 5, name: '정다영' },
  { id: 6, name: '김동영' },
  { id: 7, name: '손민준' },
  { id: 8, name: '박지후' },
  { id: 9, name: '정태우' },
  { id: 10, name: '조은별' },
  { id: 11, name: '윤하은' },
  { id: 12, name: '임유리' },
  { id: 13, name: '서지안' },
  { id: 14, name: '노하람' },
];

const AddSchWith = () => {
  const [selectedFriends, setSelectedFriends] = useState([]);

  const navigation = useNavigation(); // Initialize navigation

  const handleNextPress = () => {
    navigation.navigate('AddSchImage');
  };

  const handlePreviousPress = () => {
    navigation.navigate('AddSchWhere');
  };

  const handleSelectFriend = friend => {
    if (!selectedFriends.includes(friend)) {
      setSelectedFriends([...selectedFriends, friend]);
    }
  };

  const handleRemoveFriend = friend => {
    setSelectedFriends(selectedFriends.filter(item => item.id !== friend.id));
  };

  return (
    <View style={styles.wrapper}>
      <SafeAreaView />
      <BasicHeader text="나의 여행 일정 추가" backToScreen="TripPlan" />
      <View style={styles.container}>
        <View>
          <Text style={[fontStyles.title02, { marginVertical: 20 }]}>
            함께하는 친구들이 있나요?
          </Text>
        </View>

        <View style={styles.selectedFriendsContainer}>
          <View style={{ marginRight: 12 }}>
            <PeopleIcon />
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ alignItems: 'center' }}>
            {selectedFriends.length > 0 ? (
              selectedFriends.map(friend => (
                <View key={friend.id} style={styles.tag}>
                  <Text style={[fontStyles.basicFont02, { color: color.BLUE_500 }]}>
                    {friend.name}
                  </Text>

                  <TouchableOpacity onPress={() => handleRemoveFriend(friend)}>
                    <Text
                      style={[fontStyles.basicFont02, { color: color.GRAY_300, marginLeft: 4 }]}>
                      ×
                    </Text>
                  </TouchableOpacity>
                </View>
              ))
            ) : (
              <Text style={[fontStyles.basicFont02, { color: color.GRAY_300 }]}>
                여행 멤버를 선택해보세요
              </Text>
            )}
          </ScrollView>
        </View>

        <View>
          <Text style={[fontStyles.basicFont02, { marginVertical: 8 }]}>친구 0</Text>
        </View>
        <ScrollView style={{ flex: 1, marginBottom: 80 }}>
          <View style={styles.friendsContainer}>
            {dummyData.map(item => (
              <FriendsList
                key={item.id}
                name={item.name}
                friend={item}
                onSelectFriend={handleSelectFriend}
              />
            ))}
          </View>
        </ScrollView>
        {/* <View style={styles.buttonContainer}>
          <GrayButton title="이전" onPress={handlePreviousPress} />
          <BlueButton title="다음" onPress={handleNextPress} />
        </View> */}
      </View>
      <View style={{ backgroundColor: color.BLUE_30 }}>
        <SafeAreaView />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: color.BLUE_30,
  },
  selectedFriendsContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: color.WHITE,
    borderRadius: 12,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: color.GRAY_50,
    marginBottom: 20,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  friendsContainer: {
    marginBottom: 60,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '50%',
    position: 'absolute', // 절대적 배치
    bottom: 20, // 바닥에 고정
    left: 20,
    gap: 20,
    paddingRight: 10,
  },
  addInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 250,
  },
  tag: {
    height: '100%',
    flexDirection: 'row',
    paddingVertical: 4,
    backgroundColor: color.BLUE_30,
    borderRadius: 6,
    paddingHorizontal: 6, // 좌우 여백 감소
    marginRight: 6,
    alignItems: 'center',
  },
});

export default AddSchWith;
