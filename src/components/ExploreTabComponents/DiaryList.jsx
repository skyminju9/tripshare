import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeartIcon from '../../assets/icons/Explore/heart.png';
import HeartIconFilled from '../../assets/icons/Explore/heartfilled.png';
import BookmarkIcon from '../../assets/icons/Explore/bookmark.png';
import BookmarkIconFilled from '../../assets/icons/Explore/bookmarkfilled.png';
import fontStyles from '../../styles/fontStyles';

const DiaryList = ({ data }) => {
  const navigation = useNavigation();
  const [heartSelected, setHeartSelected] = useState(false);
  const [bookmarkSelected, setBookmarkSelected] = useState(false);

  const handleDetailPress = () => {
    navigation.navigate('DiaryDetail');
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={handleDetailPress}>
      <View style={styles.diaryListBox}>
        <Image source={item.image} style={styles.imageExample} />
        <View style={styles.infoContainer}>
          <Text style={fontStyles.basicFont01}>{item.title}</Text>
          <View style={styles.bottomArea}>
            <View style={styles.statsArea}>
              <View style={styles.statsArea}>
                <View style={styles.statsContainer}>
                  <TouchableOpacity onPress={() => setHeartSelected(!heartSelected)}>
                    <Image
                      source={heartSelected ? HeartIconFilled : HeartIcon}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <Text style={styles.statsText1}>{item.heartCount}</Text>
                </View>
                <View style={styles.statsContainer}>
                  <TouchableOpacity onPress={() => setBookmarkSelected(!bookmarkSelected)}>
                    <Image
                      source={bookmarkSelected ? BookmarkIconFilled : BookmarkIcon}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <Text style={styles.statsText2}>{item.bookmarkCount}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  diaryListBox: {
    width: 162,
    height: 200,
    marginRight: 8,
  },
  imageExample: {
    width: 162,
    height: 130,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  infoContainer: {
    width: 161,
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 8,
    borderWidth: 1,
    borderTopWidth: 0,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderColor: '#EEEEEE',
  },
  bottomArea: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
  },
  statsArea: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  statsContainer: {
    flexDirection: 'row',
    marginLeft: 8,
    gap: 2,
    alignItems: 'center',
  },
  icon: {
    width: 16,
    height: 16,
  },
  statsText1: {
    color: '#FF5E5E',
    fontSize: 14,
    letterSpacing: -0.28,
  },
  statsText2: {
    color: '#0041CB',
    fontSize: 14,
    letterSpacing: -0.28,
  },
});

export default DiaryList;
