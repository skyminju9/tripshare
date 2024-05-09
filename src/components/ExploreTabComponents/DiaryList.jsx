import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import HeartIcon from '../../assets/icons/Explore/heart.png';
import HeartIconFilled from '../../assets/icons/Explore/heartfilled.png';
import BookmarkIcon from '../../assets/icons/Explore/bookmark.png';
import BookmarkIconFilled from '../../assets/icons/Explore/bookmarkfilled.png';
import DiaryImage from '../../assets/icons/Explore/diaryimage.png';
import fontStyles from '../../styles/fontStyles';

const DiaryList = () => {
  const navigation = useNavigation();
  const handleDetailPress = () => {
    navigation.navigate('DiaryDetail');
  };

  const [heartSelected, setHeartSelected] = useState(false);
  const [bookmarkSelected, setBookmarkSelected] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={handleDetailPress}>
        <View style={styles.diaryListBox}>
          <Image source={DiaryImage} style={styles.imageExample} />
          <View style={styles.infoContainer}>
            <Text style={fontStyles.basicFont01}>오사카 마지막 날!</Text>
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
                    <Text style={styles.statsText1}>16</Text>
                  </View>
                  <View style={styles.statsContainer}>
                    <TouchableOpacity onPress={() => setBookmarkSelected(!bookmarkSelected)}>
                      <Image
                        source={bookmarkSelected ? BookmarkIconFilled : BookmarkIcon}
                        style={styles.icon}
                      />
                    </TouchableOpacity>
                    <Text style={styles.statsText2}>32</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  diaryListBox: {
    width: 162,
    height: 200,
    marginRight: 8,
  },
  imageExample: {
    width: 162,
    height: 130,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  infoContainer: {
    width: 161,
    height: 70,
    justifyContent: 'space-between', // 세로로 요소들 사이에 공간을 분배
    alignItems: 'flex-start', // 요소들을 위로 정렬
    padding: 8,
    borderWidth: 1,
    borderTopWidth: 0, // 상단 테두리 제거
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderColor: '#EEEEEE',
  },

  bottomArea: {
    flex: 1,
    justifyContent: 'flex-end', // 요소들을 아래로 정렬
    width: '100%', // 너비를 100%로 설정
  },
  statsArea: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // 아이템들을 오른쪽으로 정렬
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
