import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import fontStyles from '../../../../styles/fontStyles.js';
import { useNavigation } from '@react-navigation/native';
import color from '../../../../styles/colorPalette.js';
import FriendsList from '../../../../components/AddScheduleComponents/FriendsList.jsx';
import PeopleIcon from '../../../../assets/icons/myTrip/people.svg';
import { BlueButton, GrayButton } from '../../../../components/BasicButtons';
import { useSchedule } from '../../../../contexts/ScheduleContext';

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
  const { currentSchedule, setCurrentSchedule } = useSchedule();
  const [selectedFriends, setSelectedFriends] = useState(currentSchedule.companions || []);
  const navigation = useNavigation();

  useEffect(() => {
    setSelectedFriends(currentSchedule.companions || []);
  }, [currentSchedule.companions]);

  const handleSelectFriend = friend => {
    if (!selectedFriends.some(item => item.id === friend.id)) {
      setSelectedFriends([...selectedFriends, friend]);
    }
  };

  const handleRemoveFriend = friend => {
    setSelectedFriends(selectedFriends.filter(item => item.id !== friend.id));
  };

  const handleNextPress = () => {
    if (selectedFriends.length > 0) {
      setCurrentSchedule(prev => ({ ...prev, companions: selectedFriends }));
      navigation.navigate('AddSchImage');
    }
  };

  const handlePreviousPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.titleContainer}>
          <Text style={fontStyles.title02}>함께하는 친구들이 있나요?</Text>
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
          <Text style={[fontStyles.basicFont02, { marginVertical: 10 }]}>
            친구 {selectedFriends.length}
          </Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.friendsContainer}>
          {dummyData.map(item => (
            <FriendsList
              key={item.id}
              name={item.name}
              friend={item}
              onSelectFriend={handleSelectFriend}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          <GrayButton title="이전" onPress={handlePreviousPress} />
          <BlueButton
            title="다음"
            onPress={handleNextPress}
            disabled={selectedFriends.length === 0}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.BLUE_30,
    padding: 20,
    justifyContent: 'space-between',
    height: '100%',
  },
  main: {
    flex: 1,
  },
  titleContainer: {
    marginVertical: 20,
  },
  selectedFriendsContainer: {
    flexDirection: 'row',
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
    marginBottom: 20,
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
    paddingHorizontal: 6,
    marginRight: 6,
    alignItems: 'center',
  },
  footer: {},
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 5,
    gap: 0,
  },
});

export default AddSchWith;
