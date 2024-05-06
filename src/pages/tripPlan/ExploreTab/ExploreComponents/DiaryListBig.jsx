import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import ProfileExample from '../../../../assets/icons/Explore/profileexample.png';
import fontStyles from '../../../../styles/fontStyles';
import color from '../../../../styles/colorPalette';
import DiaryImageBig from '../../../../assets/icons/Explore/diaryimagebig.png';
import HeartIcon from '../../../../assets/icons/Explore/heart.png';
import HeartIconFilled from '../../../../assets/icons/Explore/heartfilled.png';
import BookmarkIcon from '../../../../assets/icons/Explore/bookmark.png';
import BookmarkIconFilled from '../../../../assets/icons/Explore/bookmarkfilled.png';

const DiaryList = () => {
  const [heartSelected, setHeartSelected] = useState(false);
  const [bookmarkSelected, setBookmarkSelected] = useState(false);

  return (
    <View style={styles.diaryListBoxBig}>
      <View style={styles.authorInfoArea}>
        <Image source={ProfileExample} style={styles.profileImage} />
        <View style={styles.authorInfo}>
          <Text style={[fontStyles.basicFont02, styles.name]}>김민주</Text>
          <Text style={[fontStyles.basicFont02, styles.time]}>오늘 14:20</Text>
        </View>
      </View>
      <View style={styles.contentArea}>
        <Text style={[fontStyles.basicFont02, styles.content]}>이번 여행도 즐거웠다!</Text>
        <Image source={DiaryImageBig} style={styles.imageExampleBig} />
      </View>
      <View style={styles.statsArea}>
        <View style={styles.statsContainer}>
          <TouchableOpacity onPress={() => setHeartSelected(!heartSelected)}>
            <Image source={heartSelected ? HeartIconFilled : HeartIcon} style={styles.icon} />
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
  );
};

const styles = StyleSheet.create({
  diaryListBoxBig: {
    padding: 20,
    borderBottomColor: color.GRAY_50, // 아랫쪽 선 색상
    borderBottomWidth: 1, // 아랫쪽 선 굵기
  },
  authorInfoArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorInfo: {
    flexDirection: 'column', // 세로 방향으로 정렬
    marginLeft: 8, // 이름과 이미지 사이 간격 조절
    gap: 4,
  },
  name: {
    alignSelf: 'flex-start', // 이름은 위로 정렬
    fontWeight: 'bold',
  },
  time: {
    alignSelf: 'flex-end', // 작성 시간은 아래로 정렬
    color: color.TEXT_SECONDARY,
  },
  profileImage: {
    width: 50,
    height: 50,
  },
  imageExampleBig: {
    width: 292,
    height: 160,
    marginTop: 4,
  },
  contentArea: {
    paddingLeft: 58,
  },
  content: {
    marginVertical: 4,
  },
  statsArea: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // 아이템들을 오른쪽으로 정렬
    marginTop: 10,
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
