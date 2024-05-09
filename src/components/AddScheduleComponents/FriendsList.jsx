import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import fontStyles from '../../styles/fontStyles';
import PlusIcon from '../../assets/icons/myTrip/plusicon.png';
import ProfileImageExample from '../../assets/images/myTrip/profilexample.png';

const FriendsList = ({ name, friend, onSelectFriend }) => {
  return (
    <View style={styles.friendsListContainer}>
      <View>
        <Image source={ProfileImageExample} style={styles.image} />
      </View>
      <View style={styles.nameTextContainer}>
        <Text style={fontStyles.basicFont01}>{name}</Text>
      </View>
      <TouchableOpacity onPress={() => onSelectFriend(friend)} style={styles.plusIconContainer}>
        <Image source={PlusIcon} style={{ width: 26, height: 26 }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  friendsListContainer: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    marginVertical: 4,
  },
  image: {
    width: 50,
    height: 50,
  },
  nameTextContainer: {
    justifyContent: 'center',
    marginLeft: 12,
  },
  plusIconContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
  },
});

export default FriendsList;
